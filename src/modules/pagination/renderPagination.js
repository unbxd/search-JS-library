import libEvents from "../../../../search-JS-core/src/constants";

const renderPagination = function () {
    try{
        const {
            pagination = {}
        } = this.options;
        const {
            type
        } = pagination || {};
        let paginationUI = ``;
        if (type !== 'INFINITE_SCROLL') {
            const pageInfo = this.getPaginationInfo();
            if (pageInfo) {
                paginationUI = pagination.template.bind(this)(pageInfo, pagination);
            }
        }
        return paginationUI;
    }
    catch(err){
        this.onError("Pagination > renderPagination.js",err,libEvents.runtimeError);
    }

}
export default renderPagination;
