//import UnbxdSearchCore from "../../../search-JS-core/src/index";
import UnbxdSearchCore from "@unbxd-ui/unbxd-search-core";
import styles from '../styles/index.scss';
import delegate from "./modules/utils/delegate";
import options from './common/options';
import setMethods from './core/setMethods';
import events from './common/constants/eventsLib';
import actions from './common/constants/actions';
import {
    cssClasses
}
 from './common/constants'

import setConfig from './core/setConfig';


class UnbxdSearch extends UnbxdSearchCore {
    constructor(props) {
        super(props);
        this.viewState = {
            productViewType: options.productView.viewTypes,
            isInfiniteStarted:false,
            lastAction:'',
            selectedRange:{},
            expandedFacets:{},
            searchFacetsText:{},
            noResultLoaded:false,
            lastDidYouMean:null,
            loadedFromSuggestion:false,
            facetElementMap:{},
            lastFacets:[],
            initialised:false
        };
        this.setConfig = setConfig.bind(this);
        this.setConfig(options,props);
        this.events = events;
        this.actions = actions;
        this.cssList = cssClasses;
        this.updateConfig();
        this.options.onEvent(this, 'initialised')
    }
    callBack(state,type) {
        this.getCallbackActions(state,type);
        const {
            onEvent,
            loader,
            facet
        } = this.options;
        const {
            beforeApiCall,
            afterApiCall,
        } = this.events;
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
            onEvent(this,afterApiCall);
            this.reRender();
        }
        if((type === 'added_facet' || type === 'deleted_facet' ) && facet.applyMultipleFilters) {
            onEvent(this,'added_facet');
            this.renderFacets();
        }
    }
    delegate(delgationElem,evt,elem,fn){
        return delegate(delgationElem,evt,elem,fn);
    }
}
setMethods(UnbxdSearch);
export default UnbxdSearch;
