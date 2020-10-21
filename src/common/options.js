import didYouMeanUI from "../modules/didYouMean/spellCheckView";
import {
    selectedFacetUI,
    facetUIElem,
    facetItemUiElem,
    selectedFacetItemTemplateUI
} from "../modules/facets/ui";
import productTemplate from '../modules/searchResults/ui';
import paginationUI from "../modules/pagination/paginationView";
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
import swatchTemplate from "../modules/swatches/ui";
const options = {
    productId:"uniqueId",
    searchBoxEl:null,
    siteKey:"demo-spanish-unbxd809051588861207",
    apiKey:"f19768e22b49909798bc2411fa3dd963",
    searchPath:"",
    searchEndPoint:"https://search.unbxd.io/",
    urlAttributes:["filter","sort","rows","start","viewType","category-filter"],
    products:{
        el:null,
        template:productTemplate,
        productItemClass:"product-item", // to find out product
        productType:"SEARCH",
        gridCount:1,
        onProductClick: function(product,e) {
        },
        productAttributes: [
            "title",
            "uniqueId",
            "price",
            "sku",
            "imageUrl",
            "displayPrice",
            "salePrice",
            "sortPrice",
            "productDescription",
            "unbxd_color_mapping",
            "colorName",
            "color"
        ],
        attributesMap:{
            'unxTitle':'title',
            'unxImageUrl':'imageUrl',
            'unxPrice':'salePrice',
            'unxStrikePrice':'displayPrice',
            'unxId':'uniqueId',
            'unxDescription':'productDescription'
        }

    },
    searchQueryParam:"q",
    defaultFilters : null, //or object with keys
    noResults: {
        template:function(query){return `<div class="UNX-no-results"> No Results found ${query} </div>`}
    },
    onEvent: (state,type) =>{
    },
    startPageNo:0,
    productView : {
        enabled:true,
        el:null,
        template:renderProductViewType,
        action:'click', // CLICK or CHANGE
        viewTypeClass:'UNX-product-view',
        selectedViewTypeClass:'UNX-selected-product-view',
        defaultViewType:'GRID'
    },

    loader:{
        template:function(){return `<div class="UNX-loader">Loading search results....</div>`},
        el:null
    },
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
        el:null,
        template: didYouMeanUI,
        selectorClass: "UNX-suggestion"
    },

    breadcrumb:{
        enabled:true,
        el:null,
        selectorClass:"UNX-bread-crumb",
        template:breadCrumbsUI
    },

    sort: {
        enabled:true,
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

        selectedFacetClass:"UNX-selected-facet-btn",
        selectedFacetsEl:null,
        selectedFacetTemplate:selectedFacetUI,
        selectedFacetItemTemplate:selectedFacetItemTemplateUI,
        clearAllText:"Clear All",


        rangeTemplate:renderRangeFacets,
        rangeWidgetConfig: {
            "minLabel":"",
            "maxLabel":"",
            "prefix":'$'
        },

        facetMultilevel:true,
        facetMultilevelName:'Category',
        multiLevelFacetSelectorClass:'UNX-multilevel-facet',
        multiLevelFacetTemplate:multiLevelFacetUI,
        facetDepth:4,
        clearFacetsSelectorClass:'UNX-clear-facet',
        removeFacetsSelectorClass:'UNX-remove-facet',
        onFacetLoad:function(facets){
        },

        applyMultipleFilters:false,
        applyButtonText:"Apply",
        clearButtonText:"clear",


        isCollapsible:true,
        isSearchable:true,
        searchPlaceHolder:"",
        textFacetWrapper:"UNX-facets-item",
        defaultOpen:"ALL",
        enableViewMore:false,
        viewMoreText:["show all", "show less"],
        viewMoreLimit:3,


    },

    pagination : {
        enabled:true,
        el:null,
        template:paginationUI,
        pageClass:"UNX-page-items",
        selectedPageClass:"UNX-selected-page-item",
        type:'CLICK_N_SCROLL', // INFINITE_SCROLL or CLICK_N_SCROLL or FIXED_PAGINATION
        infinteScrollTriggerEl:window, //if paginationType = INFINITE_SCROLL
        heightDiffToTriggerNextPage:100, //if paginationType = INFINITE_SCROLL,    
        onPaginate:function(paginationInfo){},
        action:'click',
        pageLimit:6
    },

    pagesize: {
        enabled:true,
        pageSize:12,
        options:[8,12,16,20,24],
        pageSizeClass:"UNX-pagesize",
        selectedPageSizeClass:"UNX-selected-pagesize",
        action:'change',
        template:pageSizeUi,
        el:null
    },

    banner: {
        enabled:true,
        el:null,
        template:bannerTemplateUI,
        count:1
    },

    swatches:{
        enabled:false,
        attributesMap:{},
        swatchClass:'UNX-swatch-btn',
        template:swatchTemplate
    },
    unbxdAnalytics:false,
    hashMode:false,
    updateUrls:true,
    actionBtnClass:"UNX-action-item",
    actionChangeClass:"UNX-action-change",
    onAction: function(e,ctx) {
    },
    setUrlFromState:null,
    setStateFromUrl:null,
    getQueryParams:null
};
export default options;