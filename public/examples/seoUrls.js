/*
******** custom url set up with sdk *******


####Goal
 - Customer should be able to configure the url as per their requirement.

#### Solution

we can acheive the same by modifying below methods from the UnbxdSeach class.
## methods to override
  - UnbxdSearch.prototype.getQueryParams
    this method read the url string and convert it into the Object which should be readable by SDK
    
    this method should return an object in below format. this means that you have to have your logic to read the url string and process the values in below format.
    
    {
        "q": "shirt"", //search term
        "filter": [
            "filterType1:"value 1" OR filterType1:"value 2", //multiple filter values should be seperated by "OR"
            "rangeFilter:[0 TO 200]"
        ],
        "rows": "12", //how many results you want in a page
        "start": "0", //pagination start value - if the rows are 12 , then next page value will be 13
        "viewType": "GRID" // to render in GRID or LIST view
        "category-filter": "category value 1 > category value 2"
    }
  
    - UnbxdSearch.prototype.setUrl
      this method set the url in browser.  here you can format and decide what and all you want to display in url.
      
## Example
    Need to keep track of the text and range filter. desired url structure will be like below.
      www.site.com/filterType1/value1/value2/filterType2/value1/rangeFilter/rangevalue/q/searchTerm


    - We need to configure getQueryParams in way, it can return the object in below format.
        {
            q: "",
            filter: []
        }

*/




const unbxdCallbackEcma = function (instance, type, data) {};

const getFacetValueUrl = function (selectedFacets) {
  const facetArr = Object.keys(selectedFacets);
  let facetStr = ``;
  if (facetArr.length > 0) {
    facetArr.forEach((item, i) => {
      const valueArr = selectedFacets[item];
      if (valueArr.length > 0) {
        facetStr += `/${item}/`;
        valueArr.forEach((value, i) => {
          const { name } = value;
          const val = name;
          if (i === 0) {
            facetStr += `${val}`;
          } else {
            facetStr += `/${val}`;
          }
        });
      }
    });
  }
  return facetStr;
};
const getRangeValueUrl = function (rangeFacet) {
  const facetArr = Object.keys(rangeFacet);
  let facetStr = ``;
  facetArr.forEach((item, i) => {
    const valueArr = rangeFacet[item][0]
      .replace(" TO ", "-")
      .replace("[", "")
      .replace("]", "");
    facetStr += `/${item}/${valueArr}`;
  });
  return facetStr;
};
const getCategoryValueUrl = function (categoryValue) {
  const facetArr = categoryValue.categoryPath;
  let facetStr = ``;
  if (facetArr) {
    facetArr.forEach((item, i) => {
      let val = decodeURIComponent(item);
      facetStr += `/${val}`;
    });
  }
  return facetStr;
};
const getTypeMap = function (value) {
  let selected = null;
  if (value.indexOf("Filter") > 0) {
    selected = "filter";
  }
  return selected;
};
UnbxdSearch.prototype.getQueryParams = function (pathState) {
  let q = location.pathname;
  let uri = q.replace("/", "");
  if (pathState) {
    uri = pathState;
  }
  const splited = uri.split("/");
  let chunks = [];

  splited.forEach((item, index) => {
    if (item !== "" && item !== "#") {
      chunks.push(item);
    }
  });
  let params = {
    q: "",
    filter: [],
    "category-filter": ""
  };
  let pointer = 0;
  let lastType = null;
  let filterName = "";
  let filterValue = "";
  for (let i = 0; i < chunks.length; i++) {
    let data = chunks[i];
    if (data.indexOf("q=") >= 0) {
      params.q = `${data.replace("q=", "")}`;
    } else {
      const type = getTypeMap(data);
      switch (type) {
        case "filter":
          lastType = "filter";
          filterName = data;
          if (filterValue !== "") {
            params.filter.push(filterValue);
          }
          filterValue = filterName;
          pointer = i + 1;
          break;
        case "price":
          lastType = "range";
          params.filter.push(filterValue);
          filterName = data;
          filterValue = filterName;
          pointer = i + 1;
          break;
        default:
          if (lastType === null) {
            let dataVal = data;
            let val = params["category-filter"];
            if (val === "") {
              params["category-filter"] = encodeURIComponent(dataVal);
            } else {
              params["category-filter"] = `${val}>${dataVal}`;
            }
          }
          if (lastType === "filter") {
            if (
              lastType === "filter" &&
              filterName &&
              (filterValue.indexOf(filterName) >= 0) & (i === pointer)
            ) {
              filterValue += `:${data}`;
              pointer = i;
            }
            if (
              lastType === "filter" &&
              filterName &&
              (filterValue.indexOf(filterName) >= 0) & (i > pointer)
            ) {
              filterValue += ` OR ${filterName}:${data}`;
            }
          }
          if (lastType === "range") {
            const value = `:[${data.replace("-", " TO ")}]`;
            filterValue += value;
          }
      }
    }
  }
  if (filterValue != "") {
    params.filter.push(filterValue);
    filterValue = "";
  }
  return params;
};
UnbxdSearch.prototype.setUrl = function (reload) {
  const { userInput, selectedFacets, rangeFacet, categoryFilter } = this.state;
  let facetStr = ``;
  facetStr += getCategoryValueUrl(categoryFilter);
  facetStr += getFacetValueUrl(selectedFacets);
  facetStr += getRangeValueUrl(rangeFacet);
  let newUrl = `${facetStr}/q=${userInput}`;
  const currUrl = location.pathname;
  if (currUrl !== `${newUrl}`) {
    //location.pathname= newUrl;
    history.pushState(newUrl, null, newUrl);
  }
};

window.unbxdSearch = new UnbxdSearch({
  siteKey: "demo-german-unbxd809051586180937",
  apiKey: "16e3cf8d510c50106d64f1ebb919b34e",
  updateUrls: true,
  searchBoxEl: document.getElementById("unbxdInput"),
  searchTrigger: "click",
  searchButtonEl: document.getElementById("searchBtn"),
  products: {
    productType: "SEARCH"
  }
});
window.unbxdSearch.updateConfig({
  products: {
    el: document.getElementById("searchResultsWrapper"),
    productType: "SEARCH",
    productClick: function (product, e) {
      console.log(product, "product,index", e);
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
    defaultOpen: "FIRST",
    isCollapsible: true,
    isSearchable: true,
    enableViewMore: false
  },
  pagination: {
    type: "INFINITE_SCROLL",
    el: document.querySelector("#clickScrollContainer"),
    onPaginate: function (data) {}
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
        value: "min_price desc",
        text: "Price High to Low"
      },
      {
        value: "min_price asc",
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
  onAction: function (e, ctx) {},
  onEvent: unbxdCallbackEcma
});

//window.unbxdSearch.getResults("*");
