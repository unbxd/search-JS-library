import renderTextFacets from './index';
import {
    findChangedFacet,
    onClickRangeFacet,
    onBucketedFacet
} from './actions';
function renderRangeFacets() {
    const rangeFacets = this.getRanges();
    const selectedRanges = this.state.rangeFacet;
    if(rangeFacets.length > 0) {
        return this.options.facet.rangeTemplate.bind(this)(rangeFacets,selectedRanges);
    } else {
        return ``;
    }
}
function setRangeFilter(data){
    this.setRangeFacet(data)
}
function renderBucketedUI() {
    const bucketedFacets = this.getBucketedFacets();
    const breadCrumb = this.getBreadCrumbsList();
    let bucketedUi = ``;
    const {
        multiLevelFacetSelector
    } = this.options.facet;
    const self = this;
    bucketedFacets.forEach(facet => {
        const {
            displayName,
            values,
            facetName,
        } = facet;
        const isExpanded =  self.isExpandedFacet(facetName);
        const facetSearchTxt = self.getSearchFacetsText(facetName);
        const valueUI = self.options.facet.multiLevelFacetTemplate.bind(this)(facet,breadCrumb);
        bucketedUi += self.options.facet.facetTemplate.bind(self)(facet, valueUI,isExpanded,facetSearchTxt);
    });
    return bucketedUi;
    //return this.options.facet.multiLevelFacetTemplate.bind(this)(bucketedFacet,breadCrumb);
}
const isSelectedRange = function(facetName,range){
    const selections = this.getSelectedRanges(facetName);
    const {
        from,
        to
    } = range;
    const aR = `[${from.name} TO ${to.name}]`
    if(selections && selections.indexOf(aR) >= 0) {
        return true
    }
    return false;  
}
const clearAllFacets = function() {
    this.state.selectedFacets = {};
    this.state.rangeFacet = [];
    this.state.categoryFilter = {};
    this.renderRangeFacets();
}
const isExpandedFacet = function(facetName){
    const {
        expandedFacets
    } = this.viewState;
    let isFound = false;
    if(expandedFacets[facetName] === true) {
        isFound = true
    }
    return isFound;
}
const setSearchFacetsText = function(facet,value) {
    this.viewState.searchFacetsText[facet] = value;
    this.reRenderTextFacet(facet);
}
const getSearchFacetsText = function(facet) {
    return this.viewState.searchFacetsText[facet] || "";
}

const reRenderTextFacet = function(facetName) {
    const {
        textFacetWrapper
    } = this.options.facet;
    const textFacet = this.getAFacetByName(facetName);
    const textUi = this.renderTextFacets(textFacet, this.getSelectedFacets(), true);
    document.querySelector(`#${facetName} .${textFacetWrapper}`).innerHTML = Array.isArray(textUi) ? textUi.join(""):textUi;
}
const getAFacetByName = function(name) {
    const facets = this.getFacets();
    let selected = [];
    if(name) {
        selected = facets.filter(item => {
            const {
                facetName
            } = item;
            return facetName === name
        })
    }
    return selected;
}
const getAllFacets = function() {
    const text = this.getFacets();
    const ranges = this.getRangeFacets();
    const multiFacets = this.getBucketedFacets();
    return [...multiFacets,...text,...ranges];
}


const setFacets = (prototype) => {
    prototype = Object.assign(prototype,{
        renderTextFacets,
        findChangedFacet,
        onClickRangeFacet,
        renderRangeFacets,
        setRangeFilter,
        renderBucketedUI,
        onBucketedFacet,
        isSelectedRange,
        clearAllFacets,
        isExpandedFacet,
        setSearchFacetsText,
        getSearchFacetsText,
        reRenderTextFacet,
        getAFacetByName,
        getAllFacets
    })
};

export {
    setFacets as default,
    renderTextFacets,
    findChangedFacet,
    onClickRangeFacet,
    renderRangeFacets,
    setRangeFilter,
    renderBucketedUI,
    onBucketedFacet,
    clearAllFacets,
    isExpandedFacet,
    setSearchFacetsText,
    getSearchFacetsText,
    reRenderTextFacet,
    getAFacetByName,
    getAllFacets
};
