import { events } from "../common/constants";

const reRender = function() {
	const { onEvent, spellCheck, pagination, productType, searchBoxEl, loader, breadcrumb, productView, pagesize, sort, banner } = this.options;

	const paginationType = this.getPaginationType();

	const { beforeRender, afterRender } = this.events;

	try {
		onEvent(this, beforeRender);
	} catch (error) {
		this.onError("reRender", error, events.runtimeError);
	}

	if (loader.el) {
		loader.el.innerHTML = ``;
	}
	const results = this.getSearchResults();
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
		facetWrappers,
		selectedFacetWrappers,
	} = this;

	// TODO: discuss how to handle return etc.
	// TODO: we need to purify the HTML
	if (results && results.numberOfProducts === 0) {
		searchResultsWrappers.forEach((wrapper) => {
			this.renderNoResults(wrapper);
		});
	} else {
		searchResultsWrappers.forEach((wrapper) => {
			this.renderProducts(wrapper);
		});
	}

	// TODO: we need to purify the HTML
	const facetsTemplate = this.renderFacets();
	facetWrappers.forEach((wrapper) => {
		wrapper.innerHTML = facetsTemplate;
	});

	// TODO: we need to purify the HTML
	const selectedFacetsTemplate = this.renderSelectedFacets();
	selectedFacetWrappers.forEach((wrapper) => {
		wrapper.innerHTML = selectedFacetsTemplate;
	});

	// TODO: we need to purify the HTML
	if (pagesize.enabled) {
		const pageSizeTemplate = this.renderPageSize();
		pageSizeWrappers.forEach((wrapper) => {
			wrapper.innerHTML = pageSizeTemplate;
		});
	}

	// TODO: we need to purify the HTML
	if (sort.enabled) {
		const sortTemplate = this.renderSort();
		sortWrappers.forEach((wrapper) => {
			wrapper.innerHTML = sortTemplate;
		});
	}

	// TODO: we need to purify the HTML
	if (productView.enabled) {
		const productViewTemplate = this.renderProductViewTypeUI();
		productViewTypeWrappers.forEach((wrapper) => {
			wrapper.innerHTML = productViewTemplate;
		});
	}

	// TODO: we need to purify the HTML
	if (breadcrumb.enabled) {
		const breadcrumbTemplate = this.renderBreadCrumbs();
		breadcrumbWrappers.forEach((wrapper) => {
			wrapper.innerHTML = breadcrumbTemplate;
		});
	}

	// TODO: we need to purify the HTML
	if (spellCheck.enabled) {
		const spellCheckTemplate = this.renderDidYouMean();
		spellCheckWrappers.forEach((wrapper) => {
			wrapper.innerHTML = spellCheckTemplate;
		});
	}

	// TODO: we need to purify the HTML
	if (banner.enabled) {
		const bannerTemplate = this.renderBannerUI();
		bannerWrappers.forEach((wrapper) => {
			wrapper.innerHTML = bannerTemplate;
		});
	}

	// TODO: we need to purify the HTML
	if (pagination.enabled) {
		if (lastAction === "pagination") {
			pagination.onPaginate.bind(this)(this.getPaginationInfo());
		}
		if (paginationType !== "INFINITE_SCROLL") {
			paginationWrappers.forEach((wrapper) => {
				wrapper.innerHTML = this.renderPagination();
			});
		}
	}

	try {
		onEvent(this, afterRender);
	} catch (error) {
		this.onError("reRender", error, events.runtimeError);
	}
};

export default reRender;
