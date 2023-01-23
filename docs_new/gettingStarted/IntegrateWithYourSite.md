---
layout: default
title: Integrate with your site
nav_order: 4
parent: Getting Started
---

# Integrate with your site
{: .fs-9 .no_toc }

---

# Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

# Integrate with your site

-   Include the vanilla js search library via the link:
    ```js
    <script  src="https://libraries.unbxdapi.com/search-sdk/v<<latest version>>/vanillaSearch.min.js"  type="text/javascript"></script>
    ```
    {: .info }
    > The **latest version** can be found via the npm repository:
    [search js library](https://www.npmjs.com/package/@unbxd-ui/vanilla-search-library)

-   To get the default theme, include the library css in the link tag:
    ```js
    <link rel="stylesheet" type="text/css" href="https://libraries.unbxdapi.com/search-sdk/v2.0.5/vanillaSearch.min.css">
    ```

-   Customize the config, to see the data related to your sitekey:
    -   Change **siteKey** and **apiKey**.
    ```js
    siteKey: "<<site key>>",
    apiKey: "<<api key>>"
    ```
    -   Modify **attributesMap** inside **products** object.
        ```js
        attributesMap: {
        "unxTitle": "<<title attribute>>",
        "unxImageUrl": "<<image url attribute>>",
        "unxPrice": "<<price attribute>>",
        "unxDescription":"<<description attribute>>"
        };
        ```
    -   Provide **product attributes** to be returned from the search api:
        ```js
        productAttributes: ["<<title attribute>>","<<image url attribute>>","<<price attribute>>","<<description attribute>>"]
        ```
    -   Add the correct query selectors based on your website, in the config
    -   Configure the correct category ids for the **UnbxdAnalyticsConf** window object    wherever applicable

    ### Example:
    {: no_toc }

    ```js
        if (location.pathname === "/categoryPage1") {
            window.UnbxdAnalyticsConf = {
                page: "categoryId1"
            };
            productType = "CATEGORY";
        } else if (location.pathname === "/categoryPage2") {
            window.UnbxdAnalyticsConf = {
                page: "categoryId2"
            };
            productType = "CATEGORY";
        } else {
            window.UnbxdAnalyticsConf = {};
            productType = "SEARCH";
        }
    ```
    -   Set the correct **productType** in the products config, i.e. "SEARCH" for search    results page, or "CATEGORY" for category pages.

    ### Example:
    {: .no_toc }

    ```js
    products: {
        productType: productType, 
    }
    ```

    ### Arguments:
    {: .no_toc }

    productType: SEARCH/CATEGORY 

-   Invoke the sdk along with the custom config object:

    ### Example:
    {: .no_toc }

    ```js
        window.unbxdSearch = new UnbxdSearch({
        siteKey: "ss-unbxd-gcp-Gardner-White-STG8241646781056",
        apiKey: "e2082aeb3a7f0ac8955c879daf7673e8",
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
            }
        },
        allowExternalUrlParams: true,
        hashMode: true,
        products: {
            el: document.getElementById("searchResultsWrapper"),
            productType: "SEARCH",
            onProductClick: function (product, e) {
            history.pushState(null, null, `${product.variants[0].productUrl}`);
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