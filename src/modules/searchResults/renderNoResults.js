function renderNoResults(query="") {
    try{
        return this.options.noResults.template(query);
    }
    catch(err){
        this.onError("searchresults > renderNoResults",err)
    }
}
export default renderNoResults;
