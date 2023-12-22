export default function renderProducts() {
    try {        
        const {
            productViewType
        } = this.viewState

        const {
            searchResultsWrapper
        } = this;
        const noResultCss = "UNX-no-results-wrap";

        const {
            noResultLoaded,
            isInfiniteStarted,
        } = this.viewState;

        const {
            products: {
                productItemClass
            } = {}
        } = this.options;

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
                window.scrollTo(0, 0)
            } else {
                let productsPerPage = this.getProductsPerPage();
                const listItems = searchResultsWrapper.querySelectorAll(`.${productItemClass}`);


                const tempContainer = document.createElement('div');
                tempContainer.innerHTML = this.renderSearch();

                const newElements = Array.from(tempContainer.children);

                const { response: { start = 0 } } = this.getResponseObj();

                let insertPoint = null;
                const existingPranks = new Set();

                listItems.forEach(item => {
                    const currentPrank = parseInt(item.dataset.prank, 10);
                    existingPranks.add(currentPrank);
                });
                for (let i = 0; i < listItems.length; i++) {
                    const currentItem = listItems[ i ];
                    const currentPrank = parseInt(currentItem.dataset.prank, 10);

                    if (currentPrank > start) {
                        insertPoint = currentItem;
                        break;
                    }
                }

                const newElementsToInsert = newElements.filter(newElement => {
                    const newElementPrank = parseInt(newElement.dataset.prank, 10);
                    return !existingPranks.has(newElementPrank);
                });

                if (insertPoint) {
                    newElementsToInsert.forEach(newElement => {
                        searchResultsWrapper.insertBefore(newElement, insertPoint);
                    });
                    const scrollToProduct = document.querySelector(`.${productItemClass}[data-prank="${start + productsPerPage + 1}"]`);
                    if(scrollToProduct){
                        scrollToProduct.scrollIntoView();
                    }
                } else {
                    newElementsToInsert.forEach(newElement => {
                        searchResultsWrapper.appendChild(newElement);
                    });
                }
            }
        } else {
            searchResultsWrapper.innerHTML = "";
            searchResultsWrapper.innerHTML = this.renderSearch();
            window.scrollTo(0, 0)
        }
    } catch (err) {
        this.onError("renderProducts.js", err)
    }
}