import UnbxdSearchComponent from  "../src/index";
import {
    selectedFacetUI,
    facetUIElem,
    facetItemUiElem
} from "./extended/es6sdkui";
import styles from '../styles/index.scss';
console.log(UnbxdSearchComponent,"UnbxdSearchComponent");

const unbxdCallbackEcma = function (instance, type,data){
   console.log(instance, type,data,"unbxdCallbackEcma")
}


const es6unbxd =  new UnbxdSearchComponent({
    searchBoxSelector:document.getElementById("unbxdInput"),
    searchEvt:"click",
    searchButtonSelector:document.getElementById("searchBtn"),
    searchResultsSelector:document.getElementById("searchResultsWrapper"),
    facetWrapper: document.getElementById("facetsWrapper"),
    selectedFacetBlock: document.getElementById("selectedFacetWrapper"),
    siteKey:"demo-spanish-unbxd809051588861207",
    apiKey:"f19768e22b49909798bc2411fa3dd963",
    sdkHostName:"https://search.unbxd.io/",
    productType:"SEARCH",
    searchQueryParam:"q",
    updateUrls:true,
    productId:"uniqueId",
    searchResultsTemplate : function(product,idx){
        const {
            title,
            imageUrl,
            uniqueId,
            sortPrice
        } = product;
        const {
            swatchMap,
            swatches
        } = this.options;
        let swatchUI = ``;
        let swatchData = null;
        if(swatches) {
            swatchUI = this.renderSwatchBtns(product);
        }
        return `<div id="${uniqueId}" data-prank="${idx}" data-item="product" class="product-item" style="border:solid 1px red;display:flex">  
            <img class="productImgBlock" style="width:100px" src="${imageUrl}"/>
        <div>
         <h3>${title} </h3>
         <div>
            ${swatchUI}
         </div>
         <strong>${sortPrice}</strong>
         </div>
        </div>`
    },
    productItemClass:".product-item",

    mapping: {
        "title": ""
    },
    fields: ['title','uniqueId','sortPrice', 'sku', 'imageUrl'],
    platform: "IO",
    callBackFn:unbxdCallbackEcma,
    selectedFacetElem : function (selectedFacet,selectedFacetItem){
        const {
            facetName,
        } = selectedFacet;
        const  {
            name,
            count,
            dataId
        } = selectedFacetItem;
        return `<div><button 
                    class="selected-facet-btn ${this.selectedFacetClass}"
                    data-facet-name="${facetName}"
                    data-facet-action ="deleteFacetValue"
                    data-id= "${dataId}">
                    ${name} (${count})
            </button><button class="${this.selectedFacetClass}"   data-id= "${dataId}" data-facet-action="deleteFacetValue" data-facet-name="${facetName}" > x</button></div>`
    },
    facetElem: function  (facet , value) {
        const {
            facetName,
        } = facet;
        const  {
            name,
            count,
            dataId
        } = value;
        return `<button
                    data-facet-name="${facetName}" 
                    data-facet-action="CHANGE_FACET"
                    data-id= "${dataId}">
                        ${name} (${count})
                </button>`
    },
    facetItemElem: function (facet, children) {
        const {
            displayName,
            facetName
        } = facet;
        return `<div id="${facetName}">
                    <h3> ${displayName}</h3>
                    <button data-facet-action="deleteFacet" data-facet-name="${facetName}" > clear</button>
                    ${children}
                </div>`
    },
    facetElemWrapClass:"select-facets-block",
    facetEvt:"click",
    selectedFacetClass:"selected-facet",
    facetMultiSelect: true,
    facetMultiSelectionMode:true,
    defaultFilters :null,
    spellCheck: true,
    spellCheckTemplate: (suggestion) => {
        return `<p>did you mean <strong>${suggestion}</strong></p>`
    },
    spellCheckSelector: document.getElementById("didYouMeanWrapper"),
    noResultContainer: document.getElementById("noResultWrapper"),
    pageSize: 12,
    //paginationType:'INFINITE_SCROLL',
    inifinteScrollTriggerElem:window,
    //paginationType:'FIXED_PAGINATION',
    //paginationSelector:document.getElementById("paginationContainer"),
    //paginationTemplate:()=>{},
    paginationType:"CLICK_N_SCROLL",
    paginationSelector:document.getElementById("clickScrollContainer"),
    pageSizeContainerSelector:document.getElementById("changeNoOfProducts"),
    pageSizeContainerType:"Dropdown",
    pageSizeOptions:[6,8,12,16,20],
    heightDiffToTriggerNextPage:100,
    sortContainer:document.getElementById("sortWrapper"),
    sortOptions : [
        {
            value:"sortPrice desc",
            text:"Price High to Low"
        },
        {
            value:"sortPrice asc",
            text:" Price Low to High"
        }/*,
        {
            value:"average_rating asc",
            text:" Rating Low to High"
        },
        {
            value:"average_rating desc",
            text:" Rating High to low"
        }*/
    ],
    sortUI:function(selectedSort) {
        let sortBtnsUI = "";
        this.options.sortOptions.forEach((item) => {
            const {
                value,
                text
            } = item;
            let selectedCss = ""
            if(value == selectedSort) {
                selectedCss = "selcted-sort-btn"
            } 
            sortBtnsUI += `<button class="btn ${selectedCss}" value="${value}" data-action="changeSort"> ${text}</button>`
        })
        return `<div>
            <h6>sort selections</h6>
            ${sortBtnsUI}
            <button data-action="clearSort">clear sort</button>
        </div>`
    },
    sortEvt:"click",
    sortElem:"button",
    loaderElem: () =>{
        return `<div>Loading....</div>`
    },
    loaderContainer:document.getElementById('loaderContainer'),
    variants:true,
    variantMapping:{
        "image_url":"v_image_url"
    },
    rangeFacetContainer:document.getElementById("rangeFacetWrapper"),
    facetMultilevel: true,
    facetMultilevelName: 'category',
    bucketedFacetElem:"bucketFacetElem",
    extraParams :{
        "version":"V2",
        //"facet.multilevel":"categoryPath",
        /*"f.categoryPath.displayName":"category",
        "f.categoryPath.max.depth":"4",
        "f.categoryPath.facet.limit":"100"*/
    },
    bucketedFacetContainer:document.getElementById("bucketedFacetWrapper"),
    facetDepth:4,
    breadcrumb:true,
    breadcrumbContainer:document.getElementById("breadcrumpContainer"),
    breadcrumbSelectorClass:"bread-crumb",
    swatches:true,
    swatchMap:{
        "swatchList":"colours",
        "swatchImgs":"variant_metadata",
        "swatchColors":"unbxd_parentcolours"
    },
    swatchSelector:"swatchBtn",
    swatchTemplate: function(swatchData) {
        const {
            swatchColors = [],
            swatchImgs = []
        } = swatchData;
        const swatchSelector = this.swatchSelector;
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
                        class="${swatchSelector} swatch-btm"
                        style="border:solid 1px ${item}"
                        >${item}</button>`
            }
        });
        return `<div class="swatchContainer">${btnUI}</div>`
    },
    productViewTypes:'GRID',
    gridCount:4,
    productViewTypeSelector: document.getElementById("productViewTypeContainer"),
    productViewTypeAction:"click",
    unbxdAnalytics:true,
    variantConfig: {
        variantsCount: 1,
        variantAttributes: [],
        variantMapping:{
            "image_url":"v_image_url"
        },
        variantsGroupBy: ''
    },
    //bannerSelector:document.getElementById('bannerContainer'),
    applyMultipleFilters:false

});

console.log(es6unbxd,"es6unbxd")