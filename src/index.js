//import UnbxdSearchCore from "../../../search-JS-core/src/index";
import UnbxdSearchCore from "@unbxd-ui/unbxd-search-core";
import styles from '../styles/index.scss';
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
            productViewType: options.productView.defaultViewType,
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
            lastFacets:[],
            initialised:false
        };
        this.setConfig = setConfig.bind(this);
        this.setConfig(options,props);
        this.events = events;
        this.actions = actions;
        this.cssList = cssClasses;
        this.testIds = testIds;
        this.updateConfig();
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
        const {
            viewType
        } = urlParams || {};
        if(type ==="lastBack") {
            onEvent(this,"lastBack");
        }
        if(type === beforeApiCall) { 
            onEvent(this,beforeApiCall);
            if(loader && loader.el) {
                loader.el.innerHTML = loader.template(this);
            }
        }
        if(type === afterApiCall) { 
            if(viewType) {
                this.viewState.productViewType = viewType;
            } else {
                this.viewState.productViewType = productView.defaultViewType;
            }
            onEvent(this,afterApiCall);
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
            console.error("Some error occured. please check whether the given sitekey and apikey is correct")
        }
    }
    delegate(delgationElem,evt,elem,fn){
        return delegate(delgationElem,evt,elem,fn);
    }
}
setMethods(UnbxdSearch);
export default UnbxdSearch;
