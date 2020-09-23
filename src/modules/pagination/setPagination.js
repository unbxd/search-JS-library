
import renderPagination from './renderPagination';
import onInfiniteScroll from './infiniteScroller';
import {
    renderNewResults,
    paginationAction
} from './actions';
const setPagination = (prototype) => {
    prototype = Object.assign(prototype,{
        renderPagination,
        renderNewResults,
        paginationAction,
        onInfiniteScroll
    })
}

export {
    setPagination as default,
    renderPagination,
    renderNewResults,
    paginationAction,
    onInfiniteScroll
};
