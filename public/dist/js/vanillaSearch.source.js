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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../search-JS-core/src/UnbxdSearch.js":
/*!********************************************!*\
  !*** ../search-JS-core/src/UnbxdSearch.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"../search-JS-core/src/config/index.js\");\n/* harmony import */ var _modules_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/index */ \"../search-JS-core/src/modules/index.js\");\n/* harmony import */ var _utils_copyObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/copyObject */ \"../search-JS-core/src/utils/copyObject.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n/**\n * Represents the Unbxd wrapper around the api.\n * @constructor\n */\n\nvar UnbxdSearch = /*#__PURE__*/function () {\n  function UnbxdSearch(props) {\n    _classCallCheck(this, UnbxdSearch);\n\n    this.options = Object.assign({}, _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"], props);\n    this.state = {\n      userInput: '',\n      responseObj: null,\n      selectedFacets: {},\n      currentUrl: '',\n      didYouMean: null,\n      startPageNo: this.options.startPageNo || 0,\n      isLoading: false,\n      selectedSort: '',\n      isUrlUpdated: false,\n      rangeSliderList: [],\n      rangeFacet: {},\n      categoryFilter: {},\n      breadcrumbs: {},\n      urlState: '',\n      noResultQuery: \"\",\n      pageSize: this.options.pageSize || 12,\n      urlLoad: false,\n      isHistory: window.history,\n      isBack: false,\n      products: [],\n      requestId: null\n    };\n    var _this$options = this.options,\n        searchQueryParam = _this$options.searchQueryParam,\n        browseQueryParam = _this$options.browseQueryParam,\n        productType = _this$options.productType,\n        getCategoryId = _this$options.getCategoryId,\n        setCategoryId = _this$options.setCategoryId;\n    var queryString = '/search?';\n    var queryParam = searchQueryParam;\n\n    if (productType === 'CATEGORY') {\n      queryString = '/category?';\n      queryParam = browseQueryParam;\n    }\n\n    this.getCategoryId = getCategoryId;\n    this.setCategoryId = setCategoryId;\n    this.url = this.getBaseUrl() + queryString + queryParam + '=';\n  }\n  /**\n   *  @returns the response {object}.\n   */\n\n\n  _createClass(UnbxdSearch, [{\n    key: \"getResponseObj\",\n    value: function getResponseObj() {\n      var responseObj = this.state.responseObj;\n\n      if (responseObj) {\n        return Object(_utils_copyObject__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(responseObj);\n      }\n\n      return null;\n    }\n  }, {\n    key: \"setUrl\",\n    value: function setUrl(reload) {\n      var _this$options2 = this.options,\n          productType = _this$options2.productType,\n          hashMode = _this$options2.hashMode,\n          searchPath = _this$options2.searchPath,\n          onQueryRedirect = _this$options2.onQueryRedirect,\n          _this$options2$allowE = _this$options2.allowExternalUrlParams,\n          allowExternalUrlParams = _this$options2$allowE === void 0 ? false : _this$options2$allowE;\n      var _this$state = this.state,\n          urlLoad = _this$state.urlLoad,\n          isHistory = _this$state.isHistory,\n          _this$state$responseO = _this$state.responseObj,\n          responseObj = _this$state$responseO === void 0 ? {} : _this$state$responseO;\n      var redirect = responseObj.redirect;\n\n      if (typeof onQueryRedirect === \"function\") {\n        onQueryRedirect(this, redirect);\n      }\n\n      var q = this.getNewUrlState(true).split(\"\".concat(productType.toLocaleLowerCase(), \"?\"))[1];\n      this.state.urlState = q;\n      var isPath = location.pathname.includes(searchPath);\n\n      if (hashMode) {\n        var newQ = \"#\".concat(q);\n\n        if (isPath && newQ !== location.hash) {\n          location.hash = q;\n        }\n      } else {\n        if (isHistory && !urlLoad && isPath) {\n          var _newQ = \"?\".concat(q);\n\n          if (decodeURI(_newQ) !== decodeURI(location.search)) {\n            if (allowExternalUrlParams) {\n              var curUrl = Object.fromEntries(new URLSearchParams(location.search));\n              var newUrl = Object.fromEntries(new URLSearchParams(_newQ));\n              _newQ = new URLSearchParams(_objectSpread(_objectSpread({}, curUrl), newUrl)).toString();\n            } // if(true){\n            //     const curUrl = Object.fromEntries(new URLSearchParams(location.search));\n            //     const newUrl = Object.fromEntries(new URLSearchParams(f));\n            //     newQ =  new URLSearchParams({...curUrl, ...newUrl}).toString();\n            // } \n\n\n            window.history.pushState(q, null, _newQ);\n            this.state.urlLoad = false;\n          }\n        }\n\n        if (reload && isPath) {\n          location.search = q;\n        }\n      }\n    }\n    /**\n     *  @returns the response {object}.\n     */\n\n  }, {\n    key: \"callBack\",\n    value: function callBack(value, evt) {\n      var onEvent = this.options.onEvent;\n      onEvent(this, evt);\n    }\n  }]);\n\n  return UnbxdSearch;\n}();\n\nObject(_modules_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(UnbxdSearch);\n/* harmony default export */ __webpack_exports__[\"default\"] = (UnbxdSearch);\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/UnbxdSearch.js?");

/***/ }),

/***/ "../search-JS-core/src/config/index.js":
/*!*********************************************!*\
  !*** ../search-JS-core/src/config/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar options = {\n  siteKey: 'api key',\n  apiKey: 'site key',\n  isFlag: true,\n  searchEndPoint: 'https://search.unbxd.io/',\n  productType: 'SEARCH',\n  searchQueryParam: 'q',\n  browseQueryParam: 'p',\n  searchPath: \"\",\n  productAttributes: ['title'],\n  defaultFilters: null,\n  spellCheck: {\n    enabled: false\n  },\n  pageSize: 5,\n  startPageNo: 0,\n  facetMultiSelect: true,\n  updateUrls: true,\n  variants: undefined,\n  extraParams: {},\n  facetMultilevel: true,\n  facetDepth: 6,\n  showSwatches: true,\n  allowExternalUrlParams: false,\n  swatchMap: {},\n  onEvent: function onEvent() {},\n  getCategoryId: function getCategoryId() {\n    return encodeURIComponent(window.UnbxdAnalyticsConf[\"page\"]) || decodeURIComponent(location.pathname.split('category-path')[1].split('/').pop());\n  },\n  setCategoryId: function setCategoryId(param, self) {\n    //const page = self.setCategoryFilter(param)[param.parent].join(\">\");\n    var level = param.level,\n        parent = param.parent,\n        name = param.name,\n        action = param.action;\n    var page = \"\";\n    var fPath = \"\";\n    var pathArr = [];\n    var l = Number(level);\n    var breadCrumbs = self.getBreadCrumbsList();\n    breadCrumbs.forEach(function (element, i) {\n      var filterField = element.filterField,\n          value = element.value;\n      fPath = filterField;\n\n      if (l > i) {\n        pathArr.push(value);\n      }\n    });\n\n    if (l > breadCrumbs.length) {\n      pathArr.push(name);\n    }\n\n    page = pathArr.join(\">\");\n\n    if (window.UnbxdAnalyticsConf) {\n      window.UnbxdAnalyticsConf.page = page;\n    }\n  },\n  applyMultipleFilters: false,\n  hashMode: false,\n  pagination: {\n    type: \"INFINITE_SCROLL\"\n  },\n  onQueryRedirect: function onQueryRedirect(self, redirect) {\n    if (redirect) {\n      var value = redirect.value,\n          type = redirect.type;\n\n      if (type === \"url\") {\n        location.href = value;\n      }\n\n      return false;\n    }\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (options);\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/config/index.js?");

/***/ }),

/***/ "../search-JS-core/src/constants/index.js":
/*!************************************************!*\
  !*** ../search-JS-core/src/constants/index.js ***!
  \************************************************/
/*! exports provided: libEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _libEvents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libEvents */ \"../search-JS-core/src/constants/libEvents.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"libEvents\", function() { return _libEvents__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/constants/index.js?");

/***/ }),

/***/ "../search-JS-core/src/constants/libEvents.js":
/*!****************************************************!*\
  !*** ../search-JS-core/src/constants/libEvents.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar libEvents = {\n  changeInput: \"CHANGE_INPUT\",\n  fetchError: \"FETCH_ERROR\",\n  afterApiCall: \"AFTER_API_CALL\",\n  beforeApiCall: \"BEFORE_API_CALL\"\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (libEvents);\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/constants/libEvents.js?");

/***/ }),

/***/ "../search-JS-core/src/index.js":
/*!**************************************!*\
  !*** ../search-JS-core/src/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _UnbxdSearch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UnbxdSearch */ \"../search-JS-core/src/UnbxdSearch.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_UnbxdSearch__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/index.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/banner/getbanners.js":
/*!**********************************************************!*\
  !*** ../search-JS-core/src/modules/banner/getbanners.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n*  @description \n* will return Banners array if it is available. in following format.\n*example:\n   <pre>\n        <code>\n        [\n            {\n                \"imageUrl\": \"http://andersonpta.org/test/static/sale.jpg\"\n            }\n        ]\n        </code>\n    </pre>\n    * @method getBanners \n*/\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var resp = this.getResponseObj() || {};\n\n  if (resp && resp.banner && resp.banner.banners) {\n    return resp.banner.banners || [];\n  }\n\n  return [];\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/banner/getbanners.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/banner/index.js":
/*!*****************************************************!*\
  !*** ../search-JS-core/src/modules/banner/index.js ***!
  \*****************************************************/
