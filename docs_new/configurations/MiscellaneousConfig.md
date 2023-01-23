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

Turn this flag on if you want Unbxd to fire analytics events. Note that you have to include the Unbxd Analytics SDK for firing analytics events.

### Default Value
{: .no_toc }
false

### Usecases
{: .no_toc }

---
## hashMode
{: .d-inline-block }

Boolean
{: .label }

Turn this flag on if you want the URL update to happen on hash instead of using query params.

### Default Value
{: .no_toc }
false

### Usecases
{: .no_toc }

---
## updateUrls
{: .d-inline-block }

Boolean
{: .label }

If you do not want the URLs to be updated on any search param change, set this config to false.

### Default Value
{: .no_toc }
true

### Usecases
{: .no_toc }

---
## actionBtnClass
{: .d-inline-block }

String
{: .label }

CSS class name to add to any elements on which you want to trigger click event.

### Default Value
{: .no_toc }
“UNX-action-item”

### Usecases
{: .no_toc }

---
## actionChangeClass
{: .d-inline-block }

String
{: .label }

CSS class name to be added to any custom input elements on which you want to trigger change event.

### Default Value
{: .no_toc }
“UNX-action-change”

### Usecases
{: .no_toc }

---
## onAction
{: .d-inline-block }

Function
{: .label }

Callback function called on a click or change on your custom element. This function will get 2 parameters: the event object & the this context.

### Default Value
{: .no_toc }
```js
function(event, context) {}
```

### Usecases
{: .no_toc }

---
## onEvent
{: .d-inline-block }

Function
{: .label }

Callback that gets called after the supported events. This function gets 2 parameters: the current instance or context and the event type which is one of BEFORE_API_CALL, AFTER_API_CALL, BEFORE_RENDER, BEFORE_NO_RESULTS_RENDER, AFTER_NO_RESULTS_RENDER, AFTER_RENDER, DELETE_FACET, FACETS_CLICK, DELETE_FACET_VALUE, DELETE_FACET, CLEAR_SORT, CHANGE_SORT, PAGE_NEXT, PAGE_PREV, CHANGE_INPUT, SET_CATEGORY_FILTER, DELETE_CATEGORY_FILTER.

### Default Value
{: .no_toc }
```js
function(context, type) {}
```

### Usecases
{: .no_toc }

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

### Usecases
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

### Usecases
{: .no_toc }

---
## defaultFilters
{: .d-inline-block }

Object
{: .label }

Default filters to apply to all search API requests.

### Default Value
{: .no_toc }
null

### Usecases
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

### Usecases
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

### Usecases
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
### Usecases
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

### Usecases
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

### Usecases
{: .no_toc }

---
## onQueryRedirect
{: .d-inline-block }

Function
{: .label }

Customise your logic here to handle the redirect configured in api.

### Default Value
{: .no_toc }
null

### Usecases
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

### Usecases
{: .no_toc }

---

