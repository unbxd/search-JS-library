/* eslint-disable no-unused-vars */

import renderPagination from './renderPagination';
import setUpInfiniteScroll from './infiniteScroller';
import {
    renderNewResults,
    paginationAction
} from './actions';


const getProductsPerPage = function () {
    let {
        url: {
            pageSizeParam: {
                keyReplacer = "",
                addToUrl,
                algo = "DEFAULT"
            } = {}
        } = {},
        pagesize: {
            pageSize
        } = {}
    } = this.options;


    if (addToUrl) {
        const urlParams = this.readQueryParamsFromUrl(this.options.hashMode ? location.hash.slice(1) : location.search);
        return Number(urlParams[((algo === "KEY_VALUE_REPLACER") ? keyReplacer : "rows")])
    } else {
        return this.state.pageSize || pageSize;
    }
}

const getCurrentUrlPage = function () {
    const urlParams = this.readQueryParamsFromUrl(this.options.hashMode ? location.hash.slice(1) : location.search);
    let {
        url: {
            pageNoParam: {
                algo = "DEFAULT",
                usePageNo = false,
                keyReplacer = "",
                addToUrl
            } = {}
        } = {}
    } = this.options;

    if (addToUrl) {
        const pageNo = Number(urlParams[(algo === "KEY_VALUE_REPLACER") ? keyReplacer : usePageNo ? "page" : "start"]);
        return usePageNo ? Number(pageNo) : Number((pageNo / getProductsPerPage.call(this)) + 1)
    } else if (usePageNo) {
        if (!this.viewState[ 'page' ]) { this.viewState[ 'page' ] = 1; }
        return this.viewState[ 'page' ]
    } else {
        if (!this.viewState[ 'start' ]) { this.viewState[ 'start' ] = 0; }
        return Number(((this.viewState[ 'start' ]) / this.state.pageSize) + 1);
    }
}

const setPageNoParam = function (value) {
    const {
        url: {
            pageNoParam: {
                algo,
                usePageNo = false,
                keyReplacer,
                addToUrl
            } = {},
        } = {}
    } = this.options;

    if (addToUrl) {
        const urlParams = this.readQueryParamsFromUrl(this.options.hashMode ? location.hash.slice(1) : location.search);
        urlParams[((algo === "KEY_VALUE_REPLACER") ? keyReplacer : usePageNo ? 'page' : 'start')] = [value];
        history.replaceState(null, null, this.urlSearchParamsToStr(urlParams));
    } else if (usePageNo) {
        this.viewState[ 'page' ] = value;
    } else {
        this.viewState[ 'start' ] = value;
    }

}

const setPagination = (prototype) => {
    prototype = Object.assign(prototype, {
        renderPagination,
        renderNewResults,
        paginationAction,
        setUpInfiniteScroll,
        getProductsPerPage,
        getCurrentUrlPage,
        setPageNoParam
    })
}

export {
    setPagination as default,
    renderPagination,
    renderNewResults,
    paginationAction,
    setUpInfiniteScroll,
    getProductsPerPage,
    getCurrentUrlPage,
    setPageNoParam
};