/*! exports provided: default, getBanners */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return setBannerMethods; });\n/* harmony import */ var _getbanners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getbanners */ \"../search-JS-core/src/modules/banner/getbanners.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getBanners\", function() { return _getbanners__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\nvar setBannerMethods = function setBannerMethods(prototype) {\n  prototype = Object.assign(prototype, {\n    getBanners: _getbanners__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  });\n};\n\n\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/banner/index.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/breadcrumbs/getBreadCrumbs.js":
/*!*******************************************************************!*\
  !*** ../search-JS-core/src/modules/breadcrumbs/getBreadCrumbs.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n*  @description \n* will return breadcrumbs object if it is available. in following format.\n*example:\n   <pre>\n        <code>\n        {\n            \"filterField\": \"categoryPath\",\n            \"values\": [\n                {\n                \"value\": \"Dress\"\n                }\n            ],\n            \"child\": {\n                \"filterField\": \"categoryPath\",\n                \"values\": [\n                {\n                    \"value\": \"Short Sleeves\"\n                }\n                ],\n                \"level\": 2\n            },\n            \"level\": 1\n        }\n        </code>\n    </pre>\n    * @method getBreadCrumbs \n*/\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (categoryName) {\n  var resp = this.getResponseObj();\n  var breadCrumbs = [];\n\n  if (resp && resp.facets && resp.facets.multilevel) {\n    if (categoryName) {\n      var multiFacets = resp.facets.multilevel.list;\n\n      if (multiFacets) {\n        multiFacets.forEach(function (item) {\n          var filterField = item.filterField,\n              breadcrumb = item.breadcrumb;\n\n          if (filterField === categoryName) {\n            breadCrumbs = breadcrumb;\n          }\n        });\n      } else {\n        var crumb = resp.facets.multilevel.breadcrumb;\n        breadCrumbs = crumb ? crumb : null;\n      }\n    }\n  }\n\n  return breadCrumbs;\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/breadcrumbs/getBreadCrumbs.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/breadcrumbs/getBreadCrumbsList.js":
/*!***********************************************************************!*\
  !*** ../search-JS-core/src/modules/breadcrumbs/getBreadCrumbsList.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n*  @description \n* will return breadcrumbs in array format.\n*example:\n    * @method getBreadCrumbsList\n*/\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (categoryName) {\n  var data = this.getBreadCrumbs(categoryName);\n  var arr = [];\n  var temp = data;\n\n  if (data) {\n    for (var i = 0; i < this.options.facetDepth; i++) {\n      if (temp.level) {\n        (function () {\n          var _temp = temp,\n              level = _temp.level,\n              values = _temp.values,\n              filterField = _temp.filterField;\n          values.forEach(function (val) {\n            arr.push({\n              level: level,\n              filterField: filterField,\n              value: val.value || val.name\n            });\n          });\n        })();\n      }\n\n      if (temp.child) {\n        temp = temp.child;\n      } else {\n        break;\n      }\n    }\n  }\n\n  return arr;\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/breadcrumbs/getBreadCrumbsList.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/breadcrumbs/index.js":
/*!**********************************************************!*\
  !*** ../search-JS-core/src/modules/breadcrumbs/index.js ***!
  \**********************************************************/
/*! exports provided: default, getBreadCrumbsList, getBreadCrumbs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return setBreadCrumbs; });\n/* harmony import */ var _getBreadCrumbsList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBreadCrumbsList */ \"../search-JS-core/src/modules/breadcrumbs/getBreadCrumbsList.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getBreadCrumbsList\", function() { return _getBreadCrumbsList__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _getBreadCrumbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getBreadCrumbs */ \"../search-JS-core/src/modules/breadcrumbs/getBreadCrumbs.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getBreadCrumbs\", function() { return _getBreadCrumbs__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\nvar setBreadCrumbs = function setBreadCrumbs(prototype) {\n  prototype = Object.assign(prototype, {\n    getBreadCrumbsList: _getBreadCrumbsList__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    getBreadCrumbs: _getBreadCrumbs__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  });\n};\n\n\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/breadcrumbs/index.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/didyoumean/getDidYouMeanFromResponse.js":
/*!*****************************************************************************!*\
  !*** ../search-JS-core/src/modules/didyoumean/getDidYouMeanFromResponse.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n*  @description \n* will return did you mean texts in an array. \n*example:\n   <pre>\n        <code>\n        [\n            {\n                \"suggestion\": \"black\",\n                \"frequency\": \"509\"\n            }\n        ]\n        </code>\n    </pre>\n    * @method getDidYouMeanFromResponse \n*/\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var responseObj = this.getResponseObj() || {};\n\n  if (responseObj && responseObj.didYouMean) {\n    return responseObj.didYouMean;\n  }\n\n  return [];\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/didyoumean/getDidYouMeanFromResponse.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/didyoumean/getSpellCheckSuggested.js":
/*!**************************************************************************!*\
  !*** ../search-JS-core/src/modules/didyoumean/getSpellCheckSuggested.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n*  @description \n* will return did you mean text. \n*example:\n   <pre>\n        <code style='color:red'>\n             \"black\"\n        </code>\n    </pre>\n    * @method getDidYouMeanFromResponse \n*/\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var arr = this.state.didYouMean || [];\n  var suggestions = arr.map(function (item) {\n    return item.suggestion;\n  });\n  return suggestions;\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/didyoumean/getSpellCheckSuggested.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/didyoumean/index.js":
/*!*********************************************************!*\
  !*** ../search-JS-core/src/modules/didyoumean/index.js ***!
  \*********************************************************/
/*! exports provided: default, getDidYouMeanFromResponse, getSpellCheckSuggested, setSpellCheck */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return setDidYouMeanMethods; });\n/* harmony import */ var _getDidYouMeanFromResponse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDidYouMeanFromResponse */ \"../search-JS-core/src/modules/didyoumean/getDidYouMeanFromResponse.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getDidYouMeanFromResponse\", function() { return _getDidYouMeanFromResponse__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _getSpellCheckSuggested__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getSpellCheckSuggested */ \"../search-JS-core/src/modules/didyoumean/getSpellCheckSuggested.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getSpellCheckSuggested\", function() { return _getSpellCheckSuggested__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _setSpellCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setSpellCheck */ \"../search-JS-core/src/modules/didyoumean/setSpellCheck.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"setSpellCheck\", function() { return _setSpellCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n\n\n\n\nvar setDidYouMeanMethods = function setDidYouMeanMethods(prototype) {\n  prototype = Object.assign(prototype, {\n    getDidYouMeanFromResponse: _getDidYouMeanFromResponse__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    getSpellCheckSuggested: _getSpellCheckSuggested__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    setSpellCheck: _setSpellCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  });\n};\n\n\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/didyoumean/index.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/didyoumean/setSpellCheck.js":
/*!*****************************************************************!*\
  !*** ../search-JS-core/src/modules/didyoumean/setSpellCheck.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (enableSpellCheck) {\n  if (enableSpellCheck) {\n    this.options.spellCheck.enabled = true;\n  } else {\n    this.options.spellCheck.enabled = false;\n  }\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/didyoumean/setSpellCheck.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/facets/addFacets.js":
/*!*********************************************************!*\
  !*** ../search-JS-core/src/modules/facets/addFacets.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n/**\n* @description \n<pre>\n    <code>\n        addFacets({\n            \"selectedFacetName\": \"v_unbxd_parentcolours_uFilter\",\n            \"selectedFacetId\": \"1\",\n            \"facetData\": {\n                \"facetName\": \"v_unbxd_parentcolours_uFilter\",\n                \"filterField\": \"v_unbxd_parentcolours_uFilter\",\n                \"values\": [\n                    {\n                        \"name\": \"white\",\n                        \"count\": 143,\n                        \"dataId\": 1\n                    },\n                    {\n                        \"name\": \"black\",\n                        \"count\": 133,\n                        \"dataId\": 3\n                    },\n                    {\n                        \"name\": \"beige\",\n                        \"count\": 70,\n                        \"dataId\": 5\n                    }\n                ],\n            \"displayName\": \"Colour\",\n            \"position\": 1\n        }\n    })\n    </code>\n</pre>\n* to set a filter value\n* accepts an Object with 3  parameters\n* @param {string} selectedFacetName eg: v_unbxd_parentcolours_uFilter \n* @param {string} selectedFacetId eg: '1'\n* @param {object} facet facetData \n* @method updateFacets\n*/\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (facets) {\n  var selectedFacets = this.state.selectedFacets;\n  Object.keys(facets).map(function (facetName) {\n    var oldFacetValues = selectedFacets[facetName] || [];\n    selectedFacets[facetName] = [].concat(_toConsumableArray(oldFacetValues), _toConsumableArray(facets[facetName]));\n    return;\n  });\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/facets/addFacets.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/facets/applyFacets.js":
/*!***********************************************************!*\
  !*** ../search-JS-core/src/modules/facets/applyFacets.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n* @description \n<pre>\n    <code>\n        applyFacets({\n            \"selectedFacetName\": \"v_unbxd_parentcolours_uFilter\",\n            \"selectedFacetId\": \"1\",\n            \"facetData\": {\n                \"facetName\": \"v_unbxd_parentcolours_uFilter\",\n                \"filterField\": \"v_unbxd_parentcolours_uFilter\",\n                \"values\": [\n                    {\n                        \"name\": \"white\",\n                        \"count\": 143,\n                        \"dataId\": 1\n                    },\n                    {\n                        \"name\": \"black\",\n                        \"count\": 133,\n                        \"dataId\": 3\n                    },\n                    {\n                        \"name\": \"beige\",\n                        \"count\": 70,\n                        \"dataId\": 5\n                    }\n                ],\n            \"displayName\": \"Colour\",\n            \"position\": 1\n        }\n    })\n    </code>\n</pre>\n* to set a filter value\n* accepts an Object with 3  parameters\n* @param {string} selectedFacetName eg: v_unbxd_parentcolours_uFilter \n* @param {string} selectedFacetId eg: '1'\n* @param {object} facet facetData \n* @method updateFacets\n*/\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (applyFacets) {\n  var selectedFacets = this.state.selectedFacets;\n  this.clearFacets(false);\n  Object.keys(applyFacets).map(function (facetName) {\n    if (selectedFacets[facetName]) {\n      delete selectedFacets[facetName];\n    } else {\n      selectedFacets[facetName] = applyFacets[facetName];\n    }\n  });\n  this.setPageStart(0);\n  this.getResults.bind(this)();\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/facets/applyFacets.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/facets/clearARangeFacet.js":
/*!****************************************************************!*\
  !*** ../search-JS-core/src/modules/facets/clearARangeFacet.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n*  @description \n* to clear a rangefacet\n* @method clearARangeFacet\n* @param {string} facetName eg:v_price \n*/\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (facetName) {\n  var rangeFacet = this.state.rangeFacet;\n\n  if (rangeFacet[facetName]) {\n    delete rangeFacet[facetName];\n  }\n\n  this.state.rangeFacet = rangeFacet;\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/facets/clearARangeFacet.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/facets/clearFacets.js":
/*!***********************************************************!*\
  !*** ../search-JS-core/src/modules/facets/clearFacets.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n* @description \n<pre>\n    <code>\n        clearFacets({\n            \"selectedFacetName\": \"v_unbxd_parentcolours_uFilter\",\n            \"selectedFacetId\": \"1\",\n            \"facetData\": {\n                \"facetName\": \"v_unbxd_parentcolours_uFilter\",\n                \"filterField\": \"v_unbxd_parentcolours_uFilter\",\n                \"values\": [\n                    {\n                        \"name\": \"white\",\n                        \"count\": 143,\n                        \"dataId\": 1\n                    },\n                    {\n                        \"name\": \"black\",\n                        \"count\": 133,\n                        \"dataId\": 3\n                    },\n                    {\n                        \"name\": \"beige\",\n                        \"count\": 70,\n                        \"dataId\": 5\n                    }\n                ],\n            \"displayName\": \"Colour\",\n            \"position\": 1\n        }\n    })\n    </code>\n</pre>\n* to set a filter value\n* accepts an Object with 3  parameters\n* @param {string} selectedFacetName eg: v_unbxd_parentcolours_uFilter \n* @param {string} selectedFacetId eg: '1'\n* @param {object} facet facetData \n* @method updateFacets\n*/\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var getResults = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;\n  var selectedFacets = this.state.selectedFacets;\n  Object.keys(selectedFacets).map(function (facetName) {\n    return delete selectedFacets[facetName];\n  });\n\n  if (getResults) {\n    this.setPageStart(0);\n    this.getResults.bind(this)();\n  }\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/facets/clearFacets.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/facets/deleteAFacet.js":
/*!************************************************************!*\
  !*** ../search-JS-core/src/modules/facets/deleteAFacet.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n* @description \n* to clear a selected facet value\n* @method deleteAFacet\n* @param {string} facetName eg:v_unbxd_parentcolours_uFilter \n* @param {string} value eg:black\n*/\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (facetName, value) {\n  this.deleteFacet(facetName, value);\n  this.callBack(this, 'deleted_facet');\n\n  if (!this.options.applyMultipleFilters) {\n    this.setPageStart(0);\n    this.getResults.bind(this)();\n  }\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/facets/deleteAFacet.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/facets/deleteCategoryFilter.js":
/*!********************************************************************!*\
  !*** ../search-JS-core/src/modules/facets/deleteCategoryFilter.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n* @description \n<pre>\n        <code>\n        deleteCategoryFilter({\n            \"parent\": \"categoryPath\",\n            \"level\": \"1\",\n            \"name\": \"Top\"\n        })\n        </code>\n</pre>\n* to clear a category filter \n* accepts an Object with 3  parameters\n* @param {string} parent eg:categoryPath \n* @param {string} level eg:1\n* @param {string} name eg:\"Top\"\n* @method deleteCategoryFilter\n*/\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var _this = this;\n\n  var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var _action$parent = action.parent,\n      parent = _action$parent === void 0 ? null : _action$parent,\n      _action$level = action.level,\n      level = _action$level === void 0 ? null : _action$level,\n      _action$name = action.name,\n      name = _action$name === void 0 ? null : _action$name;\n\n  if (level) {\n    if (this.state.categoryFilter[parent]) {\n      level = Number(level) - 1;\n\n      if (level === 0) {\n        delete this.state.categoryFilter[parent];\n      } else {\n        this.state.categoryFilter[parent].splice(level, 6);\n      }\n    } else {\n      var checkCrumbs = this.getBreadCrumbsList(parent);\n\n      if (level > 1) {\n        var crumbs = [];\n        this.state.categoryFilter[parent] = [];\n        checkCrumbs.forEach(function (item, i) {\n          if (i < level - 1) {\n            var value = item.value;\n\n            _this.state.categoryFilter[parent].push(value);\n          }\n        });\n      }\n    }\n  }\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/facets/deleteCategoryFilter.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/facets/deleteFacet.js":
/*!***********************************************************!*\
  !*** ../search-JS-core/src/modules/facets/deleteFacet.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n* @description \n<pre>\n        <code>\n        deleteCategoryFilter({\n            \"parent\": \"categoryPath\",\n            \"level\": \"1\",\n            \"name\": \"Top\"\n        })\n        </code>\n</pre>\n* to clear all the filters under a facet\n* accepts an Object with 3  parameters\n* @param {string} parent eg:categoryPath \n* @param {string} level eg:1\n* @param {string} name eg:\"Top\"\n* @method deleteCategoryFilter\n*/\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (facetName, valueId) {\n  var selectedFacets = this.getSelectedFacets();\n\n  if (valueId) {\n    var selectedValues = selectedFacets[facetName];\n    this.state.selectedFacets[facetName] = selectedValues.filter(function (facetObj) {\n      return facetObj.dataId != valueId;\n    });\n  } else {\n    delete this.state.selectedFacets[facetName];\n  }\n\n  return this.state.selectedFacets;\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/facets/deleteFacet.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/facets/findSelectedFacet.js":
/*!*****************************************************************!*\
  !*** ../search-JS-core/src/modules/facets/findSelectedFacet.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n* @description \n* to get the selected facet values\n* accepts a string\n* @param {string} parent eg:color_facet \n* @method findSelectedFacet\n*/\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (selected) {\n  //items.findIndex(x => x.id == item.id);\n  return this.state.selectedFacets[selected];\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/facets/findSelectedFacet.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/facets/getAFacetByName.js":
/*!***************************************************************!*\
  !*** ../search-JS-core/src/modules/facets/getAFacetByName.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n* @description \n<pre>\n    <code>\n        getAFacetByName()\n    </code>\n</pre>\n* to return the facet details by the facet name.\n* @param name\n* @method getAFacetByName\n*/\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (name) {\n  var facets = this.getAllFacets();\n  var selected = [];\n\n  if (name) {\n    selected = facets.filter(function (item) {\n      var facetName = item.facetName;\n      return facetName === name;\n    });\n  }\n\n  return selected;\n});\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/facets/getAFacetByName.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/facets/getAllFacets.js":
/*!************************************************************!*\
  !*** ../search-JS-core/src/modules/facets/getAllFacets.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n/**\n* @description \n<pre>\n    <code>\n        getAllFacets()\n    </code>\n</pre>\n* to get all the facets in an array.\n* @method getAllFacets\n*/\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var texts = this.getAllTextFacets();\n  var ranges = this.getAllRangeFacets();\n  var multiFacets = this.getAllCategory();\n  var all = [].concat(_toConsumableArray(multiFacets), _toConsumableArray(texts), _toConsumableArray(ranges));\n  return all.sort(this.sortFacets);\n});\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/facets/getAllFacets.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/facets/getAllSelectedFacets.js":
/*!********************************************************************!*\
  !*** ../search-JS-core/src/modules/facets/getAllSelectedFacets.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var multiLevels = this.getSelectedBucketedFacet();\n  var ranges = this.getSelectedRanges();\n  var texts = this.getSelectedFacets();\n  return Object.assign({}, multiLevels, ranges, texts);\n});\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/facets/getAllSelectedFacets.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/facets/getBucketedFacets.js":
/*!*****************************************************************!*\
  !*** ../search-JS-core/src/modules/facets/getBucketedFacets.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n* @description \n* to get the multilevel facets\n* @method getBucketedFacets\n*/\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var resp = this.getResponseObj();\n\n  if (resp && resp.facets && resp.facets.multilevel) {\n    var bucket = resp.facets.multilevel.bucket || resp.facets.multilevel.list || [];\n    return this.modifyFacetsList(bucket);\n  }\n\n  return [];\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/facets/getBucketedFacets.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/facets/getCategoryFacetByValue.js":
/*!***********************************************************************!*\
  !*** ../search-JS-core/src/modules/facets/getCategoryFacetByValue.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (value) {\n  var multilevelFacets = this.getBucketedFacets();\n  var selectedValue = null;\n\n  if (multilevelFacets) {\n    for (var i = 0; i < multilevelFacets.length; i++) {\n      var current = multilevelFacets[i];\n      var values = current.values;\n\n      for (var j = 0; j < values.length; j++) {\n        var _values$j = values[j],\n            dataId = _values$j.dataId,\n            name = _values$j.name;\n\n        if (dataId === value) {\n          selectedValue = name;\n          break;\n        }\n      }\n    }\n  }\n\n  return selectedValue;\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/facets/getCategoryFacetByValue.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/facets/getCategoryFilterFromParams.js":
/*!***************************************************************************!*\
  !*** ../search-JS-core/src/modules/facets/getCategoryFilterFromParams.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (searchParams) {\n  var _this = this;\n\n  var currentFilters = searchParams[\"filter\"]; //category-filter specific code\n\n  var categorypathFilter = [];\n\n  if (searchParams[\"category-filter\"]) {\n    currentFilters = searchParams[\"category-filter\"];\n    categorypathFilter = currentFilters.split(\">\");\n  } //category-filter specific code\n\n\n  if (!currentFilters) {\n    return {};\n  }\n\n  if (!Array.isArray(currentFilters)) {\n    currentFilters = [currentFilters];\n  }\n\n  currentFilters = this.getFilterFromParams(currentFilters).selectedFilters;\n  var newObj = {};\n  var facetKeys = Object.keys(currentFilters);\n  facetKeys.forEach(function (item) {\n    if (_this.isCategoryFacet(item)) {\n      var categoryVal = currentFilters[item][0].dataId;\n      newObj[item] = categoryVal.split(\">\");\n    }\n  }); //category-filter specific code\n\n  var categorypathFilterLength = categorypathFilter.length;\n\n  if (categorypathFilterLength > 0) {\n    if (categorypathFilter) {\n      var catValues = [];\n      categorypathFilter.forEach(function (item) {\n        var dVal = decodeURIComponent(item);\n        var catValArr = dVal.split(\">\");\n        catValArr.forEach(function (val) {\n          catValues.push(decodeURIComponent(val));\n        });\n      });\n      newObj['categoryPath'] = catValues;\n    }\n  } //category-filter specific code\n\n\n  return newObj;\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/facets/getCategoryFilterFromParams.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/facets/getFacetByValue.js":
/*!***************************************************************!*\
  !*** ../search-JS-core/src/modules/facets/getFacetByValue.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (facetName, valueName) {\n  var selectedfacetInfo = this.getSelectedFacet(facetName) || {\n    facetName: facetName\n  };\n  var actualFound = false;\n  var selectedFound = null;\n  var _selectedfacetInfo$va = selectedfacetInfo.values,\n      values = _selectedfacetInfo$va === void 0 ? [] : _selectedfacetInfo$va;\n  var foundId = {\n    name: valueName\n  };\n\n  if (values.length > 0) {\n    for (var i = 0; i < values.length; i++) {\n      var item = values[i];\n\n      if (item.name === valueName) {\n        actualFound = true;\n        foundId = item;\n        break;\n      }\n    }\n  }\n\n  if (actualFound) {\n    selectedFound = _objectSpread(_objectSpread({}, selectedfacetInfo), {}, {\n      selectedvalue: foundId,\n      actualFound: actualFound\n    });\n  } else {\n    selectedFound = {\n      facetName: facetName,\n      actualFound: actualFound,\n      selectedvalue: {\n        name: valueName,\n        dataId: valueName,\n        count: 0\n      }\n    };\n  }\n\n  return selectedFound;\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/facets/getFacetByValue.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/facets/getFacets.js":
/*!*********************************************************!*\
  !*** ../search-JS-core/src/modules/facets/getFacets.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n* @description \n* to get the facets from api response\n* @method getFacets\n*/\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var responseObj = this.getResponseObj();\n\n  if (responseObj) {\n    var facets = responseObj.facets;\n\n    if (facets && facets.text && facets.text.list) {\n      return facets.text.list;\n    } else {\n      return [];\n    }\n  }\n\n  return [];\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/facets/getFacets.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/facets/getFilterFromParams.js":
/*!*******************************************************************!*\
  !*** ../search-JS-core/src/modules/facets/getFilterFromParams.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n* @description \n* to get the applied filters from api response\n* @method getFilterFromParams\n*/\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var filters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var self = this;\n  var selectedFilters = {};\n  var rangeFacet = {};\n\n  if (typeof filters === \"string\") {\n    filters = Array(filters);\n  }\n\n  filters.forEach(function (filter, index) {\n    var filterStrArr = filter.split(\"%20OR%20\");\n    filterStrArr.forEach(function (item, index) {\n      var arr = item.split(/:(.+)/);\n\n      if (arr.length === 3) {\n        var rVal = decodeURIComponent(arr[1]);\n        rVal = rVal.replace(/(^\")|(\"$)/g, '').replace(/\\\"{2,}/g, '\"').replace(/\\\\\\\"/g, '\"').replace(/(^\\[)|(\\]$)/g, '');\n        var isRange = arr[1].indexOf(\"TO\") > 0 ? true : false;\n\n        if (isRange) {\n          var range = rVal.split(\" TO \");\n          var fName = arr[0];\n          var val = \"[\".concat(Number(range[0]), \" TO \").concat(Number(range[1]), \"]\");\n\n          if (rangeFacet[fName]) {\n            rangeFacet[fName].push(val);\n          } else {\n            rangeFacet[fName] = [val];\n          } //\"[\"+start+\" TO \"+ end +\"]\"\n\n        } else {\n          var _fName = arr[0];\n          var fVal = arr[1];\n          var cleanedFacetValue = self.cleanEncodedFacetValue(fVal);\n          var decodedFval = self.decodeFacetValue(cleanedFacetValue);\n          var facetInfo = self.getFacetByValue(_fName, decodedFval);\n          var actualFound = facetInfo.actualFound;\n\n          if (actualFound) {\n            var facetName = facetInfo.facetName,\n                selectedvalue = facetInfo.selectedvalue;\n\n            if (selectedFilters[facetName]) {\n              selectedFilters[facetName].push(selectedvalue);\n            } else {\n              selectedFilters[facetName] = Array(selectedvalue);\n            }\n          } else {\n            var _facetName = facetInfo.facetName,\n                _selectedvalue = facetInfo.selectedvalue;\n            var name = _selectedvalue.name;\n            var f = {\n              name: name,\n              dataId: cleanedFacetValue,\n              count: 0\n            };\n\n            if (selectedFilters[_facetName]) {\n              selectedFilters[_facetName].push(f);\n            } else {\n              selectedFilters[_facetName] = Array(f);\n            }\n          }\n        }\n      }\n    });\n  });\n  return {\n    selectedFilters: selectedFilters,\n    rangeFacet: rangeFacet\n  };\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/facets/getFilterFromParams.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/facets/getRangeFacets.js":
/*!**************************************************************!*\
  !*** ../search-JS-core/src/modules/facets/getRangeFacets.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n* @description \n* to get the Range facets from the api response\n* @method getRangeFacets\n*/\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var responseObj = this.getResponseObj();\n\n  if (responseObj) {\n    var facets = responseObj.facets;\n\n    if (facets && facets.range && facets.range.list) {\n      return facets.range.list;\n    } else {\n      return [];\n    }\n  }\n\n  return [];\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/facets/getRangeFacets.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/facets/getRanges.js":
/*!*********************************************************!*\
  !*** ../search-JS-core/src/modules/facets/getRanges.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _processRangeFacets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./processRangeFacets */ \"../search-JS-core/src/modules/facets/processRangeFacets.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var rangeFacets = this.getRangeFacets();\n  return Object(_processRangeFacets__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(rangeFacets);\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/facets/getRanges.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/facets/getSelectedFacet.js":
/*!****************************************************************!*\
  !*** ../search-JS-core/src/modules/facets/getSelectedFacet.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n* @description \n<pre>\n    <code>\n        getSelectedFacet(facetName)\n    </code>\n</pre>\n* to get the whole facet information from facet name\n* @param {string} name eg:facetName\n* @method getSelectedFacet\n*/\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (name) {\n  var facets = this.getFacets();\n  return facets.find(function (facet) {\n    var facetName = facet.facetName;\n    return facetName === name ? facet : null;\n  });\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/facets/getSelectedFacet.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/facets/getSelectedFacetValue.js":
/*!*********************************************************************!*\
  !*** ../search-JS-core/src/modules/facets/getSelectedFacetValue.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (selectedFacet) {\n  var selectedFacetId = selectedFacet.selectedFacetId,\n      facetData = selectedFacet.facetData;\n  return facetData.values.find(function (facet) {\n    var dataId = facet.dataId;\n    return dataId === selectedFacetId;\n  });\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/facets/getSelectedFacetValue.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/facets/getSelectedFacetValueCount.js":
/*!**************************************************************************!*\
  !*** ../search-JS-core/src/modules/facets/getSelectedFacetValueCount.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var selectedFacets = this.getAllSelectedFacets() || {};\n  var facetArray = Object.keys(selectedFacets);\n  var valueCount = 0;\n  facetArray.forEach(function (item) {\n    var facetObj = selectedFacets[item];\n\n    if (Array.isArray(facetObj)) {\n      valueCount += facetObj.length;\n    }\n  });\n  return valueCount;\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/facets/getSelectedFacetValueCount.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/facets/getSelectedFacets.js":
/*!*****************************************************************!*\
  !*** ../search-JS-core/src/modules/facets/getSelectedFacets.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n* @description \n<pre>\n    <code>\n        getSelectedFacets()\n    </code>\n</pre>\n* to get all the selected facets\n* @method getSelectedFacets\n*/\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var selectedFacets = this.state.selectedFacets;\n  return selectedFacets;\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/facets/getSelectedFacets.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/facets/getSelectedFacetsCount.js":
/*!**********************************************************************!*\
  !*** ../search-JS-core/src/modules/facets/getSelectedFacetsCount.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var facets = this.getAllSelectedFacets() || {};\n  return Object.keys(facets).length;\n});\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/facets/getSelectedFacetsCount.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/facets/getSelectedMultilevelFacet.js":
/*!**************************************************************************!*\
  !*** ../search-JS-core/src/modules/facets/getSelectedMultilevelFacet.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n* @description \n<pre>\n    <code>\n        getSelectedMultilevelFacet()\n    </code>\n</pre>\n* to get all the selected multilevel facets\n* @method getSelectedMultilevelFacet\n*/\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var categoryFilter = this.state.categoryFilter;\n\n  if (categoryFilter) {\n    var categories = Object.keys(categoryFilter);\n    return categories;\n  }\n\n  return null;\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/facets/getSelectedMultilevelFacet.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/facets/getSelectedRanges.js":
/*!*****************************************************************!*\
  !*** ../search-JS-core/src/modules/facets/getSelectedRanges.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (facetName) {\n  var rangeFacet = this.state.rangeFacet;\n\n  if (facetName) {\n    return rangeFacet[facetName];\n  }\n\n  return rangeFacet;\n});\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/facets/getSelectedRanges.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/facets/index.js":
/*!*****************************************************!*\
  !*** ../search-JS-core/src/modules/facets/index.js ***!
  \*****************************************************/
/*! exports provided: default, getBucketedFacets, getSelectedBucketedFacet, getFilterFromParams, getCategoryFilterFromParams, getRangeFacets, getFacets, getSelectedFacets, getSelectedFacet, updateFacets, applyFacets, clearFacets, addFacets, findSelectedFacet, deleteCategoryFilter, deleteFacet, getFacetByValue, getSelectedFacetValue, setCategoryFilter, setDefaultCategoryFilter, setRangeFacet, clearARangeFacet, applyRangeFacet, isFacetAlreadyAdded, getSelectedRanges, getRanges, sortFacets, isCategoryFacet, getAllFacets, getAFacetByName, getSelectedMultilevelFacet, getAllTextFacets, getAllRangeFacets, getAllCategory, getAllSelectedFacets, getSelectedFacetsCount, getSelectedFacetValueCount, encodeFacetValue, modifyFacetsList, modifyValues, decodeFacetValue, cleanFacetValue, getCategoryFacetByValue, encodeCategoryFacetValue, cleanEncodedFacetValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return setFacetMethods; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSelectedBucketedFacet\", function() { return getSelectedBucketedFacet; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"applyRangeFacet\", function() { return applyRangeFacet; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sortFacets\", function() { return sortFacets; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllTextFacets\", function() { return getAllTextFacets; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllRangeFacets\", function() { return getAllRangeFacets; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllCategory\", function() { return getAllCategory; });\n/* harmony import */ var _getBucketedFacets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBucketedFacets */ \"../search-JS-core/src/modules/facets/getBucketedFacets.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getBucketedFacets\", function() { return _getBucketedFacets__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _getFilterFromParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getFilterFromParams */ \"../search-JS-core/src/modules/facets/getFilterFromParams.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getFilterFromParams\", function() { return _getFilterFromParams__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _getCategoryFilterFromParams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getCategoryFilterFromParams */ \"../search-JS-core/src/modules/facets/getCategoryFilterFromParams.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getCategoryFilterFromParams\", function() { return _getCategoryFilterFromParams__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _getRangeFacets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getRangeFacets */ \"../search-JS-core/src/modules/facets/getRangeFacets.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getRangeFacets\", function() { return _getRangeFacets__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _getFacets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getFacets */ \"../search-JS-core/src/modules/facets/getFacets.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getFacets\", function() { return _getFacets__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n/* harmony import */ var _getSelectedFacets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getSelectedFacets */ \"../search-JS-core/src/modules/facets/getSelectedFacets.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getSelectedFacets\", function() { return _getSelectedFacets__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; });\n\n/* harmony import */ var _getSelectedFacet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getSelectedFacet */ \"../search-JS-core/src/modules/facets/getSelectedFacet.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getSelectedFacet\", function() { return _getSelectedFacet__WEBPACK_IMPORTED_MODULE_6__[\"default\"]; });\n\n/* harmony import */ var _updateFacets__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./updateFacets */ \"../search-JS-core/src/modules/facets/updateFacets.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"updateFacets\", function() { return _updateFacets__WEBPACK_IMPORTED_MODULE_7__[\"default\"]; });\n\n/* harmony import */ var _applyFacets__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./applyFacets */ \"../search-JS-core/src/modules/facets/applyFacets.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"applyFacets\", function() { return _applyFacets__WEBPACK_IMPORTED_MODULE_8__[\"default\"]; });\n\n/* harmony import */ var _clearFacets__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./clearFacets */ \"../search-JS-core/src/modules/facets/clearFacets.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"clearFacets\", function() { return _clearFacets__WEBPACK_IMPORTED_MODULE_9__[\"default\"]; });\n\n/* harmony import */ var _addFacets__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./addFacets */ \"../search-JS-core/src/modules/facets/addFacets.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"addFacets\", function() { return _addFacets__WEBPACK_IMPORTED_MODULE_10__[\"default\"]; });\n\n/* harmony import */ var _findSelectedFacet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./findSelectedFacet */ \"../search-JS-core/src/modules/facets/findSelectedFacet.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"findSelectedFacet\", function() { return _findSelectedFacet__WEBPACK_IMPORTED_MODULE_11__[\"default\"]; });\n\n/* harmony import */ var _deleteCategoryFilter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./deleteCategoryFilter */ \"../search-JS-core/src/modules/facets/deleteCategoryFilter.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"deleteCategoryFilter\", function() { return _deleteCategoryFilter__WEBPACK_IMPORTED_MODULE_12__[\"default\"]; });\n\n/* harmony import */ var _deleteFacet__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./deleteFacet */ \"../search-JS-core/src/modules/facets/deleteFacet.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"deleteFacet\", function() { return _deleteFacet__WEBPACK_IMPORTED_MODULE_13__[\"default\"]; });\n\n/* harmony import */ var _getFacetByValue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./getFacetByValue */ \"../search-JS-core/src/modules/facets/getFacetByValue.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getFacetByValue\", function() { return _getFacetByValue__WEBPACK_IMPORTED_MODULE_14__[\"default\"]; });\n\n/* harmony import */ var _getSelectedFacetValue__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./getSelectedFacetValue */ \"../search-JS-core/src/modules/facets/getSelectedFacetValue.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getSelectedFacetValue\", function() { return _getSelectedFacetValue__WEBPACK_IMPORTED_MODULE_15__[\"default\"]; });\n\n/* harmony import */ var _setCategoryFilter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./setCategoryFilter */ \"../search-JS-core/src/modules/facets/setCategoryFilter.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"setCategoryFilter\", function() { return _setCategoryFilter__WEBPACK_IMPORTED_MODULE_16__[\"default\"]; });\n\n/* harmony import */ var _setDefaultCategoryFilter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./setDefaultCategoryFilter */ \"../search-JS-core/src/modules/facets/setDefaultCategoryFilter.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"setDefaultCategoryFilter\", function() { return _setDefaultCategoryFilter__WEBPACK_IMPORTED_MODULE_17__[\"default\"]; });\n\n/* harmony import */ var _setRangeFacet__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./setRangeFacet */ \"../search-JS-core/src/modules/facets/setRangeFacet.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"setRangeFacet\", function() { return _setRangeFacet__WEBPACK_IMPORTED_MODULE_18__[\"default\"]; });\n\n/* harmony import */ var _clearARangeFacet__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./clearARangeFacet */ \"../search-JS-core/src/modules/facets/clearARangeFacet.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"clearARangeFacet\", function() { return _clearARangeFacet__WEBPACK_IMPORTED_MODULE_19__[\"default\"]; });\n\n/* harmony import */ var _deleteAFacet__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./deleteAFacet */ \"../search-JS-core/src/modules/facets/deleteAFacet.js\");\n/* harmony import */ var _isFacetAlreadyAdded__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./isFacetAlreadyAdded */ \"../search-JS-core/src/modules/facets/isFacetAlreadyAdded.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isFacetAlreadyAdded\", function() { return _isFacetAlreadyAdded__WEBPACK_IMPORTED_MODULE_21__[\"default\"]; });\n\n/* harmony import */ var _getSelectedRanges__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./getSelectedRanges */ \"../search-JS-core/src/modules/facets/getSelectedRanges.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getSelectedRanges\", function() { return _getSelectedRanges__WEBPACK_IMPORTED_MODULE_22__[\"default\"]; });\n\n/* harmony import */ var _getRanges__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./getRanges */ \"../search-JS-core/src/modules/facets/getRanges.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getRanges\", function() { return _getRanges__WEBPACK_IMPORTED_MODULE_23__[\"default\"]; });\n\n/* harmony import */ var _isCategoryFacet_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./isCategoryFacet.js */ \"../search-JS-core/src/modules/facets/isCategoryFacet.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isCategoryFacet\", function() { return _isCategoryFacet_js__WEBPACK_IMPORTED_MODULE_24__[\"default\"]; });\n\n/* harmony import */ var _getAllFacets_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./getAllFacets.js */ \"../search-JS-core/src/modules/facets/getAllFacets.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getAllFacets\", function() { return _getAllFacets_js__WEBPACK_IMPORTED_MODULE_25__[\"default\"]; });\n\n/* harmony import */ var _getAFacetByName_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./getAFacetByName.js */ \"../search-JS-core/src/modules/facets/getAFacetByName.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getAFacetByName\", function() { return _getAFacetByName_js__WEBPACK_IMPORTED_MODULE_26__[\"default\"]; });\n\n/* harmony import */ var _getSelectedMultilevelFacet_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./getSelectedMultilevelFacet.js */ \"../search-JS-core/src/modules/facets/getSelectedMultilevelFacet.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getSelectedMultilevelFacet\", function() { return _getSelectedMultilevelFacet_js__WEBPACK_IMPORTED_MODULE_27__[\"default\"]; });\n\n/* harmony import */ var _getAllSelectedFacets_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./getAllSelectedFacets.js */ \"../search-JS-core/src/modules/facets/getAllSelectedFacets.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getAllSelectedFacets\", function() { return _getAllSelectedFacets_js__WEBPACK_IMPORTED_MODULE_28__[\"default\"]; });\n\n/* harmony import */ var _getSelectedFacetsCount__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./getSelectedFacetsCount */ \"../search-JS-core/src/modules/facets/getSelectedFacetsCount.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getSelectedFacetsCount\", function() { return _getSelectedFacetsCount__WEBPACK_IMPORTED_MODULE_29__[\"default\"]; });\n\n/* harmony import */ var _getSelectedFacetValueCount__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./getSelectedFacetValueCount */ \"../search-JS-core/src/modules/facets/getSelectedFacetValueCount.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getSelectedFacetValueCount\", function() { return _getSelectedFacetValueCount__WEBPACK_IMPORTED_MODULE_30__[\"default\"]; });\n\n/* harmony import */ var _getCategoryFacetByValue__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./getCategoryFacetByValue */ \"../search-JS-core/src/modules/facets/getCategoryFacetByValue.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getCategoryFacetByValue\", function() { return _getCategoryFacetByValue__WEBPACK_IMPORTED_MODULE_31__[\"default\"]; });\n\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./utils.js */ \"../search-JS-core/src/modules/facets/utils.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"encodeFacetValue\", function() { return _utils_js__WEBPACK_IMPORTED_MODULE_32__[\"encodeFacetValue\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"modifyFacetsList\", function() { return _utils_js__WEBPACK_IMPORTED_MODULE_32__[\"modifyFacetsList\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"modifyValues\", function() { return _utils_js__WEBPACK_IMPORTED_MODULE_32__[\"modifyValues\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"decodeFacetValue\", function() { return _utils_js__WEBPACK_IMPORTED_MODULE_32__[\"decodeFacetValue\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"cleanFacetValue\", function() { return _utils_js__WEBPACK_IMPORTED_MODULE_32__[\"cleanFacetValue\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"encodeCategoryFacetValue\", function() { return _utils_js__WEBPACK_IMPORTED_MODULE_32__[\"encodeCategoryFacetValue\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"cleanEncodedFacetValue\", function() { return _utils_js__WEBPACK_IMPORTED_MODULE_32__[\"cleanEncodedFacetValue\"]; });\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar getSelectedBucketedFacet = function getSelectedBucketedFacet() {\n  return this.state.categoryFilter;\n};\n\nvar applyRangeFacet = function applyRangeFacet() {\n  this.setPageStart(0);\n  this.getResults.bind(this)();\n};\n\nvar sortFacets = function sortFacets(a, b) {\n  return a.position > b.position ? 1 : -1;\n};\n\nvar getAllTextFacets = function getAllTextFacets() {\n  var text = this.getFacets();\n  return text.map(function (item) {\n    item.facetType = \"text\";\n    return item;\n  });\n};\n\nvar getAllRangeFacets = function getAllRangeFacets() {\n  var ranges = this.getRanges();\n  return ranges.map(function (item) {\n    item.facetType = \"range\";\n    return item;\n  });\n};\n\nvar getAllCategory = function getAllCategory() {\n  var multiFacets = this.getBucketedFacets();\n  return multiFacets.map(function (item) {\n    item.facetType = \"category\";\n    return item;\n  });\n};\n\nvar setFacetMethods = function setFacetMethods(prototype) {\n  prototype = Object.assign(prototype, {\n    getBucketedFacets: _getBucketedFacets__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    getSelectedBucketedFacet: getSelectedBucketedFacet,\n    getFilterFromParams: _getFilterFromParams__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    getCategoryFilterFromParams: _getCategoryFilterFromParams__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    getRangeFacets: _getRangeFacets__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    getFacets: _getFacets__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    getSelectedFacets: _getSelectedFacets__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    getSelectedFacet: _getSelectedFacet__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n    updateFacets: _updateFacets__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n    applyFacets: _applyFacets__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n    clearFacets: _clearFacets__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n    addFacets: _addFacets__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n    findSelectedFacet: _findSelectedFacet__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\n    deleteCategoryFilter: _deleteCategoryFilter__WEBPACK_IMPORTED_MODULE_12__[\"default\"],\n    deleteFacet: _deleteFacet__WEBPACK_IMPORTED_MODULE_13__[\"default\"],\n    getFacetByValue: _getFacetByValue__WEBPACK_IMPORTED_MODULE_14__[\"default\"],\n    getSelectedFacetValue: _getSelectedFacetValue__WEBPACK_IMPORTED_MODULE_15__[\"default\"],\n    setCategoryFilter: _setCategoryFilter__WEBPACK_IMPORTED_MODULE_16__[\"default\"],\n    setDefaultCategoryFilter: _setDefaultCategoryFilter__WEBPACK_IMPORTED_MODULE_17__[\"default\"],\n    setRangeFacet: _setRangeFacet__WEBPACK_IMPORTED_MODULE_18__[\"default\"],\n    clearARangeFacet: _clearARangeFacet__WEBPACK_IMPORTED_MODULE_19__[\"default\"],\n    deleteAFacet: _deleteAFacet__WEBPACK_IMPORTED_MODULE_20__[\"default\"],\n    applyRangeFacet: applyRangeFacet,\n    isFacetAlreadyAdded: _isFacetAlreadyAdded__WEBPACK_IMPORTED_MODULE_21__[\"default\"],\n    getSelectedRanges: _getSelectedRanges__WEBPACK_IMPORTED_MODULE_22__[\"default\"],\n    getRanges: _getRanges__WEBPACK_IMPORTED_MODULE_23__[\"default\"],\n    sortFacets: sortFacets,\n    isCategoryFacet: _isCategoryFacet_js__WEBPACK_IMPORTED_MODULE_24__[\"default\"],\n    getAllFacets: _getAllFacets_js__WEBPACK_IMPORTED_MODULE_25__[\"default\"],\n    getAFacetByName: _getAFacetByName_js__WEBPACK_IMPORTED_MODULE_26__[\"default\"],\n    getSelectedMultilevelFacet: _getSelectedMultilevelFacet_js__WEBPACK_IMPORTED_MODULE_27__[\"default\"],\n    getAllTextFacets: getAllTextFacets,\n    getAllRangeFacets: getAllRangeFacets,\n    getAllCategory: getAllCategory,\n    getAllSelectedFacets: _getAllSelectedFacets_js__WEBPACK_IMPORTED_MODULE_28__[\"default\"],\n    getSelectedFacetsCount: _getSelectedFacetsCount__WEBPACK_IMPORTED_MODULE_29__[\"default\"],\n    getSelectedFacetValueCount: _getSelectedFacetValueCount__WEBPACK_IMPORTED_MODULE_30__[\"default\"],\n    encodeFacetValue: _utils_js__WEBPACK_IMPORTED_MODULE_32__[\"encodeFacetValue\"],\n    modifyFacetsList: _utils_js__WEBPACK_IMPORTED_MODULE_32__[\"modifyFacetsList\"],\n    modifyValues: _utils_js__WEBPACK_IMPORTED_MODULE_32__[\"modifyValues\"],\n    decodeFacetValue: _utils_js__WEBPACK_IMPORTED_MODULE_32__[\"decodeFacetValue\"],\n    cleanFacetValue: _utils_js__WEBPACK_IMPORTED_MODULE_32__[\"cleanFacetValue\"],\n    getCategoryFacetByValue: _getCategoryFacetByValue__WEBPACK_IMPORTED_MODULE_31__[\"default\"],\n    encodeCategoryFacetValue: _utils_js__WEBPACK_IMPORTED_MODULE_32__[\"encodeCategoryFacetValue\"],\n    cleanEncodedFacetValue: _utils_js__WEBPACK_IMPORTED_MODULE_32__[\"cleanEncodedFacetValue\"]\n  });\n};\n\n\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/facets/index.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/facets/isCategoryFacet.js":
/*!***************************************************************!*\
  !*** ../search-JS-core/src/modules/facets/isCategoryFacet.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n* @description \n<pre>\n    <code>\n        isCategoryFacet(facetName)\n    </code>\n</pre>\n* to know whether facet is category Facet or not\n* @param {string} name eg:facetName\n* @method isCategoryFacet\n*/\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (facetName) {\n  var facetItem = this.getAFacetByName(facetName)[0];\n\n  if (facetItem) {\n    var facetType = facetItem.facetType;\n\n    if (facetType === \"category\") {\n      return true;\n    }\n\n    return false;\n  }\n\n  return false;\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/facets/isCategoryFacet.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/facets/isFacetAlreadyAdded.js":
/*!*******************************************************************!*\
  !*** ../search-JS-core/src/modules/facets/isFacetAlreadyAdded.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n* @description \n<pre>\n    <code>\n        isFacetAlreadyAdded(facetName, value)\n    </code>\n</pre>\n* to know whether facet is already seleted or not\n* @param {string} name eg:facetName\n* @param {value} filter value eg:xs\n* @method isFacetAlreadyAdded\n*/\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (facetName, value) {\n  var selectedFacets = this.getSelectedFacets();\n  var facet = selectedFacets[facetName];\n  var isAdded = false;\n\n  if (facet) {\n    facet.forEach(function (item) {\n      var dataId = item.dataId;\n\n      if (dataId === value) {\n        isAdded = true;\n        return false;\n      }\n    });\n  }\n\n  return isAdded;\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/facets/isFacetAlreadyAdded.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/facets/processRangeFacets.js":
/*!******************************************************************!*\
  !*** ../search-JS-core/src/modules/facets/processRangeFacets.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar processRangeFacet = function processRangeFacet(facets) {\n  var facetList = [];\n  var modifiedFacets = facets || [];\n  modifiedFacets.forEach(function (facet) {\n    var _facet$values = facet.values,\n        counts = _facet$values.counts,\n        gap = _facet$values.gap;\n    var values = [];\n    var valuesHolder = [];\n\n    for (var i = 0; i < counts.length; i = i + 2) {\n      var valLabel = Number(counts[i]); // facet value object\n\n      var valObject = {\n        name: valLabel,\n        count: counts[i + 1],\n        dataId: valLabel\n      }; // push facet object into a temporary holder\n\n      valuesHolder.push(valObject);\n\n      if (valuesHolder.length >= 2) {\n        // get from and end values from the holder\n        var from = valuesHolder[0],\n            end = valuesHolder[1];\n        values.push({\n          from: from,\n          end: end\n        }); // remove the first value from the holder\n\n        valuesHolder.shift(); // use the first value as from value in the next iteration\n      }\n    }\n\n    if (valuesHolder.length === 1) {\n      var _from = valuesHolder[0]; // formulate an end value using gap\n\n      var _valLabel = _from.dataId + gap;\n\n      var _end = {\n        name: _valLabel,\n        count: 0,\n        dataId: _valLabel\n      };\n      values.push({\n        from: _from,\n        end: _end\n      });\n    } // pick up start and end values from the parsed array.\n\n\n    var startVal = values[0]['from']['dataId'];\n    var endVal = values[values.length - 1]['end']['dataId'];\n    facet.start = startVal;\n    facet.end = endVal;\n    facet.max = endVal;\n    facet.gap = gap || 1;\n    facet.min = startVal;\n    facet.values = values;\n    facetList.push(_objectSpread(_objectSpread({}, facet), {}, {\n      values: values\n    }));\n  });\n  return facetList;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (processRangeFacet);\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/facets/processRangeFacets.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/facets/setCategoryFilter.js":
/*!*****************************************************************!*\
  !*** ../search-JS-core/src/modules/facets/setCategoryFilter.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n* @description \n<pre>\n    <code>\n        setCategoryFilter({\n            \"parent\": \"categoryPath\",\n            \"level\": \"1\",\n            \"name\": \"Top\"\n        })\n    </code>\n</pre>\n* to set a category filter in state\n* accepts an Object with 3  parameters\n* @param {string} parent eg:categoryPath \n* @param {string} level eg:1\n* @param {string} name eg:\"Top\"\n* @method setCategoryFilter\n*/\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var _action$parent = action.parent,\n      parent = _action$parent === void 0 ? null : _action$parent,\n      _action$level = action.level,\n      level = _action$level === void 0 ? null : _action$level,\n      _action$name = action.name,\n      name = _action$name === void 0 ? null : _action$name;\n  var selectedValue = this.getCategoryFacetByValue(name);\n  var list = this.getBreadCrumbsList(parent);\n  level = Number(level);\n\n  if (level && selectedValue) {\n    if (this.state.categoryFilter[parent] && level <= list.length) {\n      this.state.categoryFilter[parent][level - 1] = selectedValue;\n      this.callBack(this, 'deletedcategoryFilter');\n    } else {\n      var crumbs = [];\n      crumbs = list.map(function (item) {\n        return item.value;\n      });\n      crumbs.push(selectedValue);\n      this.state.categoryFilter[parent] = crumbs;\n      this.callBack(this, 'setCategoryFilter');\n    }\n  }\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/facets/setCategoryFilter.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/facets/setDefaultCategoryFilter.js":
/*!************************************************************************!*\
  !*** ../search-JS-core/src/modules/facets/setDefaultCategoryFilter.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n* @description \n<pre>\n    <code>\n        setCategoryFilter({\n            \"parent\": \"categoryPath\",\n            \"level\": \"1\",\n            \"name\": \"Top\"\n        })\n    </code>\n</pre>\n* to set a category filter in state\n* accepts an Object with 3  parameters\n* @param {string} parent eg:categoryPath \n* @param {string} level eg:1\n* @param {string} name eg:\"Top\"\n* @method setCategoryFilter\n*/\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (categoryPathStr) {\n  if (categoryPathStr.length) {\n    var multilevelFieldName = this.options.extraParams['facet.multilevel'];\n    this.state.categoryFilter[multilevelFieldName] = [categoryPathStr];\n  }\n});\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/facets/setDefaultCategoryFilter.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/facets/setRangeFacet.js":
/*!*************************************************************!*\
  !*** ../search-JS-core/src/modules/facets/setRangeFacet.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n* @description \n<pre>\n    <code>\n        setRangeFacet({\n            \"start\": 0,\n            \"end\": \"100\",\n            \"name\": \"price_facet\"\n            \"applyMultiple\":false\n        })\n    </code>\n</pre>\n* to set a range filter in state\n* accepts an Object with 3  parameters\n* @param {number} start eg:0 \n* @param {number} end eg:100\n* @param {string} facet name eg:\"price\"\n* @param {boolean} applyMultiple eg:\"price\"\n* @method setRangeFacet\n*/\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (rangeFacet) {\n  var start = rangeFacet.start,\n      end = rangeFacet.end,\n      facetName = rangeFacet.facetName,\n      applyMultiple = rangeFacet.applyMultiple;\n  var rangeVal = \"[\".concat(start, \" TO \").concat(end, \"]\");\n\n  if (applyMultiple) {\n    if (!this.state.rangeFacet[facetName]) {\n      this.state.rangeFacet[facetName] = [rangeVal];\n    } else {\n      var id = this.state.rangeFacet[facetName].indexOf(rangeVal);\n\n      if (id < 0) {\n        this.state.rangeFacet[facetName].push(rangeVal);\n      } else {\n        this.state.rangeFacet[facetName].splice(id, 1);\n      }\n    }\n  } else {\n    this.state.rangeFacet[facetName] = [rangeVal];\n  }\n\n  this.callBack(self, 'added_facet');\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/facets/setRangeFacet.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/facets/updateFacets.js":
/*!************************************************************!*\
  !*** ../search-JS-core/src/modules/facets/updateFacets.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n* @description \n<pre>\n    <code>\n        updateFacets({\n            \"selectedFacetName\": \"v_unbxd_parentcolours_uFilter\",\n            \"selectedFacetId\": \"1\",\n            \"facetData\": {\n                \"facetName\": \"v_unbxd_parentcolours_uFilter\",\n                \"filterField\": \"v_unbxd_parentcolours_uFilter\",\n                \"values\": [\n                    {\n                        \"name\": \"white\",\n                        \"count\": 143,\n                        \"dataId\": 1\n                    },\n                    {\n                        \"name\": \"black\",\n                        \"count\": 133,\n                        \"dataId\": 3\n                    },\n                    {\n                        \"name\": \"beige\",\n                        \"count\": 70,\n                        \"dataId\": 5\n                    }\n                ],\n            \"displayName\": \"Colour\",\n            \"position\": 1\n        }\n    })\n    </code>\n</pre>\n* to set a filter value\n* accepts an Object with 3  parameters\n* @param {string} selectedFacetName eg: v_unbxd_parentcolours_uFilter \n* @param {string} selectedFacetId eg: '1'\n* @param {object} facet facetData \n* @method updateFacets\n*/\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (selectedFacet) {\n  var selectedFacets = this.state.selectedFacets;\n  var selectedFacetName = selectedFacet.selectedFacetName;\n  var selectedFacetId = \"\";\n  var selectedFacetdataId = \"\";\n  var selectedCount = 0;\n  var selectedFacetVal = this.getSelectedFacetValue(selectedFacet);\n\n  if (selectedFacetVal) {\n    var name = selectedFacetVal.name,\n        dataId = selectedFacetVal.dataId,\n        count = selectedFacetVal.count;\n    selectedFacetId = name;\n    selectedFacetdataId = dataId;\n    selectedCount = count;\n  }\n\n  if (this.isFacetAlreadyAdded(selectedFacetName, selectedFacetdataId)) {\n    return false;\n  }\n\n  if (!selectedFacets[selectedFacetName]) {\n    selectedFacets[selectedFacetName] = [{\n      name: selectedFacetId,\n      dataId: selectedFacetdataId,\n      count: selectedCount\n    }];\n  } else {\n    selectedFacets[selectedFacetName].push({\n      name: selectedFacetId,\n      dataId: selectedFacetdataId,\n      count: selectedCount\n    });\n  }\n\n  this.callBack(self, 'added_facet');\n\n  if (!this.options.applyMultipleFilters) {\n    this.setPageStart(0);\n    this.getResults.bind(this)();\n  }\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/facets/updateFacets.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/facets/utils.js":
/*!*****************************************************!*\
  !*** ../search-JS-core/src/modules/facets/utils.js ***!
  \*****************************************************/
/*! exports provided: modifyFacetsList, modifyValues, encodeFacetValue, decodeFacetValue, cleanFacetValue, encodeCategoryFacetValue, cleanEncodedFacetValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"modifyFacetsList\", function() { return modifyFacetsList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"modifyValues\", function() { return modifyValues; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"encodeFacetValue\", function() { return encodeFacetValue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"decodeFacetValue\", function() { return decodeFacetValue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cleanFacetValue\", function() { return cleanFacetValue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"encodeCategoryFacetValue\", function() { return encodeCategoryFacetValue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cleanEncodedFacetValue\", function() { return cleanEncodedFacetValue; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar modifyValues = function modifyValues() {\n  var _this = this;\n\n  var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var valuesList = [];\n  values.forEach(function (value, index) {\n    var data = value;\n    var newObj = {};\n\n    if (value.name) {\n      valuesList.push(_objectSpread(_objectSpread({}, data), {}, {\n        'dataId': _this.encodeFacetValue(value.name)\n      }));\n    } else {\n      var prevData = \"\";\n\n      if (index % 2 === 1) {\n        prevData = values[index - 1];\n        valuesList.push({\n          name: prevData,\n          count: data,\n          dataId: _this.encodeFacetValue(prevData)\n        });\n      }\n    }\n  });\n  return valuesList;\n};\n\nvar modifyFacetsList = function modifyFacetsList(facets) {\n  var _this2 = this;\n\n  var facetList = [];\n  var modifiedFacets = facets || [];\n  modifiedFacets.forEach(function (facet, index) {\n    var values = facet.values,\n        displayName = facet.displayName,\n        facetName = facet.facetName,\n        filterField = facet.filterField;\n\n    if (!facetName) {\n      if (displayName) {\n        facet.facetName = displayName;\n      }\n\n      if (filterField) {\n        facet.facetName = filterField;\n      }\n    }\n\n    facet.values = _this2.modifyValues(values);\n    facetList.push(facet);\n  });\n  return facetList;\n}; //this method is used to encode the facet values if it has some special characters\n\n\nfunction hex(c) {\n  var v = '0' + c.charCodeAt(0).toString(16);\n  return '\\\\x' + v.substr(v.length - 2);\n}\n\nvar encodeFacetValue = function encodeFacetValue(value) {\n  value = value.replace(/\\\\/g, '\\\\\\\\').replace(/\\n/g, '\\\\n').replace(/\\t/g, '\\\\t').replace(/\\v/g, '\\\\v').replace(/'/g, \"\\\\'\").replace(/\"/g, '\\\\\"').replace(/[\\x00-\\x1F\\x80-\\x9F]/g, hex);\n  return encodeURIComponent(value);\n};\n\nvar encodeCategoryFacetValue = function encodeCategoryFacetValue(value) {\n  value = value.replace(/\\\\/g, '\\\\\\\\').replace(/\\n/g, '\\\\n').replace(/\\t/g, '\\\\t').replace(/\\v/g, '\\\\v').replace(/'/g, \"\\\\'\").replace(/\"/g, '\\\\\"').replace(/[\\x00-\\x1F\\x80-\\x9F]/g, hex);\n  return encodeURIComponent(value);\n};\n\nvar decodeFacetValue = function decodeFacetValue(value) {\n  return decodeURIComponent(new String(\"\".concat(value)));\n};\n\nvar cleanFacetValue = function cleanFacetValue(value) {\n  return value.replace(/[^\\w\\d]/g, '');\n};\n\nvar cleanEncodedFacetValue = function cleanEncodedFacetValue(value) {\n  var newValue = \"\";\n  var doubleStr = \"%22\";\n  var valArr = value.split(doubleStr);\n\n  if (valArr.length === 1) {\n    newValue = valArr[1];\n  } else {\n    valArr = valArr.slice(1, -1);\n    newValue = valArr.join(doubleStr);\n  }\n\n  return newValue;\n};\n\n\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/facets/utils.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/index.js":
/*!**********************************************!*\
  !*** ../search-JS-core/src/modules/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url */ \"../search-JS-core/src/modules/url/index.js\");\n/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagination */ \"../search-JS-core/src/modules/pagination/index.js\");\n/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search */ \"../search-JS-core/src/modules/search/index.js\");\n/* harmony import */ var _swatches__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./swatches */ \"../search-JS-core/src/modules/swatches/index.js\");\n/* harmony import */ var _facets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./facets */ \"../search-JS-core/src/modules/facets/index.js\");\n/* harmony import */ var _breadcrumbs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./breadcrumbs */ \"../search-JS-core/src/modules/breadcrumbs/index.js\");\n/* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sort */ \"../search-JS-core/src/modules/sort/index.js\");\n/* harmony import */ var _didyoumean__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./didyoumean */ \"../search-JS-core/src/modules/didyoumean/index.js\");\n/* harmony import */ var _banner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./banner */ \"../search-JS-core/src/modules/banner/index.js\");\n\n\n\n\n\n\n\n\n\n\nvar changeInput = function changeInput(value, evt) {\n  this.state.userInput = value;\n  this.callBack(value, evt);\n};\n\nvar resetFacets = function resetFacets() {\n  this.state.selectedFacets = {};\n  this.state.rangeFacet = {};\n  this.state.categoryFilter = {};\n  this.state.breadcrumbs = {};\n};\n\nvar resetAll = function resetAll() {\n  this.resetFacets();\n  this.state.didYouMean = null;\n  this.state.startPageNo = 0;\n  this.state.selectedSort = '';\n  this.state.responseObj = null;\n  this.state.userInput = '';\n  this.state.pageSize = this.options.pageSize;\n};\n\nvar setMethods = function setMethods(UnbxdSearch) {\n  var prototype = UnbxdSearch.prototype;\n  prototype.changeInput = changeInput;\n  prototype.resetFacets = resetFacets;\n  prototype.resetAll = resetAll;\n  Object(_url__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(prototype);\n  Object(_pagination__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(prototype);\n  Object(_search__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(prototype);\n  Object(_swatches__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(prototype);\n  Object(_facets__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(prototype);\n  Object(_breadcrumbs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(prototype);\n  Object(_sort__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(prototype);\n  Object(_didyoumean__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(prototype);\n  Object(_banner__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(prototype);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (setMethods);\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/index.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/pagination/getPaginationInfo.js":
/*!*********************************************************************!*\
  !*** ../search-JS-core/src/modules/pagination/getPaginationInfo.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * @description \n <pre>\n <code>\n getPaginationInfo()\n </code>\n </pre>\n * to get the pagination data from response\n * @method getPaginationInfo\n */\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var resp = this.getSearchResults();\n\n  if (!resp) {\n    return null;\n  }\n\n  var numberOfProducts = resp.numberOfProducts,\n      start = resp.start,\n      products = resp.products;\n  var rows = this.state.pageSize;\n  var noOfPages = 0;\n\n  if (numberOfProducts > 0) {\n    if (numberOfProducts % rows === 0) {\n      noOfPages = numberOfProducts / rows;\n    } else {\n      noOfPages = Math.floor(numberOfProducts / rows) + 1;\n    }\n  }\n\n  var currentPage = Math.floor(start / rows) + 1;\n  var isNext = start + rows >= numberOfProducts || start >= numberOfProducts ? false : true;\n  var isPrev = start - rows < 0 || start <= 0 ? false : true;\n  return {\n    numberOfProducts: numberOfProducts,\n    start: start,\n    productsLn: products.length,\n    rows: rows,\n    noOfPages: noOfPages,\n    currentPage: currentPage || 0,\n    isNext: isNext,\n    isPrev: isPrev\n  };\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/pagination/getPaginationInfo.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/pagination/index.js":
/*!*********************************************************!*\
  !*** ../search-JS-core/src/modules/pagination/index.js ***!
  \*********************************************************/
/*! exports provided: default, setPageStart, getPaginationInfo, setPageSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return setPaginationMethods; });\n/* harmony import */ var _setPageStart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPageStart */ \"../search-JS-core/src/modules/pagination/setPageStart.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"setPageStart\", function() { return _setPageStart__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _getPaginationInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getPaginationInfo */ \"../search-JS-core/src/modules/pagination/getPaginationInfo.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getPaginationInfo\", function() { return _getPaginationInfo__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _setPageSize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setPageSize */ \"../search-JS-core/src/modules/pagination/setPageSize.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"setPageSize\", function() { return _setPageSize__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n\n\n\n\nvar setPaginationMethods = function setPaginationMethods(prototype) {\n  Object.assign(prototype, {\n    setPageStart: _setPageStart__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    getPaginationInfo: _getPaginationInfo__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    setPageSize: _setPageSize__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  });\n};\n\n\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/pagination/index.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/pagination/setPageSize.js":
/*!***************************************************************!*\
  !*** ../search-JS-core/src/modules/pagination/setPageSize.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n* @description \n<pre>\n    <code>\n        setPageStart(12)\n    </code>\n</pre>\n* to set the number of products in state\n* @method pageSize(pageNo)\n*/\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (nProducts) {\n  if (typeof nProducts === 'number' && nProducts === parseInt(nProducts)) {\n    this.state.pageSize = nProducts;\n    this.state.startPageNo = 0;\n  }\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/pagination/setPageSize.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/pagination/setPageStart.js":
/*!****************************************************************!*\
  !*** ../search-JS-core/src/modules/pagination/setPageStart.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n* @description \n<pre>\n    <code>\n        setPageStart(12)\n    </code>\n</pre>\n* to set the pagination in state\n* @method setPageStart(pageNo)\n*/\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (pageNo) {\n  this.state.startPageNo = pageNo;\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/pagination/setPageStart.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/search/getProductByPropValue.js":
/*!*********************************************************************!*\
  !*** ../search-JS-core/src/modules/search/getProductByPropValue.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n* @description \n<pre>\n    <code>\n        getProductByPropValue(uniqueId , 'u123344')\n    </code>\n</pre>\n* to get a specific object from response using a property and value\n* @param {string} prop eg: \"uniqueId\n* @param {string} value eg:'100'\n* @method getProductByPropValue\n*/\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (prop, value) {\n  var products = this.state.products;\n  return products.find(function (item) {\n    return item[prop] === value;\n  });\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/search/getProductByPropValue.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/search/getResultsFromApi.js":
/*!*****************************************************************!*\
  !*** ../search-JS-core/src/modules/search/getResultsFromApi.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../constants */ \"../search-JS-core/src/constants/index.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n/**\n* @description \n<pre>\n    <code>\n        getResults()\n    </code>\n    <code>\n        optional : getResults('shirt')\n    </code>\n</pre>\n* to fetch the results from api\n* It can accept search term as parameter\n* @method getResults\n*/\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var _this = this;\n\n  var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n  var newUrl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n  var _this$state = this.state,\n      userInput = _this$state.userInput,\n      isHistory = _this$state.isHistory,\n      isBack = _this$state.isBack;\n  var newVal = query === \"\" ? encodeURIComponent(userInput) : query;\n  this.state.userInput = newVal;\n  this.state.currentUrl = this.getNewUrlState();\n\n  if (this.state.isLoading) {\n    return false;\n  }\n\n  this.state.isLoading = true;\n  var self = this;\n  var _this$options = this.options,\n      productType = _this$options.productType,\n      hashMode = _this$options.hashMode,\n      updateUrls = _this$options.updateUrls,\n      variants = _this$options.variants;\n\n  if (!hashMode && updateUrls && !isHistory && !isBack) {\n    this.state.isBack = false;\n    var q = this.state.currentUrl.split(\"\".concat(productType.toLocaleLowerCase(), \"?\"))[1];\n\n    if (decodeURIComponent(location.search) !== \"?\".concat(decodeURIComponent(q))) {\n      this.setUrl(true);\n      return false;\n    }\n  }\n\n  var spellCheck = this.options.spellCheck;\n  this.callBack(this, _constants__WEBPACK_IMPORTED_MODULE_0__[\"libEvents\"].beforeApiCall);\n  var fetchPromise = fetch(this.state.currentUrl);\n\n  var errorHandler = function errorHandler(error) {\n    _this.state.isLoading = false;\n    _this.state.userInput = decodeURIComponent(newVal);\n\n    if (error) {\n      _this.callBack(self, error);\n    }\n  };\n\n  fetchPromise.then(function (response) {\n    _this.state.requestId = response && response.headers ? response.headers.get('X-Request-Id') : '';\n    return response.json();\n  }).then(function (respJson) {\n    _this.state.isLoading = false;\n    _this.state.userInput = decodeURIComponent(newVal);\n\n    if (respJson && !respJson.error) {\n      if (variants && variants.enabled) {\n        respJson = _this.processVariantMap(respJson);\n      }\n\n      _this.state.responseObj = respJson;\n\n      var didYouMean = _this.getDidYouMeanFromResponse();\n\n      if (didYouMean) {\n        _this.state.didYouMean = didYouMean;\n        _this.state.noResultQuery = _this.state.userInput;\n      }\n\n      var _respJson = respJson,\n          facets = _respJson.facets,\n          response = _respJson.response;\n\n      if (facets) {\n        var facetsList = _this.getFacets();\n\n        var newListFacet = _this.modifyFacetsList(facetsList);\n\n        respJson.facets = _objectSpread(_objectSpread({}, facets), {}, {\n          text: {\n            list: newListFacet\n          }\n        });\n      }\n\n      if (response) {\n        var products = response.products;\n        var pagination = _this.options.pagination;\n\n        if (pagination && pagination.type !== \"FIXED_SCROLL\") {\n          _this.state.products = _this.state.products.concat(products);\n        } else {\n          _this.state.products = products;\n        }\n      }\n\n      _this.state.responseObj = respJson;\n\n      _this.setSort(); //this.setStateFromData();\n\n\n      if (updateUrls && isHistory && !isBack) {\n        _this.state.isBack = false;\n\n        _this.setUrl(false);\n      }\n\n      _this.callBack(self, _constants__WEBPACK_IMPORTED_MODULE_0__[\"libEvents\"].afterApiCall);\n    } else {\n      errorHandler(_constants__WEBPACK_IMPORTED_MODULE_0__[\"libEvents\"].fetchError);\n    }\n  })[\"catch\"](function (error) {\n    errorHandler(_constants__WEBPACK_IMPORTED_MODULE_0__[\"libEvents\"].fetchError);\n  });\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/search/getResultsFromApi.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/search/getSearchMetaDetails.js":
/*!********************************************************************!*\
  !*** ../search-JS-core/src/modules/search/getSearchMetaDetails.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  return this.state.responseObj && this.state.responseObj.searchMetaData || null;\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/search/getSearchMetaDetails.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/search/getSearchQuery.js":
/*!**************************************************************!*\
  !*** ../search-JS-core/src/modules/search/getSearchQuery.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  if (this.state.responseObj) {\n    var queryParams = this.state.responseObj.searchMetaData.queryParams;\n    return queryParams.q || queryParams.p;\n  }\n\n  return \"\";\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/search/getSearchQuery.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/search/getSearchQueryParams.js":
/*!********************************************************************!*\
  !*** ../search-JS-core/src/modules/search/getSearchQueryParams.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var searchMeta = this.getSearchMeta();\n\n  if (searchMeta) {\n    return searchMeta.queryParams || null;\n  }\n\n  return null;\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/search/getSearchQueryParams.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/search/getSearchResults.js":
/*!****************************************************************!*\
  !*** ../search-JS-core/src/modules/search/getSearchResults.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n* @description \n<pre>\n    <code>\n        getSearchResults()\n    </code>\n</pre>\n* to get the loaded results from state\n* @method getSearchResults\n*/\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var responseObj = this.getResponseObj();\n\n  if (responseObj) {\n    var response = responseObj.response;\n    return response || null;\n  } else {\n    return null;\n  }\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/search/getSearchResults.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/search/index.js":
/*!*****************************************************!*\
  !*** ../search-JS-core/src/modules/search/index.js ***!
  \*****************************************************/
/*! exports provided: default, setProductAttributes, setShowVariants, setVariantsCount, setVariantAttributes, setVariantsGroupBy, getSearchResults, getSearchMeta, getSearchQueryParams, getSearchQuery, getResults, processVariantMap, getProductByPropValue, setStateFromData, setSearchConfigurations, onLocationChange, getRequestId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return setSearchMethods; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onLocationChange\", function() { return onLocationChange; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRequestId\", function() { return getRequestId; });\n/* harmony import */ var _setProductAttributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setProductAttributes */ \"../search-JS-core/src/modules/search/setProductAttributes.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"setProductAttributes\", function() { return _setProductAttributes__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _setShowVariants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setShowVariants */ \"../search-JS-core/src/modules/search/setShowVariants.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"setShowVariants\", function() { return _setShowVariants__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _setVariantsCount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setVariantsCount */ \"../search-JS-core/src/modules/search/setVariantsCount.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"setVariantsCount\", function() { return _setVariantsCount__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _setVariantAttributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setVariantAttributes */ \"../search-JS-core/src/modules/search/setVariantAttributes.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"setVariantAttributes\", function() { return _setVariantAttributes__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _setVariantsGroupBy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./setVariantsGroupBy */ \"../search-JS-core/src/modules/search/setVariantsGroupBy.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"setVariantsGroupBy\", function() { return _setVariantsGroupBy__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n/* harmony import */ var _getSearchMetaDetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getSearchMetaDetails */ \"../search-JS-core/src/modules/search/getSearchMetaDetails.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getSearchMeta\", function() { return _getSearchMetaDetails__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; });\n\n/* harmony import */ var _getSearchResults__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getSearchResults */ \"../search-JS-core/src/modules/search/getSearchResults.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getSearchResults\", function() { return _getSearchResults__WEBPACK_IMPORTED_MODULE_6__[\"default\"]; });\n\n/* harmony import */ var _getSearchQueryParams__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./getSearchQueryParams */ \"../search-JS-core/src/modules/search/getSearchQueryParams.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getSearchQueryParams\", function() { return _getSearchQueryParams__WEBPACK_IMPORTED_MODULE_7__[\"default\"]; });\n\n/* harmony import */ var _getSearchQuery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./getSearchQuery */ \"../search-JS-core/src/modules/search/getSearchQuery.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getSearchQuery\", function() { return _getSearchQuery__WEBPACK_IMPORTED_MODULE_8__[\"default\"]; });\n\n/* harmony import */ var _getResultsFromApi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./getResultsFromApi */ \"../search-JS-core/src/modules/search/getResultsFromApi.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getResults\", function() { return _getResultsFromApi__WEBPACK_IMPORTED_MODULE_9__[\"default\"]; });\n\n/* harmony import */ var _processVariantMap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./processVariantMap */ \"../search-JS-core/src/modules/search/processVariantMap.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"processVariantMap\", function() { return _processVariantMap__WEBPACK_IMPORTED_MODULE_10__[\"default\"]; });\n\n/* harmony import */ var _getProductByPropValue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./getProductByPropValue */ \"../search-JS-core/src/modules/search/getProductByPropValue.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getProductByPropValue\", function() { return _getProductByPropValue__WEBPACK_IMPORTED_MODULE_11__[\"default\"]; });\n\n/* harmony import */ var _setStateFromData__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./setStateFromData */ \"../search-JS-core/src/modules/search/setStateFromData.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"setStateFromData\", function() { return _setStateFromData__WEBPACK_IMPORTED_MODULE_12__[\"default\"]; });\n\n/* harmony import */ var _setSearchConfigurations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./setSearchConfigurations */ \"../search-JS-core/src/modules/search/setSearchConfigurations.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"setSearchConfigurations\", function() { return _setSearchConfigurations__WEBPACK_IMPORTED_MODULE_13__[\"default\"]; });\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar onLocationChange = function onLocationChange(evt) {\n  var _this$state = this.state,\n      urlState = _this$state.urlState,\n      isHistory = _this$state.isHistory;\n  var hashMode = this.options.hashMode;\n\n  if (hashMode) {\n    if (decodeURIComponent(location.hash) !== \"#\".concat(decodeURIComponent(urlState))) {\n      var _ref = history.state || {},\n          path = _ref.path;\n\n      this.state.isBack = true;\n      this.renderFromUrl(evt.state);\n    } else {\n      this.callBack(this, \"lastBack\");\n    }\n  } else {\n    if (isHistory) {\n      var _ref2 = history.state || {},\n          _path = _ref2.path;\n\n      this.state.isBack = true;\n      this.renderFromUrl(evt.state); //history.go(-1)\n    } else {\n      this.callBack(this, \"lastBack\");\n    }\n  }\n};\n\nvar getRequestId = function getRequestId() {\n  var requestId = this.state.requestId;\n  return requestId;\n};\n\nvar setSearchMethods = function setSearchMethods(prototype) {\n  prototype = Object.assign(prototype, {\n    setProductAttributes: _setProductAttributes__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    setShowVariants: _setShowVariants__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    setVariantsCount: _setVariantsCount__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    setVariantAttributes: _setVariantAttributes__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    setVariantsGroupBy: _setVariantsGroupBy__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    getSearchResults: _getSearchResults__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n    getSearchMeta: _getSearchMetaDetails__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    getSearchQueryParams: _getSearchQueryParams__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n    getSearchQuery: _getSearchQuery__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n    getResults: _getResultsFromApi__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n    processVariantMap: _processVariantMap__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n    getProductByPropValue: _getProductByPropValue__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\n    setStateFromData: _setStateFromData__WEBPACK_IMPORTED_MODULE_12__[\"default\"],\n    setSearchConfigurations: _setSearchConfigurations__WEBPACK_IMPORTED_MODULE_13__[\"default\"],\n    onLocationChange: onLocationChange,\n    getRequestId: getRequestId\n  });\n};\n\n\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/search/index.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/search/processVariantMap.js":
/*!*****************************************************************!*\
  !*** ../search-JS-core/src/modules/search/processVariantMap.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var resp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var self = this;\n  var _self$options$variant = self.options.variants.mapping,\n      mapping = _self$options$variant === void 0 ? {} : _self$options$variant;\n  var vMap = mapping;\n  var obArr = Object.keys(vMap);\n\n  if (resp.response && resp.response.products) {\n    var mappedProducts = resp.response.products.map(function (item) {\n      var _item = item,\n          _item$variants = _item.variants,\n          variants = _item$variants === void 0 ? [] : _item$variants,\n          relevantDocument = _item.relevantDocument;\n      var newObj = item;\n\n      if (relevantDocument === \"variant\" && variants.length > 0) {\n        item = variants[0];\n        obArr.forEach(function (keyItem) {\n          var mapKey = vMap[keyItem];\n          newObj[keyItem] = item[mapKey];\n        });\n      }\n\n      var mappedVariants = [];\n      variants.forEach(function (item, i) {\n        var mItem = item;\n        obArr.forEach(function (keyItem) {\n          var mapKey = vMap[keyItem];\n\n          if (mapKey) {\n            mItem[keyItem] = item[mapKey];\n          }\n        });\n        mappedVariants.push(mItem);\n      });\n      newObj.variants = mappedVariants;\n      return newObj;\n    });\n    resp.response.products = mappedProducts;\n  }\n\n  return resp;\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/search/processVariantMap.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/search/setProductAttributes.js":
/*!********************************************************************!*\
  !*** ../search-JS-core/src/modules/search/setProductAttributes.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (requiredFields) {\n  if (Array.isArray(requiredFields)) {\n    this.options.productAttributes = requiredFields;\n  } else {\n    this.options.productAttributes = '*';\n  }\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/search/setProductAttributes.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/search/setSearchConfigurations.js":
/*!***********************************************************************!*\
  !*** ../search-JS-core/src/modules/search/setSearchConfigurations.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction setSearchConfigurations(configurations) {\n  var siteName = configurations.siteName,\n      siteKey = configurations.siteKey,\n      searchEndPoint = configurations.searchEndPoint,\n      searchQueryParam = configurations.searchQueryParam,\n      browseQueryParam = configurations.browseQueryParam,\n      defaultFilters = configurations.defaultFilters,\n      spellCheck = configurations.spellCheck,\n      pageSize = configurations.pageSize,\n      startPageNo = configurations.startPageNo,\n      facetDepth = configurations.facetDepth,\n      facetMultilevel = configurations.facetMultilevel,\n      facetMultiSelect = configurations.facetMultiSelect,\n      updateUrls = configurations.updateUrls,\n      extraParams = configurations.extraParams,\n      onEvent = configurations.onEvent,\n      getCategoryId = configurations.getCategoryId,\n      applyMultipleFilters = configurations.applyMultipleFilters,\n      hashMode = configurations.hashMode;\n  this.state.pageSize = pageSize || this.state.pageSize;\n  this.state.startPageNo = startPageNo || this.state.startPageNo;\n  this.options.siteName = siteName || this.options.siteName;\n  this.options.siteKey = siteKey || this.options.siteKey;\n  this.options.searchEndPoint = searchEndPoint || this.options.searchEndPoint;\n  this.options.searchQueryParam = searchQueryParam || this.options.searchQueryParam;\n  this.options.browseQueryParam = browseQueryParam || this.options.browseQueryParam;\n  this.options.defaultFilters = defaultFilters || this.options.defaultFilters;\n  this.options.spellCheck = spellCheck || this.options.spellCheck;\n  this.options.pageSize = pageSize || this.options.pageSize;\n  this.options.startPageNo = startPageNo || this.options.startPageNo;\n  this.options.applyMultipleFilters = applyMultipleFilters || this.options.applyMultipleFilters;\n  this.options.facetDepth = facetDepth || this.options.facetDepth;\n  this.options.facetMultilevel = facetMultilevel || this.options.facetMultilevel;\n  this.options.facetMultiSelect = facetMultiSelect || this.options.facetMultiSelect;\n  this.options.updateUrls = updateUrls || this.options.updateUrls;\n  this.options.extraParams = extraParams || this.options.extraParams;\n  this.options.onEvent = onEvent || this.options.onEvent;\n  this.options.getCategoryId = getCategoryId || this.options.getCategoryId;\n  this.options.hashMode = hashMode || this.options.hashMode;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (setSearchConfigurations);\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/search/setSearchConfigurations.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/search/setShowVariants.js":
/*!***************************************************************!*\
  !*** ../search-JS-core/src/modules/search/setShowVariants.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (isVariant) {\n  var _this$options$variant = this.options.variants,\n      variants = _this$options$variant === void 0 ? {} : _this$options$variant;\n\n  if (typeof isVariant === 'boolean') {\n    variants.enabled = isVariant;\n  }\n\n  this.options.variants = variants;\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/search/setShowVariants.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/search/setStateFromData.js":
/*!****************************************************************!*\
  !*** ../search-JS-core/src/modules/search/setStateFromData.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var _this = this;\n\n  var searchParams = this.getSearchQueryParams();\n  var q = searchParams.q,\n      filter = searchParams.filter;\n  this.state.userInput = q;\n  var filterArr = [];\n  var replaceStr = \"__\";\n  var colun = \":\";\n\n  if (filter) {\n    if (Array.isArray(filter)) {\n      filter.forEach(function (item, i) {\n        var modItem = item.replaceAll(colun, replaceStr);\n        modItem = encodeURIComponent(modItem).replaceAll(replaceStr, colun);\n        filterArr.push(modItem);\n      });\n    } else {\n      var modItem = filter.replaceAll(colun, replaceStr);\n      modItem = encodeURIComponent(modItem).replaceAll(replaceStr, colun);\n      filterArr = [modItem];\n    }\n\n    searchParams.filter = filterArr;\n  }\n\n  var facets = this.getFilterFromParams(filterArr);\n  this.state.rangeFacet = facets.rangeFacet;\n  var selectedFilters = facets.selectedFilters;\n  var categoryFilterName = null;\n\n  if (selectedFilters) {\n    var facetKeys = Object.keys(selectedFilters);\n    facetKeys.forEach(function (item) {\n      if (_this.isCategoryFacet(item)) {\n        categoryFilterName = item;\n        var categoryVal = selectedFilters[item][0].dataId;\n        _this.state.categoryFilter[categoryFilterName] = categoryVal.split(\">\");\n\n        if (_this.state.selectedFacets[categoryFilterName]) {\n          delete _this.state.selectedFacets[categoryFilterName];\n        }\n      } else {\n        _this.state.selectedFacets[item] = selectedFilters[item];\n      }\n    });\n  } else {\n    this.state.selectedFacets = {};\n  }\n\n  var categoryFiltersL = Object.keys(this.state.categoryFilter).length;\n\n  if (categoryFiltersL === 0) {\n    this.state.categoryFilter = this.getCategoryFilterFromParams(searchParams);\n  }\n\n  this.state.breadcrumbs = this.getBreadCrumbs(categoryFilterName);\n});\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/search/setStateFromData.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/search/setVariantAttributes.js":
/*!********************************************************************!*\
  !*** ../search-JS-core/src/modules/search/setVariantAttributes.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (requiredFields) {\n  var _this$options$variant = this.options.variants,\n      variants = _this$options$variant === void 0 ? {} : _this$options$variant;\n\n  if (Array.isArray(requiredFields)) {\n    variants.attributes = requiredFields;\n  }\n\n  this.options.variants = variants;\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/search/setVariantAttributes.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/search/setVariantsCount.js":
/*!****************************************************************!*\
  !*** ../search-JS-core/src/modules/search/setVariantsCount.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (nVariants) {\n  var _this$options$variant = this.options.variants,\n      variants = _this$options$variant === void 0 ? {} : _this$options$variant;\n\n  if (typeof nVariants === 'number') {\n    variants.count = nVariants;\n  }\n\n  this.options.variants = variants;\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/search/setVariantsCount.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/search/setVariantsGroupBy.js":
/*!******************************************************************!*\
  !*** ../search-JS-core/src/modules/search/setVariantsGroupBy.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (field) {\n  var _this$options$variant = this.options.variants,\n      variants = _this$options$variant === void 0 ? {} : _this$options$variant;\n\n  if (typeof field === 'string' && field.length > 0) {\n    variants.groupBy = field;\n  }\n\n  this.options.variants = variants;\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/search/setVariantsGroupBy.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/sort/applySort.js":
/*!*******************************************************!*\
  !*** ../search-JS-core/src/modules/sort/applySort.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n* @description \n<pre>\n    <code>\n        applySort(\"price desc\")\n    </code>\n</pre>\n* to apply the sort\n* @param {string} sortItem eg: \"price asc\"\n* @method applySort\n*/\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (sortItem) {\n  this.setSort(sortItem);\n  this.setPageStart(0);\n  this.getResults.bind(this)();\n});\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/sort/applySort.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/sort/index.js":
/*!***************************************************!*\
  !*** ../search-JS-core/src/modules/sort/index.js ***!
  \***************************************************/
/*! exports provided: default, applySort, getSelectedSort, setSort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return setSortMethods; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSelectedSort\", function() { return getSelectedSort; });\n/* harmony import */ var _applySort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./applySort */ \"../search-JS-core/src/modules/sort/applySort.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"applySort\", function() { return _applySort__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _setSort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setSort */ \"../search-JS-core/src/modules/sort/setSort.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"setSort\", function() { return _setSort__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\nvar getSelectedSort = function getSelectedSort() {\n  return this.state.selectedSort;\n};\n\nvar setSortMethods = function setSortMethods(prototype) {\n  prototype = Object.assign(prototype, {\n    applySort: _applySort__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    getSelectedSort: getSelectedSort,\n    setSort: _setSort__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  });\n};\n\n\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/sort/index.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/sort/setSort.js":
/*!*****************************************************!*\
  !*** ../search-JS-core/src/modules/sort/setSort.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (sortItem) {\n  if (sortItem !== undefined) {\n    this.state.selectedSort = sortItem;\n  } else {\n    var qParams = this.getSearchQueryParams();\n    this.state.selectedSort = qParams.sort ? qParams.sort : \"\";\n  }\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/sort/setSort.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/swatches/getSwatches.js":
/*!*************************************************************!*\
  !*** ../search-JS-core/src/modules/swatches/getSwatches.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (product, map) {\n  var swatches = {};\n  var keys = Object.keys(map);\n  keys.forEach(function (item) {\n    var val = map[item];\n    swatches[item] = product[val];\n  });\n  return swatches;\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/swatches/getSwatches.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/swatches/index.js":
/*!*******************************************************!*\
  !*** ../search-JS-core/src/modules/swatches/index.js ***!
  \*******************************************************/
/*! exports provided: default, getSwatches */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return setSwatchMethods; });\n/* harmony import */ var _getSwatches__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getSwatches */ \"../search-JS-core/src/modules/swatches/getSwatches.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getSwatches\", function() { return _getSwatches__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\nvar setSwatchMethods = function setSwatchMethods(prototype) {\n  Object.assign(prototype, {\n    getSwatches: _getSwatches__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  });\n};\n\n\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/swatches/index.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/url/categoryFilterUrlString.js":
/*!********************************************************************!*\
  !*** ../search-JS-core/src/modules/url/categoryFilterUrlString.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var _this = this;\n\n  var categoryFilter = this.state.categoryFilter;\n  var str = \"\";\n  var keys = Object.keys(categoryFilter);\n  var doubleQuotes = \"%22\";\n  keys.forEach(function (key, index) {\n    var selectedCategory = _this.getAFacetByName(key)[0];\n\n    var breadcrumbList = _this.getBreadCrumbsList(key);\n\n    var selectedVal = null;\n\n    if (selectedCategory) {\n      var categoryFilterKey = \"\";\n      var filterField = selectedCategory.filterField,\n          values = selectedCategory.values;\n\n      if (filterField) {\n        categoryFilterKey = selectedCategory;\n      }\n\n      var valStr = categoryFilter[key].map(function (item, index) {\n        selectedVal = values.find(function (val) {\n          return _this.cleanFacetValue(encodeURIComponent(val.name)) === _this.cleanFacetValue(item);\n        });\n\n        if (breadcrumbList) {\n          var selecteditem = breadcrumbList.find(function (crumb) {\n            return crumb.value === item;\n          });\n\n          if (selecteditem) {\n            selectedVal = {\n              name: selecteditem.value\n            };\n          }\n        }\n\n        var it = item;\n\n        if (selectedVal) {\n          it = _this.encodeCategoryFacetValue(selectedVal.name).split(doubleQuotes).join(\"\");\n        }\n\n        if (index > 0) {\n          it = \">\".concat(_this.encodeCategoryFacetValue(item).split(doubleQuotes).join(\"\"));\n        } else {\n          it = _this.encodeCategoryFacetValue(item).split(doubleQuotes).join(\"\");\n        }\n\n        return it;\n      }); //category-filter specific code\n\n      if (filterField === \"categoryPath\") {\n        str += \"&category-filter=\".concat(valStr.join(\"\")); //category-filter specific code\n      } else {\n        str += \"&filter=\".concat(filterField, \":\\\"\").concat(valStr.join(\"\"), \"\\\"\");\n      }\n    } else {\n      //category-filter specific code\n      if (categoryFilter && categoryFilter[\"categoryPath\"]) {\n        var vals = \"\";\n        categoryFilter.categoryPath.forEach(function (item, i) {\n          var valArr = item.split(\">\");\n          valArr.forEach(function (item, i) {\n            var dVal = _this.encodeCategoryFacetValue(item).split(\"%22\").join(\"\");\n\n            if (vals !== \"\") {\n              vals += \">\".concat(dVal);\n            } else {\n              vals = dVal;\n            }\n          });\n        });\n        str += \"&category-filter=\".concat(vals);\n      }\n    }\n  });\n  return str;\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/url/categoryFilterUrlString.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/url/extraParamsFromUrlToString.js":
/*!***********************************************************************!*\
  !*** ../search-JS-core/src/modules/url/extraParamsFromUrlToString.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var extraParams = this.options.extraParams;\n  var str = \"\";\n  var keys = Object.keys(extraParams);\n  keys.forEach(function (key) {\n    str += \"&\" + key + \"=\" + extraParams[key];\n  });\n  return str;\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/url/extraParamsFromUrlToString.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/url/facetsToUrlString.js":
/*!**************************************************************!*\
  !*** ../search-JS-core/src/modules/url/facetsToUrlString.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var facetUrl = \"\";\n  var selectedFacets = this.state.selectedFacets;\n  var defaultFilters = this.options.defaultFilters || {};\n  var keys = Object.keys(selectedFacets);\n  var doubleStr = \"%22\";\n  keys.forEach(function (key) {\n    var facet = selectedFacets[key];\n    facetUrl += \"&filter=\";\n    facet.forEach(function (item, index) {\n      var name = item.name,\n          dataId = item.dataId;\n\n      if (defaultFilters[key] !== undefined && defaultFilters[key] === name) {\n        return;\n      }\n\n      name = \"\".concat(doubleStr).concat(dataId).concat(doubleStr);\n\n      if (index === 0) {\n        facetUrl += \"\".concat(key, \":\").concat(name);\n      } else {\n        facetUrl += \" OR \".concat(key, \":\").concat(name);\n      }\n    });\n  });\n  return facetUrl;\n});\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/url/facetsToUrlString.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/url/getBaseUrl.js":
/*!*******************************************************!*\
  !*** ../search-JS-core/src/modules/url/getBaseUrl.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var _this$options = this.options,\n      searchEndPoint = _this$options.searchEndPoint,\n      siteKey = _this$options.siteKey,\n      apiKey = _this$options.apiKey;\n  return searchEndPoint + apiKey + \"/\" + siteKey;\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/url/getBaseUrl.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/url/getDefaultFiltersString.js":
/*!********************************************************************!*\
  !*** ../search-JS-core/src/modules/url/getDefaultFiltersString.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var str = \"\";\n  var filters = this.options.defaultFilters;\n\n  if (filters !== null) {\n    var keys = Object.keys(filters);\n    keys.forEach(function (item) {\n      str += \"&filter=\" + item + \":\" + JSON.stringify(filters[item]);\n    });\n  }\n\n  return str;\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/url/getDefaultFiltersString.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/url/getNewUrlState.js":
/*!***********************************************************!*\
  !*** ../search-JS-core/src/modules/url/getNewUrlState.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var encode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n  var _this$options = this.options,\n      productType = _this$options.productType,\n      searchQueryParam = _this$options.searchQueryParam,\n      browseQueryParam = _this$options.browseQueryParam;\n  var value = this.state.userInput;\n  var pagetype = '';\n  var qParam = searchQueryParam;\n\n  if (productType === \"BROWSE\") {\n    pagetype = \"\";\n    value = this.getCategoryId();\n    var queryString = '/category?';\n    qParam = browseQueryParam;\n    this.url = this.getBaseUrl() + queryString + qParam + \"=\".concat(value);\n  }\n\n  if (productType === \"CATEGORY\") {\n    pagetype = \"&pagetype=boolean\";\n    value = this.getCategoryId();\n    var _queryString = '/category?';\n    qParam = browseQueryParam;\n    this.url = this.getBaseUrl() + _queryString + qParam + \"=\".concat(value);\n  }\n\n  if (productType === \"SEARCH\") {\n    var _queryString2 = '/search?';\n\n    if (encode) {\n      value = encodeURIComponent(value);\n    }\n\n    this.url = this.getBaseUrl() + _queryString2 + qParam + '=' + value;\n  }\n\n  var facetsUrlString = this.urlFlattenFacets();\n  var showVariantsStr = this.getShowVariantsStr();\n  var variantAttributesStr = this.getVariantAttributesStr();\n  var variantsCountStr = this.getVariantsCountStr();\n  var variantsGroupByStr = this.getVariantsGroupByStr();\n  var productAttributesStr = this.getProductAttributesStr() + this.getDefaultFiltersStr();\n  var sortStr = this.getSortUrlString();\n  var spellCheckUrlString = this.getSpellCheckUrlString();\n  var rangeFilterUrlStr = this.getRangeFilterStr();\n  var categoryFilterStr = this.categoryFilterUrlStr();\n  var fctmulty = this.options.facetMultiSelect ? \"&facet.multiselect=true\" : \"&facet.multiselect=false\";\n  var facetV2 = \"&facet.version=V2\";\n  var nowUrl = this.url + categoryFilterStr + fctmulty + facetsUrlString + showVariantsStr + variantAttributesStr + variantsCountStr + variantsGroupByStr + productAttributesStr + sortStr + spellCheckUrlString + rangeFilterUrlStr + pagetype + this.getPageSizeStr() + this.getPageStartStr() + this.extraParamUrlString() + facetV2;\n\n  if (!encode) {\n    this.state.currentUrl = nowUrl;\n  }\n\n  return nowUrl;\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/url/getNewUrlState.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/url/getPageSizeUrlString.js":
/*!*****************************************************************!*\
  !*** ../search-JS-core/src/modules/url/getPageSizeUrlString.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  return \"&rows=\".concat(this.state.pageSize);\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/url/getPageSizeUrlString.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/url/getPaginationStartUrlString.js":
/*!************************************************************************!*\
  !*** ../search-JS-core/src/modules/url/getPaginationStartUrlString.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  return \"&start=\" + this.state.startPageNo;\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/url/getPaginationStartUrlString.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/url/getProductAttributesUrlString.js":
/*!**************************************************************************!*\
  !*** ../search-JS-core/src/modules/url/getProductAttributesUrlString.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  if (this.options.productAttributes) {\n    return \"&fields=\" + this.options.productAttributes.join(\",\");\n  }\n\n  return \"\";\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/url/getProductAttributesUrlString.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/url/getQueryParams.js":
/*!***********************************************************!*\
  !*** ../search-JS-core/src/modules/url/getQueryParams.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (pathState) {\n  var _this$options = this.options,\n      searchQueryParam = _this$options.searchQueryParam,\n      hashMode = _this$options.hashMode;\n  var q = this.options.hashMode ? location.hash : location.search;\n  var uri = q.substr(1);\n\n  if (pathState) {\n    uri = pathState;\n  }\n\n  var splited = uri.split('&');\n  var chunks = [];\n  splited.forEach(function (item, index) {\n    if (item.indexOf(\"=\") > 0) {\n      chunks.push(item);\n    } else {\n      chunks[index - 1] = chunks[index - 1] + \"&\" + item;\n    }\n  });\n  var params = {};\n\n  for (var i = 0; i < chunks.length; i++) {\n    var chunk = chunks[i].split('=');\n\n    if (typeof params[chunk[0]] === 'undefined') {\n      params[chunk[0]] = chunk[1];\n    } else {\n      if (typeof params[chunk[0]] === \"string\") {\n        params[chunk[0]] = [params[chunk[0]]];\n        params[chunk[0]].push(chunk[1]);\n      } else {\n        params[chunk[0]].push(chunk[1]);\n      }\n    }\n  }\n\n  return params;\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/url/getQueryParams.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/url/getRangeFilterString.js":
/*!*****************************************************************!*\
  !*** ../search-JS-core/src/modules/url/getRangeFilterString.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var rangeFacet = this.state.rangeFacet;\n  var keysMap = Object.keys(rangeFacet);\n  var str = \"\";\n  keysMap.forEach(function (item) {\n    var range = rangeFacet[item];\n\n    if (Array.isArray(range)) {\n      if (range.length > 0) {\n        str += \"&filter=\".concat(item, \":\").concat(range.join(\" OR \".concat(item, \":\")));\n      }\n    } else {\n      str += \"&filter=\".concat(item, \":\").concat(range);\n    }\n  });\n  return str;\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/url/getRangeFilterString.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/url/getShowVariantsUrlString.js":
/*!*********************************************************************!*\
  !*** ../search-JS-core/src/modules/url/getShowVariantsUrlString.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var variants = this.options.variants;\n  return variants && typeof variants.enabled === \"boolean\" ? \"&variants=\".concat(variants.enabled) : \"\";\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/url/getShowVariantsUrlString.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/url/getSortUrlString.js":
/*!*************************************************************!*\
  !*** ../search-JS-core/src/modules/url/getSortUrlString.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var selectedSort = this.getSelectedSort();\n\n  if (selectedSort) {\n    return \"&sort=\" + encodeURI(selectedSort);\n  }\n\n  return \"\";\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/url/getSortUrlString.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/url/getSpellCheckUrlString.js":
/*!*******************************************************************!*\
  !*** ../search-JS-core/src/modules/url/getSpellCheckUrlString.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  if (this.options.spellCheck.enabled) {\n    return \"&spellcheck=\" + true;\n  }\n\n  return \"\";\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/url/getSpellCheckUrlString.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/url/getStateFromUrl.js":
/*!************************************************************!*\
  !*** ../search-JS-core/src/modules/url/getStateFromUrl.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var urlParts = this.getQueryParams();\n  var qState = {};\n  var pageSize = this.options.pagesize.pageSize;\n\n  if (_typeof(urlParts) === 'object') {\n    var q = urlParts.q,\n        filter = urlParts.filter,\n        sort = urlParts.sort,\n        start = urlParts.start,\n        _urlParts$rows = urlParts.rows,\n        rows = _urlParts$rows === void 0 ? pageSize : _urlParts$rows;\n\n    if (this.state.userInput !== q) {\n      qState.userInput = q;\n    }\n\n    var facets = this.getFilterFromParams(filter);\n    qState.rangeFacet = facets.rangeFacet;\n    qState.selectedFacets = facets.selectedFilters;\n    qState.selectedSort = sort ? sort : \"\";\n    qState.startPageNo = start ? start : 0;\n    qState.pageSize = Number(rows);\n    qState.categoryFilter = this.getCategoryFilterFromParams(urlParts);\n  }\n\n  return qState;\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/url/getStateFromUrl.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/url/getVariantAttributesUrlString.js":
/*!**************************************************************************!*\
  !*** ../search-JS-core/src/modules/url/getVariantAttributesUrlString.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var variants = this.options.variants;\n\n  if (variants) {\n    var enabled = variants.enabled,\n        attributes = variants.attributes;\n    return attributes && enabled ? \"&variants.fields=\".concat(attributes.join(\",\")) : \"\";\n  }\n\n  return \"\";\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/url/getVariantAttributesUrlString.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/url/getVariantsCountUrlString.js":
/*!**********************************************************************!*\
  !*** ../search-JS-core/src/modules/url/getVariantsCountUrlString.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var variants = this.options.variants;\n\n  if (variants) {\n    var enabled = variants.enabled,\n        count = variants.count;\n    return count && enabled ? \"&variants.count=\".concat(count) : \"\";\n  }\n\n  return \"\";\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/url/getVariantsCountUrlString.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/url/getVariantsGroupByUrlString.js":
/*!************************************************************************!*\
  !*** ../search-JS-core/src/modules/url/getVariantsGroupByUrlString.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var variants = this.options.variants;\n\n  if (variants) {\n    var enabled = variants.enabled,\n        groupBy = variants.groupBy;\n    return groupBy && enabled ? \"&variants.groupBy=\".concat(groupBy) : \"\";\n  }\n\n  return \"\";\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/url/getVariantsGroupByUrlString.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/url/index.js":
/*!**************************************************!*\
  !*** ../search-JS-core/src/modules/url/index.js ***!
  \**************************************************/
/*! exports provided: default, methods */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return urlMethods; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"methods\", function() { return methods; });\n/* harmony import */ var _getBaseUrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBaseUrl */ \"../search-JS-core/src/modules/url/getBaseUrl.js\");\n/* harmony import */ var _extraParamsFromUrlToString__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extraParamsFromUrlToString */ \"../search-JS-core/src/modules/url/extraParamsFromUrlToString.js\");\n/* harmony import */ var _setStateFromUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setStateFromUrl */ \"../search-JS-core/src/modules/url/setStateFromUrl.js\");\n/* harmony import */ var _getQueryParams__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getQueryParams */ \"../search-JS-core/src/modules/url/getQueryParams.js\");\n/* harmony import */ var _getDefaultFiltersString__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getDefaultFiltersString */ \"../search-JS-core/src/modules/url/getDefaultFiltersString.js\");\n/* harmony import */ var _facetsToUrlString__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./facetsToUrlString */ \"../search-JS-core/src/modules/url/facetsToUrlString.js\");\n/* harmony import */ var _getShowVariantsUrlString__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getShowVariantsUrlString */ \"../search-JS-core/src/modules/url/getShowVariantsUrlString.js\");\n/* harmony import */ var _getVariantAttributesUrlString__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./getVariantAttributesUrlString */ \"../search-JS-core/src/modules/url/getVariantAttributesUrlString.js\");\n/* harmony import */ var _getVariantsCountUrlString__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./getVariantsCountUrlString */ \"../search-JS-core/src/modules/url/getVariantsCountUrlString.js\");\n/* harmony import */ var _getVariantsGroupByUrlString__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./getVariantsGroupByUrlString */ \"../search-JS-core/src/modules/url/getVariantsGroupByUrlString.js\");\n/* harmony import */ var _getProductAttributesUrlString__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./getProductAttributesUrlString */ \"../search-JS-core/src/modules/url/getProductAttributesUrlString.js\");\n/* harmony import */ var _getPageSizeUrlString__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./getPageSizeUrlString */ \"../search-JS-core/src/modules/url/getPageSizeUrlString.js\");\n/* harmony import */ var _getPaginationStartUrlString__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./getPaginationStartUrlString */ \"../search-JS-core/src/modules/url/getPaginationStartUrlString.js\");\n/* harmony import */ var _getNewUrlState__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./getNewUrlState */ \"../search-JS-core/src/modules/url/getNewUrlState.js\");\n/* harmony import */ var _getRangeFilterString__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./getRangeFilterString */ \"../search-JS-core/src/modules/url/getRangeFilterString.js\");\n/* harmony import */ var _categoryFilterUrlString__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./categoryFilterUrlString */ \"../search-JS-core/src/modules/url/categoryFilterUrlString.js\");\n/* harmony import */ var _getSortUrlString__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./getSortUrlString */ \"../search-JS-core/src/modules/url/getSortUrlString.js\");\n/* harmony import */ var _getSpellCheckUrlString__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./getSpellCheckUrlString */ \"../search-JS-core/src/modules/url/getSpellCheckUrlString.js\");\n/* harmony import */ var _getStateFromUrl__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./getStateFromUrl */ \"../search-JS-core/src/modules/url/getStateFromUrl.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar methods = {\n  extraParamUrlString: _extraParamsFromUrlToString__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  renderFromUrl: _setStateFromUrl__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  getQueryParams: _getQueryParams__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  urlFlattenFacets: _facetsToUrlString__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  getDefaultFiltersStr: _getDefaultFiltersString__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  getShowVariantsStr: _getShowVariantsUrlString__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n  getVariantAttributesStr: _getVariantAttributesUrlString__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n  getVariantsCountStr: _getVariantsCountUrlString__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n  getVariantsGroupByStr: _getVariantsGroupByUrlString__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n  getProductAttributesStr: _getProductAttributesUrlString__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n  getPageSizeStr: _getPageSizeUrlString__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\n  getPageStartStr: _getPaginationStartUrlString__WEBPACK_IMPORTED_MODULE_12__[\"default\"],\n  getNewUrlState: _getNewUrlState__WEBPACK_IMPORTED_MODULE_13__[\"default\"],\n  getRangeFilterStr: _getRangeFilterString__WEBPACK_IMPORTED_MODULE_14__[\"default\"],\n  categoryFilterUrlStr: _categoryFilterUrlString__WEBPACK_IMPORTED_MODULE_15__[\"default\"],\n  getSortUrlString: _getSortUrlString__WEBPACK_IMPORTED_MODULE_16__[\"default\"],\n  getSpellCheckUrlString: _getSpellCheckUrlString__WEBPACK_IMPORTED_MODULE_17__[\"default\"],\n  getBaseUrl: _getBaseUrl__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  getStateFromUrl: _getStateFromUrl__WEBPACK_IMPORTED_MODULE_18__[\"default\"]\n};\n\nvar urlMethods = function urlMethods(prototype) {\n  prototype = Object.assign(prototype, methods);\n};\n\n\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/url/index.js?");

/***/ }),

/***/ "../search-JS-core/src/modules/url/setStateFromUrl.js":
/*!************************************************************!*\
  !*** ../search-JS-core/src/modules/url/setStateFromUrl.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n  var loadFromUrl = false;\n  var urlParts = this.getQueryParams(url);\n  var _this$options = this.options,\n      pagination = _this$options.pagination,\n      searchQueryParam = _this$options.searchQueryParam,\n      browseQueryParam = _this$options.browseQueryParam,\n      productType = _this$options.productType;\n  var queryParam = searchQueryParam;\n\n  if (productType !== 'SEARCH') {\n    queryParam = browseQueryParam;\n    urlParts[queryParam] = this.getCategoryId();\n  }\n\n  if (_typeof(urlParts) === 'object' && urlParts[queryParam]) {\n    var q = urlParts.q,\n        filter = urlParts.filter,\n        sort = urlParts.sort,\n        start = urlParts.start;\n    loadFromUrl = true;\n\n    if (this.state.userInput !== q) {\n      this.state.userInput = decodeURIComponent(q);\n    }\n\n    var facets = this.getFilterFromParams(filter);\n    this.state.rangeFacet = facets.rangeFacet;\n    this.state.selectedFacets = facets.selectedFilters;\n    this.state.selectedSort = sort ? decodeURIComponent(sort) : \"\";\n    this.state.startPageNo = start ? start : 0;\n    this.state.isBack = false;\n\n    if (pagination.type !== \"FIXED_PAGINATION\") {\n      this.state.startPageNo = 0;\n    }\n\n    this.state.pageSize = urlParts.rows ? Number(urlParts.rows) : this.options.pageSize;\n    this.state.categoryFilter = this.getCategoryFilterFromParams(urlParts);\n\n    if (loadFromUrl) {\n      this.getResults();\n    }\n  }\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/modules/url/setStateFromUrl.js?");

/***/ }),

/***/ "../search-JS-core/src/utils/copyObject.js":
/*!*************************************************!*\
  !*** ../search-JS-core/src/utils/copyObject.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction copyObject(aObject) {\n  if (!aObject) {\n    return aObject;\n  }\n\n  var v;\n  var bObject = Array.isArray(aObject) ? [] : {};\n\n  for (var k in aObject) {\n    v = aObject[k];\n    bObject[k] = _typeof(v) === \"object\" ? copyObject(v) : v;\n  }\n\n  return bObject;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (copyObject);\n\n//# sourceURL=webpack://UnbxdSearch/../search-JS-core/src/utils/copyObject.js?");

/***/ }),

/***/ "./src/common/constants/actions.js":
/*!*****************************************!*\
  !*** ./src/common/constants/actions.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar actions = {\n  clearCategoryFilter: \"clearCategoryFilter\",\n  setCategoryFilter: \"setCategoryFilter\",\n  changeSwatch: \"changeSwatch\",\n  clearPriceRange: \"clearPriceRange\",\n  applyRange: \"applyRange\",\n  prev: \"prev\",\n  next: \"next\",\n  clearSort: \"clearSort\",\n  changeSort: \"changeSort\",\n  deleteFacet: \"deleteFacet\",\n  deleteFacetValue: \"deleteFacetValue\",\n  changeFacet: \"changeFacet\"\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (actions);\n\n//# sourceURL=webpack://UnbxdSearch/./src/common/constants/actions.js?");

/***/ }),

/***/ "./src/common/constants/eventsLib.js":
/*!*******************************************!*\
  !*** ./src/common/constants/eventsLib.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar _events;\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar events = (_events = {\n  beforeApiCall: \"BEFORE_API_CALL\",\n  afterApiCall: \"AFTER_API_CALL\",\n  beforeRender: \"BEFORE_RENDER\",\n  beforeNoResultRender: \"BEFORE_NO_RESULTS_RENDER\",\n  afterNoResultRender: \"AFTER_NO_RESULTS_RENDER\",\n  afterRender: \"AFTER_RENDER\",\n  deleteFacet: \"DELETE_FACET\",\n  facetClick: \"FACETS_CLICK\",\n  deleteFacetValue: \"DELETE_FACET_VALUE\"\n}, _defineProperty(_events, \"deleteFacet\", \"DELETE_FACET\"), _defineProperty(_events, \"clearSort\", \"CLEAR_SORT\"), _defineProperty(_events, \"changeSort\", \"CHANGE_SORT\"), _defineProperty(_events, \"pageNext\", \"PAGE_NEXT\"), _defineProperty(_events, \"pagePrev\", \"PAGE_PREV\"), _defineProperty(_events, \"changeInput\", \"CHANGE_INPUT\"), _defineProperty(_events, \"setCategoryFilter\", \"SET_CATEGORY_FILTER\"), _defineProperty(_events, \"deleteCategoryFilter\", \"DELETE_CATEGORY_FILTER\"), _defineProperty(_events, \"pageSizeChange\", \"PAGESIZE_CHANGE\"), _events);\n/* harmony default export */ __webpack_exports__[\"default\"] = (events);\n\n//# sourceURL=webpack://UnbxdSearch/./src/common/constants/eventsLib.js?");

/***/ }),

