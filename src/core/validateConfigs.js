import { isNode, isElement, isNodeList } from "../common/utils";
import {
    paginationSchema,
    bannerSchema,
    loaderSchema,
    sortingSchema,
    noResultsSchema,
    swatchesSchema,
    facetsSchema,
    spellCheckSchema,
    pageSizeSchema,
    productsSchema,
    productViewSchema,
    breadcrumbSchema,
    othersSchema,
    facetsParamSchema,
    pageViewParamSchema,
    pageNoParamSchema,
    pageSizeParamSchema,
    sortParamSchema,
    otherUrlConfigsSchema
} from "./configSchema";

function validateConfigs () {
    const {
        banner,
        facet,
        breadcrumb,
        spellCheck,
        sort,
        pagination,
        loader,
        noResults,
        swatches,
        pagesize,
        products,
        productView,
        url
    } = this.options
    
    const {
        facetsParam,
        pageViewParam,
        sortParam,
        pageSizeParam,
        pageNoParam
    } = url

    const validate = (userConfig = {}, schema = {}) => {
        const { moduleName = "", config = {} } = schema;

        Object.keys(config).map(key => {
            let { datatype, required = false, allowedOptions = [], customValidations = null } = config[key];

            if (typeof required === "function") {
                required = required(userConfig)
            }

            //Checking if the datatype in user input config is not equal to that in metadata.
            if (typeof userConfig[key] !== datatype || (datatype === "object" && userConfig[key] === null)) {
                if (datatype === "element" || datatype === "array") {
                    if (datatype === "element") {
                        const isInvalidElement =  !isNode(userConfig[key]) && !isElement(userConfig[key]) && !isNodeList(userConfig[key]);
                        //The config is required , but the user passed either null/undefined , or the element is not present on the DOM.
                        if ((required && (!userConfig[key] || isInvalidElement)) || (!required && userConfig[key] && isInvalidElement)) {
                            if (userConfig[key] === window) {
                                return null
                            }
                            this.onError(moduleName, `'${key}' is not a valid DOM selector`)
                        } 
                    } else if (datatype === "array" && !Array.isArray(userConfig[key])) {
                        this.onError(moduleName, `'${key}' should be of ${datatype} datatype`)
                    }
                } else {
                    this.onError(moduleName, `'${key}' should be of ${datatype} datatype`)
                }
            }

            if (required && !userConfig[key] && datatype !== "element") {
                this.onError(moduleName, `'${key}' is required`)
            }

            if (allowedOptions.length && !allowedOptions.includes(userConfig[key])) {
                this.onError(moduleName, `Only ${allowedOptions.join(', ')} are allowed for '${key}'`)
            }
            //Checking for custom validations if any .
            if (customValidations) {
                customValidations(userConfig)
            }

        })

    }

        validate(pagination, paginationSchema)
        validate(banner, bannerSchema)
        validate(sort, sortingSchema)
        validate(noResults, noResultsSchema)
        validate(swatches, swatchesSchema)
        validate(spellCheck, spellCheckSchema)
        validate(pagesize, pageSizeSchema)
        validate(facet, facetsSchema)
        validate(this.options, othersSchema)
        validate(loader, loaderSchema)
        validate(noResults, noResultsSchema)
        validate(products, productsSchema)
        validate(productView, productViewSchema)
        validate(breadcrumb, breadcrumbSchema)
        validate(facetsParam, facetsParamSchema)
        validate(pageViewParam, pageViewParamSchema)
        validate(sortParam, sortParamSchema)
        validate(pageNoParam, pageNoParamSchema)
        validate(pageSizeParam, pageSizeParamSchema)
        validate(this.options.url, otherUrlConfigsSchema)
}

export default validateConfigs;
