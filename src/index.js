import UnbxdSearchCore from "../../../search-JS-core/src/index";
//import UnbxdSearchCore from "@unbxd-ui/unbxd-search-core";
import styles from '../styles/index.scss';
import delegate from "./modules/utils/delegate";
import options from './common/options';
import setMethods from './core/setMethods';
import intialize from './core/initialize';

import updateConfig from './core/updateConfig';

class UnbxdSearch extends UnbxdSearchCore {
    constructor(props) {
        super(props);
        this.viewState = {
            productViewType: options.productView.viewTypes,
            isInfiniteStarted:false,
            lastAction:'',
            selectedRange:{}
        };
        this.updateConfig = updateConfig.bind(this);
        this.updateConfig(options,props);
        this.intialize = intialize.bind(this);
        this.intialize();
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
            this.loaderEl.innerHTML = loader.template(this);
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
