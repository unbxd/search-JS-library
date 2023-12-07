// import UnbxdSearchCore from "../../search-JS-core/src/index";
import UnbxdSearchCore from "@unbxd-ui/unbxd-search-core";
import styles from '../styles/index.scss'; /* eslint-disable-line no-unused-vars */
import delegate from "./modules/utils/delegate";
import options from './common/options';
import setMethods from './core/setMethods';
import events from './common/constants/eventsLib';
import actions from './common/constants/actions';
import {
    cssClasses,
    testIds
}
 from './common/constants'

import setConfig from './core/setConfig';

class UnbxdSearch extends UnbxdSearchCore {
    constructor(props) {
        super(props);
    this.viewState = {
            productViewType: this.state.productViewType || options.productView.defaultViewType,
            isInfiniteStarted:false,
            lastAction:'',
            selectedRange:{},
            expandedFacets:{},
            searchFacetsText:{},
            noResultLoaded:false,
            lastDidYouMean:null,
            loadedFromSuggestion:false,
            setFromSuggest:false,
            facetElementMap:{},
            initialised:false
        };
        this.setConfig = setConfig.bind(this);
        this.setConfig(options,props);
        this.events = events;
        this.actions = actions;
        this.cssList = cssClasses;
        this.testIds = testIds;
        this.updateConfig();
        this.options.onBackFromRedirect(this.getHashMode());
        this.options.onEvent(this, 'initialised');
    }
    callBack(state,type) {
        this.getCallbackActions(state,type);
        const {
            onEvent,
            loader,
            facet,
            productView
        } = this.options;
        const {
            beforeApiCall,
            afterApiCall,
        } = this.events;
        const urlParams = this.getQueryParams();
        let {
            [this.getPageViewParam()]: viewType
        } = urlParams || {};
        if(this.viewState.lastAction === "viewType") {
            viewType = this.viewState.productViewType;
            this.options.extraParams.viewType = viewType;
            this.viewState.lastAction = "";
        }
        if(!viewType) {
            viewType = this.viewState.productViewType || productView.defaultViewType;
            this.viewState.productViewType = viewType;
            this.options.extraParams.viewType = viewType;
        }
        if(this.viewState.productViewType !== viewType ){
            this.viewState.productViewType = this.getKeyByValue(this.options.url.pageViewParam.valuesReplacer , decodeURIComponent(viewType))
            this.options.extraParams.viewType = viewType;
        }
        if(type === beforeApiCall) { 
            onEvent(this,beforeApiCall);
            if(loader && loader.el) {
                loader.el.innerHTML = loader.template(this);
            }
        }
        if(type === afterApiCall) { 
            onEvent(this,afterApiCall);
            if(this.state.products.length > 0) {
                this.viewState.noResultLoaded = false;
            }
            this.reRender();
        }
        if((type === 'added_facet' || type === 'deleted_facet' ) && facet.applyMultipleFilters) {
            onEvent(this,'added_facet');
            this.renderFacets();
        }
        if(type === "FETCH_ERROR") {
            if(loader && loader.el) {
                loader.el.innerHTML = ``;
            }
        }
    }
    delegate(delgationElem,evt,elem,fn){
        return delegate(delgationElem,evt,elem,fn);
    }
}
setMethods(UnbxdSearch);
export default UnbxdSearch;
