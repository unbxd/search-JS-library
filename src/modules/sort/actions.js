function sortAction(e) {
    const elem = e.target;
    this.viewState.lastDidYouMean = "";
    const selected = (this.options.facet.facetAction === "click") ? elem:elem.options[elem.selectedIndex];
    const dataSet = selected.dataset;    
    const {
        action
    } = elem.dataset;
    const value = elem.value;
    const {
        changeSort
    } = this.events;
    if(action === this.actions.clearSort) {
        this.applySort("");
        this.options.onEvent(this,action);
    }
    if(action === this.actions.changeSort) {
        this.applySort(value);
        this.options.onEvent(this,changeSort, {
            sort:value
        });
    }
};
export {
    sortAction as default
}

