const setInputValue = function(e) {
    let val = this.options.searchBoxEl.value;
    if (!val.replace(/\s/g, '').length) {
        return false;
    }
    this.resetFacets();
    this.options.productType = "SEARCH";
    val = (val.indexOf("#") === 0) ? val.replace("#",""):val;
    this.changeInput(val, this.events.changeInput);
    if(val) {
        this.viewState.loadedFromSuggestion = false;
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
