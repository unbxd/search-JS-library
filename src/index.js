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

const packageJson = require('../package.json');

class UnbxdSearch extends UnbxdSearchCore {
    constructor(props) {
        super(props);
    this.viewState = {
            productViewType: this.state.productViewType || options.productView.defaultViewType,
            isInfiniteStarted: (this.options?.pagination?.type === "INFINITE_SCROLL" || this.options?.pagination?.type === "CLICK_N_SCROLL")? true: false,
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
        this.options.onEvent(this, 'before_initialised');
        this.updateConfig();
        this.options.onBackFromRedirect(this.getHashMode());
        this.options.onEvent(this, 'initialised');
        this.sdkVersion = packageJson.version;
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
            try{
                onEvent(this, beforeApiCall);
            }catch(error){
                this.onError("callback", error, events.runtimeError);
            }
            
            if(loader && loader.el) {
                loader.el.innerHTML = loader.template(this);
            }
        }
        if(type === afterApiCall) { 
            try{
                onEvent(this, afterApiCall);
            }catch(error){
                this.onError("callback", error, events.runtimeError);
            }
            
            if(this.state.products.length > 0) {
                this.viewState.noResultLoaded = false;
            }
            this.reRender();
        }
        if((type === 'added_facet' || type === 'deleted_facet' ) && facet.applyMultipleFilters) {
            try{
                onEvent(this, 'added_facet');
            }catch(error){
                this.onError("callback", error, events.runtimeError);
            }
            
            this.renderFacets();
        }
        if(type === "FETCH_ERROR") {
            try{
                if (loader && loader.el) {
                    loader.el.innerHTML = ``;
                }
                onEvent(this, 'FETCH_ERROR');
            }catch(error){
                this.onError("callback", error, events.fetchError);
            }
            
        }
    }
    delegate(delgationElem,evt,elem,fn){
        return delegate(delgationElem,evt,elem,fn);
    }
}
setMethods(UnbxdSearch);
export default UnbxdSearch;
