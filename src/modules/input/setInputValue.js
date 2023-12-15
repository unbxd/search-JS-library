const setInputValue = function(e) {
    try{
        let val = this.options.searchBoxEl.value ;
        if (!val.replace(/\s/g, '').length) {
            return false;
        }
        this.options.productType = "SEARCH";
        val = (val.indexOf("#") === 0) ? val.replace("#", "") : val;
        const wrapper = document.getElementById('imageWrapper')
        if (val) {
            wrapper.style.display = 'none';
            this.resetAll();
            this.changeInput(val, this.events.changeInput);
            this.options.products.productType = "SEARCH";
            this.options.visualSearchRequest = false
            this.viewState.loadedFromSuggestion = false;
            this.state.selectedSort = "";
            this.setPageStart(0);
            this.resetViewState();
            this.getResults();

        } else {
            this.searchResultsWrapper.innerHTML = null;
        }
    }catch(err){
        this.onError("input > setInputValue.js",err)
    }
    
}
export {
    setInputValue as default
}
