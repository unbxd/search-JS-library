import { isNode, isElement } from "../common/utils";
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
    others
} from "./configSchema";

function validateConfigs() {
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

        unbxdAnalytics
    } = this.options

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
                        //The config is required , but the user passed either null/undefined , or the element is not present on the DOM.
                        if (required && (!userConfig[key] || !isNode(userConfig[key]) || !isElement(userConfig[key]))) {
                            if (userConfig[key] === window) {
                                return null
                            }
                            this.onError(moduleName, `'${key}' sssis not a valid DOM selector`,)
                        } else if (!required && userConfig[key] && (!isNode(userConfig[key]) || !isElement(userConfig[key]))) {
                            //The config is not required , so in case user passed null/undefined it should not throw error.
                            //Config is not required , throws error if still passed and not a valid selector
                            this.onError(moduleName, `'${key}' is not a valid DOM selector`,)
                        }
                    } else if (datatype === "array" && !Array.isArray(userConfig[key])) {
                        this.onError(moduleName, `'${key}' should be of ${datatype} datatype`,)
                    }
                } else {
                    this.onError(moduleName, `'${key}' should be of ${datatype} datatype`,)
                }
            }

            if (required && !userConfig[key] && datatype !== "element") {
                this.onError(moduleName, `'${key}' is required`,)
            }

            if (allowedOptions.length && !allowedOptions.includes(userConfig[key])) {
                this.onError(moduleName, `Only ${allowedOptions.join(', ')} are allowed for '${key}'`,)
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
    validate(this.options, others)
    validate(loader, loaderSchema)
    validate(noResults, noResultsSchema)
    validate(products, productsSchema)
    validate(productView, productViewSchema)
    validate(breadcrumb, breadcrumbSchema)

}

export default validateConfigs;
