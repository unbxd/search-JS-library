const setInputValue = function(e) {
    let val = this.options.searchBoxSelector.value;
    if (!val.replace(/\s/g, '').length) {
        return false;
    }
    this.resetFacets();
    this.options.productType = "SEARCH";
    val = (val.indexOf("#") === 0) ? val.replace("#",""):val;
    val = encodeURIComponent(val);
    this.changeInput(val, this.events.changeInput);
    if(val) {
        this.setPageStart(0);
        this.getResults();
        this.resetViewState()
    } else{
        this.searchResultsWrapper.innerHTML = null;
    }
}
export {
    setInputValue as default
}
