---
layout: default
title: Detailed Integration
nav_order: 3
parent: Getting Started
---

# Detailed Integration
{: .fs-9 } {: .no_toc }

---

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}


The final integrated result that we are aiming at with this quickstart can be seen at this [codesandbox](https://codesandbox.io/s/categoryfacet-t0q7l).  
  

Let us walk through the important configs that need to be passed along with their values for powering the search results page

## Authentication

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


## Types Of Pages

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
| prouductType | String | true |  search | Used to indicate if the page is search or category. Possible values: search (or) category. “search” -> the search term in the url is used by library. “category”->  the getCategoryID function will be invoked to identify the category which needs to be displayed for the given url. | For Search page (i.e. productType= “SEARCH”). For Category page (i.e. productType= “CATEGORY”),  getCategoryID function must be provided |

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




## Configuring the Search Input Box

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


## List Of Available Configurations


You can find the list of the available configurations in [this Github link](/docs_new/configurations/Configurations.md). 


