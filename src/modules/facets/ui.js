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
        facetName,
        multiLevelField,
        facetType,
        values
    } = facet;
    const {
        facetClass,
        applyMultipleFilters,
        isCollapsible,
        isSearchable,
        searchPlaceHolder,
        textFacetWrapper,
        viewMore,
        viewMoreTxt,
        viewMoreLimit
    } = this.options.facet;
    const {
        actionBtnClass,
        actionChangeClass
    } = this.options;
    const {
        openBtn,
        closeBtn
    } = this.cssList;
    let viewMoreUi = ``;
    let viewMoreCss=``;
    const selected = this.getSelectedFacets()[facetName];
    const isFtr = (selected && selected.length >0)?true:false;
    if(viewMore && facetType==="text" && values.length > viewMoreLimit ) {
        viewMoreCss="UNX-view-more";
        viewMoreUi = `<div class="view-more-row"><button class="${actionBtnClass}" data-facet-name="${facetName}" data-action="viewMore" data-id="${viewMoreTxt[0]}">${viewMoreTxt[0]}</button></div>`;
    }
    let clearUI = ``;
    let applyBtn = ``;
    if(isFtr){
        clearUI = `<button class="UNX-facet-clear ${facetClass} "data-facet-action="deleteFacet" data-facet-name="${facetName}">clear</button>`;
    }
    if(applyMultipleFilters && isFtr) {
        applyBtn = `<button class="UNX-facet-primary ${facetClass} "data-facet-action="applyFacets" >Apply</button>`
    }
    let collapsibleUI = ``;
    let searchInput = ``;
    if(isCollapsible){
        if(isExpanded) {
            collapsibleUI = `<button class="UNX-collapse-btn ${openBtn} ${actionBtnClass}" data-facet-name="${facetName}" data-facet-action="facetClose"></button>`
        } else {
            collapsibleUI = `<button class="UNX-collapse-btn ${closeBtn} ${actionBtnClass}" data-facet-name="${facetName}" data-facet-action="facetOpen"></button>`
        }
    }
    if(isSearchable && facetSearchTxt !== null) {
        searchInput =`<div class="UNX-searchable-facets"><input class="UNX-facet-search ${actionChangeClass}" value="${facetSearchTxt}"  data-facet-name="${facetName}" data-facet-action="searchFacets" type="text" placeholder="${searchPlaceHolder}"/></div>`
    }
    return [`<div class="UNX-text-facet-wrap">`,
                `<div class="UNX-facet-header"> <h3>${displayName}</h3> ${collapsibleUI}</div>`,
                `<div class="UNX-facets-all">`,
                    searchInput,
                    `<div class="UNX-facets ${textFacetWrapper} ${viewMoreCss}">${children}</div>`,
                    viewMoreUi,
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
