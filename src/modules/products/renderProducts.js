import { events } from "../../common/constants";

export default function renderProducts() {
    try {
        const {
            productViewType
        } = this.viewState

        const {
            searchResultsWrapper
        } = this;
        
        let {
            pagination: {
                virtualization = true,
                bufferPages = 1,
            }
        } = this.options;
        
        const {
            noResults
        } = this.options;
        
        const noResultCss = "UNX-no-results-wrap";
        const noResultsBlock = noResults.el ? noResults.el : searchResultsWrapper.getElementsByClassName('UNX-no-results')[0];

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
        // noResultCs
        if (noResults.el) {
            noResultsBlock.innerHTML = "";
        }else{
            searchResultsWrapper.classList.remove(noResultCss);
        }
        
        searchResultsWrapper.style.minHeight = '100vh'
        if (isInfiniteStarted) {
            // this.viewState.isInfiniteStarted = false; //change - remove this
            this.postLoaderObserver.disconnect();
            
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
                
                
                const productIndex = parseInt(newElementsToInsert[0].dataset.prank);

                const currentPage = Math.ceil(productIndex / productsPerPage);
                    
                if (virtualization) {
                    if (bufferPages < 0) bufferPages = 0;
                    const minPage = currentPage - bufferPages;
                    const maxPage = currentPage + bufferPages;
                    const minPrank = (minPage - 2) * productsPerPage;
                    const maxPrank = (maxPage + 1) * productsPerPage;

                    const productItems = document.querySelectorAll(`.${productItemClass}`);
                    productItems.forEach((productItem) => {
                        const itemPrank = parseInt(productItem.dataset.prank, 10);
                        if (itemPrank <= minPrank || itemPrank > maxPrank) {
                            productItem.remove();
                        }
                    });
                }                

                if (insertPoint) {
                    newElementsToInsert.forEach(newElement => {
                        searchResultsWrapper.insertBefore(newElement, insertPoint);
                        this.individualProductObserver.observe(newElement);
                    });
                    
                    const scrollToProduct = document.querySelector(`.${productItemClass}[data-prank="${start + productsPerPage + 1}"]`);
                    if(scrollToProduct){
                        scrollToProduct.scrollIntoView();
                    }
                    // setTimeout(()=>{
                    //     const preLoader = document.querySelector('.UNX-pre-loader');
                    //     this.preLoaderObserver.observe(preLoader);
                    // }, 0)
                } else {
                    newElementsToInsert.forEach(newElement => {
                        searchResultsWrapper.appendChild(newElement);
                        this.individualProductObserver.observe(newElement);
                    });
                    // const scrollToProduct = document.querySelector(`.${productItemClass}[data-prank="${start }"]`);
                    // if (scrollToProduct) {
                    //     scrollToProduct.scrollIntoView();
                    // }
                    // setTimeout(()=>{
                    //     const postLoader = document.querySelector('.UNX-post-loader');
                    //     this.postLoaderObserver.observe(postLoader);
                    // }, 0)
                }

                setTimeout(()=>{
                    const preLoader = document.querySelector('.UNX-pre-loader');
                        this.preLoaderObserver.observe(preLoader);
                    const postLoader = document.querySelector('.UNX-post-loader');
                    this.postLoaderObserver.observe(postLoader);
                }, 0)
            }
            // console.log('outside render products setTimeout');
            this.viewState.isInfiniteStarted = false;


            setTimeout(()=>{
                this.viewState.isInfiniteStarted = false; //change - remove this  
                if (this.options.pagination.type === 'INFINITE_SCROLL') {
                    const postLoader = document.querySelector('.UNX-post-loader');
                    // this.postLoaderObserver.disconnect();
                    console.log('this.postLoaderObserver inside render products setTimeout')
                    this.postLoaderObserver.observe(postLoader);
                }
            },0)
        } else {
            searchResultsWrapper.innerHTML = "";
            searchResultsWrapper.innerHTML = this.renderSearch();
            window.scrollTo(0, 0);
        }
    } catch (err) {
        this.onError("renderProducts.js", err, events.runtimeError);
    }
}