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
Unbxd offers a full-featured search and category solution that can help retailers to improve the search and browsing experience for their customers, increase conversions, and gain insights into customer behavior.

Our search offering includes a powerful search engine that can handle large catalogs and complex queries, as well as advanced features such as autocomplete, spell correction, and synonyms. We also provide analytics and reporting tools to help retailers optimize their search results and improve the overall search experience for their customers.

Our category offerings include solutions for navigation, filtering and sorting, and recommendations. These solutions can help retailers to improve the browsing experience for their customers and increase conversions by making it easy for shoppers to find the products they're looking for. The category solutions also come with analytics and reporting tools to help retailers understand how shoppers are interacting with their category pages and make data-driven decisions to improve the browsing experience.


# Behavior
Unbxd has two product offerings:

*   SEARCH: Powers search results pages 
*   BROWSE or CATEGORY: Powers category listing pages
  
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

{% capture code %}
{% highlight js linenos %}
const  unbxdSearch = new UnbxdSearch({
   siteKey: "-your site key-",
   apiKey: "-your API key-",
   products:{
      productType:"SEARCH"
   }
});
{% endhighlight %}
{% endcapture %}
{% include fix_linenos.html code=code %}
{% assign code = nil %}
