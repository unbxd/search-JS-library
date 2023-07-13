import extend from '../modules/utils/extend';
const setConfig = function(options = {}, props = {}) {
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
        this.options.facetMultiSelect = (typeof(facet.facetMultiSelect) === "boolean" ) ? facet.facetMultiSelect : options.facet.facetMultiSelect;
        this.options.facetDepth = (facet.facetDepth) ? facet.facetDepth : options.facet.facetDepth;
        this.options.applyMultipleFilters = (typeof(facet.applyMultipleFilters) === "boolean") ? facet.applyMultipleFilters : options.facet.applyMultipleFilters;
    }
    this.setPageSize(this.state.pageSize || this.options.pagesize.pageSize)
    if(products) {
        this.options.productAttributes = (products.productAttributes) ? products.productAttributes : options.products.productAttributes;
        this.options.productType = (products.productType) ? products.productType : options.products.productType;
    } else {
        this.options.productType = options.products.productType;
        this.options.productAttributes = options.products.productAttributes;
    }
    if(swatches) {
        this.options.showSwatches = (swatches && swatches.enabled) ? swatches.enabled :options.swatches.enabled;
    }
    if(productView) {
        this.viewState.productViewType = (productView.defaultViewType) ? productView.defaultViewType: options.productView.defaultViewType;
        this.options.productView.productViewType = this.viewState.productViewType;
        this.state.productViewType = this.viewState.productViewType;;
    }
    
}
export default setConfig;
