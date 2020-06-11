import didYouMeanUI from "../modules/didYouMean/spellCheckView";
import {
    selectedFacetUI,
    facetUIElem,
    facetItemUiElem
} from "../modules/facets/ui";
import paginationUI from "../modules/pagination/fixedPaginationView";
import {
    renderRangeFacets
} from "../modules/facets/renderRangeFacets";
import BucketedSearchUi from "../modules/facets/renderBucketedSearch";
import breadCrumbsUI from "../modules/breadcrumbs/breadcrumbsView";
import {
    sortOptions,
    sortUI
} from "../modules/sort";
import renderProductViewType from '../modules/productViewType';
import bannerTemplateUI from '../modules/banners';
import pageSizeUi from '../modules/pageSize/pageSizeView';
const options = {
    productId:"uniqueId",
    searchBoxSelector:null,
    siteKey:"prod-kookai-com-au4541568774205",
    apiKey:"1c406c7058fdd75c04293fa87c2f9720",
    sdkHostName:"https://search.unbxd.io/",
    searchResultsTemplate : function(product){
        const {
            title,
            sku
        } = product;
        return `<div id="${sku}" class="product-item" style="border:solid 1px green">
         ${title}
        </div>`;
    },
    searchResultsSelector: null,
    productItemClass:".product-item", // to find out product
    facetWrapper: null,
    selectedFacetElem : selectedFacetUI,
    facetElem: facetUIElem,
    facetItemElem: facetItemUiElem,
    facetElemWrapClass:"select-facets-block",
    facetEvt:"change",
    selectedFacetBlock:null,
    selectedFacetClass:"selected-facet",
    productType:"SEARCH",
    searchQueryParam:"q",
    defaultFilters : null, //or object with keys
    spellCheckSelector: null,
    spellCheckTemplate: didYouMeanUI,
    noResultsUi: (query) => {
        return `<div> No Results found ${query} </div>`
    },
    noResultContainer: null,
    callBackFn: (state,type) =>{
        console.log(state,type,"state,type")
    },
    pageSize: 10,
    startPageNo:0,
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
    facetDepth:4,
    breadcrumbContainer:null,
    breadcrump:true,
    breadcrumbSelectorClass:"bread-crumb",
    breadCrumpTemplate:breadCrumbsUI,
    swatches:true,
    swatchMap:{},
    swatchTemplate:(swatchInfo)=>{
        return `<div>swatchtemplate</div>`
    },
    paginationType:"FIXED_PAGINATION",
    paginationSelector:null,
    paginationTemplate: paginationUI,
    paginationEvt:"click",
    infiniteScrollSelector:window,
    /*
    paginationType:'INFINITE_SCROLL',
    infiniteScrollSelector:document.getElementById('es6Root'),
    */
    productViewTypes:'GRID',
    gridCount:3,
    productViewTypeTemplate:renderProductViewType,
    productViewTypeSelector:null,
    pageSizeOptions:[8,12,16,20,24],
    pageSizeDisplayAction:"change",
    pageSizeTemplate:function(page){
        return ``
    },
    pageSizeContainerSelector:null,
    bannerSelector:null,
    bannerTemplate:bannerTemplateUI,
    pageSizeContainerSelector:document.getElementById("changeNoOfProducts"),
    pageSizeContainerType:"LIST",
    pageSizeContainerTemp:pageSizeUi,
    pageSizeOptions:[6,8,12,16,20],
    unbxdAnalytics:false
   // searchQueryParam:null
};
export default options;