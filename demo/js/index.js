import UnbxdSearch from  "../../src/index";



const unbxdCallbackEcma = function (instance, type,data){
  console.log(type,data,'type,data');
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
const toggleMobileFacets = (e)=> {
    showFacet = !showFacet;
    const {
        action
    } = e.target.dataset;
    if(action === "applyFacets") {
        window.unbxdSearch.setPageStart(0);
        window.unbxdSearch.getResults();
    }
    if(action === "clearFacets") {
        window.unbxdSearch.clearAllFacets();
        window.unbxdSearch.setPageStart(0);
        window.unbxdSearch.getResults();
    }
    if(showFacet) {
        facetBlock.classList.add("UNX-show-facets")
    } else {
        facetBlock.classList.remove("UNX-show-facets")
    }
}

const btnEls = document.querySelectorAll(".UNX-facet-trigger");
btnEls.forEach(item=> {
    item.addEventListener("click", toggleMobileFacets)
})
window.unbxdSearch = new UnbxdSearch({
  siteKey: "demo-german-unbxd809051586180937",
  apiKey: "16e3cf8d510c50106d64f1ebb919b34e",
  hashMode:true,
  updateUrls:true,
  searchBoxEl: document.getElementById("unbxdInput"),
  searchTrigger: "click",
  searchButtonEl: document.getElementById("searchBtn")
});
window.unbxdSearch.updateConfig({
  products:{
    el:document.getElementById("searchResultsWrapper"),
    productType:"SEARCH",
    productClick: function(product,e) {
      console.log(product,"product,index",e);
    },
    attributesMap:{
      "unxPrice":"displaySalePrice"
    },
    productAttributes: [
      "title",
      "uniqueId",
      "price",
      "sku",
      "imageUrl",
      "displaySalePrice",
      "salePrice",
      "sortPrice",
      "productDescription",
      "unbxd_color_mapping",
      "colorName",
      "color",
      "size",
      "listPrice",
      "autosuggest"
    ]
  },
  spellCheck: {
    enabled: true,
    el: document.getElementById("didYouMeanWrapper")
  },
  noResults: {
      el: document.getElementById("noResultWrapper")
  },
  facet: {
    facetsEl: document.getElementById("facetsWrapper"),
    selectedFacetsEl: document.getElementById("selectedFacetWrapper"),
    applyMultipleFilters:false,
    defaultOpen:"FIRST",
    onFacetLoad:function(facets){
    },
    isCollapsible:true,
    isSearchable:true,
    enableViewMore:false,
    rangeTemplate:function(ranges,selectedRanges) {
      let ui  = ``;
      const {
        selectedFacetClass,
        facetClass,
        applyMultipleFilters
      } = this.options.facet;
      let selected = false;
      ranges.forEach(range => {
          const {
            displayName,
            facetName,
            values
          } = range;
          let valueUI = ``;
          selected = (selectedRanges[facetName]) ? true :false;
          values.forEach(item =>{
              const {
                from,
                to,
                end
              } = item;
            const isSelected = this.isSelectedRange(facetName,item);
            const last = end || to;

            const btnCss = (isSelected) ? `UNX-selected-facet-btn ${facetClass} ${selectedFacetClass}`:`${facetClass}`;
            valueUI +=[`<button class="${btnCss} UNX-range-facet UNX-change-facet" data-action="setRange" data-facet-name="${facetName}" data-start="${from.dataId}" data-end="${last.dataId}" >`,
                `<span class="UNX-facet-text">${from.name}  -  ${last.name}</span>`,
                `<span class="UNX-facet-count">(${from.count})</span>`,
          `</button>`].join('');
          });
          ui += [`<div class="UNX-facets-inner-wrapper">`,
            `<h3 class="UNX-facet-header">${displayName}</h3>`,
                `<div class="UNX-facets">${valueUI}</div>`,
          `</div>`].join('');
      });
      let clearBtn = ``;
      let applyBtn = ``;
      if(selected) {
          if(applyMultipleFilters) {
              applyBtn = `<button class="UNX-default-btn ${facetClass} UNX-facet-primary" data-action="applyRange"> Apply</button>`;
          }
          clearBtn = `<button class="UNX-default-btn UNX-facet-clear  ${facetClass}" data-action="clearRangeFacets"> clear</button>`;
      }
      return [`<div class="UNX-range-wrapper">`,
        ui,
        `<div class="UNX-price-action-row">`,
            applyBtn,clearBtn,
        `<div>`,
      `</div>`].join('')
    }
  },
  pagination: {
    type:'FIXED_PAGINATION',
    el:document.querySelector("#clickScrollContainer"),
    onPaginate:function(data) {
    }
  },
  breadcrumb: {
    el: document.getElementById("breadcrumpContainer")
  },
  pagesize: {
    el: document.getElementById("changeNoOfProducts")
  },

  sort: {
    el: document.getElementById("sortWrapper"),
    options: [
      {
        value: "sortPrice desc",
        text: "Price High to Low"
      },
      {
        value: "sortPrice asc",
        text: " Price Low to High"
      }
    ]
  },
  loader :{
      el:document.getElementById("loaderEl")
  },
  productView:{
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
  onAction:function(e, ctx) {
  },
  onEvent:unbxdCallbackEcma

})



//window.unbxdSearch.initialize();
