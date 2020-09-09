const renderDidYouMean = function (suggestion) {
    const {
        noResultQuery,
        userInput
    } = this.state;
    const pages = this.getPaginationInfo() || {};
    const didYouMean = this.getDidYouMeanFromResponse();
    const {
        type
    } = this.options.pagination;
    const {
        spellCheck,
        enabled
    } = this.options.spellCheck;
    if(type !== "FIXED_PAGINATION" && pages) {
        const {
            start,
            productsLn
        } = pages
        pages.productsLn = productsLn+start;
        pages.start = 0;
    }
    let sugString = didYouMean.length >0 ? didYouMean[0].suggestion :"";
    if(enabled) {
        if(sugString ) {
            if(this.viewState.lastDidYouMean !== userInput) {
                this.viewState.lastDidYouMean = userInput;
                this.getResults(sugString);
            }
        }
        if(this.viewState.lastDidYouMean && sugString ==="" && window.unbxdSearch.viewState.loadedFromSuggestion){
            this.viewState.lastDidYouMean = null;
            window.unbxdSearch.viewState.loadedFromSuggestion = false;
            return this.options.spellCheck.template.bind(this)(userInput,sugString,pages)
        }
        if(this.viewState.lastDidYouMean && sugString ==="") {
            return this.options.spellCheck.template.bind(this)(userInput,this.viewState.lastDidYouMean,pages);
        }else {
            return this.options.spellCheck.template.bind(this)(userInput,sugString,pages)
        }
        
    }else {
        return this.options.spellCheck.template.bind(this)(userInput,sugString,pages);
    }
}
export default renderDidYouMean;
