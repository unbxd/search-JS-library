function selectedFacetUI (selectedFacet,selectedFacetItem){
    const {
        facetName,
    } = selectedFacet;
    const  {
        name,
        count,
        dataId
    } = selectedFacetItem;
    return `<div><button 
                class="selected-facet-btn ${this.selectedFacetClass}"
                data-facet-name="${facetName}"
                data-facet-action ="deleteFacetValue"
                data-id= "${dataId}">
                ${name} (${count})
        </button><button class="${this.selectedFacetClass}" data-facet-action="deleteFacet" data-facet-name="${facetName}" > x</button></div>`
}

function facetUIElem (facet , value) {
    const {
        facetName,
    } = facet;
    const  {
        name,
        count,
        dataId
    } = value;
    return `<button
                data-facet-name="${facetName}" 
                data-facet-action="changeFacet"
                data-id= "${dataId}">
                    ${name} (${count})
            </button>`
}
function facetItemUiElem(facet, children) {
    const {
        displayName,
        facetName
    } = facet;
    return `<div id="${facetName}">
                <h3> ${displayName}</h3>
                <button data-facet-action="deleteFacet" data-facet-name="${facetName}" > clear</button>
                ${children}
            </div>`
}

export {
    selectedFacetUI,
    facetUIElem,
    facetItemUiElem
}
