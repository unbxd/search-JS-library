---
layout: default
title: Configurations
nav_order: 3
has_children: true
permalink: docs_new/configurations
---

# Configurations
{: .fs-9 }

---

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}





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
  
| OPTIONS | DATATYPE | DEFAULT VALUE | DESCRIPTION |
|----------|----------|----------|----------|
| siteKey | String | NA | This is the unique Site Key assigned by Unbxd to every site created in the console dashboard. Refer to [this section](https://unbxd.com/docs/site-search/documentation/configure-site-profile/) for steps on how to get the Site Key for your account. |
| apiKey | String | NA | This is the unique API Key assigned to every site created in the console dashboard.  Refer to [this section](https://unbxd.com/docs/site-search/documentation/configure-site-profile/) for steps on how to get the API Key for your account. |


Types of Pages to render
------------------------

Unbxd has two product offerings:

*   SEARCH:  powers search results pages 
*   BROWSE or CATEGORY: powers category listing pages

Pass a config parameter called “productType” to indicate whether you want to render the search results page (productType= “SEARCH”) or the category listing page (productType= “CATEGORY”)

```js
const  unbxdSearch = new UnbxdSearch({
 siteKey:"your site key",
 apiKey:"your API key",
products:{
    productType:"CATEGORY" //SEARCH , CATEGORY or BROWSE
}
});
```
| OPTIONS | DATATYPE | REQUIRED | DEFAULT VALUE | DESCRIPTION | DEPENDENCY |
|----------|----------|----------|----------|----------|----------|
| prou=ductType | String | true |  search | Used to indicate if the page is search or category. Possible values: search (or) category. “search” -> the search term in the url is used by library. “category”->  the getCategoryID function will be invoked to identify the category which needs to be displayed for the given url. | For Search page (i.e. productType= “SEARCH”). For Category page (i.e. productType= “CATEGORY”),  getCategoryID function must be provided |

At the end of this step, you should choose a “productType” of the page that you want to render and pass it in the config as shown below:
```js
const  unbxdSearch = new UnbxdSearch({
 siteKey: "-your site key-",
 apiKey: "-your API key-",
products:{
    productType:"SEARCH"
}
});
```
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

## Search input box & search button selector

The following two configurations are used by the library to bind keyboard and mouse events to the search input field and search button on your website.
| OPTIONS | DATATYPE | DEFAULT VALUE | DESCRIPTION |
|----------|----------|----------|----------|
| searchBoxEl | Element | null | Configure the search input element on which to listen to search query changes |
| searchButtonEl | Element | NA | Configure your search button here. Clicking on  this will load the results based the input value provided in "searchBoxEl

```js
<div class="UNX-input-wrapper">
<input id="unbxdInput" class="UNX-input" type="text"/>
<button id="searchBtn" class="fa fa-search"></button>
</div>
```

At the end of this step, you should have configured the “input” & “search button” as shown below:

```js
window.unbxdSearch = new UnbxdSearch({
  siteKey: "<your site key>",
  apiKey: "<your API key>",
  searchBoxEl: document.getElementById("unbxdInput"),
  searchButtonEl: document.getElementById("searchBtn"),
});
```



## Full configuration List

**Note:**
- All templates are provided as functions where you can return the HTML string that needs to be rendered.
This provides you the power of entire Javascript to build your desired HTML string.
- All of the classnames generated by the library will have the prefix `"UNX-"`. So you can use it to customize styles.
- tagName -will be html element wrapper created by the sdk, by default it will be "DIV". If the template required wrapper element changes we can customise here.
- htmlAttributes -its an object where you can customise the html  attributes like class, id and data-*. key will be attribute name and value will be attribute value.
- events - this is an object you can add your own events to it. key will be event name(click) and value should be a function.


| OPTIONS | DATATYPE | DEFAULT VALUE | DESCRIPTION |
|----------|----------|----------|----------|
| siteKey | String | NA | This is the unique Site Key assigned by Unbxd to every site created in the console dashboard. Refer to [this section](https://unbxd.com/docs/site-search/documentation/configure-site-profile/) for steps on how to get the Site Key for your account. |
| apiKey | String | NA | This is the unique API Key assigned to every site created in the console dashboard.  Refer to [this section](https://unbxd.com/docs/site-search/documentation/configure-site-profile/) for steps on how to get the API Key for your account. |
| searchBoxEl | Element | null | Configure the search input element on which to listen to search query changes |
| searchButtonEl | Element | NA | Configure your search button here. Clicking on  this will load the results based the input value provided in "searchBoxEl"  |
| products | Object | Refer section | Products related configurations. You can find all the configs in [Products Config](#Products-Config) section|
| facet | Object | Refer section | Facet configurations. You can find all the configs in [Facets Config](#Facets-Config) section|
| pagination | Object | Refer section | Pagination component configurations. You can find all the configs in [Pagination Config](#Pagination-Config) section |
| pageSize | Object | Refer section | Page Size component configurations. You can find all the page size configs in [Page Size Config](#Page-Size-Config) section |
| sort | Object | Refer section | Sort component configurations. You can find all the configs in [Sort Config](#Sort-Config) section |
| productView | Object | Refer section | Product view type (list view or grid view) configurations. You can find all the configs in [Product Views Config](#Product-Views-Config) section|
| breadcrumb | Object | Refer section | Bread crumb component configurations. You can find all the configs in [Breadcrumb Config](#Breadcrumb-Config) section |
| spellCheck | Object | Refer section | Spellcheck component configurations. You can find all the configs in [Spell Check Config](#Spell-Check-Config) section. Please ignore incase of _browse_ or _category_ pages.|
| banner | Object | Refer section | Banner component configurations. You can find all the configs in [Banner Config](#Banner-Config) section. |
| variants | Object | Refer section | Set this object, if you have want to display variant products. by default variants will be undefined. You can find all the variants configs in [Variants Config](#Variants-Config) section |
| swatches | Object | Refer section | Set this object, if you have want to display swatches on your product cards. You can find all the swatch configs in [Swatches Config](#Swatches-Config) section |
| loader | Object | Refer section | Loader component configurations. You can find all the configs in [Loader Config](#Loader-Config) section |
| noResults | Object | Refer section | No results component configurations. You can find all the configs in [No Results Config](#No-Results-Config) section |
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
