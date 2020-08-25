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
    if(type !== "FIXED_PAGINATION" && pages) {
        const {
            start,
            productsLn
        } = pages
        pages.productsLn = productsLn+start;
        pages.start = 0;
    }
    let sugString = didYouMean.length >0 ? didYouMean[0].suggestion :"";
    return this.options.spellCheck.template.bind(this)(userInput,sugString,pages);
}
export default renderDidYouMean;
