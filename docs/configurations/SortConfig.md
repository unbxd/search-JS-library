---
layout: default
title: Sorting
parent: Configurations
nav_order: 8
---

# Sorting
{: .no_toc }

# Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

# Definition
"Sort" functionality in an e-commerce page allows users to rearrange the products displayed on a search results or product listing page in a specific order. The sorting options provided by the e-commerce websites varies but the most common ones are:

**Sort by relevance**: This is the default sorting option. It orders the products based on how well they match the search criteria or the filter settings.  
**Sort by price**: This allows users to sort products by price, in either ascending or descending order.  
**Sort by popularity**: This orders the products based on their popularity, like number of sales, views, or ratings.  
**Sort by newness**: This orders the products based on their recency, usually the newest products are listed first.  
**Sort by Brand**: This allow the users to sort products by brand name.  

This functionality can help users quickly find the products that are most relevant or interesting to them, based on their specific needs and preferences. It allows users to quickly identify products in a particular price range, or newly added items, making it more convenient for them to find what they are looking for.

It is also common to find that e-commerce websites will have a default sort order when a user visits a category or search results, but also provides the user with a way to change and adjust the sort order as they wish.

# Behavior

Sorting allows you to rearrange the search results based on certain fields in a particular order.

[![](https://unbxd.com/docs/wp-content/uploads/2020/05/sort-options-main.png)](https://unbxd.com/docs/wp-content/uploads/2020/05/sort-options-main.png)

# Configurations

The following are the various options available under the object:

## enabled
{: .d-inline-block }

Boolean
{: .label }
The "enabled" option for sort refers to the ability to enable or disable the sorting component.
When sort is enabled, the developer can use the sorting functionality to sort the data based on a specific criteria, such as alphabetical order or numerical value. 
When sort is disabled, the developer will not be able to use the sorting functionality.

### Default Value
{: .no_toc }
```js
enabled: true
```

### Scenarios
{: .no_toc }
1.true - Allows to sort products.  
2.false - The Sorting component would not be visible.

---
## el
{: .d-inline-block }

Element
{: .label }

The "element" option for sorting refers to the HTML element that is used to create the sorting UI. This option allows the developer to specify what type of HTML element should be used for sorting, such as a "select" element , "button" element etc.

### Default Value
{: .no_toc }
```js
el: null
```

### Scenarios
{: .no_toc }
There are several HTML selectors that can be used to locate the banner element in an e-commerce page. For ex: getElementById, getElementsByClassName, getElementsByTagName, querySelector, querySelectorAll, getElementsByName, etc.

---

## options
{: .d-inline-block }

Array
{: .label }
The "options" in sorting refer to the different sorting criteria that the developer can use to sort the data. These options are typically defined as a list of sorting criteria, such as "ascending" or "descending" order, or sorting by different fields like "name" or "date".
Array of sort options.

This accepts a list of objects, where each object needs to have "value" and "text".
**1. value** : The value is the parameter which goes in payload . 
**2. text**: The text which appears as option on UI.

### Default Value
{: .no_toc }
```js
[
    {
        value: "price desc",
        text: "Price High to Low"
    },{
        value: "price asc",
        text: " Price Low to High"
    },{
        value: "rating asc",
        text: " Rating Low to High"
    },{
        value: "rating desc",
        text: " Rating High to low"
    }
]
```

### Scenarios
{: .no_toc }
The sorting can be done based on different criterias such as based on name , pricing , brand , what's new etc.

```js
[{
    value: "Name asc",
    text: "Name: A to Z",
},
{
    value: "Name desc",
    text: "Name: Z to A",
}
]
```

---
## sortClass
{: .d-inline-block }

String
{: .label }

CSS class name for the sort item, make sure you will be providing this information in template.

### Default Value
{: .no_toc }
“UNX-sort-item”

### Scenarios
{: .no_toc }

---
## selectedSortClass
{: .d-inline-block }

String
{: .label }

CSS class name for the selected sort item.

### Default Value
{: .no_toc }
“UNX-selected-sort”

### Scenarios
{: .no_toc }

---
## template
{: .d-inline-block }

Function
{: .label }

Customize the look and feel of the sort component by using this function. This function gets 2 parameters: the selected sort value and the sort config (i.e. this complete object).

### Default Value
{: .no_toc }
``` js
function(selectedSort, sortConfig) {
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
        `<label class="UNX-hidden" for="unxSortSelect">Sort By</label>`,
        `<select data-test-id="${UNX_unbxdSorter}" name="unxSortSelect" data-action="changeSort" id="unxSortSelect" class="${sortClass}">`,
            `<option value="">Relevancy</option>`,
            optionsUI,
        `</select>`,
    `</div>`].join('')
}

```

### Scenarios
{: .no_toc }

---
## action
{: .d-inline-block }

String
{: .label }

Action on which sort should trigger: “click” or “change” .

### Default Value
{: .no_toc }
“change”

### Scenarios
{: .no_toc }

---
## tagName
{: .d-inline-block }

String
{: .label }

html element for the sort wrapper. by default it is div.

### Default Value
{: .no_toc }
“DIV”

### Scenarios
{: .no_toc }

---
## htmlAttributes	
{: .d-inline-block }

Object
{: .label }

By default it contains classes for the wrapper. you can add more classes or any attributes.

### Default Value
{: .no_toc }
``` js
{class:”UNX-sort-block-lb”}	
```

### Scenarios
{: .no_toc }

---
## events
{: .d-inline-block }

Object
{: .label }

By default it will be empty. you can add further javascript events by keys and function as values. context will be the current object.

### Default Value
{: .no_toc }
{}

### Scenarios
{: .no_toc }

---
# Examples

## Default Example
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
