const triggerNextPage = (context, next, action) => {
    if (context.options.pagination.type === "FIXED_PAGINATION") {
        context.viewState.lastAction = "pagination";
        context.setPageStart(next);
    }
    context.getResults("", true, action);
    context.options.onEvent(context, context.events.pageNext, {
        value: next
    });
};
function renderNewResults(action) {
    try {
        const pageInfo = this.getPaginationInfo() || {};
        const {
            onEvent
        } = this.options;
        const {
            start,
            rows,
            isNext,
            isPrev
        } = pageInfo;

        if (this.options.pagination.type === "CLICK_N_SCROLL") {
            if (action === this.actions.next) {
                if (isNext) {
                    this.viewState.isInfiniteStarted = true;
                    const lastPrank = this.getLastPrank();
                    this.setPageStart(lastPrank);
                    triggerNextPage(this, null, action);

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
}

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
        this.getResults();
    } else {
        this.renderNewResults(pageAction);
    }
}
export {
    renderNewResults,
    paginationAction
};
