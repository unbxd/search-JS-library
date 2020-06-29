<a href="https://www.npmjs.com/package/@unbxd-ui/vanilla-search-library">
  <img alt="npm" src="https://img.shields.io/npm/v/@unbxd-ui/vanilla-search-library?color=blue">
</a>
<a href="https://www.npmjs.com/package/@unbxd-ui/vanilla-search-library">
  <img alt="npm" src="https://img.shields.io/npm/l/@unbxd-ui/vanilla-search-library">
</a>
<a href="https://www.npmjs.com/package/@unbxd-ui/vanilla-search-library">
  <img alt="npm" src="https://img.shields.io/npm/dm/@unbxd-ui/vanilla-search-library">
</a>

# search-JS-library
A JavaScript library for building performant and quick search experiences with Unbxd.


## Getting started

Library can be used in 2 ways

### Es6
Install `@unbxd-ui/vanilla-search-library` using npm.

```shell
    npm install @unbxd-ui/vanilla-search-library --save
```
and include in your in project 
```js
    import UnbxdSearch from '@unbxd-ui/vanilla-search-library';
```

### Es5

You can also use a global-friendly UMD build:

```html
<script src="path-to-unbxd-search-library/dist/js/unbxdSearch.js"></script>
```
Now you're ready to start using the components.

## Documentation
Api documentation is available <a href="http://cxdoc.unbxd.io/search-JS-library/"> here</a>

## Dependencies
Unbxd Vanilla search library has very few dependencies and most are managed by NPM automatically.


## Basic Config

