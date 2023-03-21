import UnbxdSearch from "../../src/index";
// import UnbxdSearch from "@unbxd-ui/vanilla-search-library";

let routeTemplate = `
<div class="UNX-header">
        <div class="UNX-header-inner">
            <div class="UNX-logo">
                UNBXD
            </div>
            <div class="UNX-input-wrapper">
            <form action="javascript:void(0);">
                <input id="unbxdInput" class="UNX-input" />
                <button id="searchBtn" class="fa fa-search UNX-search-btn"></button>
                </form>
            </div>
        </div>
        <nav id="categoryLinks" class="UNX-naviagtion-wrap">
            <button data-id="categoryPath:cat700001" class="nav-links" data-path="/men">Men</a>
            <button data-id="categoryPath:cat120002" class="nav-links" data-path="/women">Women</button>
            <button data-id='categoryPath:"Halo Engagement Rings."' class="nav-links" data-path="/halo">Halo</button>
        </nav>
    </div>

    <div class="UNX-results-container">
        <div class="UNX-head-wrapper">
            <div class="UNX-selected-actions">
                <div class="UNX-bread-wrapper" id="breadcrumpContainer"></div>
                <div class="UNX-selected-facet-wrapper" id="selectedFacetWrapper"></div>
            </div>
            <div class="UNX-product-type-block" id="productViewTypeContainer"></div>
        </div>
        <div class="UNX-product-results">
            <div class="UNX-facet-wrapper">
                <h2 class="UNX-filter-header">Filter By</h2>
                <div class="UNX-fxd-facet">
                    <div class="UNX-selected-facet-wrapper UNX-selected-f-m" id="selectedMFacetWrapper"></div>
                    <div class="UNX-multilevel-block" id="bucketedFacetWrapper"></div>
                    <div class="UNX-text-facet-block" id="facetsWrapper"></div>
                    <div class="UNX-range-block" id="rangeFacetWrapper"></div>
                    <div class="UNX-m-facet-row">
                        <button data-action="applyFacets" class="UNX-primary-btn UNX-facet-trigger">Apply</button>
                        <button data-action="clearFacets" class="UNX-default-btn UNX-facet-trigger">Clear</button>
                    </div>

                </div>
                <div class="UNX-m-facet-row">
                    <button class="UNX-m-facet-btn UNX-facet-trigger fa fa-filter"></button>
                </div>
            </div>
            <div class="UNX-product-list">
                <div class="UNX-result-header">
                    <div id="didYouMeanWrapper"></div>
                    <div class="UNX-result-right">
                        <div class="UNX-change-products" id="changeNoOfProducts"></div>
                        <div class="UNX-sort-wrapper" id="sortWrapper"></div>
                        <div class="UNX-change-pagination-wrap" id="paginationContainer"></div>
                        <div id="" class="UNX-change-pagination-wrap unxPagination"></div>
                    </div>
                </div>
                <div id="bannerContainer"></div>
                <div class="UNX-product-wrapper" id="searchResultsWrapper"></div>
                <div id="" class="UNX-change-pagination-wrap UNX-m-page unxPagination"></div>
            </div>
        </div>
        <div class="UNX-loader-container" id="loaderEl"></div>
        <div id="noResultWrapper"></div>
        <div id="clickScrollContainer">
        </div>
        
    </div>
`;


const routes = {
    '/search': routeTemplate,
    '/men': routeTemplate,
    '/women': routeTemplate,
    '/halo': routeTemplate,
};

const rootDiv = document.getElementById('root');
rootDiv.innerHTML = routes[ window.location.pathname ];

const setCategory = function (e) {
    const el = e.target;
    const {
        dataset
    } = el;
    if (dataset && dataset.id) {
        window.history.pushState(null, null, dataset.path);
        // rootDiv.innerHTML = routes[el.pathname];
        window.UnbxdAnalyticsConf = {
            page: dataset.id
        };
        window.unbxdSearch.getCategoryPage();
    }

};

const navElem = document.getElementById("categoryLinks");
navElem.addEventListener("click", setCategory);


