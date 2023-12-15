const setImageValue = function() {
    try{
        let val = this.options.visualSearch.uploadConfig.input.value ;
        if (!val.replace(/\s/g, '').length) {
            return false;
        }
        this.options.productType = "SEARCH";
        val = (val.indexOf("#") === 0) ? val.replace("#", "") : val;
        if (val) {
            this.resetAll();
            this.changeInput(val, this.events.changeInput);
            this.options.visualSearchRequest = true
            this.viewState.loadedFromSuggestion = false;
            this.state.selectedSort = "";
            this.setPageStart(0);
            this.resetViewState();
            this.getResults();
        } else {
            this.searchResultsWrapper.innerHTML = null;
        }
    }catch(err){
        this.onError("input > setImageValue.js",err)
    }
    
}
export {
    setImageValue as default
}
