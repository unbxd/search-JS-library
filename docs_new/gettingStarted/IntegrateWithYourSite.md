---
layout: default
title: Integrate with your site
nav_order: 4
parent: Getting Started
---

# Integrate with your site
{: .fs-9 .no_toc }

---

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## Integrate with your site

1. Include the vanilla js search library via the link:
```js
<script  src="https://libraries.unbxdapi.com/search-sdk/v<<latest version>>/vanillaSearch.min.js"  type="text/javascript"></script>
```
{: .info }
> The **latest version** can be found via the npm repository:
[search js library](https://www.npmjs.com/package/@unbxd-ui/vanilla-search-library)
2. To get the default theme, include css in the link tag:
```js
<link rel="stylesheet" type="text/css" href="https://libraries.unbxdapi.com/search-sdk/v2.0.5/vanillaSearch.min.css">
```
3. Invoke the sdk along with config:
```js

```

Customize the config inside **src/js/index.js**, to see the data related to your sitekey:
1. Change **siteKey** and **apiKey**.
```js
siteKey: "<<site key>>",
apiKey: "<<api key>>"
```
2. Modify **attributesMap** inside **products** object.
    ```js
    attributesMap: {
    "unxTitle": "<<title attribute>>",
    "unxImageUrl": "<<image url attribute>>",
    "unxPrice": "<<price attribute>>",
    "unxDescription":"<<description attribute>>"
    };
    ```
3. Provide **product attributes** to be returned from the search api:
    ```js
    productAttributes: ["<<title attribute>>","<<image url attribute>>","<<price attribute>>","<<description attribute>>"]
    ```
4. Configure the correct category ids for the **UnbxdAnalyticsConf** window object in the   following places:<br/>

    [![Configure the correct category ids for the UnbxdAnalyticsConf window object](../assets/categoryid1.png)](UnbxdAnalyticsConf variable configuration)
    
    [![Configure the correct category ids for the UnbxdAnalyticsConf window object](../assets/categoryid2.png)](UnbxdAnalyticsConf variable configuration)<br/>