const triggerNextPage = (context,next) =>{
    context.setPageStart(next);
    context.getResults();
    context.options.callBackFn(context,context.events.pageNext, {
        value:next
    });
};
function renderNewResults(action) {
    const pageInfo = this.getPaginationInfo();
    const {
        paginationType,
        callBackFn
    } = this.options;
    const {
        start,
        productsLn,
        numberOfProducts,
        rows,
        isNext,
        isPrev
    } = pageInfo;
    if(paginationType === "CLICK_N_SCROLL") {
        const next = start+rows;
        this.viewState.isInfiniteStarted = true;
        if(isNext){
            triggerNextPage(this,next);
        }
    }
    if(action === this.actions.next){
        const next = start+rows;
        if(isNext){
            triggerNextPage(this,next);
        }
    }
    if(action === this.actions.prev){
        const prev = start-rows;
        if(isPrev){
            this.setPageStart(prev);
            this.getResults();
            callBackFn(this,this.events.pagePrev, {
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
