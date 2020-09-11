import renderBannerUI from '../modules/banners/setbannerMethods';
import setFacets from '../modules/facets/setFacetMethods';
import setSearch from '../modules/searchResults/setSearch';
import setProductViewType from '../modules/productViewType/setProductViewType';
import setPagination from '../modules/pagination/setPagination';
import setSort from '../modules/sort/setSort';
import setInput from '../modules/input/setInput';
import setSpellCheck from '../modules/didYouMean/setSpellCheck';
import setBreadCrumbs from '../modules/breadcrumbs/setBreadcrumbs';
import setSwatches from '../modules/swatches/setSwatches';
import setPageSize from '../modules/pageSize/setPageSize';
import setAnalytics from '../modules/analytics/setAnalytics';
import RangeSlider from '../modules/widgets/RangeSlider';
import initialize from '../core/initialize';
const setSearchWidget = function(config){
    const {
        products
    } = this.options;
    const newOps = Object.assign({},products,config);
    this.options.products = newOps;
}
const setFacetWidget = function(config){
    const {
        facet
    } = this.options;
    const newOps = Object.assign({},facet,config);
    this.options.facet = newOps;
}
const updateConfig = function(config){
    const {
        options
    } = this;
    this.setConfig(options, config);
    this.initialize();
}
const renderFacets = function(){
    const facets = this.getFacets();
    this.facetsWrapper.innerHTML = this.renderTextFacets(facets, this.getSelectedFacets());
    const {
        rangeFacetEl
    } = this.options.facet;
    if(rangeFacetEl) {
        this.rangeFacetsWrapper.innerHTML = this.renderRangeFacets();
    }
    this.multiLevelFacetWrapper.innerHTML = this.renderBucketedUI();
    const allFacets = this.getAllFacets();
    this.options.facet.onFacetLoad.bind(this)(allFacets);
}
const extraActions = function(e) {
    const {
        actionCallback
    } = this.options;
    const {
        dataset
    } = e.target;
    if(dataset) {
        const {
            facetAction,
            facetName
        } = dataset;
        if(facetAction === "facetOpen") {
            this.viewState.expandedFacets[facetName] = true;
        }
        if(facetAction === "facetClose") {
            this.viewState.expandedFacets[facetName] = false;
        }
        this.renderFacets();
    }
    actionCallback(e, this);
}
const extraActionsChange = function(e) {
    const {
        actionCallback
    } = this.options;
    const {
        dataset
    } = e.target;
    if(dataset) {
        const {
            facetAction,
            facetName
        } = dataset;
        if(facetAction === "searchFacets") {
            this.setSearchFacetsText(facetName,e.target.value);
        }
    }
    actionCallback(e, this);
}
const getCategoryPage = function() {
    this.resetFacets();
    this.options.productType = "CATEGORY";
    this.options.products.productType = "CATEGORY";
    this.getResults();
}
const getBrowsePage = function() {
    this.resetFacets();
    this.options.productType = "BROWSE";
    this.options.products.productType = "BROWSE";
    this.getResults();
}
const resetViewState = function() {
    this.viewState.lastDidYouMean = null;
    this.viewState.searchFacetsText={};
    this.viewState.lastDidYouMean = null;
    this.viewState.expandedFacets = {};
}


const setMethods = (UnbxdSearch) => {
    const {
        prototype
    } = UnbxdSearch;
    prototype.renderBannerUI = renderBannerUI;
    prototype.RangeSlider = RangeSlider;
    prototype.setSearchWidget = setSearchWidget;
    prototype.setFacetWidget = setFacetWidget;
    prototype.renderFacets = renderFacets;
    prototype.updateConfig = updateConfig;
    prototype.initialize = initialize;
    prototype.extraActions = extraActions;
    prototype.extraActionsChange = extraActionsChange;
    prototype.getCategoryPage = getCategoryPage;
    prototype.getBrowsePage = getBrowsePage;
    prototype.resetViewState = resetViewState;
    setInput(prototype);
    setProductViewType(prototype);
    setFacets(prototype);
    setSearch(prototype);
    setPagination(prototype);
    setSort(prototype);
    setSpellCheck(prototype);
    setBreadCrumbs(prototype);
    setSwatches(prototype);
    setPageSize(prototype);
    setAnalytics(prototype);
    
}
export default setMethods;
