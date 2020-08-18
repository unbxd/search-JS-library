
import events from '../common/constants/events';
import actions from '../common/constants/actions';
import unxSelectors from '../common/constants/selectors';
import reRender from './reRender';
import bindEvents from './bindEvents';
import createLayout from '../core/createLayout';

const initialize = function() {
    this.events = events;
    this.actions = actions;
    this.createLayout = createLayout.bind(this);
    this.createLayout();
    this.unxSelectors = unxSelectors;
    this.renderDidYouMean.bind(this);
    this.options.callBackFn.bind(this);
    this.options.products.productClick.bind(this);
    this.reRender = reRender.bind(this);
    this.bindEvents = bindEvents.bind(this);
    this.bindEvents();
    this.callBack = this.callBack.bind(this);
    const urlParams = this.getQueryParams();
    const ln = Object.keys(urlParams).length;
    if(ln > 0){
        this.renderFromUrl();
    }
    this.renderProductViewTypeUI();

}
export default initialize;
