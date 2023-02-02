function getScrollXY() {
    var scrOfX = 0;
    var scrOfY = 0;
    if (typeof (window.pageYOffset) == 'number') {
        //Netscape compliant
        scrOfY = window.pageYOffset;
        scrOfX = window.pageXOffset;
    } else if (document.body && (document.body.scrollLeft || document.body.scrollTop)) {
        //DOM compliant
        scrOfY = document.body.scrollTop;
        scrOfX = document.body.scrollLeft;
    } else if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
        //IE6 standards compliant mode
        scrOfY = document.documentElement.scrollTop;
        scrOfX = document.documentElement.scrollLeft;
    }
    return [ scrOfX, scrOfY ];
}

function getDocHeight() {
    const D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    );
}

const onInfiniteScroll = function () {
    const {
        heightDiffToTriggerNextPage
    } = this.options.pagination;
    if ((getDocHeight() - 20) <= (getScrollXY()[ 1 ] + window.innerHeight + heightDiffToTriggerNextPage)) {
        if (!this.viewState.isInfiniteStarted && !this.state.loading) {
        // if ( !this.state.loading) {
            this.viewState.lastAction = "pagination";
            this.renderNewResults('next');
        }
    } else {
        if (!this.viewState.isInfiniteStarted && !this.state.loading) {
        // if ( !this.state.loading) {
            this.viewState.lastAction = "pagination";
            this.renderNewResults('prev');
        }
    }
};
export default onInfiniteScroll;
