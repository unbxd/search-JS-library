export default function renderProducts(){
    try{
        const {
            productViewType
        } = this.viewState
        
        const {
            searchResultsWrapper
        } = this;
        const noResultCss = "UNX-no-resultss-wrap";
        
        const {
            noResultLoaded,
            isInfiniteStarted,
            lastAction
        } = this.viewState;
        
        const viewCss = (productViewType === "LIST") ? "UNX-list-block" : "UNX-grid-block";
        searchResultsWrapper.classList.remove("UNX-list-block");
        searchResultsWrapper.classList.remove("UNX-grid-block");
        searchResultsWrapper.classList.add(viewCss);
        searchResultsWrapper.classList.remove(noResultCss);
        if (isInfiniteStarted) {
            this.viewState.isInfiniteStarted = false;
            if (noResultLoaded) {
                this.viewState.noResultLoaded = true;
                searchResultsWrapper.innerHTML = this.renderSearch();
            } else {
                if (lastAction === "prev_page_loaded") {
                    searchResultsWrapper.innerHTML = this.renderSearch() + searchResultsWrapper.innerHTML;
                } else {
                    searchResultsWrapper.innerHTML += this.renderSearch();
                }
            }
        } else {
            searchResultsWrapper.innerHTML = "";
            searchResultsWrapper.innerHTML = this.renderSearch();
        }
    }catch(err){
        this.onError("renderProducts.js",err)
    }
}
