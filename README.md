<a href="https://www.npmjs.com/package/@unbxd-ui/vanilla-search-library">
  <img alt="npm" src="https://img.shields.io/npm/v/@unbxd-ui/vanilla-search-library?color=blue">
</a>
<a href="https://www.npmjs.com/package/@unbxd-ui/vanilla-search-library">
  <img alt="npm" src="https://img.shields.io/npm/l/@unbxd-ui/vanilla-search-library">
</a>
<a href="https://www.npmjs.com/package/@unbxd-ui/vanilla-search-library">
  <img alt="npm" src="https://img.shields.io/npm/dm/@unbxd-ui/vanilla-search-library">
</a>

# search-JS-library
A JavaScript library for building performant and quick search experiences with Unbxd.


## Getting started

Library can be used in 2 ways

### ES6
Install `@unbxd-ui/vanilla-search-library` using npm.

```shell
npm install @unbxd-ui/vanilla-search-library --save
```

Import the UnbxdSearch function in your project

```js
import UnbxdSearch from "@unbxd-ui/vanilla-search-library";
```

### ES5

You can also use a global-friendly UMD build:

```html
<script src="http://unbxdsdk.com/search/v1.0.0/unbxdVanillaSearch.js" type="text/javascript"></script>
```

Now you are ready to start using the components.

## Documentation
API documentation is available <a href="http://cxdoc.unbxd.io/search-JS-library/">here</a>


## Examples / Recipies

<ul>
    <li>
        <a href="#">Basic (default template) : ES5</a>
    </li>
    <li>
        <a href="#">Basic (default template) : ES6</a>
    </li>
    <li>
        <a href="#">Custom product card</a>
    </li>  
    <li>
        <a href="#">Custom facet template</a>
    </li>
    <li>
        <a href="#">Pagination: infinite scroll</a>
    </li>  
    <li>
        <a href="#">Pagination: fixed size</a>
    </li>  
    <li>
        <a href="#">Pagination: Load More</a>
    </li> 
    <li>
        <a href="#">Custom sort template</a>
    </li>   
    <li>
        <a href="#">Page Views (grid or list)</a>
    </li> 
    <li>
        <a href="#">Spell check / Did you mean view</a>
    </li> 
    <li>
        <a href="https://codesandbox.io/s/friendly-microservice-to3r8?file=/index.html">Customised</a>
    </li>
</ul>


## Full configuration List

