
import events from '../common/constants/events';
import actions from '../common/constants/actions';
import reRender from './reRender';
import bindEvents from './bindEvents';

const initialize = function() {
    this.renderDidYouMean.bind(this);
    this.options.callBackFn.bind(this);
    this.options.productClick.bind(this);
    this.callBack = this.callBack.bind(this);
    this.renderSwatchBtns = this.renderSwatchBtns.bind(this);
    this.reRender = reRender.bind(this);
    this.renderProductViewTypeUI();
    const urlParams = this.getQueryParams();
    if(urlParams[this.options.searchQueryParam]){
        this.renderFromUrl();
    }
    this.events = events;
    this.actions = actions;
    this.bindEvents = bindEvents.bind(this)();

}
export default initialize;
