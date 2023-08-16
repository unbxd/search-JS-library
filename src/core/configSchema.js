export const paginationSchema = {
    moduleName: 'pagination',
    config: {
        enabled: {
            datatype: "boolean"
        },
        type: {
            required: (pagination) => {
                return pagination.enabled;
            },
            datatype: "string",
            allowedOptions: ["CLICK_N_SCROLL", "FIXED_PAGINATION", "INFINITE_SCROLL"]
        },
        el: {
            required: (pagination) => {
                return pagination.enabled && pagination.type !== "INFINITE_SCROLL";
            },
            datatype: "element",
        },
        template: {
            required: (pagination) => {
                return pagination.enabled && pagination.type !== "INFINITE_SCROLL";
            },
            datatype: "function"
        },
        pageClass: {
            datatype: "string"
        },
        selectedPageClass: {
            datatype: "string"
        },
        onPaginate: {
            datatype: "function"
        },
        pageLimit: {
            required: (pagination) => {
                return pagination.enabled && pagination.type === "FIXED_PAGINATION"
            },
            datatype: "number"
        },
        infiniteScrollTriggerEl: {
            required: (pagination) => {
                return pagination.enabled && pagination.type === "INFINITE_SCROLL"
            },
            datatype: "element",
        },
        heightDiffToTriggerNextPage: {
            required: (pagination) => {
                return pagination.enabled && pagination.type === "INFINITE_SCROLL"
            },
            datatype: "number"
        },
        action: {
            required: (pagination)=>{
                return pagination.enabled
            },
            datatype: "string",
            allowedOptions: ["click", "change"]
        },
        tagName: {
            datatype: "string"
        },
        htmlAttributes: {
            datatype: "object"
        }
    }
}

export const bannerSchema = {
    moduleName: 'banner',
    config: {
        enabled: {
            datatype: "boolean"
        },
        el: {
            required: (banner) => {
                return banner.enabled;
            },
            datatype: "element"
        },
        template: {
            required: (banner) => {
                return banner.enabled;
            },
            datatype: "function"
        },
        openNewTab: {
            datatype: "boolean"
        },
        tagName: {
            datatype: "string"
        },
        htmlAttributes: {
            datatype: "object"
        }
    }
}


export const loaderSchema = {
    moduleName: 'loader',
    config: {
        el: {
            required: true,
            datatype: "element"
        },
        template: {
            required: function (loader) {
                return loader.el
            },
            datatype: "function"
        }
    }

}

export const sortingSchema = {
    moduleName: 'sorting',
    config: {
        enabled: {
            datatype: "boolean"
        },
        el: {
            required: function (sort) {
                return sort.enabled
            },
            datatype: "element"
        },
        options: {
            required: function (sort) {
                return sort.enabled
            },
            datatype: "array"
        },
        sortClass: {
            datatype: "string"
        },
        selectedSortClass: {
            datatype: "string"
        },
        template: {
            required: function (sort) {
                return sort.enabled
            },
            datatype: "function"
        },
        action: {
            datatype: "string",
            allowedOptions: ['click', 'change']
        },
        tagName: {
            datatype: "string"
        },
        htmlAttributes: {
            datatype: "object"
        }
    }
}

export const noResultsSchema = {
    moduleName: 'No results',
    config: {
        el: {
            required: true,
            datatype: "element"
        },
        template: {
            required: (noResults)=>{
                return noResults.el;
            },
            datatype: "function"
        }
    }
}

export const swatchesSchema = {
    moduleName: "swatches",
    config: {
        enabled: {
            datatype: "boolean"
        },
        attributesMap: {
            required: function (swatches) {
                return swatches.enabled
            },
            datatype: "object",
            customValidations: (swatches) => {
                if (swatches.enabled &&  Object.keys(swatches.attributesMap).length === 0) {
                    console.error(`SDK Config error in swatches: attributesMap should not be an empty object`)
                }
            }
        },
        swatchClass: {
            datatype: "string"
        },
        template: {
            required: function (swatches) {
                return swatches.enabled
            },
            datatype: "function"
        }

    }
}


