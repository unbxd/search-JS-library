(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["UnbxdSearch"] = factory();
	else
		root["UnbxdSearch"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 39);
/******/ })
/************************************************************************/
/******/ ({

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ../search-JS-core/src/config/index.js
var config_options = {
  siteKey: 'api key',
  apiKey: 'site key',
  isFlag: true,
  searchEndPoint: 'https://search.unbxd.io/',
  productType: 'SEARCH',
  searchQueryParam: 'q',
  browseQueryParam: 'p',
  searchPath: "",
  productAttributes: ['title'],
  defaultFilters: null,
  spellCheck: {
    enabled: false
  },
  pageSize: 5,
  startPageNo: 0,
  facetMultiSelect: true,
  updateUrls: true,
  variants: undefined,
  extraParams: {},
  facetMultilevel: true,
  facetDepth: 6,
  showSwatches: true,
  allowExternalUrlParams: false,
  swatchMap: {},
  onEvent: function onEvent() {},
  getCategoryId: function getCategoryId() {
    return encodeURIComponent(window.UnbxdAnalyticsConf["page"]) || decodeURIComponent(location.pathname.split('category-path')[1].split('/').pop());
  },
  setCategoryId: function setCategoryId(param, self) {
    //const page = self.setCategoryFilter(param)[param.parent].join(">");
    var level = param.level,
      parent = param.parent,
      name = param.name,
      action = param.action;
    var page = "";
    var fPath = "";
    var pathArr = [];
    var l = Number(level);
    var breadCrumbs = self.getBreadCrumbsList();
    breadCrumbs.forEach(function (element, i) {
      var filterField = element.filterField,
        value = element.value;
      fPath = filterField;
      if (l > i) {
        pathArr.push(value);
      }
    });
    if (l > breadCrumbs.length) {
      pathArr.push(name);
    }
    page = pathArr.join(">");
    if (window.UnbxdAnalyticsConf) {
      window.UnbxdAnalyticsConf.page = page;
    }
  },
  applyMultipleFilters: false,
  hashMode: false,
  pagination: {
    type: "INFINITE_SCROLL"
  },
  onQueryRedirect: function onQueryRedirect(self, redirect, urlBeforeRedirect) {
    if (redirect) {
      var value = redirect.value,
        type = redirect.type;
      if (type === "url") {
        /** If opening in same tab */
        if (history.state && history.state.replace) {
          history.replaceState(null, "", urlBeforeRedirect);
        }
        location.href = value;

        /** If opening redirect in new tab (rare scenario), 
         * then browser back + history push on search should be handled by client 
         * (especially switching betsween category to search page scenarios)
         * Note: This is not recommended */
      }

      return false;
    }
  },
  onBackFromRedirect: function onBackFromRedirect(hashMode) {
    var urlSearchParam = new URLSearchParams(hashMode ? location.hash.substring(1) : location.search);
    var backFromRedirect = urlSearchParam.get("redirected");
    if (backFromRedirect) {
      history.go(-1);
    }
  },
  onNoUnbxdKeyRouting: function onNoUnbxdKeyRouting() {
    history.go();
  },
  setRoutingStrategies: function setRoutingStrategies(locationParam, newUrl, productType, isUnbxdKey, replace) {
    if (locationParam === newUrl) {
      return;
    } else if (productType === "CATEGORY") {
      /** Do not navigate to base category page  */
      if (!isUnbxdKey) {
        history.replaceState(null, "", newUrl);
      } else {
        history.pushState(null, "", newUrl);
      }
    } else {
      if (history.state && history.state.replace || replace) {
        history.replaceState(null, "", newUrl);
      } else {
        history.pushState(null, "", newUrl);
      }
    }
  }
};
/* harmony default export */ var config = (config_options);
// CONCATENATED MODULE: ../search-JS-core/src/modules/url/getBaseUrl.js
/* harmony default export */ var getBaseUrl = (function () {
  var _this$options = this.options,
    searchEndPoint = _this$options.searchEndPoint,
    siteKey = _this$options.siteKey,
    apiKey = _this$options.apiKey;
  return searchEndPoint + apiKey + "/" + siteKey;
});
;
// CONCATENATED MODULE: ../search-JS-core/src/modules/url/extraParamsFromUrlToString.js
/* harmony default export */ var extraParamsFromUrlToString = (function () {
  var extraParams = this.options.extraParams;
  var str = "";
  var keys = Object.keys(extraParams);
  keys.forEach(function (key) {
    str += "&" + key + "=" + extraParams[key];
  });
  return str;
});
;
// CONCATENATED MODULE: ../search-JS-core/src/utils/urlUtils.js
var urlUtils = {
  encodeQueryParam: function encodeQueryParam() {
    var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    if (typeof p !== "string") return p;
    p = p.trim();
    p = p.replace(/\%26/gmi, "&");
    p = encodeURIComponent(p);
    p = p.replace(/\%20/gmi, "+");
    p = p.replace(/\++/gmi, "+");
    return p;
  },
  decodeQueryParam: function decodeQueryParam() {
    var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    if (typeof p !== "string") return p;
    p = p.replace(/\+/gmi, " ");
    p = p.replace(/\s{2,}/gmi, " ");
    p = decodeURIComponent(p);
    return p.trim();
  }
};
/* harmony default export */ var utils_urlUtils = (urlUtils);
// CONCATENATED MODULE: ../search-JS-core/src/modules/url/setStateFromUrl.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/* harmony default export */ var setStateFromUrl = (function () {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var loadFromUrl = false;
  var urlParts = this.getQueryParams(url);
  var _this$options = this.options,
    pagination = _this$options.pagination,
    searchQueryParam = _this$options.searchQueryParam,
    browseQueryParam = _this$options.browseQueryParam,
    productType = _this$options.productType;
  var queryParam = searchQueryParam;
  if (productType !== 'SEARCH') {
    queryParam = browseQueryParam;
    urlParts[queryParam] = this.getCategoryId();
  }
  if (_typeof(urlParts) === 'object' && urlParts[queryParam]) {
    var q = urlParts.q,
      filter = urlParts.filter,
      sort = urlParts.sort,
      start = urlParts.start,
      page = urlParts.page,
      count = urlParts.count;
    loadFromUrl = true;
    if (this.state.userInput !== q) {
      this.state.userInput = utils_urlUtils.decodeQueryParam(q);
    }
    var facets = this.getFilterFromParams(filter);
    this.state.rangeFacet = facets.rangeFacet;
    this.state.selectedFacets = facets.selectedFilters;
    this.state.selectedSort = sort ? decodeURIComponent(sort) : "";
    if (this.options.pagination.usePageAndCount) {
      this.state.startPageNo = page ? (page - 1) * count : 0;
    } else {
      this.state.startPageNo = start ? start : 0;
    }
    this.state.isBack = false;
    if (pagination.type === "CLICK_N_SCROLL") {
      this.state.startPageNo = 0;
    }
    this.state.pageSize = urlParts.rows ? Number(urlParts.rows) : this.options.pageSize;
    this.state.categoryFilter = this.getCategoryFilterFromParams(urlParts);
    if (loadFromUrl) {
      this.getResults();
    }
  }
});
;
// CONCATENATED MODULE: ../search-JS-core/src/modules/url/getQueryParams.js
/* harmony default export */ var getQueryParams = (function (pathState) {
  var _this$options = this.options,
    searchQueryParam = _this$options.searchQueryParam,
    hashMode = _this$options.hashMode;
  var q = this.options.hashMode ? location.hash : location.search;
  var uri = q.substr(1);
  if (pathState) {
    uri = pathState;
  }
  var splited = uri.split('&');
  var chunks = [];
  splited.forEach(function (item, index) {
    if (item.indexOf("=") > 0) {
      chunks.push(item);
    } else {
      chunks[index - 1] = chunks[index - 1] + "&" + item;
    }
  });
  var params = {};
  for (var i = 0; i < chunks.length; i++) {
    var chunk = chunks[i].split('=');
    if (typeof params[chunk[0]] === 'undefined') {
      params[chunk[0]] = chunk[1];
    } else {
      if (typeof params[chunk[0]] === "string") {
        params[chunk[0]] = [params[chunk[0]]];
        params[chunk[0]].push(chunk[1]);
      } else {
        params[chunk[0]].push(chunk[1]);
      }
    }
  }
  return params;
});
;
// CONCATENATED MODULE: ../search-JS-core/src/modules/url/getDefaultFiltersString.js
/* harmony default export */ var getDefaultFiltersString = (function () {
  var str = "";
  var filters = this.options.defaultFilters;
  if (filters !== null) {
    var keys = Object.keys(filters);
    keys.forEach(function (item) {
      str += "&filter=" + item + ":" + JSON.stringify(filters[item]);
    });
  }
  return str;
});
;
// CONCATENATED MODULE: ../search-JS-core/src/modules/url/facetsToUrlString.js
/* harmony default export */ var facetsToUrlString = (function () {
  var facetUrl = "";
  var selectedFacets = this.state.selectedFacets;
  var defaultFilters = this.options.defaultFilters || {};
  var keys = Object.keys(selectedFacets);
  var doubleStr = "%22";
  keys.forEach(function (key, indexKey) {
    var facet = selectedFacets[key];
    /** Remove unnecessary &filter from url */
    if (facet.length) {
      facetUrl += "&filter=";
    }
    // facetUrl += indexKey < (keys.length - 1) ? `&filter=` : "";
    facet.forEach(function (item, index) {
      var name = item.name,
        dataId = item.dataId;
      if (defaultFilters[key] !== undefined && defaultFilters[key] === name) {
        return;
      }
      name = "".concat(doubleStr).concat(dataId).concat(doubleStr);
      if (index === 0) {
        facetUrl += "".concat(key, ":").concat(name);
      } else {
        facetUrl += " OR ".concat(key, ":").concat(name);
      }
    });
  });
  return facetUrl;
});
// CONCATENATED MODULE: ../search-JS-core/src/modules/url/getShowVariantsUrlString.js
/* harmony default export */ var getShowVariantsUrlString = (function () {
  var variants = this.options.variants;
  return variants && typeof variants.enabled === "boolean" ? "&variants=".concat(variants.enabled) : "";
});
;
// CONCATENATED MODULE: ../search-JS-core/src/modules/url/getVariantAttributesUrlString.js
/* harmony default export */ var getVariantAttributesUrlString = (function () {
  var variants = this.options.variants;
  if (variants) {
    var enabled = variants.enabled,
      attributes = variants.attributes;
    return attributes && enabled ? "&variants.fields=".concat(attributes.join(",")) : "";
  }
  return "";
});
;
// CONCATENATED MODULE: ../search-JS-core/src/modules/url/getVariantsCountUrlString.js
/* harmony default export */ var getVariantsCountUrlString = (function () {
  var variants = this.options.variants;
  if (variants) {
    var enabled = variants.enabled,
      count = variants.count;
    return count && enabled ? "&variants.count=".concat(count) : "";
  }
  return "";
});
;
// CONCATENATED MODULE: ../search-JS-core/src/modules/url/getVariantsGroupByUrlString.js
/* harmony default export */ var getVariantsGroupByUrlString = (function () {
  var variants = this.options.variants;
  if (variants) {
    var enabled = variants.enabled,
      groupBy = variants.groupBy;
    return groupBy && enabled ? "&variants.groupBy=".concat(groupBy) : "";
  }
  return "";
});
;
// CONCATENATED MODULE: ../search-JS-core/src/modules/url/getProductAttributesUrlString.js
/* harmony default export */ var getProductAttributesUrlString = (function () {
  if (this.options.productAttributes) {
    return "&fields=" + this.options.productAttributes.join(",");
  }
  return "";
});
;
// CONCATENATED MODULE: ../search-JS-core/src/modules/url/getPageSizeUrlString.js
/* harmony default export */ var getPageSizeUrlString = (function () {
  var api = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  // if(this.options.pagination.usePageAndCount){
  //     return `&count=${this.state.pageSize}`;
  // } else {
  //     return `&rows=${this.state.pageSize}`;
  // }

  if (!api && this.options.pagination.usePageAndCount) {
    return "&count=".concat(this.state.pageSize);
  } else {
    return "&rows=".concat(this.state.pageSize);
  }
});
;
// CONCATENATED MODULE: ../search-JS-core/src/modules/url/getPaginationStartUrlString.js
/* harmony default export */ var getPaginationStartUrlString = (function () {
  var api = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  // if(this.options.pagination.usePageAndCount){
  //     return "&page="+(Math.floor(this.state.startPageNo/this.state.pageSize)+ 1);
  // } else {
  //     return "&start="+this.state.startPageNo;
  // }

  if (!api && this.options.pagination.usePageAndCount) {
    return "&page=" + (Math.floor(this.state.startPageNo / this.state.pageSize) + 1);
  } else {
    return "&start=" + this.state.startPageNo;
  }
});
;
// CONCATENATED MODULE: ../search-JS-core/src/modules/url/getNewUrlState.js

/* harmony default export */ var getNewUrlState = (function (fetchApiUrl) {
  var _this$options = this.options,
    productType = _this$options.productType,
    searchQueryParam = _this$options.searchQueryParam,
    browseQueryParam = _this$options.browseQueryParam;
  var value = this.state.userInput;
  var pagetype = '';
  var qParam = searchQueryParam;
  if (productType === "BROWSE") {
    pagetype = "";
    value = this.getCategoryId();
    var queryString = '/category?';
    qParam = browseQueryParam;
    this.url = this.getBaseUrl() + queryString + qParam + "=".concat(value);
  }
  if (productType === "CATEGORY") {
    pagetype = "&pagetype=boolean";
    value = this.getCategoryId();
    var _queryString = '/category?';
    qParam = browseQueryParam;
    this.url = this.getBaseUrl() + _queryString + qParam + "=".concat(value);
  }
  if (productType === "SEARCH") {
    var _queryString2 = '/search?';
    this.url = this.getBaseUrl() + _queryString2 + qParam + '=' + utils_urlUtils.encodeQueryParam(value);
  }
  var facetsUrlString = this.urlFlattenFacets();
  var showVariantsStr = this.getShowVariantsStr();
  var variantAttributesStr = this.getVariantAttributesStr();
  var variantsCountStr = this.getVariantsCountStr();
  var variantsGroupByStr = this.getVariantsGroupByStr();
  var productAttributesStr = this.getProductAttributesStr() + this.getDefaultFiltersStr();
  var sortStr = this.getSortUrlString();
  var spellCheckUrlString = this.getSpellCheckUrlString();
  var rangeFilterUrlStr = this.getRangeFilterStr();
  var categoryFilterStr = this.categoryFilterUrlStr();
  var ucParam = this.getUcParamUrlString();
  var fctmulty = this.options.facetMultiSelect ? "&facet.multiselect=true" : "&facet.multiselect=false";
  var facetV2 = "&facet.version=V2";
  var apiUrl = this.url + categoryFilterStr + fctmulty + facetsUrlString + showVariantsStr + variantAttributesStr + variantsCountStr + variantsGroupByStr + productAttributesStr + sortStr + spellCheckUrlString + rangeFilterUrlStr + pagetype + this.getPageSizeStr(true) + this.getPageStartStr(true) + this.extraParamUrlString() + facetV2 + (ucParam ? ucParam : "");
  var webUrl = this.url + categoryFilterStr +
  // fctmulty +
  facetsUrlString +
  // showVariantsStr +
  // variantsCountStr +
  // variantsGroupByStr +
  sortStr +
  // spellCheckUrlString+
  rangeFilterUrlStr +
  // pagetype+
  this.getPageSizeStr() + this.getPageStartStr();
  // this.extraParamUrlString()+
  // facetV2;

  this.state.currentApiUrl = apiUrl;
  this.state.currentWebUrl = webUrl;
  if (fetchApiUrl) {
    return apiUrl;
  } else {
    return webUrl;
  }
});
;
// CONCATENATED MODULE: ../search-JS-core/src/modules/url/getRangeFilterString.js
/* harmony default export */ var getRangeFilterString = (function () {
  var rangeFacet = this.state.rangeFacet;
  var keysMap = Object.keys(rangeFacet);
  var str = "";
  keysMap.forEach(function (item) {
    var range = rangeFacet[item];
    if (Array.isArray(range)) {
      if (range.length > 0) {
        str += "&filter=".concat(item, ":").concat(range.join(" OR ".concat(item, ":")));
      }
    } else {
      str += "&filter=".concat(item, ":").concat(range);
    }
  });
  return str;
});
;
// CONCATENATED MODULE: ../search-JS-core/src/modules/url/categoryFilterUrlString.js
/* harmony default export */ var categoryFilterUrlString = (function () {
  var _this = this;
  var categoryFilter = this.state.categoryFilter;
  var str = "";
  var keys = Object.keys(categoryFilter);
  var doubleQuotes = "%22";
  keys.forEach(function (key, index) {
    var selectedCategory = _this.getAFacetByName(key)[0];
    var breadcrumbList = _this.getBreadCrumbsList(key);
    var selectedVal = null;
    if (selectedCategory) {
      var categoryFilterKey = "";
      var filterField = selectedCategory.filterField,
        values = selectedCategory.values;
      if (filterField) {
        categoryFilterKey = selectedCategory;
      }
      var valStr = categoryFilter[key].map(function (item, index) {
        selectedVal = values.find(function (val) {
          return _this.cleanFacetValue(encodeURIComponent(val.name)) === _this.cleanFacetValue(item);
        });
        if (breadcrumbList) {
          var selecteditem = breadcrumbList.find(function (crumb) {
            return crumb.value === item;
          });
          if (selecteditem) {
            selectedVal = {
              name: selecteditem.value
            };
          }
        }
        var it = item;
        if (selectedVal) {
          it = _this.encodeCategoryFacetValue(selectedVal.name).split(doubleQuotes).join("");
        }
        if (index > 0) {
          it = ">".concat(_this.encodeCategoryFacetValue(item).split(doubleQuotes).join(""));
        } else {
          it = _this.encodeCategoryFacetValue(item).split(doubleQuotes).join("");
        }
        return it;
      });
      //category-filter specific code
      if (filterField === "categoryPath") {
        str += "&category-filter=".concat(valStr.join(""));
        //category-filter specific code
      } else {
        str += "&filter=".concat(filterField, ":\"").concat(valStr.join(""), "\"");
      }
    } else {
      //category-filter specific code
      if (categoryFilter && categoryFilter["categoryPath"]) {
        var vals = "";
        categoryFilter.categoryPath.forEach(function (item, i) {
          var valArr = item.split(">");
          valArr.forEach(function (item, i) {
            var dVal = _this.encodeCategoryFacetValue(item).split("%22").join("");
            if (vals !== "") {
              vals += ">".concat(dVal);
            } else {
              vals = dVal;
            }
          });
        });
        str += "&category-filter=".concat(vals);
      }
    }
  });
  return str;
});
;
// CONCATENATED MODULE: ../search-JS-core/src/modules/url/getSortUrlString.js
/* harmony default export */ var getSortUrlString = (function () {
  var selectedSort = this.getSelectedSort();
  if (selectedSort) {
    return "&sort=" + encodeURI(selectedSort);
  }
  return "";
});
;
// CONCATENATED MODULE: ../search-JS-core/src/modules/url/getSpellCheckUrlString.js
/* harmony default export */ var getSpellCheckUrlString = (function () {
  if (this.options.spellCheck.enabled) {
    return "&spellcheck=" + true;
  }
  return "";
});
;
// CONCATENATED MODULE: ../search-JS-core/src/modules/url/getStateFromUrl.js
function getStateFromUrl_typeof(obj) { "@babel/helpers - typeof"; return getStateFromUrl_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, getStateFromUrl_typeof(obj); }
/* harmony default export */ var getStateFromUrl = (function () {
  var urlParts = this.getQueryParams();
  var qState = {};
  var pageSize = this.options.pagesize.pageSize;
  if (getStateFromUrl_typeof(urlParts) === 'object') {
    var q = urlParts.q,
      filter = urlParts.filter,
      sort = urlParts.sort,
      start = urlParts.start,
      page = urlParts.page,
      _urlParts$count = urlParts.count,
      count = _urlParts$count === void 0 ? pageSize : _urlParts$count,
      _urlParts$rows = urlParts.rows,
      rows = _urlParts$rows === void 0 ? pageSize : _urlParts$rows;
    if (this.state.userInput !== q) {
      qState.userInput = q;
    }
    var facets = this.getFilterFromParams(filter);
    qState.rangeFacet = facets.rangeFacet;
    qState.selectedFacets = facets.selectedFilters;
    qState.selectedSort = sort ? sort : "";
    if (this.options.pagination.usePageAndCount) {
      qState.startPageNo = page ? (page - 1) * count : 0;
    } else {
      qState.startPageNo = start ? start : 0;
    }

    // qState.startPageNo = start? start:0;
    qState.pageSize = Number(rows);
    qState.categoryFilter = this.getCategoryFilterFromParams(urlParts);
  }
  return qState;
});
;
// CONCATENATED MODULE: ../search-JS-core/src/modules/url/getUcParamUrlString.js
/* harmony default export */ var getUcParamUrlString = (function () {
  var urlParts = this.getQueryParams();
  if (urlParts.uc_param) {
    return "&uc_param=" + urlParts.uc_param;
  }
});
;
// CONCATENATED MODULE: ../search-JS-core/src/modules/url/index.js




















var methods = {
  extraParamUrlString: extraParamsFromUrlToString,
  renderFromUrl: setStateFromUrl,
  getQueryParams: getQueryParams,
  urlFlattenFacets: facetsToUrlString,
  getDefaultFiltersStr: getDefaultFiltersString,
  getShowVariantsStr: getShowVariantsUrlString,
  getVariantAttributesStr: getVariantAttributesUrlString,
  getVariantsCountStr: getVariantsCountUrlString,
  getVariantsGroupByStr: getVariantsGroupByUrlString,
  getProductAttributesStr: getProductAttributesUrlString,
  getPageSizeStr: getPageSizeUrlString,
  getPageStartStr: getPaginationStartUrlString,
  getNewUrlState: getNewUrlState,
  getRangeFilterStr: getRangeFilterString,
  categoryFilterUrlStr: categoryFilterUrlString,
  getSortUrlString: getSortUrlString,
  getSpellCheckUrlString: getSpellCheckUrlString,
  getBaseUrl: getBaseUrl,
  getStateFromUrl: getStateFromUrl,
  getUcParamUrlString: getUcParamUrlString
};
var urlMethods = function urlMethods(prototype) {
  prototype = Object.assign(prototype, methods);
};

// CONCATENATED MODULE: ../search-JS-core/src/modules/pagination/setPageStart.js
/**
* @description 
<pre>
    <code>
        setPageStart(12)
    </code>
</pre>
* to set the pagination in state
* @method setPageStart(pageNo)
*/
/* harmony default export */ var setPageStart = (function (pageNo) {
  this.state.startPageNo = pageNo;
});
;
// CONCATENATED MODULE: ../search-JS-core/src/modules/pagination/getPaginationInfo.js
/**
 * @description 
 <pre>
 <code>
 getPaginationInfo()
 </code>
 </pre>
 * to get the pagination data from response
 * @method getPaginationInfo
 */
/* harmony default export */ var getPaginationInfo = (function () {
  var resp = this.getSearchResults();
  if (!resp) {
    return null;
  }
  var numberOfProducts = resp.numberOfProducts,
    start = resp.start,
    products = resp.products;
  var rows = this.state.pageSize;
  var noOfPages = 0;
  if (numberOfProducts > 0) {
    if (numberOfProducts % rows === 0) {
      noOfPages = numberOfProducts / rows;
    } else {
      noOfPages = Math.floor(numberOfProducts / rows) + 1;
    }
  }
  var currentPage = Math.floor(start / rows) + 1;
  var isNext = start + rows >= numberOfProducts || start >= numberOfProducts ? false : true;
  var isPrev = start - rows < 0 || start <= 0 ? false : true;
  return {
    numberOfProducts: numberOfProducts,
    start: start,
    productsLn: products.length,
    rows: rows,
    noOfPages: noOfPages,
    currentPage: currentPage || 0,
    isNext: isNext,
    isPrev: isPrev
  };
});
;
// CONCATENATED MODULE: ../search-JS-core/src/modules/pagination/setPageSize.js
/**
* @description 
<pre>
    <code>
        setPageStart(12)
    </code>
</pre>
* to set the number of products in state
* @method pageSize(pageNo)
*/
/* harmony default export */ var pagination_setPageSize = (function (nProducts) {
  if (typeof nProducts === 'number' && nProducts === parseInt(nProducts)) {
    this.state.pageSize = nProducts;
    this.state.startPageNo = 0;
  }
});
;
// CONCATENATED MODULE: ../search-JS-core/src/modules/pagination/index.js



var pagination_setPaginationMethods = function setPaginationMethods(prototype) {
  Object.assign(prototype, {
    setPageStart: setPageStart,
    getPaginationInfo: getPaginationInfo,
    setPageSize: pagination_setPageSize
  });
};

// CONCATENATED MODULE: ../search-JS-core/src/modules/search/setProductAttributes.js
/* harmony default export */ var setProductAttributes = (function (requiredFields) {
  if (Array.isArray(requiredFields)) {
    this.options.productAttributes = requiredFields;
  } else {
    this.options.productAttributes = '*';
  }
});
;
// CONCATENATED MODULE: ../search-JS-core/src/modules/search/setShowVariants.js
/* harmony default export */ var setShowVariants = (function (isVariant) {
  var _this$options$variant = this.options.variants,
    variants = _this$options$variant === void 0 ? {} : _this$options$variant;
  if (typeof isVariant === 'boolean') {
    variants.enabled = isVariant;
  }
  this.options.variants = variants;
});
;
// CONCATENATED MODULE: ../search-JS-core/src/modules/search/setVariantsCount.js
/* harmony default export */ var setVariantsCount = (function (nVariants) {
  var _this$options$variant = this.options.variants,
    variants = _this$options$variant === void 0 ? {} : _this$options$variant;
  if (typeof nVariants === 'number') {
    variants.count = nVariants;
  }
  this.options.variants = variants;
});
;
// CONCATENATED MODULE: ../search-JS-core/src/modules/search/setVariantAttributes.js
/* harmony default export */ var setVariantAttributes = (function (requiredFields) {
  var _this$options$variant = this.options.variants,
    variants = _this$options$variant === void 0 ? {} : _this$options$variant;
  if (Array.isArray(requiredFields)) {
    variants.attributes = requiredFields;
  }
  this.options.variants = variants;
});
;
// CONCATENATED MODULE: ../search-JS-core/src/modules/search/setVariantsGroupBy.js
/* harmony default export */ var setVariantsGroupBy = (function (field) {
  var _this$options$variant = this.options.variants,
    variants = _this$options$variant === void 0 ? {} : _this$options$variant;
  if (typeof field === 'string' && field.length > 0) {
    variants.groupBy = field;
  }
  this.options.variants = variants;
});
;
// CONCATENATED MODULE: ../search-JS-core/src/modules/search/getSearchMetaDetails.js
/* harmony default export */ var getSearchMetaDetails = (function () {
  return this.state.responseObj && this.state.responseObj.searchMetaData || null;
});
;
// CONCATENATED MODULE: ../search-JS-core/src/modules/search/getSearchResults.js
/**
* @description 
<pre>
    <code>
        getSearchResults()
    </code>
</pre>
* to get the loaded results from state
* @method getSearchResults
*/
/* harmony default export */ var getSearchResults = (function () {
  var responseObj = this.getResponseObj();
  if (responseObj) {
    var response = responseObj.response;
    return response || null;
  } else {
    return null;
  }
});
;
// CONCATENATED MODULE: ../search-JS-core/src/modules/search/getSearchQueryParams.js
/* harmony default export */ var getSearchQueryParams = (function () {
  var searchMeta = this.getSearchMeta();
  if (searchMeta) {
    return searchMeta.queryParams || null;
  }
  return null;
});
;
// CONCATENATED MODULE: ../search-JS-core/src/modules/search/getSearchQuery.js
/* harmony default export */ var getSearchQuery = (function () {
  if (this.state.responseObj) {
    var queryParams = this.state.responseObj.searchMetaData.queryParams;
    return queryParams.q || queryParams.p;
  }
  return "";
});
;
// CONCATENATED MODULE: ../search-JS-core/src/constants/libEvents.js
var libEvents = {
  changeInput: "CHANGE_INPUT",
  fetchError: "FETCH_ERROR",
  afterApiCall: "AFTER_API_CALL",
  beforeApiCall: "BEFORE_API_CALL"
};
/* harmony default export */ var constants_libEvents = (libEvents);
// CONCATENATED MODULE: ../search-JS-core/src/constants/index.js