configurations can be written in es6 and es5.
assuming you have follwing elements on the page.
```html
    <div id="es6Root">
        <div id="unbxdTxtWrap">
        <input id="unbxdInput"/>
        <button id="searchBtn">search</button>
    </div>
    <div style="display: flex">
        <div id="paginationContainer"></div>
        <div id="sortWrapper"></div>
        <div id="didYouMeanWrapper"></div>
        <div id="productViewTypeContainer"></div>
        <div id="changeNoOfProducts"></div>
    </div>
    <div id="breadcrumpContainer"></div>
    <div id="bannerContainer"></div>
    <div style="display:flex">
        <div>
            <div id="bucketedFacetWrapper"></div>
            <div id="facetsWrapper"></div>
            <div id="rangeFacetWrapper"></div>
        </div>
        <div id="searchResultsWrapper"></div>
        <div id="loaderContainer"></div>
        <div id="noResultWrapper"></div>
    </div>
```
```js
const es6unbxd =  new UnbxdSearchComponent({
    //input selector where you type search term
    searchBoxSelector:document.getElementById("unbxdInput"),
    //trigger search on this event
    searchTrigger:"click",
    //element to trigger the search action
    searchButtonSelector:document.getElementById("searchBtn"),
    //to display the search results - only products will display here
    searchResultsSelector:document.getElementById("searchResultsWrapper"),
    //filters will display here
    facetsSelector: document.getElementById("facetsWrapper"),
    //if you wish to display selected filters seperately give this option, otherwise dont include this config
    selectedFacetSelector: document.getElementById("selectedFacetWrapper"),
    //given sitekey
    siteKey:"demo-spanish-unbxd809051588861207",
    //given api key
    apiKey:"f19768e22b49909798bc2411fa3dd963",
    //domain name of your api
    sdkHostName:"https://search.unbxd.io/",
    //what type of results you wish to get, available options are  SEARCH, CATEGORY or BROWSE
    productType:"SEARCH",
    //sdk has the ability to render results from url. eg: search?q=dress, this url can render results for dress
    searchQueryParam:"q",
    updateUrls:true,
    //each product has a unique id, either sku or uniqueId needed. 
    productId:"uniqueId",
    // each product card will be rendered based on this function.
    // this function will receive two parameters
    // product and idx
    searchResultsTemplate : function(product,idx){
        const {
            title,
            imageUrl,
            uniqueId,
            sortPrice
        } = product;
        const {
            swatchMap,
            showSwatches
        } = this.options;
        let swatchUI = ``;
        let swatchData = null;
        if(showSwatches) {
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
    //here you have to provide the class name of your product card
    // *required field
    productItemClass:".product-item",
    mapping: {
        "title": ""
    },
    // what fields you needed to render the ui
    //api will fetch only given fields
    fields: ['title','uniqueId','sortPrice', 'sku', 'imageUrl'],
    platform: "IO",
    // sdk will be running this function notify what action it did
    //it gives you 3 params
    // instance is the current state of sdk
    // type tells you what action had happened
    // data will be giving the results of current action
    callBackFn:function (instance, type,data){
        console.log(instance, type,data,"unbxdCallbackEcma")
    },
    //selected filter element
    //if you modify this make sure you are giving following data-params
    //data-facet-name - `facetName` from object
    //data-facet-action -  what action you have to do. delete or apply 
    // for deleting the selected filter,  it will be `deleteFacetValue`
    // data-id - will be the specific id is available in the object

    selectedFacetTemplate : function (selectedFacet,selectedFacetItem){
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

    //your filter item component function 
    //will receive 2 parameters
    // facet information and value
    // needed 3 data-params on element
    // data-facet-name - provide the facetName property from the object
    // data-facet-action - for applying a filter  CHANGE_FACET
    // data-id -  is given in the facet object
    facetTemplate: function  (facet , value) {
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
    //this is the function you tell how you want to show your filters
    // provides 2 parameters
    // facet and children
    // facet object
    // children is the collection of facet elements
    // if you wish to have a button to clear the selected filters under the facet
    // data-facet-action - deleteFacet -  to clear all the values under the facet
    facetItemTemplate: function (facet, children) {
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
    // facets elements comes with a wrapper div element. here you can give the class name of it
    // the facet clicl/change events are bound to this element
    facetClass:"select-facets-block",
    // what type of event you wish to have on element
    // available events click and change
    // if your facet element is a selectbox or checkbox you can provide 'change' event
    facetAction:"click",
    //here you can provide the classnames for the selected facet
    // you can apply styles to this class
    selectedFacetClass:"selected-facet",
    //placeholder to render rangefacets
    rangeFacetContainer:document.getElementById("rangeFacetWrapper"),
    //by default sdk will render a range component
    //if you wish to modify default you can provide here
    // rangeFacets is the params will provide the available range facets 
    rangeFaceTemplate:function(rangeFacets){

    },
    facetMultilevel: true,

    //category filter name
    facetMultilevelName: 'category',
    //this is class element selector for the category filter items
    // this is used to bind the events on the elements
    multiLevelFacetSelector:"bucketFacetElem",
    //default bucket facet template
    // 2 params it provides
    //facets - category facets list
    //selectedFacet - selected category filters

    multiLevelFacetTemplate:function(facets,selected,selectedCategories) {
        let ui = "";
        let filters = facets;
        if(selectedCategories) {
            selectedCategories.forEach(item => {
                const {
                    level,
                    filterField,
                    value
                } = item;
                const levelCss = `${this.multiLevelFacetSelector}  category-level-${level}`
                ui += `<button 
                data-parent="${filterField}"
                data-level="${level}"
                data-name="${value}"
                class=" ${levelCss} selected-crumb"
                data-action = "clearCategoryFilter">
                ${value} x</button>`
            })
        }
        filters.forEach(facet => {
            const {
                level,
                displayName,
                values,
                filterField
            } = facet;
            let {
                multiLevelField
            } = facet;
            if (!multiLevelField) {
                multiLevelField = filterField;
            }
            let levelCss = `category-level-${level}`;
            const valueUI = values.map(item => {
                const {
                    name,
                    count
                } = item;
                return `<button 
                    data-parent="${multiLevelField}"
                    data-level="${level}"
                    class="${this.multiLevelFacetSelector} ${levelCss}"
                    data-name="${name}"
                    data-action = "setCategoryFilter">
                    ${name}-- ${count }</button>`
            })
            ui += `${valueUI.join('')}`
        })
        if(ui !== "") {
            return `<div class="bucketed-facet-wrap">
                <h6>Bucketed facets</h6>
                    ${ui}
            </div>`

        } else {
            return "";
        }
    },
    //the element to render the category facet
    multiLevelFacetContainer:document.getElementById("bucketedFacetWrapper"),
    //configure the depth of category facets. maximum is 4
    facetDepth:4,
    //for getting breadcrumbs
    breadcrumb:true,
    //breadcrumb container to render
    breadcrumbContainer:document.getElementById("breadcrumpContainer"),
    //breadcrumbs template
    breadCrumbTemplate:function(breadcrumbs){
        let ui = ``;
        breadcrumbs.forEach((item ,id )=> {
            const {
                level,
                filterField,
                value
            } = item;
            const css = `${this.options.breadcrumbSelectorClass} bread-crumb-item`;
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
        return `<div class="bread-crumb-main">${ui}</div>`;
    },
    //required field breadcrumb item 
    breadcrumbSelectorClass:"bread-crumb",
    //an option tells the api how facets should work
    facetMultiSelect: true,
    // you can provide an object if you wish to apply default filters to the api
    defaultFilters :null,
    // for enabling suggestions
    spellCheck: true,
    //here you can provide the template
    //given suggestions will be available in suggestion parameter
    spellCheckTemplate: (suggestion) => {
        return `<p>did you mean <strong>${suggestion}</strong></p>`
    },
    //provide an element where you wish to render your spellcheck template
    spellCheckSelector: document.getElementById("didYouMeanWrapper"),
    //provide this element to show no results user interface
    noResultContainer: document.getElementById("noResultWrapper"),
    //if you wish to customize the no results results
    //query will give you the searched term
    noResultsUi: (query) => {
        return `<div> No Results found ${query} </div>`
    },
    //provide how many results you wish to load
    pageSize: 12,
    //paginationType:'INFINITE_SCROLL',
    inifinteScrollTriggerElement:window,
    heightDiffToTriggerNextPage:100,
    //paginationType:'FIXED_PAGINATION',
    //paginationSelector:document.getElementById("paginationContainer"),
    //paginationTemplate:()=>{},
    paginationType:"CLICK_N_SCROLL",
    paginationSelector:document.getElementById("clickScrollContainer"),

    //to change the number of results loaded 
    pageSizeOptions:[6,8,12,16,20],
    //what element you wish to render
    //pass Dropdown to get it as a select box
    pageSizeDisplayType:"Dropdown",
    //provide the event type based on the template, by default it is change
    pageSizeDisplayAction:"change",
    //if you want to override the component
    //below code renders the deault ui
    pageSizeContainerTemp:function(){
        let ui = ``;
        const {
            pageSizeOptions,
            pageSizeDisplayType,
            pageSize
        } = this.options;
        if(pageSizeDisplayType === "Dropdown") {
            ui = `<select  class="unx-select-pagesize ${this.unxSelectors.unxPageSize}">`;
            pageSizeOptions.forEach((opt)=>{
                if(pageSize == opt) {
                    ui+=`<option selected id="${opt}">${opt}</option>`
                } else{
                    ui+=`<option id="${opt}">${opt}</option>`
                }
                
            });
            ui+= `</select>`
        } else{
            pageSizeOptions.forEach((opt)=>{
                const selected = (pageSize == opt)?"selected-page-size":'';
                ui+=`<button class="unx-btn-pagesize ${this.unxSelectors.unxPageSize} ${selected}" id="${opt}">${opt}</button>`
            });
        }
        return `<div>
            ${ui}
        </div>`;
    },
    //where you wish to show the element 
    pageSizeContainerSelector:document.getElementById("changeNoOfProducts"),
    
    //provide the sort options in below format
    sortOptions: [
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
    //placeholder for placing sort elements
    sortContainerSelector:document.getElementById("sortWrapper"),
    //sort options template
    // provides selected sort item
    sortTemplate:function(selectedSort) {
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
    //event type for the sort element
    sortAction:"click",
    // sort item element, in default template its button, so here its button.
    sortElement:"button",
    //loader template 
    loaderTemplate: () =>{
        return `<div>Loading....</div>`
    },
    // where you want to display the loader
    loaderContainer:document.getElementById('loaderContainer'),
    showVariants:true,
    variantMapping:{
        "image_url":"v_image_url"
    },
    //to pass extra information in api
    extraParams :{
        "version":"V2",
        //"facet.multilevel":"categoryPath",
        /*"f.categoryPath.displayName":"category",
        "f.categoryPath.max.depth":"4",
        "f.categoryPath.facet.limit":"100"*/
    },
    showSwatches:true,
    swatchMap:{
        "swatchList":"colours",
        "swatchImgs":"variant_metadata",
        "swatchColors":"unbxd_parentcolours"
    },
    swatchesSelector:"swatchBtn",
    swatchTemplate: function(swatchData) {
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
    },
    //you can render products in list or grid format
    productViewTypes:'GRID',
    //products count in the row
    gridCount:4,
    //placeholder to render productViewTypes option
    productViewTypeSelector: document.getElementById("productViewTypeContainer"),
    //user action on the product view type selector
    productViewTypeAction:"click",
    //override the default template here
    //needed data-view-action="GRID" or data-view-action="LIST" on the element
    productViewTypeTemplate: function(productViewType) {
        const isDisabled = (this.getSearchResults())?false:true;
        let listBtn = `<button
                id="listBtn"
                class="${(productViewType === 'LIST' ) ? 'selected-view':''} view-btn "
                data-view-action="LIST" >List</button>`;
        let gridBtn = `<button
                id="gridBtn"
                class="${(productViewType === 'GRID' ) ? 'selected-view':''} view-btn"
                data-view-action="GRID" >Grid</button>`;
        if(isDisabled) {
            listBtn = `<button
                id="listBtn"
                disabled
                class="${(productViewType === 'LIST' ) ? 'selected-view':''} view-btn disabled-btn"
                data-view-action="LIST" >List</button>`;
            gridBtn = `<button
                id="gridBtn"
                disabled
                class="${(productViewType === 'GRID' ) ? 'selected-view':''} view-btn disabled-btn"
                data-view-action="GRID" >Grid</button>`;
        }

        return `<div class='product-view-container'>
            ${listBtn}
            ${gridBtn}
        </div>`

    },
    //if you want sdk to fire analytics event
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
```

