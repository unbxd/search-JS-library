---
layout: default
title: Integrate with sample apparel feed 
nav_order: 3
parent: Getting Started
---

1. TOC
{:toc}

# Integrate with apparel feed
{: .no_toc }

{: .important }
> Note: The sample apparel feed is used from the self serve dashboard via the csv upload feature. 

## Prerequisite
Please complete the FTU flow along with the dimensions mapping for fields like title, imageUrl, price, and categoryPath. 
More information can be found [here](./../prerequisites)

## Integration Instructions

1. Include the vanilla js search library via the link:
    ```js
    <script  src="https://libraries.unbxdapi.com/search-sdk/v<<latest version>>/vanillaSearch.min.js"  type="text/javascript"></script>
    ```
    {: .important }
    > The **latest version** can be found via the npm repository:
    [search js library](https://www.npmjs.com/package/@unbxd-ui/vanilla-search-library)

2.  To get the default theme, include the library css in the link tag:
    ```js
    <link rel="stylesheet" type="text/css" href="https://libraries.unbxdapi.com/search-sdk/v2.0.5/vanillaSearch.min.css">
    ```

3. Customize the config, to see the data related to your sitekey. 
    1. Change **siteKey** and **apiKey**.
    ```js
    siteKey: "<<site key>>",
    apiKey: "<<api key>>"
    ```
    2. Modify **attributesMap** inside **products** object.
        ```js
        attributesMap: {
        "unxTitle": "title",
        "unxImageUrl": "imageURL",
        "unxPrice": "price",
        "unxDescription":"short_desc"
        };
        ```
    3. Provide **product attributes** inside **products** object to be returned from the search api. If this is not provided, all fields related to the product will be returned.
        ```js
        productAttributes: ["title","imageURL","price","short_desc"]
        ```
    4. Add the correct **query selectors** based on your website, in the config.
    5. Configure the correct category path for the **UnbxdAnalyticsConf** window object for **category page click** or **category page load**, and the page_type as well <br/>
    /** todo: modify apparel feed in phoenix and check for cateogory api, once feed upload api is fixed from backend **/

        **Example:**
        {: .no_toc }

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

    6. Set the correct **productType** in the products config, i.e. "SEARCH" for search    results page, or "CATEGORY" for category pages.

        **Example:**
        {: .no_toc }

        ```js
        products: {
            productType: productType,  //SEARCH/CATEGORY
        }
        ```
    7. If it is a staging sitekey, set the correct search end point
        ```js
        searchEndPoint: "https://wingman-argocd.unbxd.io/"
        ```


## Sample configuration with the apparel feed

{: .important }
> Note: All Element selectors will change as per your website

```js
window.unbxdSearch = new UnbxdSearch({
siteKey: "<<sitekey>>",
apiKey: "<<apikey>>",
updateUrls: true,
searchBoxEl: document.getElementById("unbxdInput"),
searchTrigger: "click",
searchButtonEl: document.getElementById("searchBtn"),
unbxdAnalytics: true,
pagination: {
    type: "FIXED_PAGINATION",
    el: document.querySelector("#clickScrollContainer"),
    onPaginate: function (data) {
    console.log(data, "data");
    },
},
allowExternalUrlParams: true,
hashMode: true,
products: {
    el: document.getElementById("searchResultsWrapper"),
    productType: "SEARCH",
    onProductClick: function (product, e) {
    history.pushState(null, null, `${product.variants[0].productUrl}`);
    },
    productAttributes: ["title","imageURL","price","short_desc"],
    attributesMap: {
        "unxTitle": "title",
        "unxImageUrl": "imageURL",
        "unxPrice": "price",
        "unxDescription":"short_desc"
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
    facetsEl: document.getElementById("facetsWrapper"),
    applyMultipleFilters: false,
    defaultOpen: "FIRST",
    onFacetLoad: function (facets) {
    const self = this;
    const { facet } = this.options;
    const { rangeWidgetConfig } = facet;
    facets.forEach((facetItem) => {
        const { facetType, facetName, gap } = facetItem;
        const { prefix } = rangeWidgetConfig;

        if (facetType === "range") {
        const rangeId = `${facetName}_slider`;
        const sliderElem = document.getElementById(rangeId);
        let { end, gap, max, min, start } = facetItem;
        const selectedValues = sliderElem.dataset;
        if (selectedValues) {
            (start = Number(selectedValues.x)),
            (end = Number(selectedValues.y));
        }
        this[rangeId] = noUiSlider.create(sliderElem, {
            start: [start, end],
            tooltips: [
            {
                to: function (value) {
                return `${prefix} ${Math.round(value)}`;
                }
            },
            {
                to: function (value) {
                return `${prefix} ${Math.round(value)}`;
                }
            }
            ],
            connect: true,
            range: {
            min: 0,
            max: max
            },
            format: {
            to: function (value) {
                return Math.round(value);
            },
            from: function (value) {
                return Math.round(value);
            }
            },
            padding: 0,
            margin: 0
        });
        this[rangeId].on("set", function (data) {
            const newData = {
            start: data[0],
            end: data[1],
            facetName,
            gap
            };
            self.setRangeSlider(newData);
        });
        }
    });
    },
    isCollapsible: true,
    isSearchable: true,
    enableViewMore: false,
    rangeTemplate: function (range, selectedRange, facet) {
    const { facetName, start, end } = range;
    let min = start;
    let max = end;
    if (selectedRange.length > 0) {
        const sel = selectedRange[0].replace(/[^\w\s]/gi, "").split(" TO ");
        min = sel[0];
        max = sel[1];
    }
    const rangId = `${facetName}_slider`;
    return [
        `<div id="${facetName}"  data-id="${facetName}" class=" UNX-range-slider-wrap">`,
        `<div class="UNX-value-container UNX-range-value-block" ></div>`,
        `<div id="${rangId}" data-x="${min}" data-y="${max}" class="UNX-range-slider-wrapper"></div>`,
        `</div>`,
        `<div>`,
        `</div>`
    ].join("");
    }
},
breadcrumb: {
    el: document.getElementById("breadcrumpContainer")
},
pagesize: {
    el: document.getElementById("changeNoOfProducts")
},

sort: {
    el: document.getElementById("sortWrapper"),
    options: [
    {
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
},
onEvent: function (instance, type, data) {
    console.log(type, data, "type,data");
}
});
```





