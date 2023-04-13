function renderNoResults(query) {
    try{
        return this.options.noResults.template(query);
    }
    catch(err){
        this.options.onError("Noresults",err)
        throw err;
    }
}
export default renderNoResults;
