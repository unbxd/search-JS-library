
function selectedFacetItemTemplateUI (selectedFacet,selectedFacetItem,facetConfig,selectedFacetsConfig){
    const {
        facetName,
        facetType
    } = selectedFacet;
    const  {
        name,
        count,
        dataId
    } = selectedFacetItem;
    const {
        facetClass,
        selectedFacetClass,
        removeFacetsSelectorClass
    } = this.options.facet;
    const {
        UNX_uFilter
    } = this.testIds;
    let action = "deleteSelectedFacetValue"
    if(facetType === "range") {
        action = "deleteSelectedRange"
    }
    const css = ` ${facetClass} ${selectedFacetClass} `;
    return [`<div class="UNX-selected-facets-wrap">`,
                `<button data-test-id="${UNX_uFilter}" class="UNX-selected-facet-btn UNX-change-facet ${css}" data-facet-name="${facetName}" data-facet-action="${action}" data-id="${dataId}">`,
                    `<span class="UNX-facet-text">${decodeURIComponent(name)}</span> <span class="UNX-facet-count">(${count})</span>`,
                `</button>`,
                `<button class="UNX-delete-facet ${removeFacetsSelectorClass} ${css}" data-id="${dataId}" data-facet-action="${action}" data-facet-name="${facetName}">x</button></div>`
            ].join('');
}
function selectedFacetUI(selections, facet,selectedFacetsConfig) {
    const {
        clearAllText,
        clearFacetsSelectorClass
    } = facet;
    const selectedFClass = (this.selectedFacetClass)?this.selectedFacetClass:selectedFacetsConfig.selectedFacetClass;
    if(selections.length > 0) {
        return [`<div class="UNX-facets-selections">`,
            `<h5 class="UNX-selected-facet-header">Selected Filters</h5>`,
            `<div class="UNX-selected-facets-inner">${selections}</div>`,
            `<button class="${clearFacetsSelectorClass} ${selectedFClass}" data-facet-action="clearAllFacets">${clearAllText}</button>`,
       `</div>`].join('');
    } else {
        return ``;
    }
}

function facetItemUiElem (facet , value,facetSearchTxt) {
    const {
        facetName,
        isSelected
    } = facet;
    const  {
        name,
        count,
        dataId
    } = value;
    let {
        facetClass,
        selectedFacetClass
    } = this.options.facet;
    const {
        UNX_uFilter
    } = this.testIds;
    if(facetSearchTxt && facetSearchTxt.length > 0) {
        if(name.toUpperCase().indexOf(facetSearchTxt.toUpperCase()) < 0 ){
            facetClass +=' UNX-search-hidden'
        }
    }
    let action =  "changeFacet";
    if(isSelected) {
        facetClass += ` ${selectedFacetClass}`
        action = "deleteFacetValue";
    }
    return [`<button data-facet-type="text" data-test-id="${UNX_uFilter}" data-facet-name="${facetName}" data-facet-action="${action}" class="UNX-change-facet ${facetClass}" data-id="${dataId}">`,
                `<span class="UNX-facet-text">${name}</span> <span class="UNX-facet-count">(${count})</span>`,
            `</button>`].join('');
}


function facetUIElem (facetObj, children, isExpanded,facetSearchTxt, facet) {
    const {
        displayName,
        facetName,
        multiLevelField,
        facetType,
        values
    } = facetObj;
    const {
        facetClass,
        applyMultipleFilters,
        isCollapsible,
        isSearchable,
        searchPlaceHolder,
        textFacetWrapper,
        enableViewMore,
        viewMoreText,
        viewMoreLimit,

        applyButtonText,
        clearButtonText,

    } = facet;
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
    if(enableViewMore && facetType==="text" && values.length > viewMoreLimit ) {
        viewMoreCss="UNX-view-more";
        viewMoreUi = `<div class="UNX-view-more-row "><button class="${actionBtnClass}" data-facet-name="${facetName}" data-action="viewMore" data-id="${viewMoreText[0]}">${viewMoreText[0]}</button></div>`;
    }
    let clearUI = ``;
    let applyBtn = ``;
    if(isFtr){
        clearUI = `<button class="UNX-facet-clear ${facetClass} "data-facet-action="deleteFacet" data-facet-name="${facetName}">${clearButtonText}</button>`;
    }
    if(applyMultipleFilters && isFtr) {
        applyBtn = `<button class="UNX-facet-primary ${facetClass} "data-facet-action="applyFacets" >${applyButtonText}</button>`
    }
    let collapsibleUI = ``;
    let searchInput = ``;
    if(isCollapsible){
        if(isExpanded) {
            collapsibleUI = `<div class="UNX-facet-header ${actionBtnClass} UNX-facet-open"  data-facet-name="${facetName}" data-facet-action="facetClose"> <h3>${displayName}</h3> </div>`;
        } else {
            collapsibleUI = `<div class="UNX-facet-header ${actionBtnClass} UNX-facet-close"  data-facet-name="${facetName}" data-facet-action="facetOpen"> <h3>${displayName}</h3></div>`;
        }
    }
    if(isSearchable && facetSearchTxt !== null) {
        searchInput =`<div class="UNX-searchable-facets"><label class="UNX-hidden" for="${facetName}_searchBox">${searchPlaceHolder}</label><input  id="${facetName}_searchBox" name="${facetName}_searchBox" data-test-id="${this.testIds.UNX_searchFacets}" class="UNX-facet-search ${actionChangeClass}" value="${facetSearchTxt}"  data-facet-name="${facetName}" data-facet-action="searchFacets" type="text" placeholder="${searchPlaceHolder}"/></div>`
    }
    return [`<div class="UNX-text-facet-wrap">`,
                collapsibleUI,
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
