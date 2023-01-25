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

Turn this flag on if you want to retain the external url params that do not get added by the unbxd sdk.

### Default Value
{: .no_toc }

```js
allowExternalUrlParams: false
```

### Scenarios
{: .no_toc }

1. true - External params will be retained in the browser url, so that they can be consumed by the rest of the client ecosystem.
2. false - External params will be dropped from the browser url

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

---
## productId
{: .d-inline-block }

String
{: .label }

The field name which denotes the unique identifier for each product.

### Default Value
{: .no_toc }
“uniqueId”

### Scenarios
{: .no_toc }

---
## defaultFilters
{: .d-inline-block }

Object
{: .label }

This section refers to a set of predefined filtering options that are applied to all search requests made through the API. These filters are usually used to narrow down the search results by applying certain criteria such as product category, price range, brand, etc. By applying these default filters, the search results returned by the API will be more relevant to the user. These filters can be set by the developer and can be overridden by the user on the frontend. These filters can also be used to apply business rules on the search results.


### Default Value
{: .no_toc }
null

### Scenarios
{: .no_toc }

---
## searchQueryParam
{: .d-inline-block }

String
{: .label }

If you want to send the search query in a different query param key set this config. Example, if you want to send the query in a param called “query” like “query=dress”, then set this config value to “query”.

### Default Value
{: .no_toc }
“q”

### Scenarios
{: .no_toc }

---
## searchEndPoint
{: .d-inline-block }

String
{: .label }

Domain name of the search API endpoint.

### Default Value
{: .no_toc }
“https://search.unbxd.io”	

### Scenarios
{: .no_toc }

---
## searchPath
{: .d-inline-block }

String
{: .label }

Any additional path string to be added to the URL. This is useful incase you have an SPA and the search page is hosted on a subpath of your site.

### Default Value
{: .no_toc }
””
### Scenarios
{: .no_toc }

---
## getCategoryId
{: .d-inline-block }

Function
{: .label }

By default Category ID will be taken from unbxdPageConf object, but if you wish to customize use this function to return the category ID.

### Default Value
{: .no_toc }
null

### Scenarios
{: .no_toc }

---
## setCategoryId
{: .d-inline-block }

Function
{: .label }

This method helps to navigate through the breadcrumbs, you can customize the logic here.

### Default Value
{: .no_toc }
null

### Scenarios
{: .no_toc }

---
## onQueryRedirect
{: .d-inline-block }

Function
{: .label }

"On query redirect" is a feature that allows developers to customize the logic for handling redirects that are configured in the API. A redirect is a way to automatically redirect a user from one URL to another.

When a search query is made, the API may return a redirect URL along with the search results. The `onQueryRedirect` option allows developers to define how the application should handle this redirect. For example, the developer could choose to redirect the user to the URL immediately, or they could choose to display a message asking the user if they would like to be redirected, or they could choose to ignore the redirect altogether.

Customizing the logic for handling redirects gives the developer more control over the user experience. They can also use this customization to log the redirect and track user behavior.

### Default Value
{: .no_toc }
null

### Scenarios
{: .no_toc }

---
## browseQueryParam
{: .d-inline-block }

String
{: .label }

This will be the default query param for the browse and category.

### Default Value
{: .no_toc }
“p”	

### Scenarios
{: .no_toc }

