const setInputValue = function(e) {
    const val = this.options.searchBoxSelector.value;
    this.changeInput(val, this.events.changeInput);
    if(val) {
        this.getResults();
    } else{
        this.searchResultsWrapper.innerHTML = null;
    }
}
export {
    setInputValue as default
}
