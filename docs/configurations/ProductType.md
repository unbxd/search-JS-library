---
layout: default
title: Product Type
parent: Configurations
nav_order: 2
---

# Product Type
{: .no_toc }

# Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

# Definition
Unbxd has two product offerings:

*   SEARCH:  powers search results pages 
*   BROWSE or CATEGORY: powers category listing pages

# Behavior
Pass a config parameter called “productType” to indicate whether you want to render the search results page (productType= “SEARCH”) or the category listing page (productType= “CATEGORY”)

# Configurations
## productType
{: .d-inline-block }

String
{: .label }

Used to indicate if the page is search or category. Possible values: search (or) category. “search” -> the search term in the url is used by library. “category”-> the getCategoryID function will be invoked to identify the category which needs to be displayed for the given url.

### Default Value
{: .no_toc }
null

### Scenarios
{: .no_toc }


# Sample Example
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
