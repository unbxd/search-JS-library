# search-JS-library
A JavaScript library for building performant and quick search experiences with Unbxd

ol>
  <li> clone the repo </li>
<li> npm install</li>
<li> npm start to run in developement environment</li>
<li> npm run build to generate the bundle</li>
 <ol>


 <h3>Basic Implementation</h3>
  <div>
  <pre>
    const es6unbxd =  new UnbxdSearchComponent({
            input:document.getElementById("unbxdInput"),
            searchEvt:"click",
            searchElem:document.getElementById("searchBtn"),
            productWrapper:document.getElementById("searchResultsWrapper"),
            facetWrapper: document.getElementById("facetsWrapper"),
            selectedFacetBlock: document.getElementById("selectedFacetWrapper"),
            siteName:"prod-kookai-com-au4541568774205",
            siteKey:"1c406c7058fdd75c04293fa87c2f9720",
            sdkHostName:"https://search.unbxd.io/",
            queryString:"/search?q=",
            searchQueryParam:"q",
            updateUrls:true,
            productId:"uniqueId",
            productTemplate : function(product){
                const {
                    title,
                    imageUrl,
                    uniqueId,
                    price
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
                return `<div id="${uniqueId}" data-item="product" class="product-item"style="border:solid 1px red;display:flex">  
                    <img class="productImgBlock" style="width:100px" src="${imageUrl}"/>
                <div>
                <h3>${title} </h3>
                <div>
                    ${swatchUI}
                </div>
                <strong>${price}</strong>
                </div>
                </div>`
            },
            productItemClass:".product-item",
            mapping: {
                "title": ""
            },
            fields: ['title','uniqueId', 'published_at', 'imageUrl2', 'v_colour', 'imageUrl1', 'unbxd_price','price', 'sku', 'imageUrl','productUrlParent', 'categoryPath', 'relevantDocument', 'imageUrlMain', 'imageUrlHover', 'colours', 'collections', 'unbxd_parentcolours', 'v_unbxd_parentcolours', 'categoryPath1', 'categoryPath1_fq',  'categoryPath2_fq', 'productUrl', 'variantId', 'id', 'unbxd_sellingprice', 'v_sellingprice', 'variant_metadata', 'is_available', 'v_price'],
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
                    </button><button class="${this.selectedFacetClass}" data-facet-action="deleteFacet" data-facet-name="${facetName}" > x</button></div>`
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
                            data-facet-action="changeFacet"
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
            didYouMeanTemplate: (suggestion) => {
                return `<p>did you mean <strong>${suggestion}</strong></p>`
            },
            didYouMeanContainer: document.getElementById("didYouMeanWrapper"),
            noResultContainer: document.getElementById("noResultWrapper"),
            noOfProducts: 5,
            paginationContainer:document.getElementById("paginationContainer"),
            sortContainer:document.getElementById("sortWrapper"),
            sortOptions : [
                {
                    value:"price desc",
                    text:"Price High to Low"
                },
                {
                    value:"price asc",
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
            loaderContainer:null,
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
                "facet.multilevel":"categoryPath",
                "f.categoryPath.displayName":"category",
                "f.categoryPath.max.depth":"4",
                "f.categoryPath.facet.limit":"100"
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
            }

        });
  </pre>
</div>

