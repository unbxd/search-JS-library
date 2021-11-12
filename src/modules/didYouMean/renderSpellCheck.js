const renderDidYouMean = function (suggestion) {
    let {
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
    let ui = ``;
    if(enabled) {
        if(sugString && !loadedFromSuggestion) {
            this.viewState.lastDidYouMean = userInput;
            this.viewState.loadedFromSuggestion = true;
            this.getResults(sugString);
            ui =  this.options.spellCheck.template.bind(this)(sugString,userInput,pages); 
        }else {
            this.viewState.lastDidYouMean = "";
        }
        if(lastDidYouMean) {
            ui = this.options.spellCheck.template.bind(this)(userInput,lastDidYouMean,pages);
        }
        ui = this.options.spellCheck.template.bind(this)(userInput,"",pages); 
        
    } else {
        ui = this.options.spellCheck.template.bind(this)(userInput,"",pages);
    }
    this.spellCheckWrappers.forEach((wrapper) => {
        wrapper.innerHTML = ui;
    })
}
export default renderDidYouMean;