## Examples / Recipies


<ul>
    <li>
        <a href="https://codesandbox.io/s/awesome-pike-93hzm">Customised</a>
    </li>
</ul>


## Full configuration List

| Option                	| Datatype 	| Description                                                                                                                	|
|-----------------------	|----------	|----------------------------------------------------------------------------------------------------------------------------	|
| searchBoxSelector     	| Element  	| requires an html element. Search input will be captured from this element                                                  	|
| searchTrigger         	| String   	| requires an event name. search will be triggered after this event triggered eg:'click'                                     	|
| siteKey               	| String   	| given site key                                                                                                             	|
| apiKey                	| String   	| given api key                                                                                                              	|
| sdkHostName           	| String   	| api domain                                                                                                                 	|
| productType           	| String   	| SEARCH or BROWSE or CATEGORY                                                                                               	|
| searchQueryParam      	| String   	| search term will be appended to this.                                                                                      	|
| searchResultsSelector 	| Element  	| requires an html element. products will be rendered here.                                                                  	|
| searchResultsTemplate 	| function 	| this function has two parameters. product and idx product is the each product object. idx is the index of the each product 	|
| productItemClass      	| String   	| requires a css class name. this should be same as the class given for the product card                                     	|
| fields                	| Array    	| an array of required parameters needed in product object                                                                   	|
| facetsSelector        	| Element  	| requires an html element to place facet elements                                                                           	|

