
import createtSearchWrapper from "./createSearchWrapper";
import createFacetWrapper from "./createFacetWrapper";
import createBannerWrapper from "./createBannerWrapper";
import createBreadcrumbWrapper from "./createBreadcrumbWrapper";
import createPageSizeWrapper from "./createPageSizeWrapper";
import createSortWrapper from "./createSortWrapper";
import createSelectedFacetWrapper from "./createSelectedFacetWrapper";
import createSpellCheckWrapper from "./createSpellCheckWrapper";
import createPaginationWrapper from "./createPaginationWrapper";
import createProductViewTypeWrapper from "./createProductViewTypeWrapper";

/* eslint-disable no-unused-vars */
const setComponentWrappers = (prototype) => {
    prototype = Object.assign(prototype,{
        createtSearchWrapper,
        createFacetWrapper,
        createBannerWrapper,
        createBreadcrumbWrapper,
        createPageSizeWrapper,
        createSortWrapper,
        createSelectedFacetWrapper,
        createSpellCheckWrapper,
        createPaginationWrapper,
        createProductViewTypeWrapper
    })
};
/* eslint-disable no-unused-vars */

export {
    setComponentWrappers as default,
    createtSearchWrapper,
    createFacetWrapper,
    createBannerWrapper,
    createBreadcrumbWrapper,
    createPageSizeWrapper,
    createSortWrapper,
    createSelectedFacetWrapper,
    createSpellCheckWrapper,
    createPaginationWrapper,
    createProductViewTypeWrapper
};
