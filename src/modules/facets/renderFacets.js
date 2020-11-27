export default function(){
    const {
        facet
    } = this.options;
    const {
        defaultOpen,
        applyMultipleFilters,
        isCollapsible,
        selectedFacetsEl
    } = facet;
    const {
        expandedFacets,
        lastAction
    } = this.viewState;
    if(lastAction === "updatedRangeSlider" && applyMultipleFilters) {
        return false;
    }
    const self = this;
    const allFacets = this.getAllFacets();
    const {
        facetsWrapper
    } = this;
    facetsWrapper.innerHTML = ``;
    const selectedFacets = this.getSelectedFacets();
    const selectedRanges  =this.getSelectedRanges();
    allFacets.forEach((facetItem,idx) => {
        const {
            facetType,
            facetName
        } = facetItem;
        if(typeof expandedFacets[facetName] === "undefined" && defaultOpen === "ALL") {
            expandedFacets[facetName] = true
        }
        if(defaultOpen === "FIRST" && idx == 0) {
            expandedFacets[facetName] = true
        }
        const isExpanded =  this.isExpandedFacet(facetName);
        const facetSearchTxt = this.getSearchFacetsText(facetName) || "";
        const selectedFacet = selectedFacets[facetName];
        if(facetType === "text") {
            facetsWrapper.innerHTML += this.renderTextFacet(facetItem,selectedFacet,isExpanded,facetSearchTxt);
        }
        if(facetType === "range") {
            facetsWrapper.innerHTML += this.renderRangeFacet(facetItem,isExpanded,"");
        }
        if(facetType === "category") {
            facetsWrapper.innerHTML += this.renderMultiLevelFacet(facetItem,isExpanded,facetSearchTxt);
        }
        this.viewState.facetElementMap[facetName] = facetName;
    })
    this.options.facet.onFacetLoad.bind(this)(allFacets);
};
