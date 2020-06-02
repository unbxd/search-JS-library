function onPageViewTypeClick(e) {
    const dataElem = e.target.dataset;
    const {
        viewAction,
    } = dataElem;
    this.viewState.productViewType = viewAction;
    this.setPageStart(0);
    this.getResults.bind(this)();
}
export {
    onPageViewTypeClick
};
