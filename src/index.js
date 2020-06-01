import UnbxdSearchCore from "../node_modules/unbxdsdk/src/index";
import renderSearch from "./modules/searchResults";
import renderFacets from "./modules/facets";
import createElement from "./modules/utils/createElement";

import delegate from "./modules/utils/delegate";

import RangeSlider from "./modules/widgets/RangeSlider";
import {
    events,
    actions
} from "./common/constants/index";

import infiniteScroller from './modules/pagination/infiniteScroller';
import debounce from './modules/utils/debounce';
import options from './common/options';


class UnbxdSearch extends UnbxdSearchCore {
    constructor(props) {
        super(props);
        this.searchResultsWrapper = createElement(
            "DIV",
            "searchResultsBlock",{
                class:"search-results-block"
            }
        );
        this.options = Object.assign({},options,props);
        this.viewState = {
            productViewType: this.options.productViewTypes,
            isInfiniteStarted:false
        };
        this.facetsWrapper = createElement(
            "DIV",
            "facetsContainer",{
                class:"facets-results-block"
            }
        );
        this.rangeFacetsWrapper = createElement(
            "DIV",
            "rangeFacetsContainer",{
                class:"range-facets-block"
            }
        );
        this.bucketedSearchWrapper = createElement(
            "DIV",
            "bucketedSearchContainer",{
                class:"bucketed-facets-block"
            }
        );
        this.bannerWrapper = createElement(
            "DIV",
            "bannerWrapper",{
                class:"banner-block"
            }
        );
        if(this.options.breadcrump) {
            this.options.breadCrumpTemplate = this.options.breadCrumpTemplate.bind(this);
            this.breadcrumbWrapper = createElement(
                "DIV",
                "breadcrumbContainer",{
                    class:"breadcrumbs-block"
                }
            );
        }
        
        this.options.selectedFacetElem.bind(this);
        this.options.bucketedSearchUi.bind(this);
        this.options.facetElem.bind(this);
        this.options.facetItemElem.bind(this);
        this.options.facetWrapper.appendChild(this.facetsWrapper);
        if(this.options.bucketedFacetContainer) {
            this.options.bucketedFacetContainer.appendChild(this.bucketedSearchWrapper);
        } else {
            this.options.facetWrapper.appendChild(this.bucketedSearchWrapper);
        }
        if(this.options.rangeFacetContainer){
            this.options.rangeFacetContainer.appendChild(this.rangeFacetsWrapper);
        } else {
            this.options.facetWrapper.appendChild(this.rangeFacetsWrapper)
        }
        if(this.options.breadcrumbContainer) {
            this.options.breadcrumbContainer.appendChild(this.breadcrumbWrapper)
        }
        if(this.options.swatchTemplate) {
            this.options.swatchTemplate.bind(this);
        }
        if(this.options.bannerSelector){
            this.options.bannerSelector.appendChild(this.bannerWrapper);
        }
        this.options.bannerTemplate = this.options.bannerTemplate.bind(this);
        this.options.searchResultsTemplate = this.options.searchResultsTemplate.bind(this);
        this.options.searchResultsSelector.appendChild(this.searchResultsWrapper);
        this.renderDidYouMean.bind(this);
        this.options.callBackFn.bind(this);
        this.renderPagination.bind(this);
        this.options.productClick.bind(this);
        this.loaderContainer = this.options.loaderContainer || this.searchResultsWrapper;
        this.widgets = {
            RangeSlider:RangeSlider.bind(this)
        }
        this.callBack = this.callBack.bind(this);
        this.renderSwatchBtns = this.renderSwatchBtns.bind(this);
        this.reRender = this.reRender.bind(this);
        this.bindEvents();
        this.renderProductViewTypeUI();
        const urlParams = this.getQueryParams();
        if(urlParams[this.options.searchQueryParam]){
            this.renderFromUrl();
        }
    }
    renderProductViewTypeUI(){
        if(this.options.productViewTypeSelector && this.options.productViewTypeTemplate) {
            const {
                productViewType
            } = this.viewState;
            this.options.productViewTypeSelector.innerHTML = this.options.productViewTypeTemplate.bind(this)(productViewType); 
        }

    }
    renderBannerUI(){
        const banners = this.getBanners();
        this.bannerWrapper.innerHTML = this.options.bannerTemplate(banners);
    }
    setInputValue(e) {
        const val = this.options.searchBoxSelector.value;
        this.changeInput(val, events.changeInput);
        if(val) {
            this.getResults();
        } else{
            this.searchResultsWrapper.innerHTML = null;
        }
    }
    renderSearch() {
        const searchResp = this.getSearchResults();
        return renderSearch.bind(this)(searchResp);
    }
    renderFacets () {
        return renderFacets.bind(this)();
    }
    renderDidYouMean (suggestion) {
        return this.options.spellCheckTemplate.bind(this)(suggestion);

    }
    renderNoResults(query) {
        return this.options.noResultsUi.bind(this)(query);
    }
    renderPagination() {
        const {
            paginationType,
            infiniteScrollSelector
        } = this.options;
        let paginationUI = ``;
        if(paginationType === 'FIXED_PAGINATION') {
            paginationUI = this.options.paginationUI(this.getPaginationInfo());
        }
        return paginationUI;
    }
    renderSort(){
        return this.options.sortUI.bind(this)(this.getSelectedSort());
    }
    renderRangeFacets() {
        const rangeFacets = this.getRangeFacets();
        return this.options.rangeFacetUI.bind(this)(rangeFacets);
    }
    setRangeFilter(data){
        this.setRangeFacet(data)
    }
    renderBreadCrumbs() {
        const data = this.getBreadCrumbsList();
        return this.options.breadCrumpTemplate(data);
    }
    renderBucketedUI() {
        const bucketedFacet = this.getBucketedFacets();
        const selected = this.getSelectedBucketedFacet();
        const breadCrump = this.getBreadCrumbsList();
        return this.options.bucketedSearchUi(bucketedFacet, selected,breadCrump);
    }
    callBack(state,type) {
        const {
            callBackFn,
            loaderElem,
            sortContainer,
            noResultContainer,
            spellCheckSelector,
            paginationContainer

        } = this.options;
        const {
            beforeApiCall,
            afterApiCall,
            beforeRender,
            beforeNoResultRender,
            afterNoResultRender,
            afterRender
        } = events;
        if(type === beforeApiCall) { 
            callBackFn(this,beforeApiCall);
            this.loaderContainer.innerHTML = loaderElem(this);
        }
        if(type === afterApiCall) { 
            callBackFn(this,afterApiCall);
            this.reRender();
        }
    }
    facetsClickFn(e) {
        const dataElem = e.target.dataset;
        const {
            actionType,
            facetName
        } = dataElem;
        if(actionType === events.deleteFacet) {
            if(this.findSelectedFacet(facetName)) {
                this.deleteAFacet.bind(this)(facetName);
                this.options.callBackFn(this,actionType, {
                    facetName
                });
            }
        }
    }
    findChangedFacet(e) {
        const elem = e.target;
        const selected = (this.options.facetEvt === "click") ? elem:elem.options[elem.selectedIndex];
        const dataSet = selected.dataset;
        const {
            facetName,
            facetAction,
            id
        } = dataSet;
        if(facetAction === events.changeFacet) {
            const selectedfacetInfo = this.getSelectedFacet(facetName);
            const selectedOpt = {
                selectedFacetName : facetName,
                selectedFacetId : id,
                facetData : selectedfacetInfo
            }
            this.options.callBackFn(this,events.facetClick, {
                facetName,
                facetData:selectedfacetInfo
            });
            this.updateFacets(selectedOpt);
        }
        if(facetAction === actions.deleteFacetValue) {
            if(this.findSelectedFacet(facetName)) {
                this.deleteAFacet.bind(this)(facetName, id);
                this.options.callBackFn(this,facetAction, {
                    facetName
                });
            }
        }
        if(facetAction === actions.deleteFacet) {
            if(this.findSelectedFacet(facetName)) {
                this.deleteAFacet.bind(this)(facetName);
                this.options.callBackFn(this,facetAction, {
                    facetName
                });
            }
        }
    }
    delegate(delgationElem,evt,elem,fn){
        return delegate(delgationElem,evt,elem,fn);
    }
    sortAction(e) {
        const elem = e.target;
        const {
            action
        } = elem.dataset;
        const value = elem.value;
        if(action === actions.clearSort) {
            this.applySort("");
            this.options.callBackFn(this,action);
        }
        if(action === actions.changeSort) {
            this.applySort(value);
            this.options.callBackFn(this,action, {
                sort:value
            });
        }
    }
    renderSwatchBtns(product) {
        const swatchData = this.getSwatches(product, this.options.swatchMap);
        return this.options.swatchTemplate(swatchData);
    }
    reRender(){
        const {
            callBackFn,
            sortContainer,
            noResultContainer,
            spellCheckSelector,
            paginationContainer
        } = this.options;
        const {
            beforeRender,
            beforeNoResultRender,
            afterNoResultRender,
            afterRender
        } = events;
        callBackFn(this,beforeRender);
        this.loaderContainer.innerHTML = null;
        const results = this.getSearchResults();
        this.options.searchBoxSelector.value = this.state.userInput;

        this.facetsWrapper.innerHTML = this.renderFacets();
        this.rangeFacetsWrapper.innerHTML = this.renderRangeFacets();
        if(this.options.paginationType==="INFINITE_SCROLL" &&  this.viewState.isInfiniteStarted){
            this.viewState.isInfiniteStarted = false;
            this.searchResultsWrapper.innerHTML += this.renderSearch();
        } else {
            this.searchResultsWrapper.innerHTML = this.renderSearch();
        }
        
        this.bucketedSearchWrapper.innerHTML = this.renderBucketedUI();
        this.breadcrumbWrapper.innerHTML = this.renderBreadCrumbs();
        if(sortContainer) {
            sortContainer.innerHTML = this.renderSort();
        }

        if(results && results.numberOfProducts === 0) {
            callBackFn(this,beforeNoResultRender);
            const query = this.getSearchQuery();
            if(noResultContainer) {
                noResultContainer.innerHTML = this.renderNoResults(query);
            }
            callBackFn(this,afterNoResultRender);
        } else {
            noResultContainer.innerHTML = null;
        }
        const suggestion = this.getSpellCheckSuggested();
        if(spellCheckSelector && suggestion) {
            spellCheckSelector.innerHTML = this.renderDidYouMean(suggestion);
        }
        paginationContainer.innerHTML = this.renderPagination();
        this.renderProductViewTypeUI();
        this.renderBannerUI()
        callBackFn(this,afterRender);

    }
    renderNewResults(action) {
        const pageInfo = this.getPaginationInfo();
        const {
            start,
            productsLn,
            numberOfProducts,
            rows,
            isNext,
            isPrev
        } = pageInfo;
        if(action === actions.next){
            const next = start+rows;
            if(isNext){
                this.setPageStart(next);
                this.getResults();
                this.options.callBackFn(this,events.pageNext, {
                    value:next
                });
            }
        }
        if(action === actions.prev){
            const prev = start-rows;
            if(isPrev){
                this.setPageStart(prev);
                this.getResults();
                this.options.callBackFn(this,events.pagePrev, {
                    value:prev
                });
            }
        }
    }
    paginationAction(e){
        const {
            pageAction
        } = e.target.dataset;
        this.renderNewResults(pageAction);
    }
    onClickRangeFacet(e) {
        const {
            action,
            facetName
        } = e.target.dataset;
        if(action === actions.filterPriceRange) {
            this.applyRangeFacet();
            this.options.callBackFn(this,action, {
                facetName
            });
        }
        if(action === actions.clearPriceRange && facetName) {
            this.clearARangeFacet(facetName);
            this.getResults.bind(this)();
            this.options.callBackFn(this,action, {
                facetName
            });
        }
        
    }
    onProductItemClick(e) {
        const path = e.path;
        const id = this.options.productItemClass.replace(".","");
        const dataset = e.target.dataset;
        const elem = path.find((item) => {
            const itemCss = item.className;
            return (itemCss.indexOf(id)) >=0 
        });
        if(dataset.action === actions.changeSwatch) {
            this.options.callBackFn(this,dataset.action);
            elem.querySelector(dataset.swatchTarget).src=dataset.swatchImg;
            return false;
        }
        const product =  this.getProductByPropValue(this.options.productId,elem.id);
        this.options.productClick(product);
    }
    bindEvents(){
        const {
            paginationContainer,
            paginationEvt,
            sortContainer,
            searchButtonSelector,
            searchEvt,
            productItemClass,
            sortElem,
            sortEvt,
            facetEvt,
            facetElemWrapClass,
            selectedFacetBlock,
            selectedFacetClass,
            productViewTypeSelector
        } = this.options;
        paginationContainer.addEventListener(paginationEvt, this.paginationAction.bind(this));
        searchButtonSelector.addEventListener(searchEvt,this.setInputValue.bind(this))
        //productItemSelector
        this.delegate(
            this.searchResultsWrapper,
            "click",
            productItemClass,
            this.onProductItemClick.bind(this)
        );
        this.delegate(
            sortContainer, 
            sortEvt, 
            sortElem,
            this.sortAction.bind(this)
        )
        this.delegate(
            this.facetsWrapper, 
            facetEvt, 
            "."+facetElemWrapClass, 
            this.findChangedFacet.bind(this)
        )
        if(selectedFacetBlock) {
            this.delegate(
                selectedFacetBlock, 
                facetEvt, 
                "."+selectedFacetClass, 
                this.findChangedFacet.bind(this)
            )
        }
        if(this.rangeFacetsWrapper) {
            this.delegate(
                this.rangeFacetsWrapper, 
                "click", 
                "button", 
                this.onClickRangeFacet.bind(this)
            )
        }
        if(this.bucketedSearchWrapper) {
            this.delegate(
                this.bucketedSearchWrapper, 
                this.options.bucketFacetEvnt, 
                "."+this.options.bucketedFacetElem, 
                this.onBucketedFacet.bind(this)
            )
        }
        if(this.breadcrumbWrapper) {
            this.delegate(
                this.breadcrumbWrapper, 
                "click", 
                "."+this.options.breadcrumbSelectorClass, 
                this.onBucketedFacet.bind(this)
            )
        }
        if(productViewTypeSelector){
            this.delegate(
                productViewTypeSelector,
                'click',
                "button",
                this.onPageViewTypeClick.bind(this)
            )
        }
        if(this.options.paginationType === 'INFINITE_SCROLL') {
            document.addEventListener("scroll", debounce(()=>{
                infiniteScroller.bind(this)();
            },1000));
        }
    }
    onPageViewTypeClick(e) {
        const dataElem = e.target.dataset;
        const {
            viewAction,
        } = dataElem;
        this.viewState.productViewType = viewAction;
        this.setPageStart(0);
        this.getResults.bind(this)();
    }
    onBreadCrumbClick(e){
        debugger;
    }
    onBucketedFacet(e) {
        const data = e.target.dataset;
        if(data.action === actions.setCategoryFilter) {
            this.setCategoryFilter(data);
            this.options.callBackFn(this,data.action, data);
            this.getResults();
        }
        if(data.action === actions.clearCategoryFilter) {
            this.deleteCategoryFilter(data);
            this.options.callBackFn(this,data.action, data);
            this.getResults();
        }
    }
    getObject() {
        return this;
    }

}
export default UnbxdSearch;