const checkRangeTemplate = function (range, selectedRange, facet) {
    const {
        displayName,
        facetName,
        values,
        gap
    } = range;
    let valueUI = ``;
    const {
        facetClass,
        selectedFacetClass,
        applyMultipleFilters,
        applyButtonText,
        clearButtonText,
    } = facet;
    const selected = selectedRange.length > 0 ? true : false;
    values.forEach(item => {
        const {
            from,
            end
        } = item;
        const isSelected = this.isSelectedRange(facetName, item);
        const btnCss = (isSelected) ? `UNX-selected-facet-btn ${facetClass} ${selectedFacetClass}` : `${facetClass}`;
        valueUI += [ `<button class="${btnCss} UNX-range-facet UNX-change-facet" data-action="setRange" data-facet-name="${facetName}" data-start="${from.dataId}" data-end="${end.dataId}" >`,
        `<span class="UNX-facet-text">${from.name}  -  ${end.name}</span>`,
        `<span class="UNX-facet-count">(${from.count})</span>`,
            `</button>`
        ].join('');
    });
    let clearBtn = ``;
    let applyBtn = ``;
    if (selected) {
        if (applyMultipleFilters) {
            applyBtn = `<button class="UNX-default-btn ${facetClass} UNX-facet-primary" data-action="applyRange"> ${applyButtonText}</button>`;
        }
        clearBtn = `<button class="UNX-default-btn UNX-facet-clear  ${facetClass}" data-action="clearRangeFacets">${clearButtonText}</button>`;
    }
    return [ `<div class="UNX-range-wrapper">`,
        valueUI,
        `<div class="UNX-price-action-row">`,
        applyBtn, clearBtn,
        `<div>`,
        `</div>`
    ].join('')
}

const unbxdCallbackEcma = function (instance, type, data) {
    console.log(type, data, 'type,data');
    if (type === "AFTER_RENDER") {
        if (localStorage.getItem('unx_product_clicked') && document.getElementById(localStorage.getItem('unx_product_clicked'))) {
            document.getElementById(localStorage.getItem('unx_product_clicked')).scrollIntoView()
            localStorage.removeItem('unx_product_clicked');
        }
    }
}

let showFacet = false;
window.resizeTimer = null;

const facetBlock = document.querySelector(".UNX-fxd-facet");

const checkMobile = () => {
    const w = window.innerWidth;
    if (w < 980) {
        return true;
    }
    return false;
};

const toggleMobileFacets = (e) => {
    showFacet = !showFacet;
    const {
        action
    } = e.target.dataset;
    if (action === "applyFacets") {
        window.unbxdSearch.setPageStart(0);
        window.unbxdSearch.getResults();
    }
    if (action === "clearFacets") {
        window.unbxdSearch.clearAllFacets();
        window.unbxdSearch.setPageStart(0);
        window.unbxdSearch.getResults();
    }
    if (showFacet) {
        facetBlock.classList.add("UNX-show-facets")
    } else {
        facetBlock.classList.remove("UNX-show-facets")
    }
}

const btnEls = document.querySelectorAll(".UNX-facet-trigger");
btnEls.forEach(item => {
    item.addEventListener("click", toggleMobileFacets)
});

let performRouteActions = () => {
    if (location.pathname === "/men") {
        window.UnbxdAnalyticsConf = {
            page: "categoryPath:cat700001"
        };
        unbxdSearch.options.productType = "CATEGORY";
    } else if (location.pathname === "/women") {
        window.UnbxdAnalyticsConf = {
            page: "categoryPath:cat120002"
        };
        unbxdSearch.options.productType = "CATEGORY";
    } else if (location.pathname === "/halo") {
        window.UnbxdAnalyticsConf = {
            page: 'categoryPath:"Halo Engagement Rings."'
        };
        unbxdSearch.options.productType = "CATEGORY";
    } else {
        window.UnbxdAnalyticsConf = {};
        unbxdSearch.options.productType = "SEARCH";
    }
}

window.addEventListener('popstate', () => {
    performRouteActions();
});

let searchButtonEl = document.getElementById("searchBtn");
let searchBoxEl = document.getElementById("unbxdInput");

searchButtonEl.addEventListener("click", () => {
    if (unbxdSearch.options.productType !== 'SEARCH') {
        window.UnbxdAnalyticsConf = {};
        unbxdSearch.options.productType = 'SEARCH';
        window.history.pushState({
            replace: true
        }, "", "/search?abc=true")
    }
});

