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