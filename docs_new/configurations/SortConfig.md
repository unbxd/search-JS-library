---
layout: default
title: Sorting
parent: Configurations
nav_order: 8
---

# Sorting
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Definition
"Sort" functionality in an e-commerce page allows users to rearrange the products displayed on a search results or product listing page in a specific order. The sorting options provided by the e-commerce websites varies but the most common ones are:

Sort by relevance: This is the default sorting option, it orders the products based on how well they match the search criteria or the filter settings.
Sort by price: This allows users to sort products by price, in either ascending or descending order.
Sort by popularity: This orders the products based on their popularity, like number of sales, views, or ratings.
Sort by newness: This orders the products based on their recency, usually the newest products are listed first.
Sort by Brand: This allow the users to sort products by brand name.
This functionality can help users quickly find the products that are most relevant or interesting to them, based on their specific needs and preferences. It allows users to quickly identify products in a particular price range, or newly added items, making it more convenient for them to find what they are looking for.

It is also common to find that e-commerce websites will have a default sort order when a user visits a category or search results, but also provides the user with a way to change and adjust the sort order as they wish.

## Behavior

Sorting allows you to rearrange the search results based on certain fields in a particular order.

[![](https://unbxd.com/docs/wp-content/uploads/2020/05/sort-options-main.png)](https://unbxd.com/docs/wp-content/uploads/2020/05/sort-options-main.png)

## Configurations

The following are the various options available under the object:

| OPTIONS | DATATYPE | DEFAULT VALUE | DESCRIPTION |
|----------|----------|----------|----------|
| enabled | Boolean | true | Turn this off if you do not want the sort component |  
| el                        	| Element  	| null | Element in which to render the sort component |
| options                   	| Array    	| `[{value: "price desc",text: "Price High to Low"},{value: "price asc",text: " Price Low to High"},{value: "rating asc",text: " Rating Low to High"},{value: "rating desc",text: " Rating High to low"}]` | Array of sort options |
| sortClass                 	| String   	| "UNX-sort-item" | CSS class name for the sort item, make sure you will be providing this information in template |
| selectedSortClass         	| String   	| "UNX-selected-sort" | CSS class name for the selected sort item |
| template                  	| Function 	| [default](src/modules/sort/index.js) | Customize the look and feel of the sort component by using this function. This function gets 2 parameters: the selected sort value and the sort config (i.e. this complete object) |
| action                    	| String   	| "change" | Action on which sort should trigger: "click" or "change" |
| tagName | String | "DIV" | html element for the sort wrapper. by default it is div.  |
| htmlAttributes | Object | {class:"UNX-sort-block-lb"} | by default it contains classes for the wrapper. you can add more classes or any attributes |
| events | object | {} | by default it will be empty. you can add further javascript events by keys and function as values. context will be the current object. |

## Examples

### Sample Example
Sample “sort” config

```js
sort: {
   el: document.getElementById("sortWrapper"),
   selectedSortClass:'UNX-selected-sort',
   sortClass:'UNX-sort-item',
   options:[{
        value:"price desc",
        text:"Price High to Low"
    },
    {
        value:"price asc",
        text:" Price Low to High"
    }],
   action:'change',
   template:function(selectedSort, sortConfig) {
        let optionsUI = "";
        const {
            options,
            sortClass,
            selectedSortClass
        } = sortConfig;
        const {
            UNX_unbxdSorter
        } = this.testIds;
        options.forEach((item) => {
            const {
                value,
                text
            } = item;
            if(value == selectedSort) {
                optionsUI += `<option value="${value}" class="${selectedSortClass}" selected>${text}</option>`;
            } else {
                optionsUI += `<option value="${value}">${text}</option>`;
            }
        })
        return [`<div class="UNX-sort-block">`,
            `<span class="UNX-sort-header">Sort By</span>`,
            `<select data-test-id="${UNX_unbxdSorter}" data-action="changeSort" id="unbxdSorter" class="${sortClass}">`,
                `<option value="">Relevancy</option>`,
                optionsUI,
            `</select>`,
        `</div>`].join('')
    },
},
```