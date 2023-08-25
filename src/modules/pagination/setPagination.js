
import renderPagination from './renderPagination';
import setUpInfiniteScroll from './infiniteScroller';
import {
    renderNewResults,
    paginationAction
} from './actions';


const getProductsPerPage = function(){
    const urlParams = new URLSearchParams(this.options.hashMode ? location.hash.slice(1) : location.search);
    let productsPerPage;
    if (this.options.pagination.usePageAndCount) {
        productsPerPage = Number(urlParams.get('count'));
    } else {
        productsPerPage = Number(urlParams.get('rows'));
    }
    return productsPerPage;
}

const getCurrentUrlPage = function(){
    const urlParams = new URLSearchParams(this.options.hashMode ? location.hash.slice(1) : location.search);
    let currentUrlPage;
    if (this.options.pagination.usePageAndCount) {
        currentUrlPage = Number(urlParams.get('page')) || 1;
    } else {
        currentUrlPage = Number(urlParams.get('start') / urlParams.get('rows')) + 1;
    }
    return currentUrlPage;
}

const replaceParamInUrl = function (key, value) {
    const urlParams = new URLSearchParams(this.options.hashMode ? location.hash.slice(1) : location.search);
    urlParams.set(key, value);
    history.replaceState(null, null, this.urlSearchParamsToStr(urlParams));
}

const setPagination = (prototype) => {
    prototype = Object.assign(prototype, {
        renderPagination,
        renderNewResults,
        paginationAction,
        setUpInfiniteScroll,
        getProductsPerPage,
        getCurrentUrlPage,
        replaceParamInUrl
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
    replaceParamInUrl
};
