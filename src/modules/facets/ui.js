function selectedFacetUI (selectedFacet,selectedFacetItem){
    const {
        facetName,
    } = selectedFacet;
    const  {
        name,
        count,
        dataId
    } = selectedFacetItem;
    return `<option 
                selected
                data-facet-name="${facetName}"
                data-facet-action="deleteFacetValue"
                data-id= "${dataId}">
                ${name} (${count})
        </option>`
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
    return `<option
                data-facet-name="${facetName}" 
                data-facet-action="CHANGE_FACET"
                class="${this.selectedFacetClass}"
                data-id= "${dataId}">
                    ${name} (${count})
            </option>`
}
function facetUIElem(facet, children) {
    const {
        displayName,
        facetName
    } = facet;
    const {
        facetClass
    } = this.options.facet;
    return `<select class="${facetClass}" multiple id="${facetName}">
                <option 
                    data-facet-action="deleteFacet"
                    data-facet-name="${facetName}" >
                        ${displayName}
                        </option>
                ${children}
            </select>`
}

export {
    selectedFacetUI,
    facetUIElem,
    facetItemUiElem
};
