import {
    findChangedFacet
} from './findChangedFacet';
import renderFacets from "./renderFacets";
import renderTextFacet from "./renderTextFacet";
import renderSelectedFacets from "./renderSelectedFacets";
import renderMultiLevelFacet from "./renderMultiLevelFacet";
import renderRangeFacet from "./renderRangeFacet";


const isSelectedRange = function(facetName,range){
    const selections = this.getSelectedRanges(facetName);
    const {
        from,
        end
    } = range;
    const aR = `[${from.name} TO ${end.name}]`
    if(selections && selections.indexOf(aR) >= 0) {
        return true
    }
    return false;  
}
const clearAllFacets = function() {
    this.state.selectedFacets = {};
    this.state.rangeFacet = [];
    this.state.categoryFilter = {};
}
const isExpandedFacet = function(facetName){
    const {
        expandedFacets = {}
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
        facetClass = ""
    } = this.options.facet;
    const facetSearchTxt = this.getSearchFacetsText(facetName) || "";
    const items = document.querySelectorAll(`.${facetName} .${facetClass}`) || [];
    items.forEach(item => {
        const {
            id
        } = item.dataset || {};
        if(id && id.toUpperCase().indexOf(facetSearchTxt.toUpperCase()) >= 0) {
            item.classList.remove("UNX-search-hidden")
        } else {
            item.classList.add("UNX-search-hidden")
        }
    })
}


const setRangeSlider = function(value = {}) {
    this.setRangeFacet(value)
    const {
        facetName,
    } = value;
    this.getCallbackActions({
        facetName,
        facetAction:'changeFacet',
        id: facetName
    },'facetClick');
    this.viewState.lastAction = "updatedRangeSlider";
    this.setPageStart(0);
    this.applyRangeFacet();
}

const checkFacets = function() {
    const {
        applyMultipleFilters
    } = this.options.facet;
    if(applyMultipleFilters){
        const qS = this.getStateFromUrl() || {};

        const {
            selectedFacets = {},
            selectedRanges
        } = qS;
        this.state.selectedFacets = selectedFacets;
        this.state.selectedRanges = selectedRanges;
    }
}


/* eslint-disable no-unused-vars */
const setFacets = (prototype) => {
    prototype = Object.assign(prototype,{
        findChangedFacet,
        isSelectedRange,
        clearAllFacets,
        isExpandedFacet,
        setSearchFacetsText,
        getSearchFacetsText,
        reRenderTextFacet,
        renderTextFacet,
        renderRangeFacet,
        renderMultiLevelFacet,
        renderFacets,
        renderSelectedFacets,
        checkFacets,
        setRangeSlider
    })
};
/* eslint-disable no-unused-vars */

export {
    setFacets as default,
    findChangedFacet,
    clearAllFacets,
    isExpandedFacet,
    setSearchFacetsText,
    getSearchFacetsText,
    reRenderTextFacet,
    renderTextFacet,
    renderRangeFacet,
    renderMultiLevelFacet,
    renderFacets,
    renderSelectedFacets,
    checkFacets,
    setRangeSlider
};
