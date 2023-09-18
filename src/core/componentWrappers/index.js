
import createtSearchWrapper from "./createSearchWrapper";
import createImageBoxWrapper from "./createImageBoxWrapper";
import createFacetWrapper from "./createFacetWrapper";
import createBannerWrapper from "./createBannerWrapper";
import createBreadcrumbWrapper from "./createBreadcrumbWrapper";
import createPageSizeWrapper from "./createPageSizeWrapper";
import createSortWrapper from "./createSortWrapper";
import createSelectedFacetWrapper from "./createSelectedFacetWrapper";
import createSpellCheckWrapper from "./createSpellCheckWrapper";
import createPaginationWrapper from "./createPaginationWrapper";
import createProductViewTypeWrapper from "./createProductViewTypeWrapper";

const setComponentWrappers = (prototype) => {
    prototype = Object.assign(prototype,{
        createtSearchWrapper,
        createImageBoxWrapper,
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

export {
    setComponentWrappers as default,
    createtSearchWrapper,
    createImageBoxWrapper,
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