/***/ "./src/common/constants/index.js":
/*!***************************************!*\
  !*** ./src/common/constants/index.js ***!
  \***************************************/
/*! exports provided: events, actions, cssClasses, testIds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cssClasses\", function() { return cssClasses; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"testIds\", function() { return testIds; });\n/* harmony import */ var _eventsLib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventsLib */ \"./src/common/constants/eventsLib.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"events\", function() { return _eventsLib__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ \"./src/common/constants/actions.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"actions\", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\nvar cssClasses = {\n  openFacet: \"UNX-accordian-open\",\n  closeFacet: \"UNX-accordian-close\",\n  openBtn: \"UNX-facet-open\",\n  closeBtn: \"UNX-facet-close\",\n  viewMore: \"UNX-view-more\",\n  viewLess: \"UNX-view-less\"\n};\nvar testIds = {\n  UNX_gridBtn: \"UNX_gridBtn\",\n  UNX_listBtn: \"UNX_listBtn\",\n  UNX_loadMore: \"UNX_loadMore\",\n  UNX_variant: \"UNX_variant\",\n  UNX_spellCheck: \"UNX_spellCheck\",\n  UNX_pagesize: \"UNX_pagesize\",\n  UNX_pageNumber: \"UNX_pageNumber\",\n  UNX_unbxdSorter: \"UNX_unbxdSorter\",\n  UNX_uFilter: \"UNX_uFilter\",\n  UNX_rangeslider: \"UNX_rangeslider\",\n  UNX_facetLevel: \"UNX_facetLevel\",\n  UNX_searchFacets: \"UNX_searchFacets\",\n  UNX_swatchClrBtn: \"UNX_swatchClrBtn\"\n};\n\n\n//# sourceURL=webpack://UnbxdSearch/./src/common/constants/index.js?");

