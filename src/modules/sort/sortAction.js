function sortAction(e) {
    const elem = e.target ;
    this.viewState.lastDidYouMean = "";
    const selected = (this.options.sort.action === "click") ? elem:elem.options[elem.selectedIndex];
    const dataSet = selected.dataset;    
    const {
        action,
        value
    } = elem.dataset ;
    const sortVal = elem.value || value || "" ;
    const {
        changeSort
    } = this.events;
    this.checkFacets();
    if(action === this.actions.clearSort) {
        this.applySort("");
        this.options.onEvent(this,action);
    }
    if(action === this.actions.changeSort) {
        this.applySort(sortVal);
        this.options.onEvent(this,changeSort, {
            sort:sortVal
        });
    }
    
};
export {
    sortAction as default
}

