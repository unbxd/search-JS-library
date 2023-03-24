---
layout: default
title: Methods
nav_order: 5
---

# Methods  
{: .no_toc }

# Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Methods
{: .no_toc }

This section documents the different methods exposed by the sdk/sdk config that one can use to perform various actions.

{: .warning }
> It is important to note that only these JS methods listed on this page are for user's consumption and no other internal methods from the SDK should be overwritten. If other SDK methods are overwritten, it could potentially impact the default behavior of the SDK, and we cannot be held responsible for any resulting issues.


---
## reRender
Call this function if you want to render the page again.
### Default invocation
{: .no_toc }
```js
unbxdSearch.reRender()
```
---
## updateConfig
Call this function for updating the config options in run time.
### arguments
{: .no_toc }
1. `config`: Object with new config information (Only the updated keys need to be present)

### Default invocation
{: .no_toc }
```js
unbxdSearch.updateConfig({
    facet:{
        applyMultipleFilters:true
    }
})
```

---
## onQueryRedirect
This config function holds the redirect logic for a query to which the response contains redirect information. Sample Search api response: `{redirect:{type:”url”,value:”https://www.unbxd.com”}` Parameter **redirected=true** is added in the browser url when replace state param is true in history. It is **not** recommended to open redirect in a new tab. In such a case, the custom client logic for above mentioned search input handlers should take care to not push state when switching to search from category.
### arguments
{: .no_toc }
1. `redirect`: Redirect response from search api.  
2. `urlBeforeRedirect`: Url before the browser redirected.   

### Default value
{: .no_toc }

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

---
## onBackFromRedirect
This config function holds the logic to manipulate history when we come back to the site from the redirected url. This is only called if history state replace was true. It looks for the redirected parameter to identify that page is back from redirected url.
### arguments
{: .no_toc }
1. `hashMode`: If sdk config has hashMode set to true.  

### Default value
{: .no_toc }

```js
onBackFromRedirect: (hashMode) => {
    let urlSearchParam = new URLSearchParams(hashMode ? location.hash.substring(1) : location.search);
    let backFromRedirect = urlSearchParam.get("redirected");
    if(backFromRedirect) {
        history.go(-1);
    }
}
```

---
## setRoutingStrategies
Custom implementation on clicking browser back & forward .
### arguments
{: .no_toc }
1. `locationParam`: Current location param string.  
2. `newUrl`: New url string to replace the current string.  
3. `productType`: SEARCH/CATEGORY  
4. `isUnbxdKey`: True if any key required by sdk is present in the url  
5. `replace`: Whether to replace history state or push to new state.  

### Default value
{: .no_toc }

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

---
## getCategoryPage
Call this function to render the category page.
### Default invocation
{: .no_toc }
```js
unbxdSearch.getCategoryPage()
```
---
## getResults
Call this function to refetch the search results.
### Default invocation
{: .no_toc }
```js
unbxdSearch.getResults("dress")
```
---
## resetFacets
Call this method to reset the facets.
### Default invocation
{: .no_toc }
```js
unbxdSearch.resetFacets()
```
---
## resetAll
Call this method to reset all the page elements like selected facets, selected sort option, pagination etc.
### Default invocation
{: .no_toc }
```js
unbxdSearch.resetAll()
```
---
## setPageStart
Call this method to set the the page number.
### Default invocation
{: .no_toc }
```js
unbxdSearch.setPageStart(0)
```
---
## setRangeSlider
Call this method to update the range filter value. More about range slider in this [page](./configurations/FacetsConfig.html#range-sliders) .

### Default invocation
{: .no_toc }
```js
unbxdSearch.setRangeSlider({
    "start":0,
    "end":573,
    "facetName":"price",
    "gap": 200
    })
```
---
## getCategoryId
Use this config function to return category id for a particular category page
### Default value
{: .no_toc }
```js
unbxdSearch.setRangeSlider({
    "start":0,
    "end":573,
    "facetName":"price",
    "gap": 200
    })
```
---
## setCategoryId
In case of category facets in category page, this function is used to set the window UnbxdAnalyticsConf variable, and in turn populate the category path variable for the search api payload.
### arguments
{: .no_toc }
1. `level`: Category depth level.  
2. `name`: Category path name.  

### Default value
{: .no_toc }

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

---
## onEvent
Use this config function for adding any custom code based on an **event type** supported by the sdk. More about events in this [page](./Events.html) .
### arguments
{: .no_toc }
1. `type`: Name of the event, state: Event state metadata  
2. `instance`: js instance

### Default value
{: .no_toc }

```js
onEvent: function(type,instance){
    //Custom code here
}
```

---
## onAction
Use this config function for facet element handlers like **change**, **keyup**, **click** .
### arguments
{: .no_toc }
1. `e`: html element on which the action is triggered  
2. `ctx`: context object i.e. unbxdSearch  

### Default value
{: .no_toc }

```js
onAction: function(e, ctx) {
    console.log(e.target,ctx);
}
```

---
## onNoUnbxdKeyRouting
Routing action when the url does not have any unbxd key.
### Default value
{: .no_toc}
```js
onNoUnbxdKeyRouting:() => {
    history.go();
}
```