/***/ }),

/***/ "./src/common/constants/selectors.js":
/*!*******************************************!*\
  !*** ./src/common/constants/selectors.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar unxSelectors = {\n  unxPageSize: 'unxPageSize'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (unxSelectors);\n\n//# sourceURL=webpack://UnbxdSearch/./src/common/constants/selectors.js?");

/***/ }),

/***/ "./src/common/options.js":
/*!*******************************!*\
  !*** ./src/common/options.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_didYouMean_spellCheckView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/didYouMean/spellCheckView */ \"./src/modules/didYouMean/spellCheckView.js\");\n/* harmony import */ var _modules_facets_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/facets/ui */ \"./src/modules/facets/ui.js\");\n/* harmony import */ var _modules_searchResults_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/searchResults/ui */ \"./src/modules/searchResults/ui.js\");\n/* harmony import */ var _modules_pagination_paginationView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/pagination/paginationView */ \"./src/modules/pagination/paginationView.js\");\n/* harmony import */ var _modules_facets_renderRangeFacets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/facets/renderRangeFacets */ \"./src/modules/facets/renderRangeFacets.js\");\n/* harmony import */ var _modules_facets_renderBucketedSearch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/facets/renderBucketedSearch */ \"./src/modules/facets/renderBucketedSearch.js\");\n/* harmony import */ var _modules_breadcrumbs_breadcrumbsView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/breadcrumbs/breadcrumbsView */ \"./src/modules/breadcrumbs/breadcrumbsView.js\");\n/* harmony import */ var _modules_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modules/sort */ \"./src/modules/sort/index.js\");\n/* harmony import */ var _modules_productViewType__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modules/productViewType */ \"./src/modules/productViewType/index.js\");\n/* harmony import */ var _modules_banners__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modules/banners */ \"./src/modules/banners/index.js\");\n/* harmony import */ var _modules_pageSize_pageSizeView__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../modules/pageSize/pageSizeView */ \"./src/modules/pageSize/pageSizeView.js\");\n/* harmony import */ var _modules_swatches_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../modules/swatches/ui */ \"./src/modules/swatches/ui.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nvar options = {\n  productId: \"uniqueId\",\n  searchBoxEl: null,\n  siteKey: \"demo-spanish-unbxd809051588861207\",\n  apiKey: \"f19768e22b49909798bc2411fa3dd963\",\n  searchPath: \"\",\n  searchEndPoint: \"https://search.unbxd.io/\",\n  products: {\n    el: null,\n    template: _modules_searchResults_ui__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    productItemClass: \"product-item\",\n    // to find out product\n    productType: \"SEARCH\",\n    gridCount: 1,\n    onProductClick: function onProductClick(product, e) {},\n    productAttributes: [\"title\", \"uniqueId\", \"price\", \"sku\", \"imageUrl\", \"displayPrice\", \"salePrice\", \"sortPrice\", \"productDescription\", \"unbxd_color_mapping\", \"colorName\", \"color\"],\n    attributesMap: {\n      'unxTitle': 'title',\n      'unxImageUrl': 'imageUrl',\n      'unxPrice': 'salePrice',\n      'unxStrikePrice': 'displayPrice',\n      'unxId': 'uniqueId',\n      'unxDescription': 'productDescription'\n    },\n    defaultImage: \"https://libraries.unbxdapi.com/sdk-assets/defaultImage.svg\",\n    tagName: \"DIV\",\n    htmlAttributes: {\n      \"class\": \"UNX-search-results-block UNX-result-wrapper\"\n    },\n    events: {}\n  },\n  searchQueryParam: \"q\",\n  browseQueryParam: 'p',\n  defaultFilters: null,\n  //or object with keys\n  noResults: {\n    template: function template(query) {\n      return \"<div class=\\\"UNX-no-results\\\"> No Results found \".concat(query, \" </div>\");\n    }\n  },\n  onEvent: function onEvent(state, type) {},\n  startPageNo: 0,\n  productView: {\n    enabled: true,\n    el: null,\n    template: _modules_productViewType__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n    action: 'click',\n    // CLICK or CHANGE\n    viewTypeClass: 'UNX-product-view',\n    selectedViewTypeClass: 'UNX-selected-product-view',\n    defaultViewType: 'GRID',\n    tagName: \"DIV\",\n    htmlAttributes: {\n      \"class\": \"product-view-container\"\n    },\n    events: {}\n  },\n  loader: {\n    template: function template() {\n      return \"<div class=\\\"UNX-loader\\\">Loading search results....</div>\";\n    },\n    el: null\n  },\n  variants: undefined,\n  extraParams: {\n    \"version\": \"V2\"\n    /*\"facet.multilevel\":\"categoryPath\",\n    \"f.categoryPath.displayName\":\"category\",\n    \"f.categoryPath.max.depth\":\"4\",\n    \"f.categoryPath.facet.limit\":\"100\"*/\n\n  },\n  spellCheck: {\n    enabled: true,\n    el: null,\n    template: _modules_didYouMean_spellCheckView__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    selectorClass: \"UNX-suggestion\",\n    tagName: \"DIV\",\n    htmlAttributes: {\n      \"class\": \"UNX-spellcheck-wrapper\"\n    },\n    events: {}\n  },\n  breadcrumb: {\n    enabled: true,\n    el: null,\n    selectorClass: \"UNX-bread-crumb\",\n    template: _modules_breadcrumbs_breadcrumbsView__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n    tagName: \"DIV\",\n    htmlAttributes: {\n      \"class\": \"UNX-breadcrumbs-block\"\n    },\n    events: {}\n  },\n  sort: {\n    enabled: true,\n    el: null,\n    selectedSortClass: 'UNX-selected-sort',\n    sortClass: 'UNX-sort-item',\n    template: _modules_sort__WEBPACK_IMPORTED_MODULE_7__[\"sortTemplate\"],\n    options: _modules_sort__WEBPACK_IMPORTED_MODULE_7__[\"sortOptions\"],\n    action: 'change',\n    tagName: \"DIV\",\n    htmlAttributes: {\n      \"class\": \"UNX-sort-block-lb\"\n    },\n    events: {}\n  },\n  selectedFacets: {\n    enabled: true,\n    selectedFacetClass: \"UNX-selected-facet-btn\",\n    el: null,\n    template: _modules_facets_ui__WEBPACK_IMPORTED_MODULE_1__[\"selectedFacetUI\"],\n    itemTemplate: _modules_facets_ui__WEBPACK_IMPORTED_MODULE_1__[\"selectedFacetItemTemplateUI\"],\n    clearAllText: \"Clear All\",\n    tagName: \"DIV\",\n    htmlAttributes: {\n      \"class\": \"UNX-selected-facet-lb\"\n    },\n    events: {},\n    facetAction: \"click\",\n    clearFacetsSelectorClass: 'UNX-clear-facet',\n    removeFacetsSelectorClass: 'UNX-remove-facet'\n  },\n  facet: {\n    facetsEl: null,\n    facetTemplate: _modules_facets_ui__WEBPACK_IMPORTED_MODULE_1__[\"facetUIElem\"],\n    facetItemTemplate: _modules_facets_ui__WEBPACK_IMPORTED_MODULE_1__[\"facetItemUiElem\"],\n    facetMultiSelect: true,\n    facetClass: \"UNX-facets-block\",\n    facetAction: \"click\",\n    selectedFacetClass: \"UNX-selected-facet-btn\",\n    selectedFacetsEl: null,\n    selectedFacetTemplate: _modules_facets_ui__WEBPACK_IMPORTED_MODULE_1__[\"selectedFacetUI\"],\n    selectedFacetItemTemplate: _modules_facets_ui__WEBPACK_IMPORTED_MODULE_1__[\"selectedFacetItemTemplateUI\"],\n    clearAllText: \"Clear All\",\n    rangeTemplate: _modules_facets_renderRangeFacets__WEBPACK_IMPORTED_MODULE_4__[\"renderRangeFacets\"],\n    rangeWidgetConfig: {\n      \"minLabel\": \"\",\n      \"maxLabel\": \"\",\n      \"prefix\": '$'\n    },\n    facetMultilevel: true,\n    facetMultilevelName: 'Category',\n    multiLevelFacetSelectorClass: 'UNX-multilevel-facet',\n    multiLevelFacetTemplate: _modules_facets_renderBucketedSearch__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    facetDepth: 4,\n    clearFacetsSelectorClass: 'UNX-clear-facet',\n    removeFacetsSelectorClass: 'UNX-remove-facet',\n    onFacetLoad: function onFacetLoad(facets) {},\n    applyMultipleFilters: false,\n    applyButtonText: \"Apply\",\n    clearButtonText: \"clear\",\n    isCollapsible: true,\n    isSearchable: true,\n    searchPlaceHolder: \"Search Filter\",\n    textFacetWrapper: \"UNX-facets-item\",\n    defaultOpen: \"ALL\",\n    enableViewMore: false,\n    viewMoreText: [\"show all\", \"show less\"],\n    viewMoreLimit: 3,\n    tagName: \"DIV\",\n    htmlAttributes: {\n      \"class\": \"UNX-facets-results-block\"\n    },\n    events: {}\n  },\n  pagination: {\n    enabled: true,\n    el: null,\n    template: _modules_pagination_paginationView__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    pageClass: \"UNX-page-items\",\n    selectedPageClass: \"UNX-selected-page-item\",\n    type: 'CLICK_N_SCROLL',\n    // INFINITE_SCROLL or CLICK_N_SCROLL or FIXED_PAGINATION\n    infinteScrollTriggerEl: window,\n    //if paginationType = INFINITE_SCROLL\n    heightDiffToTriggerNextPage: 100,\n    //if paginationType = INFINITE_SCROLL,    \n    onPaginate: function onPaginate(paginationInfo) {},\n    action: 'click',\n    pageLimit: 6,\n    tagName: \"DIV\",\n    htmlAttributes: {\n      \"class\": \"UNX-pagination-size-block\"\n    },\n    events: {}\n  },\n  pagesize: {\n    enabled: true,\n    pageSize: 12,\n    options: [8, 12, 16, 20, 24],\n    pageSizeClass: \"UNX-pagesize\",\n    selectedPageSizeClass: \"UNX-selected-pagesize\",\n    action: 'change',\n    template: _modules_pageSize_pageSizeView__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n    el: null,\n    tagName: \"DIV\",\n    htmlAttributes: {\n      \"class\": \"UNX-page-size-block\"\n    },\n    events: {}\n  },\n  banner: {\n    enabled: true,\n    el: null,\n    template: _modules_banners__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n    count: 1,\n    openNewTab: false,\n    tagName: \"DIV\",\n    htmlAttributes: {\n      \"class\": \"UNX-banner-block\"\n    },\n    events: {}\n  },\n  swatches: {\n    enabled: false,\n    attributesMap: {},\n    swatchClass: 'UNX-swatch-btn',\n    template: _modules_swatches_ui__WEBPACK_IMPORTED_MODULE_11__[\"default\"]\n  },\n  unbxdAnalytics: false,\n  hashMode: false,\n  updateUrls: true,\n  actionBtnClass: \"UNX-action-item\",\n  actionChangeClass: \"UNX-action-change\",\n  onAction: function onAction(e, ctx) {},\n  onQueryRedirect: function onQueryRedirect(self, redirect) {\n    if (redirect) {\n      var value = redirect.value,\n          type = redirect.type;\n\n      if (type === \"url\") {\n        location.href = value;\n      }\n\n      return false;\n    }\n  } // searchQueryParam:null\n\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (options);\n\n//# sourceURL=webpack://UnbxdSearch/./src/common/options.js?");

/***/ }),

