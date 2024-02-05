---
layout: default
title: Getting Started
nav_order: 3
has_children: true
permalink: docs/gettingStarted
---

# Getting Started
{: .fs-9 .no_toc }

---

# Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

# Prerequisite
Please complete the self serve FTU flow along with the dimensions mapping for fields like title, imageUrl, price, and categoryPath. 
More information can be found [here](./../prerequisites)

{: .important }
> Note: The config attributes mentioned below are from the **sample apparel feed** downloaded via the csv upload flow. These will change as per the site being used.

# Integration Instructions
Customize the search config used for invoking the sdk, to see the data related to your sitekey.

1. Change **siteKey** and **apiKey**

```js
    siteKey: "<<site key>>",
    apiKey: "<<api key>>"
```

2. Provide **attributesMap** inside **products** object. This mapping is as per the demo site , this must change according to the site being used

```js
    attributesMap: {
        "unxTitle": "title",
        "unxImageUrl": "imageURL",
        "unxPrice": "price",
        "unxDescription":"short_desc"
    };
```

3. Provide **product attributes** inside **products** object to be returned from the search api. If this is not provided, all fields related to the product will be returned, which in turn makes the api unnecessarily bulky. These fields are as per the demo site , this must change according to the site being used 

```js
    productAttributes: [
        "title",
        "imageURL",
        "price",
        "short_desc"
    ]
```

4. Add the correct **query selectors** based on your website, in the config.

5. Configure the correct category path for the **UnbxdAnalyticsConf** window object for **category page click** or **category page load**, and the page_type as well <br/>
/** todo: modify apparel feed in phoenix and check for cateogory api, once feed upload api is fixed from backend **/

**Example:**

```js  
    if (location.pathname === "/<<categoryPage1>>") {
        window.UnbxdAnalyticsConf = {
            page: "categoryPath:categoryPath1",
            page_type: 'BOOLEAN'
        };
        productType = "CATEGORY";
    } else if (location.pathname === "/<<categoryPage2>>") {
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

6. Set the correct **productType** in the products config, i.e. "SEARCH" for search  results page, or "CATEGORY" for category pages.

**Example:**

```js
    products: {
        productType: "<<SEARCH/CATEGORY>>"
    }
```

7. If it is a staging sitekey, set the correct search end point. For eg :

```js
    searchEndPoint: "https://wingman-argocd.unbxd.io/"
