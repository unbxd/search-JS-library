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

function facetUIElem (facet , value) {
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
                data-facet-action="changeFacet"
                class="${this.options.selectedFacetClass}"
                data-id= "${dataId}">
                    ${name} (${count})
            </option>`
}
function facetItemUiElem(facet, children) {
    const {
        displayName,
        facetName
    } = facet;
    return `<select multiple id="${facetName}">
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
}