searchBoxEl.addEventListener("keydown", (e) => {
    const val = e.target.value;
    if (e.key === "Enter") {
        if (val !== "") {
            if (unbxdSearch.options.productType !== 'SEARCH') {
                window.UnbxdAnalyticsConf = {};
                unbxdSearch.options.productType = 'SEARCH';
                window.history.pushState({
                    replace: true
                }, "", "/search?abc=true")
            }
        }
    }
});

let productType = "";

if (location.pathname === "/men") {
    window.UnbxdAnalyticsConf = {
        page: "categoryPath:cat700001"
    };
    productType = "CATEGORY";
} else if (location.pathname === "/women") {
    window.UnbxdAnalyticsConf = {
        page: "categoryPath:cat120002"
    };
    productType = "CATEGORY";
} else if (location.pathname === "/halo") {
    window.UnbxdAnalyticsConf = {
        page: 'categoryPath:"Halo Engagement Rings."'
    };
    productType = "CATEGORY";
} else {
    window.UnbxdAnalyticsConf = {};
    productType = "SEARCH";
}

window.unbxdSearch = new UnbxdSearch({
    siteKey: "demo-unbxd700181503576558",
    apiKey: "fb853e3332f2645fac9d71dc63e09ec1",
    updateUrls: true,
    hashMode: false,
    searchBoxEl: document.getElementById("unbxdInput"),
    searchTrigger: "click",
    searchButtonEl: document.getElementById("searchBtn"),
    products: {
        productType: productType,
    },
    unbxdAnalytics: true,
    pagination: {
        type: 'INFINITE_SCROLL',
        infiniteScrollTriggerEl: document.getElementById('searchResultsWrapper'),
        // el: document.querySelector("#clickScrollContainer"),
        onPaginate: function (data) { console.log(data, "data") }
    },
    allowExternalUrlParams: false
});