/***/ "./src/core/bindEvents.js":
/*!********************************!*\
  !*** ./src/core/bindEvents.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_utils_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/utils/debounce */ \"./src/modules/utils/debounce.js\");\n\n\nfunction bindEvents() {\n  var _this = this;\n\n  var _this$options = this.options,\n      searchButtonEl = _this$options.searchButtonEl,\n      searchTrigger = _this$options.searchTrigger,\n      products = _this$options.products,\n      facet = _this$options.facet,\n      productView = _this$options.productView,\n      pagination = _this$options.pagination,\n      sort = _this$options.sort,\n      pagesize = _this$options.pagesize,\n      spellCheck = _this$options.spellCheck,\n      searchBoxEl = _this$options.searchBoxEl,\n      actionChangeClass = _this$options.actionChangeClass,\n      actionBtnClass = _this$options.actionBtnClass,\n      breadcrumb = _this$options.breadcrumb,\n      selectedFacets = _this$options.selectedFacets;\n\n  if (searchBoxEl) {\n    searchBoxEl.addEventListener(\"keydown\", function (e) {\n      var val = e.target.value;\n\n      if (e.keyCode === 13) {\n        //checks whether the pressed key is \"Enter\"\n        if (val !== \"\") {\n          _this.setInputValue.bind(_this)();\n        }\n      }\n    });\n  }\n\n  if (pagination.enabled) {\n    this.paginationWrappers.forEach(function (wrapper) {\n      _this.delegate(wrapper, pagination.action, \".\".concat(pagination.pageClass), _this.paginationAction.bind(_this));\n    });\n  }\n\n  if (facet.facetsEl) {\n    this.facetWrappers.forEach(function (wrapper) {\n      _this.delegate(wrapper, facet.facetAction, \".\".concat(facet.facetClass), _this.findChangedFacet.bind(_this));\n\n      _this.delegate(wrapper, 'change', '.' + actionChangeClass, _this.extraActionsChange.bind(_this));\n\n      _this.delegate(wrapper, 'keyup', '.' + actionChangeClass, _this.extraActionsChange.bind(_this));\n\n      _this.delegate(wrapper, 'click', '.' + actionBtnClass, _this.extraActions.bind(_this));\n    });\n  }\n\n  if (searchButtonEl) {\n    searchButtonEl.addEventListener(searchTrigger, this.setInputValue.bind(this));\n  }\n\n  if (spellCheck.el) {\n    this.spellCheckWrappers.forEach(function (wrapper) {\n      _this.delegate(wrapper, 'click', \".\".concat(spellCheck.selectorClass), _this.setSuggestion.bind(_this));\n    });\n  } //productItemSelector\n\n\n  this.delegate(this.searchResultsWrapper, \"click\", \".\".concat(products.productItemClass), this.onProductItemClick.bind(this));\n\n  if (sort.el) {\n    this.sortWrappers.forEach(function (wrapper) {\n      _this.delegate(wrapper, sort.action, \".\".concat(sort.sortClass), _this.sortAction.bind(_this));\n    });\n  }\n\n  if (facet.selectedFacetsEl) {\n    this.selectedFacetWrappers.forEach(function (wrapper) {\n      _this.delegate(wrapper, facet.facetAction, \".\".concat(facet.selectedFacetClass), _this.findChangedFacet.bind(_this));\n    });\n  } else {\n    this.selectedFacetWrappers.forEach(function (wrapper) {\n      _this.delegate(wrapper, selectedFacets.facetAction, \".\".concat(selectedFacets.selectedFacetClass), _this.findChangedFacet.bind(_this));\n    });\n  }\n\n  if (this.breadcrumbWrapper) {\n    this.delegate(this.breadcrumbWrapper, \"click\", \".\" + breadcrumb.selectorClass, this.findChangedFacet.bind(this));\n  }\n\n  if (this.productViewTypeWrapper) {\n    this.delegate(this.productViewTypeWrapper, productView.action, \".\" + productView.viewTypeClass, this.onPageViewTypeClick.bind(this));\n  }\n\n  if (this.options.pagination.type === 'INFINITE_SCROLL') {\n    document.addEventListener(\"scroll\", Object(_modules_utils_debounce__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function () {\n      _this.onInfiniteScroll.bind(_this)();\n    }, 1000));\n  }\n\n  this.delegate(this.pageSizeWrapper, pagesize.action, \".\".concat(pagesize.pageSizeClass), this.onClickPageSize.bind(this));\n\n  if (!this.viewState.initialised) {\n    if (this.options.hashMode) {\n      window.onhashchange = this.onLocationChange.bind(this);\n    } else {\n      window.addEventListener('popstate', this.onLocationChange.bind(this), false);\n    }\n\n    var urlParams = this.getQueryParams();\n    var ln = Object.keys(urlParams).length;\n\n    if (ln > 0) {\n      this.renderFromUrl();\n    }\n\n    this.viewState.initialised = true;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (bindEvents);\n\n//# sourceURL=webpack://UnbxdSearch/./src/core/bindEvents.js?");

/***/ }),

/***/ "./src/core/componentWrappers/createBannerWrapper.js":
/*!***********************************************************!*\
  !*** ./src/core/componentWrappers/createBannerWrapper.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var _this$options$banner = this.options.banner,\n      tagName = _this$options$banner.tagName,\n      _this$options$banner$ = _this$options$banner.htmlAttributes,\n      htmlAttributes = _this$options$banner$ === void 0 ? {} : _this$options$banner$,\n      events = _this$options$banner.events;\n  return this.createElement(tagName, Object.assign({}, htmlAttributes), events, this);\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/./src/core/componentWrappers/createBannerWrapper.js?");

/***/ }),

/***/ "./src/core/componentWrappers/createBreadcrumbWrapper.js":
/*!***************************************************************!*\
  !*** ./src/core/componentWrappers/createBreadcrumbWrapper.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var _this$options$breadcr = this.options.breadcrumb,\n      tagName = _this$options$breadcr.tagName,\n      _this$options$breadcr2 = _this$options$breadcr.htmlAttributes,\n      htmlAttributes = _this$options$breadcr2 === void 0 ? {} : _this$options$breadcr2,\n      events = _this$options$breadcr.events;\n  return this.createElement(tagName, Object.assign({}, htmlAttributes), events, this);\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/./src/core/componentWrappers/createBreadcrumbWrapper.js?");

/***/ }),

/***/ "./src/core/componentWrappers/createFacetWrapper.js":
/*!**********************************************************!*\
  !*** ./src/core/componentWrappers/createFacetWrapper.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var _this$options$facet = this.options.facet,\n      tagName = _this$options$facet.tagName,\n      _this$options$facet$h = _this$options$facet.htmlAttributes,\n      htmlAttributes = _this$options$facet$h === void 0 ? {} : _this$options$facet$h,\n      events = _this$options$facet.events;\n  return this.createElement(tagName, Object.assign({}, htmlAttributes), events, this);\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/./src/core/componentWrappers/createFacetWrapper.js?");

/***/ }),

/***/ "./src/core/componentWrappers/createPageSizeWrapper.js":
/*!*************************************************************!*\
  !*** ./src/core/componentWrappers/createPageSizeWrapper.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var _this$options$pagesiz = this.options.pagesize,\n      tagName = _this$options$pagesiz.tagName,\n      _this$options$pagesiz2 = _this$options$pagesiz.htmlAttributes,\n      htmlAttributes = _this$options$pagesiz2 === void 0 ? {} : _this$options$pagesiz2,\n      events = _this$options$pagesiz.events;\n  return this.createElement(tagName, Object.assign({}, htmlAttributes), events, this);\n});\n\n//# sourceURL=webpack://UnbxdSearch/./src/core/componentWrappers/createPageSizeWrapper.js?");

/***/ }),

/***/ "./src/core/componentWrappers/createPaginationWrapper.js":
/*!***************************************************************!*\
  !*** ./src/core/componentWrappers/createPaginationWrapper.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var _this$options$paginat = this.options.pagination,\n      tagName = _this$options$paginat.tagName,\n      _this$options$paginat2 = _this$options$paginat.htmlAttributes,\n      htmlAttributes = _this$options$paginat2 === void 0 ? {} : _this$options$paginat2,\n      events = _this$options$paginat.events;\n  return this.createElement(tagName, Object.assign({}, htmlAttributes), events, this);\n});\n\n//# sourceURL=webpack://UnbxdSearch/./src/core/componentWrappers/createPaginationWrapper.js?");

/***/ }),

/***/ "./src/core/componentWrappers/createProductViewTypeWrapper.js":
/*!********************************************************************!*\
  !*** ./src/core/componentWrappers/createProductViewTypeWrapper.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var _this$options$product = this.options.productView,\n      tagName = _this$options$product.tagName,\n      _this$options$product2 = _this$options$product.htmlAttributes,\n      htmlAttributes = _this$options$product2 === void 0 ? {} : _this$options$product2,\n      events = _this$options$product.events;\n  return this.createElement(tagName, Object.assign({}, htmlAttributes), events, this);\n});\n\n//# sourceURL=webpack://UnbxdSearch/./src/core/componentWrappers/createProductViewTypeWrapper.js?");

/***/ }),

/***/ "./src/core/componentWrappers/createSearchWrapper.js":
/*!***********************************************************!*\
  !*** ./src/core/componentWrappers/createSearchWrapper.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var _this$options$product = this.options.products,\n      tagName = _this$options$product.tagName,\n      _this$options$product2 = _this$options$product.htmlAttributes,\n      htmlAttributes = _this$options$product2 === void 0 ? {} : _this$options$product2,\n      events = _this$options$product.events;\n  return this.createElement(tagName, Object.assign({}, htmlAttributes), events, this);\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/./src/core/componentWrappers/createSearchWrapper.js?");

/***/ }),

/***/ "./src/core/componentWrappers/createSelectedFacetWrapper.js":
/*!******************************************************************!*\
  !*** ./src/core/componentWrappers/createSelectedFacetWrapper.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var _this$options$selecte = this.options.selectedFacets,\n      tagName = _this$options$selecte.tagName,\n      _this$options$selecte2 = _this$options$selecte.htmlAttributes,\n      htmlAttributes = _this$options$selecte2 === void 0 ? {} : _this$options$selecte2,\n      events = _this$options$selecte.events;\n  return this.createElement(tagName, Object.assign({}, htmlAttributes), events, this);\n});\n\n//# sourceURL=webpack://UnbxdSearch/./src/core/componentWrappers/createSelectedFacetWrapper.js?");

/***/ }),

/***/ "./src/core/componentWrappers/createSortWrapper.js":
/*!*********************************************************!*\
  !*** ./src/core/componentWrappers/createSortWrapper.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var _this$options$sort = this.options.sort,\n      tagName = _this$options$sort.tagName,\n      _this$options$sort$ht = _this$options$sort.htmlAttributes,\n      htmlAttributes = _this$options$sort$ht === void 0 ? {} : _this$options$sort$ht,\n      events = _this$options$sort.events;\n  return this.createElement(tagName, Object.assign({}, htmlAttributes), events, this);\n});\n\n//# sourceURL=webpack://UnbxdSearch/./src/core/componentWrappers/createSortWrapper.js?");

/***/ }),

/***/ "./src/core/componentWrappers/createSpellCheckWrapper.js":
/*!***************************************************************!*\
  !*** ./src/core/componentWrappers/createSpellCheckWrapper.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var _this$options$spellCh = this.options.spellCheck,\n      tagName = _this$options$spellCh.tagName,\n      _this$options$spellCh2 = _this$options$spellCh.htmlAttributes,\n      htmlAttributes = _this$options$spellCh2 === void 0 ? {} : _this$options$spellCh2,\n      events = _this$options$spellCh.events;\n  return this.createElement(tagName, Object.assign({}, htmlAttributes), events, this);\n});\n\n//# sourceURL=webpack://UnbxdSearch/./src/core/componentWrappers/createSpellCheckWrapper.js?");

/***/ }),

/***/ "./src/core/componentWrappers/index.js":
/*!*********************************************!*\
  !*** ./src/core/componentWrappers/index.js ***!
  \*********************************************/
/*! exports provided: default, createtSearchWrapper, createFacetWrapper, createBannerWrapper, createBreadcrumbWrapper, createPageSizeWrapper, createSortWrapper, createSelectedFacetWrapper, createSpellCheckWrapper, createPaginationWrapper, createProductViewTypeWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return setComponentWrappers; });\n/* harmony import */ var _createSearchWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createSearchWrapper */ \"./src/core/componentWrappers/createSearchWrapper.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createtSearchWrapper\", function() { return _createSearchWrapper__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _createFacetWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createFacetWrapper */ \"./src/core/componentWrappers/createFacetWrapper.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createFacetWrapper\", function() { return _createFacetWrapper__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _createBannerWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createBannerWrapper */ \"./src/core/componentWrappers/createBannerWrapper.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createBannerWrapper\", function() { return _createBannerWrapper__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _createBreadcrumbWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createBreadcrumbWrapper */ \"./src/core/componentWrappers/createBreadcrumbWrapper.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createBreadcrumbWrapper\", function() { return _createBreadcrumbWrapper__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _createPageSizeWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createPageSizeWrapper */ \"./src/core/componentWrappers/createPageSizeWrapper.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createPageSizeWrapper\", function() { return _createPageSizeWrapper__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n/* harmony import */ var _createSortWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createSortWrapper */ \"./src/core/componentWrappers/createSortWrapper.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createSortWrapper\", function() { return _createSortWrapper__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; });\n\n/* harmony import */ var _createSelectedFacetWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./createSelectedFacetWrapper */ \"./src/core/componentWrappers/createSelectedFacetWrapper.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createSelectedFacetWrapper\", function() { return _createSelectedFacetWrapper__WEBPACK_IMPORTED_MODULE_6__[\"default\"]; });\n\n/* harmony import */ var _createSpellCheckWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./createSpellCheckWrapper */ \"./src/core/componentWrappers/createSpellCheckWrapper.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createSpellCheckWrapper\", function() { return _createSpellCheckWrapper__WEBPACK_IMPORTED_MODULE_7__[\"default\"]; });\n\n/* harmony import */ var _createPaginationWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./createPaginationWrapper */ \"./src/core/componentWrappers/createPaginationWrapper.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createPaginationWrapper\", function() { return _createPaginationWrapper__WEBPACK_IMPORTED_MODULE_8__[\"default\"]; });\n\n/* harmony import */ var _createProductViewTypeWrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./createProductViewTypeWrapper */ \"./src/core/componentWrappers/createProductViewTypeWrapper.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createProductViewTypeWrapper\", function() { return _createProductViewTypeWrapper__WEBPACK_IMPORTED_MODULE_9__[\"default\"]; });\n\n\n\n\n\n\n\n\n\n\n\n\nvar setComponentWrappers = function setComponentWrappers(prototype) {\n  prototype = Object.assign(prototype, {\n    createtSearchWrapper: _createSearchWrapper__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    createFacetWrapper: _createFacetWrapper__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    createBannerWrapper: _createBannerWrapper__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    createBreadcrumbWrapper: _createBreadcrumbWrapper__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    createPageSizeWrapper: _createPageSizeWrapper__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    createSortWrapper: _createSortWrapper__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    createSelectedFacetWrapper: _createSelectedFacetWrapper__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n    createSpellCheckWrapper: _createSpellCheckWrapper__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n    createPaginationWrapper: _createPaginationWrapper__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n    createProductViewTypeWrapper: _createProductViewTypeWrapper__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n  });\n};\n\n\n\n//# sourceURL=webpack://UnbxdSearch/./src/core/componentWrappers/index.js?");

/***/ }),

/***/ "./src/core/createLayout.js":
/*!**********************************!*\
  !*** ./src/core/createLayout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar createLayout = function createLayout() {\n  var _this = this;\n\n  this.searchResultsWrapper = this.createtSearchWrapper();\n  this.bannerWrapper = this.createBannerWrapper();\n  this.breadcrumbWrapper = this.createBreadcrumbWrapper();\n  this.pageSizeWrapper = this.createPageSizeWrapper();\n  this.productViewTypeWrapper = this.createProductViewTypeWrapper();\n  this.paginationWrappers = [];\n  this.facetWrappers = [];\n  this.sortWrappers = [];\n  this.selectedFacetWrappers = [];\n  this.spellCheckWrappers = [];\n\n  var getPaginationWrapper = function getPaginationWrapper() {\n    var elem = _this.createPaginationWrapper();\n\n    _this.paginationWrappers.push(elem);\n\n    return elem;\n  };\n\n  var getfacetWrappers = function getfacetWrappers() {\n    var elem = _this.createFacetWrapper();\n\n    _this.facetWrappers.push(elem);\n\n    return elem;\n  };\n\n  var getSortElementWrappers = function getSortElementWrappers() {\n    var elem = _this.createSortWrapper();\n\n    _this.sortWrappers.push(elem);\n\n    return elem;\n  };\n\n  var getSelectedFacetsWrappers = function getSelectedFacetsWrappers() {\n    var elem = _this.createSelectedFacetWrapper();\n\n    _this.selectedFacetWrappers.push(elem);\n\n    return elem;\n  };\n\n  var getSpellCheckWrappers = function getSpellCheckWrappers() {\n    var elem = _this.createSpellCheckWrapper();\n\n    _this.spellCheckWrappers.push(elem);\n\n    return elem;\n  };\n\n  var _this$options = this.options,\n      facet = _this$options.facet,\n      breadcrumb = _this$options.breadcrumb,\n      banner = _this$options.banner,\n      sort = _this$options.sort,\n      products = _this$options.products,\n      pagesize = _this$options.pagesize,\n      pagination = _this$options.pagination,\n      productView = _this$options.productView,\n      selectedFacets = _this$options.selectedFacets;\n  var facetsEl = facet.facetsEl;\n  var spellCheck = this.options.spellCheck;\n  var spellCheckEl = spellCheck.el;\n\n  if (spellCheckEl) {\n    var els = spellCheckEl;\n\n    if (!els.length) {\n      els = [spellCheckEl];\n    }\n\n    els.forEach(function (el) {\n      el.innerHTML = \"\";\n      el.appendChild(getSpellCheckWrappers());\n    });\n  }\n\n  if (facetsEl) {\n    var _els = facetsEl;\n\n    if (!facetsEl.length) {\n      _els = [facetsEl];\n    }\n\n    _els.forEach(function (facetEl) {\n      facetEl.innerHTML = \"\";\n      facetEl.appendChild(getfacetWrappers());\n    });\n  }\n\n  var sortEls = sort.el;\n\n  if (sortEls && sort.enabled) {\n    var _els2 = sortEls;\n\n    if (!sortEls.length) {\n      _els2 = [sortEls];\n    }\n\n    _els2.forEach(function (sortEl) {\n      sortEl.innerHTML = \"\";\n      sortEl.appendChild(getSortElementWrappers());\n    });\n  }\n\n  if (facet.selectedFacetsEl) {\n    console.log(\"selectedFacetsEl option is depricated from v2.0.2, please use selectedFacets option to configure selected facets elements and template\");\n    facet.selectedFacetsEl.innerHTML = \"\";\n    facet.selectedFacetsEl.appendChild(getSelectedFacetsWrappers());\n  } else {\n    var selectedFacetsElems = selectedFacets.el;\n\n    if (selectedFacets.enabled && selectedFacetsElems) {\n      var _els3 = selectedFacetsElems;\n\n      if (!selectedFacetsElems.length) {\n        _els3 = [selectedFacetsElems];\n      }\n\n      _els3.forEach(function (el) {\n        el.innerHTML = \"\";\n        el.appendChild(getSelectedFacetsWrappers());\n      });\n    }\n  }\n\n  if (breadcrumb.enabled) {\n    if (breadcrumb.el) {\n      breadcrumb.el.innerHTML = \"\";\n      breadcrumb.el.appendChild(this.breadcrumbWrapper);\n    }\n  }\n\n  if (banner.el && banner.enabled) {\n    banner.el.innerHTML = \"\";\n    banner.template.bind(this);\n    banner.el.appendChild(this.bannerWrapper);\n  }\n\n  if (products.el) {\n    products.el.innerHTML = \"\";\n    products.el.appendChild(this.searchResultsWrapper);\n  }\n\n  if (pagesize.el && pagesize.enabled) {\n    pagesize.el.innerHTML = \"\";\n    pagesize.el.appendChild(this.pageSizeWrapper);\n  }\n\n  if (productView.el) {\n    productView.el.innerHTML = \"\";\n    productView.el.appendChild(this.productViewTypeWrapper);\n  }\n\n  if (pagination.enabled) {\n    var el = pagination.el;\n\n    if (el) {\n      var _els4 = el;\n\n      if (!el.length) {\n        _els4 = [el];\n      }\n\n      _els4.forEach(function (element) {\n        element.innerHTML = \"\";\n        element.appendChild(getPaginationWrapper());\n      });\n    }\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createLayout);\n\n//# sourceURL=webpack://UnbxdSearch/./src/core/createLayout.js?");

/***/ }),

/***/ "./src/core/initialize.js":
/*!********************************!*\
  !*** ./src/core/initialize.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _common_constants_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/constants/selectors */ \"./src/common/constants/selectors.js\");\n/* harmony import */ var _reRender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reRender */ \"./src/core/reRender.js\");\n/* harmony import */ var _bindEvents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bindEvents */ \"./src/core/bindEvents.js\");\n\n\n\n\nvar initialize = function initialize() {\n  this.createLayout();\n  this.unxSelectors = _common_constants_selectors__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n  this.renderDidYouMean.bind(this);\n  this.options.onEvent.bind(this);\n  this.options.products.onProductClick.bind(this);\n  this.reRender = _reRender__WEBPACK_IMPORTED_MODULE_1__[\"default\"].bind(this);\n  this.bindEvents = _bindEvents__WEBPACK_IMPORTED_MODULE_2__[\"default\"].bind(this);\n  this.bindEvents();\n  var urlParams = this.getQueryParams();\n  var ln = Object.keys(urlParams).length;\n  var _this$options$product = this.options.productView,\n      defaultViewType = _this$options$product.defaultViewType,\n      enabled = _this$options$product.enabled;\n\n  if (ln > 0) {\n    var viewType = urlParams.viewType;\n\n    if (viewType) {\n      this.viewState.productViewType = viewType;\n      this.options.extraParams.viewType = viewType;\n    }\n  } else {\n    this.options.extraParams.viewType = defaultViewType;\n  }\n\n  if (enabled) {\n    this.renderProductViewTypeUI();\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (initialize);\n\n//# sourceURL=webpack://UnbxdSearch/./src/core/initialize.js?");

/***/ }),

/***/ "./src/core/reRender.js":
/*!******************************!*\
  !*** ./src/core/reRender.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar reRender = function reRender() {\n  var _this = this;\n\n  var _this$options = this.options,\n      onEvent = _this$options.onEvent,\n      spellCheck = _this$options.spellCheck,\n      pagination = _this$options.pagination,\n      productType = _this$options.productType,\n      searchBoxEl = _this$options.searchBoxEl,\n      loader = _this$options.loader,\n      breadcrumb = _this$options.breadcrumb,\n      productView = _this$options.productView,\n      facet = _this$options.facet;\n  var _this$events = this.events,\n      beforeRender = _this$events.beforeRender,\n      beforeNoResultRender = _this$events.beforeNoResultRender,\n      afterNoResultRender = _this$events.afterNoResultRender,\n      afterRender = _this$events.afterRender;\n  onEvent(this, beforeRender);\n\n  if (loader.el) {\n    loader.el.innerHTML = \"\";\n  }\n\n  var results = this.getSearchResults();\n  var qParams = this.getQueryParams() || {};\n  var query = this.getSearchQuery();\n  var noResultCss = \"UNX-no-results-wrap\";\n  var _this$viewState = this.viewState,\n      lastAction = _this$viewState.lastAction,\n      productViewType = _this$viewState.productViewType;\n\n  if (productType === \"SEARCH\" && searchBoxEl) {\n    searchBoxEl.value = this.state.userInput;\n  }\n\n  if (productType !== \"SEARCH\" && searchBoxEl) {\n    searchBoxEl.value = \"\";\n  }\n\n  var searchResultsWrapper = this.searchResultsWrapper,\n      paginationWrappers = this.paginationWrappers,\n      breadcrumbWrapper = this.breadcrumbWrapper;\n  var _this$viewState2 = this.viewState,\n      noResultLoaded = _this$viewState2.noResultLoaded,\n      isInfiniteStarted = _this$viewState2.isInfiniteStarted;\n\n  if (results && results.numberOfProducts === 0) {\n    onEvent(this, beforeNoResultRender);\n    this.viewState.noResultLoaded = true;\n    searchResultsWrapper.classList.add(noResultCss);\n    searchResultsWrapper.innerHTML = this.renderNoResults(query);\n\n    if (!qParams.filter) {\n      this.renderFacets();\n    }\n\n    onEvent(this, afterNoResultRender);\n  } else {\n    var viewCss = productViewType === \"LIST\" ? \"UNX-list-block\" : \"UNX-grid-block\";\n    searchResultsWrapper.classList.remove(\"UNX-list-block\");\n    searchResultsWrapper.classList.remove(\"UNX-grid-block\");\n    searchResultsWrapper.classList.add(viewCss);\n    searchResultsWrapper.classList.remove(noResultCss);\n\n    if (isInfiniteStarted) {\n      this.viewState.isInfiniteStarted = false;\n\n      if (noResultLoaded) {\n        this.viewState.noResultLoaded = true;\n        searchResultsWrapper.innerHTML = this.renderSearch();\n      } else {\n        searchResultsWrapper.innerHTML += this.renderSearch();\n      }\n    } else {\n      searchResultsWrapper.innerHTML = \"\";\n      searchResultsWrapper.innerHTML = this.renderSearch();\n    }\n  }\n\n  this.renderFacets();\n  this.renderSelectedFacets();\n  this.renderBannerUI();\n\n  if (productView.enabled) {\n    this.renderProductViewTypeUI();\n  }\n\n  this.renderPageSize();\n  this.renderSort();\n\n  if (pagination.type !== \"INFINITE_SCROLL\") {\n    paginationWrappers.forEach(function (pagination) {\n      pagination.innerHTML = _this.renderPagination();\n    });\n  } else {\n    if (paginationWrappers) {\n      paginationWrappers.forEach(function (pagination) {\n        pagination.innerHTML = \"\";\n      });\n    }\n  }\n\n  if (breadcrumb.enabled) {\n    breadcrumbWrapper.innerHTML = this.renderBreadCrumbs();\n  }\n\n  var suggestion = this.getSpellCheckSuggested();\n\n  if (spellCheck.el) {\n    this.renderDidYouMean(suggestion);\n  }\n\n  if (lastAction === \"pagination\") {\n    if (pagination.type == \"INFINITE_SCROLL\") {\n      var productItemClass = this.options.products.productItemClass;\n      var scrollBy = document.querySelector(\".\".concat(productItemClass)).offsetHeight;\n      window.scrollBy({\n        top: scrollBy,\n        left: 0,\n        behavior: \"smooth\"\n      });\n    }\n\n    pagination.onPaginate.bind(this)(this.getPaginationInfo());\n  }\n\n  onEvent(this, afterRender);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reRender);\n\n//# sourceURL=webpack://UnbxdSearch/./src/core/reRender.js?");

/***/ }),

/***/ "./src/core/setConfig.js":
/*!*******************************!*\
  !*** ./src/core/setConfig.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_utils_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/utils/extend */ \"./src/modules/utils/extend.js\");\n\n\nvar setConfig = function setConfig() {\n  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  this.options = Object(_modules_utils_extend__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(true, {}, options, props);\n  var facet = props.facet,\n      pagesize = props.pagesize,\n      swatches = props.swatches,\n      products = props.products,\n      productView = props.productView;\n\n  if (facet) {\n    this.options.facetMultilevel = facet.facetMultilevel ? facet.facetMultilevel : options.facet.facetMultilevel;\n    this.options.facetMultiSelect = typeof facet.facetMultiSelect === \"boolean\" ? facet.facetMultiSelect : options.facet.facetMultiSelect;\n    this.options.facetDepth = facet.facetDepth ? facet.facetDepth : options.facet.facetDepth;\n    this.options.applyMultipleFilters = typeof facet.applyMultipleFilters === \"boolean\" ? facet.applyMultipleFilters : options.facet.applyMultipleFilters;\n  }\n\n  if (pagesize) {\n    this.options.pageSize = pagesize.pageSize || options.pagesize.pageSize;\n    this.state.pageSize = this.options.pageSize;\n  } else {\n    this.options.pageSize = options.pagesize.pageSize;\n    this.state.pageSize = this.options.pageSize;\n  }\n\n  if (products) {\n    this.options.productAttributes = products.productAttributes ? products.productAttributes : options.products.productAttributes;\n    this.options.productType = products.productType ? products.productType : options.products.productType;\n  } else {\n    this.options.productType = options.products.productType;\n    this.options.productAttributes = options.products.productAttributes;\n  }\n\n  if (swatches) {\n    this.options.showSwatches = swatches && swatches.enabled ? swatches.enabled : options.swatches.enabled;\n  }\n\n  if (productView) {\n    this.viewState.productViewType = productView.defaultViewType ? productView.defaultViewType : options.productView.defaultViewType;\n    this.options.productView.productViewType = this.viewState.productViewType;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (setConfig);\n\n//# sourceURL=webpack://UnbxdSearch/./src/core/setConfig.js?");

/***/ }),

