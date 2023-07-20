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
        searchResultsWrapper.style.minHeight = '100vh'
        if (isInfiniteStarted) {
            this.viewState.isInfiniteStarted = false;
            if (noResultLoaded) {
                this.viewState.noResultLoaded = true;
                searchResultsWrapper.innerHTML = this.renderSearch();
                window.scrollTo(0,0)
                
            } else {

                let currentUrlPage = this.getCurrentUrlPage();
                let productsPerPage = this.getProductsPerPage();

                const {
                    url: {
                        pageNoUrl: {
                            // customize = false,
                            usePageNo = false,
                        } = {},
                    } = {}
                } = this.options;

                    
                if (lastAction === "prev_page_loaded") {
                   
                    searchResultsWrapper.insertAdjacentHTML('afterbegin', this.renderSearch());
                    document.querySelector(`.product-item[data-prank="${(currentUrlPage * productsPerPage) + 1}"]`).scrollIntoView()
                    if (usePageNo) {
                        this.setPageNoParam(currentUrlPage + 1);
                    } else {
                        this.setPageNoParam((currentUrlPage ) * productsPerPage);
                    }
                   
                } else {
                    searchResultsWrapper.insertAdjacentHTML('beforeend', this.renderSearch());
                    if (usePageNo) {
                        this.setPageNoParam( currentUrlPage - 1);
                    } else {
                        this.setPageNoParam( (currentUrlPage - 2) * productsPerPage);
                    }
                }
            }
        } else {
            searchResultsWrapper.innerHTML = "";
            searchResultsWrapper.innerHTML = this.renderSearch();
            window.scrollTo(0,0)
        }
    }catch(err){
        this.onError("renderProducts.js",err)
    }
}