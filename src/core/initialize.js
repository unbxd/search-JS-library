

import unxSelectors from '../common/constants/selectors';
import reRender from './reRender';
import bindEvents from './bindEvents';
import validateConfigs from './validateConfigs';

const initialize = function() {
    this.validateConfigs = validateConfigs.bind(this);
    this.validateConfigs();
    this.createLayout();
    this.unxSelectors = unxSelectors;
    this.renderDidYouMean.bind(this);
    this.options.onEvent.bind(this);
    this.options.products.onProductClick.bind(this);
    this.reRender = reRender.bind(this);
    this.bindEvents = bindEvents.bind(this);
  
    this.bindEvents();
    const urlParams = this.getQueryParams();
    const ln = Object.keys(urlParams).length;
    const {
        defaultViewType,
        enabled
    } = this.options.productView;
    if(ln > 0){
        const {
            viewType
        } = urlParams;
        if(viewType) {
            this.viewState.productViewType = viewType;
            this.options.extraParams.viewType = viewType;
        }
    } else {
        this.options.extraParams.viewType = defaultViewType;
    }
    if(enabled) {
        this.renderProductViewTypeUI();
    }


    

}
export default initialize;
