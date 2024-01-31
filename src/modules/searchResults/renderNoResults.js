import libEvents from "../../../../search-JS-core/src/constants";

function renderNoResults(query="") {
    try{
        return this.options.noResults.template(query);
    }
    catch(err){
        this.onError("searchresults > renderNoResults",err,libEvents.runtimeError)
    }
}
export default renderNoResults;
