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
    const {
        viewState
    } = this;
    const {
        loadedFromSuggestion,
        lastDidYouMean
    } = viewState;
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
        if(sugString && !loadedFromSuggestion) {
            this.viewState.lastDidYouMean = userInput;
            this.viewState.loadedFromSuggestion = true;
            this.getResults(sugString);
            return this.options.spellCheck.template.bind(this)(sugString,userInput,pages); 
        }
        if(lastDidYouMean) {
            return this.options.spellCheck.template.bind(this)(userInput,lastDidYouMean,pages);
        }
        return this.options.spellCheck.template.bind(this)(userInput,"",pages); 
        
    }else {
        return this.options.spellCheck.template.bind(this)(userInput,"",pages);
    }
}
export default renderDidYouMean;
