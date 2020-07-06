function sortAction(e) {
    const elem = e.target;
    const selected = (this.options.facet.facetAction === "click") ? elem:elem.options[elem.selectedIndex];
    const dataSet = selected.dataset;    
    const {
        action
    } = elem.dataset;
    const value = elem.value;
    if(action === this.actions.clearSort) {
        this.applySort("");
        this.options.callBackFn(this,action);
    }
    if(action === this.actions.changeSort) {
        this.applySort(value);
        this.options.callBackFn(this,action, {
            sort:value
        });
    }
};
export {
    sortAction as default
}

