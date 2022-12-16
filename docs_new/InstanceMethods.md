
## Instance Methods


This section documents the different methods exposed by the Library that you can use to perform various actions.

> NOTE: All the below methods can be called on the instance object returned by UnbxdSearch constructor.

| OPTIONS | DATATYPE | DESCRIPTION |
|----------|----------|----------|
| reRender | function | Call this function if you want to render the page again. Ex: `unbxdSearch.reRender()` |
| updateConfig | function | Call this function for updating the config options in run time. Ex: `unbxdSearch.updateConfig({facet:{applyMultipleFilters:true}})` |
| getCategoryPage | function | Call this function to render the category page. Ex: `unbxdSearch.getCategoryPage()` |
| getBrowsePage | function | Call this function to render the browse page. Ex: `unbxdSearch.getBrowsePage()` |
| getResults | function | Call this function to refetch the search results. Ex: `unbxdSearch.getResults("dress")` |
| resetFacets | function | Call this method to reset the selected facets. Ex: `unbxdSearch.resetFacets()` |
| resetAll | function | Call this method to reset the all the page elements like selected facets, selected sort option, pagination etc. Ex: `unbxdSearch.resetAll()` |
| setPageStart | function | Call this method to set the the page number. Ex: `unbxdSearch.setPageStart(0)` |
| setRangeSlider | function | Call this method to update the range filter value. Ex:`unbxdSearch.setRangeSlider({"start":0,"end":573,"facetName":"price","gap": 200})` |
| getSelectedFacetsCount | function | Call this function if you want to  get the total count of selected facets Ex: `unbxdSearch.getSelectedFacetsCount()` |
| getAllSelectedFacets | function | Call this function to get all the selected facets Ex: `unbxdSearch.getAllSelectedFacets()` |
| getSelectedFacetValueCount | function | Call this function to get the total count of selected facet values. Ex: `unbxdSearch.getSelectedFacetValueCount()` |
