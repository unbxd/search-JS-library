import UnbxdSearchComponent from  "../src/index";
import styles from '../styles/index.scss';
console.log(UnbxdSearchComponent,"UnbxdSearchComponent");

const unbxdCallbackEcma = function (instance, type,data){
   console.log(instance, type,data,"unbxdCallbackEcma")
}


const es6unbxd =  new UnbxdSearchComponent({
    searchBoxSelector:document.getElementById("unbxdInput"),
    searchTrigger:"click",
    searchButtonSelector:document.getElementById("searchBtn"),
    searchResultsSelector:document.getElementById("searchResultsWrapper"),
    siteKey: "demo-unbxd700181503576558",
    apiKey: "fb853e3332f2645fac9d71dc63e09ec1",
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
            sortPrice,
            displayPrice,
        } = product;
        
        let swatchUI = ``;
        const {
            swatches
        } = this.options;
        if(swatches.enabled) {
            swatchUI = this.renderSwatchBtns(product);
        }
        return `<div id="${uniqueId}" data-prank="${idx}" data-item="product" class="product-item" style="border:solid 1px red;display:flex">  
            <img class="productImgBlock" style="width:100px" src="${imageUrl}"/>
        <div>
         <h3>${title} </h3>
         <div>
            ${swatchUI}
         </div>
         <strong>${displayPrice}</strong>
         </div>
        </div>`
    },
    productItemClass:".product-item",
    mapping: {
        "title": ""
    },
    //fields: ['title','uniqueId','sortPrice', 'sku', 'imageUrl'],
    productAttributes: ['title','uniqueId','price', 'sku', 'imageUrl','displayPrice','sortPrice'],
    platform: "IO",
    callBackFn:unbxdCallbackEcma,
    //selectedFacetTemplate : ,
    //facetTemplate:,
    defaultFilters :null,
    gridCount:4,
    unbxdAnalytics:true,
    spellCheck:{
        enabled:true,
        el:document.getElementById("didYouMeanWrapper"),
        template:   (suggestion) => {
            return `<p>did you mean <strong>${suggestion}</strong></p>`
        }
    },
    noResultContainer: document.getElementById("noResultWrapper"),
    facet: {
        facetsEl:document.getElementById("facetsWrapper"),
        facetTemplate:function (facet, children) {
            const {
                displayName,
                facetName
            } = facet;
            const {
                facetClass
            } = this.options.facet;
            return `<div id="${facetName}">
                        <h3> ${displayName}</h3>
                        <button 
                            class="${facetClass}"
                            data-facet-action="deleteFacet"
                            data-facet-name="${facetName}" > clear</button>
                        ${children}
                    </div>`
        },
        facetItemTemplate: function  (facet , value) {
            const {
                facetName,
            } = facet;
            const  {
                name,
                count,
                dataId
            } = value;
            const {
                facetClass
            } = this.options.facet;
            return `<button
                        data-facet-name="${facetName}" 
                        data-facet-action="CHANGE_FACET"
                        class="${facetClass}"
                        data-id= "${dataId}">
                            ${name} (${count})
                    </button>`
        },
        facetMultiSelect:true,
        facetClass:"unbxd-facets-block",
        facetAction:"click",

        selectedFacetClass:"unbxd-selected-facet",
        selectedFacetsEl: document.getElementById("selectedFacetWrapper"),
        selectedFacetTemplate: function (selectedFacet,selectedFacetItem){
            const {
                facetName,
            } = selectedFacet;
            const  {
                name,
                count,
                dataId
            } = selectedFacetItem;
            return `<div><button 
                        class="selected-facet-btn ${this.options.facet.selectedFacetClass}"
                        data-facet-name="${facetName}"
                        data-facet-action ="deleteFacetValue"
                        data-id= "${dataId}">
                        ${name} (${count})
                </button><button class="${this.options.facet.selectedFacetClass}"   data-id= "${dataId}" data-facet-action="deleteFacetValue" data-facet-name="${facetName}" > x</button></div>`
        },
        facetMultiSelect:true,

        rangeFacetEl:document.getElementById("rangeFacetWrapper"),
        //rangeTemplate:renderRangeFacets,
        rangeWidgetConfig: {
            "start": 0,
            "end": 100,
            "minLabel":"Min :",
            "maxLabel":"Max :"
        },

        facetMultilevel:true,
        facetMultilevelName:'Category',
        multiLevelFacetSelector:'unbxd-multilevel-facet',
        multiLevelFacetEl:document.getElementById("bucketedFacetWrapper"),    
        facetDepth:4,

        clearFacetsSelector:'unbxd-clear-facet',
        removeFacetsSelector:'unbxd-remove-facet',
        onFacetLoad:function(facets){
            console.log(facets,"facetsfacets");
        }
    },
    pagination: {
        el:document.getElementById("paginationContainer"),
        type:'FIXED_PAGINATION', // INFINITE_SCROLL or CLICK_N_SCROLL or FIXED_PAGINATION 
        onPaginate:function(objectInfo){console.log(objectInfo,"objectInfo")},
        action:'click',
        cssSelector:"unbxd-pagination-css",
        template:function(paginationData){
            const {
                cssSelector
            } = this.options.pagination;
            const {
                noOfPages,
                currentPage,
                isNext,
                isPrev
            } = paginationData;
            let nextBtn = `<button class="next-btn" data-page-action="next">next</button>`;
            let prevBtn = `<button class="prev-btn" data-page-action="prev">prev</button>`;
            if(!isNext) {
                nextBtn = `<button disabled class="next-btn">next</button>`;
            }
            if(!isPrev) {
                prevBtn = `<button disabled class="prev-btn">prev</button>`;
            }
            return `<div class="pagination-block ${cssSelector}">
            ${currentPage} of ${noOfPages} ----  ${prevBtn} ${nextBtn} 
            </div>`
        }
    },
    breadcrumb:{
        enabled:true,
        el:document.getElementById("breadcrumpContainer"),
        selectorClass:"bread-crumb",
        template:function(breadcrumbs){
            let ui = ``;
            breadcrumbs.forEach((item ,id )=> {
                const {
                    level,
                    filterField,
                    value
                } = item;
                const css = `${this.options.breadcrumb.selectorClass} unbxd-crumb-item`;
                if(id > 0) {
                    ui += `<span> > </span>`
                }
                ui += `<button 
                data-parent="${filterField}"
                data-level="${level}"
                class="${css}"
                data-name="${value}"
                data-action = "clearCategoryFilter">
                ${value} x</button>`
            })
            return `<div class="bread-crumb-main">${ui}</div>`
        }
    },
    pagesize : {
        pageSize:12,
        options:[8,12,16,20,24],
        pageSizeClass:"unbxd-pagesize",
        selectedPageSizeClass:"unbxd-selected-pagesize",
        action:'click',
        template:function(pageSize){
            const {
                options,
                pageSizeClass,
                selectedPageSizeClass
            } = this.options.pagesize;
            let ui = ``;
            options.forEach((opt)=>{
                const selected = (pageSize == opt)?selectedPageSizeClass:'';
                ui+=`<button class="unx-btn-pagesize ${pageSizeClass} ${selected}" id="${opt}">${opt}</button>`
            });
            return ui;
        },
        el:document.getElementById("changeNoOfProducts")
    },

    sort: {
        el:document.getElementById("sortWrapper"),
        options:[
            {
                value:"sortPrice desc",
                text:"Price High to Low"
            },
            {
                value:"sortPrice asc",
                text:" Price Low to High"
            }
        ],
        sortClass:'unbxd-sort-item',
        selectedSortClass:'unbxd-selected-sort',
        template:function(selectedSort) {
            let sortBtnsUI = "";
            const {
                options,
                sortClass,
                selectedSortClass
            } = this.options.sort;
            options.forEach((item) => {
                const {
                    value,
                    text
                } = item;
                let selectedCss = ""
                if(value == selectedSort) {
                    selectedCss = selectedSortClass || "selcted-sort-btn"
                } 
                sortBtnsUI += `<button class="btn ${sortClass} ${selectedCss}" value="${value}" data-action="changeSort"> ${text}</button>`
            })
            return `<div>
                <h6>sort selections</h6>
                ${sortBtnsUI}
                <button class="${sortClass}" data-action="clearSort">clear sort</button>
            </div>`
        },
        action:'click'
    },
    loaderTemplate: () =>{
        return `<div>Loading....</div>`
    },
    loaderContainer:document.getElementById('loaderContainer'),
    extraParams :{
        "version":"V2",
        //"facet.multilevel":"categoryPath",
        /*"f.categoryPath.displayName":"category",
        "f.categoryPath.max.depth":"4",
        "f.categoryPath.facet.limit":"100"*/
    },
    
    swatches:{
        enabled:true,
        map:{
            "swatchList":"colours",
            "swatchImgs":"variant_metadata",
            "swatchColors":"unbxd_parentcolours"
        },
        swatchClass:'unbxd-swatch-btn',
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

    productView : {
        el: document.getElementById("productViewTypeContainer"),
        action:'click', // CLICK or CHANGE
        viewTypeClass:'unbxd-product-view',
        selectedViewTypeClass:'unbxd-selected-product-view',
        viewTypes:'GRID'
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
    banner: {
        el:document.getElementById('bannerContainer'),
        template:function(banners) {
            return ''
        },
        count:1
    },
    //bannerSelector:document.getElementById('bannerContainer'),
    applyMultipleFilters:false

});

console.log(es6unbxd,"es6unbxd");
//es6unbxd.getResults();