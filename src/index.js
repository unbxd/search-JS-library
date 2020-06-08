import UnbxdSearchCore from "../node_modules/unbxdsdk/src/index";
import delegate from "./modules/utils/delegate";
import RangeSlider from "./modules/widgets/RangeSlider";
import {
    events,
    actions
} from "./common/constants/index";
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
        const {
            callBackFn,
            loaderElem,
        } = this.options;
        const {
            beforeApiCall,
            afterApiCall,
        } = events;
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
export default UnbxdSearch;
