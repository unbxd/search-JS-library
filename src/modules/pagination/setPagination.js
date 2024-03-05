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
        return Number(urlParams[ ((algo === "KEY_VALUE_REPLACER") ? keyReplacer : "rows") ])
    } else {
        return this.state.pageSize || pageSize;
    }
}

const getCurrentUrlPage = function () {

    let currentUrlPage;
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

    if (usePageNo) {
        if (!this.viewState[ 'page' ]) {
            if (addToUrl) {
                const urlParams = this.readQueryParamsFromUrl(this.options.hashMode ? location.hash.slice(1) : location.search);
                const pageNo = Number(urlParams[ (algo === "KEY_VALUE_REPLACER") ? keyReplacer : usePageNo ? "page" : "start" ]);
                this.viewState[ 'page' ] = Number(pageNo);
            } else {
                this.viewState[ 'page' ] = 1;
            }
        }
        return this.viewState[ 'page' ]

    } else {
        if (!this.viewState[ 'start' ]) {
            if (addToUrl) {
                const urlParams = this.readQueryParamsFromUrl(this.options.hashMode ? location.hash.slice(1) : location.search);
                const pageNo = Number(urlParams[ (algo === "KEY_VALUE_REPLACER") ? keyReplacer : usePageNo ? "page" : "start" ]);
                this.viewState[ 'start' ] = Number((pageNo / getProductsPerPage.call(this)) + 1)
            } else {
                this.viewState[ 'start' ] = 1;
            }
        }
        return this.viewState[ 'start' ]
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

    const i = value;

    this.viewState[ usePageNo ? 'page' : 'start' ] = Number(value);

    addToUrl && setTimeout(() => {
        const urlParams = this.readQueryParamsFromUrl(this.options.hashMode ? location.hash.slice(1) : location.search);
        urlParams[ ((algo === "KEY_VALUE_REPLACER") ? keyReplacer : usePageNo ? 'page' : 'start') ] = [ i ];
        history.replaceState(null, null, this.urlSearchParamsToStr(urlParams));
    }, 0)

}

const getFirstPrank = function () {
    const products = document.getElementsByClassName(this.options.products.productItemClass || "product-item");
    if (products.length === 0) {
        return 1; // making this return 1 instead of null as for the noProducts this fails.
    }

    const firstPrank = parseInt(products[ 0 ].dataset.prank, 10);
    return firstPrank;
}

const getLastPrank = function () {
    const products = document.getElementsByClassName(this.options.products.productItemClass || "product-item");
    if (products.length === 0) {
        return null;
    }

    const lastPrank = parseInt(products[ products.length - 1 ].dataset.prank, 10);
    return lastPrank;
}

const setPagination = (prototype) => {
    prototype = Object.assign(prototype, {
        renderPagination,
        renderNewResults,
        paginationAction,
        setUpInfiniteScroll,
        getProductsPerPage,
        getCurrentUrlPage,
        setPageNoParam,
        getFirstPrank,
        getLastPrank
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
