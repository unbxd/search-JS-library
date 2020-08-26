import extend from '../utils/extend';
function onPageViewTypeClick(e) {
    const elem = e.target;
    const {
        action
    } = this.options.productView;
    const selected = (action === "click") ? elem:elem.options[elem.selectedIndex];
    const dataSet = selected.dataset;
    const {
        viewAction,
    } = dataSet;
    this.viewState.productViewType = viewAction;
    const {
        extraParams
    } = this.options;
    this.options.extraParams = extend(true,{},extraParams,{
        "viewType":viewAction
    });
    this.setPageStart(0);
    this.getResults.bind(this)();
}
export {
    onPageViewTypeClick
};