window.unbxdSearch.updateConfig({
    products: {
        el: document.getElementById("searchResultsWrapper"),
        productType: productType,
        onProductClick: function (product, e) {
            localStorage.setItem('unx_product_clicked', product.uniqueId);
            window.location.href = 'https://www.google.com';
        }
    },
    spellCheck: {
        enabled: true,
        el: document.getElementById("didYouMeanWrapper")
    },
    noResults: {
        el: document.getElementById("noResultWrapper")
    },
    selectedFacets: {
        el: document.getElementById("selectedFacetWrapper")
    },
    facet: {
        facetsEl: document.getElementById("facetsWrapper"),
        applyMultipleFilters: false,
        viewMoreLimit: 5,
        enableViewMore: false,
        facetMultiSelect: true,
        viewMoreText: [ 'show all', 'show less' ],
        selectedFacetsEl: document.getElementById("selectedFacetWrapper"),
        defaultOpen: "ALL",
        onFacetLoad: function (facets) {
            const self = this;
            const {
                facet
            } = this.options;
            const {
                rangeWidgetConfig
            } = facet;
            facets.forEach(facetItem => {
                const {
                    facetType,
                    facetName,
                    gap
                } = facetItem;
                const {
                    prefix
                } = rangeWidgetConfig;

                if (facetType === "range") {
                    const rangeId = `${facetName}_slider`;
                    const sliderElem = document.getElementById(rangeId);
                    let {
                        end,
                        gap,
                        max,
                        min,
                        start
                    } = facetItem;
                    const selectedValues = sliderElem.dataset;
                    if (selectedValues) {
                        start = Number(selectedValues.x),
                            end = Number(selectedValues.y)
                    }
                    this[ rangeId ] = noUiSlider.create(sliderElem, {
                        start: [ start, end ],
                        tooltips: [ {
                            to: function (value) {
                                return `${prefix} ${Math.round(value)}`;
                            }
                        },
                        {
                            to: function (value) {
                                return `${prefix} ${Math.round(value)}`;
                            }
                        }
                        ],
                        connect: true,
                        range: {
                            'min': 0,
                            'max': max
                        },
                        format: {
                            to: function (value) {
                                return Math.round(value);
                            },
                            from: function (value) {
                                return Math.round(value);
                            }
                        },
                        padding: 0,
                        margin: 0,
                    });
                    this[ rangeId ].on("set", function (data) {
                        const newData = {
                            start: data[ 0 ],
                            end: data[ 1 ],
                            facetName,
                            gap
                        };
                        self.setRangeSlider(newData);
                    });

                }

            });
        },
        isCollapsible: true,
        isSearchable: true,
        rangeTemplate: function (range, selectedRange, facet) {
            const {
                facetName,
                start,
                end
            } = range;
            let min = start;
            let max = end;
            if (selectedRange.length > 0) {
                const sel = selectedRange[ 0 ].replace(/[^\w\s]/gi, '').split(" TO ");
                min = sel[ 0 ];
                max = sel[ 1 ];
            }
            const rangId = `${facetName}_slider`;
            return [ `<div id="${facetName}"  data-id="${facetName}" class=" UNX-range-slider-wrap">`,
                `<div class="UNX-value-container UNX-range-value-block" ></div>`,
            `<div id="${rangId}" data-x="${min}" data-y="${max}" class="UNX-range-slider-wrapper"></div>`,
                `</div>`,
                `<div>`,
                `</div>`
            ].join('')
        }
    },
    // facet: {
    //     facetsEl: document.getElementById("facetsWrapper"),
    //     selectedFacetsEl: document.getElementById("selectedFacetWrapper"),
    //     defaultOpen: "",
    //     enableViewMore: true,
    //     viewMoreLimit: 5,
    //     onFacetLoad:function(facets){
    //       console.log(facets)
    //        jQuery(".UNX-range-slider-wrap").click(function() {
    //         jQuery("html, body").animate({ scrollTop: 0 }, "slow");
    //               return true;
    //       });
    //       jQuery(".UNX-change-facet").click(function() {
    //           jQuery("html, body").animate({ scrollTop: 0 }, "slow");
    //           return true;
    //        });  
    //       jQuery(".UNX-facet-wrapper .UNX-facets-results-block .UNX-facet-item-d").each(function() {
    //           if(jQuery(this).find('.UNX-facets-all .UNX-facets-item button').hasClass('UNX-change-facet')){
    //             jQuery(this).show()
    //           } else {
    //             jQuery(this).hide()
    //       }
    //       });
    //       jQuery(".range-facets-block").each(function() {
    //             if(jQuery(this).find('.UNX-facets-all .UNX-facets-item').hasClass( 'UNX-range-slider-wrap')){
    //               jQuery(this).hide()
    //             } else {
    //               jQuery(this).show()
    //       }
    //             }); 
    //         const self = this;
    //           const { facet } = this.options;
    //           const { rangeWidgetConfig } = facet;
    //           facets.forEach((facetItem) => {
    //             const { facetType, facetName, gap } = facetItem;
    //             const { prefix } = rangeWidgetConfig;
    //             if (facetType === "range") {
    //               const rangeId = `${facetName}_slider`;
    //               const sliderElem = document.getElementById(rangeId);
    //               let { end, gap, max, min, start } = facetItem;
    //               const selectedValues = sliderElem.dataset;
    //               if (selectedValues) {
    //                 (start = Number(selectedValues.x)),
    //                   (end = Number(selectedValues.y));
    //               }
    //               this[rangeId] = noUiSlider.create(sliderElem, {
    //                 start: [start, end],
    //                 tooltips: [
    //                   {
    //                     to: function (value) {
    //                       return `${prefix} ${Math.round(value)}`;
    //                     }
    //                   },
    //                   {
    //                     to: function (value) {
    //                       return `${prefix} ${Math.round(value)}`;
    //                     }
    //                   }
    //                 ],
    //                 connect: true,
    //                 range: {
    //                   min: 0,
    //                   max: max
    //                 },
    //                 format: {
    //                   to: function (value) {
    //                     return Math.round(value);
    //                   },
    //                   from: function (value) {
    //                     return Math.round(value);
    //                   }
    //                 },
    //                 padding: 0,
    //                 margin: 0
    //               });
    //               this[rangeId].on("set", function (data) {
    //                 const newData = {
    //                   start: data[0],
    //                   end: data[1],
    //                   facetName,
    //                   gap
    //                 };
    //                 self.setRangeSlider(newData);
    //               });
    //             }
    //           });
    //     },
    //     facetItemTemplate: function facetItemTemplate(facet, value, facetSearchTxt) {
    //        function stringContainsNumber(test1){
    //            var string1 = String(test1);
    //            var regexx = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~ 0-9]/gm;           
    //            for( var i = 0; i < string1.length; i++) {
    //             var test1 = facet.displayName == "Initials";
    //               if(test1){
    //                 if( !isNaN(string1.charAt(i)) && !(string1.charAt(i) == " ") || (string1.match(regexx))) {
    //                       return true;
    //                     }
    //                 }
    //             }
    //             return false;
    //        };
    //       function stringContainsNumbers(test2){
    //            var string2 = String(test2);                 
    //            var regexx = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~ 0-9]/gm;
    //             for( var i = 0; i < string2.length; i++) {                      
    //             var test2 = facet.displayName == " Ring Size";
    //             if(test2){        
    //                  if( !isNaN(string2.charAt(i)) && !(string2.charAt(i) == " ") || (string2.match(regexx))) {
    //                       return true;
    //                     }
    //                 }
    //             }
    //             return false;
    //         };
           
    //         const {
    //                 facetName,
    //                 isSelected
    //             } = facet;
    //             const  {
    //                 name,
    //                 count,
    //                 dataId
    //             } = value;
    //             let {
    //                 facetClass,
    //                 selectedFacetClass
    //             } = this.options.facet;
    //             const {
    //                 UNX_uFilter
    //             } = this.testIds;
    //             if(facetSearchTxt && facetSearchTxt.length > 0) {
    //                 if(name.toUpperCase().indexOf(facetSearchTxt.toUpperCase()) < 0 ){
    //                     facetClass +=' UNX-search-hidden'
    //                 }
    //             }
            
    //             let action =  "changeFacet";
    //             if(isSelected) {
    //                 facetClass += ` ${selectedFacetClass}`
    //                 action = "deleteFacetValue";
    //             }
    //             if(stringContainsNumber(name)){
    //               return '';
    //             } else if(stringContainsNumbers(name)){
    //               return '';
    //             }else {
    //             return [`<button data-test-id="${UNX_uFilter}" data-facet-name="${facetName}" data-facet-action="${action}" class="UNX-change-facet ${facetClass}" data-id="${dataId}">`,
    //                         `<span class="UNX-facet-text">${name}</span> <span class="UNX-facet-count">(${count})</span>`,
    //                     `</button>`].join('');
    //       }
    //   },
    //     facetTemplate: function facetTemplate(facetObj, children, isExpanded, facetSearchTxt, facet) {
    //       console.log(facetObj)
    //       console.log(facet)
             
    //       const {
    //           displayName,
    //           facetName,
    //           multiLevelField,
    //           facetType,
    //           values
    //       } = facetObj;
    //       const {
    //           facetClass,
    //           applyMultipleFilters,
    //           isCollapsible,
    //           isSearchable,
    //           searchPlaceHolder,
    //           textFacetWrapper,
    //           enableViewMore,
    //           viewMoreText,
    //           viewMoreLimit,
    //           applyButtonText,
    //           clearButtonText,
    //       } = facet;
    //       const {
    //           actionBtnClass,
    //           actionChangeClass
    //       } = this.options;
    //       const {
    //           openBtn,
    //           closeBtn
    //       } = this.cssList;
    //       let viewMoreUi = ``;
    //       let viewMoreCss=``;
    //       const selected = this.getSelectedFacets()[facetName];
    //       const isFtr = (selected && selected.length >0)?true:false;
                
    //       if (enableViewMore && facetType === "text" && values.length > viewMoreLimit) {
    //         viewMoreCss = "UNX-view-more";
    //         viewMoreUi = "<div class=\"UNX-view-more-row \"><button class=\"".concat(actionBtnClass, "\" data-facet-name=\"").concat(facetName, "\" data-action=\"viewMore\" data-id=\"").concat(viewMoreText[0], "\">").concat(viewMoreText[0], "</button></div>");
    //       }
    //       let clearUI = ``;
    //       let applyBtn = ``;
    //       if(isFtr){
    //           clearUI = `<button class="UNX-facet-clear ${facetClass} "data-facet-action="deleteFacet" data-facet-name="${facetName}">${clearButtonText}</button>`;
    //       }
    //       if(applyMultipleFilters && isFtr) {
    //           applyBtn = `<button class="UNX-facet-primary ${facetClass} "data-facet-action="applyFacets" >${applyButtonText}</button>`
    //       }
    //       let collapsibleUI = ``;
    //       let searchInput = ``;
    //       if(isCollapsible){
    //           if(isExpanded) {
    //               collapsibleUI = `<div class="UNX-facet-header ${actionBtnClass} UNX-facet-open"  data-facet-name="${facetName}" data-facet-action="facetClose"> <h3>${displayName}</h3> </div>`;
    //           } else {
    //               collapsibleUI = `<div class="UNX-facet-header ${actionBtnClass} UNX-facet-close"  data-facet-name="${facetName}" data-facet-action="facetOpen"> <h3>${displayName}</h3></div>`;
    //           }
    //       }
    //       if(isSearchable && facetSearchTxt !== null) {
    //           searchInput =`<div class="UNX-searchable-facets"><label class="UNX-hidden" for="${facetName}_searchBox">${searchPlaceHolder}</label><input  id="${facetName}_searchBox" name="${facetName}_searchBox" data-test-id="${this.testIds.UNX_searchFacets}" class="UNX-facet-search ${actionChangeClass}" value="${facetSearchTxt}"  data-facet-name="${facetName}" data-facet-action="searchFacets" type="text" placeholder="${searchPlaceHolder}"/></div>`
    //       }
    //       return [`<div class="UNX-text-facet-wrap">`,
    //                   collapsibleUI,
    //                   `<div class="UNX-facets-all">`,
    //                       searchInput,
    //                       `<div class="UNX-facets ${textFacetWrapper} ${viewMoreCss}">${children}</div>`,
    //                       viewMoreUi,
    //                       `<div class="UNX-facet-footer">${applyBtn} ${clearUI}</div>`,
    //                   `</div>`,
    //              `</div>`].join('');
    //      },
    //     selectedFacetTemplate: function selectedFacetTemplate(selections, facet, selectedFacetsConfig) {
    //      console.log(selections)
    //       console.log(facet)
    //       console.log(selectedFacetsConfig)
    //         const {
    //             clearAllText,
    //             clearFacetsSelectorClass
    //         } = facet;
    //         const selectedFClass = (this.selectedFacetClass) ? this.selectedFacetClass : selectedFacetsConfig.selectedFacetClass;
    //         if (selections.length > 0) {
    //             return ["<div class=\"UNX-facets-selections\">", 
    //             "<div class=\"UNX-selected-facets-inner\">".concat(selections, "</div>"), 
    //             "</div>"].join('');
    //         } else {
    //             return "";
    //         }
    //     },
    //     rangeTemplate: function (range, selectedRange, facet) {
    //       const { facetName, start, end } = range;
    //       let min = start;
    //       let max = end;
    //       if (selectedRange.length > 0) {
    //         const sel = selectedRange[0].replace(/[^\w\s]/gi, "").split(" TO ");
    //         min = sel[0];
    //         max = sel[1];
    //       }
    //       const rangId = `${facetName}_slider`;
    //       return [
    //         `<div id="${facetName}"  data-id="${facetName}" class=" UNX-range-slider-wrap">`,
    //         `<div class="UNX-value-container UNX-range-value-block" ></div>`,
    //         `<div id="${rangId}" data-x="${min}" data-y="${max}" class="UNX-range-slider-wrapper"></div>`,
    //         `</div>`,
    //         `<div>`,
    //         `</div>`
    //       ].join("");
    //     }
    // },
    pagination: {
        type: 'INFINITE_SCROLL',
        heightDiffToTriggerNextPage: 500,
        infiniteScrollTriggerEl: document.getElementById('searchResultsWrapper'),
        onPaginate: function (data) { console.log(data, "data") }
    },
    breadcrumb: {
        el: document.getElementById("breadcrumpContainer")
    },
    pagesize: {
        el: document.getElementById("changeNoOfProducts")
    },

    sort: {
        el: document.getElementById("sortWrapper"),
        options: [ {
            value: "price desc",
            text: "Price High to Low"
        },
        {
            value: "price asc",
            text: " Price Low to High"
        }
        ]
    },
    loader: {
        el: document.getElementById("loaderEl")
    },
    productView: {
        el: document.getElementById("productViewTypeContainer"),
        defaultViewType: "GRID"
    },
    banner: {
        el: document.getElementById("bannerContainer"),
        count: 1
    },
    swatches: {
        enabled: true,
        attributesMap: {
            swatchList: "color",
            swatchImgs: "unbxd_color_mapping",
            swatchColors: "color"
        }
    },
    onAction: function (e, ctx) { },
    onEvent: unbxdCallbackEcma
});



