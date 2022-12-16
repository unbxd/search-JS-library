---
layout: default
title: Facets
parent: Configurations
nav_order: 2
---

# Facets
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Behavior

Facets are the products filters provided on your webpage  which allows customers to narrow down the search result set.

[![](https://unbxd.com/docs/wp-content/uploads/2020/05/Facets-main.png)](https://unbxd.com/docs/wp-content/uploads/2020/05/Facets-main.png)

## Types of FacetsEl

There are 3 types of Facets available.

1. Text facets
1. Range facets
1. Category facets


Each facet item requires folliwing data attributes

**data-facet-action**
This param need to be configured for triggering the user action

Available configurations are

1. deleteFacet - for deleting all the selected filters under a facet
1. changeFacet - for selecting a facet
1. clearAllFacets - this will clear all the facets
1. deleteFacetValue - for unselecting a filter

**data-facet-name**
library needs facet_name here.


**data-id**
required filter value here


## Config

To render the facets on the search results page,  you can use the “facet” config object to configure the various options.

| OPTIONS | DATATYPE | DEFAULT VALUE | DESCRIPTION |
|----------|----------|----------|----------|
| facetsEl | Element |  null | Element in which to render the facets |
| facetTemplate | Function | [default](src/modules/facets/ui.js) | Customize the look and feel of the facets block by returning your custom HTML string from this function. This function gets 3 parameters: the complete facet block, facet values, is expanded flag (in case you have chosen collapsible facets, i.e. `isCollapsible` is set to true) and the search text entered for this facet block (if `isSearchable` is set to true) |
| facetItemTemplate | Function | [default](src/modules/facets/ui.js) | Customize each individual facet value by returning your custom HTML string from this function. This function gets 3 parameters: the complete facet block, the current facet value and the search text entered for this facet block. |
| facetMultiSelect | Booelan | true | Turn this off if you want to disable the multiple selection of facets |
| facetClass | String | "UNX-facets-block" | Additional CSS class name to add to the the facet items |
| facetAction | String | "click | Event based on which to trigger facet selection / deselection: "click" or "change" |
| selectedFacetClass | String | "UNX-selected-facet-btn" | Additional CSS class name for the selected facet items |
| selectedFacetsEl | Element | null | Element in which to render the selected facets. If you don't provide this element selected facets will be rendered along with the facet blocks |
| selectedFacetTemplate | Function | [default](src/modules/facets/ui.js) | Customize the look & feel of the selected facets block by returning your custom HTML string from this function. This function gets 2 parameters: the selected facet complete block and the selected facet value |
| selectedFacetItemTemplate | Function | [default](src/modules/facets/ui.js) | Customize the look & feel of the selected facet by returning your custom HTML string from this function. This function gets 2 parameters: the selected facet complete block and the selected facet value |
| selectedFacetConfig | Object | { tagName:"DIV", htmlAttributes:{ class:"UNX-selected-facet-lb" }, events:{} } | object will be containing the configuration for the selected facet wrapper config |
| clearAllText | String | "Clear All" | The text to show for the clear all button that clears all selected facets |
| rangeTemplate | Function |  [default](src/modules/facets/renderRangeFacets.js) | Customize the look and feel of the range facets by returning your custom HTML string from this function. This function gets 1 parameter: the list of range facets available |
| rangeWidgetConfig | Object | NA | Configure the default range slider. Refer to the [Range Widget Config](#Facet-Range-Widget-Config) section below to view the detailed configs  |
| facetMultilevel | Boolean | true | Turn this on to send the multilevel parameter in the search API |
| facetMultilevelName | String | "Category" | Set the multilevel field name using this config |
| multiLevelFacetSelectorClass | String | "UNX-multilevel-facet" | Class name for each multi level facet item |
| multiLevelFacetTemplate | Function | [default](src/modules/facets/renderBucketedSearch.js) | Customize the look and feel of multi level facets by returning your custom HTML string from this function. This function gets 3 parameters: the complete facet block, selected values and the search text entered for this facet block (if `isSearchable` is set to true) |
| facetDepth | Number | 4 | Configure how many levels of category filter you want to have by setting this value |
| clearFacetsSelectorClass | String | "UNX-clear-facet" | Class name for the button to clear the selected facets |
| removeFacetsSelectorClass | String | "UNX-remove-facet" | Class name for the button to delete selected facets |
| onFacetLoad | Function | `function(facets) {}` | Callback function that gets called after each facet selection or deselection. This function gets all the facets as a parameter |
| applyMultipleFilters | false | Boolean | Turn this on if you want to apply multiple filters together |
| applyButtonText | String | "Apply" | The text to show for the apply button (when `applyMultipleFilters` is set as true) |
| clearButtonText | String | "clear" | The text to show for the clear button (when `applyMultipleFilters` is set as true) |
| isCollapsible | Boolean | true | Turn this off if you do not want to have a collapsible accordian for each facet block |
| defaultOpen | String | "ALL" | If "isCollapsible" is true, set this config to indicate the default open facet. Available options are "ALL" , "FIRST" , "NONE" |
| isSearchable | Boolean | true | Turn this on if you want to have search feature for each facet block |
| searchPlaceHolder | String | "" | Placeholder text for the facet search input |
| enableViewMore | Booelan | false | Turn this on for enabling view more or less functionality for individual facets  |
| viewMoreText | Array | ["show all", "show less"] | The text to show for the view more / less button. Pass the 2 strings in array format `[<viewMoreText>`, `viewLessText`]. Ex:  ["View more", "View less"] |
| viewMoreLimit | Number | 3 | Will show view more only if the facet values are greater than this value |
| tagName | String | "DIV" | html element for the facet wrapper. by default it is div.  |
| htmlAttributes | Object | {class:"UNX-facets-results-block"} | by default it contains classes for the wrapper. you can add more classes or any attributes |
| events | object | {} | by default it will be empty. you can add further javascript events by keys and function as values. context will be the current object. |


## Facet Range Widget Config
You can configure the range sliders by setting the “rangeWidgetConfig” object under the “facet” object. Range facets will be rendered automatically along with other facets if it is configured on the console dashboard.

[![](https://unbxd.com/docs/wp-content/uploads/2020/05/facet-price-widget.png)](https://unbxd.com/docs/wp-content/uploads/2020/05/facet-price-widget.png)

The following are the various options available for configuring the range widget

| OPTIONS | DATATYPE | DEFAULT VALUE | DESCRIPTION |
|----------|----------|----------|----------|
| minLabel | String | "" | Text for the lower end of the range slider |
| maxLabel | String | "" | Text for the higher end of the range slider |
| prefix | String | "$" | Prefix text to be added to the range widget value. Example "$" for price facet |


## Example
Sample “facet” config
```js
facet: {
    facetsEl:null,
    facetTemplate:function(facetObj, children, isExpanded,facetSearchTxt, facet) {
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
                collapsibleUI = `<button class="UNX-collapse-btn ${openBtn} ${actionBtnClass}" data-facet-name="${facetName}" data-facet-action="facetClose"></button>`
            } else {
                collapsibleUI = `<button class="UNX-collapse-btn ${closeBtn} ${actionBtnClass}" data-facet-name="${facetName}" data-facet-action="facetOpen"></button>`
            }
        }
        if(isSearchable && facetSearchTxt !== null) {
            searchInput =`<div class="UNX-searchable-facets"><input data-test-id="${this.testIds.UNX_searchFacets}" class="UNX-facet-search ${actionChangeClass}" value="${facetSearchTxt}"  data-facet-name="${facetName}" data-facet-action="searchFacets" type="text" placeholder="${searchPlaceHolder}"/></div>`
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
    },
    facetItemTemplate:function(facet , value,facetSearchTxt) {
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
        return [`<button data-test-id="${UNX_uFilter}" data-facet-name="${facetName}" data-facet-action="${action}" class="UNX-change-facet ${facetClass}" data-id="${dataId}">`,
                    `<span class="UNX-facet-text">${name}</span> <span class="UNX-facet-count">(${count})</span>`,
                `</button>`].join('');
    },
    facetMultiSelect:true,
    facetClass:"UNX-facets-block",
    facetAction:"click",

    selectedFacetClass:"UNX-selected-facet-btn",
    selectedFacetsEl:null,
    selectedFacetTemplate:function selectedFacetUI(selections, facet) {
        const {
            clearAllText,
            clearFacetsSelectorClass
        } = facet;
        if(selections.length > 0) {
            return [`<div class="UNX-facets-selections">`,
                `<h5 class="UNX-selected-facet-header">Selected Filters</h5>`,
                `<div class="UNX-selected-facets-inner">${selections}</div>`,
                `<button class="${clearFacetsSelectorClass} ${this.selectedFacetClass}" data-facet-action="clearAllFacets">${clearAllText}</button>`,
           `</div>`].join('');
        } else {
            return ``;
        }
    },
    selectedFacetItemTemplate:function selectedFacetItemTemplateUI (selectedFacet,selectedFacetItem){
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
    },
    clearAllText:"Clear All",
    rangeTemplate:function(range, selectedRange, facet) {
        const {
            facetName,
            values,
          } = range;
          let valueUI = ``;
          const {
            facetClass,
            selectedFacetClass,
            applyMultipleFilters,
            applyButtonText,
                clearButtonText,
          } = facet;
          const selected = selectedRange.length > 0 ? true :false;
          values.forEach(item =>{
              const {
                from,
                end
              } = item;
            const isSelected = this.isSelectedRange(facetName,item);
            const btnCss = (isSelected) ? `UNX-selected-facet-btn ${facetClass} ${selectedFacetClass}`:`${facetClass}`;
            valueUI +=[`<button class="${btnCss} UNX-range-facet UNX-change-facet" data-action="setRange" data-facet-name="${facetName}" data-start="${from.dataId}" data-end="${end.dataId}" >`,
                `<span class="UNX-facet-text">${from.name}  -  ${end.name}</span>`,
                `<span class="UNX-facet-count">(${from.count})</span>`,
          `</button>`].join('');
          });
          let clearBtn = ``;
            let applyBtn = ``;
            if(selected) {
                if(applyMultipleFilters) {
                    applyBtn = `<button class="UNX-default-btn ${facetClass} UNX-facet-primary" data-action="applyRange"> ${applyButtonText}</button>`;
                }
                clearBtn = `<button class="UNX-default-btn UNX-facet-clear  ${facetClass}" data-action="clearRangeFacets">${clearButtonText}</button>`;
            }
        return [`<div class="UNX-range-wrapper">`,
            valueUI,
            `<div class="UNX-price-action-row">`,
                applyBtn,clearBtn,
            `<div>`,
          `</div>`].join('')
    },
    rangeWidgetConfig: {
        "minLabel":"",
        "maxLabel":"",
        "prefix":'$'
    },

    facetMultilevel:true,
    facetMultilevelName:'Category',
    multiLevelFacetSelectorClass:'UNX-multilevel-facet',
    multiLevelFacetTemplate:function(facet,selectedCategories,facetSearchTxt, facetConfig) {
        let ui = "";
        let {
            multiLevelFacetSelectorClass,
            facetClass
        } = facetConfig;
        const {
            UNX_facetLevel
        } = this.testIds;
        if(selectedCategories) {
            selectedCategories.forEach(item => {
                const {
                    level,
                    filterField,
                    value
                } = item;
                let lTid = `data-test-id="${UNX_facetLevel}${level}"`;
                const levelCss = `${multiLevelFacetSelectorClass}  UNX-category-level-${level}`
                ui += [`<button ${lTid} data-parent="${filterField}" data-level="${level}" data-name="${value}"`,
                `class=" ${levelCss} UNX-selected-crumb ${facetClass}" data-action = "clearCategoryFilter">`,
                    `<span class="UNX-category-icon"></span><label class="UNX-facet-text">${decodeURIComponent(value)}</label>`,
                `</button>`].join('')
            })
        }
        const {
            level,
            displayName,
            values,
            filterField
        } = facet;
        let {
            multiLevelField
        } = facet;
        if (!multiLevelField) {
            multiLevelField = filterField;
        }
        let lTid = `data-test-id="${UNX_facetLevel}${level}"`;
        let levelCss = `UNX-category-level-${level}`;
        const valueUI = values.map(item => {
            const {
                name,
                count
            } = item;
            if(facetSearchTxt && facetSearchTxt.length > 0) {
                if(name.toUpperCase().indexOf(facetSearchTxt.toUpperCase()) < 0 ){
                    facetClass +=' UNX-search-hidden'
                }
            }
            return [`<button ${lTid} data-parent="${multiLevelField}" data-level="${level}"`,
                `class="${multiLevelFacetSelectorClass} ${levelCss} ${facetClass}" data-name="${name}" data-action = "setCategoryFilter">`,
                `<label class="UNX-facet-text">${name}</label><label class="UNX-facet-count">(${count})</label></button>`].join('')
        })
        ui += `<div class="UNX-category-values">${valueUI.join('')}</div>`
        if(ui !== "") {
            return [`<div class="UNX-multi-facet-wrap">`,
                `${ui}</div>`].join('')

        } else {
            return "";
        }
    },
    facetDepth:4,
    clearFacetsSelectorClass:'UNX-clear-facet',
    removeFacetsSelectorClass:'UNX-remove-facet',
    onFacetLoad:function(facets){
    },

    applyMultipleFilters:false,
    applyButtonText:"Apply",
    clearButtonText:"clear",


    isCollapsible:true,
    isSearchable:true,
    searchPlaceHolder:"",
    textFacetWrapper:"UNX-facets-item",
    defaultOpen:"ALL",
    enableViewMore:false,
    viewMoreText:["show all", "show less"],
    viewMoreLimit:3,
}
```
