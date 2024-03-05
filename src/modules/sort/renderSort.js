import { events } from "../../common/constants";

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
        this.onError("Sort > renderSort", err, events.runtimeError);
    }

}
export default renderSort;
