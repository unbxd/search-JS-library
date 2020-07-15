function selectedFacetUI (selectedFacet,selectedFacetItem){
    const {
        facetName,
    } = selectedFacet;
    const  {
        name,
        count,
        dataId
    } = selectedFacetItem;
    const {
        facetClass,
        selectedFacetClass
    } = this.options.facet;
    return `<div class="UNX-selected-facets-wrap "><button 
                class="UNX-selected-facet-btn ${facetClass} UNX-change-facet ${selectedFacetClass}"
                data-facet-name="${facetName}"
                data-facet-action ="deleteFacetValue"
                data-id= "${dataId}">
                <span class="UNX-facet-text">${name}</span> <span class="UNX-facet-count">(${count})</span>
        </button>
        <button
            class="${facetClass} UNX-delete-facet ${selectedFacetClass}"
            data-id= "${dataId}" data-facet-action="deleteFacetValue"
            data-facet-name="${facetName}" > x</button>
        </div>`
}
function selectedFacetItemTemplateUI(selections) {
    if(selections.length > 0) {
        return `<div class="UNX-facets-selections">
            <h5 class="UNX-selected-facet-header">Selected Filters</h5>
            <div class="UNX-selected-facets-inner">${selections}</div>
            <button class="UNX-clear-facet ${this.selectedFacetClass}" data-facet-action="clearAllFacets">clear all</button>
        </div>`
    } else {
        return ``;
    }
    
}

function facetItemUiElem (facet , value) {
    const {
        facetName,
    } = facet;
    const  {
        name,
        count,
        dataId
    } = value;
    const {
        facetClass
    } = this.options.facet;
    return `<button
                data-facet-name="${facetName}" 
                data-facet-action="changeFacet"
                class="UNX-change-facet ${facetClass}"
                data-id= "${dataId}">
                    <span class="UNX-facet-text">${name}</span> <span class="UNX-facet-count">(${count})</span>
            </button>`
}


function facetUIElem (facet, children) {
    const {
        displayName,
        facetName
    } = facet;
    const {
        facetClass
    } = this.options.facet;
    const selected = this.getSelectedFacets()[facetName];
    let clearUI = ``;
    if(selected){
        clearUI = `<button class="UNX-facet-clear ${facetClass} "data-facet-action="deleteFacet" data-facet-name="${facetName}" > clear</button>`;
    }
    return `<div id="${facetName}"><h3 class="UNX-facet-header"> ${displayName}</h3>
                <div class="UNX-facets">${children}</div>
                <div class="UNX-facet-footer">${clearUI}</div>
            </div>`
}

export {
    selectedFacetUI,
    facetUIElem,
    facetItemUiElem,
    selectedFacetItemTemplateUI
};
