---
layout: default
title: Methods and Events
nav_order: 4
---

# Methods and Events
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Instance Methods


This section documents the different methods exposed by the sdk/sdk config that you can use to perform various actions.


| OPTIONS | ARGUMENTS | DESCRIPTION |
|----------|----------|----------|
| reRender | Call this function if you want to render the page again. Ex: `unbxdSearch.reRender()` |
| updateConfig | Call this function for updating the config options in run time. Ex: `unbxdSearch.updateConfig({facet:{applyMultipleFilters:true}})` |
| onQueryRedirect | (self, redirect, urlBeforeRedirect) | This config function holds the redirect logic for a query to which the response contains redirect information. Sample Search api response: 
```{redirect:{type:”url”,value:”https://www.unbxd.com”}```
Parameter **redirected=true** is added in the browser url when replace state param is true in history.
It is **not** recommended to open redirect in a new tab. In such a case, the custom client logic for above mentioned search input handlers should take care to not push state when switching to search from category. 
Important Arguments: 
```redirect: redirect response from search api```
```urlBeforeRedirect: url before the browser redirected``` |
| onBackFromRedirect | (hashMode) | This config function holds the logic to manipulate history when we come back to the site from the redirected url. This is only called if history state replace was true. It looks for the redirected parameter to identify that page is back from redirected url. Important Arguments:
```hashMode:true/false``` |
| getCategoryPage | function | Call this function to render the category page. Ex: `unbxdSearch.getCategoryPage()` |
| getResults | function | Call this function to refetch the search results. Ex: `unbxdSearch.getResults("dress")` |
| resetFacets | function | Call this method to reset the facets. Ex: `unbxdSearch.resetFacets()` |
| resetAll | function | Call this method to reset the all the page elements like selected facets, selected sort option, pagination etc. Ex: `unbxdSearch.resetAll()` |
| setPageStart | function | Call this method to set the the page number. Ex: `unbxdSearch.setPageStart(0)` |
| setRangeSlider | function | Call this method to update the range filter value. Ex:`unbxdSearch.setRangeSlider({"start":0,"end":573,"facetName":"price","gap": 200})` |
<!-- | getSelectedFacetsCount | function | Call this function if you want to  get the total count of selected facets Ex: `unbxdSearch.getSelectedFacetsCount()` | -->
<!-- | getAllSelectedFacets | function | Call this function to get the count of the selected facets Ex: `unbxdSearch.getAllSelectedFacets()` | -->
<!-- | getSelectedFacetValueCount | function | Call this function to get the total count of selected facet values. Ex: `unbxdSearch.getSelectedFacetValueCount()` | -->


## SDK Events

This section documents the different events fired by the Unbxd Library that you can use to perform various actions.
