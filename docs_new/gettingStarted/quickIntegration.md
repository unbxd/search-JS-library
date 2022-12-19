---
layout: default
title: Quick Integration
nav_order: 2
parent: Getting Started
---

# Quick Integration
{: .fs-9 }

---

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## Quick Integration with Unbxd Template

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


## Integration to your Site

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
