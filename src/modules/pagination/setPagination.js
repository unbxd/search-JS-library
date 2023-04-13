
import renderPagination from './renderPagination';
import onInfiniteScroll from './infiniteScroller';
import infiniteScrollV3 from './infiniteScrollV3';
import {
    renderNewResults,
    paginationAction
} from './actions';

const getAutoScrollParams = function () {
    const autoScrollParams = new URLSearchParams(window.location.search)
    return autoScrollParams;
}

const setPagination = (prototype) => {
    prototype = Object.assign(prototype, {
        renderPagination,
        renderNewResults,
        paginationAction,
        onInfiniteScroll,
        getAutoScrollParams,
        infiniteScrollV3
    })
}

export {
    setPagination as default,
    renderPagination,
    renderNewResults,
    paginationAction,
    onInfiniteScroll,
    getAutoScrollParams,
    infiniteScrollV3
};
