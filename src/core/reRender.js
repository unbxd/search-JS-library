import { events } from "../common/constants";

const reRender = function() {
	const {
		onEvent,
		spellCheck,
		pagination,
		productType,
		searchBoxEl,
		loader,
		breadcrumb,
		productView,
		noResults,
		products,
		pagesize,
		sort,
		banner,
	} = this.options;

	const paginationType = this.getPaginationType();

	const { beforeRender, beforeNoResultRender, afterNoResultRender, afterRender } = this.events;

	try {
		onEvent(this, beforeRender);
	} catch (error) {
		this.onError("reRender", error, events.runtimeError);
	}

	if (loader.el) {
		loader.el.innerHTML = ``;
	}
	const results = this.getSearchResults();
	const qParams = this.getQueryParams() || {};
	const query = this.getSearchQuery();
	const noResultCss = "UNX-no-results-wrap";
	const { lastAction } = this.viewState;

	if (productType === "SEARCH" && searchBoxEl) {
		if (searchBoxEl instanceof NodeList) {
			searchBoxEl.forEach((el) => {
				el.value = this.state.userInput;
			});
		} else searchBoxEl.value = this.state.userInput;
	}

	if (productType !== "SEARCH" && searchBoxEl) {
		if (searchBoxEl instanceof NodeList) {
			searchBoxEl.forEach((el) => {
				el.value = "";
			});
		} else searchBoxEl.value = "";
	}

	const {
		searchResultsWrappers,
		paginationWrappers,
		breadcrumbWrappers,
		pageSizeWrappers,
		sortWrappers,
		productViewTypeWrappers,
		spellCheckWrappers,
		bannerWrappers,
	} = this;

	const productsEl = products.el;

	if (results && results.numberOfProducts === 0) {
		if (productsEl instanceof NodeList) {
			Array.from(productsEl).map((el, index) => {
				this.handleNoResults(searchResultsWrappers[index]);
			});
		} else this.handleNoResults(searchResultsWrappers[0]);
	} else {
		if (productsEl instanceof NodeList) {
			Array.from(productsEl).map((el, index) => {
				this.renderProducts(searchResultsWrappers[index]);
			});
		} else this.renderProducts(searchResultsWrappers[0]);
	}

	this.renderFacets();
	this.renderSelectedFacets();

	const pageSizeEl = pagesize.el;
	if (pageSizeEl instanceof NodeList) {
		Array.from(pageSizeEl).map((el, index) => {
			this.renderPageSize(pageSizeWrappers[index]);
		});
	} else {
		this.renderPageSize(pageSizeWrappers[0]);
	}

	const sortEl = sort.el;
	if (sortEl instanceof NodeList) {
		Array.from(sortEl).map((el, index) => {
			this.renderSort(sortWrappers[index]);
		});
	} else {
		this.renderSort(sortWrappers[0]);
	}

	const productViewEl = productView.el;
	if (productView.enabled && productViewEl) {
		if (productViewEl instanceof NodeList) {
			Array.from(productViewEl).map((el, index) => {
				this.renderProductViewTypeUI(productViewTypeWrappers[index]);
			});
		} else {
			this.renderProductViewTypeUI(productViewTypeWrappers[0]);
		}
	}

	const breadcrumbEl = breadcrumb.el;
	if (breadcrumb.enabled && breadcrumbEl) {
		if (breadcrumbEl instanceof NodeList) {
			Array.from(breadcrumbEl).map((el, index) => {
				this.renderBreadCrumbs(breadcrumbWrappers[index]);
			});
		} else {
			this.renderBreadCrumbs(breadcrumbWrappers[0]);
		}
	}

	const spellCheckEl = spellCheck.el;
	if (spellCheck.enabled && spellCheckEl) {
		if (spellCheckEl instanceof NodeList) {
			Array.from(spellCheckEl).map((el, index) => {
				this.renderDidYouMean(spellCheckWrappers[index]);
			});
		} else {
			this.renderDidYouMean(spellCheckWrappers[0]);
		}
	}

	const bannersEl = banner.el;
	if (bannersEl.enabled && bannersEl) {
		if (bannersEl instanceof NodeList) {
			Array.from(bannersEl).map((el, index) => {
				this.renderBannerUI(bannerWrappers[index]);
			});
		} else {
			this.renderBannerUI(bannerWrappers[0]);
		}
	}

	if (lastAction === "pagination") {
		pagination.onPaginate.bind(this)(this.getPaginationInfo());
	}

	if (paginationType !== "INFINITE_SCROLL") {
		paginationWrappers.forEach((wrapper) => {
			this.renderPagination(wrapper);
		});
	}

	try {
		onEvent(this, afterRender);
	} catch (error) {
		this.onError("reRender", error, events.runtimeError);
	}
};

export default reRender;