// CONCATENATED MODULE: ../search-JS-core/src/modules/search/getResultsFromApi.js
function getResultsFromApi_typeof(obj) { "@babel/helpers - typeof"; return getResultsFromApi_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, getResultsFromApi_typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return getResultsFromApi_typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (getResultsFromApi_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (getResultsFromApi_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



/**
* @description 
<pre>
    <code>
        getResults()
    </code>
    <code>
        optional : getResults('shirt')
    </code>
</pre>
* to fetch the results from api
* It can accept search term as parameter
* @method getResults
*/

/* harmony default export */ var getResultsFromApi = (function () {
  var _this = this;
  var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var newUrl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var action = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  var _this$state = this.state,
    userInput = _this$state.userInput,
    isHistory = _this$state.isHistory,
    isBack = _this$state.isBack;
  var newVal = query === "" ? userInput : query;
  this.state.userInput = newVal;
  this.state.currentApiUrl = this.getNewUrlState(true);
  if (this.state.isLoading) {
    return false;
  }
  this.state.isLoading = true;
  var self = this;
  var _this$options = this.options,
    productType = _this$options.productType,
    hashMode = _this$options.hashMode,
    updateUrls = _this$options.updateUrls,
    variants = _this$options.variants;
  if (!hashMode && updateUrls && !isHistory && !isBack) {
    this.state.isBack = false;
    var q = this.state.currentWebUrl.split("".concat(productType.toLocaleLowerCase(), "?"))[1];
    if (decodeURIComponent(location.search) !== "?".concat(utils_urlUtils.decodeQueryParam(q))) {
      this.setUrl(true);
      return false;
    }
  }
  var spellCheck = this.options.spellCheck;
  this.callBack(this, constants_libEvents.beforeApiCall);
  var fetchPromise = fetch(this.state.currentApiUrl);
  var errorHandler = function errorHandler(error) {
    _this.state.isLoading = false;
    _this.state.userInput = newVal;
    if (error) {
      _this.callBack(self, error);
    }
  };
  fetchPromise.then(function (response) {
    _this.state.requestId = response && response.headers ? response.headers.get('X-Request-Id') : '';
    return response.json();
  }).then(function (respJson) {
    _this.state.isLoading = false;
    _this.state.userInput = newVal;
    if (respJson && !respJson.error) {
      if (variants && variants.enabled) {
        respJson = _this.processVariantMap(respJson);
      }
      _this.state.responseObj = respJson;
      var didYouMean = _this.getDidYouMeanFromResponse();
      if (didYouMean) {
        _this.state.didYouMean = didYouMean;
        _this.state.noResultQuery = _this.state.userInput;
      }
      var _respJson = respJson,
        facets = _respJson.facets,
        response = _respJson.response;
      if (facets) {
        var facetsList = _this.getFacets();
        var newListFacet = _this.modifyFacetsList(facetsList);
        respJson.facets = _objectSpread(_objectSpread({}, facets), {}, {
          text: {
            list: newListFacet
          }
        });
      }
      if (response) {
        var products = response.products;
        var _this$options$paginat = _this.options.pagination,
          pagination = _this$options$paginat === void 0 ? {} : _this$options$paginat;
        if (pagination.type === "CLICK_N_SCROLL") {
          _this.state.products = _this.state.products.concat(products);
        } else if (pagination.type === "INFINITE_SCROLL") {
          if (action === "prev") {
            _this.state.products = [].concat(_toConsumableArray(products), _toConsumableArray(_this.state.products));
          } else {
            _this.state.products = [].concat(_toConsumableArray(_this.state.products), _toConsumableArray(products));
          }
        } else if (pagination.type === "FIXED_SCROLL") {
          _this.state.products = products;
        }
      }
      _this.state.responseObj = respJson;
      _this.setSort();
      //this.setStateFromData();
      if (updateUrls && isHistory && !isBack) {
        _this.state.isBack = false;
        _this.setUrl(false);
        /** Selected facets are fetched from the url(without count)->
         * Search api is fired based on these ->
         * Count is now available in state, and facets ui should reflect it
         */
        _this.updateSelectedFacetsCount();
      }
      _this.callBack(self, constants_libEvents.afterApiCall);
    } else {
      errorHandler(constants_libEvents.fetchError);
    }
  })["catch"](function (error) {
    errorHandler(constants_libEvents.fetchError);
  });
});
;
// CONCATENATED MODULE: ../search-JS-core/src/modules/search/processVariantMap.js
/* harmony default export */ var processVariantMap = (function () {
  var resp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var self = this;
  var _self$options$variant = self.options.variants.mapping,
    mapping = _self$options$variant === void 0 ? {} : _self$options$variant;
  var vMap = mapping;
  var obArr = Object.keys(vMap);
  if (resp.response && resp.response.products) {
    var mappedProducts = resp.response.products.map(function (item) {
      var _item = item,
        _item$variants = _item.variants,
        variants = _item$variants === void 0 ? [] : _item$variants,
        relevantDocument = _item.relevantDocument;
      var newObj = item;
      if (relevantDocument === "variant" && variants.length > 0) {
        item = variants[0];
        obArr.forEach(function (keyItem) {
          var mapKey = vMap[keyItem];
          newObj[keyItem] = item[mapKey];
        });
      }
      var mappedVariants = [];
      variants.forEach(function (item, i) {
        var mItem = item;
        obArr.forEach(function (keyItem) {
          var mapKey = vMap[keyItem];
          if (mapKey) {
            mItem[keyItem] = item[mapKey];
          }
        });
        mappedVariants.push(mItem);
      });
      newObj.variants = mappedVariants;
      return newObj;
    });
    resp.response.products = mappedProducts;
  }
  return resp;
});
;
// CONCATENATED MODULE: ../search-JS-core/src/modules/search/getProductByPropValue.js
/**
* @description 
<pre>
    <code>
        getProductByPropValue(uniqueId , 'u123344')
    </code>
</pre>
* to get a specific object from response using a property and value
* @param {string} prop eg: "uniqueId
* @param {string} value eg:'100'
* @method getProductByPropValue
*/
/* harmony default export */ var getProductByPropValue = (function (prop, value) {
  var products = this.state.products;
  return products.find(function (item) {
    return item[prop] === value;
  });
});
;
// CONCATENATED MODULE: ../search-JS-core/src/modules/search/setStateFromData.js
/* harmony default export */ var setStateFromData = (function () {
  var _this = this;
  var searchParams = this.getSearchQueryParams();
  var q = searchParams.q,
    filter = searchParams.filter;
  this.state.userInput = q;
  var filterArr = [];
  var replaceStr = "__";
  var colun = ":";
  if (filter) {
    if (Array.isArray(filter)) {
      filter.forEach(function (item, i) {
        var modItem = item.replaceAll(colun, replaceStr);
        modItem = encodeURIComponent(modItem).replaceAll(replaceStr, colun);
        filterArr.push(modItem);
      });
    } else {
      var modItem = filter.replaceAll(colun, replaceStr);
      modItem = encodeURIComponent(modItem).replaceAll(replaceStr, colun);
      filterArr = [modItem];
    }
    searchParams.filter = filterArr;
  }
  var facets = this.getFilterFromParams(filterArr);
  this.state.rangeFacet = facets.rangeFacet;
  var selectedFilters = facets.selectedFilters;
  var categoryFilterName = null;
  if (selectedFilters) {
    var facetKeys = Object.keys(selectedFilters);
    facetKeys.forEach(function (item) {
      if (_this.isCategoryFacet(item)) {
        categoryFilterName = item;
        var categoryVal = selectedFilters[item][0].dataId;
        _this.state.categoryFilter[categoryFilterName] = categoryVal.split(">");
        if (_this.state.selectedFacets[categoryFilterName]) {
          delete _this.state.selectedFacets[categoryFilterName];
        }
      } else {
        _this.state.selectedFacets[item] = selectedFilters[item];
      }
    });
  } else {
    this.state.selectedFacets = {};
  }
  var categoryFiltersL = Object.keys(this.state.categoryFilter).length;
  if (categoryFiltersL === 0) {
    this.state.categoryFilter = this.getCategoryFilterFromParams(searchParams);
  }
  this.state.breadcrumbs = this.getBreadCrumbs(categoryFilterName);
});
// CONCATENATED MODULE: ../search-JS-core/src/modules/search/setSearchConfigurations.js
function setSearchConfigurations(configurations) {
  var siteName = configurations.siteName,
    siteKey = configurations.siteKey,
    searchEndPoint = configurations.searchEndPoint,
    searchQueryParam = configurations.searchQueryParam,
    browseQueryParam = configurations.browseQueryParam,
    defaultFilters = configurations.defaultFilters,
    spellCheck = configurations.spellCheck,
    pageSize = configurations.pageSize,
    startPageNo = configurations.startPageNo,
    facetDepth = configurations.facetDepth,
    facetMultilevel = configurations.facetMultilevel,
    facetMultiSelect = configurations.facetMultiSelect,
    updateUrls = configurations.updateUrls,
    extraParams = configurations.extraParams,
    onEvent = configurations.onEvent,
    getCategoryId = configurations.getCategoryId,
    applyMultipleFilters = configurations.applyMultipleFilters,
    hashMode = configurations.hashMode;
  this.state.pageSize = pageSize || this.state.pageSize;
  this.state.startPageNo = startPageNo || this.state.startPageNo;
  this.options.siteName = siteName || this.options.siteName;
  this.options.siteKey = siteKey || this.options.siteKey;
  this.options.searchEndPoint = searchEndPoint || this.options.searchEndPoint;
  this.options.searchQueryParam = searchQueryParam || this.options.searchQueryParam;
  this.options.browseQueryParam = browseQueryParam || this.options.browseQueryParam;
  this.options.defaultFilters = defaultFilters || this.options.defaultFilters;
  this.options.spellCheck = spellCheck || this.options.spellCheck;
  this.options.pageSize = pageSize || this.options.pageSize;
  this.options.startPageNo = startPageNo || this.options.startPageNo;
  this.options.applyMultipleFilters = applyMultipleFilters || this.options.applyMultipleFilters;
  this.options.facetDepth = facetDepth || this.options.facetDepth;
  this.options.facetMultilevel = facetMultilevel || this.options.facetMultilevel;
  this.options.facetMultiSelect = facetMultiSelect || this.options.facetMultiSelect;
  this.options.updateUrls = updateUrls || this.options.updateUrls;
  this.options.extraParams = extraParams || this.options.extraParams;
  this.options.onEvent = onEvent || this.options.onEvent;
  this.options.getCategoryId = getCategoryId || this.options.getCategoryId;
  this.options.hashMode = hashMode || this.options.hashMode;
}
/* harmony default export */ var search_setSearchConfigurations = (setSearchConfigurations);
// CONCATENATED MODULE: ../search-JS-core/src/modules/search/index.js














var onLocationChange = function onLocationChange(evt) {
  var _this$state = this.state,
    urlState = _this$state.urlState,
    isHistory = _this$state.isHistory,
    unbxdKeys = _this$state.unbxdKeys;
  var hashMode = this.options.hashMode;
  var unbxdParam = this.checkIfUnbxdKey();
  if (hashMode) {
    if (decodeURIComponent(location.hash) !== "#".concat(decodeURIComponent(urlState))) {
      var _ref = history.state || {},
        path = _ref.path;
      this.state.isBack = true;
      /** Detect if back from a page with no unbxd param */
      // let unbxdParam = this.checkIfUnbxdKey();

      if (!unbxdParam) {
        /** Url is redirected via history state manipulation, but needs to be
         * reloaded as well
         * Use case: Base Home Page
         */
        this.options.onNoUnbxdKeyRouting();
        return;
      }
      this.renderFromUrl(evt.state);
    } else {
      this.callBack(this, "lastBack");
    }
  } else {
    if (isHistory) {
      var _ref2 = history.state || {},
        _path = _ref2.path;
      this.state.isBack = true;
      if (!unbxdParam) {
        /** Url is redirected via history state manipulation, but needs to be
         * reloaded as well
         * Use case: Base Home Page
         */
        this.options.onNoUnbxdKeyRouting();
        return;
      }
      this.renderFromUrl(evt.state);
    } else {
      this.callBack(this, "lastBack");
    }
  }
};
var getRequestId = function getRequestId() {
  var requestId = this.state.requestId;
  return requestId;
};
var search_setSearchMethods = function setSearchMethods(prototype) {
  prototype = Object.assign(prototype, {
    setProductAttributes: setProductAttributes,
    setShowVariants: setShowVariants,
    setVariantsCount: setVariantsCount,
    setVariantAttributes: setVariantAttributes,
    setVariantsGroupBy: setVariantsGroupBy,
    getSearchResults: getSearchResults,
    getSearchMeta: getSearchMetaDetails,
    getSearchQueryParams: getSearchQueryParams,
    getSearchQuery: getSearchQuery,
    getResults: getResultsFromApi,
    processVariantMap: processVariantMap,
    getProductByPropValue: getProductByPropValue,
    setStateFromData: setStateFromData,
    setSearchConfigurations: search_setSearchConfigurations,
    onLocationChange: onLocationChange,
    getRequestId: getRequestId
  });
};

// CONCATENATED MODULE: ../search-JS-core/src/modules/swatches/getSwatches.js
/* harmony default export */ var getSwatches = (function (product, map) {
  var swatches = {};
  var keys = Object.keys(map);
  keys.forEach(function (item) {
    var val = map[item];
    swatches[item] = product[val];
  });
  return swatches;
});
;
// CONCATENATED MODULE: ../search-JS-core/src/modules/swatches/index.js

var swatches_setSwatchMethods = function setSwatchMethods(prototype) {
  Object.assign(prototype, {
    getSwatches: getSwatches
  });
};

// CONCATENATED MODULE: ../search-JS-core/src/modules/facets/getBucketedFacets.js
/**
* @description 
* to get the multilevel facets
* @method getBucketedFacets
*/
/* harmony default export */ var getBucketedFacets = (function () {
  var resp = this.getResponseObj();
  if (resp && resp.facets && resp.facets.multilevel) {
    var bucket = resp.facets.multilevel.bucket || resp.facets.multilevel.list || [];
    return this.modifyFacetsList(bucket);
  }
  return [];
});
;
// CONCATENATED MODULE: ../search-JS-core/src/modules/facets/getFilterFromParams.js
/**
* @description 
* to get the applied filters from api response
* @method getFilterFromParams
*/
/* harmony default export */ var getFilterFromParams = (function () {
  var filters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var self = this;
  var selectedFilters = {};
  var rangeFacet = {};
  if (typeof filters === "string") {
    filters = Array(filters);
  }
  filters.forEach(function (filter, index) {
    var filterStrArr = filter.split("%20OR%20");
    filterStrArr.forEach(function (item, index) {
      var arr = item.split(/%3A(.+)/);
      if (arr.length === 3) {
        var rVal = decodeURIComponent(arr[1]);
        rVal = rVal.replace(/(^")|("$)/g, '').replace(/\"{2,}/g, '"').replace(/\\\"/g, '"').replace(/(^\[)|(\]$)/g, '');
        var isRange = arr[1].indexOf("TO") > 0 ? true : false;
        if (isRange) {
          var range = rVal.split(" TO ");
          var fName = arr[0];
          var val = "[".concat(Number(range[0]), " TO ").concat(Number(range[1]), "]");
          if (rangeFacet[fName]) {
            rangeFacet[fName].push(val);
          } else {
            rangeFacet[fName] = [val];
          }
          //"["+start+" TO "+ end +"]"
        } else {
          var _fName = arr[0];
          var fVal = arr[1];
          var cleanedFacetValue = self.cleanEncodedFacetValue(fVal);
          var decodedFval = self.decodeFacetValue(cleanedFacetValue);
          var facetInfo = self.getFacetByValue(_fName, decodedFval);
          var actualFound = facetInfo.actualFound;
          if (actualFound) {
            var facetName = facetInfo.facetName,
              selectedvalue = facetInfo.selectedvalue;
            if (selectedFilters[facetName]) {
              selectedFilters[facetName].push(selectedvalue);
            } else {
              selectedFilters[facetName] = Array(selectedvalue);
            }
          } else {
            var _facetName = facetInfo.facetName,
              _selectedvalue = facetInfo.selectedvalue;
            var name = _selectedvalue.name;
            var f = {
              name: name,
              dataId: cleanedFacetValue,
              count: 0
            };
            if (selectedFilters[_facetName]) {
              selectedFilters[_facetName].push(f);
            } else {
              selectedFilters[_facetName] = Array(f);
            }
          }
        }
      }
    });
  });
  return {
    selectedFilters: selectedFilters,
    rangeFacet: rangeFacet
  };
});
;
// CONCATENATED MODULE: ../search-JS-core/src/modules/facets/getCategoryFilterFromParams.js
/* harmony default export */ var getCategoryFilterFromParams = (function (searchParams) {
  var _this = this;
  var currentFilters = searchParams["filter"];

  //category-filter specific code
  var categorypathFilter = [];
  if (searchParams["category-filter"]) {
    currentFilters = searchParams["category-filter"];
    categorypathFilter = currentFilters.split(">");
  }
  //category-filter specific code

  if (!currentFilters) {
    return {};
  }
  if (!Array.isArray(currentFilters)) {
    currentFilters = [currentFilters];
  }
  currentFilters = this.getFilterFromParams(currentFilters).selectedFilters;
  var newObj = {};
  var facetKeys = Object.keys(currentFilters);
  facetKeys.forEach(function (item) {
    if (_this.isCategoryFacet(item)) {
      var categoryVal = currentFilters[item][0].dataId;
      newObj[item] = categoryVal.split(">");
    }
  });
  //category-filter specific code
  var categorypathFilterLength = categorypathFilter.length;
  if (categorypathFilterLength > 0) {
    if (categorypathFilter) {
      var catValues = [];
      categorypathFilter.forEach(function (item) {
        var dVal = decodeURIComponent(item);
        var catValArr = dVal.split(">");
        catValArr.forEach(function (val) {
          catValues.push(decodeURIComponent(val));
        });
      });
      newObj['categoryPath'] = catValues;
    }
  }
  //category-filter specific code
  return newObj;
});
;
// CONCATENATED MODULE: ../search-JS-core/src/modules/facets/getRangeFacets.js
/**
* @description 
* to get the Range facets from the api response
* @method getRangeFacets
*/
/* harmony default export */ var getRangeFacets = (function () {
  var responseObj = this.getResponseObj();
  if (responseObj) {
    var facets = responseObj.facets;
    if (facets && facets.range && facets.range.list) {
      return facets.range.list;
    } else {
      return [];
    }
  }
  return [];
});
;
// CONCATENATED MODULE: ../search-JS-core/src/modules/facets/getFacets.js
/**
* @description 
* to get the facets from api response
* @method getFacets
*/
/* harmony default export */ var getFacets = (function () {
  var responseObj = this.getResponseObj();
  if (responseObj) {
    var facets = responseObj.facets;
    if (facets && facets.text && facets.text.list) {
      return facets.text.list;
    } else {
      return [];
    }
  }
  return [];
});
;
// CONCATENATED MODULE: ../search-JS-core/src/modules/facets/getSelectedFacets.js
/**
* @description 
<pre>
    <code>
        getSelectedFacets()
    </code>
</pre>
* to get all the selected facets
* @method getSelectedFacets
*/
/* harmony default export */ var getSelectedFacets = (function () {
  var selectedFacets = this.state.selectedFacets;
  return selectedFacets;
});
;
// CONCATENATED MODULE: ../search-JS-core/src/modules/facets/getSelectedFacet.js
/**
* @description 
<pre>
    <code>
        getSelectedFacet(facetName)
    </code>
</pre>
* to get the whole facet information from facet name
* @param {string} name eg:facetName
* @method getSelectedFacet
*/
/* harmony default export */ var getSelectedFacet = (function (name) {
  var facets = this.getFacets();
  return facets.find(function (facet) {
    var facetName = facet.facetName;
    return facetName === name ? facet : null;
  });
});
;
// CONCATENATED MODULE: ../search-JS-core/src/modules/facets/updateFacets.js
/**
* @description 
<pre>
    <code>
        updateFacets({
            "selectedFacetName": "v_unbxd_parentcolours_uFilter",
            "selectedFacetId": "1",
            "facetData": {
                "facetName": "v_unbxd_parentcolours_uFilter",
                "filterField": "v_unbxd_parentcolours_uFilter",
                "values": [
                    {
                        "name": "white",
                        "count": 143,
                        "dataId": 1
                    },
                    {
                        "name": "black",
                        "count": 133,
                        "dataId": 3
                    },
                    {
                        "name": "beige",
                        "count": 70,
                        "dataId": 5
                    }
                ],
            "displayName": "Colour",
            "position": 1
        }
    })
    </code>
</pre>
* to set a filter value
* accepts an Object with 3  parameters
* @param {string} selectedFacetName eg: v_unbxd_parentcolours_uFilter 
* @param {string} selectedFacetId eg: '1'
* @param {object} facet facetData 
* @method updateFacets
*/
/* harmony default export */ var updateFacets = (function (selectedFacet) {
  var selectedFacets = this.state.selectedFacets;
  var selectedFacetName = selectedFacet.selectedFacetName;
  var selectedFacetId = "";
  var selectedFacetdataId = "";
  var selectedCount = 0;
  var selectedFacetVal = this.getSelectedFacetValue(selectedFacet);
  if (selectedFacetVal) {
    var name = selectedFacetVal.name,
      dataId = selectedFacetVal.dataId,
      count = selectedFacetVal.count;
    selectedFacetId = name;
    selectedFacetdataId = dataId;
    selectedCount = count;
  }
  if (this.isFacetAlreadyAdded(selectedFacetName, selectedFacetdataId)) {
    return false;
  }
  if (!selectedFacets[selectedFacetName]) {
    selectedFacets[selectedFacetName] = [{
      name: selectedFacetId,
      dataId: selectedFacetdataId,
      count: selectedCount
    }];
  } else {
    selectedFacets[selectedFacetName].push({
      name: selectedFacetId,
      dataId: selectedFacetdataId,
      count: selectedCount
    });
  }
  this.callBack(self, 'added_facet');
  if (!this.options.applyMultipleFilters) {
    this.setPageStart(0);
    this.getResults.bind(this)();
  }
});
;
// CONCATENATED MODULE: ../search-JS-core/src/modules/facets/applyFacets.js
/**
* @description 
<pre>
    <code>
        applyFacets({
            "selectedFacetName": "v_unbxd_parentcolours_uFilter",
            "selectedFacetId": "1",
            "facetData": {
                "facetName": "v_unbxd_parentcolours_uFilter",
                "filterField": "v_unbxd_parentcolours_uFilter",
                "values": [
                    {
                        "name": "white",
                        "count": 143,
                        "dataId": 1
                    },
                    {
                        "name": "black",
                        "count": 133,
                        "dataId": 3
                    },
                    {
                        "name": "beige",
                        "count": 70,
                        "dataId": 5
                    }
                ],
            "displayName": "Colour",
            "position": 1
        }
    })
    </code>
</pre>
* to set a filter value
* accepts an Object with 3  parameters
* @param {string} selectedFacetName eg: v_unbxd_parentcolours_uFilter 
* @param {string} selectedFacetId eg: '1'
* @param {object} facet facetData 
* @method updateFacets
*/
/* harmony default export */ var applyFacets = (function (applyFacets) {
  var selectedFacets = this.state.selectedFacets;
  this.clearFacets(false);
  Object.keys(applyFacets).map(function (facetName) {
    if (selectedFacets[facetName]) {
      delete selectedFacets[facetName];
    } else {
      selectedFacets[facetName] = applyFacets[facetName];
    }
  });
  this.setPageStart(0);
  this.getResults.bind(this)();
});
;
// CONCATENATED MODULE: ../search-JS-core/src/modules/facets/clearFacets.js
/**
* @description 
<pre>
    <code>
        clearFacets({
            "selectedFacetName": "v_unbxd_parentcolours_uFilter",
            "selectedFacetId": "1",
            "facetData": {
                "facetName": "v_unbxd_parentcolours_uFilter",
                "filterField": "v_unbxd_parentcolours_uFilter",
                "values": [
                    {
                        "name": "white",
                        "count": 143,
                        "dataId": 1
                    },
                    {
                        "name": "black",
                        "count": 133,
                        "dataId": 3
                    },
                    {
                        "name": "beige",
                        "count": 70,
                        "dataId": 5
                    }
                ],
            "displayName": "Colour",
            "position": 1
        }
    })
    </code>
</pre>
* to set a filter value
* accepts an Object with 3  parameters
* @param {string} selectedFacetName eg: v_unbxd_parentcolours_uFilter 
* @param {string} selectedFacetId eg: '1'
* @param {object} facet facetData 
* @method updateFacets
*/
/* harmony default export */ var clearFacets = (function () {
  var getResults = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var selectedFacets = this.state.selectedFacets;
  Object.keys(selectedFacets).map(function (facetName) {
    return delete selectedFacets[facetName];
  });
  if (getResults) {
    this.setPageStart(0);
    this.getResults.bind(this)();
  }
});
;
// CONCATENATED MODULE: ../search-JS-core/src/modules/facets/addFacets.js
function addFacets_toConsumableArray(arr) { return addFacets_arrayWithoutHoles(arr) || addFacets_iterableToArray(arr) || addFacets_unsupportedIterableToArray(arr) || addFacets_nonIterableSpread(); }
function addFacets_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function addFacets_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return addFacets_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return addFacets_arrayLikeToArray(o, minLen); }
function addFacets_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function addFacets_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return addFacets_arrayLikeToArray(arr); }
function addFacets_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
* @description 
<pre>
    <code>
        addFacets({
            "selectedFacetName": "v_unbxd_parentcolours_uFilter",
            "selectedFacetId": "1",
            "facetData": {
                "facetName": "v_unbxd_parentcolours_uFilter",
                "filterField": "v_unbxd_parentcolours_uFilter",
                "values": [
                    {
                        "name": "white",
                        "count": 143,
                        "dataId": 1
                    },
                    {
                        "name": "black",
                        "count": 133,
                        "dataId": 3
                    },
                    {
                        "name": "beige",
                        "count": 70,
                        "dataId": 5
                    }
                ],
            "displayName": "Colour",
            "position": 1
        }
    })
    </code>
</pre>
* to set a filter value
* accepts an Object with 3  parameters
* @param {string} selectedFacetName eg: v_unbxd_parentcolours_uFilter 
* @param {string} selectedFacetId eg: '1'
* @param {object} facet facetData 
* @method updateFacets
*/
/* harmony default export */ var addFacets = (function (facets) {
  var selectedFacets = this.state.selectedFacets;
  Object.keys(facets).map(function (facetName) {
    var oldFacetValues = selectedFacets[facetName] || [];
    selectedFacets[facetName] = [].concat(addFacets_toConsumableArray(oldFacetValues), addFacets_toConsumableArray(facets[facetName]));
    return;
  });
});
;
// CONCATENATED MODULE: ../search-JS-core/src/modules/facets/findSelectedFacet.js
/**
* @description 
* to get the selected facet values
* accepts a string
* @param {string} parent eg:color_facet 
* @method findSelectedFacet
*/
/* harmony default export */ var findSelectedFacet = (function (selected) {
  //items.findIndex(x => x.id == item.id);
  return this.state.selectedFacets[selected];
});
;
// CONCATENATED MODULE: ../search-JS-core/src/modules/facets/deleteCategoryFilter.js
/**
* @description 
<pre>
        <code>
        deleteCategoryFilter({
            "parent": "categoryPath",
            "level": "1",
            "name": "Top"
        })
        </code>
</pre>
* to clear a category filter 
* accepts an Object with 3  parameters
* @param {string} parent eg:categoryPath 
* @param {string} level eg:1
* @param {string} name eg:"Top"
* @method deleteCategoryFilter
*/
/* harmony default export */ var deleteCategoryFilter = (function () {
  var _this = this;
  var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _action$parent = action.parent,
    parent = _action$parent === void 0 ? null : _action$parent,
    _action$level = action.level,
    level = _action$level === void 0 ? null : _action$level,
    _action$name = action.name,
    name = _action$name === void 0 ? null : _action$name;
  if (level) {
    if (this.state.categoryFilter[parent]) {
      level = Number(level) - 1;
      if (level === 0) {
        delete this.state.categoryFilter[parent];
      } else {
        this.state.categoryFilter[parent].splice(level, 6);
      }
    } else {
      var checkCrumbs = this.getBreadCrumbsList(parent);
      if (level > 1) {
        var crumbs = [];
        this.state.categoryFilter[parent] = [];
        checkCrumbs.forEach(function (item, i) {
          if (i < level - 1) {
            var value = item.value;
            _this.state.categoryFilter[parent].push(value);
          }
        });
      }
    }
  }
});
;
// CONCATENATED MODULE: ../search-JS-core/src/modules/facets/deleteFacet.js
/**
* @description 
<pre>
        <code>
        deleteCategoryFilter({
            "parent": "categoryPath",
            "level": "1",
            "name": "Top"
        })
        </code>
</pre>
* to clear all the filters under a facet
* accepts an Object with 3  parameters
* @param {string} parent eg:categoryPath 
* @param {string} level eg:1
* @param {string} name eg:"Top"
* @method deleteCategoryFilter
*/
/* harmony default export */ var deleteFacet = (function (facetName, valueId) {
  var selectedFacets = this.getSelectedFacets();
  if (valueId) {
    var selectedValues = selectedFacets[facetName];
    this.state.selectedFacets[facetName] = selectedValues.filter(function (facetObj) {
      return facetObj.dataId != valueId;
    });
  } else {
    delete this.state.selectedFacets[facetName];
  }
  return this.state.selectedFacets;
});
;
// CONCATENATED MODULE: ../search-JS-core/src/modules/facets/getFacetByValue.js
function getFacetByValue_typeof(obj) { "@babel/helpers - typeof"; return getFacetByValue_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, getFacetByValue_typeof(obj); }
function getFacetByValue_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function getFacetByValue_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? getFacetByValue_ownKeys(Object(source), !0).forEach(function (key) { getFacetByValue_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : getFacetByValue_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function getFacetByValue_defineProperty(obj, key, value) { key = getFacetByValue_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function getFacetByValue_toPropertyKey(arg) { var key = getFacetByValue_toPrimitive(arg, "string"); return getFacetByValue_typeof(key) === "symbol" ? key : String(key); }
function getFacetByValue_toPrimitive(input, hint) { if (getFacetByValue_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (getFacetByValue_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/* harmony default export */ var getFacetByValue = (function (facetName, valueName) {
  var selectedfacetInfo = this.getSelectedFacet(facetName) || {
    facetName: facetName
  };
  var actualFound = false;
  var selectedFound = null;
  var _selectedfacetInfo$va = selectedfacetInfo.values,
    values = _selectedfacetInfo$va === void 0 ? [] : _selectedfacetInfo$va;
  var foundId = {
    name: valueName
  };
  if (values.length > 0) {
    for (var i = 0; i < values.length; i++) {
      var item = values[i];
      if (item.name === valueName) {
        actualFound = true;
        foundId = item;
        break;
      }
    }
  }
  if (actualFound) {
    selectedFound = getFacetByValue_objectSpread(getFacetByValue_objectSpread({}, selectedfacetInfo), {}, {
      selectedvalue: foundId,
      actualFound: actualFound
    });
  } else {
    selectedFound = {
      facetName: facetName,
      actualFound: actualFound,
      selectedvalue: {
        name: valueName,
        dataId: valueName,
        count: 0
      }
    };
  }
  return selectedFound;
});
;
// CONCATENATED MODULE: ../search-JS-core/src/modules/facets/getSelectedFacetValue.js
/* harmony default export */ var getSelectedFacetValue = (function (selectedFacet) {
  var selectedFacetId = selectedFacet.selectedFacetId,
    facetData = selectedFacet.facetData;
  return facetData.values.find(function (facet) {
    var dataId = facet.dataId;
    return dataId === selectedFacetId;
  });
});
;
// CONCATENATED MODULE: ../search-JS-core/src/modules/facets/setCategoryFilter.js
/**
* @description 
<pre>
    <code>
        setCategoryFilter({
            "parent": "categoryPath",
            "level": "1",
            "name": "Top"
        })
    </code>
</pre>
* to set a category filter in state
* accepts an Object with 3  parameters
* @param {string} parent eg:categoryPath 
* @param {string} level eg:1
* @param {string} name eg:"Top"
* @method setCategoryFilter
*/
/* harmony default export */ var setCategoryFilter = (function () {
  var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _action$parent = action.parent,
    parent = _action$parent === void 0 ? null : _action$parent,
    _action$level = action.level,
    level = _action$level === void 0 ? null : _action$level,
    _action$name = action.name,
    name = _action$name === void 0 ? null : _action$name;
  var selectedValue = this.getCategoryFacetByValue(name);
  var list = this.getBreadCrumbsList(parent);
  level = Number(level);
  if (level && selectedValue) {
    if (this.state.categoryFilter[parent] && level <= list.length) {
      this.state.categoryFilter[parent][level - 1] = selectedValue;
      this.callBack(this, 'deletedcategoryFilter');
    } else {
      var crumbs = [];
      crumbs = list.map(function (item) {
        return item.value;
      });
      crumbs.push(selectedValue);
      this.state.categoryFilter[parent] = crumbs;
      this.callBack(this, 'setCategoryFilter');
    }
  }
});
;
// CONCATENATED MODULE: ../search-JS-core/src/modules/facets/setDefaultCategoryFilter.js
/**
* @description 
<pre>
    <code>
        setCategoryFilter({
            "parent": "categoryPath",
            "level": "1",
            "name": "Top"
        })
    </code>
</pre>
* to set a category filter in state
* accepts an Object with 3  parameters
* @param {string} parent eg:categoryPath 
* @param {string} level eg:1
* @param {string} name eg:"Top"
* @method setCategoryFilter
*/
/* harmony default export */ var setDefaultCategoryFilter = (function (categoryPathStr) {
  if (categoryPathStr.length) {
    var multilevelFieldName = this.options.extraParams['facet.multilevel'];
    this.state.categoryFilter[multilevelFieldName] = [categoryPathStr];
  }
});
// CONCATENATED MODULE: ../search-JS-core/src/modules/facets/setRangeFacet.js
/**
* @description 
<pre>
    <code>
        setRangeFacet({
            "start": 0,
            "end": "100",
            "name": "price_facet"
            "applyMultiple":false
        })
    </code>
</pre>
* to set a range filter in state
* accepts an Object with 3  parameters
* @param {number} start eg:0 
* @param {number} end eg:100
* @param {string} facet name eg:"price"
* @param {boolean} applyMultiple eg:"price"
* @method setRangeFacet
*/
/* harmony default export */ var setRangeFacet = (function (rangeFacet) {
  var start = rangeFacet.start,
    end = rangeFacet.end,
    facetName = rangeFacet.facetName,
    applyMultiple = rangeFacet.applyMultiple;
  var rangeVal = "[".concat(start, " TO ").concat(end, "]");
  if (applyMultiple) {
    if (!this.state.rangeFacet[facetName]) {
      this.state.rangeFacet[facetName] = [rangeVal];
    } else {
      var id = this.state.rangeFacet[facetName].indexOf(rangeVal);
      if (id < 0) {
        this.state.rangeFacet[facetName].push(rangeVal);
      } else {
        this.state.rangeFacet[facetName].splice(id, 1);
      }
    }
  } else {
    this.state.rangeFacet[facetName] = [rangeVal];
  }
  this.callBack(self, 'added_facet');
});
;
// CONCATENATED MODULE: ../search-JS-core/src/modules/facets/clearARangeFacet.js
/**
*  @description 
* to clear a rangefacet
* @method clearARangeFacet
* @param {string} facetName eg:v_price 
*/
/* harmony default export */ var clearARangeFacet = (function (facetName) {
  var rangeFacet = this.state.rangeFacet;
  if (rangeFacet[facetName]) {
    delete rangeFacet[facetName];
  }
  this.state.rangeFacet = rangeFacet;
});
;
// CONCATENATED MODULE: ../search-JS-core/src/modules/facets/deleteAFacet.js
/**
* @description 
* to clear a selected facet value
* @method deleteAFacet
* @param {string} facetName eg:v_unbxd_parentcolours_uFilter 
* @param {string} value eg:black
*/
/* harmony default export */ var deleteAFacet = (function (facetName, value) {
  this.deleteFacet(facetName, value);
  this.callBack(this, 'deleted_facet');
  if (!this.options.applyMultipleFilters) {
    this.setPageStart(0);
    this.getResults.bind(this)();
  }
});
;
// CONCATENATED MODULE: ../search-JS-core/src/modules/facets/isFacetAlreadyAdded.js
/**
* @description 
<pre>
    <code>
        isFacetAlreadyAdded(facetName, value)
    </code>
</pre>
* to know whether facet is already seleted or not
* @param {string} name eg:facetName
* @param {value} filter value eg:xs
* @method isFacetAlreadyAdded
*/
/* harmony default export */ var isFacetAlreadyAdded = (function (facetName, value) {
  var selectedFacets = this.getSelectedFacets();
  var facet = selectedFacets[facetName];
  var isAdded = false;
  if (facet) {
    facet.forEach(function (item) {
      var dataId = item.dataId;
      if (dataId === value) {
        isAdded = true;
        return false;
      }
    });
  }
  return isAdded;
});
;
// CONCATENATED MODULE: ../search-JS-core/src/modules/facets/getSelectedRanges.js
/* harmony default export */ var getSelectedRanges = (function (facetName) {
  var rangeFacet = this.state.rangeFacet;
  if (facetName) {
    return rangeFacet[facetName];
  }
  return rangeFacet;
});
// CONCATENATED MODULE: ../search-JS-core/src/modules/facets/processRangeFacets.js
function processRangeFacets_typeof(obj) { "@babel/helpers - typeof"; return processRangeFacets_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, processRangeFacets_typeof(obj); }
function processRangeFacets_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function processRangeFacets_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? processRangeFacets_ownKeys(Object(source), !0).forEach(function (key) { processRangeFacets_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : processRangeFacets_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function processRangeFacets_defineProperty(obj, key, value) { key = processRangeFacets_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function processRangeFacets_toPropertyKey(arg) { var key = processRangeFacets_toPrimitive(arg, "string"); return processRangeFacets_typeof(key) === "symbol" ? key : String(key); }
function processRangeFacets_toPrimitive(input, hint) { if (processRangeFacets_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (processRangeFacets_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var processRangeFacet = function processRangeFacet(facets) {
  var facetList = [];
  var modifiedFacets = facets || [];
  modifiedFacets.forEach(function (facet) {
    var _facet$values = facet.values,
      counts = _facet$values.counts,
      gap = _facet$values.gap;
    var values = [];
    var valuesHolder = [];
    for (var i = 0; i < counts.length; i = i + 2) {
      var valLabel = Number(counts[i]);
      // facet value object
      var valObject = {
        name: valLabel,
        count: counts[i + 1],
        dataId: valLabel
      };

      // push facet object into a temporary holder
      valuesHolder.push(valObject);
      if (valuesHolder.length >= 2) {
        // get from and end values from the holder
        var from = valuesHolder[0],
          end = valuesHolder[1];
        values.push({
          from: from,
          end: end
        });
        // remove the first value from the holder
        valuesHolder.shift();
        // use the first value as from value in the next iteration
      }
    }

    if (valuesHolder.length === 1) {
      var _from = valuesHolder[0];
      // formulate an end value using gap
      var _valLabel = _from.dataId + gap;
      var _end = {
        name: _valLabel,
        count: 0,
        dataId: _valLabel
      };
      values.push({
        from: _from,
        end: _end
      });
    }

    // pick up start and end values from the parsed array.
    var startVal = values[0]['from']['dataId'];
    var endVal = values[values.length - 1]['end']['dataId'];
    facet.start = startVal;
    facet.end = endVal;
    facet.max = endVal;
    facet.gap = gap || 1;
    facet.min = startVal;
    facet.values = values;
    facetList.push(processRangeFacets_objectSpread(processRangeFacets_objectSpread({}, facet), {}, {
      values: values
    }));
  });
  return facetList;
};
/* harmony default export */ var processRangeFacets = (processRangeFacet);
// CONCATENATED MODULE: ../search-JS-core/src/modules/facets/getRanges.js

/* harmony default export */ var getRanges = (function () {
  var rangeFacets = this.getRangeFacets();
  return processRangeFacets(rangeFacets);
});
;
// CONCATENATED MODULE: ../search-JS-core/src/modules/facets/isCategoryFacet.js
/**
* @description 
<pre>
    <code>
        isCategoryFacet(facetName)
    </code>
</pre>
* to know whether facet is category Facet or not
* @param {string} name eg:facetName
* @method isCategoryFacet
*/
/* harmony default export */ var isCategoryFacet = (function (facetName) {
  var facetItem = this.getAFacetByName(facetName)[0];
  if (facetItem) {
    var facetType = facetItem.facetType;
    if (facetType === "category") {
      return true;
    }
    return false;
  }
  return false;
});
;
// CONCATENATED MODULE: ../search-JS-core/src/modules/facets/getAllFacets.js
function getAllFacets_toConsumableArray(arr) { return getAllFacets_arrayWithoutHoles(arr) || getAllFacets_iterableToArray(arr) || getAllFacets_unsupportedIterableToArray(arr) || getAllFacets_nonIterableSpread(); }
function getAllFacets_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function getAllFacets_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return getAllFacets_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return getAllFacets_arrayLikeToArray(o, minLen); }
function getAllFacets_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function getAllFacets_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return getAllFacets_arrayLikeToArray(arr); }
function getAllFacets_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
* @description 
<pre>
    <code>
        getAllFacets()
    </code>
</pre>
* to get all the facets in an array.
* @method getAllFacets
*/

/* harmony default export */ var getAllFacets = (function () {
  var texts = this.getAllTextFacets();
  var ranges = this.getAllRangeFacets();
  var multiFacets = this.getAllCategory();
  var all = [].concat(getAllFacets_toConsumableArray(multiFacets), getAllFacets_toConsumableArray(texts), getAllFacets_toConsumableArray(ranges));
  return all.sort(this.sortFacets);
});
// CONCATENATED MODULE: ../search-JS-core/src/modules/facets/getAFacetByName.js
/**
* @description 
<pre>
    <code>
        getAFacetByName()
    </code>
</pre>
* to return the facet details by the facet name.
* @param name
* @method getAFacetByName
*/
/* harmony default export */ var getAFacetByName = (function (name) {
  var facets = this.getAllFacets();
  var selected = [];
  if (name) {
    selected = facets.filter(function (item) {
      var facetName = item.facetName;
      return facetName === name;
    });
  }
  return selected;
});
// CONCATENATED MODULE: ../search-JS-core/src/modules/facets/getSelectedMultilevelFacet.js
/**
* @description 
<pre>
    <code>
        getSelectedMultilevelFacet()
    </code>
</pre>
* to get all the selected multilevel facets
* @method getSelectedMultilevelFacet
*/
/* harmony default export */ var getSelectedMultilevelFacet = (function () {
  var categoryFilter = this.state.categoryFilter;
  if (categoryFilter) {
    var categories = Object.keys(categoryFilter);
    return categories;
  }
  return null;
});
;
// CONCATENATED MODULE: ../search-JS-core/src/modules/facets/getAllSelectedFacets.js
/* harmony default export */ var getAllSelectedFacets = (function () {
  var multiLevels = this.getSelectedBucketedFacet();
  var ranges = this.getSelectedRanges();
  var texts = this.getSelectedFacets();
  return Object.assign({}, multiLevels, ranges, texts);
});
// CONCATENATED MODULE: ../search-JS-core/src/modules/facets/getSelectedFacetsCount.js
/* harmony default export */ var getSelectedFacetsCount = (function () {
  var facets = this.getAllSelectedFacets() || {};
  return Object.keys(facets).length;
});
// CONCATENATED MODULE: ../search-JS-core/src/modules/facets/getSelectedFacetValueCount.js
/* harmony default export */ var getSelectedFacetValueCount = (function () {
  var selectedFacets = this.getAllSelectedFacets() || {};
  var facetArray = Object.keys(selectedFacets);
  var valueCount = 0;
  facetArray.forEach(function (item) {
    var facetObj = selectedFacets[item];
    if (Array.isArray(facetObj)) {
      valueCount += facetObj.length;
    }
  });
  return valueCount;
});
;
// CONCATENATED MODULE: ../search-JS-core/src/modules/facets/getCategoryFacetByValue.js
/* harmony default export */ var getCategoryFacetByValue = (function (value) {
  var multilevelFacets = this.getBucketedFacets();
  var selectedValue = null;
  if (multilevelFacets) {
    for (var i = 0; i < multilevelFacets.length; i++) {
      var current = multilevelFacets[i];
      var values = current.values;
      for (var j = 0; j < values.length; j++) {
        var _values$j = values[j],
          dataId = _values$j.dataId,
          name = _values$j.name;
        if (dataId === value) {
          selectedValue = name;
          break;
        }
      }
    }
  }
  return selectedValue;
});
;
// CONCATENATED MODULE: ../search-JS-core/src/modules/facets/utils.js
function utils_typeof(obj) { "@babel/helpers - typeof"; return utils_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, utils_typeof(obj); }
function utils_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function utils_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? utils_ownKeys(Object(source), !0).forEach(function (key) { utils_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : utils_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function utils_defineProperty(obj, key, value) { key = utils_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function utils_toPropertyKey(arg) { var key = utils_toPrimitive(arg, "string"); return utils_typeof(key) === "symbol" ? key : String(key); }
function utils_toPrimitive(input, hint) { if (utils_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (utils_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var modifyValues = function modifyValues() {
  var _this = this;
  var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var valuesList = [];
  values.forEach(function (value, index) {
    var data = value;
    var newObj = {};
    if (value.name) {
      valuesList.push(utils_objectSpread(utils_objectSpread({}, data), {}, {
        'dataId': _this.encodeFacetValue(value.name)
      }));
    } else {
      var prevData = "";
      if (index % 2 === 1) {
        prevData = values[index - 1];
        valuesList.push({
          name: prevData,
          count: data,
          dataId: _this.encodeFacetValue(prevData)
        });
      }
    }
  });
  return valuesList;
};
var modifyFacetsList = function modifyFacetsList(facets) {
  var _this2 = this;
  var facetList = [];
  var modifiedFacets = facets || [];
  modifiedFacets.forEach(function (facet, index) {
    var values = facet.values,
      displayName = facet.displayName,
      facetName = facet.facetName,
      filterField = facet.filterField;
    if (!facetName) {
      if (displayName) {
        facet.facetName = displayName;
      }
      if (filterField) {
        facet.facetName = filterField;
      }
    }
    facet.values = _this2.modifyValues(values);
    facetList.push(facet);
  });
  return facetList;
};
//this method is used to encode the facet values if it has some special characters
function hex(c) {
  var v = '0' + c.charCodeAt(0).toString(16);
  return '\\x' + v.substr(v.length - 2);
}
var encodeFacetValue = function encodeFacetValue(value) {
  value = value.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/\t/g, '\\t').replace(/\v/g, '\\v').replace(/'/g, "\\'").replace(/"/g, '\\"').replace(/[\x00-\x1F\x80-\x9F]/g, hex);
  return encodeURIComponent(value);
};
var encodeCategoryFacetValue = function encodeCategoryFacetValue(value) {
  value = value.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/\t/g, '\\t').replace(/\v/g, '\\v').replace(/'/g, "\\'").replace(/"/g, '\\"').replace(/[\x00-\x1F\x80-\x9F]/g, hex);
  return encodeURIComponent(value);
};
var decodeFacetValue = function decodeFacetValue(value) {
  return decodeURIComponent(new String("".concat(value)));
};
var cleanFacetValue = function cleanFacetValue(value) {
  return value.replace(/[^\w\d]/g, '');
};
var cleanEncodedFacetValue = function cleanEncodedFacetValue(value) {
  var newValue = "";
  var doubleStr = "%22";
  var valArr = value.split(doubleStr);
  if (valArr.length === 1) {
    newValue = valArr[1];
  } else {
    valArr = valArr.slice(1, -1);
    newValue = valArr.join(doubleStr);
  }
  return newValue;
};

// CONCATENATED MODULE: ../search-JS-core/src/modules/facets/index.js

































var getSelectedBucketedFacet = function getSelectedBucketedFacet() {
  return this.state.categoryFilter;
};
var applyRangeFacet = function applyRangeFacet() {
  this.setPageStart(0);
  this.getResults.bind(this)();
};
var sortFacets = function sortFacets(a, b) {
  return a.position > b.position ? 1 : -1;
};
var getAllTextFacets = function getAllTextFacets() {
  var text = this.getFacets();
  return text.map(function (item) {
    item.facetType = "text";
    return item;
  });
};
var getAllRangeFacets = function getAllRangeFacets() {
  var ranges = this.getRanges();
  return ranges.map(function (item) {
    item.facetType = "range";
    return item;
  });
};
var getAllCategory = function getAllCategory() {
  var multiFacets = this.getBucketedFacets();
  return multiFacets.map(function (item) {
    item.facetType = "category";
    return item;
  });
};
var facets_setFacetMethods = function setFacetMethods(prototype) {
  prototype = Object.assign(prototype, {
    getBucketedFacets: getBucketedFacets,
    getSelectedBucketedFacet: getSelectedBucketedFacet,
    getFilterFromParams: getFilterFromParams,
    getCategoryFilterFromParams: getCategoryFilterFromParams,
    getRangeFacets: getRangeFacets,
    getFacets: getFacets,
    getSelectedFacets: getSelectedFacets,
    getSelectedFacet: getSelectedFacet,
    updateFacets: updateFacets,
    applyFacets: applyFacets,
    clearFacets: clearFacets,
    addFacets: addFacets,
    findSelectedFacet: findSelectedFacet,
    deleteCategoryFilter: deleteCategoryFilter,
    deleteFacet: deleteFacet,
    getFacetByValue: getFacetByValue,
    getSelectedFacetValue: getSelectedFacetValue,
    setCategoryFilter: setCategoryFilter,
    setDefaultCategoryFilter: setDefaultCategoryFilter,
    setRangeFacet: setRangeFacet,
    clearARangeFacet: clearARangeFacet,
    deleteAFacet: deleteAFacet,
    applyRangeFacet: applyRangeFacet,
    isFacetAlreadyAdded: isFacetAlreadyAdded,
    getSelectedRanges: getSelectedRanges,
    getRanges: getRanges,
    sortFacets: sortFacets,
    isCategoryFacet: isCategoryFacet,
    getAllFacets: getAllFacets,
    getAFacetByName: getAFacetByName,
    getSelectedMultilevelFacet: getSelectedMultilevelFacet,
    getAllTextFacets: getAllTextFacets,
    getAllRangeFacets: getAllRangeFacets,
    getAllCategory: getAllCategory,
    getAllSelectedFacets: getAllSelectedFacets,
    getSelectedFacetsCount: getSelectedFacetsCount,
    getSelectedFacetValueCount: getSelectedFacetValueCount,
    encodeFacetValue: encodeFacetValue,
    modifyFacetsList: modifyFacetsList,
    modifyValues: modifyValues,
    decodeFacetValue: decodeFacetValue,
    cleanFacetValue: cleanFacetValue,
    getCategoryFacetByValue: getCategoryFacetByValue,
    encodeCategoryFacetValue: encodeCategoryFacetValue,
    cleanEncodedFacetValue: cleanEncodedFacetValue
  });
};

// CONCATENATED MODULE: ../search-JS-core/src/modules/breadcrumbs/getBreadCrumbsList.js
/**
*  @description 
* will return breadcrumbs in array format.
*example:
    * @method getBreadCrumbsList
*/

/* harmony default export */ var getBreadCrumbsList = (function (categoryName) {
  var data = this.getBreadCrumbs(categoryName);
  var arr = [];
  var temp = data;
  if (data) {
    var _loop = function _loop() {
      if (temp.level) {
        var _temp = temp,
          level = _temp.level,
          values = _temp.values,
          filterField = _temp.filterField;
        values.forEach(function (val) {
          arr.push({
            level: level,
            filterField: filterField,
            value: val.value || val.name
          });
        });
      }
      if (temp.child) {
        temp = temp.child;
      } else {
        return "break";
      }
    };
    for (var i = 0; i < this.options.facetDepth; i++) {
      var _ret = _loop();
      if (_ret === "break") break;
    }
  }
  return arr;
});
;
// CONCATENATED MODULE: ../search-JS-core/src/modules/breadcrumbs/getBreadCrumbs.js
/**
*  @description 
* will return breadcrumbs object if it is available. in following format.
*example:
   <pre>
        <code>
        {
            "filterField": "categoryPath",
            "values": [
                {
                "value": "Dress"
                }
            ],
            "child": {
                "filterField": "categoryPath",
                "values": [
                {
                    "value": "Short Sleeves"
                }
                ],
                "level": 2
            },
            "level": 1
        }
        </code>
    </pre>
    * @method getBreadCrumbs 
*/

/* harmony default export */ var getBreadCrumbs = (function (categoryName) {
  var resp = this.getResponseObj();
  var breadCrumbs = [];
  if (resp && resp.facets && resp.facets.multilevel) {
    if (categoryName) {
      var multiFacets = resp.facets.multilevel.list;
      if (multiFacets) {
        multiFacets.forEach(function (item) {
          var filterField = item.filterField,
            breadcrumb = item.breadcrumb;
          if (filterField === categoryName) {
            breadCrumbs = breadcrumb;
          }
        });
      } else {
        var crumb = resp.facets.multilevel.breadcrumb;
        breadCrumbs = crumb ? crumb : null;
      }
    }
  }
  return breadCrumbs;
});
;
// CONCATENATED MODULE: ../search-JS-core/src/modules/breadcrumbs/index.js


var breadcrumbs_setBreadCrumbs = function setBreadCrumbs(prototype) {
  prototype = Object.assign(prototype, {
    getBreadCrumbsList: getBreadCrumbsList,
    getBreadCrumbs: getBreadCrumbs
  });
};

// CONCATENATED MODULE: ../search-JS-core/src/modules/sort/applySort.js
/**
* @description 
<pre>
    <code>
        applySort("price desc")
    </code>
</pre>
* to apply the sort
* @param {string} sortItem eg: "price asc"
* @method applySort
*/
/* harmony default export */ var applySort = (function (sortItem) {
  this.setSort(sortItem);
  this.setPageStart(0);
  this.getResults.bind(this)();
});
// CONCATENATED MODULE: ../search-JS-core/src/modules/sort/setSort.js
/* harmony default export */ var sort_setSort = (function (sortItem) {
  if (sortItem !== undefined) {
    this.state.selectedSort = sortItem;
  } else {
    var qParams = this.getSearchQueryParams();
    this.state.selectedSort = qParams.sort ? qParams.sort : "";
  }
});
;
// CONCATENATED MODULE: ../search-JS-core/src/modules/sort/index.js


var getSelectedSort = function getSelectedSort() {
  return this.state.selectedSort;
};
var sort_setSortMethods = function setSortMethods(prototype) {
  prototype = Object.assign(prototype, {
    applySort: applySort,
    getSelectedSort: getSelectedSort,
    setSort: sort_setSort
  });
};

// CONCATENATED MODULE: ../search-JS-core/src/modules/didyoumean/getDidYouMeanFromResponse.js
/**
*  @description 
* will return did you mean texts in an array. 
*example:
   <pre>
        <code>
        [
            {
                "suggestion": "black",
                "frequency": "509"
            }
        ]
        </code>
    </pre>
    * @method getDidYouMeanFromResponse 
*/

/* harmony default export */ var getDidYouMeanFromResponse = (function () {
  var responseObj = this.getResponseObj() || {};
  if (responseObj && responseObj.didYouMean) {
    return responseObj.didYouMean;
  }
  return [];
});
;
// CONCATENATED MODULE: ../search-JS-core/src/modules/didyoumean/getSpellCheckSuggested.js
/**
*  @description 
* will return did you mean text. 
*example:
   <pre>
        <code style='color:red'>
             "black"
        </code>
    </pre>
    * @method getDidYouMeanFromResponse 
*/

/* harmony default export */ var getSpellCheckSuggested = (function () {
  var arr = this.state.didYouMean || [];
  var suggestions = arr.map(function (item) {
    return item.suggestion;
  });
  return suggestions;
});
;
// CONCATENATED MODULE: ../search-JS-core/src/modules/didyoumean/setSpellCheck.js
/* harmony default export */ var didyoumean_setSpellCheck = (function (enableSpellCheck) {
  if (enableSpellCheck) {
    this.options.spellCheck.enabled = true;
  } else {
    this.options.spellCheck.enabled = false;
  }
});
;
// CONCATENATED MODULE: ../search-JS-core/src/modules/didyoumean/index.js



var didyoumean_setDidYouMeanMethods = function setDidYouMeanMethods(prototype) {
  prototype = Object.assign(prototype, {
    getDidYouMeanFromResponse: getDidYouMeanFromResponse,
    getSpellCheckSuggested: getSpellCheckSuggested,
    setSpellCheck: didyoumean_setSpellCheck
  });
};

// CONCATENATED MODULE: ../search-JS-core/src/modules/banner/getbanners.js
/**
*  @description 
* will return Banners array if it is available. in following format.
*example:
   <pre>
        <code>
        [
            {
                "imageUrl": "http://andersonpta.org/test/static/sale.jpg"
            }
        ]
        </code>
    </pre>
    * @method getBanners 
*/

/* harmony default export */ var getbanners = (function () {
  var resp = this.getResponseObj() || {};
  if (resp && resp.banner && resp.banner.banners) {
    return resp.banner.banners || [];
  }
  return [];
});
;
// CONCATENATED MODULE: ../search-JS-core/src/modules/banner/index.js

var banner_setBannerMethods = function setBannerMethods(prototype) {
  prototype = Object.assign(prototype, {
    getBanners: getbanners
  });
};

// CONCATENATED MODULE: ../search-JS-core/src/modules/index.js









var changeInput = function changeInput(value, evt) {
  this.state.userInput = value;
  this.callBack(value, evt);
};
var resetFacets = function resetFacets() {
  this.state.selectedFacets = {};
  this.state.rangeFacet = {};
  this.state.categoryFilter = {};
  this.state.breadcrumbs = {};
};
var resetAll = function resetAll() {
  this.resetFacets();
  this.state.didYouMean = null;
  this.state.startPageNo = 0;
  this.state.selectedSort = '';
  this.state.responseObj = null;
  this.state.userInput = '';
  this.state.pageSize = this.options.pageSize;
};
var modules_setMethods = function setMethods(UnbxdSearch) {
  var prototype = UnbxdSearch.prototype;
  prototype.changeInput = changeInput;
  prototype.resetFacets = resetFacets;
  prototype.resetAll = resetAll;
  urlMethods(prototype);
  pagination_setPaginationMethods(prototype);
  search_setSearchMethods(prototype);
  swatches_setSwatchMethods(prototype);
  facets_setFacetMethods(prototype);
  breadcrumbs_setBreadCrumbs(prototype);
  sort_setSortMethods(prototype);
  didyoumean_setDidYouMeanMethods(prototype);
  banner_setBannerMethods(prototype);
};
/* harmony default export */ var modules = (modules_setMethods);
// CONCATENATED MODULE: ../search-JS-core/src/utils/copyObject.js
function copyObject_typeof(obj) { "@babel/helpers - typeof"; return copyObject_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, copyObject_typeof(obj); }
function copyObject(aObject) {
  if (!aObject) {
    return aObject;
  }
  var v;
  var bObject = Array.isArray(aObject) ? [] : {};
  for (var k in aObject) {
    v = aObject[k];
    bObject[k] = copyObject_typeof(v) === "object" ? copyObject(v) : v;
  }
  return bObject;
}
/* harmony default export */ var utils_copyObject = (copyObject);
// CONCATENATED MODULE: ../search-JS-core/src/UnbxdSearch.js
function UnbxdSearch_typeof(obj) { "@babel/helpers - typeof"; return UnbxdSearch_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, UnbxdSearch_typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || UnbxdSearch_unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = UnbxdSearch_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function UnbxdSearch_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return UnbxdSearch_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return UnbxdSearch_arrayLikeToArray(o, minLen); }
function UnbxdSearch_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, UnbxdSearch_toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function UnbxdSearch_toPropertyKey(arg) { var key = UnbxdSearch_toPrimitive(arg, "string"); return UnbxdSearch_typeof(key) === "symbol" ? key : String(key); }
function UnbxdSearch_toPrimitive(input, hint) { if (UnbxdSearch_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (UnbxdSearch_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }





/**
 * Represents the Unbxd wrapper around the api.
 * @constructor
 */
var UnbxdSearch_UnbxdSearch = /*#__PURE__*/function () {
  function UnbxdSearch(props) {
    _classCallCheck(this, UnbxdSearch);
    this.options = Object.assign({}, config, props);
    this.state = {
      queryRef: {},
      userInput: '',
      responseObj: null,
      selectedFacets: {},
      currentWebUrl: '',
      currentApiUrl: '',
      didYouMean: null,
      startPageNo: this.options.startPageNo || 0,
      isLoading: false,
      selectedSort: '',
      isUrlUpdated: false,
      rangeSliderList: [],
      rangeFacet: {},
      categoryFilter: {},
      breadcrumbs: {},
      urlState: '',
      noResultQuery: "",
      pageSize: this.options.pageSize || 12,
      urlLoad: false,
      isHistory: window.history,
      isBack: false,
      products: [],
      requestId: null,
      unbxdKeys: ["filter", "category-filter", "rows", "start", "page", "count", "sort", this.options.browseQueryParam, this.options.searchQueryParam]
    };
    var _this$options = this.options,
      searchQueryParam = _this$options.searchQueryParam,
      browseQueryParam = _this$options.browseQueryParam,
      productType = _this$options.productType,
      getCategoryId = _this$options.getCategoryId,
      setCategoryId = _this$options.setCategoryId;
    var queryString = '/search?';
    var queryParam = searchQueryParam;
    if (productType === 'CATEGORY') {
      queryString = '/category?';
      queryParam = browseQueryParam;
    }
    this.getCategoryId = getCategoryId;
    this.setCategoryId = setCategoryId;
    this.url = this.getBaseUrl() + queryString + queryParam + '=';
  }
  /**
   *  @returns the response {object}.
   */
  _createClass(UnbxdSearch, [{
    key: "getResponseObj",
    value: function getResponseObj() {
      var responseObj = this.state.responseObj;
      if (responseObj) {
        return utils_copyObject(responseObj);
      }
      return null;
    }
  }, {
    key: "getUrlParamString",
    value: function getUrlParamString() {
      var _this = this;
      var urlStr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var urlObj = arguments.length > 1 ? arguments[1] : undefined;
      var urlObjKeys = Object.keys(urlObj);
      urlObjKeys.forEach(function (key, keyIndex) {
        var val = urlObj[key];
        val.forEach(function (item, itemIndex) {
          /** urlsearchparams decodes the values, hence encode it back */
          urlStr = "".concat(urlStr).concat(key, "=").concat(key === _this.options.searchQueryParam ? item : encodeURIComponent(item));
          if (itemIndex !== val.length - 1) {
            urlStr = "".concat(urlStr, "&");
          }
        });
        if (keyIndex !== urlObjKeys.length - 1) {
          urlStr = "".concat(urlStr, "&");
        }
      });
      return urlStr;
    }
  }, {
    key: "getUrlStr",
    value: function getUrlStr(newQ) {
      // const unbxdKeys = ["filter", "category-filter", "rows", "start", "sort", this.options.browseQueryParam, this.options.searchQueryParam];
      // this.state.unbxdKeys = unbxdKeys;
      var urlSearchParam = new URLSearchParams(this.options.hashMode ? location.hash.slice(1) : location.search);
      // let urlSearchParam = new URLSearchParams( location.search);
      var currentSearchParams = new URLSearchParams(newQ);
      var urlObj = {};

      // query to appear first in the URL
      if (urlSearchParam.get(this.options.searchQueryParam) || newQ.split("".concat(this.options.searchQueryParam, "="))[1]) {
        urlObj[this.options.searchQueryParam] = [newQ.split("".concat(this.options.searchQueryParam, "="))[1].split(/\&\w+\-?\w+?=/ig)[0]];
      }

      // Add current state keys 
      var _iterator = _createForOfIteratorHelper(currentSearchParams),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 2),
            _key = _step$value[0],
            _value = _step$value[1];
          if (_key !== this.options.searchQueryParam && _value !== "") {
            urlObj[_key] = currentSearchParams.getAll(_key);
          }
        }

        // moving this down to maintain the order of params in the URL and keep extra params in the last
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (this.options.allowExternalUrlParams) {
        /** Add customer keys */
        var _iterator2 = _createForOfIteratorHelper(urlSearchParam),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _step2$value = _slicedToArray(_step2.value, 2),
              key = _step2$value[0],
              value = _step2$value[1];
            if (this.state.unbxdKeys.indexOf(key) < 0 && urlSearchParam.getAll(key).length && value !== '') {
              /** It is a customer key */
              urlObj[key] = urlSearchParam.getAll(key);
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      var urlStr = this.getUrlParamString("?", urlObj);
      return urlStr;
    }
  }, {
    key: "urlSearchParamsToStr",
    value: function urlSearchParamsToStr(urlParams) {
      var urlObj = {};
      var _iterator3 = _createForOfIteratorHelper(urlParams),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _step3$value = _slicedToArray(_step3.value, 2),
            key = _step3$value[0],
            value = _step3$value[1];
          if (key !== this.options.searchQueryParam && urlParams.getAll(key).length && value !== "") {
            urlObj[key] = urlParams.getAll(key);
          }

          // Note: unlike the above function, this one will just take the query param from the URL and encodes it as urlParams will decode it by default
          if (key === this.options.searchQueryParam) {
            urlObj[this.options.searchQueryParam] = [utils_urlUtils.encodeQueryParam(urlParams.get(key))];
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      var urlStr = this.getUrlParamString("?", urlObj);
      return urlStr;
    }
  }, {
    key: "checkIfUnbxdKey",
    value: function checkIfUnbxdKey() {
      var urlSearchParam = new URLSearchParams(this.options.hashMode ? location.hash.substring(1) : location.search);
      var unbxdParam = false;
      var _iterator4 = _createForOfIteratorHelper(urlSearchParam),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var _step4$value = _slicedToArray(_step4.value, 2),
            key = _step4$value[0],
            value = _step4$value[1];
          if (this.state.unbxdKeys.indexOf(key) > -1) {
            unbxdParam = true;
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      return unbxdParam;
    }
  }, {
    key: "convertToHashString",
    value: function convertToHashString(q) {
      var url = this.getUrlStr(q);
      if (url.charAt(0) === "?") {
        url = url.substring(1);
      }
      return url;
    }
  }, {
    key: "setUrl",
    value: function setUrl(reload) {
      var _this$options2 = this.options,
        productType = _this$options2.productType,
        hashMode = _this$options2.hashMode,
        searchPath = _this$options2.searchPath,
        onQueryRedirect = _this$options2.onQueryRedirect,
        _this$options2$allowE = _this$options2.allowExternalUrlParams,
        allowExternalUrlParams = _this$options2$allowE === void 0 ? false : _this$options2$allowE;
      var _this$state = this.state,
        urlLoad = _this$state.urlLoad,
        isHistory = _this$state.isHistory,
        _this$state$responseO = _this$state.responseObj,
        responseObj = _this$state$responseO === void 0 ? {} : _this$state$responseO,
        _this$state$unbxdKeys = _this$state.unbxdKeys,
        unbxdKeys = _this$state$unbxdKeys === void 0 ? [] : _this$state$unbxdKeys;
      var redirect = responseObj.redirect,
        _responseObj$didYouMe = responseObj.didYouMean,
        didYouMean = _responseObj$didYouMe === void 0 ? [] : _responseObj$didYouMe;
      if (typeof onQueryRedirect === "function" && redirect && redirect.value) {
        /** Empty redirected query */
        this.state.userInput = "";

        /** Add redirected indication to url */
        var urlBeforeRedirect = this.getUrlStr("redirected=true");
        if (hashMode) {
          urlBeforeRedirect = "#".concat(this.convertToHashString(urlBeforeRedirect));
        }
        onQueryRedirect(this, redirect, urlBeforeRedirect);

        /** Do not update url with this query, as it is not needed */
        return;
      }
      var q = this.getNewUrlState(false).split("".concat(productType.toLocaleLowerCase(), "?"))[1];
      this.state.urlState = q;
      var isPath = location.pathname.includes(searchPath);
      var isUnbxdKey = this.checkIfUnbxdKey();
      var replace = null;
      if (didYouMean.length && didYouMean[0].suggestion) {
        this.state.queryRef = {
          replaceNext: true
        };
      } else {
        /** Replace state with the corrected query post didyoumean */
        if (this.state.queryRef.replaceNext) {
          replace = true;
          this.state.queryRef = {};
        }
      }
      if (hashMode) {
        var _newQ = "#".concat(q);
        if (isPath && _newQ !== location.hash) {
          var url = this.convertToHashString(q);
          this.options.setRoutingStrategies(location.hash, "#".concat(url), productType, isUnbxdKey, replace);
        }
      } else {
        if (isHistory && !urlLoad && isPath) {
          var query = "?".concat(q);
          var _newQ2 = this.getUrlStr(query);
          if (decodeURI(_newQ2) !== decodeURI(location.search)) {
            // newQ = this.getUrlStr(newQ);
            this.options.setRoutingStrategies(location.search, "".concat(_newQ2), productType, isUnbxdKey, replace);
          }
          // window.history.pushState(q, null, newQ);
          this.state.urlLoad = false;
        }
        if (reload && isPath) {
          /** Not encountering this scenario in demo setup as of now */
          // let newQ = this.getUrlStr(newQ);
          location.search = newQ;
        }
      }
    }
  }, {
    key: "updateSelectedFacetsCount",
    value: function updateSelectedFacetsCount() {
      /** Update selected facets count */
      var urlParts = this.getQueryParams();
      var _this$options3 = this.options,
        searchQueryParam = _this$options3.searchQueryParam,
        browseQueryParam = _this$options3.browseQueryParam,
        productType = _this$options3.productType;
      var queryParam = searchQueryParam;
      if (productType !== 'SEARCH') {
        queryParam = browseQueryParam;
        urlParts[queryParam] = this.getCategoryId();
      }
      if (UnbxdSearch_typeof(urlParts) === 'object' && urlParts[queryParam]) {
        var filter = urlParts.filter;
        var facetsNew = this.getFilterFromParams(filter);
        this.state.selectedFacets = facetsNew.selectedFilters;
      }
    }
    /**
     *  @returns the response {object}.
     */
  }, {
    key: "callBack",
    value: function callBack(value, evt) {
      var onEvent = this.options.onEvent;
      onEvent(this, evt);
    }
  }]);
  return UnbxdSearch;
}();
modules(UnbxdSearch_UnbxdSearch);
/* harmony default export */ var src_UnbxdSearch = (UnbxdSearch_UnbxdSearch);
// CONCATENATED MODULE: ../search-JS-core/src/index.js

/* harmony default export */ var src = (src_UnbxdSearch);
// EXTERNAL MODULE: ./styles/index.scss
var styles = __webpack_require__(16);

// CONCATENATED MODULE: ./src/modules/utils/delegate.js
function delegate_delegate(el, evt, sel, handler) {
  el.addEventListener(evt, function (event) {
    var t = event.target;
    while (t && t !== this) {
      if (t.matches(sel)) {
        handler.call(t, event);
      }
      t = t.parentNode;
    }
  });
}
/* harmony default export */ var utils_delegate = (delegate_delegate);
// CONCATENATED MODULE: ./src/modules/didYouMean/spellCheckView.js
//query - current search term
//suggestion - suggest search term
//pages - details search response
/*
    {
    "numberOfProducts": 194,
    "start": 0,
    "productsLn": 12,
    "rows": 12,
    "noOfPages": 17,
    "currentPage": 1,
    "isNext": true,
    "isPrev": false
    }
*/
var didYouMeanUI = function didYouMeanUI(query, suggestion, pages) {
  var start = pages.start,
    productsLn = pages.productsLn,
    numberOfProducts = pages.numberOfProducts;
  var _this$options$spellCh = this.options.spellCheck,
    selectorClass = _this$options$spellCh.selectorClass,
    enabled = _this$options$spellCh.enabled;
  var productType = this.options.productType;
  var newQuery = query;
  if (productType !== "SEARCH") {
    var catId = this.getCategoryId() || "";
    var cId = decodeURIComponent(catId).split(">");
    newQuery = cId[cId.length - 1] || cId[0];
  }
  var UNX_spellCheck = this.testIds.UNX_spellCheck;
  var noUi = suggestion ? "<p class=\"UNX-no-result\"> Your search \"<strong>".concat(suggestion, "</strong>\" did not match any products. Did you mean <button data-test-id=\"").concat(UNX_spellCheck, "\" data-action=\"getSuggestion\" class=\"").concat(selectorClass, "\">").concat(query, "</button>? </p>") : "";
  var qUi = "";
  var countUi = "";
  if (numberOfProducts > 0) {
    countUi = "<span class=\"UNX-result-info\">  -  ".concat(start + 1, " to ").concat(productsLn + start, " of ").concat(numberOfProducts, " products</span>");
  }
  if (pages && newQuery) {
    if (!enabled) {
      newQuery = suggestion || query;
    }
    qUi = "<p class=\"UNX-suggestion-p\">Showing results for <strong>".concat(newQuery, "</strong> ").concat(countUi, "</p>");
  }
  return ["<div class=\"UNX-spellcheck-block\">", noUi, qUi, "</div>"].join('');
};
/* harmony default export */ var spellCheckView = (didYouMeanUI);
// CONCATENATED MODULE: ./src/modules/facets/ui.js
function selectedFacetItemTemplateUI(selectedFacet, selectedFacetItem, facetConfig, selectedFacetsConfig) {
  var facetName = selectedFacet.facetName,
    facetType = selectedFacet.facetType;
  var name = selectedFacetItem.name,
    count = selectedFacetItem.count,
    dataId = selectedFacetItem.dataId;
  var _this$options$facet = this.options.facet,
    facetClass = _this$options$facet.facetClass,
    selectedFacetClass = _this$options$facet.selectedFacetClass,
    removeFacetsSelectorClass = _this$options$facet.removeFacetsSelectorClass;
  var UNX_uFilter = this.testIds.UNX_uFilter;
  var action = "deleteSelectedFacetValue";
  if (facetType === "range") {
    action = "deleteSelectedRange";
  }
  var css = " ".concat(facetClass, " ").concat(selectedFacetClass, " ");
  return ["<div class=\"UNX-selected-facets-wrap\">", "<button data-test-id=\"".concat(UNX_uFilter, "\" class=\"UNX-selected-facet-btn UNX-change-facet ").concat(css, "\" data-facet-name=\"").concat(facetName, "\" data-facet-action=\"").concat(action, "\" data-id=\"").concat(dataId, "\">"), "<span class=\"UNX-facet-text\">".concat(name, "</span> <span class=\"UNX-facet-count\">(").concat(count, ")</span>"), "</button>", "<button class=\"UNX-delete-facet ".concat(removeFacetsSelectorClass, " ").concat(css, "\" data-id=\"").concat(dataId, "\" data-facet-action=\"").concat(action, "\" data-facet-name=\"").concat(facetName, "\">x</button></div>")].join('');
}
function selectedFacetUI(selections, facet, selectedFacetsConfig) {
  var clearAllText = facet.clearAllText,
    clearFacetsSelectorClass = facet.clearFacetsSelectorClass;
  var selectedFClass = this.selectedFacetClass ? this.selectedFacetClass : selectedFacetsConfig.selectedFacetClass;
  if (selections.length > 0) {
    return ["<div class=\"UNX-facets-selections\">", "<h5 class=\"UNX-selected-facet-header\">Selected Filters</h5>", "<div class=\"UNX-selected-facets-inner\">".concat(selections, "</div>"), "<button class=\"".concat(clearFacetsSelectorClass, " ").concat(selectedFClass, "\" data-facet-action=\"clearAllFacets\">").concat(clearAllText, "</button>"), "</div>"].join('');
  } else {
    return "";
  }
}
function facetItemUiElem(facet, value, facetSearchTxt) {
  var facetName = facet.facetName,
    isSelected = facet.isSelected;
  var name = value.name,
    count = value.count,
    dataId = value.dataId;
  var _this$options$facet2 = this.options.facet,
    facetClass = _this$options$facet2.facetClass,
    selectedFacetClass = _this$options$facet2.selectedFacetClass;
  var UNX_uFilter = this.testIds.UNX_uFilter;
  if (facetSearchTxt && facetSearchTxt.length > 0) {
    if (name.toUpperCase().indexOf(facetSearchTxt.toUpperCase()) < 0) {
      facetClass += ' UNX-search-hidden';
    }
  }
  var action = "changeFacet";
  if (isSelected) {
    facetClass += " ".concat(selectedFacetClass);
    action = "deleteFacetValue";
  }
  return ["<button data-test-id=\"".concat(UNX_uFilter, "\" data-facet-name=\"").concat(facetName, "\" data-facet-action=\"").concat(action, "\" class=\"UNX-change-facet ").concat(facetClass, "\" data-id=\"").concat(dataId, "\">"), "<span class=\"UNX-facet-text\">".concat(name, "</span> <span class=\"UNX-facet-count\">(").concat(count, ")</span>"), "</button>"].join('');
}
function facetUIElem(facetObj, children, isExpanded, facetSearchTxt, facet) {
  var displayName = facetObj.displayName,
    facetName = facetObj.facetName,
    multiLevelField = facetObj.multiLevelField,
    facetType = facetObj.facetType,
    values = facetObj.values;
  var facetClass = facet.facetClass,
    applyMultipleFilters = facet.applyMultipleFilters,
    isCollapsible = facet.isCollapsible,
    isSearchable = facet.isSearchable,
    searchPlaceHolder = facet.searchPlaceHolder,
    textFacetWrapper = facet.textFacetWrapper,
    enableViewMore = facet.enableViewMore,
    viewMoreText = facet.viewMoreText,
    viewMoreLimit = facet.viewMoreLimit,
    applyButtonText = facet.applyButtonText,
    clearButtonText = facet.clearButtonText;
  var _this$options = this.options,
    actionBtnClass = _this$options.actionBtnClass,
    actionChangeClass = _this$options.actionChangeClass;
  var _this$cssList = this.cssList,
    openBtn = _this$cssList.openBtn,
    closeBtn = _this$cssList.closeBtn;
  var viewMoreUi = "";
  var viewMoreCss = "";
  var selected = this.getSelectedFacets()[facetName];
  var isFtr = selected && selected.length > 0 ? true : false;
  if (enableViewMore && facetType === "text" && values.length > viewMoreLimit) {
    viewMoreCss = "UNX-view-more";
    viewMoreUi = "<div class=\"UNX-view-more-row \"><button class=\"".concat(actionBtnClass, "\" data-facet-name=\"").concat(facetName, "\" data-action=\"viewMore\" data-id=\"").concat(viewMoreText[0], "\">").concat(viewMoreText[0], "</button></div>");
  }
  var clearUI = "";
  var applyBtn = "";
  if (isFtr) {
    clearUI = "<button class=\"UNX-facet-clear ".concat(facetClass, " \"data-facet-action=\"deleteFacet\" data-facet-name=\"").concat(facetName, "\">").concat(clearButtonText, "</button>");
  }
  if (applyMultipleFilters && isFtr) {
    applyBtn = "<button class=\"UNX-facet-primary ".concat(facetClass, " \"data-facet-action=\"applyFacets\" >").concat(applyButtonText, "</button>");
  }
  var collapsibleUI = "";
  var searchInput = "";
  if (isCollapsible) {
    if (isExpanded) {
      collapsibleUI = "<div class=\"UNX-facet-header ".concat(actionBtnClass, " UNX-facet-open\"  data-facet-name=\"").concat(facetName, "\" data-facet-action=\"facetClose\"> <h3>").concat(displayName, "</h3> </div>");
    } else {
      collapsibleUI = "<div class=\"UNX-facet-header ".concat(actionBtnClass, " UNX-facet-close\"  data-facet-name=\"").concat(facetName, "\" data-facet-action=\"facetOpen\"> <h3>").concat(displayName, "</h3></div>");
    }
  }
  if (isSearchable && facetSearchTxt !== null) {
    searchInput = "<div class=\"UNX-searchable-facets\"><label class=\"UNX-hidden\" for=\"".concat(facetName, "_searchBox\">").concat(searchPlaceHolder, "</label><input  id=\"").concat(facetName, "_searchBox\" name=\"").concat(facetName, "_searchBox\" data-test-id=\"").concat(this.testIds.UNX_searchFacets, "\" class=\"UNX-facet-search ").concat(actionChangeClass, "\" value=\"").concat(facetSearchTxt, "\"  data-facet-name=\"").concat(facetName, "\" data-facet-action=\"searchFacets\" type=\"text\" placeholder=\"").concat(searchPlaceHolder, "\"/></div>");
  }
  return ["<div class=\"UNX-text-facet-wrap\">", collapsibleUI, "<div class=\"UNX-facets-all\">", searchInput, "<div class=\"UNX-facets ".concat(textFacetWrapper, " ").concat(viewMoreCss, "\">").concat(children, "</div>"), viewMoreUi, "<div class=\"UNX-facet-footer\">".concat(applyBtn, " ").concat(clearUI, "</div>"), "</div>", "</div>"].join('');
}

// CONCATENATED MODULE: ./src/modules/searchResults/ui.js
/* harmony default export */ var ui = (function (product, idx, swatchUI, productViewType, products) {
  var unxTitle = product.unxTitle,
    unxImageUrl = product.unxImageUrl,
    uniqueId = product.uniqueId,
    unxStrikePrice = product.unxStrikePrice,
    unxPrice = product.unxPrice,
    unxDescription = product.unxDescription;
  var productItemClass = products.productItemClass,
    defaultImage = products.defaultImage;
  var imgUrl = Array.isArray(unxImageUrl) ? unxImageUrl[0] : unxImageUrl;
  if (!imgUrl) {
    imgUrl = defaultImage;
  }
  var imagesUI = "<div class=\"UNX-img-wrapper\"><img class=\"UNX-img-block\" width=\"100%\" height=\"100%\" alt=\"".concat(unxTitle, "\" src=\"").concat(imgUrl, "\"/></div>");
  var priceUI = "<span class=\"UNX-sale-price\">".concat(unxPrice, "</span>");
  var strikeUi = "";
  if (unxStrikePrice) {
    strikeUi = "<span class=\"UNX-strike-price\">".concat(unxStrikePrice, "<span>");
  }
  var cardType = "";
  var descUI = "";
  if (productViewType === "GRID") {
    cardType = "UNX-grid-card";
  } else {
    cardType = "UNX-list-card";
    descUI = "<p class=\"UNX-description\">".concat(unxDescription, "</p>");
  }
  var swatchBtnUI = "";
  var _ref = swatchUI || {},
    btnList = _ref.btnList,
    imgList = _ref.imgList;
  if (btnList) {
    swatchBtnUI = "<div class=\"UNX-swatch-wrapper\">".concat(btnList, "</div>");
  }
  if (imgList) {
    imagesUI = imgList;
  }
  return ["<div id=\"".concat(uniqueId, "\" data-id=\"").concat(uniqueId, "\" data-prank=\"").concat(idx, "\" data-item=\"product\" class=\"UNX-product-col ").concat(cardType, " ").concat(productItemClass, "\">"),, "<h3 class=\"UNX-product-title\">".concat(idx, "</h3>"), "<div class=\"UNX-images-block\">".concat(imagesUI, "</div>"), "<div class=\"UNX-product-content\">", "<h3 class=\"UNX-product-title\">".concat(unxTitle, "</h3>"), swatchBtnUI, descUI, "<div class=\"UNX-price-row\">".concat(priceUI, " ").concat(strikeUi, "</div>"), "</div>", "</div>"].join('');
});
;
// CONCATENATED MODULE: ./src/modules/pagination/fixedPaginationView.js
var paginationUI = function paginationUI(paginationData, pagination) {
  if (!paginationData) {
    return "";
  }
  var currentPage = paginationData.currentPage,
    isNext = paginationData.isNext,
    isPrev = paginationData.isPrev,
    noOfPages = paginationData.noOfPages,
    productsLn = paginationData.productsLn,
    numberOfProducts = paginationData.numberOfProducts,
    rows = paginationData.rows;
  var pageClass = pagination.pageClass,
    selectedPageClass = pagination.selectedPageClass,
    pageLimit = pagination.pageLimit;
  var UNX_pageNumber = this.testIds.UNX_pageNumber;
  if (numberOfProducts <= productsLn) {
    return "";
  }
  var nextBtn = "<button class=\"UNX-next-btn UNX-page-next ".concat(pageClass, "\" data-page-action=\"next\">></button>");
  var prevBtn = "<button class=\"UNX-prev-btn UNX-page-prev ".concat(pageClass, "\" data-page-action=\"prev\"><</button>");
  var pageNumbers = "";
  var pages = noOfPages < pageLimit ? noOfPages : pageLimit;
  var startPoint = 1;
  var r = Math.ceil(pageLimit / 2);
  var point = currentPage - r;
  if (point > 0) {
    startPoint = point;
    pages = currentPage + r;
  }
  var ls = currentPage + r;
  if (ls >= noOfPages) {
    var diff = ls - noOfPages;
    startPoint = startPoint - diff;
    if (startPoint <= 0) {
      startPoint = 1;
    }
    pages = noOfPages;
  }
  for (var i = startPoint; i <= pages; i++) {
    var tId = "".concat(UNX_pageNumber).concat(i);
    var pageClassSelected = i === currentPage ? selectedPageClass : '';
    pageNumbers += "<button data-test-id=\"".concat(tId, "\" data-page-action=\"paginate\" data-page-no=\"").concat((i - 1) * rows, "\" class=\"UNX-page-button ").concat(pageClass, " ").concat(pageClassSelected, "\">").concat(i, "</button>");
  }
  if (!isNext) {
    nextBtn = "<button disabled class=\"UNX-next-btn UNX-page-next\">></button>";
  }
  if (!isPrev) {
    prevBtn = "<button disabled class=\"UNX-prev-btn UNX-page-prev\"><</button>";
  }
  return ["<div class=\"UNX-pagination-block\">", prevBtn, "<div class=\"UNX-page-no-block\">".concat(pageNumbers, "</div>"), nextBtn, "</div>"].join('');
};
/* harmony default export */ var fixedPaginationView = (paginationUI);
// CONCATENATED MODULE: ./src/modules/pagination/clickNScrollView.js
/* harmony default export */ var clickNScrollView = (function (pageData, pagination) {
  var pageClass = pagination.pageClass;
  return "<div class=\"UNX-click-scroll\"><button data-test-id=\"".concat(this.testIds.UNX_loadMore, "\" class=\"UNX-click-n-scroll ").concat(pageClass, "\">Load More</button></div>");
});
;
// CONCATENATED MODULE: ./src/modules/pagination/paginationView.js


/* harmony default export */ var paginationView = (function (pageData) {
  var pagination = this.options.pagination;
  var type = pagination.type;
  if (type === "CLICK_N_SCROLL") {
    return clickNScrollView.bind(this)(pageData, pagination);
  }
  if (type === "FIXED_PAGINATION") {
    return fixedPaginationView.bind(this)(pageData, pagination);
  }
  return "";
});
;
// CONCATENATED MODULE: ./src/modules/facets/renderRangeFacets.js
var renderRangeFacets = function renderRangeFacets(range, selectedRange, facet) {
  var _this = this;
  var facetName = range.facetName,
    values = range.values;
  var valueUI = "";
  var facetClass = facet.facetClass,
    selectedFacetClass = facet.selectedFacetClass,
    applyMultipleFilters = facet.applyMultipleFilters,
    applyButtonText = facet.applyButtonText,
    clearButtonText = facet.clearButtonText;
  var selected = selectedRange.length > 0 ? true : false;
  values.forEach(function (item) {
    var from = item.from,
      end = item.end;
    var isSelected = _this.isSelectedRange(facetName, item);
    var btnCss = isSelected ? "UNX-selected-facet-btn ".concat(facetClass, " ").concat(selectedFacetClass) : "".concat(facetClass);
    valueUI += ["<button class=\"".concat(btnCss, " UNX-range-facet UNX-change-facet\" data-action=\"setRange\" data-facet-name=\"").concat(facetName, "\" data-start=\"").concat(from.dataId, "\" data-end=\"").concat(end.dataId, "\" >"), "<span class=\"UNX-facet-text\">".concat(from.name, "  -  ").concat(end.name, "</span>"), "<span class=\"UNX-facet-count\">(".concat(from.count, ")</span>"), "</button>"].join('');
  });
  var clearBtn = "";
  var applyBtn = "";
  if (selected) {
    if (applyMultipleFilters) {
      applyBtn = "<button class=\"UNX-default-btn ".concat(facetClass, " UNX-facet-primary\" data-action=\"applyRange\"> ").concat(applyButtonText, "</button>");
    }
    clearBtn = "<button class=\"UNX-default-btn UNX-facet-clear  ".concat(facetClass, "\" data-action=\"clearRangeFacets\">").concat(clearButtonText, "</button>");
  }
  return ["<div class=\"UNX-range-wrapper\">", valueUI, "<div class=\"UNX-price-action-row\">", applyBtn, clearBtn, "<div>", "</div>"].join('');
};

// CONCATENATED MODULE: ./src/modules/facets/renderBucketedSearch.js
var multiLevelFacetUI = function multiLevelFacetUI(facet, selectedCategories, facetSearchTxt, facetConfig) {
  var ui = "";
  var multiLevelFacetSelectorClass = facetConfig.multiLevelFacetSelectorClass,
    facetClass = facetConfig.facetClass;
  var UNX_facetLevel = this.testIds.UNX_facetLevel;
  if (selectedCategories) {
    selectedCategories.forEach(function (item) {
      var level = item.level,
        filterField = item.filterField,
        value = item.value;
      var lTid = "data-test-id=\"".concat(UNX_facetLevel).concat(level, "\"");
      var levelCss = "".concat(multiLevelFacetSelectorClass, "  UNX-category-level-").concat(level);
      ui += ["<button ".concat(lTid, " data-parent=\"").concat(filterField, "\" data-level=\"").concat(level, "\" data-name=\"").concat(value, "\""), "class=\" ".concat(levelCss, " UNX-selected-crumb ").concat(facetClass, "\" data-action = \"clearCategoryFilter\">"), "<span class=\"UNX-category-icon\"></span><label class=\"UNX-facet-text\">".concat(decodeURIComponent(value), "</label>"), "</button>"].join('');
    });
  }
  var level = facet.level,
    displayName = facet.displayName,
    values = facet.values,
    filterField = facet.filterField;
  var multiLevelField = facet.multiLevelField;
  if (!multiLevelField) {
    multiLevelField = filterField;
  }
  var lTid = "data-test-id=\"".concat(UNX_facetLevel).concat(level, "\"");
  var levelCss = "UNX-category-level-".concat(level);
  var valueUI = values.map(function (item) {
    var name = item.name,
      count = item.count,
      dataId = item.dataId;
    if (facetSearchTxt && facetSearchTxt.length > 0) {
      if (name.toUpperCase().indexOf(facetSearchTxt.toUpperCase()) < 0) {
        facetClass += ' UNX-search-hidden';
      }
    }
    return ["<button ".concat(lTid, " data-parent=\"").concat(multiLevelField, "\" data-level=\"").concat(level, "\""), "class=\"".concat(multiLevelFacetSelectorClass, " ").concat(levelCss, " ").concat(facetClass, "\" data-name=\"").concat(dataId, "\" data-action = \"setCategoryFilter\">"), "<label class=\"UNX-facet-text\">".concat(name, "</label><label class=\"UNX-facet-count\">(").concat(count, ")</label></button>")].join('');
  });
  ui += "<div class=\"UNX-category-values\">".concat(valueUI.join(''), "</div>");
  if (ui !== "") {
    return ["<div class=\"UNX-multi-facet-wrap\">", "".concat(ui, "</div>")].join('');
  } else {
    return "";
  }
};
/* harmony default export */ var renderBucketedSearch = (multiLevelFacetUI);
// CONCATENATED MODULE: ./src/modules/breadcrumbs/breadcrumbsView.js
var breadCrumbsUI = function breadCrumbsUI(breadcrumbs, breadcrumb) {
  var ui = "";
  var selectorClass = breadcrumb.selectorClass;
  breadcrumbs.forEach(function (item, id) {
    var level = item.level,
      filterField = item.filterField,
      value = item.value;
    var css = "".concat(selectorClass, " UNX-bread-crumb-item");
    if (id > 0) {
      ui += "<span class=\"UNX-slash\"> / </span>";
    }
    ui += ["<button data-parent=\"".concat(filterField, "\" data-level=\"").concat(level, "\" class=\"").concat(css, "\" data-name=\"").concat(value, "\" data-action = \"clearCategoryFilter\">"), "".concat(decodeURIComponent(value), "</button>")].join('');
  });
  return "<div class=\"bread-crumb-main\">".concat(ui, "</div>");
};
/* harmony default export */ var breadcrumbsView = (breadCrumbsUI);
// CONCATENATED MODULE: ./src/modules/sort/index.js
var sortOptions = [{
  value: "price desc",
  text: "Price High to Low"
}, {
  value: "price asc",
  text: " Price Low to High"
}];
var sortTemplate = function sortTemplate(selectedSort, sortConfig) {
  var optionsUI = "";
  var options = sortConfig.options,
    sortClass = sortConfig.sortClass,
    selectedSortClass = sortConfig.selectedSortClass;
  var UNX_unbxdSorter = this.testIds.UNX_unbxdSorter;
  options.forEach(function (item) {
    var value = item.value,
      text = item.text;
    if (value == selectedSort) {
      optionsUI += "<option value=\"".concat(value, "\" class=\"").concat(selectedSortClass, "\" selected>").concat(text, "</option>");
    } else {
      optionsUI += "<option value=\"".concat(value, "\">").concat(text, "</option>");
    }
  });
  return ["<div class=\"UNX-sort-block\">", "<span class=\"UNX-sort-header\">Sort By</span>", "<label class=\"UNX-hidden\" for=\"unxSortSelect\">Sort By</label>", "<select data-test-id=\"".concat(UNX_unbxdSorter, "\" name=\"unxSortSelect\" data-action=\"changeSort\" id=\"unxSortSelect\" class=\"").concat(sortClass, "\">"), "<option value=\"\">Relevancy</option>", optionsUI, "</select>", "</div>"].join('');
};

// CONCATENATED MODULE: ./src/modules/productViewType/index.js
var renderProductViewType = function renderProductViewType(selectedViewType, productViewType) {
  var isDisabled = this.getSearchResults() ? false : true;
  var selectedViewTypeClass = productViewType.selectedViewTypeClass,
    viewTypeClass = productViewType.viewTypeClass;
  var _this$testIds = this.testIds,
    UNX_gridBtn = _this$testIds.UNX_gridBtn,
    UNX_listBtn = _this$testIds.UNX_listBtn;
  var listBtnCss = "UNX-list-btn ".concat(viewTypeClass);
  var gridBtnCss = "UNX-grid-btn ".concat(viewTypeClass);
  var gTAttr = "data-test-id=".concat(UNX_gridBtn);
  var lTAttr = "data-test-id=".concat(UNX_listBtn);
  if (selectedViewType === 'LIST') {
    listBtnCss += " ".concat(selectedViewTypeClass);
  }
  if (selectedViewType === 'GRID') {
    gridBtnCss += " ".concat(selectedViewTypeClass);
  }
  var listBtn = "<button id=\"listBtn\" class=\"".concat(listBtnCss, "\" ").concat(lTAttr, " data-view-action=\"LIST\" >List</button>");
  var gridBtn = "<button ".concat(gTAttr, " id=\"gridBtn\" class=\"").concat(gridBtnCss, "\" data-view-action=\"GRID\" >Grid</button>");
  if (isDisabled) {
    listBtn = "<button ".concat(lTAttr, " id=\"listBtn\" disabled class=\"").concat(listBtnCss, " disabled-btn\" data-view-action=\"LIST\" >List</button>");
    gridBtn = "<button ".concat(gTAttr, " id=\"gridBtn\" disabled class=\"").concat(gridBtnCss, "  disabled-btn\"data-view-action=\"GRID\" >Grid</button>");
  }
  return "".concat(listBtn, " ").concat(gridBtn);
};
/* harmony default export */ var modules_productViewType = (renderProductViewType);
// CONCATENATED MODULE: ./src/modules/banners/index.js
var bannerTemplateUI = function bannerTemplateUI(banners, bannerOpts) {
  var openNewTab = bannerOpts.openNewTab;
  var bannerUI = banners.map(function (item) {
    var imageUrl = item.imageUrl,
      landingUrl = item.landingUrl,
      bannerHtml = item.bannerHtml;
    if (bannerHtml) {
      return bannerHtml;
    }
    var hrefStr = "";
    if (landingUrl) {
      hrefStr += "href=".concat(landingUrl);
    }
    if (openNewTab) {
      hrefStr += "  target=\"_blank\"";
    }
    return "<a class=\"UNX-banner-wrap\" ".concat(hrefStr, " ><img style=\"max-width:100%\" src=\"").concat(imageUrl, "\"/></a>");
  }).join('');
  return "".concat(bannerUI);
};
/* harmony default export */ var banners = (bannerTemplateUI);
// CONCATENATED MODULE: ./src/modules/pageSize/pageSizeView.js
var pageSizeUi = function pageSizeUi(selected, pagesize) {
  var UNX_pagesize = this.testIds.UNX_pagesize;
  var ui = "<label class=\"UNX-hidden\" for=\"unxPageSize\">Sort By</label><select id=\"unxPageSize\" name=\"unxPageSize\" class=\"UNX-select-pagesize ".concat(pagesize.pageSizeClass, "\">");
  pagesize.options.forEach(function (opt, i) {
    var tId = "data-test-id=\"".concat(UNX_pagesize).concat(i + 1, "\"");
    if (selected == opt) {
      ui += "<option selected ".concat(tId, " class=\"").concat(pagesize.selectedPageSizeClass, "\" id=\"").concat(opt, "\">").concat(opt, "</option>");
    } else {
      ui += "<option ".concat(tId, " id=\"").concat(opt, "\">").concat(opt, "</option>");
    }
  });
  ui += "</select>";
  return "<div class=\"UNX-pagesize-block\">".concat(ui, "</div>");
};
/* harmony default export */ var pageSizeView = (pageSizeUi);
// CONCATENATED MODULE: ./src/modules/swatches/ui.js
/* harmony default export */ var swatches_ui = (function (swatchData, swatches, product) {
  var _this = this;
  var _swatchData$swatchImg = swatchData.swatchImgs,
    swatchImgs = _swatchData$swatchImg === void 0 ? [] : _swatchData$swatchImg;
  var btnUI = "";
  var btnList = "";
  var imgsUI = "";
  var swatchClass = swatches.swatchClass;
  var UNX_swatchClrBtn = this.testIds.UNX_swatchClrBtn;
  var unxTitle = product.unxTitle;
  if (swatchImgs.length > 1) {
    swatchImgs.forEach(function (item, id) {
      var sid = _this.generateRid("unx_swatch_");
      var sCss = id === 0 ? '' : ' UNX-swatch-hidden';
      var bCss = id === 0 ? ' UNX-selected-swatch' : '';
      var data = item.split("::");
      if (data) {
        btnUI += ["<button value=\"swatch color ".concat(data[0], "\" data-test-id=\"").concat(UNX_swatchClrBtn).concat(id, "\" data-swatch-id=\"").concat(sid, "\" data-action=\"changeSwatch\" class=\"").concat(swatchClass, " ").concat(sid, " ").concat(bCss, "\" style=\"background-color:").concat(data[0], "\"> swatch color ").concat(data[0], " </button>")].join('');
        imgsUI += "<div id=\"".concat(sid, "\" class=\"UNX-img-wrapper ").concat(sCss, "\"><img alt=\"").concat(unxTitle, " for the ").concat(data[0], "\" class=\"UNX-img-block\" src=\"").concat(data[1], "\"/></div>");
      }
    });
    btnList = "<div class=\"UNX-swatch-color-list\">".concat(btnUI, "</div>");
  }
  return {
    btnList: btnList,
    imgList: imgsUI
  };
});
;
// CONCATENATED MODULE: ./src/common/options.js












var options_options = {
  productId: "uniqueId",
  searchBoxEl: null,
  searchButtonEl: null,
  siteKey: "demo-spanish-unbxd809051588861207",
  apiKey: "f19768e22b49909798bc2411fa3dd963",
  searchPath: "",
  searchEndPoint: "https://search.unbxd.io/",
  products: {
    el: null,
    template: ui,
    productItemClass: "product-item",
    // to find out product
    productType: "SEARCH",
    gridCount: 1,
    onProductClick: function onProductClick(product, e) {},
    productAttributes: ["title", "uniqueId", "price", "sku", "imageUrl", "displayPrice", "salePrice", "sortPrice", "productDescription", "unbxd_color_mapping", "colorName", "color", "productUrl"],
    attributesMap: {
      'unxTitle': 'title',
      'unxImageUrl': 'imageUrl',
      'unxPrice': 'salePrice',
      'unxStrikePrice': 'displayPrice',
      'unxId': 'uniqueId',
      'unxDescription': 'productDescription'
    },
    defaultImage: "https://libraries.unbxdapi.com/sdk-assets/defaultImage.svg",
    tagName: "DIV",
    htmlAttributes: {
      "class": "UNX-search-results-block UNX-result-wrapper"
    },
    events: {}
  },
  searchQueryParam: "q",
  browseQueryParam: 'p',
  defaultFilters: null,
  //or object with keys
  noResults: {
    template: function template(query) {
      return "<div class=\"UNX-no-results\"> No Results found ".concat(query, " </div>");
    }
  },
  onEvent: function onEvent(state, type) {},
  startPageNo: 0,
  productView: {
    enabled: true,
    el: null,
    template: modules_productViewType,
    action: 'click',
    // CLICK or CHANGE
    viewTypeClass: 'UNX-product-view',
    selectedViewTypeClass: 'UNX-selected-product-view',
    defaultViewType: 'GRID',
    tagName: "DIV",
    htmlAttributes: {
      "class": "product-view-container"
    },
    events: {}
  },
  loader: {
    template: function template() {
      return "<div class=\"UNX-loader\">Loading search results....</div>";
    },
    el: null
  },
  variants: undefined,
  extraParams: {
    "version": "V2"
    /*"facet.multilevel":"categoryPath",
    "f.categoryPath.displayName":"category",
    "f.categoryPath.max.depth":"4",
    "f.categoryPath.facet.limit":"100"*/
  },

  spellCheck: {
    enabled: true,
    el: null,
    template: spellCheckView,
    selectorClass: "UNX-suggestion",
    tagName: "DIV",
    htmlAttributes: {
      "class": "UNX-spellcheck-wrapper"
    },
    events: {}
  },
  breadcrumb: {
    enabled: true,
    el: null,
    selectorClass: "UNX-bread-crumb",
    template: breadcrumbsView,
    tagName: "DIV",
    htmlAttributes: {
      "class": "UNX-breadcrumbs-block"
    },
    events: {}
  },
  sort: {
    enabled: true,
    el: null,
    selectedSortClass: 'UNX-selected-sort',
    sortClass: 'UNX-sort-item',
    template: sortTemplate,
    options: sortOptions,
    action: 'change',
    tagName: "DIV",
    htmlAttributes: {
      "class": "UNX-sort-block-lb"
    },
    events: {}
  },
  selectedFacets: {
    enabled: true,
    selectedFacetClass: "UNX-selected-facet-btn",
    el: null,
    template: selectedFacetUI,
    itemTemplate: selectedFacetItemTemplateUI,
    clearAllText: "Clear All",
    tagName: "DIV",
    htmlAttributes: {
      "class": "UNX-selected-facet-lb"
    },
    events: {},
    facetAction: "click",
    clearFacetsSelectorClass: 'UNX-clear-facet',
    removeFacetsSelectorClass: 'UNX-remove-facet'
  },
  facet: {
    facetsEl: null,
    facetTemplate: facetUIElem,
    facetItemTemplate: facetItemUiElem,
    facetMultiSelect: true,
    facetClass: "UNX-facets-block",
    facetAction: "click",
    selectedFacetClass: "UNX-selected-facet-btn",
    selectedFacetsEl: null,
    selectedFacetTemplate: selectedFacetUI,
    selectedFacetItemTemplate: selectedFacetItemTemplateUI,
    clearAllText: "Clear All",
    rangeTemplate: renderRangeFacets,
    rangeWidgetConfig: {
      "minLabel": "",
      "maxLabel": "",
      "prefix": '$'
    },
    facetMultilevel: true,
    facetMultilevelName: 'Category',
    multiLevelFacetSelectorClass: 'UNX-multilevel-facet',
    multiLevelFacetTemplate: renderBucketedSearch,
    facetDepth: 4,
    clearFacetsSelectorClass: 'UNX-clear-facet',
    removeFacetsSelectorClass: 'UNX-remove-facet',
    onFacetLoad: function onFacetLoad(facets) {},
    applyMultipleFilters: false,
    applyButtonText: "Apply",
    clearButtonText: "clear",
    isCollapsible: true,
    isSearchable: true,
    searchPlaceHolder: "Search Filter",
    textFacetWrapper: "UNX-facets-item",
    defaultOpen: "ALL",
    enableViewMore: false,
    viewMoreText: ["show all", "show less"],
    viewMoreLimit: 3,
    tagName: "DIV",
    htmlAttributes: {
      "class": "UNX-facets-results-block"
    },
    events: {}
  },
  pagination: {
    enabled: true,
    el: null,
    template: paginationView,
    pageClass: "UNX-page-items",
    selectedPageClass: "UNX-selected-page-item",
    type: 'CLICK_N_SCROLL',
    // INFINITE_SCROLL or CLICK_N_SCROLL or FIXED_PAGINATION
    infiniteScrollTriggerEl: window,
    //if paginationType = INFINITE_SCROLL
    heightDiffToTriggerNextPage: 100,
    //if paginationType = INFINITE_SCROLL,    
    onPaginate: function onPaginate(paginationInfo) {},
    action: 'click',
    pageLimit: 6,
    tagName: "DIV",
    htmlAttributes: {
      "class": "UNX-pagination-size-block"
    },
    events: {}
  },
  pagesize: {
    enabled: true,
    pageSize: 12,
    options: [8, 12, 16, 20, 24],
    pageSizeClass: "UNX-pagesize",
    selectedPageSizeClass: "UNX-selected-pagesize",
    action: 'change',
    template: pageSizeView,
    el: null,
    tagName: "DIV",
    htmlAttributes: {
      "class": "UNX-page-size-block"
    },
    events: {}
  },
  banner: {
    enabled: true,
    el: null,
    template: banners,
    count: 1,
    openNewTab: false,
    tagName: "DIV",
    htmlAttributes: {
      "class": "UNX-banner-block"
    },
    events: {}
  },
  swatches: {
    enabled: false,
    attributesMap: {},
    swatchClass: 'UNX-swatch-btn',
    template: swatches_ui
  },
  unbxdAnalytics: false,
  hashMode: false,
  updateUrls: true,
  actionBtnClass: "UNX-action-item",
  actionChangeClass: "UNX-action-change",
  onAction: function onAction(e, ctx) {},
  onQueryRedirect: function onQueryRedirect(self, redirect, urlBeforeRedirect) {
    if (redirect) {
      var value = redirect.value,
        type = redirect.type;
      if (type === "url") {
        /** If opening in same tab */
        if (history.state && history.state.replace) {
          history.replaceState(null, "", urlBeforeRedirect);
        }
        location.href = value;

        /** If opening redirect in new tab (rare scenario), 
         * then browser back + history push on search should be handled by client 
         * (especially switching betsween category to search page scenarios)
         * Note: This is not recommended */
      }

      return false;
    }
  },
  onBackFromRedirect: function onBackFromRedirect(hashMode) {
    var urlSearchParam = new URLSearchParams(hashMode ? location.hash.substring(1) : location.search);
    var backFromRedirect = urlSearchParam.get("redirected");
    if (backFromRedirect) {
      history.go(-1);
    }
  },
  onNoUnbxdKeyRouting: function onNoUnbxdKeyRouting() {
    history.go();
  },
  setRoutingStrategies: function setRoutingStrategies(locationParam, newUrl, productType, isUnbxdKey, replace) {
    if (locationParam === newUrl) {
      return;
    } else if (productType === "CATEGORY") {
      /** Do not navigate to base category page  */
      if (!isUnbxdKey) {
        history.replaceState(null, "", newUrl);
      } else {
        history.pushState(null, "", newUrl);
      }
    } else {
      if (history.state && history.state.replace || replace) {
        history.replaceState(null, "", newUrl);
      } else {
        history.pushState(null, "", newUrl);
      }
    }
  }
  // searchQueryParam:null
};

/* harmony default export */ var common_options = (options_options);
// CONCATENATED MODULE: ./src/modules/banners/setbannerMethods.js
function renderBannerUI() {
  var banners = this.getBanners();
  var banner = this.options.banner;
  this.bannerWrapper.innerHTML = this.options.banner.template(banners, banner);
}
/* harmony default export */ var setbannerMethods = (renderBannerUI);
// CONCATENATED MODULE: ./src/modules/facets/actions.js
var findChangedFacet = function findChangedFacet(e) {
  var elem = e.target;
  this.viewState.lastDidYouMean = "";
  var selected = this.options.facet.facetAction === "click" ? elem : elem.options[elem.selectedIndex];
  var dataSet = selected.dataset;
  var facetName = dataSet.facetName,
    facetAction = dataSet.facetAction,
    id = dataSet.id,
    action = dataSet.action,
    end = dataSet.end,
    start = dataSet.start;
  var qState = this.getStateFromUrl();
  var selectedfacets = this.getSelectedFacets();
  var ln = selectedfacets ? Object.keys(selectedfacets).length : 0;
  var ql = Object.keys(qState.selectedFacets).length;
  var _this$options = this.options,
    productType = _this$options.productType,
    facet = _this$options.facet;
  var applyMultipleFilters = facet.applyMultipleFilters;
  var events = this.events,
    actions = this.actions;
  var ranges = this.state.rangeFacet[facetName];
  var isSelections = Object.keys(qState.rangeFacet);
  if (facetAction === actions.changeFacet) {
    var selectedfacetInfo = this.getSelectedFacet(facetName);
    var selectedOpt = {
      selectedFacetName: facetName,
      selectedFacetId: id,
      facetData: selectedfacetInfo
    };
    this.viewState.lastAction = "addedAFacet";
    this.options.onEvent(this, events.facetClick, {
      facetName: facetName,
      facetData: selectedfacetInfo
    });
    this.updateFacets(selectedOpt);
    this.getCallbackActions({
      facetName: facetName,
      facetAction: facetAction,
      id: id
    }, 'facetClick');
  }
  if (facetAction === "deleteSelectedFacetValue") {
    if (this.findSelectedFacet(facetName)) {
      this.viewState.lastAction = "deletedAfacet";
      this.deleteAFacet.bind(this)(facetName, id);
      this.options.onEvent(this, events.deleteFacetValue, {
        facetName: facetName
      });
      this.getCallbackActions({
        facetName: facetName,
        facetAction: facetAction,
        id: id
      }, 'facetClick');
      this.setPageStart(0);
      this.getResults();
    }
  }
  if (facetAction === actions.deleteFacetValue) {
    if (this.findSelectedFacet(facetName)) {
      this.viewState.lastAction = "deletedAfacet";
      this.deleteAFacet.bind(this)(facetName, id);
      this.options.onEvent(this, events.deleteFacetValue, {
        facetName: facetName
      });
      this.getCallbackActions({
        facetName: facetName,
        facetAction: facetAction,
        id: id
      }, 'facetClick');
      var fl = selectedfacets[facetName].length;
      if (ql > 0 && ln === 1 && fl === 0 && applyMultipleFilters) {
        this.setPageStart(0);
        this.getResults();
      }
    }
  }
  if (facetAction === actions.deleteFacet) {
    if (this.findSelectedFacet(facetName)) {
      this.viewState.lastAction = "deletedAfacet";
      this.deleteAFacet.bind(this)(facetName);
      this.options.onEvent(this, events.deleteFacet, {
        facetName: facetName
      });
      this.getCallbackActions({
        facetName: facetName,
        facetAction: facetAction,
        id: id
      }, 'facetClick');
      var isReload = qState.selectedFacets[facetName];
      if (isReload) {
        this.viewState.lastAction = "clearAFacet";
        this.setPageStart(0);
        this.getResults();
      }
    }
  }
  if (facetAction === "applyFacets") {
    this.viewState.lastAction = "applyFacets";
    this.setPageStart(0);
    this.getResults();
  }
  if (facetAction === "clearAllFacets") {
    this.viewState.lastAction = "clearAllFacets";
    this.state.selectedFacets = [];
    this.state.rangeFacet = [];
    this.setPageStart(0);
    this.getResults();
  }
  if (facetAction === "deleteSelectedRange") {
    var _facetName = dataSet.facetName,
      _id = dataSet.id;
    var range = _id.replace(/[^\w\s]/gi, '').split(" TO ");
    this.setRangeFacet({
      start: range[0],
      end: range[1],
      facetName: _facetName,
      applyMultiple: true
    });
    this.getCallbackActions({
      facetName: _facetName,
      facetAction: facetAction,
      id: _id
    }, 'facetClick');
    this.setPageStart(0);
    this.getResults();
  }
  if (action === actions.setCategoryFilter) {
    if (productType === "SEARCH") {
      this.setCategoryFilter(dataSet);
      this.options.onEvent(this, events.setCategoryFilter, dataSet);
    } else {
      this.setCategoryId(dataSet, this);
    }
    this.setPageStart(0);
    this.getResults();
    this.getCallbackActions(dataSet, 'facetClick');
  }
  if (action === actions.clearCategoryFilter) {
    if (productType === "SEARCH") {
      this.deleteCategoryFilter(dataSet);
      this.options.onEvent(this, events.deleteCategoryFilter, dataSet);
    } else {
      this.setCategoryId(dataSet, this);
    }
    this.setPageStart(0);
    this.getResults();
    this.getCallbackActions(dataSet, 'facetClick');
  }
  if (action === "setRange") {
    var already = false;
    if (ranges && ranges.length === 1 && isSelections.length > 0) {
      already = this.isSelectedRange(facetName, {
        from: {
          name: start
        },
        end: {
          name: end
        }
      });
    }
    ;
    if (!already) {
      this.setRangeFacet({
        start: start,
        end: end,
        facetName: facetName,
        applyMultiple: true
      });
    }
    if (already) {
      this.state.rangeFacet = [];
      this.applyRangeFacet();
    }
    if (!applyMultipleFilters) {
      this.setPageStart(0);
      this.applyRangeFacet();
    }
    this.getCallbackActions({
      facetName: facetName,
      facetAction: facetAction,
      id: id
    }, 'facetClick');
  }
  if (action === "clearRangeFacets") {
    this.state.rangeFacet = [];
    this.renderFacets();
    if (isSelections.length > 0) {
      ;
      this.applyRangeFacet();
    }
  }
  if (action === actions.applyRange) {
    this.applyRangeFacet();
    this.options.onEvent(this, action, {
      facetName: facetName
    });
    this.getCallbackActions({
      facetName: facetName
    }, 'facetClick');
  }
  if (action === actions.clearPriceRange && facetName) {
    this.clearARangeFacet(facetName);
    this.getResults.bind(this)();
    this.options.onEvent(this, action, {
      facetName: facetName
    });
    this.getCallbackActions({
      facetName: facetName
    }, 'facetClick');
  }
  this.viewState.lastAction = action;
  //this.renderFacets();
};


// CONCATENATED MODULE: ./src/modules/facets/renderFacets.js
/* harmony default export */ var renderFacets = (function () {
  var _this = this;
  var facet = this.options.facet;
  var defaultOpen = facet.defaultOpen,
    applyMultipleFilters = facet.applyMultipleFilters,
    isCollapsible = facet.isCollapsible;
  var _this$viewState = this.viewState,
    expandedFacets = _this$viewState.expandedFacets,
    lastAction = _this$viewState.lastAction;
  if (lastAction === "updatedRangeSlider" && applyMultipleFilters) {
    return false;
  }
  var self = this;
  var allFacets = this.getAllFacets();
  var facetWrappers = this.facetWrappers;
  var selectedFacets = this.getSelectedFacets();
  facetWrappers.forEach(function (facetsWrapper) {
    facetsWrapper.innerHTML = "";
    allFacets.forEach(function (facetItem, idx) {
      var facetType = facetItem.facetType,
        facetName = facetItem.facetName;
      if (typeof expandedFacets[facetName] === 'undefined' && defaultOpen === 'ALL') {
        expandedFacets[facetName] = true;
      }
      if (defaultOpen === 'FIRST' && idx == 0) {
        expandedFacets[facetName] = true;
      }
      var isExpanded = _this.isExpandedFacet(facetName);
      var facetSearchTxt = _this.getSearchFacetsText(facetName) || '';
      var selectedFacet = selectedFacets[facetName];
      if (facetType === 'text') {
        facetsWrapper.innerHTML += _this.renderTextFacet(facetItem, selectedFacet, isExpanded, facetSearchTxt);
      }
      if (facetType === 'range') {
        facetsWrapper.innerHTML += _this.renderRangeFacet(facetItem, isExpanded, '');
      }
      if (facetType === 'category') {
        facetsWrapper.innerHTML += _this.renderMultiLevelFacet(facetItem, isExpanded, facetSearchTxt);
      }
      _this.viewState.facetElementMap[facetName] = facetName;
    });
  });
  this.options.facet.onFacetLoad.bind(this)(allFacets);
});
;
// CONCATENATED MODULE: ./src/modules/facets/renderTextFacet.js
/* harmony default export */ var renderTextFacet = (function (facetItem, selectedFacet, isExpanded, facetSearchTxt, onlyValues) {
  var valuesUI = [];
  var facetName = facetItem.facetName,
    _facetItem$values = facetItem.values,
    values = _facetItem$values === void 0 ? [] : _facetItem$values;
  var _this$cssList = this.cssList,
    openFacet = _this$cssList.openFacet,
    closeFacet = _this$cssList.closeFacet;
  var self = this;
  var facet = this.options.facet;
  var isCollapsible = facet.isCollapsible;
  if (values.length > 0) {
    valuesUI = values.map(function (value, index) {
      var dataId = value.dataId;
      var selected = false;
      if (selectedFacet) {
        selected = selectedFacet.some(function (facet) {
          return facet.dataId === dataId;
        });
      }
      if (selected) {
        facetItem.isSelected = true;
        return self.options.facet.facetItemTemplate.bind(self)(facetItem, value, facetSearchTxt, facet);
      } else {
        facetItem.isSelected = false;
        return self.options.facet.facetItemTemplate.bind(self)(facetItem, value, facetSearchTxt);
      }
    });
  }
  if (onlyValues) {
    return valuesUI.join('');
  }
  var facetUI = this.options.facet.facetTemplate.bind(this)(facetItem, valuesUI.join(''), isExpanded, facetSearchTxt, facet);
  var styles = isExpanded ? openFacet : closeFacet;
  if (!isCollapsible) {
    styles = "";
  }
  return "<div class=\"UNX-facet-item-d ".concat(facetName, " ").concat(styles, "\">").concat(facetUI, "</div>");
});
;
// CONCATENATED MODULE: ./src/modules/facets/renderSelectedFacets.js
/* harmony default export */ var renderSelectedFacets = (function () {
  var _this = this;
  var selectedFacetsInfo = this.getSelectedFacets();
  var selectedRanges = this.getSelectedRanges();
  var k = Object.keys(selectedFacetsInfo);
  var selectedUi = "";
  var _this$options = this.options,
    selectedFacets = _this$options.selectedFacets,
    facet = _this$options.facet;
  var itemTemplate = facet.selectedFacetItemTemplate ? facet.selectedFacetItemTemplate.bind(this) : selectedFacets.itemTemplate.bind(this);
  var _loop = function _loop() {
    var j = k[i];
    var isCategoryFacet = _this.isCategoryFacet(j);
    var vals = selectedFacetsInfo[j];
    if (!isCategoryFacet) {
      vals.forEach(function (item) {
        var name = item.name,
          count = item.count,
          dataId = item.dataId;
        selectedUi += itemTemplate({
          facetName: j,
          facetType: "text"
        }, {
          name: name,
          dataId: dataId ? dataId : name,
          count: count ? count : 0
        }, facet, selectedFacets);
      });
    }
  };
  for (var i = 0; i < k.length; i++) {
    _loop();
  }
  var r = Object.keys(selectedRanges);
  var _loop2 = function _loop2() {
    var l = r[j];
    var val = selectedRanges[l];
    val.forEach(function (rEl) {
      selectedUi += itemTemplate({
        facetName: l,
        facetType: "range"
      }, {
        name: rEl.replace(/[^\w\s]/gi, ''),
        dataId: rEl
      }, facet, selectedFacets);
    });
  };
  for (var j = 0; j < r.length; j++) {
    _loop2();
  }
  var selectedFacetTemp = facet.selectedFacetTemplate ? facet.selectedFacetTemplate.bind(this) : selectedFacets.template.bind(this);
  this.selectedFacetWrappers.forEach(function (wrapper) {
    wrapper.innerHTML = selectedFacetTemp(selectedUi, facet, selectedFacets);
  });
});
;
// CONCATENATED MODULE: ./src/modules/facets/renderMultiLevelFacet.js
/* harmony default export */ var renderMultiLevelFacet = (function (bucketedFacet, isExpanded) {
  var bucketedUi = "";
  var self = this;
  var _this$cssList = this.cssList,
    openFacet = _this$cssList.openFacet,
    closeFacet = _this$cssList.closeFacet;
  var facetName = bucketedFacet.facetName;
  var facet = this.options.facet;
  var isCollapsible = facet.isCollapsible;
  var breadCrumb = this.getBreadCrumbsList(facetName);
  var valueUI = self.options.facet.multiLevelFacetTemplate.bind(this)(bucketedFacet, breadCrumb, "", facet);
  bucketedUi += self.options.facet.facetTemplate.bind(self)(bucketedFacet, valueUI, isExpanded, null, facet);
  var styles = isExpanded ? openFacet : closeFacet;
  if (!isCollapsible) {
    styles = "";
  }
  return "<div class=\"".concat(facetName, " UNX-facet-item-d UNX-multilivel-facets-block UNX-multilevel-block ").concat(styles, "\">").concat(bucketedUi, "</div>");
});
;
// CONCATENATED MODULE: ./src/modules/facets/renderRangeFacet.js
/* harmony default export */ var renderRangeFacet = (function (rangeFacet, isExpanded) {
  var facetName = rangeFacet.facetName;
  var _this$cssList = this.cssList,
    openFacet = _this$cssList.openFacet,
    closeFacet = _this$cssList.closeFacet;
  var facet = this.options.facet;
  var isCollapsible = facet.isCollapsible;
  var selectedRanges = this.state.rangeFacet;
  var selectedRange = selectedRanges[facetName] || [];
  var facetUI = this.options.facet.rangeTemplate.bind(this)(rangeFacet, selectedRange, facet);
  var rangeUi = this.options.facet.facetTemplate.bind(this)(rangeFacet, facetUI, isExpanded, null, facet);
  var styles = isExpanded ? openFacet : closeFacet;
  if (!isCollapsible) {
    styles = "";
  }
  return "<div class=\"".concat(facetName, " UNX-facet-item-d range-facets-block ").concat(styles, "\">").concat(rangeUi, "</div>");
});
;
// CONCATENATED MODULE: ./src/modules/facets/setFacetMethods.js






var isSelectedRange = function isSelectedRange(facetName, range) {
  var selections = this.getSelectedRanges(facetName);
  var from = range.from,
    end = range.end;
  var aR = "[".concat(from.name, " TO ").concat(end.name, "]");
  if (selections && selections.indexOf(aR) >= 0) {
    return true;
  }
  return false;
};
var clearAllFacets = function clearAllFacets() {
  this.state.selectedFacets = {};
  this.state.rangeFacet = [];
  this.state.categoryFilter = {};
};
var isExpandedFacet = function isExpandedFacet(facetName) {
  var expandedFacets = this.viewState.expandedFacets;
  var isFound = false;
  if (expandedFacets[facetName] === true) {
    isFound = true;
  }
  return isFound;
};
var setSearchFacetsText = function setSearchFacetsText(facet, value) {
  this.viewState.searchFacetsText[facet] = value;
  this.reRenderTextFacet(facet);
};
var getSearchFacetsText = function getSearchFacetsText(facet) {
  return this.viewState.searchFacetsText[facet] || "";
};
var reRenderTextFacet = function reRenderTextFacet(facetName) {
  var facetClass = this.options.facet.facetClass;
  var facetSearchTxt = this.getSearchFacetsText(facetName) || "";
  var items = document.querySelectorAll(".".concat(facetName, " .").concat(facetClass));
  items.forEach(function (item) {
    var _ref = item.dataset || {},
      id = _ref.id;
    if (id && id.toUpperCase().indexOf(facetSearchTxt.toUpperCase()) >= 0) {
      item.classList.remove("UNX-search-hidden");
    } else {
      item.classList.add("UNX-search-hidden");
    }
  });
};
var setRangeSlider = function setRangeSlider(value) {
  this.setRangeFacet(value);
  var facetName = value.facetName,
    start = value.start,
    end = value.end;
  this.getCallbackActions({
    facetName: facetName,
    facetAction: 'changeFacet',
    id: facetName
  }, 'facetClick');
  this.viewState.lastAction = "updatedRangeSlider";
  this.setPageStart(0);
  this.applyRangeFacet();
};
var checkFacets = function checkFacets() {
  var applyMultipleFilters = this.options.facet.applyMultipleFilters;
  if (applyMultipleFilters) {
    var qS = this.getStateFromUrl();
    var selectedFacets = qS.selectedFacets,
      selectedRanges = qS.selectedRanges;
    this.state.selectedFacets = selectedFacets;
    this.state.selectedRanges = selectedRanges;
  }
};
var setFacetMethods_setFacets = function setFacets(prototype) {
  prototype = Object.assign(prototype, {
    findChangedFacet: findChangedFacet,
    isSelectedRange: isSelectedRange,
    clearAllFacets: clearAllFacets,
    isExpandedFacet: isExpandedFacet,
    setSearchFacetsText: setSearchFacetsText,
    getSearchFacetsText: getSearchFacetsText,
    reRenderTextFacet: reRenderTextFacet,
    renderTextFacet: renderTextFacet,
    renderRangeFacet: renderRangeFacet,
    renderMultiLevelFacet: renderMultiLevelFacet,
    renderFacets: renderFacets,
    renderSelectedFacets: renderSelectedFacets,
    checkFacets: checkFacets,
    setRangeSlider: setRangeSlider
  });
};

// CONCATENATED MODULE: ./src/modules/searchResults/searchResultsView.js
var renderSearch = function renderSearch() {
  var _this = this;
  var searchResults = this.getSearchResults();
  if (!searchResults) {
    return "";
  }
  var products = searchResults.products;
  var self = this;
  var swatches = this.options.swatches;
  var gridCount = this.options.products.gridCount;
  var productViewType = this.viewState.productViewType;
  var productsUI = "";
  var idx = Number(this.state.startPageNo);
  var swatchUI = "";
  if (productViewType === "GRID" && gridCount && gridCount > 1) {
    products.forEach(function (product, index) {
      var row = index % gridCount;
      if (row === 0) {
        productsUI += "<div class=\"UNX-row\">";
      }
      var pRank = index + idx + 1;
      var mappedProduct = _this.mapProductAttrs(product);
      if (swatches.enabled) {
        swatchUI = _this.renderSwatchBtns(product);
      }
      productsUI += self.options.products.template.bind(self)(mappedProduct, pRank, swatchUI, productViewType, _this.options.products);
      if (row === gridCount - 1) {
        productsUI += "</div>";
      }
    });
  } else {
    productsUI = products.map(function (product, index) {
      var pRank = index + idx + 1;
      var mappedProduct = _this.mapProductAttrs(product);
      if (swatches.enabled) {
        swatchUI = _this.renderSwatchBtns(product);
      }
      return self.options.products.template.bind(self)(mappedProduct, pRank, swatchUI, productViewType, _this.options.products);
    }).join('');
  }
  return productsUI;
};
/* harmony default export */ var searchResultsView = (renderSearch);
// CONCATENATED MODULE: ./src/modules/searchResults/actions.js
var onProductItemClick = function onProductItemClick(e) {
  var path = e.path || e.composedPath && e.composedPath();
  var _this$options$product = this.options.products,
    productItemClass = _this$options$product.productItemClass,
    attributesMap = _this$options$product.attributesMap;
  var id = productItemClass.replace(".", "");
  var dataset = e.target.dataset;
  var elem = path.find(function (item) {
    var itemCss = item.className;
    return itemCss.indexOf(id) >= 0;
  });
  var _ref = dataset || {},
    action = _ref.action,
    swatchId = _ref.swatchId;
  if (action === this.actions.changeSwatch && swatchId) {
    elem.querySelectorAll(".UNX-img-wrapper").forEach(function (imgBlock) {
      var btnE = elem.querySelector(".".concat(imgBlock.id));
      if (imgBlock.id === swatchId) {
        imgBlock.classList.remove("UNX-swatch-hidden");
        elem.querySelector(".".concat(swatchId)).classList.add("UNX-selected-swatch");
      } else {
        imgBlock.classList.add("UNX-swatch-hidden");
        btnE.classList.remove("UNX-selected-swatch");
      }
    });
    this.options.onEvent(this, dataset.action);
    return false;
  }
  var product = null;
  dataset = elem.dataset;
  if (dataset.id) {
    product = this.getProductByPropValue(attributesMap.unxId, dataset.id);
  }
  if (product && elem.dataset.prank) {
    // check if pRank is available in the dataset 
    // and update the corresponding start number of the product clicked it to the URL
    product.prank = elem.dataset.prank;
    var urlParams = new URLSearchParams(window.location.search);
    var pageNo = Math.ceil(Number(product.prank) / Number(urlParams.get(this.options.pagination.usePageAndCount ? 'count' : 'rows')));
    if (this.options.pagination.usePageAndCount) {
      urlParams.set('page', pageNo);
    } else {
      urlParams.set('start', Number((pageNo - 1) * Number(urlParams.get('rows'))));
    }
    history.replaceState(null, null, this.urlSearchParamsToStr(urlParams));
  }
  this.options.products.onProductClick(product, e);
  this.getCallbackActions(product, "click");
};

// CONCATENATED MODULE: ./src/modules/searchResults/noResultsView.js
function renderNoResults(query) {
  return this.options.noResults.template(query);
}
/* harmony default export */ var noResultsView = (renderNoResults);
// CONCATENATED MODULE: ./src/modules/searchResults/setSearch.js



var mapProductAttrs = function mapProductAttrs(product) {
  var products = this.options.products;
  var attributesMap = products.attributesMap;
  var attrArray = Object.keys(attributesMap);
  attrArray.forEach(function (item) {
    var pI = product[item];
    var mI = attributesMap[item];
    if (!pI) {
      product[item] = product[mI];
    }
  });
  return product;
};
var setSearch_setSearch = function setSearch(prototype) {
  prototype = Object.assign(prototype, {
    renderSearch: searchResultsView,
    onProductItemClick: onProductItemClick,
    renderNoResults: noResultsView,
    mapProductAttrs: mapProductAttrs
  });
};

// CONCATENATED MODULE: ./src/modules/productViewType/renderProductViewTypeUI.js
function renderProductViewTypeUI() {
  var productView = this.options.productView;
  if (productView.el) {
    var productViewType = this.viewState.productViewType;
    var results = this.getSearchResults();
    if (results && results.numberOfProducts === 0) {
      this.productViewTypeWrapper.innerHTML = "";
    } else {
      this.productViewTypeWrapper.innerHTML = this.options.productView.template.bind(this)(productViewType, productView);
    }
  }
}
;
/* harmony default export */ var productViewType_renderProductViewTypeUI = (renderProductViewTypeUI);
// CONCATENATED MODULE: ./src/modules/utils/extend.js
var extend = function extend() {
  // Variables
  var extended = {};
  var deep = true;
  var i = 0;
  var length = arguments.length;

  // Check if a deep merge
  if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {
    deep = arguments[0];
    i++;
  }

  // Merge the object into the extended object
  var merge = function merge(obj) {
    for (var prop in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, prop)) {
        if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
          extended[prop] = extend(true, extended[prop], obj[prop]);
        } else {
          extended[prop] = obj[prop];
        }
      }
    }
  };

  // Loop through each object and conduct a merge
  for (; i < length; i++) {
    var obj = arguments[i];
    merge(obj);
  }
  return extended;
};
/* harmony default export */ var utils_extend = (extend);
// CONCATENATED MODULE: ./src/modules/productViewType/actions.js

function onPageViewTypeClick(e) {
  var elem = e.target;
  var action = this.options.productView.action;
  var productViewType = this.viewState.productViewType;
  var selected = action === "click" ? elem : elem.options[elem.selectedIndex];
  var dataSet = selected.dataset;
  var viewAction = dataSet.viewAction;
  this.checkFacets();
  if (productViewType !== viewAction) {
    this.viewState.productViewType = viewAction;
    var extraParams = this.options.extraParams;
    this.options.extraParams = utils_extend(true, {}, extraParams, {
      "viewType": viewAction
    });
    this.setPageStart(0);
    this.state.isBack = false;
    this.viewState.lastAction = "viewType";
    this.getResults.bind(this)();
  }
}

// CONCATENATED MODULE: ./src/modules/productViewType/setProductViewType.js


var setProductViewType_setProductViewType = function setProductViewType(prototype) {
  prototype = Object.assign(prototype, {
    onPageViewTypeClick: onPageViewTypeClick,
    renderProductViewTypeUI: productViewType_renderProductViewTypeUI
  });
};

// CONCATENATED MODULE: ./src/modules/pagination/renderPagination.js
var renderPagination = function renderPagination() {
  var pagination = this.options.pagination;
  var type = pagination.type;
  var paginationUI = "";
  if (type !== 'INFINITE_SCROLL') {
    var pageInfo = this.getPaginationInfo();
    if (pageInfo) {
      paginationUI = pagination.template.bind(this)(pageInfo);
    }
  }
  return paginationUI;
};
/* harmony default export */ var pagination_renderPagination = (renderPagination);
// CONCATENATED MODULE: ./src/modules/pagination/infiniteScroller.js
function getScrollXY() {
  var scrOfX = 0;
  var scrOfY = 0;
  if (typeof window.pageYOffset == 'number') {
    //Netscape compliant
    scrOfY = window.pageYOffset;
    scrOfX = window.pageXOffset;
  } else if (document.body && (document.body.scrollLeft || document.body.scrollTop)) {
    //DOM compliant
    scrOfY = document.body.scrollTop;
    scrOfX = document.body.scrollLeft;
  } else if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
    //IE6 standards compliant mode
    scrOfY = document.documentElement.scrollTop;
    scrOfX = document.documentElement.scrollLeft;
  }
  return [scrOfX, scrOfY];
}

// update the start position in the URL
var updatePageStart = function updatePageStart(context, page) {
  var autoScrollParams = context.getAutoScrollParams();
  var rows = context.options.pagination.usePageAndCount ? parseInt(autoScrollParams.get('count')) : parseInt(autoScrollParams.get('rows'));
  context.setPageStart((page - 1) * rows);
  if (context.options.pagination.usePageAndCount) {
    autoScrollParams.set('page', page);
  } else {
    autoScrollParams.set('start', (page - 1) * rows);
  }
  history.replaceState(null, null, context.urlSearchParamsToStr(autoScrollParams));
};

// callback on page scroll 
var onInfiniteScroll = function onInfiniteScroll() {
  var scrollTop = getScrollXY()[1];
  var rect = this.options.pagination.infiniteScrollTriggerEl.getBoundingClientRect();
  // check if the products container is visible in the viewport and height is initialized
  if (this.productContainerHeight != 0 && (rect.bottom > 0 || rect.top < window.innerHeight)) {
    var autoScrollParams = this.getAutoScrollParams();
    var page = Math.ceil(scrollTop / this.productContainerHeight) + this.initialPage - 1;
    var start = 0,
      rows = 0;
    if (this.options.pagination.usePageAndCount) {
      start = (parseInt(autoScrollParams.get('page')) - 1) * parseInt(autoScrollParams.get('count'));
      rows = parseInt(autoScrollParams.get('count'));
    } else {
      start = parseInt(autoScrollParams.get('start'));
      rows = parseInt(autoScrollParams.get('rows'));
    }
    // const start = parseInt(autoScrollParams.get('start')) || 0;
    // // const rows = parseInt(autoScrollParams.get('rows')) || 0;
    // const rows = this.options.pagination.usePageAndCount? parseInt(autoScrollParams.get('count')) : parseInt(autoScrollParams.get('rows'));
    var elHeight = document.getElementById('searchResultsWrapper').clientHeight || 0;
    var currentProducts = 0;
    var totalProducts = 0;
    var productResponse = window.unbxdSearch.state.responseObj.response || {};
    if (productResponse) {
      currentProducts = productResponse.products ? productResponse.products.length : 0;
      totalProducts = productResponse.numberOfProducts || 0;
    }
    if (scrollTop + window.innerHeight >= elHeight - this.options.pagination.heightDiffToTriggerNextPage && scrollTop + window.innerHeight < elHeight && currentProducts < totalProducts && !this.state.loading) {
      // fetch next page when user scrolls to the bottom of threshold zone
      updatePageStart(this, page + 1);
      this.viewState.lastAction = "next_page_loaded";
      this.renderNewResults('next');
    } else if (scrollTop <= 0 && page < this.initialPage && !(page < 1) && !this.state.loading) {
      // fetch previous page
      updatePageStart(this, page);
      this.viewState.lastAction = "prev_page_loaded";
      this.initialPage = this.initialPage - 1;
      this.renderNewResults('prev');
    }
    if (start / rows + 1 != page && page != 0) {
      // update page number in the URL as user scrolls up and down
      updatePageStart(this, page);
    }
  }
};
/* harmony default export */ var infiniteScroller = (onInfiniteScroll);
// CONCATENATED MODULE: ./src/modules/pagination/infiniteScrollV3.js
function infiniteScrollV3_getScrollXY() {
  var scrOfX = 0;
  var scrOfY = 0;
  if (typeof window.pageYOffset == 'number') {
    //Netscape compliant
    scrOfY = window.pageYOffset;
    scrOfX = window.pageXOffset;
  } else if (document.body && (document.body.scrollLeft || document.body.scrollTop)) {
    //DOM compliant
    scrOfY = document.body.scrollTop;
    scrOfX = document.body.scrollLeft;
  } else if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
    //IE6 standards compliant mode
    scrOfY = document.documentElement.scrollTop;
    scrOfX = document.documentElement.scrollLeft;
  }
  return [scrOfX, scrOfY];
}
var infiniteScrollV3 = function infiniteScrollV3() {
  var _this = this;
  return new Promise(function (resolve, reject) {
    var productsContainer = _this.options.pagination.infiniteScrollTriggerEl;
    // Select the UNX-post-loader and UNX-pre-loader elements
    var postLoader = document.querySelector('.UNX-post-loader');
    var preLoader = document.querySelector('.UNX-pre-loader');
    // const loadingIndicator = document.querySelector('#loading-indicator');
    var urlParams = new URLSearchParams(window.location.search);
    var currentUrlPage, productsPerPage;
    if (_this.options.pagination.usePageAndCount) {
      productsPerPage = Number(urlParams.get('count'));
      currentUrlPage = Number(urlParams.get('page')) || 1;
    } else {
      currentUrlPage = Number(urlParams.get('start') / urlParams.get('rows')) + 1;
      productsPerPage = Number(urlParams.get('rows'));
    }
    var hasScrolledToTop = false; // Initialize a flag to track whether the user has scrolled to the top of the container before

    // const observer = new IntersectionObserver(entries => {
    //     entries.forEach(entry => {
    //         if (entry.isIntersecting && !this.state.isLoading) {
    //                 currentPage++;
    //                 // fetchProducts();
    //                 this.setPageStart((currentPage - 1) * productsPerPage)
    //                 this.viewState.lastAction = "next_page_loaded";
    //                 this.renderNewResults('next', currentPage);

    //         }
    //     });
    // }, {threshold: [0.5]});

    // observer.observe(productsContainer);

    var updateUrl = function updateUrl(scrollTop) {
      var products = document.querySelectorAll('.product-item');
      var currentPage = null;
      for (var i = 0; i < products.length; i++) {
        var product = products[i];
        var rank = parseInt(product.dataset.prank);
        if (product.offsetTop > scrollTop && product.offsetTop < scrollTop + productsContainer.clientHeight) {
          currentPage = Math.ceil(rank / productsPerPage);
          break;
        }
      }
      if (currentPage !== null && currentPage !== currentUrlPage) {
        currentUrlPage = currentPage;
        // window.history.replaceState({}, document.title, `?page=${currentPage}`);
        if (_this.options.pagination.usePageAndCount) {
          urlParams.set('page', currentPage);
        } else {
          urlParams.set('start', (currentPage - 1) * productsPerPage);
        }
        history.replaceState(null, null, _this.urlSearchParamsToStr(urlParams));
      }
    };

    // Create a new IntersectionObserver object for the UNX-post-loader element
    var postLoaderObserver = new IntersectionObserver(function (entries) {
      // Check if the UNX-post-loader element is intersecting with the viewport
      if (entries[0].isIntersecting) {
        //   // Increment the current page number
        //   currentPage++;
        //   // Fetch more products from the next page
        //   fetchProducts(currentPage);
        currentUrlPage++;
        // fetchProducts();
        _this.setPageStart((currentUrlPage - 1) * productsPerPage);
        _this.viewState.lastAction = "next_page_loaded";
        _this.renderNewResults('next', currentUrlPage);
      }
    }, {
      threshold: 1,
      rootMargin: "0px 0px 100px 0px"
    });

    //   // Create a new IntersectionObserver object for the UNX-pre-loader element
    //   const preLoaderObserver = new IntersectionObserver(entries => {
    //     // Check if the UNX-pre-loader element is intersecting with the viewport
    //     if (entries[0].isIntersecting && currentPage > 1) {
    //     //   // Decrement the current page number
    //     //   currentPage--;
    //     //   // Fetch previous page products
    //     //   fetchProducts(currentPage);
    //     currentPage--;
    //                 // fetchProducts();
    //                 this.setPageStart((currentPage - 1) * productsPerPage)
    //                 this.viewState.lastAction = "prev_page_loaded";
    //                 this.renderNewResults('prev');
    //     }
    //   }, { threshold: 1 });

    // Initialize the IntersectionObserver for the pre-loader element
    var preLoaderObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && currentUrlPage > 1) {
          currentUrlPage--;
          // fetchProducts();
          _this.setPageStart((currentUrlPage - 1) * productsPerPage);
          _this.viewState.lastAction = "prev_page_loaded";
          _this.renderNewResults('prev');
        }
      });
    }, {
      threshold: 0,
      // Trigger when the element is fully visible in the viewport
      rootMargin: "-".concat(productsContainer.offsetTop, "px 0px 0px 0px") // Offset the root margin by the height of the products container
    });

    //   postLoaderObserver.observe(postLoader);
    // preLoaderObserver.observe(preLoader);

    var containerObserverCallback = function containerObserverCallback(entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          // If the pre-loader is visible, start observing it
          if (preLoader.offsetTop < entry.boundingClientRect.top && hasScrolledToTop) {
            preLoaderObserver.observe(preLoader);
          }
          // If the post-loader is visible, start observing it
          if (postLoader.offsetTop < entry.boundingClientRect.bottom) {
            postLoaderObserver.observe(postLoader);
          }
          var scrollTop = infiniteScrollV3_getScrollXY()[1];
        }
        // else {
        //     // If the container is not visible, stop observing both the pre-loader and post-loader elements
        //     preLoaderObserver.unobserve(preLoader);
        //     postLoaderObserver.unobserve(postLoader);
        // }
      });
    };

    // Set up an IntersectionObserver on the products container to monitor for changes to the scroll position
    var containerObserver = new IntersectionObserver(containerObserverCallback, {
      threshold: 0 // Trigger when the container is fully visible in the viewport
    });

    // Set up an event listener to update the hasScrolledToTop flag when the user scrolls to the top of the container
    window.removeEventListener('scroll', onInfiniteScrollCb);
    window.addEventListener('scroll', onInfiniteScrollCb);
    // window.removeEventListener('event', onInfiniteResizeCb);
    // window.addEventListener('event', onInfiniteResizeCb);

    var productObserver = new ResizeObserver(function (entries) {
      entries.forEach(function (entry) {
        var containerHeight = entry.contentRect.height;
        onInfiniteScrollCb();
        containerObserver.disconnect();
        // observer.observe(productContainer, { threshold: [ 1 ] });
        containerObserver.observe(productsContainer);
        // preLoaderObserver.disconnect();
        // preLoaderObserver.observe(preLoader);
        postLoaderObserver.disconnect();
        postLoaderObserver.observe(postLoader);
      });
    });

    // postLoaderObserver.observe(postLoader);
    // preLoaderObserver.observe(preLoader);
    // Observe the container element

    // function onInfiniteResizeCb(e){
    //     productObserver.disconnect();
    //     productObserver.observe(productsContainer);
    // }

    function onInfiniteScrollCb() {
      var scrollTop = infiniteScrollV3_getScrollXY()[1];
      updateUrl(scrollTop);
      if (scrollTop === 0) {
        hasScrolledToTop = true;
        preLoaderObserver.disconnect();
        productObserver.disconnect();
        preLoaderObserver.observe(preLoader);
        productObserver.observe(productsContainer);
      } else {
        hasScrolledToTop = false;
        // containerObserverCallback([ { isIntersecting: true } ], containerObserver);
      }
      // productObserver.observe(productsContainer);
      // containerObserver.observe(productsContainer);
    }

    // containerObserver.observe(productsContainer);
    productObserver.disconnect();
    productObserver.observe(productsContainer);
    // Manually trigger the container observer callback function on page load
    // containerObserverCallback([ { isIntersecting: true } ], containerObserver);
  });
};

/* harmony default export */ var pagination_infiniteScrollV3 = (infiniteScrollV3);
// CONCATENATED MODULE: ./src/modules/pagination/actions.js
var triggerNextPage = function triggerNextPage(context, next, action) {
  if (context.options.pagination.type !== "INFINITE_SCROLL") {
    context.viewState.lastAction = "pagination";
    context.setPageStart(next);
  }
  context.getResults("", true, action);
  context.options.onEvent(context, context.events.pageNext, {
    value: next
  });
};
function renderNewResults(action, currentPage) {
  var pageInfo = this.getPaginationInfo();
  var _this$options = this.options,
    pagination = _this$options.pagination,
    onEvent = _this$options.onEvent;
  var start = pageInfo.start,
    productsLn = pageInfo.productsLn,
    numberOfProducts = pageInfo.numberOfProducts,
    rows = pageInfo.rows,
    isNext = pageInfo.isNext,
    isPrev = pageInfo.isPrev;
  if (pagination.type === "CLICK_N_SCROLL") {
    var next = start + rows;
    if (isNext) {
      this.viewState.isInfiniteStarted = true;
      triggerNextPage(this, next);
    }
  } else if (pagination.type === "INFINITE_SCROLL") {
    if (action === this.actions.next) {
      // const next = start+rows;
      var _next = (currentPage - 1) * rows;
      if (isNext) {
        this.viewState.isInfiniteStarted = true;
        triggerNextPage(this, _next, action);
      }
    }
    if (action === this.actions.prev) {
      // const prev = start-rows;
      var prev = (currentPage - 1) * rows;
      if (isPrev) {
        this.viewState.isInfiniteStarted = true;
        triggerNextPage(this, prev, action);
      }
    }
  } else {
    if (action === this.actions.next) {
      var _next2 = start + rows;
      if (isNext) {
        triggerNextPage(this, _next2);
      }
    }
    if (action === this.actions.prev) {
      var _prev = start - rows;
      if (isPrev) {
        this.viewState.lastAction = "pagination";
        triggerNextPage(this, _prev);
        onEvent(this, this.events.pagePrev, {
          value: _prev
        });
      }
    }
  }
}
;
function paginationAction(e) {
  var _e$target$dataset = e.target.dataset,
    pageAction = _e$target$dataset.pageAction,
    pageNo = _e$target$dataset.pageNo;
  this.checkFacets();
  this.viewState.lastDidYouMean = "";
  if (pageAction === 'paginate') {
    this.viewState.lastAction = "pagination";
    this.setPageStart(pageNo);
    this.getResults();
  } else {
    this.renderNewResults(pageAction);
  }
}

// CONCATENATED MODULE: ./src/modules/pagination/setPagination.js




var getAutoScrollParams = function getAutoScrollParams() {
  var autoScrollParams = new URLSearchParams(window.location.search);
  return autoScrollParams;
};
var setPagination_setPagination = function setPagination(prototype) {
  prototype = Object.assign(prototype, {
    renderPagination: pagination_renderPagination,
    renderNewResults: renderNewResults,
    paginationAction: paginationAction,
    onInfiniteScroll: infiniteScroller,
    getAutoScrollParams: getAutoScrollParams,
    infiniteScrollV3: pagination_infiniteScrollV3
  });
};

// CONCATENATED MODULE: ./src/modules/sort/actions.js
function sortAction(e) {
  var elem = e.target;
  this.viewState.lastDidYouMean = "";
  var selected = this.options.sort.action === "click" ? elem : elem.options[elem.selectedIndex];
  var dataSet = selected.dataset;
  var _elem$dataset = elem.dataset,
    action = _elem$dataset.action,
    value = _elem$dataset.value;
  var sortVal = elem.value || value || "";
  var changeSort = this.events.changeSort;
  this.checkFacets();
  if (action === this.actions.clearSort) {
    this.applySort("");
    this.options.onEvent(this, action);
  }
  if (action === this.actions.changeSort) {
    this.applySort(sortVal);
    this.options.onEvent(this, changeSort, {
      sort: sortVal
    });
  }
}
;

// CONCATENATED MODULE: ./src/modules/sort/renderSort.js
function renderSort() {
  var _this = this;
  var results = this.getSearchResults();
  var sort = this.options.sort;
  var sortWrappers = this.sortWrappers;
  sortWrappers.forEach(function (wrapper) {
    var ui = "";
    if (results && results.numberOfProducts > 0) {
      ui = _this.options.sort.template.bind(_this)(_this.getSelectedSort(), sort);
    }
    wrapper.innerHTML = ui;
  });
}
/* harmony default export */ var sort_renderSort = (renderSort);
// CONCATENATED MODULE: ./src/modules/sort/setSort.js


var setSort_setSort = function setSort(prototype) {
  prototype = Object.assign(prototype, {
    sortAction: sortAction,
    renderSort: sort_renderSort
  });
};

// CONCATENATED MODULE: ./src/modules/input/actions.js
var setInputValue = function setInputValue(e) {
  var val = this.options.searchBoxEl.value;
  if (!val.replace(/\s/g, '').length) {
    return false;
  }
  this.options.productType = "SEARCH";
  val = val.indexOf("#") === 0 ? val.replace("#", "") : val;
  if (val) {
    this.resetAll();
    this.changeInput(val, this.events.changeInput);
    this.options.products.productType = "SEARCH";
    this.viewState.loadedFromSuggestion = false;
    this.state.selectedSort = "";
    this.setPageStart(0);
    this.resetViewState();
    this.getResults();
  } else {
    this.searchResultsWrapper.innerHTML = null;
  }
};

// CONCATENATED MODULE: ./src/modules/input/setInput.js

var setInput_setInput = function setInput(prototype) {
  prototype = Object.assign(prototype, {
    setInputValue: setInputValue
  });
};

// CONCATENATED MODULE: ./src/modules/didYouMean/renderSpellCheck.js
var renderDidYouMean = function renderDidYouMean(suggestion) {
  var userInput = this.state.userInput;
  var pages = this.getPaginationInfo() || {};
  var didYouMean = this.getDidYouMeanFromResponse();
  var type = this.options.pagination.type;
  var _this$options$spellCh = this.options.spellCheck,
    spellCheck = _this$options$spellCh.spellCheck,
    enabled = _this$options$spellCh.enabled;
  var viewState = this.viewState;
  var loadedFromSuggestion = viewState.loadedFromSuggestion,
    lastDidYouMean = viewState.lastDidYouMean;
  if (type !== "FIXED_PAGINATION" && pages) {
    var start = pages.start,
      productsLn = pages.productsLn;
    pages.productsLn = productsLn + start;
    pages.start = 0;
  }
  var sugString = didYouMean.length > 0 ? didYouMean[0].suggestion : "";
  var ui = "";
  if (sugString && !loadedFromSuggestion) {
    this.viewState.lastDidYouMean = userInput;
    this.viewState.loadedFromSuggestion = true;
    if (enabled) {
      this.getResults(sugString);
    }
  } else {
    this.viewState.lastDidYouMean = "";
  }
  ui = this.options.spellCheck.template.bind(this)(userInput, lastDidYouMean, pages);
  if (!enabled && sugString) {
    ui = this.options.spellCheck.template.bind(this)(sugString, userInput, pages);
  }
  this.spellCheckWrappers.forEach(function (wrapper) {
    wrapper.innerHTML = ui;
  });
};
/* harmony default export */ var renderSpellCheck = (renderDidYouMean);
// CONCATENATED MODULE: ./src/modules/didYouMean/setSpellCheck.js

var setSuggestion = function setSuggestion(e) {
  var txt = this.getSpellCheckSuggested();
  var didLength = txt.length;
  var target = e.target;
  var _ref = target || {},
    dataset = _ref.dataset;
  var userInput = this.state.userInput;
  if (dataset && dataset.action === "getSuggestion") {
    this.resetAll();
    this.setPageStart(0);
    this.getResults(didLength ? txt[0] : userInput);
    this.viewState.lastDidYouMean = null;
    this.viewState.loadedFromSuggestion = false;
  }
};
var setSpellCheck_setSpellCheck = function setSpellCheck(prototype) {
  prototype = Object.assign(prototype, {
    renderDidYouMean: renderSpellCheck,
    setSuggestion: setSuggestion
  });
};

// CONCATENATED MODULE: ./src/modules/breadcrumbs/actions.js
function onBreadCrumbClick(e) {}
;
function renderBreadCrumbs() {
  var _window$unbxdAnalytic,
    _window$unbxdAnalytic2,
    _this = this;
  var selectedCategories = this.getSelectedMultilevelFacet();
  if (this.options.products.productType === 'CATEGORY' && ((_window$unbxdAnalytic = window.unbxdAnalyticsConf) === null || _window$unbxdAnalytic === void 0 ? void 0 : (_window$unbxdAnalytic2 = _window$unbxdAnalytic.page) === null || _window$unbxdAnalytic2 === void 0 ? void 0 : _window$unbxdAnalytic2.indexOf("categoryPath")) !== -1) {
    selectedCategories = ['categoryPath'];
  }
  var ui = "";
  selectedCategories.forEach(function (item) {
    var data = _this.getBreadCrumbsList(item);
    var breadcrumb = _this.options.breadcrumb;
    ui += _this.options.breadcrumb.template(data, breadcrumb);
  });
  return ui;
}

// CONCATENATED MODULE: ./src/modules/breadcrumbs/setBreadcrumbs.js

var setBreadcrumbs_setBreadCrumbs = function setBreadCrumbs(prototype) {
  prototype = Object.assign(prototype, {
    onBreadCrumbClick: onBreadCrumbClick,
    renderBreadCrumbs: renderBreadCrumbs
  });
};

// CONCATENATED MODULE: ./src/modules/swatches/actions.js
function renderSwatchBtns(product) {
  var swatchData = this.getSwatches(product, this.options.swatches.attributesMap);
  var swatches = this.options.swatches;
  return this.options.swatches.template.bind(this)(swatchData, swatches, product);
}
;
/* harmony default export */ var actions = (renderSwatchBtns);
// CONCATENATED MODULE: ./src/modules/swatches/setSwatches.js

var setSwatches_setSwatches = function setSwatches(prototype) {
  prototype = Object.assign(prototype, {
    renderSwatchBtns: actions
  });
};

// CONCATENATED MODULE: ./src/modules/pageSize/actions.js
var onClickPageSize = function onClickPageSize(e) {
  var elem = e.target;
  this.viewState.lastDidYouMean = "";
  var selected = this.options.pagesize.action === "click" ? elem : elem.options[elem.selectedIndex];
  var val = selected.id;
  var pageSizeChange = this.events.pageSizeChange;
  if (val) {
    this.checkFacets();
    this.setPageSize(Number(val));
    this.getResults.bind(this)();
    this.options.onEvent(this, pageSizeChange, {
      count: val
    });
  }
};

// CONCATENATED MODULE: ./src/modules/pageSize/setPageSize.js


var renderPageSize = function renderPageSize() {
  var pagesize = this.options.pagesize;
  var selected = pagesize.pageSize;
  var qParams = this.getQueryParams();
  if (qParams) {
    selected = this.state.pageSize;
  }
  var results = this.getSearchResults();
  if (results && results.numberOfProducts === 0) {
    this.pageSizeWrapper.innerHTML = "";
  } else {
    this.pageSizeWrapper.innerHTML = this.options.pagesize.template.bind(this)(selected, pagesize);
  }
};
var setPageSize_setPageSize = function setPageSize(prototype) {
  prototype = Object.assign(prototype, {
    pageSizeUi: pageSizeView,
    onClickPageSize: onClickPageSize,
    renderPageSize: renderPageSize
  });
};

// CONCATENATED MODULE: ./src/modules/analytics/setAnalytics.js
var trackSearch = function trackSearch(value) {
  Unbxd.track("search", {
    "query": value
  });
};
var trackProductClick = function trackProductClick(value) {
  var uniqueId = value.uniqueId,
    sku = value.sku,
    prank = value.prank;
  Unbxd.track("click", {
    "pid": uniqueId || sku,
    "prank": prank,
    "requestId": null
  });
};
var trackImpression = function trackImpression() {
  var results = this.getSearchResults();
  var query = this.getSearchQuery();
  var productType = this.options.productType;
  var products = results.products;
  var obj = {
    'pids_list': []
  };
  if (productType === "SEARCH") {
    obj['query'] = query;
  }
  if (products) {
    var pids = [];
    products.forEach(function (product) {
      var sku = product.sku,
        uniqueId = product.uniqueId;
      var pid = uniqueId || sku;
      pids.push(pid);
    });
    obj['pids_list'] = pids;
    Unbxd.track('search_impression', obj);
  }
};
var trackFacetClick = function trackFacetClick(state, type) {
  var textFacets = this.getSelectedFacets();
  var rangeFacets = this.state.rangeFacet;
  var categoryField = this.state.categoryFilter;
  var textFacetsArr = Object.keys(textFacets);
  var rangeFacetsArr = Object.keys(rangeFacets);
  var categoryArr = Object.keys(categoryField);
  var facetArr = {};
  textFacetsArr.forEach(function (facet) {
    var valObj = textFacets[facet];
    var arr = [];
    valObj.forEach(function (val) {
      arr.push(val.name);
    });
    facetArr[facet] = arr;
  });
  rangeFacetsArr.forEach(function (facet) {
    // const val =rangeFacetsArr[facet];
    var val = rangeFacets[facet][0];
    if (val) {
      var modifiedVal = val.replace(/\[|\]/g, '').split(',');
      facetArr[facet] = modifiedVal;
    }
  });
  categoryArr.forEach(function (category) {
    var val = categoryField[category];
    var original = val.join('>');
    facetArr[category] = original;
  });
  var query = this.getSearchQuery();
  Unbxd.track('facets', {
    'query': query,
    'facets': facetArr
  });
};
var trackCategoryPageLoad = function trackCategoryPageLoad(instance, type) {
  if (window.UnbxdAnalyticsConf) {
    //window.UnbxdAnalyticsConf["page_type"] ="CATEGORY_PATH";
    Unbxd.track("categoryPage", window.UnbxdAnalyticsConf);
  }
};
var getCallbackActions = function getCallbackActions(state, type) {
  var Unbxd = window.Unbxd || null;
  var unbxdAnalytics = this.options.unbxdAnalytics;
  if (!Unbxd || !unbxdAnalytics || Unbxd && !Unbxd.track) {
    return false;
  }
  if (state) {
    switch (type) {
      case 'CHANGE_INPUT':
        this.trackSearch(state);
        break;
      case 'click':
        this.trackProductClick(state);
        break;
      case 'AFTER_API_CALL':
        this.trackImpression();
        break;
      case 'facetClick':
        this.trackFacetClick(state, type);
      case 'categoryPage':
        this.trackCategoryPageLoad(state, type);
        break;
    }
  }
};
var setAnalytics = function setAnalytics(prototype) {
  prototype = Object.assign(prototype, {
    trackSearch: trackSearch,
    getCallbackActions: getCallbackActions,
    trackProductClick: trackProductClick,
    trackImpression: trackImpression,
    trackFacetClick: trackFacetClick,
    trackCategoryPageLoad: trackCategoryPageLoad
  });
};

// CONCATENATED MODULE: ./src/common/constants/selectors.js
var unxSelectors = {
  unxPageSize: 'unxPageSize'
};
/* harmony default export */ var selectors = (unxSelectors);
// CONCATENATED MODULE: ./src/core/reRender.js
var reRender = function reRender() {
  var _this = this;
  var _this$options = this.options,
    onEvent = _this$options.onEvent,
    spellCheck = _this$options.spellCheck,
    pagination = _this$options.pagination,
    productType = _this$options.productType,
    searchBoxEl = _this$options.searchBoxEl,
    loader = _this$options.loader,
    breadcrumb = _this$options.breadcrumb,
    productView = _this$options.productView,
    facet = _this$options.facet;
  var _this$events = this.events,
    beforeRender = _this$events.beforeRender,
    beforeNoResultRender = _this$events.beforeNoResultRender,
    afterNoResultRender = _this$events.afterNoResultRender,
    afterRender = _this$events.afterRender;
  onEvent(this, beforeRender);
  if (loader.el) {
    loader.el.innerHTML = "";
  }
  var results = this.getSearchResults();
  var qParams = this.getQueryParams() || {};
  var query = this.getSearchQuery();
  var noResultCss = "UNX-no-results-wrap";
  var _this$viewState = this.viewState,
    lastAction = _this$viewState.lastAction,
    productViewType = _this$viewState.productViewType;
  if (productType === "SEARCH" && searchBoxEl) {
    searchBoxEl.value = this.state.userInput;
  }
  if (productType !== "SEARCH" && searchBoxEl) {
    searchBoxEl.value = "";
  }
  var searchResultsWrapper = this.searchResultsWrapper,
    paginationWrappers = this.paginationWrappers,
    breadcrumbWrapper = this.breadcrumbWrapper;
  var _this$viewState2 = this.viewState,
    noResultLoaded = _this$viewState2.noResultLoaded,
    isInfiniteStarted = _this$viewState2.isInfiniteStarted;
  if (results && results.numberOfProducts === 0) {
    var redirect = this.state.responseObj.redirect || {};
    if (Object.keys(redirect).length) {
      return;
    }
    onEvent(this, beforeNoResultRender);
    this.viewState.noResultLoaded = true;
    searchResultsWrapper.classList.add(noResultCss);
    searchResultsWrapper.innerHTML = this.renderNoResults(query);
    if (!qParams.filter) {
      this.renderFacets();
    }
    onEvent(this, afterNoResultRender);
  } else {
    var viewCss = productViewType === "LIST" ? "UNX-list-block" : "UNX-grid-block";
    searchResultsWrapper.classList.remove("UNX-list-block");
    searchResultsWrapper.classList.remove("UNX-grid-block");
    searchResultsWrapper.classList.add(viewCss);
    searchResultsWrapper.classList.remove(noResultCss);
    if (isInfiniteStarted) {
      this.viewState.isInfiniteStarted = false;
      if (noResultLoaded) {
        this.viewState.noResultLoaded = true;
        searchResultsWrapper.innerHTML = this.renderSearch();
      } else {
        if (lastAction === "prev_page_loaded") {
          // searchResultsWrapper.innerHTML = this.renderSearch() + searchResultsWrapper.innerHTML;
          var scrollTop = window.pageYOffset;
          searchResultsWrapper.insertAdjacentHTML('afterbegin', this.renderSearch());
          // const newHeight = container.scrollHeight;
          searchResultsWrapper.scrollTop = scrollTop;
        } else {
          // searchResultsWrapper.innerHTML += this.renderSearch();
          searchResultsWrapper.insertAdjacentHTML('beforeend', this.renderSearch());
        }
      }
    } else {
      searchResultsWrapper.innerHTML = "";
      searchResultsWrapper.innerHTML = this.renderSearch();
    }
  }
  this.renderFacets();
  this.renderSelectedFacets();
  this.renderBannerUI();
  if (productView.enabled) {
    this.renderProductViewTypeUI();
  }
  this.renderPageSize();
  this.renderSort();
  if (breadcrumb.enabled) {
    breadcrumbWrapper.innerHTML = this.renderBreadCrumbs();
  }
  var suggestion = this.getSpellCheckSuggested();
  if (spellCheck.el) {
    this.renderDidYouMean(suggestion);
  }
  if (lastAction === "pagination") {
    pagination.onPaginate.bind(this)(this.getPaginationInfo());
  }
  var autoScrollParams = this.getAutoScrollParams();
  // if (pagination.type === 'INFINITE_SCROLL') {
  //     if (!this.productContainerHeight) {
  //         this.productContainerHeight = pagination.infiniteScrollTriggerEl.clientHeight;
  //         // if (autoScrollParams.get('start') != null) {
  //         //     if(this.options.pagination.usePageAndCount){
  //         //         this.initialPage = (parseInt(autoScrollParams.get('start')) / parseInt(autoScrollParams.get('count')) + 1);
  //         //     } else {
  //         //         this.initialPage = (parseInt(autoScrollParams.get('start')) / parseInt(autoScrollParams.get('rows')) + 1);
  //         //     }

  //         // }

  //         if(this.options.pagination.usePageAndCount){
  //             if (autoScrollParams.get('page') != null) {
  //                 this.initialPage = parseInt(autoScrollParams.get('page'));
  //             }
  //         } else {
  //             if (autoScrollParams.get('start') != null) {
  //                 this.initialPage = (parseInt(autoScrollParams.get('start')) / parseInt(autoScrollParams.get('rows')) + 1);
  //             }
  //         }
  //     }
  // }

  // if(pagination.type === "INFINITE_SCROLL") {
  //     if(window.intersectionObserver){
  //         window.intersectionObserver.observe(this.options.pagination.infiniteScrollTriggerEl.lastElementChild)
  //     }
  // }

  if (pagination.type !== "INFINITE_SCROLL") {
    paginationWrappers.forEach(function (pagination) {
      pagination.innerHTML = _this.renderPagination();
    });
  } else {
    if (paginationWrappers) {
      paginationWrappers.forEach(function (pagination) {
        pagination.innerHTML = "";
      });
    }
    this.infiniteScrollV3();
    // this.renderInfiniteScrollPagination();
  }

  onEvent(this, afterRender);
};
/* harmony default export */ var core_reRender = (reRender);
// CONCATENATED MODULE: ./src/core/bindEvents.js
function bindEvents() {
  var _this = this;
  var _this$options = this.options,
    searchButtonEl = _this$options.searchButtonEl,
    searchTrigger = _this$options.searchTrigger,
    products = _this$options.products,
    facet = _this$options.facet,
    productView = _this$options.productView,
    pagination = _this$options.pagination,
    sort = _this$options.sort,
    pagesize = _this$options.pagesize,
    spellCheck = _this$options.spellCheck,
    searchBoxEl = _this$options.searchBoxEl,
    actionChangeClass = _this$options.actionChangeClass,
    actionBtnClass = _this$options.actionBtnClass,
    breadcrumb = _this$options.breadcrumb,
    selectedFacets = _this$options.selectedFacets;
  if (searchBoxEl) {
    searchBoxEl.addEventListener("keydown", function (e) {
      var val = e.target.value;
      if (e.keyCode === 13) {
        //checks whether the pressed key is "Enter"
        if (val !== "") {
          _this.setInputValue.bind(_this)();
        }
      }
    });
  }
  if (pagination.enabled) {
    this.paginationWrappers.forEach(function (wrapper) {
      _this.delegate(wrapper, pagination.action, ".".concat(pagination.pageClass), _this.paginationAction.bind(_this));
    });
  }
  if (facet.facetsEl) {
    this.facetWrappers.forEach(function (wrapper) {
      _this.delegate(wrapper, facet.facetAction, ".".concat(facet.facetClass), _this.findChangedFacet.bind(_this));
      _this.delegate(wrapper, 'change', '.' + actionChangeClass, _this.extraActionsChange.bind(_this));
      _this.delegate(wrapper, 'keyup', '.' + actionChangeClass, _this.extraActionsChange.bind(_this));
      _this.delegate(wrapper, 'click', '.' + actionBtnClass, _this.extraActions.bind(_this));
    });
  }
  if (searchButtonEl) {
    searchButtonEl.addEventListener(searchTrigger, this.setInputValue.bind(this));
  }
  if (spellCheck.el) {
    this.spellCheckWrappers.forEach(function (wrapper) {
      _this.delegate(wrapper, 'click', ".".concat(spellCheck.selectorClass), _this.setSuggestion.bind(_this));
    });
  }
  //productItemSelector
  this.delegate(this.searchResultsWrapper, "click", ".".concat(products.productItemClass), this.onProductItemClick.bind(this));
  if (sort.el) {
    this.sortWrappers.forEach(function (wrapper) {
      _this.delegate(wrapper, sort.action, ".".concat(sort.sortClass), _this.sortAction.bind(_this));
    });
  }
  if (facet.selectedFacetsEl) {
    this.selectedFacetWrappers.forEach(function (wrapper) {
      _this.delegate(wrapper, facet.facetAction, ".".concat(facet.selectedFacetClass), _this.findChangedFacet.bind(_this));
    });
  } else {
    this.selectedFacetWrappers.forEach(function (wrapper) {
      _this.delegate(wrapper, selectedFacets.facetAction, ".".concat(selectedFacets.selectedFacetClass), _this.findChangedFacet.bind(_this));
    });
  }
  if (this.breadcrumbWrapper) {
    this.delegate(this.breadcrumbWrapper, "click", "." + breadcrumb.selectorClass, this.findChangedFacet.bind(this));
  }
  if (this.productViewTypeWrapper) {
    this.delegate(this.productViewTypeWrapper, productView.action, "." + productView.viewTypeClass, this.onPageViewTypeClick.bind(this));
  }

  // if (this.options.pagination.type === 'INFINITE_SCROLL') {
  //     let infiniteScrollTimer;
  //     const self = this
  //     document.addEventListener("scroll", function () {
  //         // this setTimeout and clearTimeout logic will ensure the callback is not called on every few seconds, 
  //         // instead it is called only when the user stops interacting with the scroll position
  //         // do not change this logic
  //         infiniteScrollTimer && clearTimeout(infiniteScrollTimer);
  //         infiniteScrollTimer = setTimeout(function () {
  //             if (!self.viewState.isInfiniteStarted && !self.state.loading) {
  //                 self.onInfiniteScroll();
  //             }
  //         }, 100)
  //     });
  // }
  this.delegate(this.pageSizeWrapper, pagesize.action, ".".concat(pagesize.pageSizeClass), this.onClickPageSize.bind(this));
  if (!this.viewState.initialised) {
    window.addEventListener('popstate', this.onLocationChange.bind(this), false);
    // if(this.options.hashMode) {
    //     // window.addEventListener('hashchange',this.onLocationChange.bind(this),false);
    //     window.onhashchange= this.onLocationChange.bind(this);
    // } else {
    //     window.addEventListener('popstate',this.onLocationChange.bind(this),false);
    // }
    var urlParams = this.getQueryParams();
    var ln = Object.keys(urlParams).length;
    if (ln > 0) {
      this.renderFromUrl();
    }
    this.viewState.initialised = true;
  }
}
/* harmony default export */ var core_bindEvents = (bindEvents);
// CONCATENATED MODULE: ./src/core/initialize.js



var initialize_initialize = function initialize() {
  this.createLayout();
  this.unxSelectors = selectors;
  this.renderDidYouMean.bind(this);
  this.options.onEvent.bind(this);
  this.options.products.onProductClick.bind(this);
  this.reRender = core_reRender.bind(this);
  this.bindEvents = core_bindEvents.bind(this);
  this.bindEvents();
  var urlParams = this.getQueryParams();
  var ln = Object.keys(urlParams).length;
  var _this$options$product = this.options.productView,
    defaultViewType = _this$options$product.defaultViewType,
    enabled = _this$options$product.enabled;
  if (ln > 0) {
    var viewType = urlParams.viewType;
    if (viewType) {
      this.viewState.productViewType = viewType;
      this.options.extraParams.viewType = viewType;
    }
  } else {
    this.options.extraParams.viewType = defaultViewType;
  }
  if (enabled) {
    this.renderProductViewTypeUI();
  }
};
/* harmony default export */ var core_initialize = (initialize_initialize);
// CONCATENATED MODULE: ./src/core/createLayout.js
var createLayout = function createLayout() {
  var _this = this;
  this.searchResultsWrapper = this.createtSearchWrapper();
  this.bannerWrapper = this.createBannerWrapper();
  this.breadcrumbWrapper = this.createBreadcrumbWrapper();
  this.pageSizeWrapper = this.createPageSizeWrapper();
  this.productViewTypeWrapper = this.createProductViewTypeWrapper();
  this.paginationWrappers = [];
  this.facetWrappers = [];
  this.sortWrappers = [];
  this.selectedFacetWrappers = [];
  this.spellCheckWrappers = [];
  var getPaginationWrapper = function getPaginationWrapper() {
    var elem = _this.createPaginationWrapper();
    _this.paginationWrappers.push(elem);
    return elem;
  };
  var getfacetWrappers = function getfacetWrappers() {
    var elem = _this.createFacetWrapper();
    _this.facetWrappers.push(elem);
    return elem;
  };
  var getSortElementWrappers = function getSortElementWrappers() {
    var elem = _this.createSortWrapper();
    _this.sortWrappers.push(elem);
    return elem;
  };
  var getSelectedFacetsWrappers = function getSelectedFacetsWrappers() {
    var elem = _this.createSelectedFacetWrapper();
    _this.selectedFacetWrappers.push(elem);
    return elem;
  };
  var getSpellCheckWrappers = function getSpellCheckWrappers() {
    var elem = _this.createSpellCheckWrapper();
    _this.spellCheckWrappers.push(elem);
    return elem;
  };
  var _this$options = this.options,
    facet = _this$options.facet,
    breadcrumb = _this$options.breadcrumb,
    banner = _this$options.banner,
    sort = _this$options.sort,
    products = _this$options.products,
    pagesize = _this$options.pagesize,
    pagination = _this$options.pagination,
    productView = _this$options.productView,
    selectedFacets = _this$options.selectedFacets;
  var facetsEl = facet.facetsEl;
  var spellCheck = this.options.spellCheck;
  var spellCheckEl = spellCheck.el;
  if (spellCheckEl) {
    var els = spellCheckEl;
    if (!els.length) {
      els = [spellCheckEl];
    }
    els.forEach(function (el) {
      el.innerHTML = "";
      el.appendChild(getSpellCheckWrappers());
    });
  }
  if (facetsEl) {
    var _els = facetsEl;
    if (!facetsEl.length) {
      _els = [facetsEl];
    }
    _els.forEach(function (facetEl) {
      facetEl.innerHTML = "";
      facetEl.appendChild(getfacetWrappers());
    });
  }
  var sortEls = sort.el;
  if (sortEls && sort.enabled) {
    var _els2 = sortEls;
    if (!sortEls.length) {
      _els2 = [sortEls];
    }
    _els2.forEach(function (sortEl) {
      sortEl.innerHTML = "";
      sortEl.appendChild(getSortElementWrappers());
    });
  }
  if (facet.selectedFacetsEl) {
    console.log("selectedFacetsEl option is depricated from v2.0.2, please use selectedFacets option to configure selected facets elements and template");
    facet.selectedFacetsEl.innerHTML = "";
    facet.selectedFacetsEl.appendChild(getSelectedFacetsWrappers());
  } else {
    var selectedFacetsElems = selectedFacets.el;
    if (selectedFacets.enabled && selectedFacetsElems) {
      var _els3 = selectedFacetsElems;
      if (!selectedFacetsElems.length) {
        _els3 = [selectedFacetsElems];
      }
      _els3.forEach(function (el) {
        el.innerHTML = "";
        el.appendChild(getSelectedFacetsWrappers());
      });
    }
  }
  if (breadcrumb.enabled) {
    if (breadcrumb.el) {
      breadcrumb.el.innerHTML = "";
      breadcrumb.el.appendChild(this.breadcrumbWrapper);
    }
  }
  if (banner.el && banner.enabled) {
    banner.el.innerHTML = "";
    banner.template.bind(this);
    banner.el.appendChild(this.bannerWrapper);
  }
  if (products.el) {
    products.el.innerHTML = "";
    var preLoader = document.createElement('div');
    preLoader.classList.add('UNX-pre-loader');
    products.el.appendChild(preLoader);
    products.el.appendChild(this.searchResultsWrapper);
    var postLoader = document.createElement('div');
    postLoader.classList.add('UNX-post-loader');
    products.el.appendChild(postLoader);
  }
  if (pagesize.el && pagesize.enabled) {
    pagesize.el.innerHTML = "";
    pagesize.el.appendChild(this.pageSizeWrapper);
  }
  if (productView.el) {
    productView.el.innerHTML = "";
    productView.el.appendChild(this.productViewTypeWrapper);
  }
  if (pagination.enabled) {
    var el = pagination.el;
    if (el) {
      var _els4 = el;
      if (!el.length) {
        _els4 = [el];
      }
      _els4.forEach(function (element) {
        element.innerHTML = "";
        element.appendChild(getPaginationWrapper());
      });
    }
  }
};
/* harmony default export */ var core_createLayout = (createLayout);
// CONCATENATED MODULE: ./src/core/componentWrappers/createSearchWrapper.js
/* harmony default export */ var createSearchWrapper = (function () {
  var _this$options$product = this.options.products,
    tagName = _this$options$product.tagName,
    _this$options$product2 = _this$options$product.htmlAttributes,
    htmlAttributes = _this$options$product2 === void 0 ? {} : _this$options$product2,
    events = _this$options$product.events;
  return this.createElement(tagName, Object.assign({}, htmlAttributes), events, this);
});
;
// CONCATENATED MODULE: ./src/core/componentWrappers/createFacetWrapper.js
/* harmony default export */ var createFacetWrapper = (function () {
  var _this$options$facet = this.options.facet,
    tagName = _this$options$facet.tagName,
    _this$options$facet$h = _this$options$facet.htmlAttributes,
    htmlAttributes = _this$options$facet$h === void 0 ? {} : _this$options$facet$h,
    events = _this$options$facet.events;
  return this.createElement(tagName, Object.assign({}, htmlAttributes), events, this);
});
;
// CONCATENATED MODULE: ./src/core/componentWrappers/createBannerWrapper.js
/* harmony default export */ var createBannerWrapper = (function () {
  var _this$options$banner = this.options.banner,
    tagName = _this$options$banner.tagName,
    _this$options$banner$ = _this$options$banner.htmlAttributes,
    htmlAttributes = _this$options$banner$ === void 0 ? {} : _this$options$banner$,
    events = _this$options$banner.events;
  return this.createElement(tagName, Object.assign({}, htmlAttributes), events, this);
});
;
// CONCATENATED MODULE: ./src/core/componentWrappers/createBreadcrumbWrapper.js
/* harmony default export */ var createBreadcrumbWrapper = (function () {
  var _this$options$breadcr = this.options.breadcrumb,
    tagName = _this$options$breadcr.tagName,
    _this$options$breadcr2 = _this$options$breadcr.htmlAttributes,
    htmlAttributes = _this$options$breadcr2 === void 0 ? {} : _this$options$breadcr2,
    events = _this$options$breadcr.events;
  return this.createElement(tagName, Object.assign({}, htmlAttributes), events, this);
});
;
// CONCATENATED MODULE: ./src/core/componentWrappers/createPageSizeWrapper.js
/* harmony default export */ var createPageSizeWrapper = (function () {
  var _this$options$pagesiz = this.options.pagesize,
    tagName = _this$options$pagesiz.tagName,
    _this$options$pagesiz2 = _this$options$pagesiz.htmlAttributes,
    htmlAttributes = _this$options$pagesiz2 === void 0 ? {} : _this$options$pagesiz2,
    events = _this$options$pagesiz.events;
  return this.createElement(tagName, Object.assign({}, htmlAttributes), events, this);
});
// CONCATENATED MODULE: ./src/core/componentWrappers/createSortWrapper.js
/* harmony default export */ var createSortWrapper = (function () {
  var _this$options$sort = this.options.sort,
    tagName = _this$options$sort.tagName,
    _this$options$sort$ht = _this$options$sort.htmlAttributes,
    htmlAttributes = _this$options$sort$ht === void 0 ? {} : _this$options$sort$ht,
    events = _this$options$sort.events;
  return this.createElement(tagName, Object.assign({}, htmlAttributes), events, this);
});
// CONCATENATED MODULE: ./src/core/componentWrappers/createSelectedFacetWrapper.js
/* harmony default export */ var createSelectedFacetWrapper = (function () {
  var _this$options$selecte = this.options.selectedFacets,
    tagName = _this$options$selecte.tagName,
    _this$options$selecte2 = _this$options$selecte.htmlAttributes,
    htmlAttributes = _this$options$selecte2 === void 0 ? {} : _this$options$selecte2,
    events = _this$options$selecte.events;
  return this.createElement(tagName, Object.assign({}, htmlAttributes), events, this);
});
// CONCATENATED MODULE: ./src/core/componentWrappers/createSpellCheckWrapper.js
/* harmony default export */ var createSpellCheckWrapper = (function () {
  var _this$options$spellCh = this.options.spellCheck,
    tagName = _this$options$spellCh.tagName,
    _this$options$spellCh2 = _this$options$spellCh.htmlAttributes,
    htmlAttributes = _this$options$spellCh2 === void 0 ? {} : _this$options$spellCh2,
    events = _this$options$spellCh.events;
  return this.createElement(tagName, Object.assign({}, htmlAttributes), events, this);
});
// CONCATENATED MODULE: ./src/core/componentWrappers/createPaginationWrapper.js
/* harmony default export */ var createPaginationWrapper = (function () {
  var _this$options$paginat = this.options.pagination,
    tagName = _this$options$paginat.tagName,
    _this$options$paginat2 = _this$options$paginat.htmlAttributes,
    htmlAttributes = _this$options$paginat2 === void 0 ? {} : _this$options$paginat2,
    events = _this$options$paginat.events;
  return this.createElement(tagName, Object.assign({}, htmlAttributes), events, this);
});
// CONCATENATED MODULE: ./src/core/componentWrappers/createProductViewTypeWrapper.js
/* harmony default export */ var createProductViewTypeWrapper = (function () {
  var _this$options$product = this.options.productView,
    tagName = _this$options$product.tagName,
    _this$options$product2 = _this$options$product.htmlAttributes,
    htmlAttributes = _this$options$product2 === void 0 ? {} : _this$options$product2,
    events = _this$options$product.events;
  return this.createElement(tagName, Object.assign({}, htmlAttributes), events, this);
});
// CONCATENATED MODULE: ./src/core/componentWrappers/index.js










var componentWrappers_setComponentWrappers = function setComponentWrappers(prototype) {
  prototype = Object.assign(prototype, {
    createtSearchWrapper: createSearchWrapper,
    createFacetWrapper: createFacetWrapper,
    createBannerWrapper: createBannerWrapper,
    createBreadcrumbWrapper: createBreadcrumbWrapper,
    createPageSizeWrapper: createPageSizeWrapper,
    createSortWrapper: createSortWrapper,
    createSelectedFacetWrapper: createSelectedFacetWrapper,
    createSpellCheckWrapper: createSpellCheckWrapper,
    createPaginationWrapper: createPaginationWrapper,
    createProductViewTypeWrapper: createProductViewTypeWrapper
  });
};

// CONCATENATED MODULE: ./src/modules/utils/createElement.js
var createElement = function createElement(type) {
  var attr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var events = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var context = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : window;
  var elem = document.createElement(type);
  var attrArr = Object.keys(attr);
  attrArr.forEach(function (item) {
    elem.setAttribute(item, attr[item]);
  });
  var eventsArr = Object.keys(events);
  if (eventsArr.length > 0) {
    eventsArr.forEach(function (event) {
      elem.addEventListener(event, events[event].bind(context));
    });
  }
  return elem;
};
/* harmony default export */ var utils_createElement = (createElement);
// CONCATENATED MODULE: ./src/core/setMethods.js
















var setSearchWidget = function setSearchWidget(config) {
  var products = this.options.products;
  var newOps = Object.assign({}, products, config);
  this.options.products = newOps;
};
var setFacetWidget = function setFacetWidget(config) {
  var facet = this.options.facet;
  var newOps = Object.assign({}, facet, config);
  this.options.facet = newOps;
};
var updateConfig = function updateConfig(config) {
  var options = this.options;
  this.setConfig(options, config);
  this.initialize();
};
var extraActions = function extraActions(e) {
  var onAction = this.options.onAction;
  var target = e.target;
  var dataset = target.dataset;
  var _this$cssList = this.cssList,
    openFacet = _this$cssList.openFacet,
    closeFacet = _this$cssList.closeFacet,
    openBtn = _this$cssList.openBtn,
    closeBtn = _this$cssList.closeBtn,
    viewMore = _this$cssList.viewMore,
    viewLess = _this$cssList.viewLess;
  var _this$options$facet = this.options.facet,
    viewMoreText = _this$options$facet.viewMoreText,
    textFacetWrapper = _this$options$facet.textFacetWrapper;
  if (dataset) {
    var facetAction = dataset.facetAction,
      facetName = dataset.facetName,
      action = dataset.action,
      id = dataset.id;
    var facetElementMap = this.viewState.facetElementMap;
    var fI = target.closest(".".concat(facetElementMap[facetName]));
    if (facetAction === "facetOpen") {
      this.viewState.expandedFacets[facetName] = true;
      target.classList.add(openBtn);
      target.classList.remove(closeBtn);
      target.setAttribute("data-facet-action", "facetClose");
      fI.classList.remove(closeFacet);
      fI.classList.add(openFacet);
    }
    if (facetAction === "facetClose") {
      this.viewState.expandedFacets[facetName] = false;
      target.classList.remove(openBtn);
      target.classList.add(closeBtn);
      target.setAttribute("data-facet-action", "facetOpen");
      fI.classList.remove(openFacet);
      fI.classList.add(closeFacet);
    }
    if (action === "viewMore") {
      target.setAttribute("data-action", "viewLess");
      target.innerHTML = viewMoreText[1];
      var fcEl = fI.querySelector(".".concat(textFacetWrapper));
      fcEl.classList.remove(viewMore);
      fcEl.classList.add(viewLess);
    }
    if (action === "viewLess") {
      target.setAttribute("data-action", "viewMore");
      target.innerHTML = viewMoreText[0];
      var _fcEl = fI.querySelector(".".concat(textFacetWrapper));
      _fcEl.classList.remove(viewLess);
      _fcEl.classList.add(viewMore);
    }
  }
  onAction(e, this);
};
var extraActionsChange = function extraActionsChange(e) {
  var onAction = this.options.onAction;
  var dataset = e.target.dataset;
  if (dataset) {
    var facetAction = dataset.facetAction,
      facetName = dataset.facetName;
    if (facetAction === "searchFacets") {
      this.setSearchFacetsText(facetName, e.target.value);
    }
  }
  onAction(e, this);
};
var getCategoryPage = function getCategoryPage() {
  this.resetAll();
  this.options.productType = "CATEGORY";
  this.options.products.productType = "CATEGORY";
  this.getCallbackActions(this, 'categoryPage');
  this.getResults();
};
var getBrowsePage = function getBrowsePage() {
  this.resetAll();
  this.options.productType = "BROWSE";
  this.options.products.productType = "BROWSE";
  this.getCallbackActions(this, 'categoryPage');
  this.getResults();
};
var resetViewState = function resetViewState() {
  this.viewState.lastDidYouMean = null;
  this.viewState.searchFacetsText = {};
  this.viewState.lastDidYouMean = null;
  this.viewState.expandedFacets = {};
};
var generateRid = function generateRid() {
  var custom = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "unx_";
  return custom + Math.random().toString(36).substr(2, 9);
};
var createFacetsLayout = function createFacetsLayout() {};
var setMethods_setMethods = function setMethods(UnbxdSearch) {
  var prototype = UnbxdSearch.prototype;
  prototype.renderBannerUI = setbannerMethods;
  prototype.setSearchWidget = setSearchWidget;
  prototype.setFacetWidget = setFacetWidget;
  prototype.updateConfig = updateConfig;
  prototype.createLayout = core_createLayout;
  prototype.initialize = core_initialize;
  prototype.extraActions = extraActions;
  prototype.extraActionsChange = extraActionsChange;
  prototype.getCategoryPage = getCategoryPage;
  prototype.getBrowsePage = getBrowsePage;
  prototype.resetViewState = resetViewState;
  prototype.generateRid = generateRid;
  prototype.createElement = utils_createElement;
  prototype.createFacetsLayout = createFacetsLayout;
  componentWrappers_setComponentWrappers(prototype);
  setInput_setInput(prototype);
  setProductViewType_setProductViewType(prototype);
  setFacetMethods_setFacets(prototype);
  setSearch_setSearch(prototype);
  setPagination_setPagination(prototype);
  setSort_setSort(prototype);
  setSpellCheck_setSpellCheck(prototype);
  setBreadcrumbs_setBreadCrumbs(prototype);
  setSwatches_setSwatches(prototype);
  setPageSize_setPageSize(prototype);
  setAnalytics(prototype);
};
/* harmony default export */ var core_setMethods = (setMethods_setMethods);
// CONCATENATED MODULE: ./src/common/constants/eventsLib.js
var _events;
function eventsLib_typeof(obj) { "@babel/helpers - typeof"; return eventsLib_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, eventsLib_typeof(obj); }
function eventsLib_defineProperty(obj, key, value) { key = eventsLib_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function eventsLib_toPropertyKey(arg) { var key = eventsLib_toPrimitive(arg, "string"); return eventsLib_typeof(key) === "symbol" ? key : String(key); }
function eventsLib_toPrimitive(input, hint) { if (eventsLib_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (eventsLib_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var events = (_events = {
  beforeApiCall: "BEFORE_API_CALL",
  afterApiCall: "AFTER_API_CALL",
  beforeRender: "BEFORE_RENDER",
  beforeNoResultRender: "BEFORE_NO_RESULTS_RENDER",
  afterNoResultRender: "AFTER_NO_RESULTS_RENDER",
  afterRender: "AFTER_RENDER",
  deleteFacet: "DELETE_FACET",
  facetClick: "FACETS_CLICK",
  deleteFacetValue: "DELETE_FACET_VALUE"
}, eventsLib_defineProperty(_events, "deleteFacet", "DELETE_FACET"), eventsLib_defineProperty(_events, "clearSort", "CLEAR_SORT"), eventsLib_defineProperty(_events, "changeSort", "CHANGE_SORT"), eventsLib_defineProperty(_events, "pageNext", "PAGE_NEXT"), eventsLib_defineProperty(_events, "pagePrev", "PAGE_PREV"), eventsLib_defineProperty(_events, "changeInput", "CHANGE_INPUT"), eventsLib_defineProperty(_events, "setCategoryFilter", "SET_CATEGORY_FILTER"), eventsLib_defineProperty(_events, "deleteCategoryFilter", "DELETE_CATEGORY_FILTER"), eventsLib_defineProperty(_events, "pageSizeChange", "PAGESIZE_CHANGE"), _events);
/* harmony default export */ var eventsLib = (events);
// CONCATENATED MODULE: ./src/common/constants/actions.js
var actions_actions = {
  clearCategoryFilter: "clearCategoryFilter",
  setCategoryFilter: "setCategoryFilter",
  changeSwatch: "changeSwatch",
  clearPriceRange: "clearPriceRange",
  applyRange: "applyRange",
  prev: "prev",
  next: "next",
  clearSort: "clearSort",
  changeSort: "changeSort",
  deleteFacet: "deleteFacet",
  deleteFacetValue: "deleteFacetValue",
  changeFacet: "changeFacet"
};
/* harmony default export */ var constants_actions = (actions_actions);
// CONCATENATED MODULE: ./src/common/constants/index.js


var cssClasses = {
  openFacet: "UNX-accordian-open",
  closeFacet: "UNX-accordian-close",
  openBtn: "UNX-facet-open",
  closeBtn: "UNX-facet-close",
  viewMore: "UNX-view-more",
  viewLess: "UNX-view-less"
};
var testIds = {
  UNX_gridBtn: "UNX_gridBtn",
  UNX_listBtn: "UNX_listBtn",
  UNX_loadMore: "UNX_loadMore",
  UNX_variant: "UNX_variant",
  UNX_spellCheck: "UNX_spellCheck",
  UNX_pagesize: "UNX_pagesize",
  UNX_pageNumber: "UNX_pageNumber",
  UNX_unbxdSorter: "UNX_unbxdSorter",
  UNX_uFilter: "UNX_uFilter",
  UNX_rangeslider: "UNX_rangeslider",
  UNX_facetLevel: "UNX_facetLevel",
  UNX_searchFacets: "UNX_searchFacets",
  UNX_swatchClrBtn: "UNX_swatchClrBtn"
};

// CONCATENATED MODULE: ./src/core/setConfig.js

var setConfig_setConfig = function setConfig() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  this.options = utils_extend(true, {}, options, props);
  var facet = props.facet,
    pagesize = props.pagesize,
    swatches = props.swatches,
    products = props.products,
    productView = props.productView;
  if (facet) {
    this.options.facetMultilevel = facet.facetMultilevel ? facet.facetMultilevel : options.facet.facetMultilevel;
    this.options.facetMultiSelect = typeof facet.facetMultiSelect === "boolean" ? facet.facetMultiSelect : options.facet.facetMultiSelect;
    this.options.facetDepth = facet.facetDepth ? facet.facetDepth : options.facet.facetDepth;
    this.options.applyMultipleFilters = typeof facet.applyMultipleFilters === "boolean" ? facet.applyMultipleFilters : options.facet.applyMultipleFilters;
  }
  if (pagesize) {
    this.options.pageSize = pagesize.pageSize || options.pagesize.pageSize;
    this.state.pageSize = this.options.pageSize;
  } else {
    this.options.pageSize = options.pagesize.pageSize;
    this.state.pageSize = this.options.pageSize;
  }
  if (products) {
    this.options.productAttributes = products.productAttributes ? products.productAttributes : options.products.productAttributes;
    this.options.productType = products.productType ? products.productType : options.products.productType;
  } else {
    this.options.productType = options.products.productType;
    this.options.productAttributes = options.products.productAttributes;
  }
  if (swatches) {
    this.options.showSwatches = swatches && swatches.enabled ? swatches.enabled : options.swatches.enabled;
  }
  if (productView) {
    this.viewState.productViewType = productView.defaultViewType ? productView.defaultViewType : options.productView.defaultViewType;
    this.options.productView.productViewType = this.viewState.productViewType;
  }
};
/* harmony default export */ var core_setConfig = (setConfig_setConfig);
// CONCATENATED MODULE: ./src/index.js
function src_typeof(obj) { "@babel/helpers - typeof"; return src_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, src_typeof(obj); }
function src_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function src_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, src_toPropertyKey(descriptor.key), descriptor); } }
function src_createClass(Constructor, protoProps, staticProps) { if (protoProps) src_defineProperties(Constructor.prototype, protoProps); if (staticProps) src_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function src_toPropertyKey(arg) { var key = src_toPrimitive(arg, "string"); return src_typeof(key) === "symbol" ? key : String(key); }
function src_toPrimitive(input, hint) { if (src_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (src_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (src_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// import UnbxdSearchCore from "@unbxd-ui/unbxd-search-core";








var src_UnbxdSearch_0 = /*#__PURE__*/function (_UnbxdSearchCore) {
  _inherits(UnbxdSearch, _UnbxdSearchCore);
  var _super = _createSuper(UnbxdSearch);
  function UnbxdSearch(props) {
    var _this;
    src_classCallCheck(this, UnbxdSearch);
    _this = _super.call(this, props);
    _this.viewState = {
      productViewType: common_options.productView.defaultViewType,
      isInfiniteStarted: false,
      lastAction: '',
      selectedRange: {},
      expandedFacets: {},
      searchFacetsText: {},
      noResultLoaded: false,
      lastDidYouMean: null,
      loadedFromSuggestion: false,
      setFromSuggest: false,
      facetElementMap: {},
      initialised: false
    };
    _this.setConfig = core_setConfig.bind(_assertThisInitialized(_this));
    _this.setConfig(common_options, props);
    _this.events = eventsLib;
    _this.actions = constants_actions;
    _this.cssList = cssClasses;
    _this.testIds = testIds;
    _this.updateConfig();
    _this.options.onBackFromRedirect(_this.options.hashMode);
    _this.options.onEvent(_assertThisInitialized(_this), 'initialised');
    return _this;
  }
  src_createClass(UnbxdSearch, [{
    key: "callBack",
    value: function callBack(state, type) {
      this.getCallbackActions(state, type);
      var _this$options = this.options,
        onEvent = _this$options.onEvent,
        loader = _this$options.loader,
        facet = _this$options.facet,
        productView = _this$options.productView;
      var _this$events = this.events,
        beforeApiCall = _this$events.beforeApiCall,
        afterApiCall = _this$events.afterApiCall;
      var urlParams = this.getQueryParams();
      var _ref = urlParams || {},
        viewType = _ref.viewType;
      if (this.viewState.lastAction === "viewType") {
        viewType = this.viewState.productViewType;
        this.options.extraParams.viewType = viewType;
        this.viewState.lastAction = "";
      }
      if (this.viewState.lastAction != "pagination" && this.viewState.lastAction != "prev_page_loaded" && this.viewState.lastAction != "next_page_loaded") {
        this.viewState.isInfiniteStarted = false;
      }
      if (!viewType) {
        viewType = this.viewState.productViewType || productView.defaultViewType;
        this.viewState.productViewType = viewType;
        this.options.extraParams.viewType = viewType;
      }
      if (this.viewState.productViewType !== viewType) {
        this.viewState.productViewType = viewType;
        this.options.extraParams.viewType = viewType;
      }
      if (type === beforeApiCall) {
        onEvent(this, beforeApiCall);
        if (loader && loader.el) {
          loader.el.innerHTML = loader.template(this);
        }
      }
      if (type === afterApiCall) {
        onEvent(this, afterApiCall);
        if (this.state.products.length > 0) {
          this.viewState.noResultLoaded = false;
        }
        this.reRender();
      }
      if ((type === 'added_facet' || type === 'deleted_facet') && facet.applyMultipleFilters) {
        onEvent(this, 'added_facet');
        this.renderFacets();
      }
      if (type === "FETCH_ERROR") {
        if (loader && loader.el) {
          loader.el.innerHTML = "";
        }
      }
    }
  }, {
    key: "delegate",
    value: function delegate(delgationElem, evt, elem, fn) {
      return utils_delegate(delgationElem, evt, elem, fn);
    }
  }]);
  return UnbxdSearch;
}(src);
core_setMethods(src_UnbxdSearch_0);
/* harmony default export */ var src_0 = __webpack_exports__["default"] = (src_UnbxdSearch_0);

/***/ })

/******/ })["default"];
});