/***/ "./src/core/setMethods.js":
/*!********************************!*\
  !*** ./src/core/setMethods.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_banners_setbannerMethods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/banners/setbannerMethods */ \"./src/modules/banners/setbannerMethods.js\");\n/* harmony import */ var _modules_facets_setFacetMethods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/facets/setFacetMethods */ \"./src/modules/facets/setFacetMethods.js\");\n/* harmony import */ var _modules_searchResults_setSearch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/searchResults/setSearch */ \"./src/modules/searchResults/setSearch.js\");\n/* harmony import */ var _modules_productViewType_setProductViewType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/productViewType/setProductViewType */ \"./src/modules/productViewType/setProductViewType.js\");\n/* harmony import */ var _modules_pagination_setPagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/pagination/setPagination */ \"./src/modules/pagination/setPagination.js\");\n/* harmony import */ var _modules_sort_setSort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/sort/setSort */ \"./src/modules/sort/setSort.js\");\n/* harmony import */ var _modules_input_setInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/input/setInput */ \"./src/modules/input/setInput.js\");\n/* harmony import */ var _modules_didYouMean_setSpellCheck__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modules/didYouMean/setSpellCheck */ \"./src/modules/didYouMean/setSpellCheck.js\");\n/* harmony import */ var _modules_breadcrumbs_setBreadcrumbs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modules/breadcrumbs/setBreadcrumbs */ \"./src/modules/breadcrumbs/setBreadcrumbs.js\");\n/* harmony import */ var _modules_swatches_setSwatches__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modules/swatches/setSwatches */ \"./src/modules/swatches/setSwatches.js\");\n/* harmony import */ var _modules_pageSize_setPageSize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../modules/pageSize/setPageSize */ \"./src/modules/pageSize/setPageSize.js\");\n/* harmony import */ var _modules_analytics_setAnalytics__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../modules/analytics/setAnalytics */ \"./src/modules/analytics/setAnalytics.js\");\n/* harmony import */ var _core_initialize__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/initialize */ \"./src/core/initialize.js\");\n/* harmony import */ var _createLayout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./createLayout */ \"./src/core/createLayout.js\");\n/* harmony import */ var _componentWrappers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./componentWrappers */ \"./src/core/componentWrappers/index.js\");\n/* harmony import */ var _modules_utils_createElement__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../modules/utils/createElement */ \"./src/modules/utils/createElement.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar setSearchWidget = function setSearchWidget(config) {\n  var products = this.options.products;\n  var newOps = Object.assign({}, products, config);\n  this.options.products = newOps;\n};\n\nvar setFacetWidget = function setFacetWidget(config) {\n  var facet = this.options.facet;\n  var newOps = Object.assign({}, facet, config);\n  this.options.facet = newOps;\n};\n\nvar updateConfig = function updateConfig(config) {\n  var options = this.options;\n  this.setConfig(options, config);\n  this.initialize();\n};\n\nvar extraActions = function extraActions(e) {\n  var onAction = this.options.onAction;\n  var target = e.target;\n  var dataset = target.dataset;\n  var _this$cssList = this.cssList,\n      openFacet = _this$cssList.openFacet,\n      closeFacet = _this$cssList.closeFacet,\n      openBtn = _this$cssList.openBtn,\n      closeBtn = _this$cssList.closeBtn,\n      viewMore = _this$cssList.viewMore,\n      viewLess = _this$cssList.viewLess;\n  var _this$options$facet = this.options.facet,\n      viewMoreText = _this$options$facet.viewMoreText,\n      textFacetWrapper = _this$options$facet.textFacetWrapper;\n\n  if (dataset) {\n    var facetAction = dataset.facetAction,\n        facetName = dataset.facetName,\n        action = dataset.action,\n        id = dataset.id;\n    var facetElementMap = this.viewState.facetElementMap;\n    var fI = target.closest(\".\".concat(facetElementMap[facetName]));\n\n    if (facetAction === \"facetOpen\") {\n      this.viewState.expandedFacets[facetName] = true;\n      target.classList.add(openBtn);\n      target.classList.remove(closeBtn);\n      target.setAttribute(\"data-facet-action\", \"facetClose\");\n      fI.classList.remove(closeFacet);\n      fI.classList.add(openFacet);\n    }\n\n    if (facetAction === \"facetClose\") {\n      this.viewState.expandedFacets[facetName] = false;\n      target.classList.remove(openBtn);\n      target.classList.add(closeBtn);\n      target.setAttribute(\"data-facet-action\", \"facetOpen\");\n      fI.classList.remove(openFacet);\n      fI.classList.add(closeFacet);\n    }\n\n    if (action === \"viewMore\") {\n      target.setAttribute(\"data-action\", \"viewLess\");\n      target.innerHTML = viewMoreText[1];\n      var fcEl = fI.querySelector(\".\".concat(textFacetWrapper));\n      fcEl.classList.remove(viewMore);\n      fcEl.classList.add(viewLess);\n    }\n\n    if (action === \"viewLess\") {\n      target.setAttribute(\"data-action\", \"viewMore\");\n      target.innerHTML = viewMoreText[0];\n\n      var _fcEl = fI.querySelector(\".\".concat(textFacetWrapper));\n\n      _fcEl.classList.remove(viewLess);\n\n      _fcEl.classList.add(viewMore);\n    }\n  }\n\n  onAction(e, this);\n};\n\nvar extraActionsChange = function extraActionsChange(e) {\n  var onAction = this.options.onAction;\n  var dataset = e.target.dataset;\n\n  if (dataset) {\n    var facetAction = dataset.facetAction,\n        facetName = dataset.facetName;\n\n    if (facetAction === \"searchFacets\") {\n      this.setSearchFacetsText(facetName, e.target.value);\n    }\n  }\n\n  onAction(e, this);\n};\n\nvar getCategoryPage = function getCategoryPage() {\n  this.resetAll();\n  this.options.productType = \"CATEGORY\";\n  this.options.products.productType = \"CATEGORY\";\n  this.getCallbackActions(this, 'categoryPage');\n  this.getResults();\n};\n\nvar getBrowsePage = function getBrowsePage() {\n  this.resetAll();\n  this.options.productType = \"BROWSE\";\n  this.options.products.productType = \"BROWSE\";\n  this.getCallbackActions(this, 'categoryPage');\n  this.getResults();\n};\n\nvar resetViewState = function resetViewState() {\n  this.viewState.lastDidYouMean = null;\n  this.viewState.searchFacetsText = {};\n  this.viewState.lastDidYouMean = null;\n  this.viewState.expandedFacets = {};\n};\n\nvar generateRid = function generateRid() {\n  var custom = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"unx_\";\n  return custom + Math.random().toString(36).substr(2, 9);\n};\n\nvar createFacetsLayout = function createFacetsLayout() {};\n\nvar setMethods = function setMethods(UnbxdSearch) {\n  var prototype = UnbxdSearch.prototype;\n  prototype.renderBannerUI = _modules_banners_setbannerMethods__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n  prototype.setSearchWidget = setSearchWidget;\n  prototype.setFacetWidget = setFacetWidget;\n  prototype.updateConfig = updateConfig;\n  prototype.createLayout = _createLayout__WEBPACK_IMPORTED_MODULE_13__[\"default\"];\n  prototype.initialize = _core_initialize__WEBPACK_IMPORTED_MODULE_12__[\"default\"];\n  prototype.extraActions = extraActions;\n  prototype.extraActionsChange = extraActionsChange;\n  prototype.getCategoryPage = getCategoryPage;\n  prototype.getBrowsePage = getBrowsePage;\n  prototype.resetViewState = resetViewState;\n  prototype.generateRid = generateRid;\n  prototype.createElement = _modules_utils_createElement__WEBPACK_IMPORTED_MODULE_15__[\"default\"];\n  prototype.createFacetsLayout = createFacetsLayout;\n  Object(_componentWrappers__WEBPACK_IMPORTED_MODULE_14__[\"default\"])(prototype);\n  Object(_modules_input_setInput__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(prototype);\n  Object(_modules_productViewType_setProductViewType__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(prototype);\n  Object(_modules_facets_setFacetMethods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(prototype);\n  Object(_modules_searchResults_setSearch__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(prototype);\n  Object(_modules_pagination_setPagination__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(prototype);\n  Object(_modules_sort_setSort__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(prototype);\n  Object(_modules_didYouMean_setSpellCheck__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(prototype);\n  Object(_modules_breadcrumbs_setBreadcrumbs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(prototype);\n  Object(_modules_swatches_setSwatches__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(prototype);\n  Object(_modules_pageSize_setPageSize__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(prototype);\n  Object(_modules_analytics_setAnalytics__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(prototype);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (setMethods);\n\n//# sourceURL=webpack://UnbxdSearch/./src/core/setMethods.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _search_JS_core_src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../search-JS-core/src/index */ \"../search-JS-core/src/index.js\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/index.scss */ \"./styles/index.scss\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modules_utils_delegate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/utils/delegate */ \"./src/modules/utils/delegate.js\");\n/* harmony import */ var _common_options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/options */ \"./src/common/options.js\");\n/* harmony import */ var _core_setMethods__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/setMethods */ \"./src/core/setMethods.js\");\n/* harmony import */ var _common_constants_eventsLib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/constants/eventsLib */ \"./src/common/constants/eventsLib.js\");\n/* harmony import */ var _common_constants_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/constants/actions */ \"./src/common/constants/actions.js\");\n/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/constants */ \"./src/common/constants/index.js\");\n/* harmony import */ var _core_setConfig__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/setConfig */ \"./src/core/setConfig.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n // import UnbxdSearchCore from \"@unbxd-ui/unbxd-search-core\";\n\n\n\n\n\n\n\n\n\n\nvar UnbxdSearch = /*#__PURE__*/function (_UnbxdSearchCore) {\n  _inherits(UnbxdSearch, _UnbxdSearchCore);\n\n  var _super = _createSuper(UnbxdSearch);\n\n  function UnbxdSearch(props) {\n    var _this;\n\n    _classCallCheck(this, UnbxdSearch);\n\n    _this = _super.call(this, props);\n    _this.viewState = {\n      productViewType: _common_options__WEBPACK_IMPORTED_MODULE_3__[\"default\"].productView.defaultViewType,\n      isInfiniteStarted: false,\n      lastAction: '',\n      selectedRange: {},\n      expandedFacets: {},\n      searchFacetsText: {},\n      noResultLoaded: false,\n      lastDidYouMean: null,\n      loadedFromSuggestion: false,\n      setFromSuggest: false,\n      facetElementMap: {},\n      initialised: false\n    };\n    _this.setConfig = _core_setConfig__WEBPACK_IMPORTED_MODULE_8__[\"default\"].bind(_assertThisInitialized(_this));\n\n    _this.setConfig(_common_options__WEBPACK_IMPORTED_MODULE_3__[\"default\"], props);\n\n    _this.events = _common_constants_eventsLib__WEBPACK_IMPORTED_MODULE_5__[\"default\"];\n    _this.actions = _common_constants_actions__WEBPACK_IMPORTED_MODULE_6__[\"default\"];\n    _this.cssList = _common_constants__WEBPACK_IMPORTED_MODULE_7__[\"cssClasses\"];\n    _this.testIds = _common_constants__WEBPACK_IMPORTED_MODULE_7__[\"testIds\"];\n\n    _this.updateConfig();\n\n    _this.options.onEvent(_assertThisInitialized(_this), 'initialised');\n\n    return _this;\n  }\n\n  _createClass(UnbxdSearch, [{\n    key: \"callBack\",\n    value: function callBack(state, type) {\n      this.getCallbackActions(state, type);\n      var _this$options = this.options,\n          onEvent = _this$options.onEvent,\n          loader = _this$options.loader,\n          facet = _this$options.facet,\n          productView = _this$options.productView;\n      var _this$events = this.events,\n          beforeApiCall = _this$events.beforeApiCall,\n          afterApiCall = _this$events.afterApiCall;\n      var urlParams = this.getQueryParams();\n\n      var _ref = urlParams || {},\n          viewType = _ref.viewType;\n\n      if (this.viewState.lastAction === \"viewType\") {\n        viewType = this.viewState.productViewType;\n        this.options.extraParams.viewType = viewType;\n        this.viewState.lastAction = \"\";\n      }\n\n      if (this.viewState.lastAction != \"pagination\") {\n        this.viewState.isInfiniteStarted = false;\n      }\n\n      if (!viewType) {\n        viewType = this.viewState.productViewType || productView.defaultViewType;\n        this.viewState.productViewType = viewType;\n        this.options.extraParams.viewType = viewType;\n      }\n\n      if (this.viewState.productViewType !== viewType) {\n        this.viewState.productViewType = viewType;\n        this.options.extraParams.viewType = viewType;\n      }\n\n      if (type === beforeApiCall) {\n        onEvent(this, beforeApiCall);\n\n        if (loader && loader.el) {\n          loader.el.innerHTML = loader.template(this);\n        }\n      }\n\n      if (type === afterApiCall) {\n        onEvent(this, afterApiCall);\n\n        if (this.state.products.length > 0) {\n          this.viewState.noResultLoaded = false;\n        }\n\n        this.reRender();\n      }\n\n      if ((type === 'added_facet' || type === 'deleted_facet') && facet.applyMultipleFilters) {\n        onEvent(this, 'added_facet');\n        this.renderFacets();\n      }\n\n      if (type === \"FETCH_ERROR\") {\n        if (loader && loader.el) {\n          loader.el.innerHTML = \"\";\n        }\n      }\n    }\n  }, {\n    key: \"delegate\",\n    value: function delegate(delgationElem, evt, elem, fn) {\n      return Object(_modules_utils_delegate__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(delgationElem, evt, elem, fn);\n    }\n  }]);\n\n  return UnbxdSearch;\n}(_search_JS_core_src_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\nObject(_core_setMethods__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(UnbxdSearch);\n/* harmony default export */ __webpack_exports__[\"default\"] = (UnbxdSearch);\n\n//# sourceURL=webpack://UnbxdSearch/./src/index.js?");

/***/ }),

/***/ "./src/modules/analytics/setAnalytics.js":
/*!***********************************************!*\
  !*** ./src/modules/analytics/setAnalytics.js ***!
  \***********************************************/
/*! exports provided: default, trackSearch, getCallbackActions, trackProductClick, trackImpression, trackFacetClick, trackCategoryPageLoad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return setAnalytics; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"trackSearch\", function() { return trackSearch; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCallbackActions\", function() { return getCallbackActions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"trackProductClick\", function() { return trackProductClick; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"trackImpression\", function() { return trackImpression; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"trackFacetClick\", function() { return trackFacetClick; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"trackCategoryPageLoad\", function() { return trackCategoryPageLoad; });\nvar trackSearch = function trackSearch(value) {\n  Unbxd.track(\"search\", {\n    \"query\": value\n  });\n};\n\nvar trackProductClick = function trackProductClick(value) {\n  var uniqueId = value.uniqueId,\n      sku = value.sku,\n      prank = value.prank;\n  Unbxd.track(\"click\", {\n    \"pid\": uniqueId || sku,\n    \"prank\": prank,\n    \"requestId\": null\n  });\n};\n\nvar trackImpression = function trackImpression() {\n  var results = this.getSearchResults();\n  var query = this.getSearchQuery();\n  var productType = this.options.productType;\n  var products = results.products;\n  var obj = {\n    'pids_list': []\n  };\n\n  if (productType === \"SEARCH\") {\n    obj['query'] = query;\n  }\n\n  if (products) {\n    var pids = [];\n    products.forEach(function (product) {\n      var sku = product.sku,\n          uniqueId = product.uniqueId;\n      var pid = uniqueId || sku;\n      pids.push(pid);\n    });\n    obj['pids_list'] = pids;\n    Unbxd.track('search_impression', obj);\n  }\n};\n\nvar trackFacetClick = function trackFacetClick(state, type) {\n  var textFacets = this.getSelectedFacets();\n  var rangeFacets = this.state.rangeFacet;\n  var categoryField = this.state.categoryFilter;\n  var textFacetsArr = Object.keys(textFacets);\n  var rangeFacetsArr = Object.keys(rangeFacets);\n  var categoryArr = Object.keys(categoryField);\n  var facetArr = {};\n  textFacetsArr.forEach(function (facet) {\n    var valObj = textFacets[facet];\n    var arr = [];\n    valObj.forEach(function (val) {\n      arr.push(val.name);\n    });\n    facetArr[facet] = arr;\n  });\n  rangeFacetsArr.forEach(function (facet) {\n    var val = rangeFacetsArr[facet];\n    facetArr[facet] = val;\n  });\n  categoryArr.forEach(function (category) {\n    var val = categoryField[category];\n    var original = val.join('>');\n    facetArr[category] = original;\n  });\n  var query = this.getSearchQuery();\n  Unbxd.track('facets', {\n    'query': query,\n    'facets': facetArr\n  });\n};\n\nvar trackCategoryPageLoad = function trackCategoryPageLoad(instance, type) {\n  if (window.UnbxdAnalyticsConf) {\n    //window.UnbxdAnalyticsConf[\"page_type\"] =\"CATEGORY_PATH\";\n    Unbxd.track(\"categoryPage\", window.UnbxdAnalyticsConf);\n  }\n};\n\nvar getCallbackActions = function getCallbackActions(state, type) {\n  var Unbxd = window.Unbxd || null;\n  var unbxdAnalytics = this.options.unbxdAnalytics;\n\n  if (!Unbxd || !unbxdAnalytics || Unbxd && !Unbxd.track) {\n    return false;\n  }\n\n  if (state) {\n    switch (type) {\n      case 'CHANGE_INPUT':\n        this.trackSearch(state);\n        break;\n\n      case 'click':\n        this.trackProductClick(state);\n        break;\n\n      case 'AFTER_API_CALL':\n        this.trackImpression();\n        break;\n\n      case 'facetClick':\n        this.trackFacetClick(state, type);\n\n      case 'categoryPage':\n        this.trackCategoryPageLoad(state, type);\n        break;\n    }\n  }\n};\n\nvar setAnalytics = function setAnalytics(prototype) {\n  prototype = Object.assign(prototype, {\n    trackSearch: trackSearch,\n    getCallbackActions: getCallbackActions,\n    trackProductClick: trackProductClick,\n    trackImpression: trackImpression,\n    trackFacetClick: trackFacetClick,\n    trackCategoryPageLoad: trackCategoryPageLoad\n  });\n};\n\n\n\n//# sourceURL=webpack://UnbxdSearch/./src/modules/analytics/setAnalytics.js?");

/***/ }),

/***/ "./src/modules/banners/index.js":
/*!**************************************!*\
  !*** ./src/modules/banners/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar bannerTemplateUI = function bannerTemplateUI(banners, bannerOpts) {\n  var openNewTab = bannerOpts.openNewTab;\n  var bannerUI = banners.map(function (item) {\n    var imageUrl = item.imageUrl,\n        landingUrl = item.landingUrl,\n        bannerHtml = item.bannerHtml;\n\n    if (bannerHtml) {\n      return bannerHtml;\n    }\n\n    var hrefStr = \"\";\n\n    if (landingUrl) {\n      hrefStr += \"href=\".concat(landingUrl);\n    }\n\n    if (openNewTab) {\n      hrefStr += \"  target=\\\"_blank\\\"\";\n    }\n\n    return \"<a class=\\\"UNX-banner-wrap\\\" \".concat(hrefStr, \" ><img style=\\\"max-width:100%\\\" src=\\\"\").concat(imageUrl, \"\\\"/></a>\");\n  }).join('');\n  return \"\".concat(bannerUI);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (bannerTemplateUI);\n\n//# sourceURL=webpack://UnbxdSearch/./src/modules/banners/index.js?");

/***/ }),

/***/ "./src/modules/banners/setbannerMethods.js":
/*!*************************************************!*\
  !*** ./src/modules/banners/setbannerMethods.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction renderBannerUI() {\n  var banners = this.getBanners();\n  var banner = this.options.banner;\n  this.bannerWrapper.innerHTML = this.options.banner.template(banners, banner);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderBannerUI);\n\n//# sourceURL=webpack://UnbxdSearch/./src/modules/banners/setbannerMethods.js?");

/***/ }),

/***/ "./src/modules/breadcrumbs/actions.js":
/*!********************************************!*\
  !*** ./src/modules/breadcrumbs/actions.js ***!
  \********************************************/
/*! exports provided: onBreadCrumbClick, renderBreadCrumbs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onBreadCrumbClick\", function() { return onBreadCrumbClick; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderBreadCrumbs\", function() { return renderBreadCrumbs; });\nfunction onBreadCrumbClick(e) {}\n\n;\n\nfunction renderBreadCrumbs() {\n  var _this = this;\n\n  var selectedCategories = this.getSelectedMultilevelFacet();\n  var ui = \"\";\n  selectedCategories.forEach(function (item) {\n    var data = _this.getBreadCrumbsList(item);\n\n    var breadcrumb = _this.options.breadcrumb;\n    ui += _this.options.breadcrumb.template(data, breadcrumb);\n  });\n  return ui;\n}\n\n\n\n//# sourceURL=webpack://UnbxdSearch/./src/modules/breadcrumbs/actions.js?");

/***/ }),

/***/ "./src/modules/breadcrumbs/breadcrumbsView.js":
/*!****************************************************!*\
  !*** ./src/modules/breadcrumbs/breadcrumbsView.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar breadCrumbsUI = function breadCrumbsUI(breadcrumbs, breadcrumb) {\n  var ui = \"\";\n  var selectorClass = breadcrumb.selectorClass;\n  breadcrumbs.forEach(function (item, id) {\n    var level = item.level,\n        filterField = item.filterField,\n        value = item.value;\n    var css = \"\".concat(selectorClass, \" UNX-bread-crumb-item\");\n\n    if (id > 0) {\n      ui += \"<span class=\\\"UNX-slash\\\"> / </span>\";\n    }\n\n    ui += [\"<button data-parent=\\\"\".concat(filterField, \"\\\" data-level=\\\"\").concat(level, \"\\\" class=\\\"\").concat(css, \"\\\" data-name=\\\"\").concat(value, \"\\\" data-action = \\\"clearCategoryFilter\\\">\"), \"\".concat(decodeURIComponent(value), \"</button>\")].join('');\n  });\n  return \"<div class=\\\"bread-crumb-main\\\">\".concat(ui, \"</div>\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (breadCrumbsUI);\n\n//# sourceURL=webpack://UnbxdSearch/./src/modules/breadcrumbs/breadcrumbsView.js?");

/***/ }),

/***/ "./src/modules/breadcrumbs/setBreadcrumbs.js":
/*!***************************************************!*\
  !*** ./src/modules/breadcrumbs/setBreadcrumbs.js ***!
  \***************************************************/
/*! exports provided: default, onBreadCrumbClick, renderBreadCrumbs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return setBreadCrumbs; });\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ \"./src/modules/breadcrumbs/actions.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"onBreadCrumbClick\", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__[\"onBreadCrumbClick\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"renderBreadCrumbs\", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__[\"renderBreadCrumbs\"]; });\n\n\n\nvar setBreadCrumbs = function setBreadCrumbs(prototype) {\n  prototype = Object.assign(prototype, {\n    onBreadCrumbClick: _actions__WEBPACK_IMPORTED_MODULE_0__[\"onBreadCrumbClick\"],\n    renderBreadCrumbs: _actions__WEBPACK_IMPORTED_MODULE_0__[\"renderBreadCrumbs\"]\n  });\n};\n\n\n\n//# sourceURL=webpack://UnbxdSearch/./src/modules/breadcrumbs/setBreadcrumbs.js?");

/***/ }),

/***/ "./src/modules/didYouMean/renderSpellCheck.js":
/*!****************************************************!*\
  !*** ./src/modules/didYouMean/renderSpellCheck.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar renderDidYouMean = function renderDidYouMean(suggestion) {\n  var userInput = this.state.userInput;\n  var pages = this.getPaginationInfo() || {};\n  var didYouMean = this.getDidYouMeanFromResponse();\n  var type = this.options.pagination.type;\n  var _this$options$spellCh = this.options.spellCheck,\n      spellCheck = _this$options$spellCh.spellCheck,\n      enabled = _this$options$spellCh.enabled;\n  var viewState = this.viewState;\n  var loadedFromSuggestion = viewState.loadedFromSuggestion,\n      lastDidYouMean = viewState.lastDidYouMean;\n\n  if (type !== \"FIXED_PAGINATION\" && pages) {\n    var start = pages.start,\n        productsLn = pages.productsLn;\n    pages.productsLn = productsLn + start;\n    pages.start = 0;\n  }\n\n  var sugString = didYouMean.length > 0 ? didYouMean[0].suggestion : \"\";\n  var ui = \"\";\n\n  if (sugString && !loadedFromSuggestion) {\n    this.viewState.lastDidYouMean = userInput;\n    this.viewState.loadedFromSuggestion = true;\n\n    if (enabled) {\n      this.getResults(sugString);\n    }\n  } else {\n    this.viewState.lastDidYouMean = \"\";\n  }\n\n  ui = this.options.spellCheck.template.bind(this)(userInput, lastDidYouMean, pages);\n\n  if (!enabled && sugString) {\n    ui = this.options.spellCheck.template.bind(this)(sugString, userInput, pages);\n  }\n\n  this.spellCheckWrappers.forEach(function (wrapper) {\n    wrapper.innerHTML = ui;\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderDidYouMean);\n\n//# sourceURL=webpack://UnbxdSearch/./src/modules/didYouMean/renderSpellCheck.js?");

/***/ }),

/***/ "./src/modules/didYouMean/setSpellCheck.js":
/*!*************************************************!*\
  !*** ./src/modules/didYouMean/setSpellCheck.js ***!
  \*************************************************/
/*! exports provided: default, renderDidYouMean, setSuggestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return setSpellCheck; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setSuggestion\", function() { return setSuggestion; });\n/* harmony import */ var _renderSpellCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderSpellCheck */ \"./src/modules/didYouMean/renderSpellCheck.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"renderDidYouMean\", function() { return _renderSpellCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\nvar setSuggestion = function setSuggestion(e) {\n  var txt = this.getSpellCheckSuggested();\n  var didLength = txt.length;\n  var target = e.target;\n\n  var _ref = target || {},\n      dataset = _ref.dataset;\n\n  var userInput = this.state.userInput;\n\n  if (dataset && dataset.action === \"getSuggestion\") {\n    this.resetAll();\n    this.setPageStart(0);\n    this.getResults(didLength ? txt[0] : userInput);\n    this.viewState.lastDidYouMean = null;\n    this.viewState.loadedFromSuggestion = false;\n  }\n};\n\nvar setSpellCheck = function setSpellCheck(prototype) {\n  prototype = Object.assign(prototype, {\n    renderDidYouMean: _renderSpellCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    setSuggestion: setSuggestion\n  });\n};\n\n\n\n//# sourceURL=webpack://UnbxdSearch/./src/modules/didYouMean/setSpellCheck.js?");

/***/ }),

/***/ "./src/modules/didYouMean/spellCheckView.js":
/*!**************************************************!*\
  !*** ./src/modules/didYouMean/spellCheckView.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//query - current search term\n//suggestion - suggest search term\n//pages - details search response\n\n/*\n    {\n    \"numberOfProducts\": 194,\n    \"start\": 0,\n    \"productsLn\": 12,\n    \"rows\": 12,\n    \"noOfPages\": 17,\n    \"currentPage\": 1,\n    \"isNext\": true,\n    \"isPrev\": false\n    }\n*/\nvar didYouMeanUI = function didYouMeanUI(query, suggestion, pages) {\n  var start = pages.start,\n      productsLn = pages.productsLn,\n      numberOfProducts = pages.numberOfProducts;\n  var _this$options$spellCh = this.options.spellCheck,\n      selectorClass = _this$options$spellCh.selectorClass,\n      enabled = _this$options$spellCh.enabled;\n  var productType = this.options.productType;\n  var newQuery = query;\n\n  if (productType !== \"SEARCH\") {\n    var catId = this.getCategoryId() || \"\";\n    var cId = decodeURIComponent(catId).split(\">\");\n    newQuery = cId[cId.length - 1] || cId[0];\n  }\n\n  var UNX_spellCheck = this.testIds.UNX_spellCheck;\n  var noUi = suggestion ? \"<p class=\\\"UNX-no-result\\\"> Your search \\\"<strong>\".concat(suggestion, \"</strong>\\\" did not match any products. Did you mean <button data-test-id=\\\"\").concat(UNX_spellCheck, \"\\\" data-action=\\\"getSuggestion\\\" class=\\\"\").concat(selectorClass, \"\\\">\").concat(query, \"</button>? </p>\") : \"\";\n  var qUi = \"\";\n  var countUi = \"\";\n\n  if (numberOfProducts > 0) {\n    countUi = \"<span class=\\\"UNX-result-info\\\">  -  \".concat(start + 1, \" to \").concat(productsLn + start, \" of \").concat(numberOfProducts, \" products</span>\");\n  }\n\n  if (pages && newQuery) {\n    if (!enabled) {\n      newQuery = suggestion || query;\n    }\n\n    qUi = \"<p class=\\\"UNX-suggestion-p\\\">Showing results for <strong>\".concat(newQuery, \"</strong> \").concat(countUi, \"</p>\");\n  }\n\n  return [\"<div class=\\\"UNX-spellcheck-block\\\">\", noUi, qUi, \"</div>\"].join('');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (didYouMeanUI);\n\n//# sourceURL=webpack://UnbxdSearch/./src/modules/didYouMean/spellCheckView.js?");

/***/ }),

/***/ "./src/modules/facets/actions.js":
/*!***************************************!*\
  !*** ./src/modules/facets/actions.js ***!
  \***************************************/
/*! exports provided: findChangedFacet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findChangedFacet\", function() { return findChangedFacet; });\nvar findChangedFacet = function findChangedFacet(e) {\n  var elem = e.target;\n  this.viewState.lastDidYouMean = \"\";\n  var selected = this.options.facet.facetAction === \"click\" ? elem : elem.options[elem.selectedIndex];\n  var dataSet = selected.dataset;\n  var facetName = dataSet.facetName,\n      facetAction = dataSet.facetAction,\n      id = dataSet.id,\n      action = dataSet.action,\n      end = dataSet.end,\n      start = dataSet.start;\n  var qState = this.getStateFromUrl();\n  var selectedfacets = this.getSelectedFacets();\n  var ln = selectedfacets ? Object.keys(selectedfacets).length : 0;\n  var ql = Object.keys(qState.selectedFacets).length;\n  var _this$options = this.options,\n      productType = _this$options.productType,\n      facet = _this$options.facet;\n  var applyMultipleFilters = facet.applyMultipleFilters;\n  var events = this.events,\n      actions = this.actions;\n  var ranges = this.state.rangeFacet[facetName];\n  var isSelections = Object.keys(qState.rangeFacet);\n\n  if (facetAction === actions.changeFacet) {\n    var selectedfacetInfo = this.getSelectedFacet(facetName);\n    var selectedOpt = {\n      selectedFacetName: facetName,\n      selectedFacetId: id,\n      facetData: selectedfacetInfo\n    };\n    this.viewState.lastAction = \"addedAFacet\";\n    this.options.onEvent(this, events.facetClick, {\n      facetName: facetName,\n      facetData: selectedfacetInfo\n    });\n    this.updateFacets(selectedOpt);\n    this.getCallbackActions({\n      facetName: facetName,\n      facetAction: facetAction,\n      id: id\n    }, 'facetClick');\n  }\n\n  if (facetAction === \"deleteSelectedFacetValue\") {\n    if (this.findSelectedFacet(facetName)) {\n      this.viewState.lastAction = \"deletedAfacet\";\n      this.deleteAFacet.bind(this)(facetName, id);\n      this.options.onEvent(this, events.deleteFacetValue, {\n        facetName: facetName\n      });\n      this.getCallbackActions({\n        facetName: facetName,\n        facetAction: facetAction,\n        id: id\n      }, 'facetClick');\n      this.setPageStart(0);\n      this.getResults();\n    }\n  }\n\n  if (facetAction === actions.deleteFacetValue) {\n    if (this.findSelectedFacet(facetName)) {\n      this.viewState.lastAction = \"deletedAfacet\";\n      this.deleteAFacet.bind(this)(facetName, id);\n      this.options.onEvent(this, events.deleteFacetValue, {\n        facetName: facetName\n      });\n      this.getCallbackActions({\n        facetName: facetName,\n        facetAction: facetAction,\n        id: id\n      }, 'facetClick');\n      var fl = selectedfacets[facetName].length;\n\n      if (ql > 0 && ln === 1 && fl === 0 && applyMultipleFilters) {\n        this.setPageStart(0);\n        this.getResults();\n      }\n    }\n  }\n\n  if (facetAction === actions.deleteFacet) {\n    if (this.findSelectedFacet(facetName)) {\n      this.viewState.lastAction = \"deletedAfacet\";\n      this.deleteAFacet.bind(this)(facetName);\n      this.options.onEvent(this, events.deleteFacet, {\n        facetName: facetName\n      });\n      this.getCallbackActions({\n        facetName: facetName,\n        facetAction: facetAction,\n        id: id\n      }, 'facetClick');\n      var isReload = qState.selectedFacets[facetName];\n\n      if (isReload) {\n        this.viewState.lastAction = \"clearAFacet\";\n        this.setPageStart(0);\n        this.getResults();\n      }\n    }\n  }\n\n  if (facetAction === \"applyFacets\") {\n    this.viewState.lastAction = \"applyFacets\";\n    this.setPageStart(0);\n    this.getResults();\n  }\n\n  if (facetAction === \"clearAllFacets\") {\n    this.viewState.lastAction = \"clearAllFacets\";\n    this.state.selectedFacets = [];\n    this.state.rangeFacet = [];\n    this.setPageStart(0);\n    this.getResults();\n  }\n\n  if (facetAction === \"deleteSelectedRange\") {\n    var _facetName = dataSet.facetName,\n        _id = dataSet.id;\n\n    var range = _id.replace(/[^\\w\\s]/gi, '').split(\" TO \");\n\n    this.setRangeFacet({\n      start: range[0],\n      end: range[1],\n      facetName: _facetName,\n      applyMultiple: true\n    });\n    this.getCallbackActions({\n      facetName: _facetName,\n      facetAction: facetAction,\n      id: _id\n    }, 'facetClick');\n    this.setPageStart(0);\n    this.getResults();\n  }\n\n  if (action === actions.setCategoryFilter) {\n    if (productType === \"SEARCH\") {\n      this.setCategoryFilter(dataSet);\n      this.options.onEvent(this, events.setCategoryFilter, dataSet);\n    } else {\n      this.setCategoryId(dataSet, this);\n    }\n\n    this.setPageStart(0);\n    this.getResults();\n    this.getCallbackActions(dataSet, 'facetClick');\n  }\n\n  if (action === actions.clearCategoryFilter) {\n    if (productType === \"SEARCH\") {\n      this.deleteCategoryFilter(dataSet);\n      this.options.onEvent(this, events.deleteCategoryFilter, dataSet);\n    } else {\n      this.setCategoryId(dataSet, this);\n    }\n\n    this.setPageStart(0);\n    this.getResults();\n    this.getCallbackActions(dataSet, 'facetClick');\n  }\n\n  if (action === \"setRange\") {\n    var already = false;\n\n    if (ranges && ranges.length === 1 && isSelections.length > 0) {\n      already = this.isSelectedRange(facetName, {\n        from: {\n          name: start\n        },\n        end: {\n          name: end\n        }\n      });\n    }\n\n    ;\n\n    if (!already) {\n      this.setRangeFacet({\n        start: start,\n        end: end,\n        facetName: facetName,\n        applyMultiple: true\n      });\n    }\n\n    if (already) {\n      this.state.rangeFacet = [];\n      this.applyRangeFacet();\n    }\n\n    if (!applyMultipleFilters) {\n      this.setPageStart(0);\n      this.applyRangeFacet();\n    }\n\n    this.getCallbackActions({\n      facetName: facetName,\n      facetAction: facetAction,\n      id: id\n    }, 'facetClick');\n  }\n\n  if (action === \"clearRangeFacets\") {\n    this.state.rangeFacet = [];\n    this.renderFacets();\n\n    if (isSelections.length > 0) {\n      ;\n      this.applyRangeFacet();\n    }\n  }\n\n  if (action === actions.applyRange) {\n    this.applyRangeFacet();\n    this.options.onEvent(this, action, {\n      facetName: facetName\n    });\n    this.getCallbackActions({\n      facetName: facetName\n    }, 'facetClick');\n  }\n\n  if (action === actions.clearPriceRange && facetName) {\n    this.clearARangeFacet(facetName);\n    this.getResults.bind(this)();\n    this.options.onEvent(this, action, {\n      facetName: facetName\n    });\n    this.getCallbackActions({\n      facetName: facetName\n    }, 'facetClick');\n  }\n\n  this.viewState.lastAction = action; //this.renderFacets();\n};\n\n\n\n//# sourceURL=webpack://UnbxdSearch/./src/modules/facets/actions.js?");

/***/ }),

/***/ "./src/modules/facets/renderBucketedSearch.js":
/*!****************************************************!*\
  !*** ./src/modules/facets/renderBucketedSearch.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar multiLevelFacetUI = function multiLevelFacetUI(facet, selectedCategories, facetSearchTxt, facetConfig) {\n  var ui = \"\";\n  var multiLevelFacetSelectorClass = facetConfig.multiLevelFacetSelectorClass,\n      facetClass = facetConfig.facetClass;\n  var UNX_facetLevel = this.testIds.UNX_facetLevel;\n\n  if (selectedCategories) {\n    selectedCategories.forEach(function (item) {\n      var level = item.level,\n          filterField = item.filterField,\n          value = item.value;\n      var lTid = \"data-test-id=\\\"\".concat(UNX_facetLevel).concat(level, \"\\\"\");\n      var levelCss = \"\".concat(multiLevelFacetSelectorClass, \"  UNX-category-level-\").concat(level);\n      ui += [\"<button \".concat(lTid, \" data-parent=\\\"\").concat(filterField, \"\\\" data-level=\\\"\").concat(level, \"\\\" data-name=\\\"\").concat(value, \"\\\"\"), \"class=\\\" \".concat(levelCss, \" UNX-selected-crumb \").concat(facetClass, \"\\\" data-action = \\\"clearCategoryFilter\\\">\"), \"<span class=\\\"UNX-category-icon\\\"></span><label class=\\\"UNX-facet-text\\\">\".concat(decodeURIComponent(value), \"</label>\"), \"</button>\"].join('');\n    });\n  }\n\n  var level = facet.level,\n      displayName = facet.displayName,\n      values = facet.values,\n      filterField = facet.filterField;\n  var multiLevelField = facet.multiLevelField;\n\n  if (!multiLevelField) {\n    multiLevelField = filterField;\n  }\n\n  var lTid = \"data-test-id=\\\"\".concat(UNX_facetLevel).concat(level, \"\\\"\");\n  var levelCss = \"UNX-category-level-\".concat(level);\n  var valueUI = values.map(function (item) {\n    var name = item.name,\n        count = item.count,\n        dataId = item.dataId;\n\n    if (facetSearchTxt && facetSearchTxt.length > 0) {\n      if (name.toUpperCase().indexOf(facetSearchTxt.toUpperCase()) < 0) {\n        facetClass += ' UNX-search-hidden';\n      }\n    }\n\n    return [\"<button \".concat(lTid, \" data-parent=\\\"\").concat(multiLevelField, \"\\\" data-level=\\\"\").concat(level, \"\\\"\"), \"class=\\\"\".concat(multiLevelFacetSelectorClass, \" \").concat(levelCss, \" \").concat(facetClass, \"\\\" data-name=\\\"\").concat(dataId, \"\\\" data-action = \\\"setCategoryFilter\\\">\"), \"<label class=\\\"UNX-facet-text\\\">\".concat(name, \"</label><label class=\\\"UNX-facet-count\\\">(\").concat(count, \")</label></button>\")].join('');\n  });\n  ui += \"<div class=\\\"UNX-category-values\\\">\".concat(valueUI.join(''), \"</div>\");\n\n  if (ui !== \"\") {\n    return [\"<div class=\\\"UNX-multi-facet-wrap\\\">\", \"\".concat(ui, \"</div>\")].join('');\n  } else {\n    return \"\";\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (multiLevelFacetUI);\n\n//# sourceURL=webpack://UnbxdSearch/./src/modules/facets/renderBucketedSearch.js?");

/***/ }),

