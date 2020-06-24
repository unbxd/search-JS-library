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

| Option                	| Datatype 	| Description                                                                                                                	|
|-----------------------	|----------	|----------------------------------------------------------------------------------------------------------------------------	|
| searchBoxSelector     	| Element  	| requires an html element. Search input will be captured from this element                                                  	|
| searchTrigger         	| String   	| requires an event name. search will be triggered after this event triggered eg:'click'                                     	|
| siteKey               	| String   	| given site key                                                                                                             	|
| apiKey                	| String   	| given api key                                                                                                              	|
| sdkHostName           	| String   	| api domain                                                                                                                 	|
| productType           	| String   	| SEARCH or BROWSE or CATEGORY                                                                                               	|
| searchQueryParam      	| String   	| search term will be appended to this.                                                                                      	|
| searchResultsSelector 	| Element  	| requires an html element. products will be rendered here.                                                                  	|
| searchResultsTemplate 	| function 	| this function has two parameters. product and idx product is the each product object. idx is the index of the each product 	|
| productItemClass      	| String   	| requires a css class name. this should be same as the class given for the product card                                     	|
| fields                	| Array    	| an array of required parameters needed in product object                                                                   	|
| facetsSelector        	| Element  	| requires an html element to place facet elements                                                                           	|

## Contributions

Use [Github issues](https://github.com/unbxd/search-JS-library/issues) for requests

To contribute to the project, read the [contribution guidelines](CONTRIBUTE.md)

## Changelog

Changes are tracked in the [changelog](CHANGELOG.md)