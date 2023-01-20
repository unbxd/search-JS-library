---
layout: default
title: Events
nav_order: 5
---

# Events
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Events

This section documents the different events fired by the Unbxd Library that you can use to perform custom actions. The **onEvent** config function is used to catch these events

### BEFORE_API_CALL
Fired right before the search api is called

---
### AFTER_API_CALL
Fired if the search api call is successful

---
### BEFORE_RENDER
Fired as the first step of execution of the **reRender** function

---
### BEFORE_NO_RESULTS_RENDER
Fired before rendering the zero results UI, if the number of results in the search api are `0`, as part of the **reRender** function

---
### AFTER_NO_RESULTS_RENDER
Fired after rendering the zero results UI i.e. if the number of results in the search api are `0`, as part of the **reRender** function

---
### AFTER_RENDER
Fired as the last step of execution of the **reRender** function

---
### DELETE_FACET
Fired on deleting a facet. (**deleteFacet** sdk action is used)
### Example
{: .no_toc }
```js
onEvent: function(instance, "DELETE_FACET", { facetName }) {
    /** Custom code here */
}
```
---
### FACETS_CLICK
Fired on changing a facet value (**changeFacet** sdk action is used)
### Example
{: .no_toc }
```js
onEvent: function(instance, "FACETS_CLICK", {
    facetName,
    facetData
}) {
    /** Custom code here */
}
```
---
### CLEAR_SORT
Fired when current sort data is cleared (**clearSort** sdk action is used)

---
### CHANGE_SORT
Fired when sort data is changed with new values (**changeSort** sdk action is used)
### Example
{: .no_toc }
```js
onEvent: function(instance, "CHANGE_SORT", {
    sort:sortVal
}) {
    /** Custom code here */
}
```
---
### PAGE_NEXT
Fired on click of a next page (**next** sdk action is used)
### Example
{: .no_toc }
```js
onEvent: function(instance, "PAGE_NEXT", {
    value:next
}) {
    /** Custom code here */
}
```
### Arguments
{: .no_toc }
next: Page number

---
### PAGE_PREV
Fired on click of a previous page (**prev** sdk action is used)
### Example
{: .no_toc }
```js
onEvent: function(instance, "PAGE_PREV", {
     value:prev
}) {
    /** Custom code here */
}
```
### Arguments
{: .no_toc }
prev: Page number

---
### CHANGE_INPUT
Fired on keywdown of searchbox element

---
### SET_CATEGORY_FILTER
Fired if in the search page, a category facet is clicked (**setCategoryFilter** sdk action is used)
### Example
{: .no_toc }
```js
onEvent: function(instance, "SET_CATEGORY_FILTER", dataSet) {
    /** Custom code here */
}
```
### Arguments
{: .no_toc }
dataSet: Facet element data set

---
### DELETE_CATEGORY_FILTER
Fired if in the search page, a category facet is cleared (**clearCategoryFilter** sdk action is used)
### Example
{: .no_toc }
```js
onEvent: function(instance, "DELETE_CATEGORY_FILTER", dataSet) {
    /** Custom code here */
}
```
### Arguments
{: .no_toc }
dataSet: Facet element data set

---
### PAGESIZE_CHANGE
Fired on click of any of the page size options
### Example
{: .no_toc }
```js
onEvent: function(instance, "PAGESIZE_CHANGE", {
    count:val
}) {
    /** Custom code here */
}
```
### Arguments
{: .no_toc }
val: New page size

---