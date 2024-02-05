---
layout: default
title: Integrate with your site details
nav_order: 3
parent: Getting Started
---

# Integrate with your site information
{: .no_toc }

1. TOC
{:toc}

# Prerequisite
Please complete the FTU flow along with the dimensions mapping for fields like title, imageUrl, price, and categoryPath for your actual feed. 
More information can be found [here](./../prerequisites)

# Integration Instructions


Customize the config, to see the data related to your sitekey. 
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
3. Provide **product attributes** inside **products** object to be returned from the search api. If this is not provided, all fields related to the product will be returned.
    ```js
    productAttributes: ["<<title attribute>>","<<image url attribute>>","<<price attribute>>","<<description attribute>>"]
    ```
4.  Add the correct **query selectors** based on your website, in the config.
5.  Configure category data:<br/>
    Either category path, or category ids can be used.
    
    Configure the correct **category path** and the page_type for the **UnbxdAnalyticsConf** window object for **category page click** or **category page load**.
                    
       **Example:**
       {: .no_toc }

        ```js
        if (location.pathname === "/categoryPage1") {
            window.UnbxdAnalyticsConf = {
                page: "categoryPath:categoryPath1",
                page_type: 'BOOLEAN'
            };
            productType = "CATEGORY";
        } else if (location.pathname === "/categoryPage2") {
            window.UnbxdAnalyticsConf = {
                page: "categoryPath:categoryPath2",
                page_type: 'BOOLEAN'
            };
            productType = "CATEGORY";
        } else {
            window.UnbxdAnalyticsConf = {};
            productType = "SEARCH";
        }
        ```
        
        OR

       Configure the correct **category id** and page_type for the **UnbxdAnalyticsConf** window object for **category page click** or **category page load**.
        Also set **browseQueryParam** in the config accordingly.
                
       **Example:**
        {: .no_toc }

        ```js
        if (location.pathname === "/<<categoryPage1>>") {
            window.UnbxdAnalyticsConf = {
                page: "categoryPathId:categoryId1",
                page_type: 'BOOLEAN'
            };
            productType = "CATEGORY";
        } else if (location.pathname === "/<<categoryPage2>>") {
            window.UnbxdAnalyticsConf = {
                page: "categoryPathId:categoryId2",
                page_type: 'BOOLEAN'
            };
            productType = "CATEGORY";
        } else {
            window.UnbxdAnalyticsConf = {};
            productType = "SEARCH";
        }
        ```

        ```js
        browseQueryParam: "p-id"
        ```

        {: .important }
        > For further help with category pages configuration, please contact the feed support team. 

        
6. Set the correct **productType** in the products config, i.e. "SEARCH" for search    results page, or "CATEGORY" for category pages.

**Example:**
{: .no_toc }

```js
products: {
    productType: "<<SEARCH/CATEGORY>>",  
}
```


# Sample configuration with the unbxd demo sitekey feed

{: .warning }
> Note: All Element selectors must change as per your website. Please refer the config from the **getConfig** function [here](https://codesandbox.io/s/ezmi0v?file=/src/js/config.js) and make the necessary changes
