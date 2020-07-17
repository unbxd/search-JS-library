const setInputValue = function(e) {
    const val = this.options.searchBoxSelector.value;
    this.resetFacets();
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