/***/ "./src/modules/facets/renderFacets.js":
/*!********************************************!*\
  !*** ./src/modules/facets/renderFacets.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var _this = this;\n\n  var facet = this.options.facet;\n  var defaultOpen = facet.defaultOpen,\n      applyMultipleFilters = facet.applyMultipleFilters,\n      isCollapsible = facet.isCollapsible;\n  var _this$viewState = this.viewState,\n      expandedFacets = _this$viewState.expandedFacets,\n      lastAction = _this$viewState.lastAction;\n\n  if (lastAction === \"updatedRangeSlider\" && applyMultipleFilters) {\n    return false;\n  }\n\n  var self = this;\n  var allFacets = this.getAllFacets();\n  var facetWrappers = this.facetWrappers;\n  var selectedFacets = this.getSelectedFacets();\n  facetWrappers.forEach(function (facetsWrapper) {\n    facetsWrapper.innerHTML = \"\";\n    allFacets.forEach(function (facetItem, idx) {\n      var facetType = facetItem.facetType,\n          facetName = facetItem.facetName;\n\n      if (typeof expandedFacets[facetName] === 'undefined' && defaultOpen === 'ALL') {\n        expandedFacets[facetName] = true;\n      }\n\n      if (defaultOpen === 'FIRST' && idx == 0) {\n        expandedFacets[facetName] = true;\n      }\n\n      var isExpanded = _this.isExpandedFacet(facetName);\n\n      var facetSearchTxt = _this.getSearchFacetsText(facetName) || '';\n      var selectedFacet = selectedFacets[facetName];\n\n      if (facetType === 'text') {\n        facetsWrapper.innerHTML += _this.renderTextFacet(facetItem, selectedFacet, isExpanded, facetSearchTxt);\n      }\n\n      if (facetType === 'range') {\n        facetsWrapper.innerHTML += _this.renderRangeFacet(facetItem, isExpanded, '');\n      }\n\n      if (facetType === 'category') {\n        facetsWrapper.innerHTML += _this.renderMultiLevelFacet(facetItem, isExpanded, facetSearchTxt);\n      }\n\n      _this.viewState.facetElementMap[facetName] = facetName;\n    });\n  });\n  this.options.facet.onFacetLoad.bind(this)(allFacets);\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/./src/modules/facets/renderFacets.js?");

/***/ }),

/***/ "./src/modules/facets/renderMultiLevelFacet.js":
/*!*****************************************************!*\
  !*** ./src/modules/facets/renderMultiLevelFacet.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (bucketedFacet, isExpanded) {\n  var bucketedUi = \"\";\n  var self = this;\n  var _this$cssList = this.cssList,\n      openFacet = _this$cssList.openFacet,\n      closeFacet = _this$cssList.closeFacet;\n  var facetName = bucketedFacet.facetName;\n  var facet = this.options.facet;\n  var isCollapsible = facet.isCollapsible;\n  var breadCrumb = this.getBreadCrumbsList(facetName);\n  var valueUI = self.options.facet.multiLevelFacetTemplate.bind(this)(bucketedFacet, breadCrumb, \"\", facet);\n  bucketedUi += self.options.facet.facetTemplate.bind(self)(bucketedFacet, valueUI, isExpanded, null, facet);\n  var styles = isExpanded ? openFacet : closeFacet;\n\n  if (!isCollapsible) {\n    styles = \"\";\n  }\n\n  return \"<div class=\\\"\".concat(facetName, \" UNX-facet-item-d UNX-multilivel-facets-block UNX-multilevel-block \").concat(styles, \"\\\">\").concat(bucketedUi, \"</div>\");\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/./src/modules/facets/renderMultiLevelFacet.js?");

/***/ }),

/***/ "./src/modules/facets/renderRangeFacet.js":
/*!************************************************!*\
  !*** ./src/modules/facets/renderRangeFacet.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (rangeFacet, isExpanded) {\n  var facetName = rangeFacet.facetName;\n  var _this$cssList = this.cssList,\n      openFacet = _this$cssList.openFacet,\n      closeFacet = _this$cssList.closeFacet;\n  var facet = this.options.facet;\n  var isCollapsible = facet.isCollapsible;\n  var selectedRanges = this.state.rangeFacet;\n  var selectedRange = selectedRanges[facetName] || [];\n  var facetUI = this.options.facet.rangeTemplate.bind(this)(rangeFacet, selectedRange, facet);\n  var rangeUi = this.options.facet.facetTemplate.bind(this)(rangeFacet, facetUI, isExpanded, null, facet);\n  var styles = isExpanded ? openFacet : closeFacet;\n\n  if (!isCollapsible) {\n    styles = \"\";\n  }\n\n  return \"<div class=\\\"\".concat(facetName, \" UNX-facet-item-d range-facets-block \").concat(styles, \"\\\">\").concat(rangeUi, \"</div>\");\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/./src/modules/facets/renderRangeFacet.js?");

/***/ }),

/***/ "./src/modules/facets/renderRangeFacets.js":
/*!*************************************************!*\
  !*** ./src/modules/facets/renderRangeFacets.js ***!
  \*************************************************/
/*! exports provided: renderRangeFacets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderRangeFacets\", function() { return renderRangeFacets; });\nvar renderRangeFacets = function renderRangeFacets(range, selectedRange, facet) {\n  var _this = this;\n\n  var facetName = range.facetName,\n      values = range.values;\n  var valueUI = \"\";\n  var facetClass = facet.facetClass,\n      selectedFacetClass = facet.selectedFacetClass,\n      applyMultipleFilters = facet.applyMultipleFilters,\n      applyButtonText = facet.applyButtonText,\n      clearButtonText = facet.clearButtonText;\n  var selected = selectedRange.length > 0 ? true : false;\n  values.forEach(function (item) {\n    var from = item.from,\n        end = item.end;\n\n    var isSelected = _this.isSelectedRange(facetName, item);\n\n    var btnCss = isSelected ? \"UNX-selected-facet-btn \".concat(facetClass, \" \").concat(selectedFacetClass) : \"\".concat(facetClass);\n    valueUI += [\"<button class=\\\"\".concat(btnCss, \" UNX-range-facet UNX-change-facet\\\" data-action=\\\"setRange\\\" data-facet-name=\\\"\").concat(facetName, \"\\\" data-start=\\\"\").concat(from.dataId, \"\\\" data-end=\\\"\").concat(end.dataId, \"\\\" >\"), \"<span class=\\\"UNX-facet-text\\\">\".concat(from.name, \"  -  \").concat(end.name, \"</span>\"), \"<span class=\\\"UNX-facet-count\\\">(\".concat(from.count, \")</span>\"), \"</button>\"].join('');\n  });\n  var clearBtn = \"\";\n  var applyBtn = \"\";\n\n  if (selected) {\n    if (applyMultipleFilters) {\n      applyBtn = \"<button class=\\\"UNX-default-btn \".concat(facetClass, \" UNX-facet-primary\\\" data-action=\\\"applyRange\\\"> \").concat(applyButtonText, \"</button>\");\n    }\n\n    clearBtn = \"<button class=\\\"UNX-default-btn UNX-facet-clear  \".concat(facetClass, \"\\\" data-action=\\\"clearRangeFacets\\\">\").concat(clearButtonText, \"</button>\");\n  }\n\n  return [\"<div class=\\\"UNX-range-wrapper\\\">\", valueUI, \"<div class=\\\"UNX-price-action-row\\\">\", applyBtn, clearBtn, \"<div>\", \"</div>\"].join('');\n};\n\n\n\n//# sourceURL=webpack://UnbxdSearch/./src/modules/facets/renderRangeFacets.js?");

/***/ }),

/***/ "./src/modules/facets/renderSelectedFacets.js":
/*!****************************************************!*\
  !*** ./src/modules/facets/renderSelectedFacets.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var _this = this;\n\n  var selectedFacetsInfo = this.getSelectedFacets();\n  var selectedRanges = this.getSelectedRanges();\n  var k = Object.keys(selectedFacetsInfo);\n  var selectedUi = \"\";\n  var _this$options = this.options,\n      selectedFacets = _this$options.selectedFacets,\n      facet = _this$options.facet;\n  var itemTemplate = facet.selectedFacetItemTemplate ? facet.selectedFacetItemTemplate.bind(this) : selectedFacets.itemTemplate.bind(this);\n\n  var _loop = function _loop(i) {\n    var j = k[i];\n\n    var isCategoryFacet = _this.isCategoryFacet(j);\n\n    var vals = selectedFacetsInfo[j];\n\n    if (!isCategoryFacet) {\n      vals.forEach(function (item) {\n        var name = item.name,\n            count = item.count,\n            dataId = item.dataId;\n        selectedUi += itemTemplate({\n          facetName: j,\n          facetType: \"text\"\n        }, {\n          name: name,\n          dataId: dataId ? dataId : name,\n          count: count ? count : 0\n        }, facet, selectedFacets);\n      });\n    }\n  };\n\n  for (var i = 0; i < k.length; i++) {\n    _loop(i);\n  }\n\n  var r = Object.keys(selectedRanges);\n\n  var _loop2 = function _loop2(j) {\n    var l = r[j];\n    var val = selectedRanges[l];\n    val.forEach(function (rEl) {\n      selectedUi += itemTemplate({\n        facetName: l,\n        facetType: \"range\"\n      }, {\n        name: rEl.replace(/[^\\w\\s]/gi, ''),\n        dataId: rEl\n      }, facet, selectedFacets);\n    });\n  };\n\n  for (var j = 0; j < r.length; j++) {\n    _loop2(j);\n  }\n\n  var selectedFacetTemp = facet.selectedFacetTemplate ? facet.selectedFacetTemplate.bind(this) : selectedFacets.template.bind(this);\n  this.selectedFacetWrappers.forEach(function (wrapper) {\n    wrapper.innerHTML = selectedFacetTemp(selectedUi, facet, selectedFacets);\n  });\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/./src/modules/facets/renderSelectedFacets.js?");

/***/ }),

/***/ "./src/modules/facets/renderTextFacet.js":
/*!***********************************************!*\
  !*** ./src/modules/facets/renderTextFacet.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (facetItem, selectedFacet, isExpanded, facetSearchTxt, onlyValues) {\n  var valuesUI = [];\n  var facetName = facetItem.facetName,\n      _facetItem$values = facetItem.values,\n      values = _facetItem$values === void 0 ? [] : _facetItem$values;\n  var _this$cssList = this.cssList,\n      openFacet = _this$cssList.openFacet,\n      closeFacet = _this$cssList.closeFacet;\n  var self = this;\n  var facet = this.options.facet;\n  var isCollapsible = facet.isCollapsible;\n\n  if (values.length > 0) {\n    valuesUI = values.map(function (value, index) {\n      var dataId = value.dataId;\n      var selected = false;\n\n      if (selectedFacet) {\n        selected = selectedFacet.some(function (facet) {\n          return facet.dataId === dataId;\n        });\n      }\n\n      if (selected) {\n        facetItem.isSelected = true;\n        return self.options.facet.facetItemTemplate.bind(self)(facetItem, value, facetSearchTxt, facet);\n      } else {\n        facetItem.isSelected = false;\n        return self.options.facet.facetItemTemplate.bind(self)(facetItem, value, facetSearchTxt);\n      }\n    });\n  }\n\n  if (onlyValues) {\n    return valuesUI.join('');\n  }\n\n  var facetUI = this.options.facet.facetTemplate.bind(this)(facetItem, valuesUI.join(''), isExpanded, facetSearchTxt, facet);\n  var styles = isExpanded ? openFacet : closeFacet;\n\n  if (!isCollapsible) {\n    styles = \"\";\n  }\n\n  return \"<div class=\\\"UNX-facet-item-d \".concat(facetName, \" \").concat(styles, \"\\\">\").concat(facetUI, \"</div>\");\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/./src/modules/facets/renderTextFacet.js?");

/***/ }),

/***/ "./src/modules/facets/setFacetMethods.js":
/*!***********************************************!*\
  !*** ./src/modules/facets/setFacetMethods.js ***!
  \***********************************************/
/*! exports provided: default, findChangedFacet, clearAllFacets, isExpandedFacet, setSearchFacetsText, getSearchFacetsText, reRenderTextFacet, renderTextFacet, renderRangeFacet, renderMultiLevelFacet, renderFacets, renderSelectedFacets, checkFacets, setRangeSlider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return setFacets; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearAllFacets\", function() { return clearAllFacets; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isExpandedFacet\", function() { return isExpandedFacet; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setSearchFacetsText\", function() { return setSearchFacetsText; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSearchFacetsText\", function() { return getSearchFacetsText; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reRenderTextFacet\", function() { return reRenderTextFacet; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkFacets\", function() { return checkFacets; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setRangeSlider\", function() { return setRangeSlider; });\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ \"./src/modules/facets/actions.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"findChangedFacet\", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__[\"findChangedFacet\"]; });\n\n/* harmony import */ var _renderFacets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderFacets */ \"./src/modules/facets/renderFacets.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"renderFacets\", function() { return _renderFacets__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _renderTextFacet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderTextFacet */ \"./src/modules/facets/renderTextFacet.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"renderTextFacet\", function() { return _renderTextFacet__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _renderSelectedFacets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderSelectedFacets */ \"./src/modules/facets/renderSelectedFacets.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"renderSelectedFacets\", function() { return _renderSelectedFacets__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _renderMultiLevelFacet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./renderMultiLevelFacet */ \"./src/modules/facets/renderMultiLevelFacet.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"renderMultiLevelFacet\", function() { return _renderMultiLevelFacet__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n/* harmony import */ var _renderRangeFacet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./renderRangeFacet */ \"./src/modules/facets/renderRangeFacet.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"renderRangeFacet\", function() { return _renderRangeFacet__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; });\n\n\n\n\n\n\n\n\nvar isSelectedRange = function isSelectedRange(facetName, range) {\n  var selections = this.getSelectedRanges(facetName);\n  var from = range.from,\n      end = range.end;\n  var aR = \"[\".concat(from.name, \" TO \").concat(end.name, \"]\");\n\n  if (selections && selections.indexOf(aR) >= 0) {\n    return true;\n  }\n\n  return false;\n};\n\nvar clearAllFacets = function clearAllFacets() {\n  this.state.selectedFacets = {};\n  this.state.rangeFacet = [];\n  this.state.categoryFilter = {};\n};\n\nvar isExpandedFacet = function isExpandedFacet(facetName) {\n  var expandedFacets = this.viewState.expandedFacets;\n  var isFound = false;\n\n  if (expandedFacets[facetName] === true) {\n    isFound = true;\n  }\n\n  return isFound;\n};\n\nvar setSearchFacetsText = function setSearchFacetsText(facet, value) {\n  this.viewState.searchFacetsText[facet] = value;\n  this.reRenderTextFacet(facet);\n};\n\nvar getSearchFacetsText = function getSearchFacetsText(facet) {\n  return this.viewState.searchFacetsText[facet] || \"\";\n};\n\nvar reRenderTextFacet = function reRenderTextFacet(facetName) {\n  var facetClass = this.options.facet.facetClass;\n  var facetSearchTxt = this.getSearchFacetsText(facetName) || \"\";\n  var items = document.querySelectorAll(\".\".concat(facetName, \" .\").concat(facetClass));\n  items.forEach(function (item) {\n    var _ref = item.dataset || {},\n        id = _ref.id;\n\n    if (id && id.toUpperCase().indexOf(facetSearchTxt.toUpperCase()) >= 0) {\n      item.classList.remove(\"UNX-search-hidden\");\n    } else {\n      item.classList.add(\"UNX-search-hidden\");\n    }\n  });\n};\n\nvar setRangeSlider = function setRangeSlider(value) {\n  this.setRangeFacet(value);\n  var facetName = value.facetName,\n      start = value.start,\n      end = value.end;\n  this.getCallbackActions({\n    facetName: facetName,\n    facetAction: 'changeFacet',\n    id: facetName\n  }, 'facetClick');\n  this.viewState.lastAction = \"updatedRangeSlider\";\n  this.setPageStart(0);\n  this.applyRangeFacet();\n};\n\nvar checkFacets = function checkFacets() {\n  var applyMultipleFilters = this.options.facet.applyMultipleFilters;\n\n  if (applyMultipleFilters) {\n    var qS = this.getStateFromUrl();\n    var selectedFacets = qS.selectedFacets,\n        selectedRanges = qS.selectedRanges;\n    this.state.selectedFacets = selectedFacets;\n    this.state.selectedRanges = selectedRanges;\n  }\n};\n\nvar setFacets = function setFacets(prototype) {\n  prototype = Object.assign(prototype, {\n    findChangedFacet: _actions__WEBPACK_IMPORTED_MODULE_0__[\"findChangedFacet\"],\n    isSelectedRange: isSelectedRange,\n    clearAllFacets: clearAllFacets,\n    isExpandedFacet: isExpandedFacet,\n    setSearchFacetsText: setSearchFacetsText,\n    getSearchFacetsText: getSearchFacetsText,\n    reRenderTextFacet: reRenderTextFacet,\n    renderTextFacet: _renderTextFacet__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    renderRangeFacet: _renderRangeFacet__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    renderMultiLevelFacet: _renderMultiLevelFacet__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    renderFacets: _renderFacets__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    renderSelectedFacets: _renderSelectedFacets__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    checkFacets: checkFacets,\n    setRangeSlider: setRangeSlider\n  });\n};\n\n\n\n//# sourceURL=webpack://UnbxdSearch/./src/modules/facets/setFacetMethods.js?");

/***/ }),

/***/ "./src/modules/facets/ui.js":
/*!**********************************!*\
  !*** ./src/modules/facets/ui.js ***!
  \**********************************/
/*! exports provided: selectedFacetUI, facetUIElem, facetItemUiElem, selectedFacetItemTemplateUI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectedFacetUI\", function() { return selectedFacetUI; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"facetUIElem\", function() { return facetUIElem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"facetItemUiElem\", function() { return facetItemUiElem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectedFacetItemTemplateUI\", function() { return selectedFacetItemTemplateUI; });\nfunction selectedFacetItemTemplateUI(selectedFacet, selectedFacetItem, facetConfig, selectedFacetsConfig) {\n  var facetName = selectedFacet.facetName,\n      facetType = selectedFacet.facetType;\n  var name = selectedFacetItem.name,\n      count = selectedFacetItem.count,\n      dataId = selectedFacetItem.dataId;\n  var _this$options$facet = this.options.facet,\n      facetClass = _this$options$facet.facetClass,\n      selectedFacetClass = _this$options$facet.selectedFacetClass,\n      removeFacetsSelectorClass = _this$options$facet.removeFacetsSelectorClass;\n  var UNX_uFilter = this.testIds.UNX_uFilter;\n  var action = \"deleteSelectedFacetValue\";\n\n  if (facetType === \"range\") {\n    action = \"deleteSelectedRange\";\n  }\n\n  var css = \" \".concat(facetClass, \" \").concat(selectedFacetClass, \" \");\n  return [\"<div class=\\\"UNX-selected-facets-wrap\\\">\", \"<button data-test-id=\\\"\".concat(UNX_uFilter, \"\\\" class=\\\"UNX-selected-facet-btn UNX-change-facet \").concat(css, \"\\\" data-facet-name=\\\"\").concat(facetName, \"\\\" data-facet-action=\\\"\").concat(action, \"\\\" data-id=\\\"\").concat(dataId, \"\\\">\"), \"<span class=\\\"UNX-facet-text\\\">\".concat(name, \"</span> <span class=\\\"UNX-facet-count\\\">(\").concat(count, \")</span>\"), \"</button>\", \"<button class=\\\"UNX-delete-facet \".concat(removeFacetsSelectorClass, \" \").concat(css, \"\\\" data-id=\\\"\").concat(dataId, \"\\\" data-facet-action=\\\"\").concat(action, \"\\\" data-facet-name=\\\"\").concat(facetName, \"\\\">x</button></div>\")].join('');\n}\n\nfunction selectedFacetUI(selections, facet, selectedFacetsConfig) {\n  var clearAllText = facet.clearAllText,\n      clearFacetsSelectorClass = facet.clearFacetsSelectorClass;\n  var selectedFClass = this.selectedFacetClass ? this.selectedFacetClass : selectedFacetsConfig.selectedFacetClass;\n\n  if (selections.length > 0) {\n    return [\"<div class=\\\"UNX-facets-selections\\\">\", \"<h5 class=\\\"UNX-selected-facet-header\\\">Selected Filters</h5>\", \"<div class=\\\"UNX-selected-facets-inner\\\">\".concat(selections, \"</div>\"), \"<button class=\\\"\".concat(clearFacetsSelectorClass, \" \").concat(selectedFClass, \"\\\" data-facet-action=\\\"clearAllFacets\\\">\").concat(clearAllText, \"</button>\"), \"</div>\"].join('');\n  } else {\n    return \"\";\n  }\n}\n\nfunction facetItemUiElem(facet, value, facetSearchTxt) {\n  var facetName = facet.facetName,\n      isSelected = facet.isSelected;\n  var name = value.name,\n      count = value.count,\n      dataId = value.dataId;\n  var _this$options$facet2 = this.options.facet,\n      facetClass = _this$options$facet2.facetClass,\n      selectedFacetClass = _this$options$facet2.selectedFacetClass;\n  var UNX_uFilter = this.testIds.UNX_uFilter;\n\n  if (facetSearchTxt && facetSearchTxt.length > 0) {\n    if (name.toUpperCase().indexOf(facetSearchTxt.toUpperCase()) < 0) {\n      facetClass += ' UNX-search-hidden';\n    }\n  }\n\n  var action = \"changeFacet\";\n\n  if (isSelected) {\n    facetClass += \" \".concat(selectedFacetClass);\n    action = \"deleteFacetValue\";\n  }\n\n  return [\"<button data-test-id=\\\"\".concat(UNX_uFilter, \"\\\" data-facet-name=\\\"\").concat(facetName, \"\\\" data-facet-action=\\\"\").concat(action, \"\\\" class=\\\"UNX-change-facet \").concat(facetClass, \"\\\" data-id=\\\"\").concat(dataId, \"\\\">\"), \"<span class=\\\"UNX-facet-text\\\">\".concat(name, \"</span> <span class=\\\"UNX-facet-count\\\">(\").concat(count, \")</span>\"), \"</button>\"].join('');\n}\n\nfunction facetUIElem(facetObj, children, isExpanded, facetSearchTxt, facet) {\n  var displayName = facetObj.displayName,\n      facetName = facetObj.facetName,\n      multiLevelField = facetObj.multiLevelField,\n      facetType = facetObj.facetType,\n      values = facetObj.values;\n  var facetClass = facet.facetClass,\n      applyMultipleFilters = facet.applyMultipleFilters,\n      isCollapsible = facet.isCollapsible,\n      isSearchable = facet.isSearchable,\n      searchPlaceHolder = facet.searchPlaceHolder,\n      textFacetWrapper = facet.textFacetWrapper,\n      enableViewMore = facet.enableViewMore,\n      viewMoreText = facet.viewMoreText,\n      viewMoreLimit = facet.viewMoreLimit,\n      applyButtonText = facet.applyButtonText,\n      clearButtonText = facet.clearButtonText;\n  var _this$options = this.options,\n      actionBtnClass = _this$options.actionBtnClass,\n      actionChangeClass = _this$options.actionChangeClass;\n  var _this$cssList = this.cssList,\n      openBtn = _this$cssList.openBtn,\n      closeBtn = _this$cssList.closeBtn;\n  var viewMoreUi = \"\";\n  var viewMoreCss = \"\";\n  var selected = this.getSelectedFacets()[facetName];\n  var isFtr = selected && selected.length > 0 ? true : false;\n\n  if (enableViewMore && facetType === \"text\" && values.length > viewMoreLimit) {\n    viewMoreCss = \"UNX-view-more\";\n    viewMoreUi = \"<div class=\\\"UNX-view-more-row \\\"><button class=\\\"\".concat(actionBtnClass, \"\\\" data-facet-name=\\\"\").concat(facetName, \"\\\" data-action=\\\"viewMore\\\" data-id=\\\"\").concat(viewMoreText[0], \"\\\">\").concat(viewMoreText[0], \"</button></div>\");\n  }\n\n  var clearUI = \"\";\n  var applyBtn = \"\";\n\n  if (isFtr) {\n    clearUI = \"<button class=\\\"UNX-facet-clear \".concat(facetClass, \" \\\"data-facet-action=\\\"deleteFacet\\\" data-facet-name=\\\"\").concat(facetName, \"\\\">\").concat(clearButtonText, \"</button>\");\n  }\n\n  if (applyMultipleFilters && isFtr) {\n    applyBtn = \"<button class=\\\"UNX-facet-primary \".concat(facetClass, \" \\\"data-facet-action=\\\"applyFacets\\\" >\").concat(applyButtonText, \"</button>\");\n  }\n\n  var collapsibleUI = \"\";\n  var searchInput = \"\";\n\n  if (isCollapsible) {\n    if (isExpanded) {\n      collapsibleUI = \"<div class=\\\"UNX-facet-header \".concat(actionBtnClass, \" UNX-facet-open\\\"  data-facet-name=\\\"\").concat(facetName, \"\\\" data-facet-action=\\\"facetClose\\\"> <h3>\").concat(displayName, \"</h3> </div>\");\n    } else {\n      collapsibleUI = \"<div class=\\\"UNX-facet-header \".concat(actionBtnClass, \" UNX-facet-close\\\"  data-facet-name=\\\"\").concat(facetName, \"\\\" data-facet-action=\\\"facetOpen\\\"> <h3>\").concat(displayName, \"</h3></div>\");\n    }\n  }\n\n  if (isSearchable && facetSearchTxt !== null) {\n    searchInput = \"<div class=\\\"UNX-searchable-facets\\\"><label class=\\\"UNX-hidden\\\" for=\\\"\".concat(facetName, \"_searchBox\\\">\").concat(searchPlaceHolder, \"</label><input  id=\\\"\").concat(facetName, \"_searchBox\\\" name=\\\"\").concat(facetName, \"_searchBox\\\" data-test-id=\\\"\").concat(this.testIds.UNX_searchFacets, \"\\\" class=\\\"UNX-facet-search \").concat(actionChangeClass, \"\\\" value=\\\"\").concat(facetSearchTxt, \"\\\"  data-facet-name=\\\"\").concat(facetName, \"\\\" data-facet-action=\\\"searchFacets\\\" type=\\\"text\\\" placeholder=\\\"\").concat(searchPlaceHolder, \"\\\"/></div>\");\n  }\n\n  return [\"<div class=\\\"UNX-text-facet-wrap\\\">\", collapsibleUI, \"<div class=\\\"UNX-facets-all\\\">\", searchInput, \"<div class=\\\"UNX-facets \".concat(textFacetWrapper, \" \").concat(viewMoreCss, \"\\\">\").concat(children, \"</div>\"), viewMoreUi, \"<div class=\\\"UNX-facet-footer\\\">\".concat(applyBtn, \" \").concat(clearUI, \"</div>\"), \"</div>\", \"</div>\"].join('');\n}\n\n\n\n//# sourceURL=webpack://UnbxdSearch/./src/modules/facets/ui.js?");

/***/ }),

/***/ "./src/modules/input/actions.js":
/*!**************************************!*\
  !*** ./src/modules/input/actions.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return setInputValue; });\nvar setInputValue = function setInputValue(e) {\n  var val = this.options.searchBoxEl.value;\n\n  if (!val.replace(/\\s/g, '').length) {\n    return false;\n  }\n\n  this.options.productType = \"SEARCH\";\n  val = val.indexOf(\"#\") === 0 ? val.replace(\"#\", \"\") : val;\n\n  if (val) {\n    this.resetAll();\n    this.changeInput(val, this.events.changeInput);\n    this.options.products.productType = \"SEARCH\";\n    this.viewState.loadedFromSuggestion = false;\n    this.state.selectedSort = \"\";\n    this.setPageStart(0);\n    this.resetViewState();\n    this.getResults();\n  } else {\n    this.searchResultsWrapper.innerHTML = null;\n  }\n};\n\n\n\n//# sourceURL=webpack://UnbxdSearch/./src/modules/input/actions.js?");

/***/ }),

/***/ "./src/modules/input/setInput.js":
/*!***************************************!*\
  !*** ./src/modules/input/setInput.js ***!
  \***************************************/
/*! exports provided: default, setInputValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return setInput; });\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ \"./src/modules/input/actions.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"setInputValue\", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\nvar setInput = function setInput(prototype) {\n  prototype = Object.assign(prototype, {\n    setInputValue: _actions__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  });\n};\n\n\n\n//# sourceURL=webpack://UnbxdSearch/./src/modules/input/setInput.js?");

/***/ }),

/***/ "./src/modules/pageSize/actions.js":
/*!*****************************************!*\
  !*** ./src/modules/pageSize/actions.js ***!
  \*****************************************/
/*! exports provided: onClickPageSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onClickPageSize\", function() { return onClickPageSize; });\nvar onClickPageSize = function onClickPageSize(e) {\n  var elem = e.target;\n  this.viewState.lastDidYouMean = \"\";\n  var selected = this.options.pagesize.action === \"click\" ? elem : elem.options[elem.selectedIndex];\n  var val = selected.id;\n  var pageSizeChange = this.events.pageSizeChange;\n\n  if (val) {\n    this.checkFacets();\n    this.setPageSize(Number(val));\n    this.getResults.bind(this)();\n    this.options.onEvent(this, pageSizeChange, {\n      count: val\n    });\n  }\n};\n\n\n\n//# sourceURL=webpack://UnbxdSearch/./src/modules/pageSize/actions.js?");

/***/ }),

/***/ "./src/modules/pageSize/pageSizeView.js":
/*!**********************************************!*\
  !*** ./src/modules/pageSize/pageSizeView.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar pageSizeUi = function pageSizeUi(selected, pagesize) {\n  var UNX_pagesize = this.testIds.UNX_pagesize;\n  var ui = \"<label class=\\\"UNX-hidden\\\" for=\\\"unxPageSize\\\">Sort By</label><select id=\\\"unxPageSize\\\" name=\\\"unxPageSize\\\" class=\\\"UNX-select-pagesize \".concat(pagesize.pageSizeClass, \"\\\">\");\n  pagesize.options.forEach(function (opt, i) {\n    var tId = \"data-test-id=\\\"\".concat(UNX_pagesize).concat(i + 1, \"\\\"\");\n\n    if (selected == opt) {\n      ui += \"<option selected \".concat(tId, \" class=\\\"\").concat(pagesize.selectedPageSizeClass, \"\\\" id=\\\"\").concat(opt, \"\\\">\").concat(opt, \"</option>\");\n    } else {\n      ui += \"<option \".concat(tId, \" id=\\\"\").concat(opt, \"\\\">\").concat(opt, \"</option>\");\n    }\n  });\n  ui += \"</select>\";\n  return \"<div class=\\\"UNX-pagesize-block\\\">\".concat(ui, \"</div>\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (pageSizeUi);\n\n//# sourceURL=webpack://UnbxdSearch/./src/modules/pageSize/pageSizeView.js?");

/***/ }),

/***/ "./src/modules/pageSize/setPageSize.js":
/*!*********************************************!*\
  !*** ./src/modules/pageSize/setPageSize.js ***!
  \*********************************************/
/*! exports provided: default, renderPageSize, pageSizeUi, onClickPageSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return setPageSize; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderPageSize\", function() { return renderPageSize; });\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ \"./src/modules/pageSize/actions.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"onClickPageSize\", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__[\"onClickPageSize\"]; });\n\n/* harmony import */ var _pageSizeView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageSizeView */ \"./src/modules/pageSize/pageSizeView.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"pageSizeUi\", function() { return _pageSizeView__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\nvar renderPageSize = function renderPageSize() {\n  var pagesize = this.options.pagesize;\n  var selected = pagesize.pageSize;\n  var qParams = this.getQueryParams();\n\n  if (qParams) {\n    selected = this.state.pageSize;\n  }\n\n  var results = this.getSearchResults();\n\n  if (results && results.numberOfProducts === 0) {\n    this.pageSizeWrapper.innerHTML = \"\";\n  } else {\n    this.pageSizeWrapper.innerHTML = this.options.pagesize.template.bind(this)(selected, pagesize);\n  }\n};\n\nvar setPageSize = function setPageSize(prototype) {\n  prototype = Object.assign(prototype, {\n    pageSizeUi: _pageSizeView__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    onClickPageSize: _actions__WEBPACK_IMPORTED_MODULE_0__[\"onClickPageSize\"],\n    renderPageSize: renderPageSize\n  });\n};\n\n\n\n//# sourceURL=webpack://UnbxdSearch/./src/modules/pageSize/setPageSize.js?");

/***/ }),

/***/ "./src/modules/pagination/actions.js":
/*!*******************************************!*\
  !*** ./src/modules/pagination/actions.js ***!
  \*******************************************/
/*! exports provided: renderNewResults, paginationAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderNewResults\", function() { return renderNewResults; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"paginationAction\", function() { return paginationAction; });\nvar triggerNextPage = function triggerNextPage(context, next) {\n  context.viewState.lastAction = \"pagination\";\n  context.setPageStart(next);\n  context.getResults();\n  context.options.onEvent(context, context.events.pageNext, {\n    value: next\n  });\n};\n\nfunction renderNewResults(action) {\n  var pageInfo = this.getPaginationInfo();\n  var _this$options = this.options,\n      pagination = _this$options.pagination,\n      onEvent = _this$options.onEvent;\n  var start = pageInfo.start,\n      productsLn = pageInfo.productsLn,\n      numberOfProducts = pageInfo.numberOfProducts,\n      rows = pageInfo.rows,\n      isNext = pageInfo.isNext,\n      isPrev = pageInfo.isPrev;\n\n  if (pagination.type === \"CLICK_N_SCROLL\" || pagination.type === \"INFINITE_SCROLL\") {\n    var next = start + rows;\n\n    if (isNext) {\n      this.viewState.isInfiniteStarted = true;\n      triggerNextPage(this, next);\n    }\n  } else {\n    if (action === this.actions.next) {\n      var _next = start + rows;\n\n      if (isNext) {\n        triggerNextPage(this, _next);\n      }\n    }\n\n    if (action === this.actions.prev) {\n      var prev = start - rows;\n\n      if (isPrev) {\n        this.viewState.lastAction = \"pagination\";\n        triggerNextPage(this, prev);\n        onEvent(this, this.events.pagePrev, {\n          value: prev\n        });\n      }\n    }\n  }\n}\n\n;\n\nfunction paginationAction(e) {\n  var _e$target$dataset = e.target.dataset,\n      pageAction = _e$target$dataset.pageAction,\n      pageNo = _e$target$dataset.pageNo;\n  this.checkFacets();\n  this.viewState.lastDidYouMean = \"\";\n\n  if (pageAction === 'paginate') {\n    this.viewState.lastAction = \"pagination\";\n    this.setPageStart(pageNo);\n    this.getResults();\n  } else {\n    this.renderNewResults(pageAction);\n  }\n}\n\n\n\n//# sourceURL=webpack://UnbxdSearch/./src/modules/pagination/actions.js?");

/***/ }),

