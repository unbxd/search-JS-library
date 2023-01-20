---
layout: default
title: Facets
parent: Configurations
nav_order: 5
---

# Facets
{: .no_toc }

# Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

# Definition

In e-commerce, facets (also known as filters or attributes) are a way to allow customers to narrow down their search results by selecting specific criteria. Facets are typically displayed on the left or right side of a search results page, and can include options such as price range, brand, color, size, and more. They allow customers to quickly and easily find the products they are looking for by narrowing down the options based on their specific needs and preferences.

For example, an e-commerce website for clothing would have facets such as Size, Color, Material, Brand, Gender and so on. By selecting options from the available facets, customers can narrow down the search results to only show products that match the criteria they've selected. This can make it easier for customers to find the specific products they're looking for, and can also increase the chances that they'll make a purchase.

# Behavior

Facets are the products filters provided on your webpage which allows customers to narrow down the search result set.

[![](https://unbxd.com/docs/wp-content/uploads/2020/05/Facets-main.png)](https://unbxd.com/docs/wp-content/uploads/2020/05/Facets-main.png)

# Types of Facets

There are 3 types of Facets available.

## Text facets
This feature enables faceting on any searchable field.

## Range facets
This feature is applicable for all numeric searchable fields.

## Multilevel facets
Multilevel facets are a special kind of facets which is applicable only for the fields belonging to the path fieldType supporting the hierarchy returns the facet values in the hierarchial.

# Configurations

To render the facets on the search results page,  you can use the “facet” config object to configure the various options.

## facetsEl
{: .d-inline-block }

Element
{: .label }

Element in which to render the facets.

### Default Value
{: .no_toc }
null

### Usecases
{: .no_toc }

## facetTemplate
{: .d-inline-block }

Function
{: .label }

Customize the look and feel of the facets block by returning your custom HTML string from this function. This function gets 3 parameters: the complete facet block, facet values, is expanded flag (in case you have chosen collapsible facets, i.e. isCollapsible is set to true) and the search text entered for this facet block (if isSearchable is set to true).

### Default Value
{: .no_toc }
``` js
function(facetObj, children, isExpanded,facetSearchTxt, facet) {
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
    }
```

### Usecases
{: .no_toc }
## facetItemTemplate
{: .d-inline-block }

Function
{: .label }

Customize each individual facet value by returning your custom HTML string from this function. This function gets 3 parameters: the complete facet block, the current facet value and the search text entered for this facet block.

### Default Value
{: .no_toc }
```js
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
    return [`<button data-test-id="${UNX_uFilter}" data-facet-name="${facetName}" data-facet-action="${action}" class="UNX-change-facet ${facetClass}" data-id="${dataId}">`,
                `<span class="UNX-facet-text">${name}</span> <span class="UNX-facet-count">(${count})</span>`,
            `</button>`].join('');
}
```

### Usecases
{: .no_toc }
true, false

## facetMultiSelect
{: .d-inline-block }

Booelan
{: .label }

Turn this off if you want to disable the multiple selection of facets.

### Default Value
{: .no_toc }
true

### Usecases
{: .no_toc }
true, false

## facetClass
{: .d-inline-block }

String
{: .label }

Additional CSS class name to add to the the facet items.

### Default Value
{: .no_toc }
“UNX-facets-block”

### Usecases
{: .no_toc }


## facetAction
{: .d-inline-block }

String
{: .label }

Event based on which to trigger facet selection / deselection: “click” or “change”.

### Default Value
{: .no_toc }
“click"

### Usecases
{: .no_toc }

## selectedFacetClass
{: .d-inline-block }

String
{: .label }

Additional CSS class name for the selected facet items.
### Default Value
{: .no_toc }
“UNX-selected-facet-btn"

### Usecases
{: .no_toc }


## selectedFacetsEl
{: .d-inline-block }

Element
{: .label }

Element in which to render the selected facets. If you don’t provide this element selected facets will be rendered along with the facet blocks.

### Default Value
{: .no_toc }
null	

### Usecases
{: .no_toc }

## selectedFacetTemplate
{: .d-inline-block }

Function
{: .label }

Customize the look & feel of the selected facets block by returning your custom HTML string from this function. This function gets 2 parameters: the selected facet complete block and the selected facet value.

### Default Value
{: .no_toc }
```js
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
```

### Usecases
{: .no_toc }


## selectedFacetItemTemplate
{: .d-inline-block }

Function
{: .label }

Customize the look & feel of the selected facet by returning your custom HTML string from this function. This function gets 2 parameters: the selected facet complete block and the selected facet value.

### Default Value
{: .no_toc }
```js
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
                    `<span class="UNX-facet-text">${name}</span> <span class="UNX-facet-count">(${count})</span>`,
                `</button>`,
                `<button class="UNX-delete-facet ${removeFacetsSelectorClass} ${css}" data-id="${dataId}" data-facet-action="${action}" data-facet-name="${facetName}">x</button></div>`
            ].join('');
}
```

### Usecases
{: .no_toc }

## selectedFacetConfig
{: .d-inline-block }

Object
{: .label }

object will be containing the configuration for the selected facet wrapper config.

### Default Value
{: .no_toc }
``` js
    { tagName:”DIV”, htmlAttributes:{ class:”UNX-selected-facet-lb” }, events:{} }
```

### Usecases
{: .no_toc }

## clearAllText
{: .d-inline-block }

String
{: .label }

The text to show for the clear all button that clears all selected facets.

### Default Value
{: .no_toc }
“Clear All”

### Usecases
{: .no_toc }


## rangeTemplate
{: .d-inline-block }

Function
{: .label }

Customize the look and feel of the range facets by returning your custom HTML string from this function. This function gets 1 parameter: the list of range facets available.

### Default Value
{: .no_toc }
```js
function(range, selectedRange, facet) {
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
};
```

### Usecases
{: .no_toc }

## rangeWidgetConfig
{: .d-inline-block }

Object
{: .label }

Configure the default range slider. Refer to the [Range Widget Config](#Facet-Range-Widget-Config) section below to view the detailed configs

### Default Value
{: .no_toc }
NA

### Usecases
{: .no_toc }

## facetMultilevel
{: .d-inline-block }

Boolean
{: .label }

Turn this on to send the multilevel parameter in the search API.

### Default Value
{: .no_toc }
true

### Usecases
{: .no_toc }

## facetMultilevelName
{: .d-inline-block }

String
{: .label }

Set the multilevel field name using this config.

### Default Value
{: .no_toc }
“Category”

### Usecases
{: .no_toc }

## multiLevelFacetSelectorClass
{: .d-inline-block }

String
{: .label }

Class name for each multi level facet item.

### Default Value
{: .no_toc }
“UNX-multilevel-facet”

### Usecases
{: .no_toc }

## multiLevelFacetTemplate
{: .d-inline-block }

Function
{: .label }

Customize the look and feel of multi level facets by returning your custom HTML string from this function. This function gets 3 parameters: the complete facet block, selected values and the search text entered for this facet block (if isSearchable is set to true).

### Default Value
{: .no_toc }
```js
function(facet,selectedCategories,facetSearchTxt, facetConfig) {
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
            count,
            dataId
        } = item;
        if(facetSearchTxt && facetSearchTxt.length > 0) {
            if(name.toUpperCase().indexOf(facetSearchTxt.toUpperCase()) < 0 ){
                facetClass +=' UNX-search-hidden'
            }
        }
        return [`<button ${lTid} data-parent="${multiLevelField}" data-level="${level}"`,
            `class="${multiLevelFacetSelectorClass} ${levelCss} ${facetClass}" data-name="${dataId}" data-action = "setCategoryFilter">`,
            `<label class="UNX-facet-text">${name}</label><label class="UNX-facet-count">(${count})</label></button>`].join('')
    })
    ui += `<div class="UNX-category-values">${valueUI.join('')}</div>`
    if(ui !== "") {
        return [`<div class="UNX-multi-facet-wrap">`,
            `${ui}</div>`].join('')

    } else {
        return "";
    }
}
```

### Usecases
{: .no_toc }

## facetDepth
{: .d-inline-block }

Number
{: .label }

Configure how many levels of category filter you want to have by setting this value.

### Default Value
{: .no_toc }
4

### Usecases
{: .no_toc }

## clearFacetsSelectorClass
{: .d-inline-block }

String
{: .label }

Class name for the button to clear the selected facets.

### Default Value
{: .no_toc }
“UNX-clear-facet”	

### Usecases
{: .no_toc }

## removeFacetsSelectorClass
{: .d-inline-block }

String
{: .label }

Class name for the button to delete selected facets.

### Default Value
{: .no_toc }
“UNX-remove-facet”

### Usecases
{: .no_toc }

## onFacetLoad
{: .d-inline-block }

Function
{: .label }

Callback function that gets called after each facet selection or deselection. This function gets all the facets as a parameter.

### Default Value
{: .no_toc }
```js
  function(facets) {}
```

### Usecases
{: .no_toc }

## applyMultipleFilters
{: .d-inline-block }

Boolean
{: .label }

Turn this on if you want to apply multiple filters together.

### Default Value
{: .no_toc }
false

### Usecases
{: .no_toc }

## applyButtonText
{: .d-inline-block }

String
{: .label }

The text to show for the apply button (when applyMultipleFilters is set as true).

### Default Value
{: .no_toc }
“Apply”

### Usecases
{: .no_toc }

## clearButtonText
{: .d-inline-block }

String
{: .label }

The text to show for the clear button (when applyMultipleFilters is set as true).

### Default Value
{: .no_toc }
“clear”

### Usecases
{: .no_toc }

## isCollapsible
{: .d-inline-block }

Boolean
{: .label }

Turn this off if you do not want to have a collapsible accordian for each facet block.

### Default Value
{: .no_toc }
true

### Usecases
{: .no_toc }
true, false

## defaultOpen
{: .d-inline-block }

String
{: .label }

If “isCollapsible” is true, set this config to indicate the default open facet. Available options are “ALL” , “FIRST” , “NONE”.

### Default Value
{: .no_toc }
“ALL”	

### Usecases
{: .no_toc }

## isSearchable
{: .d-inline-block }

Boolean
{: .label }

Turn this on if you want to have search feature for each facet block.

### Default Value
{: .no_toc }
true

### Usecases
{: .no_toc }
true, false

## searchPlaceHolder
{: .d-inline-block }

String
{: .label }

Placeholder text for the facet search input.

### Default Value
{: .no_toc }
””	

### Usecases
{: .no_toc }

## enableViewMore
{: .d-inline-block }

Booelan
{: .label }

Turn this on for enabling view more or less functionality for individual facets.

### Default Value
{: .no_toc }
false

### Usecases
{: .no_toc }
true, false

## viewMoreText
{: .d-inline-block }

Array
{: .label }

The text to show for the view more / less button. Pass the 2 strings in array format [<viewMoreText>, viewLessText]. Ex: [“View more”, “View less”].

### Default Value
{: .no_toc }
``` js
[“show all”, “show less”]
```

### Usecases
{: .no_toc }

## viewMoreLimit
{: .d-inline-block }

Number
{: .label }

Will show view more only if the facet values are greater than this value.

### Default Value
{: .no_toc }
3	

### Usecases
{: .no_toc }

## tagName
{: .d-inline-block }

String
{: .label }

html element for the facet wrapper. by default it is div.

### Default Value
{: .no_toc }
“DIV”

### Usecases
{: .no_toc }

## htmlAttributes
{: .d-inline-block }

Object
{: .label }

by default it contains classes for the wrapper. you can add more classes or any attributes.

### Default Value
{: .no_toc }
```js
{class:”UNX-facets-results-block”}
```

### Usecases
{: .no_toc }


## events
{: .d-inline-block }

object
{: .label }

by default it will be empty. you can add further javascript events by keys and function as values. context will be the current object.
### Default Value
{: .no_toc }
{}	

### Usecases
{: .no_toc }
# Examples

## Default Example

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



## Range Sliders

### User Requirement
If you wish to have a range slider, this is an example with the integration with noUISlider.

Range facets will be rendered automatically along with other facets if it is configured on the console dashboard.

[![](https://unbxd.com/docs/wp-content/uploads/2020/05/facet-price-widget.png)](https://unbxd.com/docs/wp-content/uploads/2020/05/facet-price-widget.png)


### More Information

The right way of fetching the min and max values for the UI slider is from the 'stats' key within the search API. To get this stats key in the API response, you will have to pass `{stats: 'price'}` in the `extraParams` config. This approach will also avoid showing empty results on a site if there is any error with the slider.


The following are the various options available for configuring the range widget

| OPTIONS  | DATATYPE | DEFAULT VALUE | DESCRIPTION                                                                    |
| -------- | -------- | ------------- | ------------------------------------------------------------------------------ |
| minLabel | String   | ""            | Text for the lower end of the range slider                                     |
| maxLabel | String   | ""            | Text for the higher end of the range slider                                    |
| prefix   | String   | "$"           | Prefix text to be added to the range widget value. Example "$" for price facet |


Steps to get a range slider:

1. Include JS file - https://cdnjs.cloudflare.com/ajax/libs/noUiSlider/14.6.2/nouislider.min.js
2. Include CSS file - https://cdnjs.cloudflare.com/ajax/libs/noUiSlider/14.6.2/nouislider.css
3. Add this to your config `extraParams: {stats: 'price'}`
4. Verify if you are getting the `stats` key (with min, max, etc) in the search API response 
5. The code for `onFacetLoad` has to be as shown in the below config


### Code Snippet

```js
facet: {
    facetsEl: document.getElementById("facetsWrapper"),
    selectedFacetsEl: document.getElementById("selectedFacetWrapper"),
    applyMultipleFilters: false,
    defaultOpen: "FIRST",
    onFacetLoad: function (facets) {
            document.getElementById("unbxdInput").value = "";
            // let priceSliderEle = document.getElementsByClassName('UNX-product-item grid__item grid-product');
            // if(priceSliderEle.length < 4 && priceSliderEle.length != 0){
            //     document.querySelector('.price').style.display = 'none'
            // }
            let _this = this;
            let self = this;
            let facet = this.options.facet;
            let rangeWidgetConfig = facet.rangeWidgetConfig;
            facets.forEach(function (facetItem) {
                let facetType = facetItem.facetType,
                    facetName = facetItem.facetName,
                    gap = facetItem.gap;
                let prefix = rangeWidgetConfig.prefix;
                if (facetType === "range") {
                    let rangeId = "".concat(facetName, "_slider");
                    let sliderElem = document.getElementById(rangeId);
                    let end = facetItem.end,
                        _gap = facetItem.gap,
                        max = facetItem.max,
                        min = facetItem.min,
                        start = facetItem.start;
                    let selectedValues = sliderElem.dataset;


                    // first time
                        // store the current q as prev q and current stats as prev stateblock_state
                    // second timers 
                        // if prev query is same as current query then
                            // use prev stats or min and max values
                            
                        // if prev query is not same as new query then
                            // use current stats for min and max
                            // update prevQuery = current query
                            // update currnet stats = prev stats for current


                    if(!window.prevQuery) {
                        window.prevQuery = window.unbxdSearch.getSearchQuery()
                        
                        const stats = window.unbxdSearch.state.responseObj.stats || {}
                        window.prevStats = stats || {};
                         min = Math.floor(stats.price.min) || 0;
                         max = Math.ceil(stats.price.max) || 0;
                    } else {
                        if(window.prevQuery === window.unbxdSearch.getSearchQuery()){
                            const stats = window.prevStats || {}
                         min = Math.floor(stats.price.min) || 0;
                         max = Math.ceil(stats.price.max) || 0;
                        } else {
                            const stats = window.unbxdSearch.state.responseObj.stats || {}
                         min = Math.floor(stats.price.min) || 0;
                         max = Math.ceil(stats.price.max) || 0;
                         window.prevStats = window.unbxdSearch.state.responseObj.stats;
                         window.prevQuery = window.unbxdSearch.getSearchQuery()
                        }
                    }

                    if (selectedValues) {
                        start = Number(selectedValues.x);
                        end = Number(selectedValues.y);
                    }
                   
                    _this[ rangeId ] = noUiSlider.create(sliderElem, {
                        start: [ start, end ],
                        tooltips: [ {
                            to: function to(value) {
                                return "".concat(prefix, " ").concat(Math.round(value));
                            }
                        }, {
                            to: function to(value) {
                                return "".concat(prefix, " ").concat(Math.round(value));
                            }
                        } ],
                        connect: true,
                        range: {
                            min: min,
                            max: max
                        },
                        format: {
                            to: function to(value) {
                                return Math.round(value);
                            },
                            from: function from(value) {
                                return Math.round(value);
                            }
                        },
                        padding: 0,
                        margin: 0,
                    });
                    _this[ rangeId ].on("set", function (data) {
                        let newData = {
                            start: data[ 0 ],
                            end: data[ 1 ],
                            facetName: facetName,
                            gap: _gap
                        };
                        self.setRangeSlider(newData);
                    });
                }
            });
        },,
    isCollapsible: true,
    isSearchable: true,
    enableViewMore: false,
    rangeTemplate: function(range, selectedRange, facet) {
        const {
            facetName,
            start,
            end
        } = range;
        let min = start;
        let max = end;
        if (selectedRange.length > 0) {
            const sel = selectedRange[0].replace(/[^\w\s]/gi, '').split(" TO ");
            min = sel[0];
            max = sel[1];
        }
        const rangId = `${facetName}_slider`;
        return [`<div id="${facetName}"  data-id="${facetName}" class=" UNX-range-slider-wrap">`,
            `<div class="UNX-value-container UNX-range-value-block" ></div>`,
            `<div id="${rangId}" data-x="${min}" data-y="${max}" class="UNX-range-slider-wrapper"></div>`,
            `</div>`,
            `<div>`,
            `</div>`
        ].join('')
    }
}
```
