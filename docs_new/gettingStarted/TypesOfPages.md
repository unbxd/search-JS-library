---
layout: default
title: Types Of Pages
nav_order: 1
parent: Getting Started
---

# Types Of Pages
{: .fs-9 }

---

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}


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
``