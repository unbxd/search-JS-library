import { isNode, isElement, isBoolean, isStr, isObj, isFunc, isArrObj } from "../common/utils";
import { paginationSchema,
        bannerSchema, 
        loaderSchema, 
        sortingSchema, 
        noResultsSchema,
        swatchesSchema} from "./metadata";

function validateConfigs() {
    const {
        siteKey,
        apiKey,
        searchBoxEl,
        searchButtonEl,
        banner,
        facet,
        breadcrumb,
        spellCheck,
        sort,
        pagination,
        loader,
        noResults,
        swatches
    } = this.options


    const validate = (userConfig = {}, schema = {}) => {
        const { moduleName = "", config = {} } = schema;
        
        Object.keys(config).map(key => {
            let { datatype, required = false, allowedOptions = [] } = config[key];

            if (typeof required === "function") {
                required = required(userConfig)
            }


            if (typeof userConfig[key] !== datatype) {
                if (datatype === "element" || datatype === "array") {
                    if (datatype === "element" && (userConfig[key] !== window && (!isNode(userConfig[key]) || !isElement(userConfig[key])))) {
                        this.onError(moduleName, `'${key}' is not a valid DOM selector`)
                    } else if (datatype === "array" && !Array.isArray(userConfig[key])) {
                        this.onError(moduleName, `'${key}' datatype should be a ${datatype}`)
                    }
                } else {
                    this.onError(moduleName, `'${key}' datatype should be a ${datatype}`)
                }
            }

            if (required && !userConfig[key] && datatype !== "element") {
                this.onError(moduleName, `'${key}' is required`)
            }

            if (allowedOptions.length && !allowedOptions.includes(userConfig[key])) {
                this.onError(moduleName, `Only ${allowedOptions.join(', ')} are allowed for '${key}'`)
            }

        })

    }

    validate(banner, bannerSchema)
    validate(pagination, paginationSchema)
    validate(sort, sortingSchema)
    validate(noResults, noResultsSchema)
    validate(swatches, swatchesSchema)
    
    // validate(loader, loaderSchema)

}

export default validateConfigs;
