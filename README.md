
<a  href="https://www.npmjs.com/package/@unbxd-ui/vanilla-search-library">
    <img  alt="npm"  src="https://img.shields.io/npm/v/@unbxd-ui/vanilla-search-library?color=blue">
</a>

<a  href="https://www.npmjs.com/package/@unbxd-ui/vanilla-search-library">
    <img  alt="npm"  src="https://img.shields.io/npm/l/@unbxd-ui/vanilla-search-library">
</a>

<a  href="https://www.npmjs.com/package/@unbxd-ui/vanilla-search-library">
    <img  alt="npm"  src="https://img.shields.io/npm/dm/@unbxd-ui/vanilla-search-library">
</a>
  

# search-JS-library

A JavaScript library for building performant and quick search experiences with Unbxd.


## Browsers support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>iOS Safari |
| --------- | --------- | --------- | --------- | --------- |
| IE10*, IE11, Edge| last 2 versions| last 2 versions| last 2 versions| last 2 versions


(*) You need to use polyfills for making it work in IE browser. 
Please refer this <a  href="public/examples/internetExplorer.html">example</a> for more details

## Getting started

The library can be used in 2 ways


### ES6

Install `@unbxd-ui/vanilla-search-library` using npm.

```shell

npm install @unbxd-ui/vanilla-search-library --save

```

Import the UnbxdSearch function in your project

```js

import  UnbxdSearch  from  "@unbxd-ui/vanilla-search-library";

```


### ES5

You can also use a global-friendly UMD build:

```html

<script  src="https://libraries.unbxdapi.com/search-sdk/v0.1.7/vanillaSearch.js"  type="text/javascript"></script>

```

Now you are ready to start using the library
  
## Documentation

API documentation is available <a  href="http://cxdoc.unbxd.io/search-JS-library/">here</a>


## Examples / Recipies

- <a  href="https://codesandbox.io/s/es5-demo-epq52">Basic (default template) : ES5</a>
- <a  href="https://codesandbox.io/s/minimal-config-qjpwq">Basic (default template) : ES6</a>
- <a  href="https://codesandbox.io/s/custom-product-card-5rulp">Custom product card</a>
- <a  href="https://codesandbox.io/s/infinitescroll-pes7g">Pagination: infinite scroll</a>
- <a  href="https://codesandbox.io/s/fixedpagination-yvwjo">Pagination: fixed size</a>
- <a  href="https://codesandbox.io/s/clicknscroll-1sowf">Pagination: Load More</a>
- <a  href="https://codesandbox.io/s/range-checkboxes-rwuqb">Range slider as checkboxes </a>
- <a  href="https://codesandbox.io/s/friendly-microservice-to3r8">Customised</a>
- <a  href="public/examples/internetExplorer.html">IE10</a>


# Full configuration List

**Note:**
All templates are provided as functions where you can return HTML string that needs to be rendered.
This provides you the power of entire Javascript to build your desired HTML string.

