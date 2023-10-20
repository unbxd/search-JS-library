
const trackSearch = function(value){
    window.Unbxd.track(
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
    window.Unbxd.track(
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
    const  {
        productType
    } = this.options;
    const {
        products
    } = results;
    let obj = { 
        'pids_list' : []
    };
    
    if(products) {
        let pids = [];
        products.forEach(product => {
            const {
                sku,
                uniqueId
            } = product
            const pid = uniqueId || sku;
            pids.push(pid)
        });
        obj['pids_list'] = pids;
        if(productType ==="SEARCH") {
            obj['query'] = query;
            window.Unbxd.track('search_impression',obj);  
        } else if(productType ==="CATEGORY" || productType ==="BROWSE") {
            if(window.UnbxdAnalyticsConf){
                obj['page'] = window.UnbxdAnalyticsConf.page || "";
                obj['page_type'] = window.UnbxdAnalyticsConf.page_type || "";
            }
            window.Unbxd.track('browse_impression',obj);  
        }
    }
}
const trackFacetClick = function(){
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
        // const val =rangeFacetsArr[facet];
        const val = rangeFacets[facet][0];
        if(val) {
            const modifiedVal = val.replace(/\[|\]/g,'').split(',');
            facetArr[facet] = modifiedVal;
        }
    });
    categoryArr.forEach(category => {
        const val =categoryField[category];
        const original = val.join('>');
        facetArr[category] = original;
    })
    const query = this.getSearchQuery();
    window.Unbxd.track('facets', {'query':query,'facets':facetArr});
}
const trackCategoryPageLoad = function() {
    if(window.UnbxdAnalyticsConf){
        //window.UnbxdAnalyticsConf["page_type"] ="CATEGORY_PATH";
        window.Unbxd.track("categoryPage", window.UnbxdAnalyticsConf);
    }
}
const getCallbackActions = function(state,type) {
    const Unbxd = window.Unbxd || null;
    const {
        unbxdAnalytics
    } = this.options;
    if(!Unbxd || !unbxdAnalytics || (Unbxd && !Unbxd.track)) {
        return false;
    }
    if(state){
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
            case 'categoryPage':
                this.trackCategoryPageLoad(state,type);
                break;
        }
    }
}

/* eslint-disable no-unused-vars */
const setAnalytics = (prototype) => {
    prototype = Object.assign(prototype,{
        trackSearch,
        getCallbackActions,
        trackProductClick,
        trackImpression,
        trackFacetClick,
        trackCategoryPageLoad
    })
}
/* eslint-disable no-unused-vars */

export {
    setAnalytics as default,
    trackSearch,
    getCallbackActions,
    trackProductClick,
    trackImpression,
    trackFacetClick,
    trackCategoryPageLoad
};