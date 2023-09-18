import renderBannerUI from '../modules/banners/renderBannerUI';
import renderImageBoundingBox from "../modules/visualSearchInput/renderImageBoundingBox"
import setFacets from '../modules/facets/setFacetMethods';
import setProductsMethods from '../modules/products/setProductsMethods';
import setSearch from '../modules/searchResults/setSearch';
import setProductViewType from '../modules/productViewType/setProductViewType';
import setPagination from '../modules/pagination/setPagination';
import setSort from '../modules/sort/setSort';
import setInput from '../modules/input/setInput';
import setImage from "../modules/visualSearchInput/setImage"
import setSpellCheck from '../modules/didYouMean/setSpellCheck';
import setBreadCrumbs from '../modules/breadcrumbs/setBreadcrumbs';
import setSwatches from '../modules/swatches/setSwatches';
import setPageSize from '../modules/pageSize/setPageSize';
import setAnalytics from '../modules/analytics/setAnalytics';
import initialize from '../core/initialize';
import createLayout from  './createLayout';
import setComponentWrappers from './componentWrappers';
import createElement from "../modules/utils/createElement";

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

const extraActions = function(e) {
    const {
        onAction
    } = this.options;
    const {
        target
    } = e;
    const {
        dataset
    } = target;
    const {
        openFacet,
        closeFacet,
        openBtn,
        closeBtn,
        viewMore,
        viewLess
    } = this.cssList;
    const {
        viewMoreText,
        textFacetWrapper
    } = this.options.facet;
    if(dataset) {
        const {
            facetAction,
            facetName,
            action,
            id
        } = dataset;
        const {
            facetElementMap
        } = this.viewState;
        const fI = target.closest(`.${facetElementMap[facetName]}`);
        if(facetAction === "facetOpen") {
            this.viewState.expandedFacets[facetName] = true;
            target.classList.add(openBtn);
            target.classList.remove(closeBtn);
            target.setAttribute("data-facet-action","facetClose");
            fI.classList.remove(closeFacet);
            fI.classList.add(openFacet);
        }
        if(facetAction === "facetClose") {
            this.viewState.expandedFacets[facetName] = false;
            target.classList.remove(openBtn);
            target.classList.add(closeBtn);
            target.setAttribute("data-facet-action","facetOpen");
            fI.classList.remove(openFacet);
            fI.classList.add(closeFacet);
        }
        if(action === "viewMore") {
            target.setAttribute("data-action","viewLess");
            target.innerHTML = viewMoreText[1];
            const fcEl = fI.querySelector(`.${textFacetWrapper}`);
            fcEl.classList.remove(viewMore);
            fcEl.classList.add(viewLess);
        }
        if(action === "viewLess") {
            target.setAttribute("data-action","viewMore");
            target.innerHTML = viewMoreText[0];
            const fcEl = fI.querySelector(`.${textFacetWrapper}`);
            fcEl.classList.remove(viewLess);
            fcEl.classList.add(viewMore);
        }
    }
    onAction(e, this);
}
const extraActionsChange = function(e) {
    const {
        onAction
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
    onAction(e, this);
}
const getCategoryPage = function() {
    this.resetAll();
    this.options.productType = "CATEGORY";
    this.options.products.productType = "CATEGORY";
    this.getCallbackActions(this,'categoryPage');
    this.getResults();
}
const getBrowsePage = function() {
    this.resetAll();
    this.options.productType = "BROWSE";
    this.options.products.productType = "BROWSE";
    this.getCallbackActions(this,'categoryPage');
    this.getResults();
}
const resetViewState = function() {
    this.viewState.lastDidYouMean = null;
    this.viewState.searchFacetsText={};
    this.viewState.lastDidYouMean = null;
    this.viewState.expandedFacets = {};
}
const generateRid = (custom="unx_") => {
    return custom + Math.random().toString(36).substr(2, 9);
};

const createFacetsLayout = function() {

};

const setMethods = (UnbxdSearch) => {
    const {
        prototype
    } = UnbxdSearch;

    prototype.renderBannerUI = renderBannerUI;
    prototype.setSearchWidget = setSearchWidget;
    prototype.renderImageBoundingBox = renderImageBoundingBox;
    prototype.setFacetWidget = setFacetWidget;
    prototype.updateConfig = updateConfig;
    prototype.createLayout = createLayout;
    prototype.initialize = initialize;
    prototype.extraActions = extraActions;
    prototype.extraActionsChange = extraActionsChange;
    prototype.getCategoryPage = getCategoryPage;
    prototype.getBrowsePage = getBrowsePage;
    prototype.resetViewState = resetViewState;
    prototype.generateRid = generateRid;
    prototype.createElement = createElement;
    prototype.createFacetsLayout = createFacetsLayout;
    setComponentWrappers(prototype)
    setInput(prototype);
    setImage(prototype);
    setProductViewType(prototype);
    setFacets(prototype);
    setProductsMethods(prototype);
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
