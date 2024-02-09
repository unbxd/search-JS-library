---
layout: default
title: Others
parent: Configurations
nav_order: 18
---

# Others
{: .no_toc }

# Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

# Other Configurations
{: .no_toc }

# unbxdAnalytics
{: .d-inline-block }

Boolean
{: .label }

Turn this flag on if you want Unbxd Search sdk to fire analytics events like track search click, track category page click, track product impressions, track facet click, track product click, etc. Note that you have to integrate the Unbxd Analytics SDK as well for tracking analytics events.

## Default Value
{: .no_toc }

```js
unbxdAnalytics: false
```

## Scenarios
{: .no_toc }

1. true - analytics events will be fired from the search sdk
2. false - analytics events will not be fired from the search sdk

---
# hashMode
{: .d-inline-block }

Boolean
{: .label }

{: .warning } 
> From SDK version: `v2.1.0`, this configuration will be a part of `URL`. Please check [here](./urlConfig.md) for more details. 

---
# updateUrls
{: .d-inline-block }

Boolean
{: .label }

{: .warning } 
> From SDK version: `2.1.0`, this configuration will be deprecated.

---
# actionBtnClass
{: .d-inline-block }

{: .warning } 
> Note: Please note this config has been moved as part of [facet config]() from sdk version ```2.1.5```.

---
# actionChangeClass
{: .d-inline-block }

String
{: .label }

{: .warning } 
> Note: Please note this config has been moved as part of [facet config]() from sdk version ```2.1.5```.

---
# allowExternalUrlParams
{: .d-inline-block }

Boolean
{: .label }

{: .warning } 
> From SDK version: `v2.1.0`, this configuration will be a part of `URL`. Please check [here](./urlConfig.md) for more details.

---
# extraParams
{: .d-inline-block }

Object
{: .label }

The extraParams object is a versatile feature in our code to send any additional parameters in the search API call. It allows you to use static key-value pairs or dynamic functions returning the values in string formats, enabling real-time adjustments of data like segmentation, currencies, languages, etc. in your API requests. This flexibility enhances your Unbxd search API integration, making it more responsive and adaptable to your specific application needs.

## Default Value
{: .no_toc }

```js
{ "version":"V2" }
```

## Scenarios
{: .no_toc }

1. 
In case of dynamic values, a function can be written to return the value in a string format on the client end. 

```js
{
	"version":"V2",
	"uc_param": function() {
	    /** Custom logic based on dynamic conditions **/
	    return "value";
	},
	"segment": "region_id:101,Custome_type:Gold",
	"location": window.location
 }
```

{: .warning } 
> Note: Please make sure that **version: V2** is not overwritten in the custom implementation of `extraParams`.

---

# debugMode
{: .d-inline-block }

Boolean
{: .label }

In our ongoing commitment to providing a seamless integration and debugging experience, we are pleased to introduce the Debug Mode feature. Debug Mode serves as a valuable tool for developers by capturing configuration or coding errors directly in the browser's development console during the integration or debugging process.

Enabling Debug Mode allows for real-time identification and logging of issues that may arise from misconfigurations or errors within the SDK code. This functionality aids developers in swiftly diagnosing and rectifying issues, facilitating a smoother integration process and expediting debugging efforts.

To leverage the benefits of Debug Mode, developers can easily toggle the feature on/off as needed, ensuring a customizable and efficient debugging experience.

{: .important }
> Note: The debugMode is available only in the version v2.1.2 and beyond.

## Default Value
{: .no_toc }
```js
debugMode: true
```

## Scenarios
{: .no_toc }
- **true**: Console logs configuration and coding errors in real-time, aiding developers during integration.
- **false**: Doesn't not console any errors.

---

# defaultFilters
{: .d-inline-block }

Object
{: .label }

This is used to set a default filter condition for all search queries and category pages.

## Default Value
{: .no_toc }
{}

## Scenarios
{: .no_toc }
In cases where the search/category api results are required to be filtered based on a constant filter condition, apart from the user selected filters

---
<!-- # searchQueryParam
{: .d-inline-block }

String
{: .label }

If you want to send the search query in a different query param key set this config. Example, if you want to send the query in a param called “query” like “query=dress”, then set this config value to “query”.

## Default Value
{: .no_toc }
“q”

## Scenarios
{: .no_toc }
 -->

# searchEndPoint
{: .d-inline-block }

String
{: .label }

Domain name of the search API endpoint.

## Default Value
{: .no_toc }

```js
searchEndPoint:“https://search.unbxd.io”	
```

## Scenarios
{: .no_toc }

1. In case of a staging sitekey, it will be:
```js
searchEndPoint:"https://wingman-argocd.unbxd.io/"	
```

<!-- This feature is not used, and not adopted. There is no clarity.

# searchPath
{: .d-inline-block }

String
{: .label }

Any additional path string to be added to the URL. This is useful incase you have an SPA and the search page is hosted on a subpath of your site.

## Default Value
{: .no_toc }
””
## Scenarios
{: .no_toc } -->

---
# browseQueryParam
{: .d-inline-block }

String
{: .label }

This will be the default query param for the search api to provide category information like category path or category id. 

## Default Value
{: .no_toc }

```js
browseQueryParam: "p"
```
	
## Scenarios
{: .no_toc }

1. `p-id`: If we are providing the **category path id** to the search api.
```
	p-id: categoryPathId:"4"
```

2. `p`: If we are providing the **category path** to the search api.
```
	p: categoryPath:"Computers & Accessories>Ink & Toner"
```

{: .important } 
> Note: This particular config is only for customizing the browse query param sent in the search API and not the web URL which is documented [here](./urlConfig#browsequeryparam).

---
# searchQueryParam
{: .d-inline-block }

String
{: .label }

{: .warning } 
> From SDK version: `v2.1.0`, this configuration will be a part of `URL`.Please check [here](./urlConfig.md) for more details.

