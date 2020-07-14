import renderBannerUI from '../modules/banners/setbannerMethods';
import setFacets from '../modules/facets/setFacetMethods';
import setSearch from '../modules/searchResults/setSearch';
import setProductViewType from '../modules/productViewType/setProductViewType';
import setPagination from '../modules/pagination/setPagination';
import setSort from '../modules/sort/setSort';
import setInput from '../modules/input/setInput';
import setSpellCheck from '../modules/didYouMean/setSpellCheck';
import setBreadCrumbs from '../modules/breadcrumbs/setBreadcrumbs';
import setSwatches from '../modules/swatches/setSwatches';
import setPageSize from '../modules/pageSize/setPageSize';
import setAnalytics from '../modules/analytics/setAnalytics';
import RangeSlider from '../modules/widgets/RangeSlider';

const setMethods = (UnbxdSearch) => {
    const {
        prototype
    } = UnbxdSearch;
    prototype.renderBannerUI = renderBannerUI;
    prototype.RangeSlider = RangeSlider;
    setInput(prototype);
    setProductViewType(prototype);
    setFacets(prototype);
    setSearch(prototype);
    setPagination(prototype);
    setSort(prototype);
    setSpellCheck(prototype);
    setBreadCrumbs(prototype);
    setSwatches(prototype);
    setPageSize(prototype);
    setAnalytics(prototype);

}
export default setMethods;