```

# Sample configuration with the unbxd demo sitekey feed

{: .warning }
> Note: All Element selectors must change as per your website. All attributes must change as per the sample feed data. Please refer the config from the **getConfig** function [here](https://codesandbox.io/s/ezmi0v?file=/src/js/config.js) and make the necessary changes

```js
window.unbxdSearch = new UnbxdSearch({
    siteKey: "demo-unbxd700181503576558",
    apiKey: "fb853e3332f2645fac9d71dc63e09ec1",
    searchBoxEl: document.getElementById("unbxdInput"),
    searchTrigger: "click",
    searchButtonEl: document.getElementById("searchBtn"),
    unbxdAnalytics: true,
    setCategoryId: function (param, self) {
        const {
            level,
            parent,
            name,
            action
        } = param;
        let page = ``;
        let pathArr = [];
        const l = Number(level);
        const breadCrumbs = self.getBreadCrumbsList("categoryPath");
        breadCrumbs.forEach((element, i) => {
            const {
                level,
                value
            } = element;
            if (l > Number(level) || Number(level) === 1) {
                pathArr.push(value);
            }
        });
        if (action !== "clearCategoryFilter") {
            pathArr.push(decodeURIComponent(name));
        }
        page = pathArr.join(">");
        if (window.UnbxdAnalyticsConf) {
            window.UnbxdAnalyticsConf.page = "categoryPath:\"" + page + "\"";
        }
    },
    products: { 
        el: document.getElementById("searchResultsWrapper"),
        productType: productType,
        onProductClick: function (product, e) {
            localStorage.setItem('unx_product_clicked', product.uniqueId);
            window.location.href = 'https://www.google.com';
        }
    },
    spellCheck: {
        enabled: true,
        el: document.getElementById("didYouMeanWrapper")
    },
    noResults: {
        el: document.getElementById("noResultWrapper")
    },
    selectedFacets: {
        el: document.getElementById("selectedFacetWrapper")
    },
    facet: {
        isCollapsible: true,
        defaultOpen: "NONE",
        viewMoreLimit: 2,
        enableViewMore: true,
        facetsEl: document.getElementById("facetsWrapper"),
        selectedFacetsEl: document.getElementById("selectedFacetWrapper"),
        selectedFacetClass: "UNX-selected-facet-btn",
        facetTemplate: function (facetInfo, facets, isExpanded, facetSearchTxt, facet) {
            const urlSearchParams = new URLSearchParams(window.location.search);
            const params = Object.fromEntries(urlSearchParams.entries());
            var name = facetInfo.displayName;
            var filterField = facetInfo.filterField;
            // var isSelected = (facetInfo.isSelected) ? 'is-expanded' : '';
            var searchStr = window.location.search || '';
            var isSelected = searchStr.includes(facetInfo.facetName) ? 'is-expanded' : '';

            return [ `<div id="${facetInfo.facetName}" class="facets__filters facets__filters--size js-filter-expand UNX_facet_open ${isSelected}">
                    <span aria-label="Filter: ${filterField}" role="text" class="facets__filters-label">${name}</span>
                     <ul data-search-facet-container="" class="facets__filters-values facets__filters-values--size list-reset js-filter-values UNX_facet_open ${isSelected}">
                      ${facets}
                    </ul>
                    </div>                 
                    `].join('');
        },
        facetItemTemplate: function (facet, value, facetSearchTxt) {
            const {
                facetName,
                isSelected,
                multiLevelFacetSelectorClass,
                displayName
            } = facet;
            const {
                name,
                count,
                dataId
            } = value;
            let {
                facetClass,
                selectedFacetClass
            } = this.options.facet;
            const {
                UNX_uFilter
            } = this.testIds;

            let action = "changeFacet";
            let selectedFacet = 'disable';
            let liCss = '';
            let hightlighted = '';
            if (isSelected) {
                selectedFacet = 'checked';
                hightlighted = 'highlight';
                facetClass += ` ${selectedFacetClass} `
                action = "deleteFacetValue";
                liCss = (isSelected) ? 'selected' : '';
            }
            return [ `<li class="facets__item facets__item--comfort level js-filter-item js-filter-item-${displayName} count-${count} ${liCss} ${facetName}" data-search-facet-value="${dataId}">
                <label data-search-facet-label="${name}" data-id="${dataId}" class="facet-checkbox facet-checkbox-${displayName} UNX-change-facet ${facetClass} " data-facet-action="${action}" data-test-id="${UNX_uFilter}" data-facet-name="${facetName}" data-handler-init="true">
                  <input data-search-facet-input="" ${selectedFacet} class="js-filter-checkbox" type="checkbox" value="${name}">
                <span class="${hightlighted}">${name} (${count})</span>
                </label>
                </li>`].join('');
        },
        selectedFacetTemplate: function (selections, facet, selectedFacetsConfig) {
            const {
                clearAllText,
                clearFacetsSelectorClass
            } = facet;
            const selectedFClass = (this.selectedFacetClass) ? this.selectedFacetClass : selectedFacetsConfig.selectedFacetClass;

            if (selections.length > 0) {
                return [ `<div class="collection__active-filters UNX-facets-selections">`,
                    `${selections}`,
                    `</div>` ].join('');
            } else {
                return ``;
            }
        },
        selectedFacetItemTemplate: function (selectedFacet, selectedFacetItem, facetConfig, selectedFacetsConfig) {
            const {
                facetName,
                facetType
            } = selectedFacet;
            const {
                name,
                count,
                dataId
            } = selectedFacetItem;
            const {
                facetClass,
                selectedFacetClass,
                removeFacetsSelectorClass
            } = this.options.facet;
            const {
                UNX_uFilter
            } = this.testIds;
            let action = "deleteSelectedFacetValue";

            const css = ` ${facetClass} ${selectedFacetClass} `;

            return [ `<a data-test-id="${UNX_uFilter}" class="collection__active-filters-btn btn btn--tertiary search-facet-display-name search-facet-remove-only ${css}" data-facet-name-value="metaf_${facetName}" data-facet-action="${action}" 
                     data-facet-name="${facetName}" data-facet-value="${facetName}" data-id="${dataId}" data-handler-init="true">${name}
                     <i class="collection__active-filters-icon icon icon--close-blue" 
                     data-facet-action="${action}" data-facet-name="${facetName}" data-facet-value="${facetName}" data-id="${dataId}" >
                     </i> </a>`].join('');
        },
    },


    pagination: {
        type: 'FIXED_PAGINATION',
        el: document.querySelector('.unxPagination'),
        virtualization: false,
        bufferPages: 1,
        heightDiffToTriggerNextPage: 100,
        infiniteScrollTriggerEl: document.getElementById('searchResultsWrapper'),
        onPaginate: function (data) { console.log(data, "data") }
    },
    url: {
        hashMode: false,
        allowExternalUrlParams: false,
        seoFriendlyUrl: true,
        orderOfQueryParams: ["QUERY",  "FILTERS", "PAGE_NUMBER" ,"PAGE_SIZE","SORT","VIEW_TYPE"], //defaults.
        
        queryParamSeparator: "&",
        searchQueryParam: {
            addToUrl: true,
            algo: "KEY_VALUE_REPLACER",
            keyReplacer: "query"
        },
        browseQueryParam: {
            addToUrl: true,
            algo: "DEFAULT",
            keyReplacer: "pppp"
        },
        pageViewParam: {
            addToUrl: true,
            algo: "KEY_VALUE_REPLACER",
            keyReplacer: "view",
            valuesReplacer: {
                "GRID": "GRID",
                "LIST": "LI@ST(list)"
            }
        },
        sortParam: { 
            addToUrl: true,
            algo: "DEFAULT", 
            keyReplacer: "sortBy",
            valueReplacer: {
                "price desc": "p&d",
                "price asc": "p-a"
            }
        },
        pageNoParam: { 
            addToUrl: true,
            algo: "DEFAULT",
            keyReplacer: 'p', 
            usePageNo: true // uses page no. when turned on.else , index
        },
        pageSizeParam: {
            addToUrl: true,
            algo: "DEFAULT",
            keyReplacer: "count"
        },
        facetsParam: {
            addToUrl: true,
            algo: "KEY_VALUE_REPLACER",
            multiValueSeparator: ",",
            keyReplacer: {
                "color_uFilter": "color",
                "size_uFilter": "size",
                "gender_uFilter": "gender",
                "occasion_uFilter": "occasion",
                "fit_uFilter": "fit",
                "type_uFilter":"type"
            },
            valueReplacer: {
                "color_uFilter": {
                    "Multi": "multi",
                    "White": "whitee"
                },
                "occasion_uFilter": {
                    "Wear to Work": "Wear-to-work"
                }
            },
            facetsOrderInUrl: ["gender_uFilter","color_uFilter","price","category-filter"],
            rangeFacets: ["price"],
            rangeSeparator: "-"
        }
    },
    breadcrumb: {
        el: document.getElementById("breadcrumpContainer")
    },
    pagesize: {
        enabled: true,
        el: document.getElementById("changeNoOfProducts"),
        pageSize: 10,
        options: [10, 20, 30, 40]
    },

    sort: {
        enabled: true,
        el: document.getElementById("sortWrapper"),
        options: [ {
            value: "price desc",
            text: "Price High to Low"
        },
        {
            value: "price asc",
            text: " Price Low to High"
        }
        ]
    },
    loader: {
        el: document.getElementById("loaderEl")
    },
    productView: {
        el: document.getElementById("productViewTypeContainer"),
        defaultViewType: "GRID"
    },
    banner: {
        el: document.getElementById("bannerContainer"),
        count: 1
    },
    swatches: {
        enabled: true,
        attributesMap: {
            swatchList: "color",
            swatchImgs: "unbxd_color_mapping",
            swatchColors: "color"
        }
    }
    onAction: function (e, ctx) { },
    onEvent: unbxdCallbackEcma,
    debugMode: true,
    browseQueryParam: 'p-id'
});

```

# Understanding The Page

Before we delve into the next set of configs, let’s first understand the most common sections present in a search results page or category landing page.  
      
Here is a graphical representation of the various sections on a search results page:

[![](https://unbxd.com/docs/wp-content/uploads/2020/05/graphical-rep-in-sdk.png)](https://unbxd.com/docs/wp-content/uploads/2020/05/graphical-rep-in-sdk.png)
