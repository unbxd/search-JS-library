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
import multiLevelFacetUI from "../modules/facets/renderBucketedSearch";
import breadCrumbsUI from "../modules/breadcrumbs/breadcrumbsView";
import {
    sortOptions,
    sortTemplate
} from "../modules/sort";
import renderProductViewType from '../modules/productViewType';
import bannerTemplateUI from '../modules/banners';
import pageSizeUi from '../modules/pageSize/pageSizeView';
const options = {
    productId:"uniqueId",
    searchBoxSelector:null,
    siteKey:"demo-spanish-unbxd809051588861207",
    apiKey:"f19768e22b49909798bc2411fa3dd963",
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
    productItemClass:".product-item", // to find out product
    productType:"SEARCH",
    searchQueryParam:"q",
    defaultFilters : null, //or object with keys
    
    noResultsTemplate: (query) => {
        return `<div> No Results found ${query} </div>`
    },
    noResultContainer: null,
    callBackFn: (state,type) =>{
        console.log(state,type,"state,type")
    },
    startPageNo:0,

    //productViewTypes:'GRID',
    gridCount:4,
    //productViewTypeSelector: document.getElementById("productViewTypeContainer"),
    //productViewTypeAction:"click",

    //searchResultsSelector: null,
    productView : {
        el:null,
        template:renderProductViewType,
        action:'click', // CLICK or CHANGE
        viewTypeClass:'unx-product-view',
        selectedViewTypeClass:'unx-selected-product-view',
        viewTypes:'GRID'
    },

   // productViewTypes:'GRID',
    //gridCount:3,
    //productViewTypeTemplate:renderProductViewType,
    //productViewTypeSelector:null,


   

    productClick: function(product) {
        console.log(product,"product,index");
    },
    productAttributes: ['title','uniqueId', 'sku', 'rating'],
    loaderTemplate: () =>{
        return `<div>Loading search results....</div>`
    },
    loaderContainer:null,
    showVariants:false,
    variantMapping:{},

    extraParams:{
        "version":"V2",
        /*"facet.multilevel":"categoryPath",
        "f.categoryPath.displayName":"category",
        "f.categoryPath.max.depth":"4",
        "f.categoryPath.facet.limit":"100"*/
    },


    

    spellCheck:{
        enabled:true,
        el:document.getElementById("didYouMeanWrapper"),
        template: didYouMeanUI
    },

    breadcrumb:{
        enabled:true,
        el:null,
        selectorClass:"bread-crumb",
        template:breadCrumbsUI
    },

    sort: {
        el:null,
        selectedSortClass:'unx-selected-sort',
        sortClass:'unx-sort-item',
        template:sortTemplate,
        options:sortOptions,
        action:'change'
    },


    facet: {
        facetsEl:null,
        facetTemplate:facetUIElem,
        facetItemTemplate:facetItemUiElem,
        facetMultiSelect:true,
        facetClass:"unx-facets-block",
        facetAction:"change",

        selectedFacetClass:"unx-selected-facet",
        selectedFacetsEl:null,
        selectedFacetTemplate:selectedFacetUI,

        rangeFacetEl:null,
        rangeTemplate:renderRangeFacets,
        rangeWidgetConfig: {
            "start": 0,
            "end": 100,
            "minLabel":"Min :",
            "maxLabel":"Max :"
        },

        facetMultilevel:true,
        facetMultilevelName:'Category',
        multiLevelFacetSelector:'unx-multilevel-facet',
        multiLevelFacetEl:null,
        multiLevelFacetTemplate:multiLevelFacetUI,
        facetDepth:4,
        clearFacetsSelector:'unx-clear-facet',
        removeFacetsSelector:'unx-remove-facet',
        onFacetLoad:function(facets){
            console.log(facets,"facetsfacets");
        },
        applyMultipleFilters:false
    },

    pagination : {
        el:null,
        template:paginationUI,
        type:'CLICK_N_SCROLL', // INFINITE_SCROLL or CLICK_N_SCROLL or FIXED_PAGINATION
        inifinteScrollTriggerEl:window, //if paginationType = INFINITE_SCROLL
        heightDiffToTriggerNextPage:100, //if paginationType = INFINITE_SCROLL,    
        onPaginate:function(paginationInfo){console.log(paginationInfo,"paginationInfo opt")},
        action:'click',
        cssSelector:'',
    },

    pagesize: {
        pageSize:12,
        options:[8,12,16,20,24],
        pageSizeClass:"unx-pagesize",
        selectedPageSizeClass:"unx-selected-pagesize",
        action:'change',
        template:pageSizeUi,
        el:document.getElementById("changeNoOfProducts")
    },

    banner: {
        el:null,
        template:bannerTemplateUI,
        count:1
    },

    swatches:{
        enabled:true,
        map:{},
        swatchClass:'unx-swatch-btn',
        template:function(swatchData) {
            const {
                swatchColors = [],
                swatchImgs = []
            } = swatchData;
            const swatchesSelector = this.swatchesSelector;
            let btnUI = ``;
            swatchColors.forEach((item,id) => {
                const imgId = swatchImgs[id];
                if(imgId){
                    const img = imgId.split("::")[1];
                    btnUI+= `<button 
                            data-swatch-id="${item}"
                            data-swatch-img="${img}" 
                            data-action="changeSwatch"
                            data-swatch-target = ".productImgBlock"
                            class="${swatchesSelector} swatch-btm"
                            style="border:solid 1px ${item}"
                            >${item}</button>`
                }
            });
            return `<div class="swatchContainer">${btnUI}</div>`
        }
    },
    unbxdAnalytics:false
   // searchQueryParam:null
};
export default options;