import UnbxdSearch from "../../src/index";

let routeTemplate = `
<div class="UNX-header">
        <div class="UNX-header-inner">
            <div class="UNX-logo">
                UNBXD
            </div>
            <div class="UNX-input-wrapper">
                <input id="unbxdInput" class="UNX-input" />
                <button id="searchBtn" class="fa fa-search UNX-search-btn"></button>
            </div>
        </div>
        <nav id="categoryLinks" class="UNX-naviagtion-wrap">
            <button data-id="itemGroupIds:185" class="nav-links" data-path="/sectionals">Sectionals</a>
            <button data-id="itemGroupIds:1800" class="nav-links" data-path="/beds">Beds</button>
            
        </nav>
    </div>

    <div class="UNX-results-container">
        <div class="UNX-head-wrapper">
            <div class="UNX-selected-actions">
                <div class="UNX-bread-wrapper" id="breadcrumpContainer"></div>
                <div class="UNX-selected-facet-wrapper" id="selectedFacetWrapper"></div>
            </div>
            <div class="UNX-product-type-block" id="productViewTypeContainer"></div>
        </div>
        <div class="UNX-product-results">
            <div class="UNX-facet-wrapper">
                <h2 class="UNX-filter-header">Filter By</h2>
                <div class="UNX-fxd-facet">
                    <div class="UNX-selected-facet-wrapper UNX-selected-f-m" id="selectedMFacetWrapper"></div>
                    <div class="UNX-multilevel-block" id="bucketedFacetWrapper"></div>
                    <div class="UNX-text-facet-block" id="facetsWrapper"></div>
                    <div class="UNX-range-block" id="rangeFacetWrapper"></div>
                    <div class="UNX-m-facet-row">
                        <button data-action="applyFacets" class="UNX-primary-btn UNX-facet-trigger">Apply</button>
                        <button data-action="clearFacets" class="UNX-default-btn UNX-facet-trigger">Clear</button>
                    </div>

                </div>
                <div class="UNX-m-facet-row">
                    <button class="UNX-m-facet-btn UNX-facet-trigger fa fa-filter"></button>
                </div>
            </div>
            <div class="UNX-product-list">
                <div class="UNX-result-header">
                    <div id="didYouMeanWrapper"></div>
                    <div class="UNX-result-right">
                        <div class="UNX-change-products" id="changeNoOfProducts"></div>
                        <div class="UNX-sort-wrapper" id="sortWrapper"></div>
                        <div class="UNX-change-pagination-wrap" id="paginationContainer"></div>
                        <div id="" class="UNX-change-pagination-wrap unxPagination"></div>
                    </div>
                </div>
                <div id="bannerContainer"></div>
                <div class="UNX-product-wrapper" id="searchResultsWrapper"></div>
                <div id="" class="UNX-change-pagination-wrap UNX-m-page unxPagination"></div>
            </div>
        </div>
        <div class="UNX-loader-container" id="loaderEl"></div>
        <div id="noResultWrapper"></div>
        <div id="clickScrollContainer">
        </div>
    </div>
`;

const routes = {
    '/': routeTemplate,
    '/sectionals': routeTemplate,
    '/beds': routeTemplate,
};

const rootDiv = document.getElementById('root');
rootDiv.innerHTML = routes[window.location.pathname];

const setCategory = function (e) {
    const el = e.target;
    const {
        dataset
    } = el;
    if (dataset && dataset.id) {
        window.history.pushState(null, null, dataset.path);
        // rootDiv.innerHTML = routes[el.pathname];
        window.UnbxdAnalyticsConf = {
            page: dataset.id
        };
        window.unbxdSearch.getCategoryPage();
    }

};
const navElem = document.getElementById("categoryLinks");
navElem.addEventListener("click", setCategory);


const checkRangeTemplate = function (range, selectedRange, facet) {
    const {
        displayName,
        facetName,
        values,
        gap
    } = range;
    let valueUI = ``;
    const {
        facetClass,
        selectedFacetClass,
        applyMultipleFilters,
        applyButtonText,
        clearButtonText,
    } = facet;
    const selected = selectedRange.length > 0 ? true : false;
    values.forEach(item => {
        const {
            from,
            end
        } = item;
        const isSelected = this.isSelectedRange(facetName, item);
        const btnCss = (isSelected) ? `UNX-selected-facet-btn ${facetClass} ${selectedFacetClass}` : `${facetClass}`;
        valueUI += [`<button class="${btnCss} UNX-range-facet UNX-change-facet" data-action="setRange" data-facet-name="${facetName}" data-start="${from.dataId}" data-end="${end.dataId}" >`,
        `<span class="UNX-facet-text">${from.name}  -  ${end.name}</span>`,
        `<span class="UNX-facet-count">(${from.count})</span>`,
            `</button>`
        ].join('');
    });
    let clearBtn = ``;
    let applyBtn = ``;
    if (selected) {
        if (applyMultipleFilters) {
            applyBtn = `<button class="UNX-default-btn ${facetClass} UNX-facet-primary" data-action="applyRange"> ${applyButtonText}</button>`;
        }
        clearBtn = `<button class="UNX-default-btn UNX-facet-clear  ${facetClass}" data-action="clearRangeFacets">${clearButtonText}</button>`;
    }
    return [`<div class="UNX-range-wrapper">`,
        valueUI,
        `<div class="UNX-price-action-row">`,
        applyBtn, clearBtn,
        `<div>`,
        `</div>`
    ].join('')
}

const unbxdCallbackEcma = function (instance, type, data) {
    console.log(type, data, 'type,data');
}

let showFacet = false;
window.resizeTimer = null;

