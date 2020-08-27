//import UnbxdSearchCore from "../../../search-JS-core/src/index";
import UnbxdSearchCore from "@unbxd-ui/unbxd-search-core";
import styles from '../styles/index.scss';
import delegate from "./modules/utils/delegate";
import options from './common/options';
import setMethods from './core/setMethods';
import events from './common/constants/eventsLib';
import actions from './common/constants/actions';

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
            noResultLoaded:false
        };
        this.setConfig = setConfig.bind(this);
        this.setConfig(options,props);
        this.events = events;
        this.actions = actions;
    }
    callBack(state,type) {
        this.getCallbackActions(state,type);
        const {
            callBackFn,
            loader,
            facet
        } = this.options;
        const {
            beforeApiCall,
            afterApiCall,
        } = this.events;
        if(type === beforeApiCall) { 
            callBackFn(this,beforeApiCall);
            loader.el.innerHTML = loader.template(this);
        }
        if(type === afterApiCall) { 
            callBackFn(this,afterApiCall);
            this.reRender();
        }
        if((type === 'added_facet' || type === 'deleted_facet' ) && facet.applyMultipleFilters) {
            callBackFn(this,'added_facet');
            this.renderFacets();
        }
    }
    delegate(delgationElem,evt,elem,fn){
        return delegate(delgationElem,evt,elem,fn);
    }
}
setMethods(UnbxdSearch);
(function (root, factory) {
	if ( typeof define === 'function' && define.amd ) {
		define(['UnbxdSearch'], factory(root));
	}  else {
		root['myPlugin'] = factory(root, root['UnbxdSearch']);
	}
})(typeof global !== "undefined" ? global : this.window || this.global, function (root) {
    root['UnbxdSearch'] = UnbxdSearch;
});
export default UnbxdSearch;