export const spellCheckSchema = {
    moduleName: "spellcheck",
    config: {
        enabled: {
            datatype: "boolean"
        },
        el: {
            required: function (spellCheck) {
                return spellCheck.enabled
            },
            datatype: "element"
        },
        template: {
            required: function (spellCheck) {
                return spellCheck.enabled
            },
            datatype: "function"
        },
        selectorClass: {
            datatype: "string"
        },
        tagName: {
            datatype: "string"
        },
        htmlAttributes: {
            datatype: "object"
        }
    }
}


export const productsSchema = {
    moduleName: "products",
    el: {
        required: true,
        datatype: "element"
    },
    productType: {
        required: true,
        datatype: "string",
        allowedOptions: ["SEARCH", "CATEGORY"]
    },
    template: {
        required: true,
        datatype: "function"
    },
    productAttributes: {
        required: true,
        datatype: "array",
        customValidations: (products) => {
            if (products.productAttributes.length === 0) {
                console.error(`SDK Config error in products: productAttributes should be an empty array`)
            }
        }
    },
    attributesMap: {
        required: true,
        datatype: "object",
        customValidations: (products) => {
            if (Object.keys(products.attributesMap).length === 0) {
                console.error(`SDK Config error in products: attributesMap should be an empty object`)
            }
        }
    },
    gridCount: {
        datatype: "number"
    },
    productItemClass: {
        datatype: "string"
    },
    onProductClick: {
        datatype: "function"
    },
    defaultImage: {
        datatype: "string"
    },
    tagName: {
        datatype: "string"
    },
    htmlAttributes: {
        datatype: "object"
    }

}

export const pageSizeSchema = {
    moduleName: "page size",
    config: {
        enabled: {
            datatype: "boolean"
        },
        el: {
            required: true,
            datatype: "element"
        },
        pageSize: {
            datatype: "number",
            customValidations: (pagesize)=>{
                if(!pagesize.options.includes(pagesize.pageSize)){
                    console.error(`SDK Config error in pagesize: pageSize should be among options`)
                }
            }
        },
        options: {
            required: function (pagesize) {
                return pagesize.enabled
            },
            datatype: "array"
        },
        pageSizeClass: {
            datatype: "string"
        },
        selectedPageSizeClass: {
            datatype: "string"
        },
        action: {
            datatype: "string",
            allowedOptions: ["click", "change"]
        },
        template: {
            required: function (pagesize) {
                return pagesize.enabled
            },
            datatype: "function"
        },
        tagName: {
            datatype: "string"
        },
        htmlAttributes: {
            datatype: "object"
        }
    }
}

export const productViewSchema = {
    moduleName: "product view",
    config: {
        enabled: {
            datatype: "boolean"
        },
        el: {
            required: function (productView) {
                return productView.enabled
            },
            datatype: "element"
        },
        template: {
            required: function (productView) {
                return productView.enabled
            },
            datatype: "function"
        },
        defaultViewType: {
            required: function (productView) {
                return productView.enabled
            },
            datatype: "string",
            allowedOptions: ["GRID", "LIST"]
        },
        action: {
            required: function (productView) {
                return productView.enabled
            },
            datatype: "string",
            allowedOptions: ["click", "change"]
        },
        viewTypeClass: {
            datatype: "string"
        },
        selectedViewTypeClass: {
            datatype: "string"
        },
        tagName: {
            datatype: "string"
        },
        htmlAttributes: {
            datatype: "object"
        }
    }
}

export const breadcrumbSchema = {
    moduleName: "breadcrumbs",
    config: {
        enabled: {
            datatype: "boolean"
        },
        el: {
            required: function (breadcrumbs) {
                return breadcrumbs.enabled
            },
            datatype: "element"
        },
        template: {
            required: function (breadcrumbs) {
                return breadcrumbs.enabled
            },
            datatype: "function"
        },
        selectorClass: {
            datatype: "string"
        },
        tagName: {
            datatype: "string"
        },
        htmlAttributes: {
            datatype: "object"
        }
    }
}

