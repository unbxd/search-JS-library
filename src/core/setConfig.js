import extend from '../modules/utils/extend';
const setConfig = function(options, props) {
    this.options = extend(true,{},options,props);
    const {
        facet,
        pagesize,
        swatches,
        products,
        productView
    } = props;

    if(facet) {
        this.options.facetMultilevel = (facet.facetMultilevel) ? facet.facetMultilevel:options.facet.facetMultilevel;
        this.options.facetMultiSelect = (facet.facetMultiSelect) ? true:false;
        this.options.facetDepth = (facet.facetDepth) ? facet.facetDepth : options.facet.facetDepth;
        this.options.applyMultipleFilters = (typeof(facet.applyMultipleFilters) === "boolean") ? facet.applyMultipleFilters : options.facet.applyMultipleFilters;
    }
    if(pagesize) {
        this.options.pageSize = (pagesize.pageSize) ? pagesize.pageSize : options.pagesize.pageSize;
        this.state.pageSize = this.options.pageSize;
    }
    if(products) {
        this.options.productAttributes = (products.productAttributes) ? products.productAttributes : options.products.productAttributes;
        this.options.productType = (products.productType) ? products.productType : options.products.productType;
    }
    if(swatches) {
        this.options.showSwatches = (swatches && swatches.enabled) ? swatches.enabled :options.swatches.enabled;
    }
    if(productView) {
        this.viewState.productViewType = (productView.viewTypes) ? productView.viewTypes: options.productView.viewTypes;
    }
    
}
export default setConfig;
