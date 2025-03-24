import { events } from "../../common/constants";
import { sanitizeHTML } from "../../common/utils";

export default function renderProducts(searchResultsWrapper) {
	try {
		const { productViewType } = this.viewState;

		const {
			pagination: { type },
			sanitizeHtml, sanitizeHtmlElements, sanitizeHtmlAttributes
		} = this.options;

		const { noResults } = this.options;

		const noResultCss = "UNX-no-results-wrap";
		const noResultsBlock = noResults.el ? noResults.el : searchResultsWrapper.getElementsByClassName("UNX-no-results")[0];

		const { isInfiniteStarted } = this.viewState;

		const { products: { productItemClass } = {} } = this.options;

		const viewCss = productViewType === "LIST" ? "UNX-list-block" : "UNX-grid-block";
		searchResultsWrapper.classList.remove("UNX-list-block");
		searchResultsWrapper.classList.remove("UNX-grid-block");
		searchResultsWrapper.classList.add(viewCss);
		// noResultCs
		if (noResults.el) {
			noResultsBlock.innerHTML = "";
		} else {
			searchResultsWrapper.classList.remove(noResultCss);
		}

		searchResultsWrapper.style.minHeight = "100vh";
		if (isInfiniteStarted) {
			const results = this.getSearchResults();
			if (results && results.products?.length === 0) {
				this.viewState.noResultLoaded = true;
			}

			if (this.viewState.noResultLoaded) {
				let resultsHTML = this.renderSearch();
				if(sanitizeHtml) {
					const sanitizedResultsHTML = sanitizeHTML(resultsHTML, {sanitizeHtmlElements, sanitizeHtmlAttributes});
					resultsHTML = sanitizedResultsHTML
				}
				searchResultsWrapper.innerHTML = resultsHTML;
				if (searchResultsWrapper.innerHTML !== "") {
					const newElements = Array.from(searchResultsWrapper.children);
					newElements.forEach((newElement) => {
						this.individualProductObserver.observe(newElement);
					});
					window.scrollTo(0, 0);
					this.viewState.noResultLoaded = false;
				} else {
					this.preLoaderObserver.disconnect();
					this.postLoaderObserver.disconnect();
					this.handleNoResults();
				}
			} else {
				let productsPerPage = this.getProductsPerPage();
				const listItems = searchResultsWrapper.querySelectorAll(`.${productItemClass}`);

				let resultsHTML = this.renderSearch();
				if(sanitizeHtml) {
					const sanitizedResultsHTML = sanitizeHTML(resultsHTML, {sanitizeHtmlElements, sanitizeHtmlAttributes});
					resultsHTML = sanitizedResultsHTML
				}
				const tempContainer = document.createElement("div");
				tempContainer.innerHTML = resultsHTML;

				const newElements = Array.from(tempContainer.children);

				const {
					response: { start = 0 },
				} = this.getResponseObj();

				let insertPoint = null;
				const existingPranks = new Set();

				listItems.forEach((item) => {
					const currentPrank = parseInt(item.dataset.prank, 10);
					existingPranks.add(currentPrank);
				});
				for (let i = 0; i < listItems.length; i++) {
					const currentItem = listItems[i];
					const currentPrank = parseInt(currentItem.dataset.prank, 10);

					if (currentPrank > start) {
						insertPoint = currentItem;
						break;
					}
				}

				const newElementsToInsert = newElements.filter((newElement) => {
					const newElementPrank = parseInt(newElement.dataset.prank, 10);
					return !existingPranks.has(newElementPrank);
				});

				if (insertPoint) {
					newElementsToInsert.forEach((newElement) => {
						searchResultsWrapper.insertBefore(newElement, insertPoint);
						this.individualProductObserver.observe(newElement);
					});

					const scrollToProduct = document.querySelector(`.${productItemClass}[data-prank="${start + productsPerPage + 1}"]`);
					if (scrollToProduct) {
						scrollToProduct.scrollIntoView();
					}
				} else {
					newElementsToInsert.forEach((newElement) => {
						searchResultsWrapper.appendChild(newElement);
						if (type === "INFINITE_SCROLL") {
							this.individualProductObserver.observe(newElement);
						}
					});
					const scrollToProduct = document.querySelector(`.${productItemClass}[data-prank="${start}"]`);
					if (scrollToProduct) {
						scrollToProduct.scrollIntoView();
					}
				}
				this.preLoaderObserver.disconnect();
				const preLoader = document.querySelector(".UNX-pre-loader");
				this.preLoaderObserver.observe(preLoader);
				if (this.options.pagination.type === "INFINITE_SCROLL") {
					this.postLoaderObserver.disconnect();
					const postLoader = document.querySelector(".UNX-post-loader");
					this.postLoaderObserver.observe(postLoader);
				}
			}
			this.viewState.isInfiniteStarted = false;
		} else {
			searchResultsWrapper.innerHTML = "";
			let resultsHTML = this.renderSearch();
			if(sanitizeHtml) {
				const sanitizedResultsHTML = sanitizeHTML(resultsHTML, {sanitizeHtmlElements, sanitizeHtmlAttributes});
				resultsHTML = sanitizedResultsHTML
			}
			searchResultsWrapper.innerHTML = resultsHTML;
			if (searchResultsWrapper.innerHTML !== "") {
				window.scrollTo(0, 0);
				if (type === "INFINITE_SCROLL" || type === "CLICK_N_SCROLL") {
					const newElements = Array.from(searchResultsWrapper.children);
					newElements.forEach((newElement) => {
						this.individualProductObserver.observe(newElement);
					});
				}
			} else if (type === "INFINITE_SCROLL" || type === "CLICK_N_SCROLL") {
				this.preLoaderObserver.disconnect();
				this.postLoaderObserver.disconnect();
				this.handleNoResults();
			}
		}
	} catch (err) {
		this.onError("renderProducts.js", err, events.runtimeError);
	}
}
