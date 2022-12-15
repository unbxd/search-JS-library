JS Library documentation
========================

> This document is ONLY for the customers using the new console. For the older version, [refer to the documentation here](https://unbxd.com/docs/site-search/integration-documentation/jssdk-documentation/).

>IMPORTANT: Since we are gradually migrating all our customers toward our new upgraded console, we would slowly deprecate the older version. 

Unbxd Search JS Library helps you build awesome search experiences with Unbxd Search powering the search results page. With a few simple configurations, you can quickly get up and running with our default template to experience the Unbxd Search functionalities.

### Version

The current version is _v2.0.0_.

Quick Integration with Unbxd Template
-------------------------------------

There are two ways in which you can quickly get up and running with our default template to try out our JS Library functionalities:

If you have a console account already, follow the below steps:  
  

1.  Go to the console dashboard  & click the _Website Preview_ button.
2.  Then click the _Download UI Kit_ button to download the Unbxd Default template package for your catalog.
3.  Unzip the package & open the index.html file in your browser to view the search results landing page for your catalog with the Unbxd default template.

Or,

1.  Download the Unbxd Search Library default template package from [here](https://libraries.unbxdapi.com/sdk-demo/v2/Unbxd-Search-SDK-Demo.zip) .
2.  Unzip the package & open the index.html file inside the folder.
3.  Update the global variables **UNBXD\_SITE\_KEY** and **UNBXD\_API\_KEY** present in the <head> section <script>  tag of the _index.html_ file with your Site key & API keys.
```js
    window.UNBXD\_SITE\_KEY\= < your site key\>//yoursitekey
    window.UNBXD\_API\_KEY\= < your API key\>//yourapikey
```

Refer to [this section](https://unbxd.com/docs/site-search/documentation/configure-site-profile/) for steps on how to get the Site Key & API Key for your account
4.  Update the global variable “**UNBXD\_MAPPED\_FIELDS**” with the field mapping of your catalog fields.  
```js
 window.UNBXD_MAPPED_FIELDS = {
   "unxTitle": "title",
  "unxImageUrl": "Image_Link",
   "unxPrice": "Price",
   "unxDescription":" productDescription"
};
```
    Refer to [this section](https://unbxd.com/docs/site-search/documentation/configure-site-profile/) on how to get these field mappings for your account.  
      
    Finally, open index.html in your browser to view the search results landing page for your catalog with the Unbxd default template.

Quick Integration to your Site
------------------------------

To integrate the JS Library into your site, follow the following steps:

1.  Include the JS Library. This can be done in two ways:  
    a. Adding it as a URL to your HTML file.  
    First, add the following CSS file into the **“** section of your HTML page to get the Unbxd default theme styles. 
    
```js
<link rel="stylesheet" href="https://libraries.unbxdapi.com/search-sdk/v2.0.0/vanillaSearch.min.css" /> 
```
Then add the following script file for the library at the end of the body section.
    
```js
<script type="text/javascript" src="https://libraries.unbxdapi.com/search-sdk/v2.0.0/vanillaSearch.min.js">
```

This will set the “UnbxdSearch” constructor on the window object.  
    b. Install it via npm using the following command
    
```js
npm i @unbxd-ui/vanilla-search-library
```

and import the UnbxdSearch class like below:
```js
import  UnbxdSearch  from  "@unbxd-ui/vanilla-search-library";
```

**Note**: To include default CSS, use the below command
```js
import "@unbxd-ui/vanilla-search-library/public/dist/css/vanillaSearch.css";
``` 
or If you are using SCSS, include the below file
```js
import "@unbxd-ui/vanilla-search-library/styles/index.scss";
```

2.  Create a search object using UnbxdSearch(class/constructor) with the relevant configs.
```js
window.unbxdSearch = new UnbxdSearch({
 siteKey: "demo-unbxd700181503576558",
 apiKey: "fb853e3332f2645fac9d71dc63e09ec1",
 products:{
    productType:"SEARCH",
    productAttributes: [
            "title",
            "uniqueId",
            "price",
            "sku",
            "imageUrl",
            "displayPrice",
            "salePrice",
            "sortPrice"
      ]
 }
});
```
A full configuration will look like:
```js
window.unbxdSearch = new UnbxdSearch({
 siteKey: "demo-german-unbxd809051586180937",
 apiKey: "16e3cf8d510c50106d64f1ebb919b34e",
 searchBoxEl: document.getElementById("unbxdInput"),
 searchButtonEl: document.getElementById("searchBtn"),
 products:{
   el:document.getElementById("searchResultsWrapper"),
   attributesMap: {
      "unxTitle": "title",
      "unxImageUrl": "imageUrl"
      "unxPrice": "displaySalePrice"
   },
   productAttributes: [
      "title",
      "imageUrl",
      "price"
   ]
 },
 spellCheck: {
   enabled: true,
   el: document.getElementById("didYouMeanWrapper")
 },
 noResults: {
     el: document.getElementById("noResultWrapper")
 },
 facet: {
   facetsEl: document.getElementById("facetsWrapper"),
   selectedFacetsEl: document.getElementById("selectedFacetWrapper"),
   applyMultipleFilters:false,
   defaultOpen:"FIRST",
   isCollapsible: true,
   isSearchable: true
 },
 pagination: {
   type: "FIXED_PAGINATION",
   el:document.querySelector("#clickScrollContainer"),
   onPaginate:function(data) {
   }
 },
 breadcrumb: {
   el: document.getElementById("breadcrumpContainer")
 },
 pagesize: {
   el: document.getElementById("changeNoOfProducts")
 },
 sort: {
   el: document.getElementById("sortWrapper"),
   options: [
     {
       value: "sortPrice desc",
       text: "Price High to Low"
     },
     {
       value: "sortPrice asc",
       text: " Price Low to High"
     }
   ]
 },
 loader :{
     el:document.getElementById("loaderEl")
 },
 productView:{
   el: document.getElementById("productViewTypeContainer"),
   defaultViewType: "GRID"
 },
 banner: {
   el: document.getElementById("bannerContainer"),
   count: 1
 }
});
```

You can also modify the configs anytime using the “**updateConfig**” method on the returned object. “updateConfig” accepts a new config object as an argument which will be merged with the existing config object.
```js
const  unbxdSearch = new UnbxdSearch({
 siteKey: "demo-unbxd700181503576558",
 apiKey: "fb853e3332f2645fac9d71dc63e09ec1",
 products:{
    productType:"SEARCH"
 }
});
unbxdSearch.updateConfig({
 products:{
    productType:"CATEGORY"
 }
});
```
For a full list of all available configs refer to the “List of Available Configurations” section below.

### Nomenclature

You will see below terms more:

*   `el` – The term el refers to a DOM element. So the rendered component will be rendered inside this DOM element.  
    Ex: document.getElementById(“searchResultsWrapper”).

*   `template` – templates are functions where you can return the HTML string that needs to be rendered. This provides you the power of entire Javascript to build your desired HTML string
*   All of the class names generated by the library will have the prefix **“UNX-“**. So you can use it to customize styles.

Detailed integration guide
--------------------------

The final integrated result that we are aiming at with this quickstart can be seen at this [codesandbox](https://codesandbox.io/s/categoryfacet-t0q7l).  
  

Let us walk through the important configs that need to be passed along with their values for powering the search results page

Authentication
--------------

Once installed, you need to authenticate the Unbxd library using your Unbxd account keys (also known as Authentication Keys).

Whenever a customer signs up with Unbxd, they are issued one or more site keys and API keys depending on their use case. Some common scenarios:

1.  For a customer with one website and two environments (production and staging), 2 site keys (one for each environment) and  1 API key is issued
2.  For a customer with more than one website (multi website vendor), the site key would be issued for every website + environment combination. So there would be an “n” number (equal to the number of website’s) of API keys generated.

For multiple site keys, check if you have:

*   more than one environment
*   more than one website
*   different product set for staging and live, or
*   wish to track search performance and clicks separately for every microsite.

To get your Site Key and API Key in the console, please refer to the steps mentioned in the [Configure Site section](https://unbxd.com/docs/site-search/documentation/configure-site-profile/).

Pass the Site Key and API Key that you get from the console in the “siteKey” and “APIKey” configs.  
  

**siteKey:**

**Data type**

string

**Required**

true

**Default**

NA

**Description**

Site key assigned by Unbxd (the unique identifier for each customer/site)

**APIKey:**

**Data type**

string

**Required**

true

**Default**

NA

**Description**

Unique API key assigned by unbxd

At the end of this step, you should have the Site Key & API Key which can be passed into the “siteKey” & “APIKey” configs as shown below:  

const unbxdSearch =new UnbxdSearch({

siteKey:"",

apiKey:""

});

const unbxdSearch =new UnbxdSearch({ siteKey:"", apiKey:"" });

const  unbxdSearch =new UnbxdSearch({
 siteKey:"",
 apiKey:""
});

Types of Pages to render
------------------------

Unbxd has two product offerings:

*   SEARCH:  powers search results pages 
*   BROWSE or CATEGORY: powers category listing pages

Pass a config parameter called “productType” to indicate whether you want to render the search results page (productType= “SEARCH”) or the category listing page (productType= “CATEGORY”)

const unbxdSearch = new UnbxdSearch({

siteKey:"your site key",

apiKey:"your API key",

products:{

productType:"CATEGORY" //SEARCH , CATEGORY or BROWSE

}

});

const unbxdSearch = new UnbxdSearch({ siteKey:"your site key", apiKey:"your API key", products:{ productType:"CATEGORY" //SEARCH , CATEGORY or BROWSE } });

const  unbxdSearch = new UnbxdSearch({
 siteKey:"your site key",
 apiKey:"your API key",
products:{
    productType:"CATEGORY" //SEARCH , CATEGORY or BROWSE
}
});

**productType:**

**Data type**

string

**Required**

true

**Default**

search

**Description**

Used to indicate if the page is search or category.

Possible values: search (or) category

“search” -> the search term in the url is used by library

“category”->  the getCategoryID function will be invoked to identify the category which needs to be displayed for the given url.

**Dependency**

For Search page (i.e. productType= “SEARCH”), 

For Category page (i.e. productType= “CATEGORY”),  **getCategoryID** function must be provided

At the end of this step, you should choose a “productType” of the page that you want to render and pass it in the config as shown below:

const unbxdSearch = new UnbxdSearch({

siteKey: "-your site key-",

apiKey: "-your API key-",

products:{

productType:"SEARCH"

}

});

const unbxdSearch = new UnbxdSearch({ siteKey: "-your site key-", apiKey: "-your API key-", products:{ productType:"SEARCH" } });

const  unbxdSearch = new UnbxdSearch({
 siteKey: "-your site key-",
 apiKey: "-your API key-",
products:{
    productType:"SEARCH"
}
});

Configuring the Page
--------------------

Before we delve into the next set of configs, let’s first understand the most common sections present in a search results page or category landing page.  
A search results page or a category landing page is made up of the following set of sections:

1.  Products list section
    1.  View type could be grid or list view
    2.  Sort by widget
    3.  Pagination widget with no. of products per page control
    4.  Pagination could be an infinite scroll or page number based
    5.  Number of results loaded on a page
2.  Facets section
3.  Spell check / search results message section
4.  Merchandising banners section  
      
    

Here is a graphical representation of the various sections on a search results page:

[![](https://unbxd.com/docs/wp-content/uploads/2020/05/graphical-rep-in-sdk.png)](https://unbxd.com/docs/wp-content/uploads/2020/05/graphical-rep-in-sdk.png)

In the following sections, we will discuss how to configure and render each of these features with the Unbxd Search JS Library.

### Search input box & search button selector

The following two configurations are used by the library to bind keyboard and mouse events to the search input field and search button on your website.

**searchBoxEl:**

**Data type**

DOM element

**Required**

YES

**Default**

null

**Description**

HTML DOM element of the search input box where the search query is entered,

Eg: document.getElementById(“unbxdInput”)

**searchButtonEl:**

**Data type**

DOM element

**Required**

optional

**Default**

 null

**Description**

HTML DOM element of the search button on click of which the search is triggered.

Ex: document.getElementById(“searchBtn”)

<div class\="UNX-input-wrapper"\>

<input id="unbxdInput" class\="UNX-input" type="text"/\>

<button id="searchBtn" class\="fa fa-search"\></button\>

</div\>

<div class="UNX-input-wrapper"> <input id="unbxdInput" class="UNX-input" type="text"/> <button id="searchBtn" class="fa fa-search"></button> </div>

<div class="UNX-input-wrapper">
<input id="unbxdInput" class="UNX-input" type="text"/>
<button id="searchBtn" class="fa fa-search"></button>
</div>

At the end of this step, you should have configured the “input” & “search button” as shown below:

window.unbxdSearch = new UnbxdSearch({

siteKey: "<your site key>",

apiKey: "<your API key>",

searchBoxEl: document.getElementById("unbxdInput"),

searchButtonEl: document.getElementById("searchBtn"),

});

window.unbxdSearch = new UnbxdSearch({ siteKey: "<your site key>", apiKey: "<your API key>", searchBoxEl: document.getElementById("unbxdInput"), searchButtonEl: document.getElementById("searchBtn"), });

window.unbxdSearch = new UnbxdSearch({
  siteKey: "<your site key>",
  apiKey: "<your API key>",
  searchBoxEl: document.getElementById("unbxdInput"),
  searchButtonEl: document.getElementById("searchBtn"),
});

### Search Results/Product Options 

This is the place where products from the search results will be rendered.

[![](https://unbxd.com/docs/wp-content/uploads/2020/05/search-result-render.png)](https://unbxd.com/docs/wp-content/uploads/2020/05/search-result-render.png)

You can configure the search results section by updating the required configs under the “products” config

The following are the various options available under the “products” config object:

**OPTIONS**

**DATATYPE**

**DEFAULT VALUE**

**DESCRIPTION**

productType

String

“SEARCH”

Type of products page to render. Accepted values are SEARCH or BROWSE or CATEGORY

el

Element

null

Element in which to render the search results

template

Function

[default](https://github.com/unbxd/search-JS-library/blob/master/src/modules/searchResults/ui.js)

Customise the look and feel of the product card by returning your custom HTML string from this function. This function gets 5 parameters: complete product object and index of the current product, swatches, selected view type, product config

productAttributes

Array

\[“title”, “uniqueId”, “price”, “sku”, “imageUrl”, “displayPrice”, “salePrice”, “sortPrice”, “productDescription”, “unbxd\_color\_mapping”, “colorName”, “color”\]

This is an array of all required fields for generating the result template. This is helpful to load the results faster.

attributesMap

Object

{“unxTitle”: “title”,”unxImageUrl”: “imageUrl”,”unxPrice”: “salePrice”,”unxStrikePrice”: “displayPrice”,”unxId”: “uniqueId”,”unxDescription”: “productDescription”}

Field mappings for the data to be displayed in the product card

gridCount

Number

Adjusts as per screen size

If you want to have grid type user interface, then you can configure how many columns you want to have in a row with this config. By default it will adjust according to screen size.

productItemClass

String

“product-item”

Additional class name to be added to each product card

onProductClick

Function

function(product, event) {}

Callback functions called on click of a product card. This function gets the product object & the event object as params

#### Sample “products” config:

products:{

el: document.getElementById("searchResultsWrapper"),

template:function(product,idx,swatchUI,productViewType){ return \`\`},

productType:"SEARCH",

gridCount:1,

onProductClick: function(product,e) {

},

productAttributes: \[

"title",

"uniqueId",

"price",

"sku",

"imageUrl",

"displayPrice",

"salePrice",

"sortPrice",

"productDescription",

"unbxd\_color\_mapping",

"colorName",

"color"

\],

attributesMap:{

'unxTitle':'title',

'unxImageUrl':'imageUrl',

'unxPrice':'salePrice',

'unxStrikePrice':'displayPrice',

'unxId':'uniqueId',

'unxDescription':'productDescription'

}

},

products:{ el: document.getElementById("searchResultsWrapper"), template:function(product,idx,swatchUI,productViewType){ return \`\`}, productType:"SEARCH", gridCount:1, onProductClick: function(product,e) { }, productAttributes: \[ "title", "uniqueId", "price", "sku", "imageUrl", "displayPrice", "salePrice", "sortPrice", "productDescription", "unbxd\_color\_mapping", "colorName", "color" \], attributesMap:{ 'unxTitle':'title', 'unxImageUrl':'imageUrl', 'unxPrice':'salePrice', 'unxStrikePrice':'displayPrice', 'unxId':'uniqueId', 'unxDescription':'productDescription' } },

products:{
       el: document.getElementById("searchResultsWrapper"),
       template:function(product,idx,swatchUI,productViewType){ return \`\`},
       productType:"SEARCH",
       gridCount:1,
       onProductClick: function(product,e) {
       },
       productAttributes: \[
           "title",
           "uniqueId",
           "price",
           "sku",
           "imageUrl",
           "displayPrice",
           "salePrice",
           "sortPrice",
           "productDescription",
           "unbxd\_color\_mapping",
           "colorName",
           "color"
       \],
       attributesMap:{
           'unxTitle':'title',
           'unxImageUrl':'imageUrl',
           'unxPrice':'salePrice',
           'unxStrikePrice':'displayPrice',
           'unxId':'uniqueId',
           'unxDescription':'productDescription'
       }
 
   },

Read about products config more [here](https://github.com/unbxd/search-JS-library#products-config)

### Sort Options

Sorting allows you to rearrange the search results based on certain fields in a particular order.

[![](https://unbxd.com/docs/wp-content/uploads/2020/05/sort-options-main.png)](https://unbxd.com/docs/wp-content/uploads/2020/05/sort-options-main.png)

To render the **Sort By** feature, you need to configure the _sort_ config object. The following are the various options available under the object:

**OPTIONS**

**DATATYPE**

**DEFAULT VALUE**

**DESCRIPTION**

enabled

Boolean

true

Turn this off if you do not want the sort component

el

Element

null

Element in which to render the sort component

options

Array

\[{value: “price desc”,text: “Price High to Low”},{value: “price asc”,text: ” Price Low to High”},{value: “rating asc”,text: ” Rating Low to High”},{value: “rating desc”,text: ” Rating High to low”}\]

Array of sort options

sortClass

String

“UNX-sort-item”

CSS class name for the sort item, make sure you will be providing this information in template

selectedSortClass

String

“UNX-selected-sort”

CSS class name for the selected sort item

template

Function

[default](https://github.com/unbxd/search-JS-library/blob/master/src/modules/sort/index.js)

Customise the look and feel of the sort component by using this function. This function gets 2 parameters: the selected sort value and the sort config (i.e. this complete object)

action

String

“change”

Action on which sort should trigger: “click” or “change”

  
Sample “sort” config  

sort: {

el: document.getElementById("sortWrapper"),

selectedSortClass:'UNX-selected-sort',

sortClass:'UNX-sort-item',

template: function(selectedSort, sortConfig) { return \`\`},

options:\[{

value:"price desc",

text:"Price High to Low"

},

{

value:"price asc",

text:" Price Low to High"

}\],

action:'change'

},

sort: { el: document.getElementById("sortWrapper"), selectedSortClass:'UNX-selected-sort', sortClass:'UNX-sort-item', template: function(selectedSort, sortConfig) { return \`\`}, options:\[{ value:"price desc", text:"Price High to Low" }, { value:"price asc", text:" Price Low to High" }\], action:'change' },

sort: {
   el: document.getElementById("sortWrapper"),
   selectedSortClass:'UNX-selected-sort',
   sortClass:'UNX-sort-item',
   template: function(selectedSort, sortConfig) { return \`\`},
   options:\[{
        value:"price desc",
        text:"Price High to Low"
    },
    {
        value:"price asc",
        text:" Price Low to High"
    }\],
   action:'change'
},

Please find the full documentation [here](https://github.com/unbxd/search-JS-library/#sort-config).

### Pagination

Pagination helps to control the number of products displayed on the page and the type of pagination (infinite scroll, click to scroll, or fixed pagination) to display.

**Fixed Pagination**

This traditional type of pagination displays the set number of products on one page.

[![](https://unbxd.com/docs/wp-content/uploads/2020/05/traditional-pagination.png)](https://unbxd.com/docs/wp-content/uploads/2020/05/traditional-pagination.png)

**Click & Scroll**

[![](https://unbxd.com/docs/wp-content/uploads/2020/05/click-and-scroll.png)](https://unbxd.com/docs/wp-content/uploads/2020/05/click-and-scroll.png)

You can configure the pagination feature by updating the required configs under the “pagination” config object.  
  
The following are the various options available under the “pagination” config object:

**OPTIONS**

**DATATYPE**

**DEFAULT VALUE**

**DESCRIPTION**

enabled

Boolean

true

Turn this off if you do not want the pagination widget

type

String

“CLICK\_

N\_SCROLL”

Type of pagination: “FIXED\_PAGINATION” or “INFINITE\_SCROLL” or “CLICK\_N\_SCROLL”

el

Element

null

Element in which to render the pagination component

template

Function

[default](https://github.com/unbxd/search-JS-library/blob/master/src/modules/pagination/fixedPaginationView.js)

Customise the look and feel of the pagination by returning your custom HTML string from this function. This function gets 1 parameter: an object that has the pagination information

pageClass

String

“UNX-page-items”

CSS classname for the pagination component

selected

PageClass

String

“UNX-selected-page-item”

CSS classname for selected page item

onPaginate

function

(paginationInfo){}

NA

Callback function that gets called after a pagination action

pageLimit

Number

6

Number of pages to show upfront (when type is FIXED\_PAGINATION)

infinteScroll

TriggerEl

Element

window

Element on which to detect infinite scroll page boundary (when type is set to INFINITE\_SCROLL)

heightDiffTo

TriggerNextPage

Number

100

Height of the page to consider to fetch the next page data (when type is set to INFINITE\_SCROLL)

action

String

“click”

Action on which pagination should trigger: “click” or “change”

#### Sample “pagination” config

pagination : {

enabled:true,

el: document.querySelector("#clickScrollContainer"),

template: function (paginationData, pagination) { return \`\`},

pageClass:"UNX-page-items",

selectedPageClass:"UNX-selected-page-item",

type:'CLICK\_N\_SCROLL', // INFINITE\_SCROLL or CLICK\_N\_SCROLL or FIXED\_PAGINATION

infinteScrollTriggerEl:window, //if paginationType = INFINITE\_SCROLL

heightDiffToTriggerNextPage:100, //if paginationType = INFINITE\_SCROLL,

onPaginate:function(paginationInfo){},

action:'click',

pageLimit:6

}

pagination : { enabled:true, el: document.querySelector("#clickScrollContainer"), template: function (paginationData, pagination) { return \`\`}, pageClass:"UNX-page-items", selectedPageClass:"UNX-selected-page-item", type:'CLICK\_N\_SCROLL', // INFINITE\_SCROLL or CLICK\_N\_SCROLL or FIXED\_PAGINATION infinteScrollTriggerEl:window, //if paginationType = INFINITE\_SCROLL heightDiffToTriggerNextPage:100, //if paginationType = INFINITE\_SCROLL, onPaginate:function(paginationInfo){}, action:'click', pageLimit:6 }

pagination : {
       enabled:true,
       el: document.querySelector("#clickScrollContainer"),
       template: function (paginationData, pagination) { return \`\`},
       pageClass:"UNX-page-items",
       selectedPageClass:"UNX-selected-page-item",
       type:'CLICK\_N\_SCROLL', // INFINITE\_SCROLL or CLICK\_N\_SCROLL or FIXED\_PAGINATION
       infinteScrollTriggerEl:window, //if paginationType = INFINITE\_SCROLL
       heightDiffToTriggerNextPage:100, //if paginationType = INFINITE\_SCROLL,   
       onPaginate:function(paginationInfo){},
       action:'click',
       pageLimit:6
   }

### Facets

Facets are the products filters provided on your webpage  which allows customers to narrow down the search result set.

[![](https://unbxd.com/docs/wp-content/uploads/2020/05/Facets-main.png)](https://unbxd.com/docs/wp-content/uploads/2020/05/Facets-main.png)

To render the facets on the search results page,  you can use the “facet” config object to configure the various options.

**OPTIONS**

**DATATYPE**

**DEFAULT VALUE**

**DESCRIPTION**

facetsEl

Element

null

Element in which to render the facets

facetTemplate

Function

[default](https://github.com/unbxd/search-JS-library/blob/master/src/modules/facets/ui.js)

Customise the look and feel of the facets block by returning your custom HTML string from this function. This function gets 3 parameters: the complete facet block, facet values, is expanded flag (in case you have chosen collapsible facets, i.e. isCollapsible is set to true) and the search text entered for this facet block (if isSearchable is set to true)

facetItemTemplate

Function

[default](https://github.com/unbxd/search-JS-library/blob/master/src/modules/facets/ui.js)

Customise each individual facet value by returning your custom HTML string from this function. This function gets 3 parameters: the complete facet block, the current facet value and the search text entered for this facet block.

facetMultiSelect

Booelan

true

Turn this off if you want to disable the multiple selection of facets

facetClass

String

“UNX-facets-block”

Additional CSS class name to add to the the facet items

facetAction

String

“click

Event based on which to trigger facet selection / deselection: “click” or “change”

selectedFacetClass

String

“UNX-selected-facet-btn”

Additional CSS class name for the selected facet items

selectedFacetsEl

Element

null

Element in which to render the selected facets. If you don’t provide this element selected facets will be rendered along with the facet blocks

selectedFacetTemplate

Function

[default](https://github.com/unbxd/search-JS-library/blob/master/src/modules/facets/ui.js)

Customise the look & feel of the selected facets block by returning your custom HTML string from this function. This function gets 2 parameters: the selected facet complete block and the selected facet value

selectedFacetItemTemplate

Function

[default](https://github.com/unbxd/search-JS-library/blob/master/src/modules/facets/ui.js)

Customise the look & feel of the selected facet by returning your custom HTML string from this function. This function gets 2 parameters: the selected facet complete block and the selected facet value

clearAllText

String

“Clear All”

The text to show for the clear all button that clears all selected facets

rangeTemplate

Function

[default](https://github.com/unbxd/search-JS-library/blob/master/src/modules/facets/renderRangeFacets.js)

Customise the look and feel of the range facets by returning your custom HTML string from this function. This function gets 1 parameter: the list of range facets available

rangeWidgetConfig

Object

NA

Configure the default range slider. Refer to the “Facet Range Widget Config” section below to view the detailed configs

facetMultilevel

Boolean

true

Turn this on to send the multilevel parameter in the search API

facetMultilevelName

String

“Category”

Set the multilevel field name using this config

multiLevelFacetSelectorClass

String

“UNX-multilevel-facet”

Class name for each multi level facet item

multiLevelFacetTemplate

Function

[default](https://github.com/unbxd/search-JS-library/blob/master/src/modules/facets/renderBucketedSearch.js)

Customise the look and feel of multi level facets by returning your custom HTML string from this function. This function gets 3 parameters: the complete facet block, selected values and the search text entered for this facet block (if isSearchable is set to true)

facetDepth

Number

4

Configure how many levels of category filter you want to have by setting this value

clearFacetsSelectorClass

String

“UNX-clear-facet”

Class name for the button to clear the selected facets

removeFacetsSelectorClass

String

“UNX-remove-facet”

Class name for the button to delete selected facets

onFacetLoad

Function

function(facets) {}

Callback function that gets called after each facet selection or deselection. This function gets all the facets as a parameter

applyMultipleFilters

false

Boolean

Turn this on if you want to apply multiple filters together

applyButtonText

String

“Apply”

The text to show for the apply button (when applyMultipleFilters is set as true)

clearButtonText

String

“clear”

The text to show for the clear button (when applyMultipleFilters is set as true)

isCollapsible

Boolean

true

Turn this off if you do not want to have a collapsible accordian for each facet block

defaultOpen

String

“ALL”

If “isCollapsible” is true, set this config to indicate the default open facet. Available options are “ALL” , “FIRST” , “NONE”

isSearchable

Boolean

true

Turn this on if you want to have search feature for each facet block

searchPlaceHolder

String

“”

Placeholder text for the facet search input

enableViewMore

Booelan

false

Turn this on for enabling view more or less functionality for individual facets

viewMoreText

Array

\[“show all”, “show less”\]

The text to show for the view more / less button. Pass the 2 strings in array format \[, viewLessText\]. Ex: \[“View more”, “View less”\]

viewMoreLimit

Number

3

Will show view more only if the facet values are greater than this value

### Facet Range Widget Config  
  

You can configure the range sliders by setting the “rangeWidgetConfig” object under the “facet” object. Range facets will be rendered automatically along with other facets if it is configured on the console dashboard.

[![](https://unbxd.com/docs/wp-content/uploads/2020/05/facet-price-widget.png)](https://unbxd.com/docs/wp-content/uploads/2020/05/facet-price-widget.png)

The following are the various options available for configuring the range widget

**OPTIONS**

**DATATYPE**

**DEFAULT VALUE**

**DESCRIPTION**

#### minLabel

#### String

#### “”

#### Text for the lower end of the range slider

#### maxLabel

#### String

#### “”

#### Text for the higher end of the range slider

#### prefix

#### String

#### “$”

#### Prefix text to be added to the range widget value. Example “$” for price facet

#### Sample “facet” config

facet: {

facetsEl: document.getElementById("facetsWrapper"),

facetTemplate:function(facetObj, children, isExpanded,facetSearchTxt, facet){},

facetItemTemplate:function(facet,value, facetSearchText){},

facetMultiSelect:true,

facetClass:"UNX-facets-block",

facetAction:"click",

selectedFacetClass:"UNX-selected-facet-btn",

selectedFacetsEl:null,

selectedFacetTemplate:function(selections, facet){},

selectedFacetItemTemplate:function(selectedFacet,selectedFacetItem){},

clearAllText:"Clear All",

rangeWidgetConfig: {

"minLabel":"",

"maxLabel":"",

"prefix":'$'

},

facetMultilevel:true,

facetMultilevelName:"Category",

multiLevelFacetSelectorClass:"UNX-multilevel-facet",

facetDepth:4,

clearFacetsSelectorClass: "UNX-clear-facet",

removeFacetsSelectorClass: "UNX-remove-facet",

onFacetLoad:function(facets){

},

applyMultipleFilters:false,

applyButtonText:"Apply",

clearButtonText:"clear",

isCollapsible:true,

isSearchable:true,

searchPlaceHolder:"",

textFacetWrapper:"UNX-facets-item",

defaultOpen:"ALL",

enableViewMore:false,

viewMoreText:\["show all", "show less"\],

viewMoreLimit:3

}

facet: { facetsEl: document.getElementById("facetsWrapper"), facetTemplate:function(facetObj, children, isExpanded,facetSearchTxt, facet){}, facetItemTemplate:function(facet,value, facetSearchText){}, facetMultiSelect:true, facetClass:"UNX-facets-block", facetAction:"click", selectedFacetClass:"UNX-selected-facet-btn", selectedFacetsEl:null, selectedFacetTemplate:function(selections, facet){}, selectedFacetItemTemplate:function(selectedFacet,selectedFacetItem){}, clearAllText:"Clear All", rangeWidgetConfig: { "minLabel":"", "maxLabel":"", "prefix":'$' }, facetMultilevel:true, facetMultilevelName:"Category", multiLevelFacetSelectorClass:"UNX-multilevel-facet", facetDepth:4, clearFacetsSelectorClass: "UNX-clear-facet", removeFacetsSelectorClass: "UNX-remove-facet", onFacetLoad:function(facets){ }, applyMultipleFilters:false, applyButtonText:"Apply", clearButtonText:"clear", isCollapsible:true, isSearchable:true, searchPlaceHolder:"", textFacetWrapper:"UNX-facets-item", defaultOpen:"ALL", enableViewMore:false, viewMoreText:\["show all", "show less"\], viewMoreLimit:3 }

 facet: {
       facetsEl: document.getElementById("facetsWrapper"),
       facetTemplate:function(facetObj, children, isExpanded,facetSearchTxt, facet){},
       facetItemTemplate:function(facet,value, facetSearchText){},
       facetMultiSelect:true,
       facetClass:"UNX-facets-block",
       facetAction:"click",
       selectedFacetClass:"UNX-selected-facet-btn",
       selectedFacetsEl:null,
       selectedFacetTemplate:function(selections, facet){},
       selectedFacetItemTemplate:function(selectedFacet,selectedFacetItem){},
       clearAllText:"Clear All",
       rangeWidgetConfig: {
           "minLabel":"",
           "maxLabel":"",
           "prefix":'$'
       },
       facetMultilevel:true,
       facetMultilevelName:"Category",
       multiLevelFacetSelectorClass:"UNX-multilevel-facet",
       facetDepth:4,
       clearFacetsSelectorClass: "UNX-clear-facet",
       removeFacetsSelectorClass: "UNX-remove-facet",
       onFacetLoad:function(facets){
       },
       applyMultipleFilters:false,
       applyButtonText:"Apply",
       clearButtonText:"clear",
       isCollapsible:true,
       isSearchable:true,
       searchPlaceHolder:"",
       textFacetWrapper:"UNX-facets-item",
       defaultOpen:"ALL",
       enableViewMore:false,
       viewMoreText:\["show all", "show less"\],
       viewMoreLimit:3
   }

### Page Size

Page Size widget allows you to configure the number of products shown on each page:

[![](https://unbxd.com/docs/wp-content/uploads/2020/05/page-size-new.png)](https://unbxd.com/docs/wp-content/uploads/2020/05/page-size-new.png)  

To render the Page Size widget, you need to configure the “pageSize” config object.

  
The following are the various options available under the object:  
  

**OPTIONS**

**DATATYPE**

**DEFAULT VALUE**

**DESCRIPTION**

enabled

Boolean

true

Turn this off if you do not want the page size component

el

Element

null

Element in which to render the page size element

pageSize

Number

12

Number of results to be shown per page

options

Array

\[8, 12, 16, 20, 24\]

Array of desired page sizes to be rendered. _It is suggested that the value be a multiple of number of columns (ex. if 3 columns then 15 or 18 or 21)._

pageSizeClass

String

“UNX-pagesize”

Additional CSS class name to be added to the page size element

selectedPageSizeClass

String

“UNX-selected-pagesize”

Additional CSS class name to be added to the selected page size option

action

String

“change”

Action on which page size change should trigger: “click” or “change”

template

Function

[default](https://github.com/unbxd/search-JS-library/blob/master/src/modules/pageSize/pageSizeView.js)

Customise the look and feel of the page size component by defining this function that is expected to return a HTML string for the template. This function gets 2 parameters: the selected page size and the page size config (i.e. this complete object)

#### Sample “pageSize” config

pageSize: {

enabled:true,

pageSize:12,

options:\[8,12,16,20,24\],

pageSizeClass:"UNX-pagesize",

selectedPageSizeClass:"UNX-selected-pagesize",

action:'change',

template:function(){},

el:null

}

pageSize: { enabled:true, pageSize:12, options:\[8,12,16,20,24\], pageSizeClass:"UNX-pagesize", selectedPageSizeClass:"UNX-selected-pagesize", action:'change', template:function(){}, el:null }

pageSize: {
	enabled:true,
       pageSize:12,
       options:\[8,12,16,20,24\],
       pageSizeClass:"UNX-pagesize",
       selectedPageSizeClass:"UNX-selected-pagesize",
       action:'change',
       template:function(){},
       el:null
   }

### Product View

You can configure the way in which the products have to be displayed (List or Grid) with the Product Views widget.

[![](https://unbxd.com/docs/wp-content/uploads/2020/05/page-view-new.png)](https://unbxd.com/docs/wp-content/uploads/2020/05/page-view-new.png)

Update the options under the “productView” config object to configure the product view feature.  
  
  

**OPTIONS**

**DATATYPE**

**DEFAULT VALUE**

**DESCRIPTION**

enabled

Boolean

true

Turn this off if you do not want the product view component

el

Element

null

Element in which to render the product views component

template

Function

[default](https://github.com/unbxd/search-JS-library/blob/master/src/modules/productViewType/index.js)

Customise the look and feel of the product views component by using this function. This function gets 2 parameters: the selected view type and the product views config (i.e. this complete object)

defaultViewType

String

“GRID”

Product view types to be displayed by default: “LIST” or ‘GRID”

action

String

“click”

Action on which product view change should be triggerd: “click” or “change”

viewTypeClass

String

“UNX-product-view”

Additonal CSS class name to be added to the product view type elements

selectedViewTypeClass

String

“UNX-selected-product-view”

Additional CSS class name to be added to the selected view type element

####   
Sample “productView” config

productView : {

enabled:true,

el:null,

template:renderProductViewType,

action: “click”, // CLICK or CHANGE

viewTypeClass: “UNX-product-view”,

selectedViewTypeClass: “UNX-selected-product-view”,

viewTypes: “GRID”

}

productView : { enabled:true, el:null, template:renderProductViewType, action: “click”, // CLICK or CHANGE viewTypeClass: “UNX-product-view”, selectedViewTypeClass: “UNX-selected-product-view”, viewTypes: “GRID” }

productView : {
	enabled:true,
       el:null,
       template:renderProductViewType,
       action: “click”, // CLICK or CHANGE
       viewTypeClass: “UNX-product-view”,
       selectedViewTypeClass: “UNX-selected-product-view”,
       viewTypes: “GRID”
   }

### Spellcheck & Search Query

The spell check feature provides **spelling suggestions** or **spell-checks** for misspelled search queries.

[![](https://unbxd.com/docs/wp-content/uploads/2020/05/spellcheck-1.png)](https://unbxd.com/docs/wp-content/uploads/2020/05/spellcheck-1.png)

In such cases, the context-aware algorithm of Unbxd understands your visitor’s intent and sends a “**Did You Mean**” response along with a search result set for the query, if any.

You can configure the spellcheck feature by updating the required configs under the “spellCheck” config object.  
  
  

**OPTIONS**

**DATATYPE**

**DEFAULT VALUE**

**DESCRIPTION**

enabled

Boolean

true

Turn this flag on for enabling spell check

el

Element

null

Element in which to render the spellcheck component

template

Function

[default](https://github.com/unbxd/search-JS-library/blob/master/src/modules/didYouMean/spellCheckView.js)

Customise the look and feel of the spellcheck component by returning your custom HTML string from this function. This function gets 3 parameters: the search query, the suggested query text and a config object with product count details ({start, productsLn, numberOfProducts})

selectorClass

String

“UNX-suggestion”

Additional CSS class name for the spell check component

#### Sample “spellCheck” config

spellCheck:{

enabled:true,

el:document.getElementById("didYouMeanWrapper"),

template: function(query,suggestion,pages) { return \`\`},

selectorClass: "UNX-suggestion"

}

spellCheck:{ enabled:true, el:document.getElementById("didYouMeanWrapper"), template: function(query,suggestion,pages) { return \`\`}, selectorClass: "UNX-suggestion" }

spellCheck:{
       enabled:true,
       el:document.getElementById("didYouMeanWrapper"),
       template: function(query,suggestion,pages) { return \`\`},
       selectorClass: "UNX-suggestion"
   }

### Breadcrumbs

To render the breadcrumb component, set the “breadcrumb” config object.

[![](https://unbxd.com/docs/wp-content/uploads/2020/05/breadcrumbs.png)](https://unbxd.com/docs/wp-content/uploads/2020/05/breadcrumbs.png)

The following options are available under the object:

**OPTIONS**

**DATATYPE**

**DEFAULT VALUE**

**DESCRIPTION**

enabled

Boolean

true

Turn this flag on if you want to show breadcrumbs (if it is available) on your page

el

Element

null

Element in which to render the breadcrumbs

template

Function

[default](https://github.com/unbxd/search-JS-library/blob/master/src/modules/breadcrumbs/breadcrumbsView.js)

Customise the look and feel of the breadcrumb component by defining this function that is expected to return a HTML string for the template. You will get the breadcrumbs list as parameter to this function

selectorClass

String

“bread-crumb”

Additional CSS class name for each breadcrumb item

### Variants

Configure variants display by setting the “variants” config object.

[![](https://unbxd.com/docs/wp-content/uploads/2020/05/variants-SDK.png)](https://unbxd.com/docs/wp-content/uploads/2020/05/variants-SDK.png)

The following options are available under the object:  
  

**OPTIONS**

**DATATYPE**

**DEFAULT VALUE**

**DESCRIPTION**

#### enabled

#### Boolean

#### false

#### Turn this flag on for enabling variants

#### count

#### Number

5

Indicates the number of variants to be shown

groupBy

String

“v\_colour”

Variants will be grouped based on this field value. The name of the field has to be the same one as in your catalog

attributes

Array

\[“title”, “v\_imageUrl”\]

List of fields you need for each variant

mapping

Object

{“image\_url”: “v\_imageUrl”}

Field mapping of the catalog attributes to the variant attributes. This is needed to render the variant information correctly.

  
  
**Sample “variants” config  
**

variants:{

enabled:false,

count:5,

groupBy:'v\_colour',

attributes:\[

"title",

"v\_imageUrl"

\],

mapping:{

"image\_url":"v\_imageUrl"

}

},

variants:{ enabled:false, count:5, groupBy:'v\_colour', attributes:\[ "title", "v\_imageUrl" \], mapping:{ "image\_url":"v\_imageUrl" } },

variants:{
        enabled:false,
        count:5,
        groupBy:'v\_colour',
        attributes:\[
            "title",
            "v\_imageUrl"
        \],
        mapping:{
            "image\_url":"v\_imageUrl"
        }
    },

### Swatches

Configure swatches display by using the configs in this section.  
[![](https://unbxd.com/docs/wp-content/uploads/2020/05/swatches-sdk.png)](https://unbxd.com/docs/wp-content/uploads/2020/05/swatches-sdk.png)

The following options are available under the object:

**OPTIONS**

**DATATYPE**

**DEFAULT VALUE**

**DESCRIPTION**

enabled

Boolean

false

Turn this flag on for enabling swatches

attributesMap

Object

{swatchImgs: “unbxd\_color\_mapping”,

“swatchColors”: “color”, “swatchList”: “color”}

Field mapping of the catalog attributes to the swatch attributes

swatchClass

String

“UNX-swatch-btn”

Additional CSS class name for the swatches

template

Function

[default](https://github.com/unbxd/search-JS-library/blob/master/src/modules/swatches/ui.js)

Customise the look and feel of the swatches component by returning your custom HTML string from this function. This function gets the current swatch data and complete swatches list as parameters

  
  

#### Sample “swatches” config

swatches:{

enabled:true,

attributesMap:{},

swatchClass:'UNX-swatch-btn',

template:function(swatchData) {

const {

swatchColors = \[\],

swatchImgs = \[\]

} = swatchData;

let btnUI = \`\`;

swatchColors.forEach((item,id) =\> {

const imgId = swatchImgs\[id\];

if(imgId){

const img = imgId.split("::")\[1\];

btnUI+= \[\`<button data-swatch-id="${item}" data-swatch-img="${img}" data-action="changeSwatch"\`,

\`data-swatch-target=".UNX-img-block" class\="${this.swatchClass}" style="background-color:${item}"\> </button\>\`\].join('')

}

});

return \`<div class\="UNX-swatch-color-list"\>${btnUI}</div\>\`;

}

}

swatches:{ enabled:true, attributesMap:{}, swatchClass:'UNX-swatch-btn', template:function(swatchData) { const { swatchColors = \[\], swatchImgs = \[\] } = swatchData; let btnUI = \`\`; swatchColors.forEach((item,id) => { const imgId = swatchImgs\[id\]; if(imgId){ const img = imgId.split("::")\[1\]; btnUI+= \[\`<button data-swatch-id="${item}" data-swatch-img="${img}" data-action="changeSwatch"\`, \`data-swatch-target=".UNX-img-block" class="${this.swatchClass}" style="background-color:${item}"> </button>\`\].join('') } }); return \`<div class="UNX-swatch-color-list">${btnUI}</div>\`; } }

swatches:{
       enabled:true,
       attributesMap:{},
       swatchClass:'UNX-swatch-btn',
       template:function(swatchData) {
           const {
               swatchColors = \[\],
               swatchImgs = \[\]
           } = swatchData;
           let btnUI = \`\`;
           swatchColors.forEach((item,id) => {
               const imgId = swatchImgs\[id\];
               if(imgId){
                   const img = imgId.split("::")\[1\];
                   btnUI+= \[\`<button data-swatch-id="${item}" data-swatch-img="${img}" data-action="changeSwatch"\`,
 \`data-swatch-target=".UNX-img-block" class="${this.swatchClass}" style="background-color:${item}"> </button>\`\].join('')
               }
           });
           return \`<div class="UNX-swatch-color-list">${btnUI}</div>\`;
       }
   }

NOTE: If you wants swatches, variants count should be higher, and “groupBy” field should be present in mapped fields config as shown below:

variants:{

enabled:false,

count:5,

groupBy:'v\_colour',

attributes:\[

"title",

"v\_imageUrl"

\],

mapping:{

"image\_url":"v\_imageUrl"

}

}

variants:{ enabled:false, count:5, groupBy:'v\_colour', attributes:\[ "title", "v\_imageUrl" \], mapping:{ "image\_url":"v\_imageUrl" } }

variants:{
       enabled:false,
       count:5,
       groupBy:'v\_colour',
       attributes:\[
           "title",
           "v\_imageUrl"
       \],
       mapping:{
           "image\_url":"v\_imageUrl"
       }
   }

### Banner

Configure the banner display by setting the “banner” config object.

[![](https://unbxd.com/docs/wp-content/uploads/2020/05/Banner-sdk.png)](https://unbxd.com/docs/wp-content/uploads/2020/05/Banner-sdk.png)

The following options are available under the object:

**OPTIONS**

**DATATYPE**

**DEFAULT VALUE**

**DESCRIPTION**

enabled

Boolean

false

Turn this flag on for enabling Banner

el

Element

null

Element in which to render the Banner component

template

Function

[default](https://github.com/unbxd/search-JS-library/blob/master/src/modules/banners/index.js)

Customise the look and feel of the banner component by returning your custom HTML string from this function. This function get the list of banners as the parameter.

count

Number

1

Indicates the number of banners to be shown

### Loader

Configure page loader to be shown when fetching search API results by setting the “loader” config object.  

The following options are available under the object:  
  

**OPTIONS**

**DATATYPE**

**DEFAULT VALUE**

**DESCRIPTION**

el

Element

null

Element in which to render the loader component

template

Function

function(){return ‘<div class=”UNX-loader”>Loading search results….</div>’}

Customise the look and feel of the loader component by using this function

### NoResults

Configure the display to be rendered when there are no results by setting the “noResults” config object.

  
The following options are available under the object:  
  

**OPTIONS**

**DATATYPE**

**DEFAULT VALUE**

**DESCRIPTION**

template

Function

function(query){return ‘<div class=”UNX-no-results”> No Results found ‘+ query + ‘</div>’}

Customise the look and feel of the no results component by using this function. You will get the searched query as param to this function

### Miscellaneous Configs

  
  

**OPTIONS**

**DATATYPE**

**DEFAULT VALUE**

**DESCRIPTION**

siteKey

String

NA

This is the unique Site Key assigned by Unbxd to every site created in the console dashboard. Refer to [this section](https://unbxd.com/docs/site-search/documentation/configure-site-profile/) for steps on how to get the Site Key for your account.

apiKey

String

NA

This is the unique API Key assigned to every site created in the console dashboard. Refer to [this section](https://unbxd.com/docs/site-search/documentation/configure-site-profile/) for steps on how to get the API Key for your account.

searchBoxEl

Element

null

Configure the search input element on which to listen to search query changes

searchButtonEl

Element

NA

Configure your search button here. Clicking on this will load the results based the input value provided in “searchBoxEl”

unbxdAnalytics

Boolean

false

Turn this flag on if you want Unbxd to fire analytics events. Note that you have to include the Unbxd Analytics SDK for firing analytics events.

hashMode

Boolean

false

Turn this flag on if you want the URL update to happen on hash instead of using query params

updateUrls

Boolean

true

If you do not want the URLs to be updated on any search param change, set this config to false

actionBtnClass

String

“UNX-action-item”

CSS class name to add to any elements on which you want to trigger click event

actionChange

Class

String

“UNX-action-change”

CSS class name to be added to any custom input elements on which you want to trigger change event

onAction

Function

function(event, context) {}

Callback function called on a click or change on your custom element. This function will get 2 parameters: the event object & the this context

onEvent

Function

function

(context, type) {}

Callback that gets called after the supported events. This function gets 2 parameters: the current instance or context and the event type which is one of BEFORE\_API\_CALL, AFTER\_API\_CALL, BEFORE\_RENDER, BEFORE\_NO\_RESULTS\_RENDER, AFTER\_NO\_RESULTS\_RENDER, AFTER\_RENDER, DELETE\_FACET, FACETS\_CLICK, DELETE\_FACET\_VALUE, DELETE\_FACET, CLEAR\_SORT, CHANGE\_SORT, PAGE\_NEXT, PAGE\_PREV, CHANGE\_INPUT, SET\_CATEGORY\_FILTER, DELETE\_CATEGORY\_FILTER

extraParams

Object

{ “version”:

“V2” }

Any additional parameters you want to send in the search API call

productId

String

“uniqueId”

The field name which denotes the unique identifier for each product

defaultFilters

Object

null

Default filters to apply to all search API requests

searchQuery

Param

String

“q”

If you want to send the search query in a different query param key set this config. Example, if you want to send the query in a param called “query” like “query=dress”, then set this config value to “query”

searchEndPoint

String

“[https://](https://search.unbxd.io/)

[search.unbxd.io](https://search.unbxd.io/)“

Domain name of the search API endpoint

searchPath

String

“”

Any additional path string to be added to the URL. This is useful incase you have an SPA and the search page is hosted on a subpath of your site

getCategoryId

Function

null

By default Category ID will be taken from unbxdPageConf object, but if you wish to customize use this function to return the category ID

setCategoryId

Function

null

This method helps to navigate through the breadcrumbs, you can customize the logic here

Instance Methods
----------------

This section documents the different methods exposed by the Library that you can use to perform various actions.

NOTE: All the below methods can be called on the instance object returned by UnbxdSearch constructor.

#### updateConfig

Purpose

You can use the updateConfig function to update the config object anytime. The config object passed here will be merged with the existing configs.

Parameters

Config object

Usage

unbxdSearch.updateConfig({  
sort: {

    el: document.getElementById(“sortWrapper”),

    options: \[

      {

        value: “sortPrice desc”,

        text: “Price High to Low”

      },

      {

        value: “sortPrice asc”,

        text: ” Price Low to High”

      }

    \]

  }  
})  
This will update the sort options.

  
  

#### getResults

Purpose

Call this function to refetch the search results

Arguments

No arguments

Usage

unbxdSearch.getResults(“dress”)

####   
getCategoryPage

Purpose

Call this function to render the category Pages

Arguments

No arguments

Usage

unbxdSearch.getCategoryPage()

  
  

#### getBrowsePage

Purpose

Call this function to render the browse pages

Arguments

No arguments

Usage

unbxdSearch.getBrowsePage()

#### reRender

Purpose

Call this function to render the UI elements again in the page, for example, you can call it on a  page resize events to make your website responsive

Arguments

No arguments

Usage

unbxdSearch.reRender()

#### resetFacets

Purpose

You can reset the facets anytime manually

Arguments

No arguments

Usage

unbxdSearch.resetFacets()

####   
resetAll

Purpose

You can reset all the page elements like selected facets, selected sort option, pagination etc.

Arguments

No arguments

Usage

unbxdSearch.resetAll()

####   
setPageStart

Purpose

You can set the the page number

Arguments

Page Number

Usage

unbxdSearch.setPageStart(1)

####   
setRangeSlider

Purpose

You can update the range filter value

Arguments

Range Widget config object

Usage

unbxdSearch.setRangeSlider({“start”:0,”end”:573,”facetName”:”price”,”gap”: 200})

More Information
----------------

For any issue that you face during integration or need updates on the changes, follow these tips, raise issues, or track log changes. 

### Tips& tricks

*   If you are including our Search JS Library, [Autosuggest Library](https://unbxd.com/docs/site-search/integration-documentation/autosuggest-sdk/) & [Analytics Library](https://unbxd.com/docs/site-search/integration-documentation/browser-integration/) in your HTML page, the order of the files are important.  
    Include the Search JS Library, followed by Autosuggest Library and then the Analytics JS Library. This should be followed by the code to invoke the library.
*   Always ensure you are invoking the library (i.e. calling the **UnbxdSearch** constructor) after you have included it either via URL or via npm
*   Include the CSS inside the <head> tag of your HTML page & the scripts at the end of the body tag. This will ensure that the page rendering is not blocked by the javascript files.

### Raise Issues  

  
Facing some issues? look for solutions or create an issue [here](https://github.com/unbxd/search-JS-library/issues).

### Stay up to date

  
Look at the [changelog](https://github.com/unbxd/search-JS-library/blob/master/CHANGELOG.md) to see the latest version & history.

List of available Configurations
--------------------------------

You can find the list of the available configurations in [this Github link](https://github.com/unbxd/search-JS-library/#full-configuration-list). 

*   Did this answer your question?
*   [![](/docs/wp-content/uploads/2020/05/yes.svg)
    
    Yes!
    ----
    
    Nice work, I love it.
    
    ](#)
    
    [![](/docs/wp-content/uploads/2020/05/No_active-1.svg)
    
    No…
    ---
    
    I have some feedback
    
    ](#)