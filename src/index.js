import UnbxdSearch from "../node_modules/unbxdsdk/src/index";
import renderSearch from "./es6Sdk/searchResults";
import renderFacets from "./es6Sdk/facets";
import createElement from "./es6Sdk/utils/createElement";
import didYouMeanUI from "./es6Sdk/didYouMean/index";
import delegate from "./es6Sdk/utils/delegate";
import {
    selectedFacetUI,
    facetUIElem,
    facetItemUiElem
} from "./es6Sdk/facets/ui";
import  {
    paginationUI
} from "./es6Sdk/pagination/ui";
import {
    renderRangeFacets
} from "./es6Sdk/facets/renderRangeFacets"
import RangeSlider from "./es6Sdk/widgets/RangeSlider";
import BucketedSearchUi from "./es6Sdk/facets/renderBucketedSearch";
import breadCrumpUI from "./es6Sdk/breadcrumbs/breadcrumbs";
import {
    events,
    actions
} from "./es6Sdk/constants/index";
import {
    sortOptions,
    sortUI
} from "./es6Sdk/sort";
import styles from "./es6Sdk/styles/index.scss";


const options = {
    productId:"uniqueId",
    productTemplate : function(product){
        const {
            title,
            sku
        } = product;
        return `<div id="${sku}" class="product-item" style="border:solid 1px green">
         ${title}
        </div>`;
    },
    productWrapper: null,
    productItemClass:".product-item", // to find out product
    facetWrapper: null,
    selectedFacetElem : selectedFacetUI,
    facetElem: facetUIElem,
    facetItemElem: facetItemUiElem,
    facetElemWrapClass:"select-facets-block",
    facetEvt:"change",
    selectedFacetBlock:null,
    selectedFacetClass:null,
    queryString:"/search?q=",
    searchQueryParam:"q",
    defaultFilters : null, //or object with keys
    didYouMeanContainer: null,
    didYouMeanTemplate: didYouMeanUI,
    noResultsUi: (query) => {
        return `<div> No Results found ${query} </div>`
    },
    noResultContainer: null,
    callBackFn: (state,type) =>{
        console.log(state,type,"state,type")
    },
    noOfProducts: 10,
    startPageNo:0,
    paginationContainer:null,
    paginationUI: paginationUI,
    paginationEvt:"click",
    sortContainer:null,
    sortOptions : sortOptions,
    sortUI:sortUI,
    sortEvt:"change",
    sortElem:"select",
    productClick: function(product) {
        console.log(product,"product,index");
    },
    fields: ['title', 'price', 'uniqueId', 'sku', 'rating'],
    spellCheck: false,
    facetMultiSelect: false,
    facetMultiSelectionMode: false,
    loaderElem: () =>{
        return `<div>Loading search results....</div>`
    },
    loaderContainer:null,
    variants:false,
    variantMapping:{},
    rangeFacetContainer:null,
    rangeFacetUI:renderRangeFacets,
    extraParams:{
        "version":"V2",
        "facet.multilevel":"categoryPath",
        "f.categoryPath.displayName":"category",
        "f.categoryPath.max.depth":"4",
        "f.categoryPath.facet.limit":"100"
    },
    facetMultilevel:true,
    bucketedSearchUi:BucketedSearchUi,
    bucketedFacetContainer:null,
    bucketFacetElem:"",
    bucketFacetEvnt:"click",
    bucketedFacetElem:"bucketFacetElem",
    facetDepth:2,
    breadcrumbContainer:null,
    breadcrump:true,
    breadcrumbSelectorClass:"bread-crumb",
    breadCrumpTemplate:breadCrumpUI,
    swatches:true,
    swatchMap:{},
    swatchTemplate:(swatchInfo)=>{
        return `<div>swatchtemplate</div>`
    }
   // searchQueryParam:null

};
class UnbxdSearchComponent extends UnbxdSearch {
    constructor(props) {
        super(props);
        this.searchResultsWrapper = createElement(
            "DIV",
            "searchResultsBlock",{
                class:"search-results-block"
            }
        );
        this.options = Object.assign({},options,props);
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
        this.options.productTemplate = this.options.productTemplate.bind(this);
        this.options.productWrapper.appendChild(this.searchResultsWrapper);
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
        this.bindEvents();
        const urlParams = this.getQueryParams();
        if(urlParams[this.options.searchQueryParam]){
            this.renderFromUrl();
        }
    }
    setInputValue(e) {
        const val = this.options.input.value;
        this.changeInput(val);
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
        return this.options.didYouMeanTemplate.bind(this)(suggestion);

    }
    renderNoResults(query) {
        return this.options.noResultsUi.bind(this)(query);
    }
    renderPagination() {
        return this.options.paginationUI(this.getPaginationInfo());
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
            didYouMeanContainer,
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
            callBackFn(this,beforeRender)
            const results = this.getSearchResults();
            this.loaderContainer.innerHTML = null;
            this.options.input.value = this.state.userInput;

            this.facetsWrapper.innerHTML = this.renderFacets();
            this.rangeFacetsWrapper.innerHTML = this.renderRangeFacets();
            this.searchResultsWrapper.innerHTML = this.renderSearch();
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
            if(didYouMeanContainer && suggestion) {
                didYouMeanContainer.innerHTML = this.renderDidYouMean(suggestion);
            }
            paginationContainer.innerHTML = this.renderPagination();
            callBackFn(this,afterRender);
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
            searchElem,
            searchEvt,
            productItemClass,
            sortElem,
            sortEvt,
            facetEvt,
            facetElemWrapClass,
            selectedFacetBlock,
            selectedFacetClass,
        } = this.options;
        paginationContainer.addEventListener(paginationEvt, this.paginationAction.bind(this));
        searchElem.addEventListener(searchEvt,this.setInputValue.bind(this))
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
export default UnbxdSearchComponent;