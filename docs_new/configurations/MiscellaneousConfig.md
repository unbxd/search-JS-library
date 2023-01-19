---
layout: default
title: Others
parent: Configurations
nav_order: 17
---

# Others
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Other Configurations
 
something

| OPTIONS | DATATYPE | DEFAULT VALUE | DESCRIPTION |
|----------|----------|----------|----------|
| unbxdAnalytics | Boolean | false | Turn this flag on if you want Unbxd to fire analytics events. Note that you have to include the Unbxd Analytics SDK for firing analytics events. |
| hashMode | Boolean | false | Turn this flag on if you want the URL update to happen on hash instead of using query params |
| updateUrls | Boolean | true | If you do not want the URLs to be updated on any search param change, set this config to false |
| actionBtnClass  | String  | "UNX-action-item" | CSS class name to add to any elements on which you want to trigger click event |
| actionChangeClass  | String  | "UNX-action-change" | CSS class name to be added to any custom input elements on which you want to trigger change event |
| onAction  | Function  | `function(event, context) {}` | Callback function called on a click or change on your custom element. This function will get 2 parameters: the event object & the `this` context  |
| onEvent | Function | function(context, type) {} | Callback that gets called after the supported events. This function gets 2 parameters: the current instance or context and the event type which is one of `BEFORE_API_CALL, AFTER_API_CALL, BEFORE_RENDER, BEFORE_NO_RESULTS_RENDER, AFTER_NO_RESULTS_RENDER, AFTER_RENDER, DELETE_FACET, FACETS_CLICK, DELETE_FACET_VALUE, DELETE_FACET, CLEAR_SORT, CHANGE_SORT, PAGE_NEXT, PAGE_PREV, CHANGE_INPUT, SET_CATEGORY_FILTER, DELETE_CATEGORY_FILTER`  |
| extraParams | Object | `{ "version":"V2" }` | Any additional parameters you want to send in the search API call |
| productId | String | "uniqueId" | The field name which denotes the unique identifier for each product |
| defaultFilters | Object | null | Default filters to apply to all search API requests |
| searchQueryParam | String | "q" | If you want to send the search query in a different query param key set this config. Example, if you want to send the query in a param called "query" like "query=dress", then set this config value to "query" | 
| searchEndPoint | String | "https://search.unbxd.io" | Domain name of the search API endpoint |
| searchPath | String | "" | Any additional path string to be added to the URL. This is useful incase you have an SPA and the search page is hosted on a subpath of your site |
| getCategoryId | Function | null | By default Category ID will be taken from unbxdPageConf object, but if you wish to customize use this function to return the category ID  |
| setCategoryId | Function | null | This method helps to navigate through the breadcrumbs, you can customize the logic here   |
| onQueryRedirect | Function | null | customise your logic here to handle the redirect configured in api |
| browseQueryParam | String | "p" | this will be the default query param for the browse and category|
