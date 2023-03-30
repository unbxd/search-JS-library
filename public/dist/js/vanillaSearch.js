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
/******/ 	return __webpack_require__(__webpack_require__.s = 40);
/******/ })
/************************************************************************/
/******/ ({

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){if(true)module.exports=e();else { var a, r; }}("undefined"!=typeof self?self:this,(function(){return function(t){var e={};function r(a){if(e[a])return e[a].exports;var n=e[a]={i:a,l:!1,exports:{}};return t[a].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=t,r.c=e,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";r.r(e);var a={siteKey:"api key",apiKey:"site key",isFlag:!0,searchEndPoint:"https://search.unbxd.io/",productType:"SEARCH",searchQueryParam:"q",browseQueryParam:"p",searchPath:"",productAttributes:["title"],defaultFilters:null,spellCheck:{enabled:!1},pageSize:5,startPageNo:0,facetMultiSelect:!0,updateUrls:!0,variants:void 0,extraParams:{},facetMultilevel:!0,facetDepth:6,showSwatches:!0,allowExternalUrlParams:!1,swatchMap:{},onEvent:function(){},getCategoryId:function(){return encodeURIComponent(window.UnbxdAnalyticsConf.page)||decodeURIComponent(location.pathname.split("category-path")[1].split("/").pop())},setCategoryId:function(t,e){var r,a=t.level,n=(t.parent,t.name),i=(t.action,[]),s=Number(a),o=e.getBreadCrumbsList();o.forEach((function(t,e){var r=t.filterField,a=t.value;r,s>e&&i.push(a)})),s>o.length&&i.push(n),r=i.join(">"),window.UnbxdAnalyticsConf&&(window.UnbxdAnalyticsConf.page=r)},applyMultipleFilters:!1,hashMode:!1,pagination:{type:"INFINITE_SCROLL"},onQueryRedirect:function(t,e,r){if(e){var a=e.value;return"url"===e.type&&(history.state&&history.state.replace&&history.replaceState(null,"",r),location.href=a),!1}},onBackFromRedirect:function(t){new URLSearchParams(t?location.hash.substring(1):location.search).get("redirected")&&history.go(-1)},onNoUnbxdKeyRouting:function(){history.go()},setRoutingStrategies:function(t,e,r,a,n){t!==e&&("CATEGORY"===r?a?history.pushState(null,"",e):history.replaceState(null,"",e):history.state&&history.state.replace||n?history.replaceState(null,"",e):history.pushState(null,"",e))}},n={encodeQueryParam:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return"string"!=typeof t?t:(t=(t=t.trim()).replace(/\%26/gim,"&"),t=(t=(t=encodeURIComponent(t)).replace(/\%20/gim,"+")).replace(/\++/gim,"+"))},decodeQueryParam:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return"string"!=typeof t?t:(t=(t=t.replace(/\+/gim," ")).replace(/\s{2,}/gim," "),(t=decodeURIComponent(t)).trim())}},i=n;function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}var c={extraParamUrlString:function(){var t=this.options.extraParams,e="";return Object.keys(t).forEach((function(r){e+="&"+r+"="+t[r]})),e},renderFromUrl:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=!1,r=this.getQueryParams(t),a=this.options,n=a.pagination,o=a.searchQueryParam,c=a.browseQueryParam,u=a.productType,l=o;if("SEARCH"!==u&&(r[l=c]=this.getCategoryId()),"object"===s(r)&&r[l]){var f=r.q,h=r.filter,p=r.sort,g=r.start;e=!0,this.state.userInput!==f&&(this.state.userInput=i.decodeQueryParam(f));var d=this.getFilterFromParams(h);this.state.rangeFacet=d.rangeFacet,this.state.selectedFacets=d.selectedFilters,this.state.selectedSort=p?decodeURIComponent(p):"",this.state.startPageNo=g||0,this.state.isBack=!1,"CLICK_N_SCROLL"===n.type&&(this.state.startPageNo=0),this.state.pageSize=r.rows?Number(r.rows):this.options.pageSize,this.state.categoryFilter=this.getCategoryFilterFromParams(r),e&&this.getResults()}},getQueryParams:function(t){var e=this.options,r=(e.searchQueryParam,e.hashMode,(this.options.hashMode?location.hash:location.search).substr(1));t&&(r=t);var a=r.split("&"),n=[];a.forEach((function(t,e){t.indexOf("=")>0?n.push(t):n[e-1]=n[e-1]+"&"+t}));for(var i={},s=0;s<n.length;s++){var o=n[s].split("=");void 0===i[o[0]]?i[o[0]]=o[1]:"string"==typeof i[o[0]]?(i[o[0]]=[i[o[0]]],i[o[0]].push(o[1])):i[o[0]].push(o[1])}return i},urlFlattenFacets:function(){var t="",e=this.state.selectedFacets,r=this.options.defaultFilters||{},a=Object.keys(e);return a.forEach((function(a,n){var i=e[a];i.length&&(t+="&filter="),i.forEach((function(e,n){var i=e.name,s=e.dataId;void 0!==r[a]&&r[a]===i||(i="".concat("%22").concat(s).concat("%22"),t+=0===n?"".concat(a,":").concat(i):" OR ".concat(a,":").concat(i))}))})),t},getDefaultFiltersStr:function(){var t="",e=this.options.defaultFilters;null!==e&&Object.keys(e).forEach((function(r){t+="&filter="+r+":"+JSON.stringify(e[r])}));return t},getShowVariantsStr:function(){var t=this.options.variants;return t&&"boolean"==typeof t.enabled?"&variants=".concat(t.enabled):""},getVariantAttributesStr:function(){var t=this.options.variants;if(t){var e=t.enabled,r=t.attributes;return r&&e?"&variants.fields=".concat(r.join(",")):""}return""},getVariantsCountStr:function(){var t=this.options.variants;if(t){var e=t.enabled,r=t.count;return r&&e?"&variants.count=".concat(r):""}return""},getVariantsGroupByStr:function(){var t=this.options.variants;if(t){var e=t.enabled,r=t.groupBy;return r&&e?"&variants.groupBy=".concat(r):""}return""},getProductAttributesStr:function(){return this.options.productAttributes?"&fields="+this.options.productAttributes.join(","):""},getPageSizeStr:function(){return"&rows=".concat(this.state.pageSize)},getPageStartStr:function(){return"&start="+this.state.startPageNo},getNewUrlState:function(t){var e=this.options,r=e.productType,a=e.searchQueryParam,n=e.browseQueryParam,s=this.state.userInput,o="",c=a;if("BROWSE"===r){o="",s=this.getCategoryId();c=n,this.url=this.getBaseUrl()+"/category?"+c+"=".concat(i.encodeQueryParam(s))}if("CATEGORY"===r){o="&pagetype=boolean",s=this.getCategoryId();c=n,this.url=this.getBaseUrl()+"/category?"+c+"=".concat(i.encodeQueryParam(s))}if("SEARCH"===r){this.url=this.getBaseUrl()+"/search?"+c+"="+i.encodeQueryParam(s)}var u=this.urlFlattenFacets(),l=this.getShowVariantsStr(),f=this.getVariantAttributesStr(),h=this.getVariantsCountStr(),p=this.getVariantsGroupByStr(),g=this.getProductAttributesStr()+this.getDefaultFiltersStr(),d=this.getSortUrlString(),y=this.getSpellCheckUrlString(),v=this.getRangeFilterStr(),b=this.categoryFilterUrlStr(),m=this.getUcParamUrlString(),S=this.options.facetMultiSelect?"&facet.multiselect=true":"&facet.multiselect=false",F=this.url+b+S+u+l+f+h+p+g+d+y+v+o+this.getPageSizeStr()+this.getPageStartStr()+this.extraParamUrlString()+"&facet.version=V2"+(m||""),P=this.url+b+u+d+v+this.getPageSizeStr()+this.getPageStartStr();return this.state.currentApiUrl=F,this.state.currentWebUrl=P,t?F:P},getRangeFilterStr:function(){var t=this.state.rangeFacet,e=Object.keys(t),r="";return e.forEach((function(e){var a=t[e];Array.isArray(a)?a.length>0&&(r+="&filter=".concat(e,":").concat(a.join(" OR ".concat(e,":")))):r+="&filter=".concat(e,":").concat(a)})),r},categoryFilterUrlStr:function(){var t=this,e=this.state.categoryFilter,r="",a=Object.keys(e),n="%22";return a.forEach((function(a,i){var s=t.getAFacetByName(a)[0],o=t.getBreadCrumbsList(a),c=null;if(s){var u=s.filterField,l=s.values;u&&s;var f=e[a].map((function(e,r){if(c=l.find((function(r){return t.cleanFacetValue(encodeURIComponent(r.name))===t.cleanFacetValue(e)})),o){var a=o.find((function(t){return t.value===e}));a&&(c={name:a.value})}return c&&t.encodeCategoryFacetValue(c.name).split(n).join(""),r>0?">".concat(t.encodeCategoryFacetValue(e).split(n).join("")):t.encodeCategoryFacetValue(e).split(n).join("")}));r+="categoryPath"===u?"&category-filter=".concat(f.join("")):"&filter=".concat(u,':"').concat(f.join(""),'"')}else if(e&&e.categoryPath){var h="";e.categoryPath.forEach((function(e,r){e.split(">").forEach((function(e,r){var a=t.encodeCategoryFacetValue(e).split("%22").join("");""!==h?h+=">".concat(a):h=a}))})),r+="&category-filter=".concat(h)}})),r},getSortUrlString:function(){var t=this.getSelectedSort();return t?"&sort="+encodeURI(t):""},getSpellCheckUrlString:function(){return this.options.spellCheck.enabled?"&spellcheck="+!0:""},getBaseUrl:function(){var t=this.options,e=t.searchEndPoint,r=t.siteKey;return e+t.apiKey+"/"+r},getStateFromUrl:function(){var t=this.getQueryParams(),e={},r=this.options.pagesize.pageSize;if("object"===o(t)){var a=t.q,n=t.filter,i=t.sort,s=t.start,c=t.rows,u=void 0===c?r:c;this.state.userInput!==a&&(e.userInput=a);var l=this.getFilterFromParams(n);e.rangeFacet=l.rangeFacet,e.selectedFacets=l.selectedFilters,e.selectedSort=i||"",e.startPageNo=s||0,e.pageSize=Number(u),e.categoryFilter=this.getCategoryFilterFromParams(t)}return e},getUcParamUrlString:function(){var t=this.getQueryParams();if(t.uc_param)return"&uc_param="+t.uc_param}},u=function(t){this.state.startPageNo=t},l=function(){var t=this.getSearchResults();if(!t)return null;var e=t.numberOfProducts,r=t.start,a=t.products,n=this.state.pageSize,i=0;e>0&&(i=e%n==0?e/n:Math.floor(e/n)+1);var s=Math.floor(r/n)+1,o=!(r+n>=e||r>=e),c=!(r-n<0||r<=0);return{numberOfProducts:e,start:r,productsLn:a.length,rows:n,noOfPages:i,currentPage:s||0,isNext:o,isPrev:c}},f=function(t){"number"==typeof t&&t===parseInt(t)&&(this.state.pageSize=t,this.state.startPageNo=0)},h=function(t){Array.isArray(t)?this.options.productAttributes=t:this.options.productAttributes="*"},p=function(t){var e=this.options.variants,r=void 0===e?{}:e;"boolean"==typeof t&&(r.enabled=t),this.options.variants=r},g=function(t){var e=this.options.variants,r=void 0===e?{}:e;"number"==typeof t&&(r.count=t),this.options.variants=r},d=function(t){var e=this.options.variants,r=void 0===e?{}:e;Array.isArray(t)&&(r.attributes=t),this.options.variants=r},y=function(t){var e=this.options.variants,r=void 0===e?{}:e;"string"==typeof t&&t.length>0&&(r.groupBy=t),this.options.variants=r},v=function(){return this.state.responseObj&&this.state.responseObj.searchMetaData||null},b=function(){var t=this.getResponseObj();return t&&t.response||null},m=function(){var t=this.getSearchMeta();return t&&t.queryParams||null},S=function(){if(this.state.responseObj){var t=this.state.responseObj.searchMetaData.queryParams;return t.q||t.p}return""},F={changeInput:"CHANGE_INPUT",fetchError:"FETCH_ERROR",afterApiCall:"AFTER_API_CALL",beforeApiCall:"BEFORE_API_CALL"};function P(t){return function(t){if(Array.isArray(t))return O(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return O(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return O(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,a=new Array(e);r<e;r++)a[r]=t[r];return a}function j(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function A(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?j(Object(r),!0).forEach((function(e){C(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function C(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var I=function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=this.state,n=a.userInput,s=a.isHistory,o=a.isBack,c=""===e?n:e;if(this.state.userInput=c,this.state.currentApiUrl=this.getNewUrlState(!0),this.state.isLoading)return!1;this.state.isLoading=!0;var u=this,l=this.options,f=l.productType,h=l.hashMode,p=l.updateUrls,g=l.variants;if(!h&&p&&!s&&!o){this.state.isBack=!1;var d=this.state.currentWebUrl.split("".concat(f.toLocaleLowerCase(),"?"))[1];if(decodeURIComponent(location.search)!=="?".concat(i.decodeQueryParam(d)))return this.setUrl(!0),!1}this.options.spellCheck;this.callBack(this,F.beforeApiCall);var y=fetch(this.state.currentApiUrl),v=function(e){t.state.isLoading=!1,t.state.userInput=c,e&&t.callBack(u,e)};y.then((function(e){return t.state.requestId=e&&e.headers?e.headers.get("X-Request-Id"):"",e.json()})).then((function(e){if(t.state.isLoading=!1,t.state.userInput=c,e&&!e.error){g&&g.enabled&&(e=t.processVariantMap(e)),t.state.responseObj=e;var a=t.getDidYouMeanFromResponse();a&&(t.state.didYouMean=a,t.state.noResultQuery=t.state.userInput);var n=e,i=n.facets,l=n.response;if(i){var f=t.getFacets(),h=t.modifyFacetsList(f);e.facets=A(A({},i),{},{text:{list:h}})}if(l){var d=l.products,y=t.options.pagination,b=void 0===y?{}:y;"CLICK_N_SCROLL"===b.type?t.state.products=t.state.products.concat(d):"INFINITE_SCROLL"===b.type?t.state.products="prev"===r?[].concat(P(d),P(t.state.products)):[].concat(P(t.state.products),P(d)):"FIXED_SCROLL"===b.type&&(t.state.products=d)}t.state.responseObj=e,t.setSort(),p&&s&&!o&&(t.state.isBack=!1,t.setUrl(!1),t.updateSelectedFacetsCount()),t.callBack(u,F.afterApiCall)}else v(F.fetchError)})).catch((function(t){v(F.fetchError)}))},w=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this,r=e.options.variants.mapping,a=void 0===r?{}:r,n=a,i=Object.keys(n);if(t.response&&t.response.products){var s=t.response.products.map((function(t){var e=t,r=e.variants,a=void 0===r?[]:r,s=e.relevantDocument,o=t;"variant"===s&&a.length>0&&(t=a[0],i.forEach((function(e){var r=n[e];o[e]=t[r]})));var c=[];return a.forEach((function(t,e){var r=t;i.forEach((function(e){var a=n[e];a&&(r[e]=t[a])})),c.push(r)})),o.variants=c,o}));t.response.products=s}return t},R=function(t,e){return this.state.products.find((function(r){return r[t]===e}))},U=function(){var t=this,e=this.getSearchQueryParams(),r=e.q,a=e.filter;this.state.userInput=r;var n=[],i="__",s=":";if(a){if(Array.isArray(a))a.forEach((function(t,e){var r=t.replaceAll(s,i);r=encodeURIComponent(r).replaceAll(i,s),n.push(r)}));else{var o=a.replaceAll(s,i);o=encodeURIComponent(o).replaceAll(i,s),n=[o]}e.filter=n}var c=this.getFilterFromParams(n);this.state.rangeFacet=c.rangeFacet;var u=c.selectedFilters,l=null;u?Object.keys(u).forEach((function(e){if(t.isCategoryFacet(e)){l=e;var r=u[e][0].dataId;t.state.categoryFilter[l]=r.split(">"),t.state.selectedFacets[l]&&delete t.state.selectedFacets[l]}else t.state.selectedFacets[e]=u[e]})):this.state.selectedFacets={};0===Object.keys(this.state.categoryFilter).length&&(this.state.categoryFilter=this.getCategoryFilterFromParams(e)),this.state.breadcrumbs=this.getBreadCrumbs(l)};var E=function(t){var e=t.siteName,r=t.siteKey,a=t.searchEndPoint,n=t.searchQueryParam,i=t.browseQueryParam,s=t.defaultFilters,o=t.spellCheck,c=t.pageSize,u=t.startPageNo,l=t.facetDepth,f=t.facetMultilevel,h=t.facetMultiSelect,p=t.updateUrls,g=t.extraParams,d=t.onEvent,y=t.getCategoryId,v=t.applyMultipleFilters,b=t.hashMode;this.state.pageSize=c||this.state.pageSize,this.state.startPageNo=u||this.state.startPageNo,this.options.siteName=e||this.options.siteName,this.options.siteKey=r||this.options.siteKey,this.options.searchEndPoint=a||this.options.searchEndPoint,this.options.searchQueryParam=n||this.options.searchQueryParam,this.options.browseQueryParam=i||this.options.browseQueryParam,this.options.defaultFilters=s||this.options.defaultFilters,this.options.spellCheck=o||this.options.spellCheck,this.options.pageSize=c||this.options.pageSize,this.options.startPageNo=u||this.options.startPageNo,this.options.applyMultipleFilters=v||this.options.applyMultipleFilters,this.options.facetDepth=l||this.options.facetDepth,this.options.facetMultilevel=f||this.options.facetMultilevel,this.options.facetMultiSelect=h||this.options.facetMultiSelect,this.options.updateUrls=p||this.options.updateUrls,this.options.extraParams=g||this.options.extraParams,this.options.onEvent=d||this.options.onEvent,this.options.getCategoryId=y||this.options.getCategoryId,this.options.hashMode=b||this.options.hashMode},k=function(t){var e=this.state,r=e.urlState,a=e.isHistory,n=(e.unbxdKeys,this.options.hashMode),i=this.checkIfUnbxdKey();if(n)if(decodeURIComponent(location.hash)!=="#".concat(decodeURIComponent(r))){(history.state||{}).path;if(this.state.isBack=!0,!i)return void this.options.onNoUnbxdKeyRouting();this.renderFromUrl(t.state)}else this.callBack(this,"lastBack");else if(a){(history.state||{}).path;if(this.state.isBack=!0,!i)return void this.options.onNoUnbxdKeyRouting();this.renderFromUrl(t.state)}else this.callBack(this,"lastBack")},x=function(){return this.state.requestId},N=function(t,e){var r={};return Object.keys(e).forEach((function(a){var n=e[a];r[a]=t[n]})),r},B=function(){var t=this.getResponseObj();if(t&&t.facets&&t.facets.multilevel){var e=t.facets.multilevel.bucket||t.facets.multilevel.list||[];return this.modifyFacetsList(e)}return[]},M=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=this,r={},a={};return"string"==typeof t&&(t=Array(t)),t.forEach((function(t,n){t.split("%20OR%20").forEach((function(t,n){var i=t.split(/%3A(.+)/);if(3===i.length){var s=decodeURIComponent(i[1]);if(s=s.replace(/(^")|("$)/g,"").replace(/\"{2,}/g,'"').replace(/\\\"/g,'"').replace(/(^\[)|(\]$)/g,""),i[1].indexOf("TO")>0){var o=s.split(" TO "),c=i[0],u="[".concat(Number(o[0])," TO ").concat(Number(o[1]),"]");a[c]?a[c].push(u):a[c]=[u]}else{var l=i[0],f=i[1],h=e.cleanEncodedFacetValue(f),p=e.decodeFacetValue(h),g=e.getFacetByValue(l,p);if(g.actualFound){var d=g.facetName,y=g.selectedvalue;r[d]?r[d].push(y):r[d]=Array(y)}else{var v=g.facetName,b={name:g.selectedvalue.name,dataId:h,count:0};r[v]?r[v].push(b):r[v]=Array(b)}}}}))})),{selectedFilters:r,rangeFacet:a}},Q=function(t){var e=this,r=t.filter,a=[];if(t["category-filter"]&&(a=(r=t["category-filter"]).split(">")),!r)return{};Array.isArray(r)||(r=[r]),r=this.getFilterFromParams(r).selectedFilters;var n={};if(Object.keys(r).forEach((function(t){if(e.isCategoryFacet(t)){var a=r[t][0].dataId;n[t]=a.split(">")}})),a.length>0&&a){var i=[];a.forEach((function(t){decodeURIComponent(t).split(">").forEach((function(t){i.push(decodeURIComponent(t))}))})),n.categoryPath=i}return n},L=function(){var t=this.getResponseObj();if(t){var e=t.facets;return e&&e.range&&e.range.list?e.range.list:[]}return[]},V=function(){var t=this.getResponseObj();if(t){var e=t.facets;return e&&e.text&&e.text.list?e.text.list:[]}return[]},T=function(){return this.state.selectedFacets},D=function(t){return this.getFacets().find((function(e){return e.facetName===t?e:null}))},_=function(t){var e=this.state.selectedFacets,r=t.selectedFacetName,a="",n="",i=0,s=this.getSelectedFacetValue(t);s&&(a=s.name,n=s.dataId,i=s.count);if(this.isFacetAlreadyAdded(r,n))return!1;e[r]?e[r].push({name:a,dataId:n,count:i}):e[r]=[{name:a,dataId:n,count:i}],this.callBack(self,"added_facet"),this.options.applyMultipleFilters||(this.setPageStart(0),this.getResults.bind(this)())},z=function(t){var e=this.state.selectedFacets;this.clearFacets(!1),Object.keys(t).map((function(r){e[r]?delete e[r]:e[r]=t[r]})),this.setPageStart(0),this.getResults.bind(this)()},K=function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=this.state.selectedFacets;Object.keys(e).map((function(t){return delete e[t]})),t&&(this.setPageStart(0),this.getResults.bind(this)())};function q(t){return function(t){if(Array.isArray(t))return H(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return H(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return H(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function H(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,a=new Array(e);r<e;r++)a[r]=t[r];return a}var Y=function(t){var e=this.state.selectedFacets;Object.keys(t).map((function(r){var a=e[r]||[];e[r]=[].concat(q(a),q(t[r]))}))},G=function(t){return this.state.selectedFacets[t]},$=function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.parent,a=void 0===r?null:r,n=e.level,i=void 0===n?null:n;e.name;if(i)if(this.state.categoryFilter[a])0===(i=Number(i)-1)?delete this.state.categoryFilter[a]:this.state.categoryFilter[a].splice(i,6);else{var s=this.getBreadCrumbsList(a);if(i>1){this.state.categoryFilter[a]=[],s.forEach((function(e,r){if(r<i-1){var n=e.value;t.state.categoryFilter[a].push(n)}}))}}},W=function(t,e){var r=this.getSelectedFacets();if(e){var a=r[t];this.state.selectedFacets[t]=a.filter((function(t){return t.dataId!=e}))}else delete this.state.selectedFacets[t];return this.state.selectedFacets};function X(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function J(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?X(Object(r),!0).forEach((function(e){Z(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):X(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function Z(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var tt=function(t,e){var r=this.getSelectedFacet(t)||{facetName:t},a=!1,n=r.values,i=void 0===n?[]:n,s={name:e};if(i.length>0)for(var o=0;o<i.length;o++){var c=i[o];if(c.name===e){a=!0,s=c;break}}return a?J(J({},r),{},{selectedvalue:s,actualFound:a}):{facetName:t,actualFound:a,selectedvalue:{name:e,dataId:e,count:0}}},et=function(t){var e=t.selectedFacetId;return t.facetData.values.find((function(t){return t.dataId===e}))},rt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.parent,r=void 0===e?null:e,a=t.level,n=void 0===a?null:a,i=t.name,s=void 0===i?null:i,o=this.getCategoryFacetByValue(s),c=this.getBreadCrumbsList(r);if((n=Number(n))&&o)if(this.state.categoryFilter[r]&&n<=c.length)this.state.categoryFilter[r][n-1]=o,this.callBack(this,"deletedcategoryFilter");else{var u=[];(u=c.map((function(t){return t.value}))).push(o),this.state.categoryFilter[r]=u,this.callBack(this,"setCategoryFilter")}},at=function(t){if(t.length){var e=this.options.extraParams["facet.multilevel"];this.state.categoryFilter[e]=[t]}},nt=function(t){var e=t.start,r=t.end,a=t.facetName,n=t.applyMultiple,i="[".concat(e," TO ").concat(r,"]");if(n)if(this.state.rangeFacet[a]){var s=this.state.rangeFacet[a].indexOf(i);s<0?this.state.rangeFacet[a].push(i):this.state.rangeFacet[a].splice(s,1)}else this.state.rangeFacet[a]=[i];else this.state.rangeFacet[a]=[i];this.callBack(self,"added_facet")},it=function(t){var e=this.state.rangeFacet;e[t]&&delete e[t],this.state.rangeFacet=e},st=function(t,e){this.deleteFacet(t,e),this.callBack(this,"deleted_facet"),this.options.applyMultipleFilters||(this.setPageStart(0),this.getResults.bind(this)())},ot=function(t,e){var r=this.getSelectedFacets()[t],a=!1;return r&&r.forEach((function(t){if(t.dataId===e)return a=!0,!1})),a},ct=function(t){var e=this.state.rangeFacet;return t?e[t]:e};function ut(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function lt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?ut(Object(r),!0).forEach((function(e){ft(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ut(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function ft(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var ht=function(t){var e=[];return(t||[]).forEach((function(t){for(var r=t.values,a=r.counts,n=r.gap,i=[],s=[],o=0;o<a.length;o+=2){var c=Number(a[o]),u={name:c,count:a[o+1],dataId:c};if(s.push(u),s.length>=2){var l=s[0],f=s[1];i.push({from:l,end:f}),s.shift()}}if(1===s.length){var h=s[0],p=h.dataId+n,g={name:p,count:0,dataId:p};i.push({from:h,end:g})}var d=i[0].from.dataId,y=i[i.length-1].end.dataId;t.start=d,t.end=y,t.max=y,t.gap=n||1,t.min=d,t.values=i,e.push(lt(lt({},t),{},{values:i}))})),e},pt=function(){var t=this.getRangeFacets();return ht(t)},gt=function(t){var e=this.getAFacetByName(t)[0];return!!e&&"category"===e.facetType};function dt(t){return function(t){if(Array.isArray(t))return yt(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return yt(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return yt(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function yt(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,a=new Array(e);r<e;r++)a[r]=t[r];return a}var vt=function(){var t=this.getAllTextFacets(),e=this.getAllRangeFacets(),r=this.getAllCategory();return[].concat(dt(r),dt(t),dt(e)).sort(this.sortFacets)},bt=function(t){var e=this.getAllFacets(),r=[];return t&&(r=e.filter((function(e){return e.facetName===t}))),r},mt=function(){var t=this.state.categoryFilter;return t?Object.keys(t):null},St=function(){var t=this.getSelectedBucketedFacet(),e=this.getSelectedRanges(),r=this.getSelectedFacets();return Object.assign({},t,e,r)},Ft=function(){var t=this.getAllSelectedFacets()||{};return Object.keys(t).length},Pt=function(){var t=this.getAllSelectedFacets()||{},e=Object.keys(t),r=0;return e.forEach((function(e){var a=t[e];Array.isArray(a)&&(r+=a.length)})),r},Ot=function(t){var e=this.getBucketedFacets(),r=null;if(e)for(var a=0;a<e.length;a++)for(var n=e[a].values,i=0;i<n.length;i++){var s=n[i],o=s.dataId,c=s.name;if(o===t){r=c;break}}return r};function jt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function At(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?jt(Object(r),!0).forEach((function(e){Ct(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):jt(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function Ct(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var It=function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=[];return e.forEach((function(a,n){var i=a;if(a.name)r.push(At(At({},i),{},{dataId:t.encodeFacetValue(a.name)}));else{var s="";n%2==1&&(s=e[n-1],r.push({name:s,count:i,dataId:t.encodeFacetValue(s)}))}})),r},wt=function(t){var e=this,r=[];return(t||[]).forEach((function(t,a){var n=t.values,i=t.displayName,s=t.facetName,o=t.filterField;s||(i&&(t.facetName=i),o&&(t.facetName=o)),t.values=e.modifyValues(n),r.push(t)})),r};function Rt(t){var e="0"+t.charCodeAt(0).toString(16);return"\\x"+e.substr(e.length-2)}var Ut=function(t){return t=t.replace(/\\/g,"\\\\").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\v/g,"\\v").replace(/'/g,"\\'").replace(/"/g,'\\"').replace(/[\x00-\x1F\x80-\x9F]/g,Rt),encodeURIComponent(t)},Et=function(t){return t=t.replace(/\\/g,"\\\\").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\v/g,"\\v").replace(/'/g,"\\'").replace(/"/g,'\\"').replace(/[\x00-\x1F\x80-\x9F]/g,Rt),encodeURIComponent(t)},kt=function(t){return decodeURIComponent(new String("".concat(t)))},xt=function(t){return t.replace(/[^\w\d]/g,"")},Nt=function(t){var e=t.split("%22");return 1===e.length?e[1]:(e=e.slice(1,-1)).join("%22")},Bt=function(){return this.state.categoryFilter},Mt=function(){this.setPageStart(0),this.getResults.bind(this)()},Qt=function(t,e){return t.position>e.position?1:-1},Lt=function(){return this.getFacets().map((function(t){return t.facetType="text",t}))},Vt=function(){return this.getRanges().map((function(t){return t.facetType="range",t}))},Tt=function(){return this.getBucketedFacets().map((function(t){return t.facetType="category",t}))},Dt=function(t){var e=this.getBreadCrumbs(t),r=[],a=e;if(e)for(var n=0;n<this.options.facetDepth&&(a.level&&function(){var t=a,e=t.level,n=t.values,i=t.filterField;n.forEach((function(t){r.push({level:e,filterField:i,value:t.value||t.name})}))}(),a.child);n++)a=a.child;return r},_t=function(t){var e=this.getResponseObj(),r=[];if(e&&e.facets&&e.facets.multilevel&&t){var a=e.facets.multilevel.list;if(a)a.forEach((function(e){var a=e.filterField,n=e.breadcrumb;a===t&&(r=n)}));else{var n=e.facets.multilevel.breadcrumb;r=n||null}}return r},zt=function(t){this.setSort(t),this.setPageStart(0),this.getResults.bind(this)()},Kt=function(t){if(void 0!==t)this.state.selectedSort=t;else{var e=this.getSearchQueryParams();this.state.selectedSort=e.sort?e.sort:""}},qt=function(){return this.state.selectedSort},Ht=function(){var t=this.getResponseObj()||{};return t&&t.didYouMean?t.didYouMean:[]},Yt=function(){return(this.state.didYouMean||[]).map((function(t){return t.suggestion}))},Gt=function(t){this.options.spellCheck.enabled=!!t},$t=function(){var t=this.getResponseObj()||{};return t&&t.banner&&t.banner.banners&&t.banner.banners||[]},Wt=function(t,e){this.state.userInput=t,this.callBack(t,e)},Xt=function(){this.state.selectedFacets={},this.state.rangeFacet={},this.state.categoryFilter={},this.state.breadcrumbs={}},Jt=function(){this.resetFacets(),this.state.didYouMean=null,this.state.startPageNo=0,this.state.selectedSort="",this.state.responseObj=null,this.state.userInput="",this.state.pageSize=this.options.pageSize},Zt=function(t){var e=t.prototype;e.changeInput=Wt,e.resetFacets=Xt,e.resetAll=Jt,function(t){t=Object.assign(t,c)}(e),function(t){Object.assign(t,{setPageStart:u,getPaginationInfo:l,setPageSize:f})}(e),function(t){t=Object.assign(t,{setProductAttributes:h,setShowVariants:p,setVariantsCount:g,setVariantAttributes:d,setVariantsGroupBy:y,getSearchResults:b,getSearchMeta:v,getSearchQueryParams:m,getSearchQuery:S,getResults:I,processVariantMap:w,getProductByPropValue:R,setStateFromData:U,setSearchConfigurations:E,onLocationChange:k,getRequestId:x})}(e),function(t){Object.assign(t,{getSwatches:N})}(e),function(t){t=Object.assign(t,{getBucketedFacets:B,getSelectedBucketedFacet:Bt,getFilterFromParams:M,getCategoryFilterFromParams:Q,getRangeFacets:L,getFacets:V,getSelectedFacets:T,getSelectedFacet:D,updateFacets:_,applyFacets:z,clearFacets:K,addFacets:Y,findSelectedFacet:G,deleteCategoryFilter:$,deleteFacet:W,getFacetByValue:tt,getSelectedFacetValue:et,setCategoryFilter:rt,setDefaultCategoryFilter:at,setRangeFacet:nt,clearARangeFacet:it,deleteAFacet:st,applyRangeFacet:Mt,isFacetAlreadyAdded:ot,getSelectedRanges:ct,getRanges:pt,sortFacets:Qt,isCategoryFacet:gt,getAllFacets:vt,getAFacetByName:bt,getSelectedMultilevelFacet:mt,getAllTextFacets:Lt,getAllRangeFacets:Vt,getAllCategory:Tt,getAllSelectedFacets:St,getSelectedFacetsCount:Ft,getSelectedFacetValueCount:Pt,encodeFacetValue:Ut,modifyFacetsList:wt,modifyValues:It,decodeFacetValue:kt,cleanFacetValue:xt,getCategoryFacetByValue:Ot,encodeCategoryFacetValue:Et,cleanEncodedFacetValue:Nt})}(e),function(t){t=Object.assign(t,{getBreadCrumbsList:Dt,getBreadCrumbs:_t})}(e),function(t){t=Object.assign(t,{applySort:zt,getSelectedSort:qt,setSort:Kt})}(e),function(t){t=Object.assign(t,{getDidYouMeanFromResponse:Ht,getSpellCheckSuggested:Yt,setSpellCheck:Gt})}(e),function(t){t=Object.assign(t,{getBanners:$t})}(e)};function te(t){return te="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},te(t)}var ee=function t(e){if(!e)return e;var r,a=Array.isArray(e)?[]:{};for(var n in e)r=e[n],a[n]="object"===te(r)?t(r):r;return a};function re(t){return re="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},re(t)}function ae(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var a,n,i=[],s=!0,o=!1;try{for(r=r.call(t);!(s=(a=r.next()).done)&&(i.push(a.value),!e||i.length!==e);s=!0);}catch(t){o=!0,n=t}finally{try{s||null==r.return||r.return()}finally{if(o)throw n}}return i}(t,e)||ie(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ne(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=ie(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var a=0,n=function(){};return{s:n,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,o=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return s=t.done,t},e:function(t){o=!0,i=t},f:function(){try{s||null==r.return||r.return()}finally{if(o)throw i}}}}function ie(t,e){if(t){if("string"==typeof t)return se(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?se(t,e):void 0}}function se(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,a=new Array(e);r<e;r++)a[r]=t[r];return a}function oe(t,e){for(var r=0;r<e.length;r++){var a=e[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var ce=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.options=Object.assign({},a,e),this.state={queryRef:{},userInput:"",responseObj:null,selectedFacets:{},currentWebUrl:"",currentApiUrl:"",didYouMean:null,startPageNo:this.options.startPageNo||0,isLoading:!1,selectedSort:"",isUrlUpdated:!1,rangeSliderList:[],rangeFacet:{},categoryFilter:{},breadcrumbs:{},urlState:"",noResultQuery:"",pageSize:this.options.pageSize||12,urlLoad:!1,isHistory:window.history,isBack:!1,products:[],requestId:null,unbxdKeys:["filter","category-filter","rows","start","sort",this.options.browseQueryParam,this.options.searchQueryParam]};var r=this.options,n=r.searchQueryParam,i=r.browseQueryParam,s=r.productType,o=r.getCategoryId,c=r.setCategoryId,u="/search?",l=n;"CATEGORY"===s&&(u="/category?",l=i),this.getCategoryId=o,this.setCategoryId=c,this.url=this.getBaseUrl()+u+l+"="}var e,r,n;return e=t,r=[{key:"getResponseObj",value:function(){var t=this.state.responseObj;return t?ee(t):null}},{key:"getUrlParamString",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0,r=Object.keys(e);return this.options.searchQueryParam,r.forEach((function(a,n){var i=e[a];i.forEach((function(e,r){t="".concat(t).concat(a,"=").concat(e),r!==i.length-1&&(t="".concat(t,"&"))})),n!==r.length-1&&(t="".concat(t,"&"))})),t}},{key:"getUrlStr",value:function(t){var e=new URLSearchParams(location.search),r=new URLSearchParams(t),a={};if(this.options.allowExternalUrlParams){var n,i=ne(e);try{for(i.s();!(n=i.n()).done;){var s=ae(n.value,2),o=s[0];s[1],this.state.unbxdKeys.indexOf(o)<0&&(a[o]=e.getAll(o))}}catch(t){i.e(t)}finally{i.f()}}a[this.options.searchQueryParam]=[t.split("".concat(this.options.searchQueryParam,"="))[1].split(/\&\w+=/gi)[0]];var c,u=ne(r);try{for(u.s();!(c=u.n()).done;){var l=ae(c.value,2),f=l[0],h=l[1];f!==this.options.searchQueryParam&&r.getAll(f).length&&""!==h&&(a[f]=r.getAll(f))}}catch(t){u.e(t)}finally{u.f()}return this.getUrlParamString("?",a)}},{key:"urlSearchParamsToStr",value:function(t){var e,r={},a=ne(t);try{for(a.s();!(e=a.n()).done;){var n=ae(e.value,2),i=n[0],s=n[1];t.getAll(i).length&&""!==s&&(r[i]=t.getAll(i))}}catch(t){a.e(t)}finally{a.f()}return this.getUrlParamString("?",r)}},{key:"checkIfUnbxdKey",value:function(){var t,e=!1,r=ne(new URLSearchParams(this.options.hashMode?location.hash.substring(1):location.search));try{for(r.s();!(t=r.n()).done;){var a=ae(t.value,2),n=a[0];a[1],this.state.unbxdKeys.indexOf(n)>-1&&(e=!0)}}catch(t){r.e(t)}finally{r.f()}return e}},{key:"convertToHashString",value:function(t){var e=this.getUrlStr(t);return"?"===e.charAt(0)&&(e=e.substring(1)),e}},{key:"setUrl",value:function(t){var e=this.options,r=e.productType,a=e.hashMode,n=e.searchPath,i=e.onQueryRedirect,s=(e.allowExternalUrlParams,this.state),o=s.urlLoad,c=s.isHistory,u=s.responseObj,l=void 0===u?{}:u,f=(s.unbxdKeys,l.redirect),h=l.didYouMean,p=void 0===h?[]:h;if("function"==typeof i&&f&&f.value){this.state.userInput="";var g=this.getUrlStr("redirected=true");return a&&(g="#".concat(this.convertToHashString(g))),void i(this,f,g)}var d=this.getNewUrlState(!1).split("".concat(r.toLocaleLowerCase(),"?"))[1];this.state.urlState=d;var y=location.pathname.includes(n),v=this.checkIfUnbxdKey(),b=null;if(p.length&&p[0].suggestion?this.state.queryRef={replaceNext:!0}:this.state.queryRef.replaceNext&&(b=!0,this.state.queryRef={}),a){var m="#".concat(d);if(y&&m!==location.hash){var S=this.convertToHashString(d);this.options.setRoutingStrategies(location.hash,"#".concat(S),r,v,b)}}else{if(c&&!o&&y){var F="?".concat(d),P=this.getUrlStr(F);console.log("newQ is "+P),decodeURI(P)!==decodeURI(location.search)&&(console.log("newQ is "+P),this.options.setRoutingStrategies(location.search,"".concat(P),r,v,b)),this.state.urlLoad=!1}t&&y&&(location.search=newQ)}}},{key:"updateSelectedFacetsCount",value:function(){var t=this.getQueryParams(),e=this.options,r=e.searchQueryParam,a=e.browseQueryParam,n=r;if("SEARCH"!==e.productType&&(t[n=a]=this.getCategoryId()),"object"===re(t)&&t[n]){var i=t.filter,s=this.getFilterFromParams(i);this.state.selectedFacets=s.selectedFilters}}},{key:"callBack",value:function(t,e){(0,this.options.onEvent)(this,e)}}],r&&oe(e.prototype,r),n&&oe(e,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();Zt(ce);var ue=ce;e.default=ue}]).default}));

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@unbxd-ui/unbxd-search-core/public/js/unbxdSdk.js
var unbxdSdk = __webpack_require__(15);
var unbxdSdk_default = /*#__PURE__*/__webpack_require__.n(unbxdSdk);

// EXTERNAL MODULE: ./styles/index.scss
var styles = __webpack_require__(17);

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
    urlParams.set('start', parseInt(parseInt(product.prank) - parseInt(product.prank) % parseInt(urlParams.get('rows'))));
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
  var rows = parseInt(autoScrollParams.get('rows'));
  context.setPageStart((page - 1) * rows);
  autoScrollParams.set('start', (page - 1) * rows);
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
    var start = parseInt(autoScrollParams.get('start')) || 0;
    var rows = parseInt(autoScrollParams.get('rows')) || 0;
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
function renderNewResults(action) {
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
      var _next = start + rows;
      if (isNext) {
        this.viewState.isInfiniteStarted = true;
        triggerNextPage(this, _next, action);
      }
    }
    if (action === this.actions.prev) {
      var prev = start - rows;
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
    getAutoScrollParams: getAutoScrollParams
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
          searchResultsWrapper.innerHTML = this.renderSearch() + searchResultsWrapper.innerHTML;
        } else {
          searchResultsWrapper.innerHTML += this.renderSearch();
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
  }
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
  if (pagination.type === 'INFINITE_SCROLL') {
    if (!this.productContainerHeight) {
      this.productContainerHeight = pagination.infiniteScrollTriggerEl.clientHeight;
      if (autoScrollParams.get('start') != null) {
        this.initialPage = parseInt(autoScrollParams.get('start')) / parseInt(autoScrollParams.get('rows')) + 1;
      }
    }
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
  if (this.options.pagination.type === 'INFINITE_SCROLL') {
    var infiniteScrollTimer;
    var self = this;
    document.addEventListener("scroll", function () {
      // this setTimeout and clearTimeout logic will ensure the callback is not called on every few seconds, 
      // instead it is called only when the user stops interacting with the scroll position
      // do not change this logic
      infiniteScrollTimer && clearTimeout(infiniteScrollTimer);
      infiniteScrollTimer = setTimeout(function () {
        if (!self.viewState.isInfiniteStarted && !self.state.loading) {
          self.onInfiniteScroll();
        }
      }, 100);
    });
  }
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
    products.el.appendChild(this.searchResultsWrapper);
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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
}, _defineProperty(_events, "deleteFacet", "DELETE_FACET"), _defineProperty(_events, "clearSort", "CLEAR_SORT"), _defineProperty(_events, "changeSort", "CHANGE_SORT"), _defineProperty(_events, "pageNext", "PAGE_NEXT"), _defineProperty(_events, "pagePrev", "PAGE_PREV"), _defineProperty(_events, "changeInput", "CHANGE_INPUT"), _defineProperty(_events, "setCategoryFilter", "SET_CATEGORY_FILTER"), _defineProperty(_events, "deleteCategoryFilter", "DELETE_CATEGORY_FILTER"), _defineProperty(_events, "pageSizeChange", "PAGESIZE_CHANGE"), _events);
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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, src_toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function src_toPropertyKey(arg) { var key = src_toPrimitive(arg, "string"); return src_typeof(key) === "symbol" ? key : String(key); }
function src_toPrimitive(input, hint) { if (src_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (src_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (src_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
// import UnbxdSearchCore from "../../search-JS-core/src/index";









var src_UnbxdSearch = /*#__PURE__*/function (_UnbxdSearchCore) {
  _inherits(UnbxdSearch, _UnbxdSearchCore);
  var _super = _createSuper(UnbxdSearch);
  function UnbxdSearch(props) {
    var _this;
    _classCallCheck(this, UnbxdSearch);
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
  _createClass(UnbxdSearch, [{
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
}(unbxdSdk_default.a);
core_setMethods(src_UnbxdSearch);
/* harmony default export */ var src = __webpack_exports__["default"] = (src_UnbxdSearch);

/***/ })

/******/ })["default"];
});