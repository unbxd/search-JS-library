function selectedFacetUI (selectedFacet,selectedFacetItem,facetSearchTxt){
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
    const css = ` ${facetClass} ${selectedFacetClass} `;
    return [`<div class="UNX-selected-facets-wrap">`,
                `<button class="UNX-selected-facet-btn UNX-change-facet ${css}" data-facet-name="${facetName}" data-facet-action="deleteFacetValue" data-id="${dataId}">`,
                    `<span class="UNX-facet-text">${decodeURIComponent(name)}</span> <span class="UNX-facet-count">(${count})</span>`,
                `</button>`,
                `<button class="UNX-delete-facet ${css}" data-id="${dataId}" data-facet-action="deleteFacetValue" data-facet-name="${facetName}">x</button></div>`
            ].join('');
}
function selectedFacetItemTemplateUI(selections) {
    if(selections.length > 0) {
        return [`<div class="UNX-facets-selections">`,
            `<h5 class="UNX-selected-facet-header">Selected Filters</h5>`,
            `<div class="UNX-selected-facets-inner">${selections}</div>`,
            `<button class="UNX-clear-facet ${this.selectedFacetClass}" data-facet-action="clearAllFacets">clear all</button>`,
       `</div>`].join('');
    } else {
        return ``;
    }
}

function facetItemUiElem (facet , value,facetSearchTxt) {
    const {
        facetName,
    } = facet;
    const  {
        name,
        count,
        dataId
    } = value;
    let {
        facetClass
    } = this.options.facet;
    if(facetSearchTxt && facetSearchTxt.length > 0) {
        if(name.toUpperCase().indexOf(facetSearchTxt.toUpperCase()) < 0 ){
            facetClass +=' UNX-search-hidden'
        }
    }
    return [`<button data-facet-name="${facetName}" data-facet-action="changeFacet" class="UNX-change-facet ${facetClass}" data-id="${dataId}">`,
                `<span class="UNX-facet-text">${name}</span> <span class="UNX-facet-count">(${count})</span>`,
            `</button>`].join('');
}


function facetUIElem (facet, children, isExpanded,facetSearchTxt) {
    const {
        displayName,
        facetName
    } = facet;
    const {
        facetClass,
        applyMultipleFilters,
        isCollapsible,
        isSearchable,
        searchPlaceHolder,
        textFacetWrapper
    } = this.options.facet;
    const {
        actionBtnClass,
        actionChangeClass
    } = this.options;
    const selected = this.getSelectedFacets()[facetName];
    const isFtr = (selected && selected.length >0)?true:false;
    let clearUI = ``;
    let applyBtn = ``;
    if(isFtr){
        clearUI = `<button class="UNX-facet-clear ${facetClass} "data-facet-action="deleteFacet" data-facet-name="${facetName}">clear</button>`;
    }
    if(applyMultipleFilters && isFtr) {
        applyBtn = `<button class="UNX-facet-primary ${facetClass} "data-facet-action="applyFacets" >Apply</button>`
    }
    let collapsibleUI = ``;
    let collapseCss = ``;
    let searchInput = ``
    if(isCollapsible){
        if(isExpanded) {
            collapseCss = `UNX-facets-open`
            collapsibleUI = `<button class="UNX-collapse-btn UNX-facet-open ${actionBtnClass}" data-facet-name="${facetName}" data-facet-action="facetClose"></button>`
        } else {
            collapseCss = `UNX-facets-close`
            collapsibleUI = `<button class="UNX-collapse-btn UNX-facet-close ${actionBtnClass}" data-facet-name="${facetName}" data-facet-action="facetOpen"></button>`
        }
    }
    if(isSearchable) {
        searchInput =`<div class="UNX-searchable-facets"><input class="UNX-facet-search ${actionChangeClass}" value="${facetSearchTxt}"  data-facet-name="${facetName}" data-facet-action="searchFacets" type="text" placeholder="${searchPlaceHolder}"/></div>`
    }
    return [`<div class="UNX-text-facet-wrap" id="${facetName}">`,
                `<div class="UNX-facet-header"> <h3>${displayName}</h3> ${collapsibleUI}</div>`,
                `<div class="UNX-facets-all ${collapseCss}">`,
                    searchInput,
                    `<div class="UNX-facets ${textFacetWrapper}">${children}</div>`,
                    `<div class="UNX-facet-footer">${applyBtn} ${clearUI}</div>`,
                `</div>`,
           `</div>`].join('');
}

export {
    selectedFacetUI,
    facetUIElem,
    facetItemUiElem,
    selectedFacetItemTemplateUI
};