const facetBlock = document.querySelector(".UNX-fxd-facet");
const checkMobile = () => {
    const w = window.innerWidth;
    if (w < 980) {
        return true;
    }
    return false;
};
const toggleMobileFacets = (e) => {
    showFacet = !showFacet;
    const {
        action
    } = e.target.dataset;
    if (action === "applyFacets") {
        window.unbxdSearch.setPageStart(0);
        window.unbxdSearch.getResults();
    }
    if (action === "clearFacets") {
        window.unbxdSearch.clearAllFacets();
        window.unbxdSearch.setPageStart(0);
        window.unbxdSearch.getResults();
    }
    if (showFacet) {
        facetBlock.classList.add("UNX-show-facets")
    } else {
        facetBlock.classList.remove("UNX-show-facets")
    }
}

const btnEls = document.querySelectorAll(".UNX-facet-trigger");
btnEls.forEach(item => {
    item.addEventListener("click", toggleMobileFacets)
});

let performRouteActions = () => {
    console.log("Parent popstate called");
    if (location.pathname === "/sectionals") {
        window.UnbxdAnalyticsConf = {
            page: "itemGroupIds:185"
        };
        unbxdSearch.options.productType = "CATEGORY";
        console.log("Parent popstate sectionals called");
    } else if (location.pathname === "/beds") {
        window.UnbxdAnalyticsConf = {
            page: "itemGroupIds:1800"
        };
        unbxdSearch.options.productType = "CATEGORY";
        console.log("Parent popstate beds called");
    } else {
        console.log("analytics conf emptied");
        window.UnbxdAnalyticsConf = {};
        unbxdSearch.options.productType = "SEARCH";
        console.log("Parent popstate home called");
    }
}



window.addEventListener('popstate', () => {
    performRouteActions();
});

let searchButtonEl = document.getElementById("searchBtn");
let searchBoxEl = document.getElementById("unbxdInput");

searchButtonEl.addEventListener("click", () => {
    if (unbxdSearch.options.productType !== 'SEARCH') {
        window.UnbxdAnalyticsConf = {};
        unbxdSearch.options.productType = 'SEARCH';
        window.history.pushState({
                replace: true
            },"","/")
    }
});


searchBoxEl.addEventListener("keydown", (e) => {
        const val = e.target.value;
        if (e.key === 13) {  //checks whether the pressed key is "Enter"
            if(val !== ""){
                if (unbxdSearch.options.productType !== 'SEARCH') {
                    window.UnbxdAnalyticsConf = {};
                    unbxdSearch.options.productType = 'SEARCH';
                    window.history.pushState({
                            replace: true
                        },"","/")
                }
            }
        }
});



window.unbxdSearch = new UnbxdSearch({
    siteKey: "ss-unbxd-gcp-Gardner-White-STG8241646781056",
    apiKey: "e2082aeb3a7f0ac8955c879daf7673e8",
    updateUrls: true,
    searchBoxEl: document.getElementById("unbxdInput"),
    searchTrigger: "click",
    searchButtonEl: document.getElementById("searchBtn"),
    products: {
        productType: "SEARCH",
    },
    unbxdAnalytics: true
});
window.unbxdSearch.updateConfig({
    products: {
        el: document.getElementById("searchResultsWrapper"),
        productType: "SEARCH",
        productClick: function (product, e) {
            console.log(product, "product,index", e);
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
            const {
                facet
            } = this.options;
            const {
                rangeWidgetConfig
            } = facet;
            facets.forEach(facetItem => {
                const {
                    facetType,
                    facetName,
                    gap
                } = facetItem;
                const {
                    prefix
                } = rangeWidgetConfig;

                if (facetType === "range") {
                    const rangeId = `${facetName}_slider`;
                    const sliderElem = document.getElementById(rangeId);
                    let {
                        end,
                        gap,
                        max,
                        min,
                        start
                    } = facetItem;
                    const selectedValues = sliderElem.dataset;
                    if (selectedValues) {
                        start = Number(selectedValues.x),
                            end = Number(selectedValues.y)
                    }
                    this[rangeId] = noUiSlider.create(sliderElem, {
                        start: [start, end],
                        tooltips: [{
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
                            'min': 0,
                            'max': max
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
                        margin: 0,
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
            const {
                facetName,
                start,
                end
            } = range;
            let min = start;
            let max = end;
            if (selectedRange.length > 0) {
                const sel = selectedRange[0].replace(/[^\w\s]/gi, '').split(" TO ");
                min = sel[0];
                max = sel[1];
            }
            const rangId = `${facetName}_slider`;
            return [`<div id="${facetName}"  data-id="${facetName}" class=" UNX-range-slider-wrap">`,
                `<div class="UNX-value-container UNX-range-value-block" ></div>`,
            `<div id="${rangId}" data-x="${min}" data-y="${max}" class="UNX-range-slider-wrapper"></div>`,
                `</div>`,
                `<div>`,
                `</div>`
            ].join('')
        }
    },
    pagination: {
        type: 'INFINITE_SCROLL',
        el: document.querySelector("#clickScrollContainer"),
        onPaginate: function (data) { console.log(data, "data") }
    },
    breadcrumb: {
        el: document.getElementById("breadcrumpContainer")
    },
    pagesize: {
        el: document.getElementById("changeNoOfProducts")
    },

    sort: {
        el: document.getElementById("sortWrapper"),
        options: [{
            value: "min_price desc",
            text: "Price High to Low"
        },
        {
            value: "min_price asc",
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
    onAction: function (e, ctx) { },
    onEvent: unbxdCallbackEcma

});
performRouteActions();

