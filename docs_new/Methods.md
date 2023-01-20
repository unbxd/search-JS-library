---
layout: default
title: Methods
nav_order: 4
---

# Methods and Events
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Methods

This section documents the different methods exposed by the sdk/sdk config that one can use to perform various actions.

---
### reRender
Call this function if you want to render the page again.
#### example
{: .no_toc }
```js
unbxdSearch.reRender()
```
---
### updateConfig
Call this function for updating the config options in run time.
#### arguments
{: .no_toc }
**config**: Object with new config information (Only the updated keys need to be present)
#### example
{: .no_toc }
```js
unbxdSearch.updateConfig({facet:{applyMultipleFilters:true}})
```
---

### onQueryRedirect



<!-- | reRender | | Call this function if you want to render the page again. Ex: `unbxdSearch.reRender()` |
| updateConfig | (config) | Call this function for updating the config options in run time. Ex: `unbxdSearch.updateConfig({facet:{applyMultipleFilters:true}})` |
| onQueryRedirect | (self, redirect, urlBeforeRedirect) `redirect: redirect response from search api`, `urlBeforeRedirect: url before the browser redirected` | This config function holds the redirect logic for a query to which the response contains redirect information. Sample Search api response: `{redirect:{type:”url”,value:”https://www.unbxd.com”}` Parameter **redirected=true** is added in the browser url when replace state param is true in history. It is **not** recommended to open redirect in a new tab. In such a case, the custom client logic for above mentioned search input handlers should take care to not push state when switching to search from category |
| onBackFromRedirect | (hashMode) `hashMode: If sdk config has hashMode set to true` | This config function holds the logic to manipulate history when we come back to the site from the redirected url. This is only called if history state replace was true. It looks for the redirected parameter to identify that page is back from redirected url |
| setRoutingStrategies | (locationParam, newUrl, productType, isUnbxdKey, replace) `locationParam: current location param string`, `newUrl: new url string to replace the current string`, `productType: SEARCH/CATEGORY`, `isUnbxdKey: true if any key required by sdk is present in the url`, `replace: whether to replace history state or push to new state` | Custom implementation on clicking browser back & forward |
| getCategoryPage |  | Call this function to render the category page. Ex: `unbxdSearch.getCategoryPage()` |
| getResults |  | Call this function to refetch the search results. Ex: `unbxdSearch.getResults("dress")` |
| resetFacets |  | Call this method to reset the facets. Ex: `unbxdSearch.resetFacets()` |
| resetAll |  | Call this method to reset all the page elements like selected facets, selected sort option, pagination etc. Ex: `unbxdSearch.resetAll()` |
| setPageStart |  | Call this method to set the the page number. Ex: `unbxdSearch.setPageStart(0)` |
| setRangeSlider |  | Call this method to update the range filter value. Ex:`unbxdSearch.setRangeSlider({"start":0,"end":573,"facetName":"price","gap": 200})` |
| getCategoryId | | Use this config function to return category id for a particular category page |
| setCategoryId | ({level, parent, name, action}, self) `level: category depth level`,`name: category path name` | In case of category facets in category page, this function is used to set the window UnbxdAnalyticsConf variable, and in turn populate the category path variable for the search api payload |
| onEvent | (instance,type,state) `type: Name of the event, state: Event state metadata`| Use this config function for adding any custom code based on an **event type** supported by the sdk. More about events in the [below section](#events) |
| onAction | (element,context) `element: html element on which the action is triggered, context:context object i.e. unbxdSearch`| Use this config function for facet element handlers like **change**, **keyup**, **click** | -->

Examples:
```js
onQueryRedirect:(self, redirect, urlBeforeRedirect)=> {
    if(redirect) {
        const {
            value,
            type
        } = redirect;
        if(type === "url") {
            /** If opening in same tab */
            if(history.state && history.state.replace) {
                history.replaceState(null,"",urlBeforeRedirect);
            }
            
            location.href =  value;  

            /** If opening redirect in new tab (rare scenario), 
             * then browser back + history push on search should be handled by client 
             * (especially switching betsween category to search page scenarios)
             * Note: This is not recommended */                                                       
        }
        return false;
    }
}
```

```js
onBackFromRedirect: (hashMode) => {
    let urlSearchParam = new URLSearchParams(hashMode ? location.hash.substring(1) : location.search);
    let backFromRedirect = urlSearchParam.get("redirected");
    if(backFromRedirect) {
        history.go(-1);
    }
}
```

```js
onNoUnbxdKeyRouting:() => {
    history.go();
}
```

```js
setRoutingStrategies:(locationParam, newUrl, productType, isUnbxdKey, replace) => {
    if (locationParam === newUrl) {
        return;
    } else if (productType === "CATEGORY") {
        /** Do not navigate to base category page  */
        if (!isUnbxdKey) {
            history.replaceState(null, "", newUrl);
        } else {
            history.pushState(null, "", newUrl);
        }
    } else {
        if ((history.state && history.state.replace) || replace) {
            history.replaceState(null, "", newUrl);
        } else {
            history.pushState(null, "", newUrl);
        }
    }
}
```

```js
 setCategoryId: function(param, self) {
    const {
        level,
        parent,
        name,
        action
        } = param;
        let page = ``;
        let fPath = ``;
        let pathArr = [];
        const l = Number(level);
        const breadCrumbs = self.getBreadCrumbsList("categoryPath");
        breadCrumbs.forEach((element,i) => {
            const {
                filterField,
                value
            } = element;
            fPath = filterField;
            if(l > i) {
                pathArr.push(value);
            }
        });
        if(l>breadCrumbs.length) {
            pathArr.push(decodeURIComponent(name));  
        }
        page = pathArr.join(">");
        if(window.UnbxdAnalyticsConf) {
            window.UnbxdAnalyticsConf.page = "categoryPath:\""+page+"\"";
        }
}
```







