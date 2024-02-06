---
layout: default
title: Methods
nav_order: 6
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
> It is important to note that ONLY these JS methods listed on this page are for user's consumption and no other internal methods from the SDK should be overwritten. If other SDK methods are overwritten, it could potentially impact the default behavior of the SDK, and we cannot be held responsible for any resulting issues.


---
## reRender

The "reRender" function is a method used in ecommerce SDKs to re-render a page. In an ecommerce website or application, pages are typically rendered based on data retrieved from the server or user interactions with the page.

In some cases, it may be necessary to re-render the page without reloading it from the server, such as when a user has made a change to a product or service that should be immediately reflected in the page display.

The "reRender" function is called to force a re-render of the page. When this function is called, it typically triggers a new rendering cycle that updates the page display based on any new or modified data. This can be useful in situations where the content of the page needs to be dynamically updated, such as when a product is added or removed from the shopping cart, or when a user applies a filter or sorting option to a list of search results.


### Default invocation
{: .no_toc }
```js
unbxdSearch.reRender()
```
---
## updateConfig

The "updateConfig" function is a method used in the Unbxd SDK to update configuration options in runtime using JavaScript. Configuration options are the settings that determine how the ecommerce website or application functions, such as the pagination, sorting, facets, and product display options.

When the "updateConfig" function is called, it typically takes an object containing the updated configuration options as its parameter. These updated configuration options can be applied any time during runtime, without requiring a page reload, and are used to modify the behavior of the ecommerce website or application.



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

The "getResults" function is a method used in ecommerce JavaScript to refetch search results. In an ecommerce website, when a user performs a search for a product or service, the website displays a list of search results. These search results can be filtered or sorted by various criteria such as price, relevance, or popularity.

In some cases, the search results may need to be updated without the user initiating a new search query. For example, if the user applies a filter to the search results, the search results may need to be refetched to show the updated results based on the selected filter.

The "getResults" function is called to refetch the search results in such cases. When this function is called, it sends a new request to the server to retrieve the search results based on the current search query and any selected filters or sort options.


### Default invocation
{: .no_toc }
```js
unbxdSearch.getResults("dress")
```
---
## resetFacets

The "resetFacets" method is a function that can be called in an ecommerce JavaScript code to reset the facets. Facets are filters used in ecommerce websites to allow users to refine their search results based on various criteria such as price, size, color, etc.

When a user applies one or more facets to their search, the search results are narrowed down to products that match the selected facets. The "resetFacets" method allows users to reset all the selected facets and view the full search results again.

The method typically works by removing any active facet filters applied to the search query and reloading the search results page with the updated results. This can improve the user experience by allowing them to start a new search or explore more products without having to manually deselect all the applied facets one by one.

### Default invocation
{: .no_toc }
```js
unbxdSearch.resetFacets()
```
---
## resetAll

The "reset all" functionality refers to a method that resets all of the page elements related to search and navigation. This includes search query, selected facets, selected sort options, pagination, and any other elements related to the search or navigation experience on the website.

When this method is called, all of these elements are reset to their default states. This can be useful for situations where the user wants to start a new search or navigation experience from scratch, or if the user wants to clear all previous selections and start fresh.

By calling the "reset all" method, the SDK ensures that the page elements related to search and navigation are consistent with the user's intentions, and that any previous selections or filters do not impact the current search experience. 

### Default invocation
{: .no_toc }
```js
unbxdSearch.resetAll()
```
---
## setPageStart
Call this method to set the the page number.

The "setPageStart" function refers to a method that sets the starting page number for pagination. This method is used to indicate to the SDK which page of results should be displayed when the search or navigation page loads.

For example, if the user has previously navigated to page 3 of search results and then performs a new search, the SDK may use the "setPageStart" function to set the starting page number to 1, so that the user is presented with the first page of results for the new search query.

By using the "setPageStart" function, the SDK ensures that the correct page of results is displayed to the user, providing a seamless and consistent search experience on the ecommerce site.

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
1. `type`: Name of the event, state: Event state metadata for eg: configError , afterApiCall, afterRender etc.
2. `instance`: This takes in the context i.e. js instance .
3. `payload`: This is an object where any data can be sent .

### Default value
{: .no_toc }

```js
onEvent: function(instance, type ,{payload}){
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
