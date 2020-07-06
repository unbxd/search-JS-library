import UnbxdSearchCore from "../node_modules/@unbxd-ui/unbxd-search-core/src";
import styles from '../styles/index.scss';

import delegate from "./modules/utils/delegate";
import RangeSlider from "./modules/widgets/RangeSlider";
import options from './common/options';
import createLayout from './core/createLayout';
import setMethods from './core/setMethods';
import intialize from './core/initialize';
import extend from './modules/utils/extend';

class UnbxdSearch extends UnbxdSearchCore {
    constructor(props) {
        super(props);
        this.options = extend(true,{},options,props);
        this.options.facetMultilevel = props.facet.facetMultilevel || false;
        this.options.facetMultiSelect = props.facet.facetMultiSelect || true;
        this.options.facetDepth = props.facet.facetDepth || 6;
        this.options.pageSize = props.pagesize.pageSize || 12;
        this.options.showSwatches = (props.swatches) ? props.swatches.enabled :false;
        this.options.applyMultipleFilters = props.facet.applyMultipleFilters || false;
        this.viewState = {
            productViewType: this.options.productView.viewTypes,
            isInfiniteStarted:false,
            lastAction:''
        };
        createLayout.bind(this)();
        intialize.bind(this)();
        this.widgets = {
            RangeSlider:RangeSlider.bind(this)
        };
    }
    callBack(state,type) {
        this.getCallbackActions(state,type);
        const {
            callBackFn,
            loaderTemplate,
        } = this.options;
        const {
            beforeApiCall,
            afterApiCall,
        } = this.events;
        if(type === beforeApiCall) { 
            callBackFn(this,beforeApiCall);
            this.loaderEl.innerHTML = loaderTemplate(this);
        }
        if(type === afterApiCall) { 
            callBackFn(this,afterApiCall);
            this.reRender();
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
		root.myPlugin = factory(root, root.UnbxdSearch);
	}
})(typeof global !== "undefined" ? global : this.window || this.global, function (root) {
    console.log(root,"root");
    root.UnbxdSearch = UnbxdSearch;
});
export default UnbxdSearch;
