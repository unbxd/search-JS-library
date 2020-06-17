import UnbxdSearchCore from "../node_modules/unbxdsdk/src/index";
import delegate from "./modules/utils/delegate";
import RangeSlider from "./modules/widgets/RangeSlider";
import options from './common/options';
import createLayout from './core/createLayout';
import setMethods from './core/setMethods';
import intialize from './core/initialize';

class UnbxdSearch extends UnbxdSearchCore {
    constructor(props) {
        super(props);
        this.options = Object.assign({},options,props);
        this.viewState = {
            productViewType: this.options.productViewTypes,
            isInfiniteStarted:false
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
            loaderElem,
        } = this.options;
        const {
            beforeApiCall,
            afterApiCall,
        } = this.events;
        if(type === beforeApiCall) { 
            callBackFn(this,beforeApiCall);
            this.loaderContainer.innerHTML = loaderElem(this);
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
    root.UnbxdSearch = UnbxdSearch;
});
export default UnbxdSearch;
