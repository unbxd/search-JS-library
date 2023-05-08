const triggerNextPage = (context,next, action) =>{
    if(context.options.pagination.type === "FIXED_PAGINATION") {
        context.viewState.lastAction = "pagination";
        context.setPageStart(next);
    }
    context.getResults("", true, action);
    context.options.onEvent(context,context.events.pageNext, {
        value:next
    });
};
function renderNewResults(action, currentPage) {
    const pageInfo = this.getPaginationInfo() || {};
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

    const urlParams = new URLSearchParams(window.location.search);
                let currentUrlPage, productsPerPage;
                if (this.options.pagination.usePageAndCount) {
                    productsPerPage = Number(urlParams.get('count'));
                    currentUrlPage = Number(urlParams.get('page')) || 1
                } else {
                    currentUrlPage = Number(urlParams.get('start') / urlParams.get('rows')) + 1;
                    productsPerPage = Number(urlParams.get('rows'));
                }


    // if(pagination.type === "CLICK_N_SCROLL" ) {
    //     const next = start+rows;
    //     if(isNext){
    //         this.viewState.isInfiniteStarted = true;
    //         triggerNextPage(this,next);
    //     }
    // } else 
    // if(pagination.type === "CLICK_N_SCROLL" ) {
    //     const next = start+rows;
    //     if(isNext){
    //         this.viewState.isInfiniteStarted = true;
    //         triggerNextPage(this,next);
    //     }
    // } else   
      if(pagination.type === "INFINITE_SCROLL" || pagination.type === "CLICK_N_SCROLL") {
        if(action === this.actions.next){
            // const next = start+rows;
            // const next = (currentPage - 1) * rows
            if(isNext){
                this.viewState.isInfiniteStarted = true;
                currentUrlPage++;
                // fetchProducts();
                this.setPageStart((currentUrlPage - 1) * productsPerPage)
                this.viewState.lastAction = "next_page_loaded";
                triggerNextPage(this,null, action);
            }
        }
        if(action === this.actions.prev){
            // const prev = start-rows;
            // const prev = (currentPage - 1) * rows
            if(isPrev){
                this.viewState.isInfiniteStarted = true;
                currentUrlPage--;
                // fetchProducts();
                this.setPageStart((currentUrlPage - 1) * productsPerPage)
                this.viewState.lastAction = "prev_page_loaded";
                triggerNextPage(this,null, action);
            }
        }
    } else {
        if(action === this.actions.next){
            const next = start+rows;
            if(isNext){
                triggerNextPage(this,next);
            }
        }
        if(action === this.actions.prev){
            const prev = start-rows;
            if(isPrev){
                this.viewState.lastAction = "pagination";
                triggerNextPage(this,prev);
                onEvent(this,this.events.pagePrev, {
                    value:prev
                });
            }
        }

    }
};
function paginationAction(e){
    const {
        pageAction,
        pageNo
    } = e.target.dataset;
    this.checkFacets();
    this.viewState.lastDidYouMean = "";
    if(pageAction === 'paginate'){
        this.viewState.lastAction = "pagination";
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
