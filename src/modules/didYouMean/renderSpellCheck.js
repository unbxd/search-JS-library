const renderDidYouMean = function (suggestion) {
    const {
        noResultQuery,
        userInput
    } = this.state;
    const pages = this.getPaginationInfo() || {};
    const didYouMean = this.getDidYouMeanFromResponse();
    let sugString = didYouMean.length >0 ? didYouMean[0].suggestion :"";
    return this.options.spellCheck.template.bind(this)(userInput,sugString,pages);
}
export default renderDidYouMean;
