---
layout: default
title: Others
parent: Configurations
nav_order: 17
---

# Others
{: .no_toc }

# Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

# Other Configurations

## unbxdAnalytics
{: .d-inline-block }

Boolean
{: .label }

Turn this flag on if you want Unbxd Search sdk to fire analytics events like track search click, track category page click, track product impressions, track facet click, track product click, etc. Note that you have to integrate the Unbxd Analytics SDK as well for tracking analytics events.

### Default Value
{: .no_toc }

```js
unbxdAnalytics: false
```

### Scenarios
{: .no_toc }

1. true - analytics events will be fired from the search sdk
2. false - analytics events will not be fired from the search sdk

---
## hashMode
{: .d-inline-block }

Boolean
{: .label }

In Single Page Applications (SPAs), hash mode refers to the use of the "#" symbol in the URL to indicate the current state or location of the application. Instead of using traditional URLs that include a path and query parameters, SPAs use a single base URL and append a hash fragment to the end of the URL to represent different states or views within the application.

For example, a traditional URL for an e-commerce website might be "www.example.com/products/?category=shoes" while in Hash mode it could be "www.example.com/products/#category=shoes"

<!-- The use of the "#" symbol in the URL, known as a hash fragment, tells the browser that everything after the "#" is not a part of the actual path of the website, but rather a reference to a specific state or view within the SPA. This allows the SPA to handle routing and navigation internally, without requiring a full page reload from the server.

Hash mode is also useful for SEO purposes as it does not refresh the page and search engines read the portion before "#" as the page URL and can index the page.

In summary, Hash mode in Single Page Applications (SPAs) is a technique used to handle routing and navigation within the application using the "#" symbol in the URL to indicate the current state or location. This allows for a more seamless user experience and makes it easier for the SPA to handle routing internally, without requiring a full page reload from the server. -->
The search sdk adds some information to the url as params, based on the user actions, and in case of page reload scenarios, the data is read from the url.

Turn this flag on if you want the URL update to happen as hash param instead of using query params.

### Default Value
{: .no_toc }

```js
hashMode: false
```

### Scenarios
{: .no_toc }

1. true - url params will be updated as hash params
2. false - url params will be updated as query params

---
## updateUrls
{: .d-inline-block }

Boolean
{: .label }

If you prefer for the URLs to remain unchanged when any search parameters are altered, set this configuration option to false.

{: .important }
> Note: If this is set to false, the page reload will lose any user action data like selected facets, selected sort values, etc

### Default Value
{: .no_toc }

```js
updateUrls: true
```

### Scenarios
{: .no_toc }

1. true - user action information will be added to the url
2. false - user action information will not be added to the url

---
## actionBtnClass
{: .d-inline-block }

String
{: .label }

CSS class name to add to any facet wrapper elements on which you want to trigger **click** event.

### Default Value
{: .no_toc }

```js
actionBtnClass:"UNX-action-item"
```

### Scenarios
{: .no_toc }

It is used to bind 'click' event to a facet wrapper element

---
## actionChangeClass
{: .d-inline-block }

String
{: .label }

CSS class name to be added to any facet wrapper elements on which you want to trigger **change**, or **keyup** event.

### Default Value
{: .no_toc }

```js
actionChangeClass:"UNX-action-change"
```

### Scenarios
{: .no_toc }

It is used to bind 'change' or 'keyup' event to a facet wrapper element

---
## allowExternalUrlParams
{: .d-inline-block }

Boolean
{: .label }

Turn this flag on if you want to retain the external url params in the **browser**, that do not get added by the unbxd sdk.

### Default Value
{: .no_toc }

```js
allowExternalUrlParams: false
```

### Scenarios
{: .no_toc }

1. true - External params will be retained in the browser url, so that they can be consumed by the rest of the client ecosystem.
2. false - External params will be dropped from the browser url by the unbxd search sdk

---
## extraParams
{: .d-inline-block }

Object
{: .label }

Any additional parameters you want to send in the search API call. 

### Default Value
{: .no_toc }

```js
{ "version":"V2" }
```

### Scenarios
{: .no_toc }

1. 
In case of dynamic values, a global function must be written to return the value on client end, and the same can be used as part of extraParams. 

```js
window.isSale = function() {
    /** Custom logic based on dynamic conditions **/
    return true;
}
{ "version":"V2", "uc_param": window.isSale() }
```

{: .warning } 
> Note: Please make sure that **version V2** is not overwritten in the custom implementation of externalParams.

---

## defaultFilters
{: .d-inline-block }

Object
{: .label }

This is used to set a default filter condition for all search queries and category pages.

### Default Value
{: .no_toc }
null

### Scenarios
{: .no_toc }
In cases where the search/category api results are required to be filtered based on a constant filter condition, apart from the user selected filters

---
<!-- ## searchQueryParam
{: .d-inline-block }

String
{: .label }

If you want to send the search query in a different query param key set this config. Example, if you want to send the query in a param called “query” like “query=dress”, then set this config value to “query”.

### Default Value
{: .no_toc }
“q”

### Scenarios
{: .no_toc }
 -->

## searchEndPoint
{: .d-inline-block }

String
{: .label }

Domain name of the search API endpoint.

### Default Value
{: .no_toc }

```js
searchEndPoint:“https://search.unbxd.io”	
```

### Scenarios
{: .no_toc }

1. In case of a staging sitekey, it will be:
```js
searchEndPoint:"https://wingman-argocd.unbxd.io/"	
```

---
<!-- This feature is not used, and not adopted. There is no clarity.

## searchPath
{: .d-inline-block }

String
{: .label }

Any additional path string to be added to the URL. This is useful incase you have an SPA and the search page is hosted on a subpath of your site.

### Default Value
{: .no_toc }
””
### Scenarios
{: .no_toc } -->

---
## browseQueryParam
{: .d-inline-block }

String
{: .label }

This will be the default query param for the search api to provide category information like category path or category id. 

### Default Value
{: .no_toc }

```js
browseQueryParam: "p"
```
	
### Scenarios
{: .no_toc }

1. p-id: If we are providing the **category path id** to the search api.
2. p: If we are providing the **category path** to the search api.

