
const trackSearch = function(value){
    Unbxd.track(
        "search",
        { 
            "query" : value
        }
    );  
};
const trackProductClick = function(value){
    const {
        uniqueId,
        sku,
        prank
    } = value;
    Unbxd.track(
        "click",
        { 
            "pid" : uniqueId || sku ,
            "prank" : prank ,
            "requestId" : null
        })  
};
const trackImpression = function(){
    const results = this.getSearchResults();
    const query = this.getSearchQuery();
    const {
        products
    } = results;
    if(products) {
        let pids = [];
        products.forEach(product => {
            const {
                sku,
                uniqueId
            } = product
            const pid = sku || uniqueId;
            pids.push(pid)
        });
        Unbxd.track('search_impression', { 
            'query' : query,
            'pids_list' : pids
        });  
    }
}
const trackFacetClick = function(state,type){
    const textFacets = this.getSelectedFacets();
    const rangeFacets = this.state.rangeFacet;
    const categoryField = this.state.categoryFilter;
    const textFacetsArr = Object.keys(textFacets);
    const rangeFacetsArr = Object.keys(rangeFacets);
    const categoryArr = Object.keys(categoryField);
    let facetArr ={};
    textFacetsArr.forEach((facet) =>{
        const valObj =textFacets[facet];
        let arr = [];
        valObj.forEach((val) => {
            arr.push(val.name)
        });
        facetArr[facet] = arr;
    });
    rangeFacetsArr.forEach((facet) =>{
        const val =rangeFacetsArr[facet];
        facetArr[facet] = val;
    });
    categoryArr.forEach(category => {
        const val =categoryField[category];
        const original = val.join('>');
        facetArr[category] = original;
    })
    const query = this.getSearchQuery();
    Unbxd.track('facets', {'query':query,'facets':facetArr});
}
const getCallbackActions = function(state,type) {
    const Unbxd = window.Unbxd || null;
    if(Unbxd && state){
        switch(type) {
            case 'CHANGE_INPUT':
                this.trackSearch(state);
            break;
            case 'click':
                this.trackProductClick(state);
            break;
            case 'AFTER_API_CALL':
                this.trackImpression();
            break;
            case 'facetClick':
                this.trackFacetClick(state,type);
            break;
        }
    }
}


const setAnalytics = (prototype) => {
    prototype = Object.assign(prototype,{
        trackSearch,
        getCallbackActions,
        trackProductClick,
        trackImpression,
        trackFacetClick
    })
}

export {
    setAnalytics as default,
    trackSearch,
    getCallbackActions,
    trackProductClick,
    trackImpression,
    trackFacetClick
};