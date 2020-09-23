const triggerNextPage = (context,next) =>{
    context.setPageStart(next);
    context.getResults();
    context.viewState.lastAction = "pagination";
    context.options.onEvent(context,context.events.pageNext, {
        value:next
    });
};
function renderNewResults(action) {
    const pageInfo = this.getPaginationInfo();
    const {
        pagination,
        onEvent
    } = this.options;
    const {
        start,
        productsLn,
        numberOfProducts,
        rows,
        isNext,
        isPrev
    } = pageInfo;
    if(pagination.type === "CLICK_N_SCROLL") {
        const next = start+rows;
        this.viewState.isInfiniteStarted = true;
        if(isNext){
            triggerNextPage(this,next);
            this.viewState.lastAction = "pagination";
        }
    }
    if(action === this.actions.next){
        const next = start+rows;
        if(isNext){
            triggerNextPage(this,next);
            this.viewState.lastAction = "pagination";
        }
    }
    if(action === this.actions.prev){
        const prev = start-rows;
        if(isPrev){
            triggerNextPage(this,prev);
            onEvent(this,this.events.pagePrev, {
                value:prev
            });
        }
    }
};
function paginationAction(e){
    const {
        pageAction,
        pageNo
    } = e.target.dataset;
    this.viewState.lastDidYouMean = "";
    if(pageAction === 'paginate'){
        this.setPageStart(pageNo);
        this.getResults();
    } else{
        this.renderNewResults(pageAction);
    }
}
export {
    renderNewResults,
    paginationAction
};