| OPTIONS | DATATYPE | DEFAULT VALUE | DESCRIPTION |
|-----------------------|----------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
| siteKey | String | NA | This is the unique Site Key assigned by Unbxd to every site created in the console dashboard. Refer to [this section](https://unbxd.com/docs/site-search/documentation/configure-site-profile/) for steps on how to get the Site Key for your account. |
| apiKey | String | NA | This is the unique API Key assigned to every site created in the console dashboard.  Refer to [this section](https://unbxd.com/docs/site-search/documentation/configure-site-profile/) for steps on how to get the API Key for your account. |
| products | Object | NA | Products related configurations. You can find all the configs in [Products Config](#Products-Config) section|
| facet | Object | NA | Facet configurations. You can find all the configs in [Facets Config](#Facets-Config) section|
| pagination | Object | NA | Pagination component configurations. You can find all the configs in [Pagination Config](#Pagination-Config) section |
| pageSize | Object | NA | Page Size component configurations. You can find all the page size configs in [PageSize Config](#PageSize-Config) section |
| sort | Object | NA | Sort component configurations. You can find all the configs in [Sort Config](#Sort-Config) section |
| productView | Object | NA | Product view type (list view or grid view) configurations. You can find all the configs in [Product Views Config](#Product-Views-Config) section|
| breadcrumb | Object | NA | Bread crumb component configurations. You can find all the configs in [Breadcrumb Config](#Breadcrumb-Config) section |
| spellCheck | Object | NA | Spellcheck component configurations. You can find all the configs in [Spell Check Config](#Spell-Check-Config) section. Please ignore incase of _browse_ and _category_.|
| variants | Object | NA | Set this object, if you have want to display variant products. You can find all the variants configs in [Variants Config](#Variants-Config) section |
| loader | Object | NA | Loader component configurations. You can find all the configs in [Loader Config](#Loader-Config) section |
| noResults | Object | NA | No results component configurations. You can find all the configs in [No Results Config](#No-Results-Config) section |
| fireAnalyticsEvents | Boolean | false | Turn this flag on if you want Unbxd to fire analytics events. Note that you have to include the Unbxd Analytics SDK for firing analytics events |
| hashMode | Boolean | false | Turn this flag on if you want the URL update to happen on hash instead of using the history API. Defaults to false. |
| updateUrls | Boolean | true | If you do not want the URLs to be updated on any search param change, set this config to false. Defaults to true. |
| actionBtnClass  | String  | NA | CSS classname to add to any elements on which you want to trigger any clicks |
| actionChangeClass  | String  | NA | CSS class, if you want to trigger change on your custom input elements, add this class |
| actionCallback  | Function  | NA | Callback function called on a click or change on your custom element  |
| searchQueryParam | String | NA | If you want to send the search query in a different param set this config. Example: "p=dress" | 
| sdkHostName | String | https://search.unbxd.io | Domain name of the search API endpoint |


# Products Config

| OPTIONS | DATATYPE | DESCRIPTION |
|-----------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
| productType | String | Type of products page to render. SEARCH or BROWSE or CATEGORY |
| el | Element | Element in which to render the search results |
| template | Function | Customise the look and feel of the product card by returning your custom HTML string from this function. This function gets 2 parameters: complete product object and index of the product |
| productAttributes | Array | This is an array of all required fields for generating result template. This is helpful to load the results faster. |
| attributesMap | Object | Field mappings for the data to be displayed in the product card |
| gridCount | Number | If you want to have grid type user interface, then you can configure how many columns you will to have in a row with this config|
| productItemClass | String | Class name to be added to each product card |                                                            
| defaultFilters | Object | Default filters to apply. This will be applied in all API requests |

# Facets Config

| OPTIONS | DATATYPE | DESCRIPTION |
|-----------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
| facetsEl | Element |  Element in which to render the facets |
| facetTemplate | Function | Customise the look and feel of the facets by returning your custom HTML string from this function. This function gets 2 parameters: facetInfo which will give you data of the facet and facets which will give the facets elements |
| facetItemTemplate | Function | Customise the facets by returning your custom HTML string from this function. This function gets 2 parameters: facet - each facet item object and filter - each filter value |
| facetMultiSelect | Booelan | Turn this off if you want to disable the multiple selection of facets. By default it is true |
| facetClass | String | CSS class name to add to the the facet items |
| facetAction | String | 'click' or 'change' based on the facet item |
| selectedFacetClass | String | CSS class name for the selected facet items |
| selectedFacetsEl | Element | Element in which to render the selected facets. If you dont provide this element selected facets will be rendered along with facets |
| selectedFacetTemplate | Function | Customise the look & feel of the selected facet by returning your custom HTML string from this function. This function gets 2 parameters: selectedFacet which is the selected facet filter and selected filter object |
| rangeFacetEl | Element | Element in which to render the range facet |
| rangeTemplate | Function |  Customise the look and feel of the range facets by returning your custom HTML string from this function. This function gets 1 parameter: the list of range facets available |
| rangeWidgetConfig | Function | Configure the default range slider. This function will get 2 parameters: minLabel which is the prefix for the min value and maxLabel which is the prefix for the max value |
| multiLevelFacetSelector | String | Class name for each multi level facet item |
| multiLevelFacetEl | Element | Element in which to render the multilevel facets |
| facetDepth | Number | Configure how many levels of category filter you want to have by setting this value. Default is 4 |
| clearFacetsSelector | String | Class name for the button to clear the selected facets |
| removeFacetsSelector | String | Class name for the button to delete selected facets. For deleting each selected filter under a facet. this class name is must to work |
| onFacetLoad | function | Callback function that gets called after each facet selection |
| applyMultipleFilters | Boolean | Turn this on if you want to apply multiple filters together. By default it is false |
| isCollapsible | Boolean | Turn this on if you want to have a collapsible accordian for each facet block |
| defaultOpen | String | If "isCollapsible" is true, set this config to indicate the default open facet. Available options are ALL , FIRST , NONE |
| isSearchable | Boolean | Turn this on if you want to have search feature for each facet block |
| searchPlaceHolder | String | Placeholder for the facet search input |
| textFacetWrapper | String | CSS class for the facets list |


# Pagination Config

| OPTIONS | DATATYPE | DESCRIPTION |
|-----------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------                                                                                                                                                   
| el                        	| Element  	| Element in which to render the pagination component  |
| type                      	| String   	| Type of pagination: "FIXED_PAGINATION" or "INFINITE_SCROLL" or "CLICK_N_SCROLL" |
| onPaginate                	| Function 	| Callback function that gets called after a pagination action |
| action                    	| String   	| Action on which pagination should trigger: "click" or "change". Defaults to "click" |
| template                  	| Function 	| Customise the look and feel of the pagination by returning your custom HTML string from this function. This function gets 1 parameter: an object that has the pagination information |  

# Page Size Config

| OPTIONS | DATATYPE | DESCRIPTION |
|-----------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
| el                        	| Element  	| Element in which to render the page size element |
| pageSize                  	| Number   	| Number of results to be shown per page |
| options                   	| Array    	| Array of desired page sizes to be rendered. _It is suggested that the value be a multiple of number of columns (ex. if 3 columns then 15 or 18 or 21)._ |
| pageSizeClass             	| String   	| Additional CSS class name to be added to the page size element |
| selectedPageSizeClass     	| String   	| Additional CSS class name to be added to the selected page size option |
| action                    	| String   	| Action on which page size change should trigger: "click" or "change" |
| template                  	| Function 	| Customise the look and feel of the page size component by defining this function that is expected to return a HTML string for the template. |

# Sort Config

| OPTIONS | DATATYPE | DESCRIPTION |
|-----------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
| el                        	| Element  	| Element in which to render the sort component |
| options                   	| Array    	| Array of sort options: `[{value: "sortPrice desc", text: "Price High to Low"}, {value: "sortPrice asc", text: "Price Low to High"}]` |
| sortClass                 	| String   	| CSS class name for the sort item, make sure you will be providing this information in template |
| selectedSortClass         	| String   	| CSS class name for the selected sort item |
| template                  	| Function 	| Customise the look and feel of the sort component by using this function. You will get the sort data as an argument to this function |
| action                    	| String   	| Action on which sort should trigger: "click" or "change" |

# Product Views Config

| OPTIONS | DATATYPE | DESCRIPTION |
|-----------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
| el                        	| Element  	| Element in which to render the product views component |
| viewTypes                 	| String   	| Product view types to be displayed: "LIST" or 'GRID" |
| action                    	| String   	| Action on which product view change should be triggerd: "click" or "change" |
| viewTypeClass             	| String   	| Additonal CSS class name to be added to the product view type elements |
| selectedViewTypeClass     	| String   	| Additional CSS class name to be added to the selected view type element |

# Breadcrumb Config

breadcrumb options are available here.

| OPTIONS | DATATYPE | DESCRIPTION |
|-----------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
| enabled                   	| Boolean  	| Turn on this flag if you want to show breadcrumbs (if it is available) on your page |
| el                        	| Element  	| Element in which to render the breadcrumbs |
| selectorClass             	| String   	| Additional CSS class name for each breadcrumb item |
| template                  	| Function 	| Customise the look and feel of the breadcrumb component by defining this function that is expected to return a HTML string for the template |

# Spell Check Config

| OPTIONS | DATATYPE | DESCRIPTION |
|-----------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------    
| enabled                   	| Boolean  	| Turn this on for enabling spell check  |
| el                        	| Element  	| Element in which to render the spellcheck component |
| template                  	| Function 	| Customise the look and feel of the spellcheck component by returning your custom HTML string from this function. This function gets the spellcheck information as an argument |

# Variants Config

variant options can be configured here

| OPTIONS | DATATYPE | DESCRIPTION |
|-----------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
| enabled                   	| Boolean  	| Turn this flag on for enabling variants |
| count                     	| Number   	| Indicate the number of variants to be shown |
| groupBy                   	| String   	| Variants will be grouped based on this filed value. The name of the field has to be the same one as in your catalog |
| attributes                	| Array    	| List of fields you need for each variant |
| mapping                   	| Object   	| Field mapping of the attributes to be displayed to the variant attributes |

# Loader Config

| OPTIONS | DATATYPE | DESCRIPTION |
|-----------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
| template | Function | |
| el | Element | Element in which to render the loader component |


# No Results Config

| OPTIONS | DATATYPE | DESCRIPTION |
|-----------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
| template | Function |  |
| el | Element | Element in which to render the no results component |

## Contributions

Use [Github issues](https://github.com/unbxd/search-JS-library/issues) for requests

To contribute to the project, read the [contribution guidelines](CONTRIBUTE.md)


## Changelog

Changes are tracked in the [changelog](CHANGELOG.md)
