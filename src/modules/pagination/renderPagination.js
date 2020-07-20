const renderPagination = function() {
    const {
        pagination :{
            type
        } = {}
    } = this.options;
    let paginationUI = ``;
    if(type !== 'INFINITE_SCROLL') {
        const pageInfo = this.getPaginationInfo();
        if(pageInfo) {
            paginationUI = this.options.pagination.template.bind(this)(pageInfo);
        }
    }
    return paginationUI;
}
export default renderPagination;
