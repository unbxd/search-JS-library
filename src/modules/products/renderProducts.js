export default function renderProducts({ action }) {
    try {
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
                window.scrollTo(0, 0)
            } else {
                let currentUrlPage = this.getCurrentUrlPage();
                let productsPerPage = this.getProductsPerPage();
                const listItems = searchResultsWrapper.querySelectorAll('.product-item');

                const {
                    url: {
                        pageNoParam: {
                            usePageNo = false,

                        } = {},
                    } = {}
                } = this.options;

                // const newElements = this.renderSearch();

                const tempContainer = document.createElement('div');
                tempContainer.innerHTML = this.renderSearch();

                // Extract the new elements from the temporary container
                const newElements = Array.from(tempContainer.children);

                const { response: { start = 0 } } = this.getResponseObj();

                let insertPoint = null;

                // Create a set to store existing dataset.prank values
                const existingPranks = new Set();

                // Iterate through existing list items to populate the set
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

                // Filter out new elements that already exist in the DOM
                const newElementsToInsert = newElements.filter(newElement => {
                    const newElementPrank = parseInt(newElement.dataset.prank, 10);
                    return !existingPranks.has(newElementPrank);
                });

                if (insertPoint) {
                    // Insert new elements before the insertPoint
                    newElementsToInsert.forEach(newElement => {
                        searchResultsWrapper.insertBefore(newElement, insertPoint);
                    });
                    document.querySelector(`.product-item[data-prank="${start + productsPerPage + 1}"]`).scrollIntoView();
                    if (usePageNo) {
                        this.setPageNoParam(currentUrlPage);
                    } else {
                        this.setPageNoParam((currentUrlPage + 1) * productsPerPage);
                    }
                } else {
                    // If no insertPoint found, append new elements to the end
                    newElementsToInsert.forEach(newElement => {
                        searchResultsWrapper.appendChild(newElement);
                    });
                    if (usePageNo) {
                        this.setPageNoParam(currentUrlPage - 1);
                    } else {
                        this.setPageNoParam((currentUrlPage - 2) * productsPerPage);
                    }
                }


                // for (let i = 0; i < listItems.length; i++) {
                //     const currentItem = listItems[ i ];
                //     const currentPrank = parseInt(currentItem.dataset.prank, 10);

                //     if (currentPrank > start) {
                //         // Insert new elements before the current item
                //         // searchResultsWrapper.insertBefore(newElements[ 0 ], currentItem);
                //         searchResultsWrapper.insertBefore(newElements.shift(), currentItem);
                //         newElements.shift(); // Remove the inserted element from the newElements array
                //     }
                // }

                // If there are remaining new elements, insert them at the end
                // newElements.forEach(newElement => {
                //     searchResultsWrapper.appendChild(newElement);
                // });


                // // if (lastAction === "prev_page_loaded") {
                // if (action === "prev" && lastAction === "prev_page_loaded") {
                //     // lastAction = ""
                //     searchResultsWrapper.insertAdjacentHTML('afterbegin', this.renderSearch());
                //     document.querySelector(`.product-item[data-prank="${(currentUrlPage * productsPerPage) + 1}"]`).scrollIntoView()
                //     // if (usePageNo) {
                //     //     this.setPageNoParam(currentUrlPage + 1);
                //     // } else {
                //     //     this.setPageNoParam((currentUrlPage ) * productsPerPage);
                //     // }

                // } else if (action === "next" && lastAction === "next_page_loaded"){
                //     searchResultsWrapper.insertAdjacentHTML('beforeend', this.renderSearch());
                //     // if (usePageNo) {
                //     //     this.setPageNoParam( currentUrlPage - 1);
                //     // } else {
                //     //     this.setPageNoParam( (currentUrlPage - 2) * productsPerPage);
                //     // }
                // }
                // lastAction = ""

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