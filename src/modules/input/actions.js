const setInputValue = function(e) {
    let val = this.options.searchBoxEl.value;
    if (!val.replace(/\s/g, '').length) {
        return false;
    }
    this.options.productType = "SEARCH";
    val = (val.indexOf("#") === 0) ? val.replace("#",""):val;
    if(val) {
        this.resetAll();
        this.changeInput(val, this.events.changeInput);
        this.options.products.productType = "SEARCH";
        this.viewState.loadedFromSuggestion = false;
        this.state.selectedSort = "";
        this.setPageStart(0);
        this.resetViewState();
        this.getResults();

    } else{
        this.searchResultsWrapper.innerHTML = null;
    }
}
export {
    setInputValue as default
}