| OPTIONS               | DATATYPE | DESCRIPTION                                                                                                                                                             |
|-----------------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|                       |          |                                                                                                                                                                         |
| siteKey               | String   | requires an html element. Search input will be captured from this element                                                                                               |
| apiKey                | String   | given api key                                                                                                                                                           |
| sdkHostName           | String   | api domain                                                                                                                                                              |
| productType           | String   | SEARCH or BROWSE or CATEGORY                                                                                                                                            |
| searchQueryParam      | String   | search term will be appended to this.                                                                                                                                   |
| productAttributes     | Array    | an array of required parameters needed in product object                                                                                                                |
| defaultFilters        | Object   | to apply default filters, this will be applied in all api requests                                                                                                      |
| gridCount             | Number   | If you wish to have grid type user interface, then you can configure how many columns you will to have in a row                                                         |
| unbxdAnalytics        | Boolean  | if you wish to add unbid analytics along with.                                                                                                                          |
| searchResultsTemplate | Function | this function has two parameters. product and idx product is the each product object.idx is the index of the each product                                               |
| productItemClass      | String   | this class name will be applied to each product card. it need to be added in search results template                                                                    |
| noResultContainer     | Element  | if you wish to render a no results page                                                                                                                                 |
| noResultsTemplate     | Function | custom no results messages designs                                                                                                                                      |
| facet                 | Object   | here you can configure customised facets. you can find detail information here - [Facet Config](#Facet-Config)                                                          |
| spellCheck            | Object   | you can configure all spellcheck elements here. read more information here [Spell Check](#Spell-Check)                                                                   |
| loaderTemplate        | Function | You can provide a loader element to show ajax loading                                                                                                                   |
| loaderContainer       | Element  | element to place the loader                                                                                                                                             |
| sort                  | Object   | here you can customise the sort. you can find detail information here - [Sort Config](#Sort-Config)                                                                     |
| pageSize              | Object   | configure page size object here you find more information here. -[PageSize Config](#PageSize-Config)                                                                    |
| facetDepth            | Number   | configure how many levels of category filter you wish to have                                                                                                           |
| breadcrumb            | Object   | customise breadcrumbs here. find more details here [Breadcrumb Config](#Breadcrumb-Config)                                                                              |
| productView           | Object   | configure product view types here, this config helps you to modify the product card list view or grid view.  find more information here[Product Views](#Product-Views)  |
| variants              | Object   | config to set the vairants. find more information here [variants](#variants)                                                                                            |
| fireAnalyticsEvents   | Boolean  | you wish to have unbid analytics along with sdk.                                                                                                                        |
|                       |          |                                                                                                                                                                         |
|                       |          |                                                                                                                                                                         |


# Facet Config
 facet configuration table is available here.

| OPTIONS                   	| DATATYPE 	| DESCRIPTION  
|-----------------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|                                                                                                                                                            	|
| facetsEl                  	| Element  	| Element to place facet elements                                                                                                                                          	|
| facetTemplate             	| Function 	| function to render facet wrapper template. has two arguments. facetInfo and facets facetInfo will give you the each facet and facets will give the facets elements       	|
| facetItemTemplate         	| Function 	| customise filters here. has two arguments. facet - each facet item object filter - each filter value                                                                     	|
| facetMultiSelect          	| Booelan  	| to enable the multiple selection og facets. by default it is true                                                                                                        	|
| facetClass                	| String   	| css class name the facet item. optional.                                                                                                                                 	|
| facetAction               	| String   	| 'click' or 'change' based on the facet item                                                                                                                              	|
| selectedFacetClass        	| String   	| css class name for the selected facet items                                                                                                                              	|
| selectedFacetsEl          	| Element  	| an element to place the selected facets. if you dont provide this element selected facets will be rendered along with facets                                             	|
| selectedFacetTemplate     	| Function 	| customise the selected facet here. provided 2 arguments. selectedFacet : selected facet  filter : selected filter object                                                 	|
| rangeFacetEl              	| Element  	| placeholder to render the rangefacet                                                                                                                                     	|
| rangeTemplate             	| Function 	| if you wish to customise the range facets. has one argument, will provide the list of range facets available                                                             	|
| rangeWidgetConfig         	| Function 	| configure the default range slider. has 2 properties. minLabel : prefix for the min value maxLabel : prefix for the max value                                            	|
| multiLevelFacetSelector   	| String   	| class name for the each multi level facet item                                                                                                                           	|
| multiLevelFacetEl         	| Element  	| placeholder to render multilevel facet element                                                                                                                           	|
| facetDepth                	| 4        	| configure how many levels of category filter you wish to have                                                                                                            	|
| clearFacetsSelector       	| String   	| Class name for button to clear the selected filters under a facet                                                                                                        	|
| removeFacetsSelector      	| String   	| for deleting each selected filter under a facet. this class name is must to work                                                                                         	|
| onFacetLoad               	| function 	| if you wish to do something after each facet selection                                                                                                                   	|
| applyMultipleFilters      	| Boolean  	| if you wish to apply multiple filters together                                         

#Spell Check
 Detailed information about facets will be available here

#Sort Config 
 detailed iformation about sort will be available here

#PageSize Config
 below are the available page size configuration

#Breadcrumb Config
  breadcrumb options are available here.

#Product Views
  list and grid view selectors

#variants
    variant options can be configured here

## Contributions

Use [Github issues](https://github.com/unbxd/search-JS-library/issues) for requests

To contribute to the project, read the [contribution guidelines](CONTRIBUTE.md)

## Changelog

Changes are tracked in the [changelog](CHANGELOG.md)