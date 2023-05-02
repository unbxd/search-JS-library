export const paginationSchema = {
    moduleName: 'pagination',
    config: {
        enabled: {
            required: true,
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
                return pagination.type === "FIXED_PAGINATION"
            },
            datatype: "number"
        },
        infiniteScrollTriggerEl: {
            required: (pagination) => {
                return pagination.type === "INFINITE_SCROLL"
            },
            datatype: "element",
        },
        heightDiffToTriggerNextPage: {
            required: (pagination) => {
                return pagination.type === "INFINITE_SCROLL"
            },
            datatype: "number"
        },
        action: {
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
    config:{
        enabled: {
            required: true,
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
            required: false,
            datatype: "boolean"
        },
        tagName: {
            required: false,
            datatype: "string"
        },
        htmlAttributes: {
            required: false,
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
            required: true,
            datatype: "function"
        }
    }
    
}

export const sortingSchema = {
    moduleName: 'sorting',
    config: {
        enabled: {
            required: true,
            datatype: "boolean"
        },
        el: {
            required: function(sort){
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
            required: false,
            datatype: "string"
        },
        selectedSortClass: {
            required: false,
            datatype: "string"
        },
        template: {
            required: function(sort){
                return sort.enabled
            },
            datatype: "function"
        },
        action: {
            required: function(sort){
                return sort.enabled
            },
            datatype: "string",
            allowedOptions: ['click','change']
        },
        tagName:{
            required: false,
            datatype: "string"
        },
        htmlAttributes: {
            required: false,
            datatype: "object"
        }
    }
}

export const noResultsSchema = {
    moduleName: 'No results',
    config: {
        template: {
            required: true,
            datatype: "function"
        }
    }
}

export const swatchesSchema = {
    moduleName: "swatches",
    config: {
        enabled: {
            required: true,
            datatype: "boolean"
        },
        attributesMap: {
            required: false,
            datatype: "object"
        },
        swatchClass: {
            required: false,
            datatype: "string"
        },
        template: {
            required: function(swatches){
                return swatches.enabled
            },
            datatype: "function"
        },
        
    }
}
