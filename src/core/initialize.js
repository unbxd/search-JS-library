
import events from '../common/constants/events';
import actions from '../common/constants/actions';
import unxSelectors from '../common/constants/selectors';
import reRender from './reRender';
import bindEvents from './bindEvents';

const initialize = function() {
    this.events = events;
    this.actions = actions;
    this.unxSelectors = unxSelectors;
    this.renderDidYouMean.bind(this);
    this.options.callBackFn.bind(this);
    this.options.productClick.bind(this);
    this.reRender = reRender.bind(this);
    this.bindEvents = bindEvents.bind(this)();
    this.callBack = this.callBack.bind(this);
    const urlParams = this.getQueryParams();
    if(urlParams[this.options.searchQueryParam]){
        this.renderFromUrl();
    }
    this.renderProductViewTypeUI();

}
export default initialize;
