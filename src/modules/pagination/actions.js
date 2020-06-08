function renderNewResults(action) {
    const pageInfo = this.getPaginationInfo();
    const {
        start,
        productsLn,
        numberOfProducts,
        rows,
        isNext,
        isPrev
    } = pageInfo;
    if(action === this.actions.next){
        const next = start+rows;
        if(isNext){
            this.setPageStart(next);
            this.getResults();
            this.options.callBackFn(this,events.pageNext, {
                value:next
            });
        }
    }
    if(action === this.actions.prev){
        const prev = start-rows;
        if(isPrev){
            this.setPageStart(prev);
            this.getResults();
            this.options.callBackFn(this,events.pagePrev, {
                value:prev
            });
        }
    }
};
function paginationAction(e){
    const {
        pageAction
    } = e.target.dataset;
    this.renderNewResults(pageAction);
}
export {
    renderNewResults,
    paginationAction
};