// UnbxdSearch.prototype.setUrl = function(reload) {
//     console.log(reload)
//       const {
//           productType,
//           hashMode,
//           searchPath,
//           onQueryRedirect,
//           browseQueryParam,
//           searchQueryParam
//       } = this.options;
//         console.log(this.state)
//       const {
//           userInput,
//           urlLoad,
//           isHistory,
//           responseObj = {},
//           startPageNo = 0,
//             products,
//           pageSize = 36
//       } = this.state;
//       const {
//           productViewType
//       } = this.viewState;
//       const {
//           redirect
//       } = responseObj;
//       // if(typeof onQueryRedirect === "function") {
//       //     onQueryRedirect(this, redirect);
//       // }
//          const qParams = this.getQueryParams();
//     console.log(qParams, 'qParams')
//      //  const totalProducts = Number(qParams.start) + pageSize;
//      //    //this will prevent updating url till the sdk finishes the last loaded many items
//         // if (
//      //      products.length < totalProducts &&
//      //      !(this.getSearchResults().numberOfProducts < this.state.pageSize)
//      //    ) {
//      //      this.viewState.loadagain = true;
//      //      this.renderNewResults("next");
//      //      return true;
//      //   }
//      //  if(typeof onQueryRedirect === "function") {
//      //      onQueryRedirect(this, redirect);
//      //  }
//       let facetStr = ``;
//       facetStr += this.urlFlattenFacets();
//       facetStr += this.getRangeFilterStr();
//       facetStr += this.categoryFilterUrlStr();
//       if(startPageNo >= 0) {
//         console.log('pagestart')
//           facetStr += this.getPageStartStr()
//       }
//          if(pageSize >= 0) {
//            console.log('size')
//           facetStr += this.getPageSizeStr()
//       }
//       facetStr += `&viewType=${productViewType}`;
//     console.log(this.getQueryParams())
//     let selectedFtrs = '';
//       if( qParams.filter){
//             if(Array.isArray( qParams.filter)){
//               for(var i=0; i <  qParams.filter.length; i++ ){
//                       selectedFtrs += '&filter='+qParams.filter[i]
//               }
//             } else{
//                selectedFtrs += '&filter='+qParams.filter
//             }
//         }
//       let queryString = `${searchQueryParam}=${userInput}`;
//       if(productType !== "SEARCH") {
//           queryString = `${browseQueryParam}=${this.getCategoryId()}`;
//       }
//     console.log(facetStr)
//       const q = `${queryString}${selectedFtrs}${facetStr}${this.getSortUrlString()}`;
//       this.state.urlState = q;
//     console.log(searchPath)
//       const isPath = location.pathname.includes(searchPath);
//      console.log(isPath)
//       if(hashMode) {
//         console.log('ifyes')
//           const newQ = `#${q}`;
//           if(isPath && (newQ !== location.hash)) {
//               location.hash = q;
//           }
//       } else {
//         console.log('else no')
//           if(isHistory && !urlLoad && isPath){
//             console.log('else no2')
//               const newQ  = `?${q}`;
//                           console.log(newQ)
//             console.log(location.search)
//               if(decodeURI(newQ) !== decodeURI(location.search)) {
//                 console.log('else no1')
//                   window.history.pushState(q, null, newQ);
//                   this.state.urlLoad = false;
//               }
//           }
//   //         if(reload && isPath){
//   //             location.search = q;
//   //         }
//           }
//       }






