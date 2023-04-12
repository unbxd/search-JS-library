function renderNoResults(query) {
    try{
        return this.options.noResults.template(query);
    }
    catch{
        this.options.onError("Noresults")
    }
}
export default renderNoResults;
