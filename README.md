
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


  

(*) Need to add provided polyfills. Please refer this <a  href="../public/examples/internetExplorer.html">Example</a>

## Getting started

  

Library can be used in 2 ways

  

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

<script  src="http://unbxdsdk.com/search/v1.0.0/unbxdVanillaSearch.js"  type="text/javascript"></script>

```

  

Now you are ready to start using the components.

  

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
 - <a  href="https://codesandbox.io/s/friendly-microservice-to3r8?file=/index.html">Customised</a>
  - <a  href="../public/examples/internetExplorer.html">IE10</a>

  

# Full configuration List


  
| OPTIONS | DATATYPE | DESCRIPTION |
|-----------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
| siteKey | String | This value can be found in UNBXD dashboard. It is unique for every search site created in the dashboard. |
| apiKey | String | This is a unique for every user account. It can also be found in dashboard.|
| sdkHostName | String | api domain |
| searchQueryParam | String | search term will be appended to this. 
| noResultEl | Element | if you wish to render a no results page |
| noResultsTemplate | Function | custom no results messages designs |
| facet | Object | here you can configure customised facets. you can find detail information here - [Facet Config](#Facet-Config) |
| pagination | Object | here you can configure pagination. you can find detail information here - [Pagination](#Pagination) |
| spellCheck | Object | DOM element to display spell suggestion. Please ignore incase of _browse_ and _category_. read more information here [Spell Check](#Spell-Check) |
| loaderTemplate | Function | You can provide a loader element to show ajax loading |
| loaderEl | Element | element to place the loader |
| sort | Object | here you can customise the sort. you can find detail information here - [Sort Config](#Sort-Config) |
| pageSize | Object | The total number of results to be displayed in a single call. The value should be greater than ZERO. _It is suggested that the value to be multiple of number of columns (ex. if 3 columns then 15 or 18 or 21)._ here you find more information here. -[PageSize Config](#PageSize-Config) |
| facetDepth | Number | configure how many levels of category filter you wish to have |
| breadcrumb | Object | customise breadcrumbs here. find more details here [Breadcrumb Config](#Breadcrumb-Config) |
| productView | Object | configure product view types here, this config helps you to modify the product card list view or grid view. find more information here[Product Views](#Product-Views) |
| variants | Object | Set this object, if client has variant products to display in the search view. Default is falsefind more information here [variants](#variants) |
| fireAnalyticsEvents | Boolean | you wish to have unbid analytics along with sdk. |
| hashMode | Boolean | you wish the url changes on hash change |
| updateUrls | Boolean | if you dont need url tracking make it false, by default it is true |
| actionBtnClass  | String  | css class, if you wish to trigger click on your custom elements, add this class |
| actionChangeClass  | String  | css class, if you wish to trigger change on your custom input elements, add this class |
| actionCallback  | Function  | callback function for you custom element  |
| | | |


# Search template Config

search template options are configured under 'products' object.

| OPTIONS | DATATYPE | DESCRIPTION |
|-----------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
| gridCount | Number | If you wish to have grid type user interface, then you can configure how many columns you will to have in a row |                                                                                                                                                                                                                                                                                                                            | productAttributes | Array | This is an array of all required fields for generating result template. This is helpful to load the results faster. |
| defaultFilters | Object | to apply default filters, this will be applied in all api requests |
| template | Function | this function has two parameters. product and idx product is the each product object.idx is the index of the each product |
| productItemClass | String | this class name will be applied to each product card. it need to be added in search results template |
| productType | String | SEARCH or BROWSE or CATEGORY |
| attributesMap | Object | field mappings for the current product card |
| el | Element | Element to place the search template |
| | |

# loader Config


| OPTIONS | DATATYPE | DESCRIPTION |
|-----------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
| template | Function | |
| el | Element | Ellement to place the loader |
| | |




# noResults Config


| OPTIONS | DATATYPE | DESCRIPTION |
|-----------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
| template | Function |  |
| el | Element | Element to place the no results template |
| | |


# Facet Config

facet configuration table is available here.

  

| OPTIONS | DATATYPE | DESCRIPTION |
|-----------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
| facetsEl | Element | Element to place facet elements |
| facetTemplate | Function | function to render facet wrapper template. has two arguments. facetInfo and facets facetInfo will give you the each facet and facets will give the facets elements |
| facetItemTemplate | Function | customise filters here. has two arguments. facet - each facet item object filter - each filter value |
| facetMultiSelect | Booelan | to enable the multiple selection og facets. by default it is true |
| facetClass | String | css class name the facet item. optional. |
| facetAction | String | 'click' or 'change' based on the facet item |
| selectedFacetClass | String | css class name for the selected facet items |
| selectedFacetsEl | Element | an element to place the selected facets. if you dont provide this element selected facets will be rendered along with facets |
| selectedFacetTemplate | Function | customise the selected facet here. provided 2 arguments. selectedFacet : selected facet filter : selected filter object |
| rangeFacetEl | Element | placeholder to render the rangefacet |
| rangeTemplate | Function | if you wish to customise the range facets. has one argument, will provide the list of range facets available |
| rangeWidgetConfig | Function | configure the default range slider. has 2 properties. minLabel : prefix for the min value maxLabel : prefix for the max value |
| multiLevelFacetSelector | String | class name for the each multi level facet item |
| multiLevelFacetEl | Element | placeholder to render multilevel facet element |
| facetDepth | 4 | configure how many levels of category filter you wish to have |
| clearFacetsSelector | String | Class name for button to clear the selected filters under a facet |
| removeFacetsSelector | String | for deleting each selected filter under a facet. this class name is must to work |
| onFacetLoad | function | if you wish to do something after each facet selection |
| applyMultipleFilters | Boolean | if you wish to apply multiple filters together |
| isCollapsible | Boolean | if you wish to have accordian on facets |
| defaultOpen | String | Available options ALL , FIRST , NONE |
| isSearchable | Boolean | if you wish to have a search feature on facets |
| searchPlaceHolder | String | placeholder for the facet search input |
| textFacetWrapper | String | css class for the facets list |


  
# Pagination


| OPTIONS | DATATYPE | DESCRIPTION |
|-----------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            	
| el                        	| Element  	| placeholder to place the pagination element                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        	|
| type                      	| String   	| 'FIXED_PAGINATION' or 'INFINITE_SCROLL' or 'CLICK_N_SCROLL'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        	|
| onPaginate                	| Function 	| call back function after pagination.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	|
| action                    	| String   	| 'click' or 'change' to make the pagination                         
| template                  	| Function 	| for customising the default pagination look.  it has an argument(object) to provide the pagination  information |  



# Spell Check

| OPTIONS | DATATYPE | DESCRIPTION |
|-----------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------    
| enabled                   	| Boolean  	| for enabling spell check                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           	|
| el                        	| Element  	| for placing the spellcheck element                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 	|
| template                  	| Function 	| for modifying the default look of spellcheck                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       	|
|                           	|          	|   


  

# Sort Config

| OPTIONS | DATATYPE | DESCRIPTION |
|-----------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
| el                        	| Element  	| placeholder for the sort element                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   	|
| options                   	| Array    	| array of sort options(Object)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      	|
| sortClass                 	| String   	| css class name for the sort item, make sure you  will be providing this information in template                                                                                                                                                                                                                                                                                                                                                                                                                                                    	|
| selectedSortClass         	| String   	| css class for the selected sort item                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	|
| template                  	| Function 	| modify the default look of the sort. provides and argument (object) gives you the selected sort                                                                                                                                                                                                                                                                                                                                                                                                                                                    	|
| action                    	| String   	| 'click' or 'change' as per the sort item                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           	|
|                           	|          	|   

  

# PageSize Config

| OPTIONS | DATATYPE | DESCRIPTION |
|-----------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
| pageSize                  	| Number   	| number of results per page                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         	|
| options                   	| Array    	| array of number of desired page sizes (number)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     	|
| pageSizeClass             	| String   	| class name for page size element                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   	|
| selectedPageSizeClass     	| String   	| css class name for the selected page size option                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   	|
| action                    	| String   	| click or change based on the customised template                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   	|
| template                  	| Function 	| for modifying the default look of the element                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      	|
| el                        	| Element  	| placeholder for the page size element                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              	|
|                           	|          	|    


  

# Breadcrumb Config

breadcrumb options are available here.

| OPTIONS | DATATYPE | DESCRIPTION |
|-----------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
| enabled                   	| Boolean  	| for showing breadcrumbs if it is available                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         	|
| el                        	| Element  	| placeholder to append the breadcrumbs                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              	|
| selectorClass             	| String   	| css class for the each breadcrumb item                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             	|
| template                  	| Function 	| if you wish to modify default breadcrumb template  


  

# Product Views

| OPTIONS | DATATYPE | DESCRIPTION |
|-----------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
| el                        	| Element  	| an element to place the product views element.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     	|
| action                    	| String   	| 'click' or 'change' event for the product view element.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            	|
| viewTypeClass             	| String   	| css classes for the product view element                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           	|
| selectedViewTypeClass     	| String   	| css class name for the selected view type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          	|
| viewTypes                 	| String   	| 'LIST' or 'GRID"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   	|
|                           	|          	|  

  

# variants

variant options can be configured here

| OPTIONS | DATATYPE | DESCRIPTION |
|-----------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
| enabled                   	| Boolean  	| for enabling the variants                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          	|
| count                     	| Number   	| how many variants required                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         	|
| groupBy                   	| String   	| variants will be grouped based on this property. has to get from your catalogue                                                                                                                                                                                                                                                                                                                                                                                                                                                                    	|
| attributes                	| Array    	| provide the list of fields you need for each variants                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              	|
| mapping                   	| Object   	| if you wish to map the product attributes to the variant attributes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                	|
|                           	|          	|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    

  

## Contributions

  

Use [Github issues](https://github.com/unbxd/search-JS-library/issues) for requests

  

To contribute to the project, read the [contribution guidelines](CONTRIBUTE.md)

  

## Changelog

  

Changes are tracked in the [changelog](CHANGELOG.md)
