import UnbxdSearchComponent from  "../../src/index";
import rangeTmpl from "./rangeCheckUI";

const unbxdCallbackEcma = function (instance, type,data){
}

let showFacet = false;
window.resizeTimer = null;

const facetBlock = document.querySelector(".UNX-fxd-facet");
const checkRangeTpl = function(ranges,selectedRanges) {
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
            to
          } = item;
        const isSelected = this.isSelectedRange(facetName,item);
        const btnCss = (isSelected) ? `UNX-selected-facet-btn ${facetClass} ${selectedFacetClass}`:`${facetClass}`;
        valueUI +=[`<button class="${btnCss} UNX-range-facet UNX-change-facet" data-action="setRange" data-facet-name="${facetName}" data-start="${from.dataId}" data-end="${to.dataId}" >`,
            `<span class="UNX-facet-text">${from.name}  -  ${to.name}</span>`,
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
          applyBtn = `<button class="UNX-default-btn UNX-primary-btn" data-action="applyRange"> Apply</button>`;
      }
      clearBtn = `<button class="UNX-default-btn " data-action="clearRangeFacets"> clear</button>`;
  }
  return [`<div class="UNX-range-wrapper">`,
    ui,
    `<div class="UNX-price-action-row">`,
        applyBtn,clearBtn,
    `<div>`,
  `</div>`].join('')
}
const getGridCount = function() {
  const w = window.innerWidth;
  if (w > 1200) {
    return 4;
  }
  if (w < 1200 && w >= 980) {
    return 3;
  }
  if (w < 980) {
    return 2;
  }
};
const getView = () => {
  const w = window.innerWidth;
  if (w < 980) {
    return "LIST";
  }
  return "GRID";
};
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
function getRangeTpl(){
  const w = window.innerWidth;
  if (w < 980) {
    return checkRangeTpl;
  }
  return (window.unbxdSearch) ? window.unbxdSearch.options.rangeWidget : checkRangeTpl;
}

window.unbxdSearch = new UnbxdSearchComponent({
  siteKey: "demo-unbxd700181503576558",
  apiKey: "fb853e3332f2645fac9d71dc63e09ec1",
  hashMode:false,
  updateUrls:true
});

window.unbxdSearch.updateConfig({
  searchBoxSelector: document.getElementById("unbxdInput"),
  searchTrigger: "click",
  searchButtonSelector: document.getElementById("searchBtn"),
  products:{
    el:document.getElementById("searchResultsWrapper"),
    productType:"SEARCH",
    productClick: function(product,e) {
        const {
          id,
          action,
          uniqueid
        } = e.target.dataset;
        if(action === "swatchClick") {
          const currentIds = document.querySelectorAll(`#${uniqueid} .UNX-img-wrapper`);
          currentIds.forEach(elm => {
            elm.classList.remove("UNX-swatch-selected");
            elm.classList.add("UNX-hidden");
          })
          var newImg  = document.getElementById(id);
          newImg.classList.add("UNX-swatch-selected");
          newImg.classList.remove("UNX-hidden");

        }

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
      "color",
      "size"
    ],
    template:function(product,idx,swatchUI,productViewType){
      const {
          unxTitle,
          unxImageUrl,
          uniqueId,
          unxStrikePrice,
          unxPrice,
          unxDescription,
          size,
          unbxd_color_mapping
      } = product; 
      const {
          products
      } = this.options;
      const {
          productItemClass
      }  = products;
      let imagesUI = ``;
      let swatchBtnUi = ``;
      const imgUrl = Array.isArray(unxImageUrl) ? unxImageUrl[0]:unxImageUrl;
      imagesUI = `<div class="UNX-img-wrapper"><img class="UNX-img-block" src="${imgUrl}"/></div>`;
      if(unbxd_color_mapping.length > 1){
        imagesUI = ``;
        unbxd_color_mapping.forEach((item ,i)=> {
          const sArr = item.split("::");
          const sImg = sArr[1];
          const sBtn = sArr[0];
          const uId =`s_${uniqueId}_${i}_sBtn_img`;
          const swatchCss = (i !== 0) ? "UNX-hidden":""
          imagesUI += `<div id="${uId}" class="UNX-img-wrapper UNX-swatch-selected ${swatchCss}"><img class="UNX-img-block" src="${sImg}"/></div>`
          swatchBtnUi += `<button data-id="${uId}" data-uniqueId="p_${uniqueId}"  data-action="swatchClick" style="background-color:${sBtn}" class="UNX-swatch-btn"></button>`
        })
      }
      
      const priceUI = `<span class="UNX-sale-price">${unxPrice}</span>`;
      let strikeUi = ``;
      if(unxStrikePrice) {
          strikeUi = `<span class="UNX-strike-price">${unxStrikePrice}<span>`
      }
      let cardType = ``;
      let descUI = ``;
      if(productViewType === "GRID") {
          cardType = "UNX-grid-card"
      } else {
          cardType = "UNX-list-card";
          descUI = `<p class="UNX-description">${unxDescription}</p>`;
      }
      return [`<div id="p_${uniqueId}" data-prank="${idx}" data-item="product" class="UNX-product-col ${cardType} ${productItemClass}">`,
                  `<div class="UNX-images-block">${imagesUI}</div>`,
                  `<div class="UNX-product-content">`,
                      `<h3 class="UNX-product-title">${unxTitle}</h3>`,
                      `<div class="UNX-swatch-wrapper">${swatchBtnUi}</div>`,
                      descUI,
                      `<div class="UNX-price-row">${priceUI} ${strikeUi}</div>`,
                  `</div>`,
              `</div>`].join('')
    }
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
    rangeFacetEl: document.getElementById("rangeFacetWrapper"),
    multiLevelFacetEl: document.getElementById("bucketedFacetWrapper"),
    applyMultipleFilters:checkMobile(),
    defaultOpen:"FIRST",
    rangeTemplate:rangeTmpl
  },
  pagination: {
    type:'INFINITE_SCROLL'
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
    viewTypes: getView()
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
  }
});
//window.unbxdSearch.initialize();

const setUnbxdSearch = ()=> {
  window.unbxdSearch.updateConfig({
    facet: {
      applyMultipleFilters:checkMobile(),
      defaultOpen:"FIRST"
    },
    products:{
     // gridCount:getGridCount()
    },
    productView:{
      viewTypes: getView()
    }
  });
  window.unbxdSearch.reRender();
}
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  window.resizeTimer = setTimeout(function() {
      setUnbxdSearch()      
  }, 250);
});