/***/ "./src/modules/pagination/clickNScrollView.js":
/*!****************************************************!*\
  !*** ./src/modules/pagination/clickNScrollView.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (pageData, pagination) {\n  var pageClass = pagination.pageClass;\n  return \"<div class=\\\"UNX-click-scroll\\\"><button data-test-id=\\\"\".concat(this.testIds.UNX_loadMore, \"\\\" class=\\\"UNX-click-n-scroll \").concat(pageClass, \"\\\">Load More</button></div>\");\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/./src/modules/pagination/clickNScrollView.js?");

/***/ }),

/***/ "./src/modules/pagination/fixedPaginationView.js":
/*!*******************************************************!*\
  !*** ./src/modules/pagination/fixedPaginationView.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar paginationUI = function paginationUI(paginationData, pagination) {\n  if (!paginationData) {\n    return \"\";\n  }\n\n  var currentPage = paginationData.currentPage,\n      isNext = paginationData.isNext,\n      isPrev = paginationData.isPrev,\n      noOfPages = paginationData.noOfPages,\n      productsLn = paginationData.productsLn,\n      numberOfProducts = paginationData.numberOfProducts,\n      rows = paginationData.rows;\n  var pageClass = pagination.pageClass,\n      selectedPageClass = pagination.selectedPageClass,\n      pageLimit = pagination.pageLimit;\n  var UNX_pageNumber = this.testIds.UNX_pageNumber;\n\n  if (numberOfProducts <= productsLn) {\n    return \"\";\n  }\n\n  var nextBtn = \"<button class=\\\"UNX-next-btn UNX-page-next \".concat(pageClass, \"\\\" data-page-action=\\\"next\\\">></button>\");\n  var prevBtn = \"<button class=\\\"UNX-prev-btn UNX-page-prev \".concat(pageClass, \"\\\" data-page-action=\\\"prev\\\"><</button>\");\n  var pageNumbers = \"\";\n  var pages = noOfPages < pageLimit ? noOfPages : pageLimit;\n  var startPoint = 1;\n  var r = Math.ceil(pageLimit / 2);\n  var point = currentPage - r;\n\n  if (point > 0) {\n    startPoint = point;\n    pages = currentPage + r;\n  }\n\n  var ls = currentPage + r;\n\n  if (ls >= noOfPages) {\n    var diff = ls - noOfPages;\n    startPoint = startPoint - diff;\n\n    if (startPoint <= 0) {\n      startPoint = 1;\n    }\n\n    pages = noOfPages;\n  }\n\n  for (var i = startPoint; i <= pages; i++) {\n    var tId = \"\".concat(UNX_pageNumber).concat(i);\n    var pageClassSelected = i === currentPage ? selectedPageClass : '';\n    pageNumbers += \"<button data-test-id=\\\"\".concat(tId, \"\\\" data-page-action=\\\"paginate\\\" data-page-no=\\\"\").concat((i - 1) * rows, \"\\\" class=\\\"UNX-page-button \").concat(pageClass, \" \").concat(pageClassSelected, \"\\\">\").concat(i, \"</button>\");\n  }\n\n  if (!isNext) {\n    nextBtn = \"<button disabled class=\\\"UNX-next-btn UNX-page-next\\\">></button>\";\n  }\n\n  if (!isPrev) {\n    prevBtn = \"<button disabled class=\\\"UNX-prev-btn UNX-page-prev\\\"><</button>\";\n  }\n\n  return [\"<div class=\\\"UNX-pagination-block\\\">\", prevBtn, \"<div class=\\\"UNX-page-no-block\\\">\".concat(pageNumbers, \"</div>\"), nextBtn, \"</div>\"].join('');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (paginationUI);\n\n//# sourceURL=webpack://UnbxdSearch/./src/modules/pagination/fixedPaginationView.js?");

/***/ }),

/***/ "./src/modules/pagination/infiniteScroller.js":
/*!****************************************************!*\
  !*** ./src/modules/pagination/infiniteScroller.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction getScrollXY() {\n  var scrOfX = 0;\n  var scrOfY = 0;\n\n  if (typeof window.pageYOffset == 'number') {\n    //Netscape compliant\n    scrOfY = window.pageYOffset;\n    scrOfX = window.pageXOffset;\n  } else if (document.body && (document.body.scrollLeft || document.body.scrollTop)) {\n    //DOM compliant\n    scrOfY = document.body.scrollTop;\n    scrOfX = document.body.scrollLeft;\n  } else if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {\n    //IE6 standards compliant mode\n    scrOfY = document.documentElement.scrollTop;\n    scrOfX = document.documentElement.scrollLeft;\n  }\n\n  return [scrOfX, scrOfY];\n}\n\nfunction getDocHeight() {\n  var D = document;\n  return Math.max(D.body.scrollHeight, D.documentElement.scrollHeight, D.body.offsetHeight, D.documentElement.offsetHeight, D.body.clientHeight, D.documentElement.clientHeight);\n}\n\nvar onInfiniteScroll = function onInfiniteScroll() {\n  var heightDiffToTriggerNextPage = this.options.pagination.heightDiffToTriggerNextPage;\n\n  if (getDocHeight() - 20 <= getScrollXY()[1] + window.innerHeight + heightDiffToTriggerNextPage) {\n    if (!this.viewState.isInfiniteStarted && !this.state.loading) {\n      this.viewState.lastAction = \"pagination\";\n      this.renderNewResults('next');\n    }\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (onInfiniteScroll);\n\n//# sourceURL=webpack://UnbxdSearch/./src/modules/pagination/infiniteScroller.js?");

/***/ }),

/***/ "./src/modules/pagination/paginationView.js":
/*!**************************************************!*\
  !*** ./src/modules/pagination/paginationView.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fixedPaginationView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fixedPaginationView */ \"./src/modules/pagination/fixedPaginationView.js\");\n/* harmony import */ var _clickNScrollView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clickNScrollView */ \"./src/modules/pagination/clickNScrollView.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (pageData) {\n  var pagination = this.options.pagination;\n  var type = pagination.type;\n\n  if (type === \"CLICK_N_SCROLL\") {\n    return _clickNScrollView__WEBPACK_IMPORTED_MODULE_1__[\"default\"].bind(this)(pageData, pagination);\n  }\n\n  if (type === \"FIXED_PAGINATION\") {\n    return _fixedPaginationView__WEBPACK_IMPORTED_MODULE_0__[\"default\"].bind(this)(pageData, pagination);\n  }\n\n  return \"\";\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/./src/modules/pagination/paginationView.js?");

/***/ }),

/***/ "./src/modules/pagination/renderPagination.js":
/*!****************************************************!*\
  !*** ./src/modules/pagination/renderPagination.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar renderPagination = function renderPagination() {\n  var pagination = this.options.pagination;\n  var type = pagination.type;\n  var paginationUI = \"\";\n\n  if (type !== 'INFINITE_SCROLL') {\n    var pageInfo = this.getPaginationInfo();\n\n    if (pageInfo) {\n      paginationUI = pagination.template.bind(this)(pageInfo);\n    }\n  }\n\n  return paginationUI;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderPagination);\n\n//# sourceURL=webpack://UnbxdSearch/./src/modules/pagination/renderPagination.js?");

/***/ }),

/***/ "./src/modules/pagination/setPagination.js":
/*!*************************************************!*\
  !*** ./src/modules/pagination/setPagination.js ***!
  \*************************************************/
/*! exports provided: default, renderPagination, renderNewResults, paginationAction, onInfiniteScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return setPagination; });\n/* harmony import */ var _renderPagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderPagination */ \"./src/modules/pagination/renderPagination.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"renderPagination\", function() { return _renderPagination__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _infiniteScroller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./infiniteScroller */ \"./src/modules/pagination/infiniteScroller.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"onInfiniteScroll\", function() { return _infiniteScroller__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ \"./src/modules/pagination/actions.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"renderNewResults\", function() { return _actions__WEBPACK_IMPORTED_MODULE_2__[\"renderNewResults\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"paginationAction\", function() { return _actions__WEBPACK_IMPORTED_MODULE_2__[\"paginationAction\"]; });\n\n\n\n\n\nvar setPagination = function setPagination(prototype) {\n  prototype = Object.assign(prototype, {\n    renderPagination: _renderPagination__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    renderNewResults: _actions__WEBPACK_IMPORTED_MODULE_2__[\"renderNewResults\"],\n    paginationAction: _actions__WEBPACK_IMPORTED_MODULE_2__[\"paginationAction\"],\n    onInfiniteScroll: _infiniteScroller__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  });\n};\n\n\n\n//# sourceURL=webpack://UnbxdSearch/./src/modules/pagination/setPagination.js?");

/***/ }),

/***/ "./src/modules/productViewType/actions.js":
/*!************************************************!*\
  !*** ./src/modules/productViewType/actions.js ***!
  \************************************************/
/*! exports provided: onPageViewTypeClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onPageViewTypeClick\", function() { return onPageViewTypeClick; });\n/* harmony import */ var _utils_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/extend */ \"./src/modules/utils/extend.js\");\n\n\nfunction onPageViewTypeClick(e) {\n  var elem = e.target;\n  var action = this.options.productView.action;\n  var productViewType = this.viewState.productViewType;\n  var selected = action === \"click\" ? elem : elem.options[elem.selectedIndex];\n  var dataSet = selected.dataset;\n  var viewAction = dataSet.viewAction;\n  this.checkFacets();\n\n  if (productViewType !== viewAction) {\n    this.viewState.productViewType = viewAction;\n    var extraParams = this.options.extraParams;\n    this.options.extraParams = Object(_utils_extend__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(true, {}, extraParams, {\n      \"viewType\": viewAction\n    });\n    this.setPageStart(0);\n    this.state.isBack = false;\n    this.viewState.lastAction = \"viewType\";\n    this.getResults.bind(this)();\n  }\n}\n\n\n\n//# sourceURL=webpack://UnbxdSearch/./src/modules/productViewType/actions.js?");

/***/ }),

/***/ "./src/modules/productViewType/index.js":
/*!**********************************************!*\
  !*** ./src/modules/productViewType/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar renderProductViewType = function renderProductViewType(selectedViewType, productViewType) {\n  var isDisabled = this.getSearchResults() ? false : true;\n  var selectedViewTypeClass = productViewType.selectedViewTypeClass,\n      viewTypeClass = productViewType.viewTypeClass;\n  var _this$testIds = this.testIds,\n      UNX_gridBtn = _this$testIds.UNX_gridBtn,\n      UNX_listBtn = _this$testIds.UNX_listBtn;\n  var listBtnCss = \"UNX-list-btn \".concat(viewTypeClass);\n  var gridBtnCss = \"UNX-grid-btn \".concat(viewTypeClass);\n  var gTAttr = \"data-test-id=\".concat(UNX_gridBtn);\n  var lTAttr = \"data-test-id=\".concat(UNX_listBtn);\n\n  if (selectedViewType === 'LIST') {\n    listBtnCss += \" \".concat(selectedViewTypeClass);\n  }\n\n  if (selectedViewType === 'GRID') {\n    gridBtnCss += \" \".concat(selectedViewTypeClass);\n  }\n\n  var listBtn = \"<button id=\\\"listBtn\\\" class=\\\"\".concat(listBtnCss, \"\\\" \").concat(lTAttr, \" data-view-action=\\\"LIST\\\" >List</button>\");\n  var gridBtn = \"<button \".concat(gTAttr, \" id=\\\"gridBtn\\\" class=\\\"\").concat(gridBtnCss, \"\\\" data-view-action=\\\"GRID\\\" >Grid</button>\");\n\n  if (isDisabled) {\n    listBtn = \"<button \".concat(lTAttr, \" id=\\\"listBtn\\\" disabled class=\\\"\").concat(listBtnCss, \" disabled-btn\\\" data-view-action=\\\"LIST\\\" >List</button>\");\n    gridBtn = \"<button \".concat(gTAttr, \" id=\\\"gridBtn\\\" disabled class=\\\"\").concat(gridBtnCss, \"  disabled-btn\\\"data-view-action=\\\"GRID\\\" >Grid</button>\");\n  }\n\n  return \"\".concat(listBtn, \" \").concat(gridBtn);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderProductViewType);\n\n//# sourceURL=webpack://UnbxdSearch/./src/modules/productViewType/index.js?");

/***/ }),

/***/ "./src/modules/productViewType/renderProductViewTypeUI.js":
/*!****************************************************************!*\
  !*** ./src/modules/productViewType/renderProductViewTypeUI.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction renderProductViewTypeUI() {\n  var productView = this.options.productView;\n\n  if (productView.el) {\n    var productViewType = this.viewState.productViewType;\n    var results = this.getSearchResults();\n\n    if (results && results.numberOfProducts === 0) {\n      this.productViewTypeWrapper.innerHTML = \"\";\n    } else {\n      this.productViewTypeWrapper.innerHTML = this.options.productView.template.bind(this)(productViewType, productView);\n    }\n  }\n}\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderProductViewTypeUI);\n\n//# sourceURL=webpack://UnbxdSearch/./src/modules/productViewType/renderProductViewTypeUI.js?");

/***/ }),

/***/ "./src/modules/productViewType/setProductViewType.js":
/*!***********************************************************!*\
  !*** ./src/modules/productViewType/setProductViewType.js ***!
  \***********************************************************/
/*! exports provided: default, onPageViewTypeClick, renderProductViewTypeUI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return setProductViewType; });\n/* harmony import */ var _renderProductViewTypeUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderProductViewTypeUI */ \"./src/modules/productViewType/renderProductViewTypeUI.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"renderProductViewTypeUI\", function() { return _renderProductViewTypeUI__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ \"./src/modules/productViewType/actions.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"onPageViewTypeClick\", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__[\"onPageViewTypeClick\"]; });\n\n\n\n\nvar setProductViewType = function setProductViewType(prototype) {\n  prototype = Object.assign(prototype, {\n    onPageViewTypeClick: _actions__WEBPACK_IMPORTED_MODULE_1__[\"onPageViewTypeClick\"],\n    renderProductViewTypeUI: _renderProductViewTypeUI__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  });\n};\n\n\n\n//# sourceURL=webpack://UnbxdSearch/./src/modules/productViewType/setProductViewType.js?");

/***/ }),

/***/ "./src/modules/searchResults/actions.js":
/*!**********************************************!*\
  !*** ./src/modules/searchResults/actions.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return onProductItemClick; });\nvar onProductItemClick = function onProductItemClick(e) {\n  var path = e.path || e.composedPath && e.composedPath();\n  var _this$options$product = this.options.products,\n      productItemClass = _this$options$product.productItemClass,\n      attributesMap = _this$options$product.attributesMap;\n  var id = productItemClass.replace(\".\", \"\");\n  var dataset = e.target.dataset;\n  var elem = path.find(function (item) {\n    var itemCss = item.className;\n    return itemCss.indexOf(id) >= 0;\n  });\n\n  var _ref = dataset || {},\n      action = _ref.action,\n      swatchId = _ref.swatchId;\n\n  if (action === this.actions.changeSwatch && swatchId) {\n    elem.querySelectorAll(\".UNX-img-wrapper\").forEach(function (imgBlock) {\n      var btnE = elem.querySelector(\".\".concat(imgBlock.id));\n\n      if (imgBlock.id === swatchId) {\n        imgBlock.classList.remove(\"UNX-swatch-hidden\");\n        elem.querySelector(\".\".concat(swatchId)).classList.add(\"UNX-selected-swatch\");\n      } else {\n        imgBlock.classList.add(\"UNX-swatch-hidden\");\n        btnE.classList.remove(\"UNX-selected-swatch\");\n      }\n    });\n    this.options.onEvent(this, dataset.action);\n    return false;\n  }\n\n  var product = null;\n  dataset = elem.dataset;\n\n  if (dataset.id) {\n    product = this.getProductByPropValue(attributesMap.unxId, dataset.id);\n  }\n\n  if (product && elem) {\n    product.prank = elem.dataset.prank;\n  }\n\n  this.options.products.onProductClick(product, e);\n  this.getCallbackActions(product, \"click\");\n};\n\n\n\n//# sourceURL=webpack://UnbxdSearch/./src/modules/searchResults/actions.js?");

/***/ }),

/***/ "./src/modules/searchResults/noResultsView.js":
/*!****************************************************!*\
  !*** ./src/modules/searchResults/noResultsView.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction renderNoResults(query) {\n  return this.options.noResults.template(query);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderNoResults);\n\n//# sourceURL=webpack://UnbxdSearch/./src/modules/searchResults/noResultsView.js?");

/***/ }),

/***/ "./src/modules/searchResults/searchResultsView.js":
/*!********************************************************!*\
  !*** ./src/modules/searchResults/searchResultsView.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar renderSearch = function renderSearch() {\n  var _this = this;\n\n  var searchResults = this.getSearchResults();\n\n  if (!searchResults) {\n    return \"\";\n  }\n\n  var products = searchResults.products;\n  var self = this;\n  var swatches = this.options.swatches;\n  var gridCount = this.options.products.gridCount;\n  var productViewType = this.viewState.productViewType;\n  var productsUI = \"\";\n  var idx = Number(this.state.startPageNo);\n  var swatchUI = \"\";\n\n  if (productViewType === \"GRID\" && gridCount && gridCount > 1) {\n    products.forEach(function (product, index) {\n      var row = index % gridCount;\n\n      if (row === 0) {\n        productsUI += \"<div class=\\\"UNX-row\\\">\";\n      }\n\n      var pRank = index + idx + 1;\n\n      var mappedProduct = _this.mapProductAttrs(product);\n\n      if (swatches.enabled) {\n        swatchUI = _this.renderSwatchBtns(product);\n      }\n\n      productsUI += self.options.products.template.bind(self)(mappedProduct, pRank, swatchUI, productViewType, _this.options.products);\n\n      if (row === gridCount - 1) {\n        productsUI += \"</div>\";\n      }\n    });\n  } else {\n    productsUI = products.map(function (product, index) {\n      var pRank = index + idx + 1;\n\n      var mappedProduct = _this.mapProductAttrs(product);\n\n      if (swatches.enabled) {\n        swatchUI = _this.renderSwatchBtns(product);\n      }\n\n      return self.options.products.template.bind(self)(mappedProduct, pRank, swatchUI, productViewType, _this.options.products);\n    }).join('');\n  }\n\n  return productsUI;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderSearch);\n\n//# sourceURL=webpack://UnbxdSearch/./src/modules/searchResults/searchResultsView.js?");

/***/ }),

/***/ "./src/modules/searchResults/setSearch.js":
/*!************************************************!*\
  !*** ./src/modules/searchResults/setSearch.js ***!
  \************************************************/
/*! exports provided: default, renderSearch, onProductItemClick, renderNoResults, mapProductAttrs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return setSearch; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mapProductAttrs\", function() { return mapProductAttrs; });\n/* harmony import */ var _searchResultsView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./searchResultsView */ \"./src/modules/searchResults/searchResultsView.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"renderSearch\", function() { return _searchResultsView__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ \"./src/modules/searchResults/actions.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"onProductItemClick\", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _noResultsView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./noResultsView */ \"./src/modules/searchResults/noResultsView.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"renderNoResults\", function() { return _noResultsView__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n\n\n\n\nvar mapProductAttrs = function mapProductAttrs(product) {\n  var products = this.options.products;\n  var attributesMap = products.attributesMap;\n  var attrArray = Object.keys(attributesMap);\n  attrArray.forEach(function (item) {\n    var pI = product[item];\n    var mI = attributesMap[item];\n\n    if (!pI) {\n      product[item] = product[mI];\n    }\n  });\n  return product;\n};\n\nvar setSearch = function setSearch(prototype) {\n  prototype = Object.assign(prototype, {\n    renderSearch: _searchResultsView__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    onProductItemClick: _actions__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    renderNoResults: _noResultsView__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    mapProductAttrs: mapProductAttrs\n  });\n};\n\n\n\n//# sourceURL=webpack://UnbxdSearch/./src/modules/searchResults/setSearch.js?");

/***/ }),

/***/ "./src/modules/searchResults/ui.js":
/*!*****************************************!*\
  !*** ./src/modules/searchResults/ui.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (product, idx, swatchUI, productViewType, products) {\n  var unxTitle = product.unxTitle,\n      unxImageUrl = product.unxImageUrl,\n      uniqueId = product.uniqueId,\n      unxStrikePrice = product.unxStrikePrice,\n      unxPrice = product.unxPrice,\n      unxDescription = product.unxDescription;\n  var productItemClass = products.productItemClass,\n      defaultImage = products.defaultImage;\n  var imgUrl = Array.isArray(unxImageUrl) ? unxImageUrl[0] : unxImageUrl;\n\n  if (!imgUrl) {\n    imgUrl = defaultImage;\n  }\n\n  var imagesUI = \"<div class=\\\"UNX-img-wrapper\\\"><img class=\\\"UNX-img-block\\\" alt=\\\"\".concat(unxTitle, \"\\\" src=\\\"\").concat(imgUrl, \"\\\"/></div>\");\n  var priceUI = \"<span class=\\\"UNX-sale-price\\\">\".concat(unxPrice, \"</span>\");\n  var strikeUi = \"\";\n\n  if (unxStrikePrice) {\n    strikeUi = \"<span class=\\\"UNX-strike-price\\\">\".concat(unxStrikePrice, \"<span>\");\n  }\n\n  var cardType = \"\";\n  var descUI = \"\";\n\n  if (productViewType === \"GRID\") {\n    cardType = \"UNX-grid-card\";\n  } else {\n    cardType = \"UNX-list-card\";\n    descUI = \"<p class=\\\"UNX-description\\\">\".concat(unxDescription, \"</p>\");\n  }\n\n  var swatchBtnUI = \"\";\n\n  var _ref = swatchUI || {},\n      btnList = _ref.btnList,\n      imgList = _ref.imgList;\n\n  if (btnList) {\n    swatchBtnUI = \"<div class=\\\"UNX-swatch-wrapper\\\">\".concat(btnList, \"</div>\");\n  }\n\n  if (imgList) {\n    imagesUI = imgList;\n  }\n\n  return [\"<div id=\\\"\".concat(uniqueId, \"\\\" data-id=\\\"\").concat(uniqueId, \"\\\" data-prank=\\\"\").concat(idx, \"\\\" data-item=\\\"product\\\" class=\\\"UNX-product-col \").concat(cardType, \" \").concat(productItemClass, \"\\\">\"),, \"<div class=\\\"UNX-images-block\\\">\".concat(imagesUI, \"</div>\"), \"<div class=\\\"UNX-product-content\\\">\", \"<h3 class=\\\"UNX-product-title\\\">\".concat(unxTitle, \"</h3>\"), swatchBtnUI, descUI, \"<div class=\\\"UNX-price-row\\\">\".concat(priceUI, \" \").concat(strikeUi, \"</div>\"), \"</div>\", \"</div>\"].join('');\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/./src/modules/searchResults/ui.js?");

/***/ }),

/***/ "./src/modules/sort/actions.js":
/*!*************************************!*\
  !*** ./src/modules/sort/actions.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return sortAction; });\nfunction sortAction(e) {\n  var elem = e.target;\n  this.viewState.lastDidYouMean = \"\";\n  var selected = this.options.sort.action === \"click\" ? elem : elem.options[elem.selectedIndex];\n  var dataSet = selected.dataset;\n  var _elem$dataset = elem.dataset,\n      action = _elem$dataset.action,\n      value = _elem$dataset.value;\n  var sortVal = elem.value || value || \"\";\n  var changeSort = this.events.changeSort;\n  this.checkFacets();\n\n  if (action === this.actions.clearSort) {\n    this.applySort(\"\");\n    this.options.onEvent(this, action);\n  }\n\n  if (action === this.actions.changeSort) {\n    this.applySort(sortVal);\n    this.options.onEvent(this, changeSort, {\n      sort: sortVal\n    });\n  }\n}\n\n;\n\n\n//# sourceURL=webpack://UnbxdSearch/./src/modules/sort/actions.js?");

/***/ }),

/***/ "./src/modules/sort/index.js":
/*!***********************************!*\
  !*** ./src/modules/sort/index.js ***!
  \***********************************/
/*! exports provided: sortOptions, sortTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sortOptions\", function() { return sortOptions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sortTemplate\", function() { return sortTemplate; });\nvar sortOptions = [{\n  value: \"price desc\",\n  text: \"Price High to Low\"\n}, {\n  value: \"price asc\",\n  text: \" Price Low to High\"\n}];\n\nvar sortTemplate = function sortTemplate(selectedSort, sortConfig) {\n  var optionsUI = \"\";\n  var options = sortConfig.options,\n      sortClass = sortConfig.sortClass,\n      selectedSortClass = sortConfig.selectedSortClass;\n  var UNX_unbxdSorter = this.testIds.UNX_unbxdSorter;\n  options.forEach(function (item) {\n    var value = item.value,\n        text = item.text;\n\n    if (value == selectedSort) {\n      optionsUI += \"<option value=\\\"\".concat(value, \"\\\" class=\\\"\").concat(selectedSortClass, \"\\\" selected>\").concat(text, \"</option>\");\n    } else {\n      optionsUI += \"<option value=\\\"\".concat(value, \"\\\">\").concat(text, \"</option>\");\n    }\n  });\n  return [\"<div class=\\\"UNX-sort-block\\\">\", \"<span class=\\\"UNX-sort-header\\\">Sort By</span>\", \"<label class=\\\"UNX-hidden\\\" for=\\\"unxSortSelect\\\">Sort By</label>\", \"<select data-test-id=\\\"\".concat(UNX_unbxdSorter, \"\\\" name=\\\"unxSortSelect\\\" data-action=\\\"changeSort\\\" id=\\\"unxSortSelect\\\" class=\\\"\").concat(sortClass, \"\\\">\"), \"<option value=\\\"\\\">Relevancy</option>\", optionsUI, \"</select>\", \"</div>\"].join('');\n};\n\n\n\n//# sourceURL=webpack://UnbxdSearch/./src/modules/sort/index.js?");

/***/ }),

/***/ "./src/modules/sort/renderSort.js":
/*!****************************************!*\
  !*** ./src/modules/sort/renderSort.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction renderSort() {\n  var _this = this;\n\n  var results = this.getSearchResults();\n  var sort = this.options.sort;\n  var sortWrappers = this.sortWrappers;\n  sortWrappers.forEach(function (wrapper) {\n    var ui = \"\";\n\n    if (results && results.numberOfProducts > 0) {\n      ui = _this.options.sort.template.bind(_this)(_this.getSelectedSort(), sort);\n    }\n\n    wrapper.innerHTML = ui;\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderSort);\n\n//# sourceURL=webpack://UnbxdSearch/./src/modules/sort/renderSort.js?");

/***/ }),

/***/ "./src/modules/sort/setSort.js":
/*!*************************************!*\
  !*** ./src/modules/sort/setSort.js ***!
  \*************************************/
/*! exports provided: default, sortAction, renderSort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return setSort; });\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ \"./src/modules/sort/actions.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"sortAction\", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _renderSort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderSort */ \"./src/modules/sort/renderSort.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"renderSort\", function() { return _renderSort__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\nvar setSort = function setSort(prototype) {\n  prototype = Object.assign(prototype, {\n    sortAction: _actions__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    renderSort: _renderSort__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  });\n};\n\n\n\n//# sourceURL=webpack://UnbxdSearch/./src/modules/sort/setSort.js?");

/***/ }),

/***/ "./src/modules/swatches/actions.js":
/*!*****************************************!*\
  !*** ./src/modules/swatches/actions.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction renderSwatchBtns(product) {\n  var swatchData = this.getSwatches(product, this.options.swatches.attributesMap);\n  var swatches = this.options.swatches;\n  return this.options.swatches.template.bind(this)(swatchData, swatches, product);\n}\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderSwatchBtns);\n\n//# sourceURL=webpack://UnbxdSearch/./src/modules/swatches/actions.js?");

/***/ }),

/***/ "./src/modules/swatches/setSwatches.js":
/*!*********************************************!*\
  !*** ./src/modules/swatches/setSwatches.js ***!
  \*********************************************/
/*! exports provided: default, renderSwatchBtns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return setSwatches; });\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ \"./src/modules/swatches/actions.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"renderSwatchBtns\", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\nvar setSwatches = function setSwatches(prototype) {\n  prototype = Object.assign(prototype, {\n    renderSwatchBtns: _actions__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  });\n};\n\n\n\n//# sourceURL=webpack://UnbxdSearch/./src/modules/swatches/setSwatches.js?");

/***/ }),

/***/ "./src/modules/swatches/ui.js":
/*!************************************!*\
  !*** ./src/modules/swatches/ui.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (swatchData, swatches, product) {\n  var _this = this;\n\n  var _swatchData$swatchImg = swatchData.swatchImgs,\n      swatchImgs = _swatchData$swatchImg === void 0 ? [] : _swatchData$swatchImg;\n  var btnUI = \"\";\n  var btnList = \"\";\n  var imgsUI = \"\";\n  var swatchClass = swatches.swatchClass;\n  var UNX_swatchClrBtn = this.testIds.UNX_swatchClrBtn;\n  var unxTitle = product.unxTitle;\n\n  if (swatchImgs.length > 1) {\n    swatchImgs.forEach(function (item, id) {\n      var sid = _this.generateRid(\"unx_swatch_\");\n\n      var sCss = id === 0 ? '' : ' UNX-swatch-hidden';\n      var bCss = id === 0 ? ' UNX-selected-swatch' : '';\n      var data = item.split(\"::\");\n\n      if (data) {\n        btnUI += [\"<button value=\\\"swatch color \".concat(data[0], \"\\\" data-test-id=\\\"\").concat(UNX_swatchClrBtn).concat(id, \"\\\" data-swatch-id=\\\"\").concat(sid, \"\\\" data-action=\\\"changeSwatch\\\" class=\\\"\").concat(swatchClass, \" \").concat(sid, \" \").concat(bCss, \"\\\" style=\\\"background-color:\").concat(data[0], \"\\\"> swatch color \").concat(data[0], \" </button>\")].join('');\n        imgsUI += \"<div id=\\\"\".concat(sid, \"\\\" class=\\\"UNX-img-wrapper \").concat(sCss, \"\\\"><img alt=\\\"\").concat(unxTitle, \" for the \").concat(data[0], \"\\\" class=\\\"UNX-img-block\\\" src=\\\"\").concat(data[1], \"\\\"/></div>\");\n      }\n    });\n    btnList = \"<div class=\\\"UNX-swatch-color-list\\\">\".concat(btnUI, \"</div>\");\n  }\n\n  return {\n    btnList: btnList,\n    imgList: imgsUI\n  };\n});\n;\n\n//# sourceURL=webpack://UnbxdSearch/./src/modules/swatches/ui.js?");

/***/ }),

/***/ "./src/modules/utils/createElement.js":
/*!********************************************!*\
  !*** ./src/modules/utils/createElement.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar createElement = function createElement(type) {\n  var attr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  var events = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n  var context = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : window;\n  var elem = document.createElement(type);\n  var attrArr = Object.keys(attr);\n  attrArr.forEach(function (item) {\n    elem.setAttribute(item, attr[item]);\n  });\n  var eventsArr = Object.keys(events);\n\n  if (eventsArr.length > 0) {\n    eventsArr.forEach(function (event) {\n      elem.addEventListener(event, events[event].bind(context));\n    });\n  }\n\n  return elem;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createElement);\n\n//# sourceURL=webpack://UnbxdSearch/./src/modules/utils/createElement.js?");

/***/ }),

/***/ "./src/modules/utils/debounce.js":
/*!***************************************!*\
  !*** ./src/modules/utils/debounce.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar debounce = function debounce(func, delay) {\n  var debounceTimer;\n  return function () {\n    var context = this;\n    var args = arguments;\n    clearTimeout(debounceTimer);\n    debounceTimer = setTimeout(function () {\n      return func.apply(context, args);\n    }, delay);\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (debounce);\n\n//# sourceURL=webpack://UnbxdSearch/./src/modules/utils/debounce.js?");

/***/ }),

/***/ "./src/modules/utils/delegate.js":
/*!***************************************!*\
  !*** ./src/modules/utils/delegate.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction delegate(el, evt, sel, handler) {\n  el.addEventListener(evt, function (event) {\n    var t = event.target;\n\n    while (t && t !== this) {\n      if (t.matches(sel)) {\n        handler.call(t, event);\n      }\n\n      t = t.parentNode;\n    }\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (delegate);\n\n//# sourceURL=webpack://UnbxdSearch/./src/modules/utils/delegate.js?");

/***/ }),

/***/ "./src/modules/utils/extend.js":
/*!*************************************!*\
  !*** ./src/modules/utils/extend.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar extend = function extend() {\n  // Variables\n  var extended = {};\n  var deep = true;\n  var i = 0;\n  var length = arguments.length; // Check if a deep merge\n\n  if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {\n    deep = arguments[0];\n    i++;\n  } // Merge the object into the extended object\n\n\n  var merge = function merge(obj) {\n    for (var prop in obj) {\n      if (Object.prototype.hasOwnProperty.call(obj, prop)) {\n        if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {\n          extended[prop] = extend(true, extended[prop], obj[prop]);\n        } else {\n          extended[prop] = obj[prop];\n        }\n      }\n    }\n  }; // Loop through each object and conduct a merge\n\n\n  for (; i < length; i++) {\n    var obj = arguments[i];\n    merge(obj);\n  }\n\n  return extended;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (extend);\n\n//# sourceURL=webpack://UnbxdSearch/./src/modules/utils/extend.js?");

/***/ }),

/***/ "./styles/index.scss":
/*!***************************!*\
  !*** ./styles/index.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://UnbxdSearch/./styles/index.scss?");

/***/ })

/******/ })["default"];
});