export const facetsSchema = {
    moduleName: "facets",
    config: {
        facetsEl: {
            required:true,
            datatype: "element"
        },
        facetTemplate: {
            required: function (facet) {
                return facet.facetsEl
            },
            datatype: "function"
        },
        facetItemTemplate: {
            required: function (facet) {
                return facet.facetsEl
            },
            datatype: "function"
        },
        facetMultiSelect: {
            datatype: "boolean"
        },
        facetClass: {
            datatype: "string"
        },
        facetAction: {
            required: function (facet) {
                return facet.facetsEl
            },
            datatype: "string",
            allowedOptions: ["click", "change"]
        },
        selectedFacetClass: {
            datatype: "string"
        },
        selectedFacetsEl: {
            datatype: "element"
        },
        selectedFacetTemplate: {
            datatype: "function"
        },
        selectedFacetItemTemplate: {
            datatype: "function"
        },
        selectedFacetConfig: {
            datatype: "object"
        },
        clearAllText: {
            datatype: "string"
        },
        rangeTemplate: {
            datatype: "function"
        },
        rangeWidgetConfig: {
            datatype: "object"
        },
        facetMultilevel: {
            datatype: "boolean"
        },
        facetMultilevelName: {
            required: function (facet) {
                return facet.facetsEl && facet.facetMultilevel
            },
            datatype: "string"
        },
        multiLevelFacetSelectorClass: {
            datatype: "string"
        },
        multiLevelFacetTemplate: {
            required: function (facet) {
                return facet.facetsEl && facet.facetMultilevel
            },
            datatype: "function"
        },
        facetDepth: {
            datatype: "number"
        },
        clearFacetsSelectorClass: {
            datatype: "string"
        },
        removeFacetsSelectorClass: {
            datatype: "string"
        },
        onFacetLoad: {
            datatype: "function"
        },
        applyMultipleFilters: {
            datatype: "boolean"
        },
        applyButtonText: {
            required: function (facet) {
                return facet.facetsEl && facet.applyMultipleFilters
            },
            datatype: "string"
        },
        clearButtonText: {
            required: function (facet) {
                return facet.facetsEl && facet.applyMultipleFilters
            },
            datatype: "string"
        },
        isCollapsible: {
            datatype: "boolean"
        },
        defaultOpen: {
            required: function (facet) {
                return facet.facetsEl && facet.isCollapsible
            },
            datatype: "string",
            allowedOptions: ["ALL", "FIRST", "NONE"]
        },
        isSearchable: {
            datatype: "boolean"
        },
        searchPlaceHolder: {
            required: function (facet) {
                return facet.facetsEl && facet.isSearchable
            },
            datatype: "string"
        },
        enableViewMore: {
            datatype: "boolean"
        },
        viewMoreText: {
            required: function (facet) {
                return facet.facetsEl && facet.enableViewMore
            },
            datatype: "array"
        },
        viewMoreLimit: {
            required: function (facet) {
                return facet.facetsEl && facet.enableViewMore
            },
            datatype: "number"
        },
        tagName: {
            datatype: "string"
        },
        htmlAttributes: {
            datatype: "object"
        },
    }
}

