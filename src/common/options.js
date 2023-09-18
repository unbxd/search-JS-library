import didYouMeanUI from "../modules/didYouMean/didYouMeanUI";
import {
    selectedFacetUI,
    facetUIElem,
    facetItemUiElem,
    selectedFacetItemTemplateUI
} from "../modules/facets/ui";
import productTemplate from '../modules/searchResults/ui';
import paginationView from "../modules/pagination/paginationView";
import {
    renderRangeFacets
} from "../modules/facets/renderRangeFacets";
import multiLevelFacetUI from "../modules/facets/multiLevelFacetUI";
import breadCrumbsUI from "../modules/breadcrumbs/breadCrumbsUI";
import {
    sortOptions,
    sortTemplate
} from "../modules/sort";
import renderProductViewType from '../modules/productViewType/renderProductViewType';
import bannerTemplateUI from '../modules/banners/bannerTemplateUI';
import pageSizeUi from '../modules/pageSize/pageSizeUi';
import swatchTemplate from "../modules/swatches/ui";

const options = {
    productId: "uniqueId",
    searchBoxEl: null,
    searchButtonEl: null,
    siteKey: "demo-spanish-unbxd809051588861207",
    apiKey: "f19768e22b49909798bc2411fa3dd963",
    searchPath: "",
    searchTrigger: 'click',
    searchEndPoint: "https://fb734f3f-4286-49f5-98eb-9726caab59ad.mock.pstmn.io/",
    products: {
        el: null,
        template: productTemplate,
        productItemClass: "product-item", // to find out product
        productType: "SEARCH",
        gridCount: 1,
        searchTrigger: 'click',
        onProductClick: function (product, e) {
        },
        productAttributes: [
            "title",
            "uniqueId",
            "price",
            "sku",
            "imageUrl",
            "displayPrice",
            "salePrice",
            "sortPrice",
            "productDescription",
            "unbxd_color_mapping",
            "colorName",
            "color",
            "productUrl"
        ],
        attributesMap: {
            'unxTitle': 'title',
            'unxImageUrl': 'imageUrl',
            'unxPrice': 'salePrice',
            'unxStrikePrice': 'displayPrice',
            'unxId': 'uniqueId',
            'unxDescription': 'productDescription'
        },
        defaultImage: "https://libraries.unbxdapi.com/sdk-assets/defaultImage.svg",
        tagName: "DIV",
        htmlAttributes: {
            class: "UNX-search-results-block UNX-result-wrapper"
        },
        events: {}

    },
    defaultFilters: {}, //or object with keys
    noResults: {
        template: function (query) { return `<div class="UNX-no-results"> No Results found ${query} </div>` }
    },
    onEvent: (state, type) => {

    },
    startPageNo: 0,
    productView: {
        enabled: true,
        el: null,
        template: renderProductViewType,
        action: 'click', // CLICK or CHANGE
        viewTypeClass: 'UNX-product-view',
        selectedViewTypeClass: 'UNX-selected-product-view',
        defaultViewType: 'GRID',
        tagName: "DIV",
        htmlAttributes: {
            class: "product-view-container"
        },
        events: {}
    },

    loader: {
        template: function () { return `<div class="UNX-loader">Loading search results....</div>` },
        el: null
    },
    variants: undefined,

    extraParams: {
        "version": "V2",
        /*"facet.multilevel":"categoryPath",
        "f.categoryPath.displayName":"category",
        "f.categoryPath.max.depth":"4",
        "f.categoryPath.facet.limit":"100"*/
    },

    spellCheck: {
        enabled: true,
        el: null,
        template: didYouMeanUI,
        selectorClass: "UNX-suggestion",
        tagName: "DIV",
        htmlAttributes: {
            class: "UNX-spellcheck-wrapper"
        },
        events: {}
    },

    breadcrumb: {
        enabled: true,
        el: null,
        selectorClass: "UNX-bread-crumb",
        template: breadCrumbsUI,
        tagName: "DIV",
        htmlAttributes: {
            class: "UNX-breadcrumbs-block"
        },
        events: {}
    },

    url: {
        updateUrls: true,
        hashMode: false,
        allowExternalUrlParams: false,
        seoFriendlyUrl: false,
        searchQueryParam: {
            addToUrl: true,
            algo: "KEY_VALUE_REPLACER",
            keyReplacer: "q"
        },
        browseQueryParam: {
            addToUrl: true,
            algo: "KEY_VALUE_REPLACER",
            keyReplacer: "p"
        },
        orderOfQueryParams: ["QUERY",  "FILTERS", "PAGE_NUMBER" ,"PAGE_SIZE","SORT","VIEW_TYPE"],
        queryParamSeparator: "&",
        pageViewParam: {
            addToUrl: false,
            algo: "KEY_VALUE_REPLACER",
            keyReplacer: "viewType",
            valuesReplacer: {
                "GRID": "GRID",
                "LIST": "LIST"
            }
        },
        sortParam: {
            addToUrl: true,
            algo: "KEY_VALUE_REPLACER",
            keyReplacer: "sort",
            valueReplacer: {}
        },
        pageSizeParam: {
            addToUrl: true,
            algo: "KEY_VALUE_REPLACER",
            keyReplacer: "rows"
        },
        pageNoParam: {
            addToUrl: true,
            algo: "KEY_VALUE_REPLACER",
            keyReplacer: 'start',
            usePageNo: false 
        },
        facetsParam: {
            addToUrl: true,
            algo: "KEY_VALUE_REPLACER",
            showFilterStr: false, //Not exposing this option for user yet , will always be false for now.
            filterReplacer: "filter", //Not exposing this option for user yet.
            multiValueSeparator: ",",
            facetsOrderInUrl: [],
            valueReplacer: {},
            keyReplacer: {},
            rangeSeparator: "-"
        }

    },

    sort: {
        enabled: true,
        el: null,
        selectedSortClass: 'UNX-selected-sort',
        sortClass: 'UNX-sort-item',
        template: sortTemplate,
        options: sortOptions,
        action: 'change',
        tagName: "DIV",
        htmlAttributes: {
            class: "UNX-sort-block-lb"
        },
        events: {}
    },
    selectedFacets: {
        enabled: true,
        selectedFacetClass: "UNX-selected-facet-btn",
        el: null,
        template: selectedFacetUI,
        itemTemplate: selectedFacetItemTemplateUI,
        clearAllText: "Clear All",
        tagName: "DIV",
        htmlAttributes: {
            class: "UNX-selected-facet-lb"
        },
        events: {},
        facetAction: "click",
        clearFacetsSelectorClass: 'UNX-clear-facet',
        removeFacetsSelectorClass: 'UNX-remove-facet',
    },


    facet: {
        facetsEl: null,
        facetTemplate: facetUIElem,
        facetItemTemplate: facetItemUiElem,
        facetMultiSelect: true,
        facetClass: "UNX-facets-block",
        facetAction: "click",

        selectedFacetClass: "UNX-selected-facet-btn",
        selectedFacetsEl: null,
        selectedFacetTemplate: selectedFacetUI,
        selectedFacetItemTemplate: selectedFacetItemTemplateUI,
        selectedFacetConfig: {},
        clearAllText: "Clear All",

        rangeTemplate: renderRangeFacets,
        rangeWidgetConfig: {
            "minLabel": "",
            "maxLabel": "",
            "prefix": '$'
        },

        facetMultilevel: true,
        facetMultilevelName: 'Category',
        multiLevelFacetSelectorClass: 'UNX-multilevel-facet',
        multiLevelFacetTemplate: multiLevelFacetUI,
        facetDepth: 4,
        clearFacetsSelectorClass: 'UNX-clear-facet',
        removeFacetsSelectorClass: 'UNX-remove-facet',
        onFacetLoad: function (facets) {
        },

        applyMultipleFilters: false,
        applyButtonText: "Apply",
        clearButtonText: "clear",


        isCollapsible: true,
        isSearchable: true,
        searchPlaceHolder: "Search Filter",
        textFacetWrapper: "UNX-facets-item",
        defaultOpen: "ALL",
        enableViewMore: false,
        viewMoreText: [ "show all", "show less" ],
        viewMoreLimit: 3,

        tagName: "DIV",
        htmlAttributes: {
            class: "UNX-facets-results-block"
        },
        events: {}
    },

    pagination: {
        enabled: true,
        el: null,
        template: paginationView,
        pageClass: "UNX-page-items",
        selectedPageClass: "UNX-selected-page-item",
        type: 'CLICK_N_SCROLL', // INFINITE_SCROLL or CLICK_N_SCROLL or FIXED_PAGINATION
        infiniteScrollTriggerEl: window, //if paginationType = INFINITE_SCROLL
        heightDiffToTriggerNextPage: 100, //if paginationType = INFINITE_SCROLL,    
        onPaginate: function (paginationInfo) { },
        action: 'click',
        pageLimit: 6,
        tagName: "DIV",
        htmlAttributes: {
            class: "UNX-pagination-size-block"
        },
        events: {},
    },
    pagesize: {
        enabled: true,
        pageSize: 12,
        options: [ 8, 12, 16, 20, 24 ],
        pageSizeClass: "UNX-pagesize",
        selectedPageSizeClass: "UNX-selected-pagesize",
        action: 'change',
        template: pageSizeUi,
        el: null,
        tagName: "DIV",
        htmlAttributes: {
            class: "UNX-page-size-block"
        },
        events: {}
    },

    banner: {
        enabled: true,
        el: null,
        template: bannerTemplateUI,
        count: 1,
        openNewTab: false,
        tagName: "DIV",
        htmlAttributes: {
            class: "UNX-banner-block"
        },
        events: {}

    },

    swatches: {
        enabled: false,
        attributesMap: {},
        swatchClass: 'UNX-swatch-btn',
        template: swatchTemplate
    },
    unbxdAnalytics: false,
    // hashMode: false,
    actionBtnClass: "UNX-action-item",
    actionChangeClass: "UNX-action-change",
    onAction: function (e, ctx) {
    },
    visualSearch : {
    },
    onQueryRedirect: (self, redirect, urlBeforeRedirect) => {
        if (redirect) {
            const {
                value,
                type
            } = redirect;
            if (type === "url") {
                /** If opening in same tab */
                if (history.state && history.state.replace) {
                    history.replaceState(null, "", urlBeforeRedirect);
                }

                location.href = value;

                /** If opening redirect in new tab (rare scenario), 
                 * then browser back + history push on search should be handled by client 
                 * (especially switching betsween category to search page scenarios)
                 * Note: This is not recommended */
            }
            return false;
        }
    },
    onBackFromRedirect: (hashMode) => {
        let urlSearchParam = new URLSearchParams(hashMode ? location.hash.substring(1) : location.search);
        let backFromRedirect = urlSearchParam.get("redirected");
        if (backFromRedirect) {
            history.go(-1);
        }
    },
    onNoUnbxdKeyRouting: () => {
        history.go();
    },
    setRoutingStrategies: (locationParam, newUrl, productType, isUnbxdKey, replace) => {
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
    // searchQueryParam:null
};
export default options;
