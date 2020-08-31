const setInputValue = function(e) {
    let val = this.options.searchBoxSelector.value;
    if (!val.replace(/\s/g, '').length) {
        return false;
    }
    this.resetFacets();
    this.options.productType = "SEARCH";
    val = encodeURIComponent(val);
    this.changeInput(val, this.events.changeInput);
    if(val) {
        this.setPageStart(0);
        this.getResults();
    } else{
        this.searchResultsWrapper.innerHTML = null;
    }
}
export {
    setInputValue as default
}