export const facetsUrlSchema = {
    moduleName: "facetsUrl",
    config: {
        addToUrl: {
            required: false,
            datatype: "boolean"
        },
        algo: {
            required: (facetsUrl)=>{
                return facetsUrl.addToUrl
            },
            datatype: "string",
            allowedOptions: ["DEFAULT","KEY_VALUE_REPLACER","HASH"]
        },
        valuesSeperator:{
            required: (facetsUrl)=>{
                return facetsUrl.algo === "KEY_VALUE_REPLACER"
            },
            datatype: "string",
            allowedOptions: [",","~"]
        },
        // facetKeyValueSeperator:{
        //     required: false,
        //     datatype: "string",
        //     customValidations: (facetsUrl)=>{
        //         const allowedFacetKeyValueSeperator = ["::"];
        //         if (!allowedFacetKeyValueSeperator.includes(facetsUrl.facetKeyValueSeperator)) {
        //             console.error(`SDK Config error in facetsUrl: facetKeyValueSeperator should not be following value ${allowedFacetKeyValueSeperator}`);
        //         }
        //     }
        // },
        keyReplacer: {
            required: false,
            datatype: "object",
            customValidations: (facetsUrl)=>{
                const vals = Object.values(facetsUrl.keyReplacer);
                if (new Set(vals).size !== vals.length){
                    console.error(`SDK Config error in facetsUrl: keysReplacer values should not be duplicate`);
                }
            }
        },
        valueReplacer: {
            required: false,
            datatype: "object",
            customValidations: (facetsUrl)=>{
                const valueReplacer = facetsUrl.valueReplacer;
                const vals = Object.values(valueReplacer);
                vals.forEach(item=>{
                    let arr = Object.values(item);
                    if (new Set(arr).size !== arr.length) {
                        console.error(`SDK Config error in facetsUrl: valueReplacer values should not be duplicate`);
                    }
                })
            }
        },
        facetsOrderInUrl: {
            required: false,
            datatype: "array"
        },
        rangeFacets: {
            required: (facetsUrl)=> {
                return facetsUrl.algo === "KEY_VALUE_REPLACER"
            },
            datatype: "array"
        },
        rangeSeparator: {
            required: (facetsUrl)=>{
                return facetsUrl.algo === "KEY_VALUE_REPLACER"
            },
            datatype: "string",
            allowedOptions: ["-"]
        }
    }
}

export const pageViewUrlSchema = {
    moduleName : "pageViewUrl",
    config: {
        addToUrl: {
            required:false,
            datatype: "boolean"
        },
        keyReplacer: {
            required: false,
            datatype: "string"
        },
        valuesReplacer: {
            required: false,
            datatype: "object",
            customValidations: (pageViewUrl)=>{
                
            }
        }
    }
}

export const sortUrlSchema ={
    moduleName: "sortUrl",
    config: {
        addToUrl: {
            required: false,
            datatype: "boolean"
        },
        keyReplacer: {
            required: false,
            datatype: "string"
        },
        valueReplacer: {
            required: false,
            datatype: "object",
            customValidations: (sortUrl)=>{
                
            }
        }
    }
}

export const pageNoUrlSchema = {
    moduleName: "pageNoUrl",
    config: {
        addToUrl: {
            required: false,
            datatype: "boolean"
        },
        keyReplacer: {
            required: false,
            datatype: "string"
        },
        usePageNo: {
            required: false,
            datatype: "boolean"
        }
    }
}

export const pageSizeUrlSchema = {
    moduleName: "pageSizeUrl",
    config: {
        addToUrl: {
            required: false,
            datatype: "boolean"
        },
        keyReplacer: {
            required: false,
            datatype: "string"
        }
    }
}

export const otherUrlConfigsSchema = {
    moduleName: "url",
    config: {
        seoFriendlyUrl: {
            required: false,
            datatype: "boolean",
            customValidations: (urlConfigs)=>{
                if (!urlConfigs.seoFriendlyUrl){
                    urlConfigs.pageViewUrl.algo = "DEFAULT";
                    urlConfigs.sortUrl.algo = "DEFAULT";
                    urlConfigs.pageSizeUrl.algo = "DEFAULT";
                    urlConfigs.pageNoUrl.algo = "DEFAULT";
                    urlConfigs.facetsUrl.algo = "DEFAULT";
                }
            }
        }
    }
}

export const othersSchema = {
    moduleName: "Others",
    config: {
        siteKey: {
            required: true,
            datatype: "string"
        },
        apiKey: {
            required: true,
            datatype: "string"
        },
        searchBoxEl: {
            required: true,
            datatype: "element"
        },
        searchButtonEl: {
            datatype: "element"
        },
        unbxdAnalytics: {
            datatype: "boolean"
        },
        hashMode: {
            datatype: "boolean"
        },
        actionBtnClass: {
            datatype: "string"
        },
        actionChangeClass: {
            datatype: "string"
        },
        allowExternalUrlParams: {
            datatype: "boolean"
        },
        extraParams: {
            datatype: "object"
        },
        defaultFilters: {
            datatype: "object"
        },
        searchEndPoint: {
            datatype: "string"
        },
        browseQueryParam: {
            datatype: "string"
        },
        searchQueryParam: {
            datatype: "string"
        }
    }
}
