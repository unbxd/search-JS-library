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
            if(viewState.lastDidYouMean !== userInput) {
                this.viewState.lastDidYouMean = userInput;
                this.getResults(sugString);
            }
        }
        if(viewState.lastDidYouMean && sugString ==="" && viewState.loadedFromSuggestion){
            this.viewState.lastDidYouMean = null;
            this.viewState.loadedFromSuggestion = false;
            return this.options.spellCheck.template.bind(this)(userInput,sugString,pages)
        }
        if(viewState.lastDidYouMean && sugString ==="") {
            return this.options.spellCheck.template.bind(this)(userInput,viewState.lastDidYouMean,pages);
        }else {
            return this.options.spellCheck.template.bind(this)(userInput,sugString,pages)
        }
        
    }else {
        return this.options.spellCheck.template.bind(this)(userInput,sugString,pages);
    }
}
export default renderDidYouMean;
