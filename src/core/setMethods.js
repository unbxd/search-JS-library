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
import initialize from '../core/initialize';

const setSearchWidget = function(config){
    const {
        products
    } = this.options;
    const newOps = Object.assign({},products,config);
    this.options.products = newOps;
}
const setFacetWidget = function(config){
    const {
        facet
    } = this.options;
    const newOps = Object.assign({},facet,config);
    this.options.facet = newOps;
}
const updateConfig = function(config){
    const {
        options
    } = this;
    this.setConfig(options, config);
    this.initialize();

}
const renderFacets = function(){
    const {
        defaultOpen,
        applyMultipleFilters,
        isCollapsible,
    } = this.options.facet;
    const {
        expandedFacets,
        lastAction
    } = this.viewState;
    if(lastAction === "updatedRangeSlider") {
        return false;
    }
    const self = this;
    const allFacets = this.getAllFacets();
    const {
        facetsWrapper,
        selectedFacetWrapper
    } = this;
    if(defaultOpen !=="NONE") {
        allFacets.forEach((item,i)=> {
            const {
                facetName
            } = item;
            if(typeof expandedFacets[facetName] === "undefined" && defaultOpen === "ALL") {
                expandedFacets[facetName] = true
            }
            if(defaultOpen === "FIRST" && i == 0) {
                expandedFacets[facetName] = true
            }
        })
    } else {
        self.viewState.expandedFacets = {};
    }
    facetsWrapper.innerHTML = ``;
    const selectedFacets = this.getSelectedFacets();
    allFacets.forEach((facet,idx) => {
        const {
            facetType,
            facetName
        } = facet;
        const isExpanded =  this.isExpandedFacet(facetName);
        const facetSearchTxt = this.getSearchFacetsText(facetName) || "";
        const selectedFacet = selectedFacets[facetName];
        if(facetType === "text") {
            facetsWrapper.innerHTML += this.renderTextFacet(facet,selectedFacet,isExpanded,facetSearchTxt);
        }
        if(facetType === "range") {
            facetsWrapper.innerHTML += this.renderRangeFacet(facet,isExpanded,"");
        }
        if(facetType === "category") {
            facetsWrapper.innerHTML += this.renderMultiLevelFacet(facet,isExpanded,"");
        }
        this.viewState.facetElementMap[facetName] = facetName;
        let shouldRenderSelected = true;
        const qState = this.getStateFromUrl();
        const ql = Object.keys(qState.selectedFacets).length;
        if((lastAction === "addedAFacet" || lastAction ==="deletedAfacet")  && applyMultipleFilters && ql === 0) {
            shouldRenderSelected = false;
        }
        if(this.options.facet.selectedFacetsEl && selectedFacets && shouldRenderSelected ) {
            const k = Object.keys(selectedFacets);
            let selectedUi = ``;
            for(let i=0;i<k.length;i++){
                const j = k[i];
                const vals = selectedFacets[j];
                vals.forEach(item => {
                    const {
                        name,
                        count,
                        dataId
                    } = item;
                    selectedUi += this.options.facet.selectedFacetTemplate.bind(this)({
                        facetName:j
                    },{
                        name:name,
                        dataId:(dataId)?dataId:name,
                        count:count?count:0
                    });
                })
            }
            selectedFacetWrapper.innerHTML = this.options.facet.selectedFacetItemTemplate(selectedUi);
        }

    })
    this.options.facet.onFacetLoad.bind(this)(allFacets);
}
const extraActions = function(e) {
    const {
        actionCallback
    } = this.options;
    const {
        target
    } = e;
    const {
        dataset
    } = target;
    const {
        openFacet,
        closeFacet,
        openBtn,
        closeBtn,
        viewMore,
        viewLess
    } = this.cssList;
    const {
        viewMoreText,
        textFacetWrapper
    } = this.options.facet;
    if(dataset) {
        const {
            facetAction,
            facetName,
            action,
            id
        } = dataset;
        const {
            facetElementMap
        } = this.viewState;
        const fI=document.getElementById(facetElementMap[facetName]);
        if(facetAction === "facetOpen") {
            this.viewState.expandedFacets[facetName] = true;
            target.classList.add(openBtn);
            target.classList.remove(closeBtn);
            target.setAttribute("data-facet-action","facetClose");
            fI.classList.remove(closeFacet);
            fI.classList.add(openFacet);
        }
        if(facetAction === "facetClose") {
            this.viewState.expandedFacets[facetName] = false;
            target.classList.remove(openBtn);
            target.classList.add(closeBtn);
            target.setAttribute("data-facet-action","facetOpen");
            fI.classList.remove(openFacet);
            fI.classList.add(closeFacet);
        }
        if(action === "viewMore") {
            target.setAttribute("data-action","viewLess");
            target.innerHTML = viewMoreText[1];
            const fcEl = fI.querySelector(`.${textFacetWrapper}`);
            fcEl.classList.remove(viewMore);
            fcEl.classList.add(viewLess);
        }
        if(action === "viewLess") {
            target.setAttribute("data-action","viewMore");
            target.innerHTML = viewMoreText[0];
            const fcEl = fI.querySelector(`.${textFacetWrapper}`);
            fcEl.classList.remove(viewLess);
            fcEl.classList.add(viewMore);
        }
    }
    actionCallback(e, this);
}
const extraActionsChange = function(e) {
    const {
        actionCallback
    } = this.options;
    const {
        dataset
    } = e.target;
    if(dataset) {
        const {
            facetAction,
            facetName
        } = dataset;
        if(facetAction === "searchFacets") {
            this.setSearchFacetsText(facetName,e.target.value);
        }
    }
    actionCallback(e, this);
}
const getCategoryPage = function() {
    this.resetFacets();
    this.options.productType = "CATEGORY";
    this.options.products.productType = "CATEGORY";
    this.getResults();
}
const getBrowsePage = function() {
    this.resetFacets();
    this.options.productType = "BROWSE";
    this.options.products.productType = "BROWSE";
    this.getResults();
}
const resetViewState = function() {
    this.viewState.lastDidYouMean = null;
    this.viewState.searchFacetsText={};
    this.viewState.lastDidYouMean = null;
    this.viewState.expandedFacets = {};
}
const generateRid = (custom="unx_") => {
    return custom + Math.random().toString(36).substr(2, 9);
};


const setMethods = (UnbxdSearch) => {
    const {
        prototype
    } = UnbxdSearch;
    prototype.renderBannerUI = renderBannerUI;
    prototype.RangeSlider = RangeSlider;
    prototype.setSearchWidget = setSearchWidget;
    prototype.setFacetWidget = setFacetWidget;
    prototype.renderFacets = renderFacets;
    prototype.updateConfig = updateConfig;
    prototype.initialize = initialize;
    prototype.extraActions = extraActions;
    prototype.extraActionsChange = extraActionsChange;
    prototype.getCategoryPage = getCategoryPage;
    prototype.getBrowsePage = getBrowsePage;
    prototype.resetViewState = resetViewState;
    prototype.generateRid = generateRid;
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
