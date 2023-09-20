const triggerNextPage = (context, next, action) => {
    if (context.options.pagination.type === "FIXED_PAGINATION") {
        context.viewState.lastAction = "pagination";
        context.setPageStart(next);
        // context.viewState.start = next;
    }
    context.getResults("", true, action);
    context.options.onEvent(context, context.events.pageNext, {
        value: next
    });
};
function renderNewResults(action, currentPage) {
    try {
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

        let currentUrlPage = this.getCurrentUrlPage();
        let productsPerPage = this.getProductsPerPage();
        const paginationType = this.getPaginationType();

        if (paginationType === "INFINITE_SCROLL" || paginationType === "CLICK_N_SCROLL") {
            if (action === this.actions.next) {
                if (isNext) {
                    this.viewState.isInfiniteStarted = true;
                    currentUrlPage++;
                    this.setPageStart((currentUrlPage - 1) * productsPerPage)
                    // this.viewState.start = (currentUrlPage - 1) * productsPerPage
                    this.viewState.lastAction = "next_page_loaded";
                    triggerNextPage(this, null, action);
                }
            }
            if (action === this.actions.prev) {
                if (isPrev) {
                    this.viewState.isInfiniteStarted = true;
                    currentUrlPage--;
                    this.setPageStart((currentUrlPage - 1) * productsPerPage)
                    // this.viewState.start = (currentUrlPage - 1) * productsPerPage
                    this.viewState.lastAction = "prev_page_loaded";
                    triggerNextPage(this, null, action);
                }
                if (action === this.actions.prev) {
                    const prev = start - rows;
                    if (isPrev) {
                        this.viewState.isInfiniteStarted = true;
                        triggerNextPage(this, prev, action);
                    }
                }
            } 
        } else {
            if (action === this.actions.next) {
                const next = start + rows;
                if (isNext) {
                    triggerNextPage(this, next);
                }
            }
            if (action === this.actions.prev) {
                const prev = start - rows;
                if (isPrev) {
                    this.viewState.lastAction = "pagination";
                    triggerNextPage(this, prev);
                    onEvent(this, this.events.pagePrev, {
                        value: prev
                    });
                }
            }

        }
    }
    catch (err) {
            this.onError("Pagination > renderNewResults", err);
        }
    };
    function paginationAction(e) {
        const {
            pageAction,
            pageNo
        } = e.target.dataset;
        this.checkFacets();
        this.viewState.lastDidYouMean = "";
        if (pageAction === 'paginate') {
            this.viewState.lastAction = "pagination";
            this.setPageStart(pageNo);
            // this.viewState.start = pageNo;
            this.getResults();
        } else {
            this.renderNewResults(pageAction);
        }
    }
    export {
        renderNewResults,
        paginationAction
    };
