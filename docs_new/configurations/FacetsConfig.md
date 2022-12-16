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
       facetsEl: document.getElementById("facetsWrapper"),
       facetTemplate:function(facetObj, children, isExpanded,facetSearchTxt, facet){},
       facetItemTemplate:function(facet,value, facetSearchText){},
       facetMultiSelect:true,
       facetClass:"UNX-facets-block",
       facetAction:"click",
       selectedFacetClass:"UNX-selected-facet-btn",
       selectedFacetsEl:null,
       selectedFacetTemplate:function(selections, facet){},
       selectedFacetItemTemplate:function(selectedFacet,selectedFacetItem){},
       clearAllText:"Clear All",
       rangeWidgetConfig: {
           "minLabel":"",
           "maxLabel":"",
           "prefix":'$'
       },
       facetMultilevel:true,
       facetMultilevelName:"Category",
       multiLevelFacetSelectorClass:"UNX-multilevel-facet",
       facetDepth:4,
       clearFacetsSelectorClass: "UNX-clear-facet",
       removeFacetsSelectorClass: "UNX-remove-facet",
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
       viewMoreLimit:3
   }
```