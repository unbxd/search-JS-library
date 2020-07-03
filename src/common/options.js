import didYouMeanUI from "../modules/didYouMean/spellCheckView";
import {
    selectedFacetUI,
    facetUIElem,
    facetItemUiElem,
    selectedFacetItemTemplateUI
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
    searchResultsTemplate : function(product,idx){
        console.log(product,"product")
        const {
            unxTitle,
            unxImageUrl,
            uniqueId,
            unxStrikePrice,
            unxPrice,
            unxDescription
        } = product; 
        let swatchUI = ``;
        const {
            swatches,
            productItemClass
        } = this.options;
        if(swatches.enabled) {
            swatchUI = this.renderSwatchBtns(product);
        }
        const priceUI = `<span class="UNX-sale-price">${unxPrice}</span>`;
        let strikeUi = ``;
        if(unxStrikePrice) {
            strikeUi = `<span class="UNX-strike-price">${unxStrikePrice}<span>`
        }
        const {
            productViewType
        } = this.viewState;
        let cardType = ``;
        let descUI = ``;
        if(productViewType === "GRID") {
            cardType = "UNX-grid-card"
        } else {
            cardType = "UNX-list-card";
            descUI = `<p class="UNX-description">${unxDescription}</p>`;
        }
        return `<div id="${uniqueId}" data-prank="${idx}" data-item="product" class="UNX-product-col ${cardType} ${productItemClass}">  
                    <div class="UNX-img-wrapper">
                        <img class="UNX-img-block" src="${unxImageUrl}"/>
                    </div>
                    <div class="UNX-product-content">
                        <h3 class="UNX-product-title">${unxTitle} </h3>
                        <div class="UNX-swatch-wrapper">
                            ${swatchUI}
                        </div>
                        ${descUI}
                        <div class="UNX-price-row">
                            ${priceUI}
                            ${strikeUi}
                        </div>
                    </div>
        </div>`
    },
    productMap:{
        'unxTitle':'title',
        'unxImageUrl':'imageUrl',
        'unxPrice':'salePrice',
        'unxStrikePrice':'displayPrice',
        'unxId':'uniqueId',
        'unxDescription':'productDescription'
    },
    productItemClass:"product-item", // to find out product
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
        viewTypeClass:'UNX-product-view',
        selectedViewTypeClass:'UNX-selected-product-view',
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
    variants:{
        enabled:false,
        count:5,
        groupBy:'v_colour',
        attributes:[
            "title",
            "v_imageUrl"
        ],
        mapping:{
            "image_url":"v_imageUrl"
        }
    },

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
        selectedSortClass:'UNX-selected-sort',
        sortClass:'UNX-sort-item',
        template:sortTemplate,
        options:sortOptions,
        action:'change'
    },


    facet: {
        facetsEl:null,
        facetTemplate:facetUIElem,
        facetItemTemplate:facetItemUiElem,
        facetMultiSelect:true,
        facetClass:"UNX-facets-block",
        facetAction:"click",

        selectedFacetClass:"UNX-selected-facet",
        selectedFacetsEl:null,
        selectedFacetTemplate:selectedFacetUI,
        selectedFacetItemTemplate:selectedFacetItemTemplateUI,
        rangeFacetEl:null,
        rangeTemplate:renderRangeFacets,
        rangeWidgetConfig: {
            "minLabel":"",
            "maxLabel":"",
            "prefix":'$',
            "submitBtnTxt":"Filter By Price",
            "clearBtnTxt":"Clear"
        },

        facetMultilevel:true,
        facetMultilevelName:'Category',
        multiLevelFacetSelector:'UNX-multilevel-facet',
        multiLevelFacetEl:null,
        multiLevelFacetTemplate:multiLevelFacetUI,
        facetDepth:4,
        clearFacetsSelector:'UNX-clear-facet',
        removeFacetsSelector:'UNX-remove-facet',
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
        pageSizeClass:"UNX-pagesize",
        selectedPageSizeClass:"UNX-selected-pagesize",
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
        attributesMap:{},
        swatchClass:'UNX-swatch-btn',
        template:function(swatchData) {
            const {
                swatchColors = [],
                swatchImgs = []
            } = swatchData;
            let btnUI = ``;
            swatchColors.forEach((item,id) => {
                const imgId = swatchImgs[id];
                if(imgId){
                    const img = imgId.split("::")[1];
                    btnUI+= `<button 
                            data-swatch-id="${item}"
                            data-swatch-img="${img}" 
                            data-action="changeSwatch"
                            data-swatch-target = ".UNX-img-block"
                            class="${this.swatchClass}"
                            style="background-color:${item}"
                            > </button>`
                }
            });
            return `<div class="UNX-swatch-color-list">${btnUI}</div>`
        }
    },
    unbxdAnalytics:false
   // searchQueryParam:null
};
export default options;