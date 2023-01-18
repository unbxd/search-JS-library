---
layout: default
title: Methods and Events
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


| OPTIONS | Arguments | DESCRIPTION |
|----------|----------|----------|
| reRender | | Call this function if you want to render the page again. Ex: `unbxdSearch.reRender()` |
| updateConfig | (config) | Call this function for updating the config options in run time. Ex: `unbxdSearch.updateConfig({facet:{applyMultipleFilters:true}})` |
| onQueryRedirect | (self, redirect, urlBeforeRedirect) `redirect: redirect response from search api`, `urlBeforeRedirect: url before the browser redirected` | This config function holds the redirect logic for a query to which the response contains redirect information. Sample Search api response: `{redirect:{type:”url”,value:”https://www.unbxd.com”}` Parameter **redirected=true** is added in the browser url when replace state param is true in history. It is **not** recommended to open redirect in a new tab. In such a case, the custom client logic for above mentioned search input handlers should take care to not push state when switching to search from category |
| onBackFromRedirect | (hashMode) | This config function holds the logic to manipulate history when we come back to the site from the redirected url. This is only called if history state replace was true. It looks for the redirected parameter to identify that page is back from redirected url |
| setRoutingStrategies | (locationParam, newUrl, productType, isUnbxdKey, replace) `locationParam: current location param`, `newUrl: partial url to update`, `productType: SEARCH,CATEGORY`, `isUnbxdKey: true if any key required by sdk is present in the url`, `replace: whether to replace history state or push to new state` | Custom implementation on clicking browser back & forward |
| getCategoryPage |  | Call this function to render the category page. Ex: `unbxdSearch.getCategoryPage()` |
| getResults |  | Call this function to refetch the search results. Ex: `unbxdSearch.getResults("dress")` |
| resetFacets |  | Call this method to reset the facets. Ex: `unbxdSearch.resetFacets()` |
| resetAll |  | Call this method to reset the all the page elements like selected facets, selected sort option, pagination etc. Ex: `unbxdSearch.resetAll()` |
| setPageStart |  | Call this method to set the the page number. Ex: `unbxdSearch.setPageStart(0)` |
| setRangeSlider |  | Call this method to update the range filter value. Ex:`unbxdSearch.setRangeSlider({"start":0,"end":573,"facetName":"price","gap": 200})` |
| getCategoryId | | Use this config function to return category id for a particular category page |
| setCategoryId | ({level, parent, name, action}, self) `level: category depth level`,`name: category path name` | In case of multilevel category facets in category page, this function is used to set the window UnbxdAnalyticsConf variable, and in turn populate the path variable for the search api payload |
| onEvent | (instance,type,state) `type: Name of the event, state: Event state metadata`| Use this config function for adding any custom code based on an **event type** supported by the sdk. More about events in the [below section](#events)

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


## Events

This section documents the different events fired by the Unbxd Library that you can use to perform custom actions. The **onEvent** config function is called

-   ##### Name
    BEFORE_API_CALL
    ##### Scenario when event fired
    Right before the search api is called

-   ##### Name
    AFTER_API_CALL
    ##### Scenario when event fired
    If the search api call is successful

### Name
BEFORE_RENDER
### Scenario when event fired
First step of execution of the **reRender** function

### Name
BEFORE_NO_RESULTS_RENDER
### Scenario when event fired
Before rendering the zero results UI, if the number of results in the search api are `0`, as part of the **reRender** function

### Name
BEFORE_NO_RESULTS_RENDER
### Scenario when event fired
Before rendering the zero results UI, if the number of results in the search api are `0`, as part of the **reRender** function

### Name
AFTER_NO_RESULTS_RENDER
### Scenario when event fired
After rendering the zero results UI i.e. if the number of results in the search api are `0`, as part of the **reRender** function

### Name
AFTER_RENDER
### Scenario when event fired
Last step of execution of the **reRender** function

### Name
DELETE_FACET
### Scenario when event fired
Delete Facet action is initiated
### Arguments
```js
{ facetName }
```

### Name
FACETS_CLICK
### Scenario when event fired
Change facet action is initiated
### Arguments
```js
{
    facetName,
    facetData
}
```

### Name
CLEAR_SORT
### Scenario when event fired
Current sort data is cleared

### Name
CHANGE_SORT
### Scenario when event fired
Sort data is changed with new values on change sort action
### Arguments
```js
{
    sort:sortVal
}
```

### Name
PAGE_NEXT
### Scenario when event fired
Next page is triggered
### Arguments
```js
{
    value:next
}
```





