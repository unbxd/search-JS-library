---
layout: default
title: Sorting
parent: Configurations
nav_order: 10
---

# Sorting
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Behavior

Sorting allows you to rearrange the search results based on certain fields in a particular order.

[![](https://unbxd.com/docs/wp-content/uploads/2020/05/sort-options-main.png)](https://unbxd.com/docs/wp-content/uploads/2020/05/sort-options-main.png)

## Config

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

## Use Cases

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