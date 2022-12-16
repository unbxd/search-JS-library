---
layout: default
title: Pagination
parent: Configurations
nav_order: 7
---

# Pagination
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Behavior

Pagination helps to control the number of products displayed on the page and the type of pagination (infinite scroll, click to scroll, or fixed pagination) to display.

**Fixed Pagination**

This traditional type of pagination displays the set number of products on one page.

[![](https://unbxd.com/docs/wp-content/uploads/2020/05/traditional-pagination.png)](https://unbxd.com/docs/wp-content/uploads/2020/05/traditional-pagination.png)

**Click & Scroll**

[![](https://unbxd.com/docs/wp-content/uploads/2020/05/click-and-scroll.png)](https://unbxd.com/docs/wp-content/uploads/2020/05/click-and-scroll.png)

You can configure the pagination feature by updating the required configs under the “pagination” config object.  
  
The following are the various options available under the “pagination” config object:

| OPTIONS | DATATYPE | DEFAULT VALUE | DESCRIPTION |
|----------|----------|----------|----------|
| enabled | Boolean | true | Turn this off if you do not want the pagination widget |
| type                      	| String   	| "CLICK_N_SCROLL" | Type of pagination: "FIXED_PAGINATION" or "INFINITE_SCROLL" or "CLICK_N_SCROLL" |
| el                        	| Element  	| null | Element in which to render the pagination component  |
| template                  	| Function 	| [default](src/modules/pagination/fixedPaginationView.js) | Customize the look and feel of the pagination by returning your custom HTML string from this function. This function gets 1 parameter: an object that has the pagination information |  
| pageClass | String | "UNX-page-items" | CSS classname for the pagination component |
| selectedPageClass | String | "UNX-selected-page-item" | CSS classname for selected page item |
| onPaginate                	| `function(paginationInfo){}` 	| NA | Callback function that gets called after a pagination action |
| pageLimit | Number | 6 | Number of pages to show upfront (when `type` is `FIXED_PAGINATION`) |
| infinteScrollTriggerEl | Element | window | Element on which to detect infinite scroll page boundary (when `type` is set to `INFINITE_SCROLL`) |
| heightDiffToTriggerNextPage | Number | 100 | Height of the page to consider to fetch the next page data (when `type` is set to `INFINITE_SCROLL`) |
| action                    	| String   	| "click" | Action on which pagination should trigger: "click" or "change" |
| tagName | String | "DIV" | html element for the pagination wrapper. by default it is div.  |
| htmlAttributes | Object | {class:"UNX-pagination-size-block"} | by default it contains classes for the wrapper. you can add more classes or any attributes |
| events | object | {} | by default it will be empty. you can add further javascript events by keys and function as values. context will be the current object. |

## Example

Sample “pagination” config

```js
pagination : {
       enabled:true,
       el: document.querySelector("#clickScrollContainer"),
       template: function (paginationData, pagination) { return ``},
       pageClass:"UNX-page-items",
       selectedPageClass:"UNX-selected-page-item",
       type:'CLICK_N_SCROLL', // INFINITE_SCROLL or CLICK_N_SCROLL or FIXED_PAGINATION
       infinteScrollTriggerEl:window, //if paginationType = INFINITE_SCROLL
       heightDiffToTriggerNextPage:100, //if paginationType = INFINITE_SCROLL,   
       onPaginate:function(paginationInfo){},
       action:'click',
       pageLimit:6
   }
```