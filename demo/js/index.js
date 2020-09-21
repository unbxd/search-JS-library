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
  searchBoxSelector: document.getElementById("unbxdInput"),
  searchTrigger: "click",
  searchButtonSelector: document.getElementById("searchBtn"),
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
    viewTypes: "GRID"
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
  actionCallback:function(e, ctx) {
  },
  onEvent:unbxdCallbackEcma
})



//window.unbxdSearch.initialize();
