

import unxSelectors from '../common/constants/selectors';
import reRender from './reRender';
import bindEvents from './bindEvents';
import createLayout from '../core/createLayout';

const initialize = function() {
    this.createLayout = createLayout.bind(this);
    this.createLayout();
    this.unxSelectors = unxSelectors;
    this.renderDidYouMean.bind(this);
    this.options.callBackFn.bind(this);
    this.options.products.productClick.bind(this);
    this.reRender = reRender.bind(this);
    this.bindEvents = bindEvents.bind(this);
    this.bindEvents();
    const urlParams = this.getQueryParams();
    const ln = Object.keys(urlParams).length;
    if(ln > 0){
        const {
            viewType
        } = urlParams;
        if(viewType) {
            this.viewState.productViewType = viewType;
            this.options.extraParams.viewType = viewType;
        }
        this.renderFromUrl();
    }
    this.renderProductViewTypeUI();

}
export default initialize;
