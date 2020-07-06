const renderDidYouMean = function (suggestion) {
    const {
        noResultQuery
    } = this.state;
    const pages = this.getPaginationInfo();
    return this.options.spellCheck.template.bind(this)(suggestion,noResultQuery,pages);
}
export default renderDidYouMean;
