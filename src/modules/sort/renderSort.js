import libEvents from "../../../../search-JS-core/src/constants";

function renderSort(){
    try{
        const results = this.getSearchResults();
        const {
            sort = {}
        } = this.options;
        const {
            sortWrappers = []
        } = this;
        sortWrappers && sortWrappers.forEach(wrapper => {
            let ui = ``;
            if (results && results.numberOfProducts > 0) {
                ui = this.options.sort.template.bind(this)(this.getSelectedSort(), sort);
            }
            wrapper.innerHTML = ui;
        });
    }
    catch(err){
        this.onError("Sort > renderSort",err,libEvents.runtimeError);
    }

}
export default renderSort;
