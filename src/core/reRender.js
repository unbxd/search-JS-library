import DOMPurify from "dompurify";
import { events } from "../common/constants";

/*
	TODO:  multiple renders
	- the render functions for different modules have been called in multiple places
	- need to modify the code in all the places
*/

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
		noResultsWrappers,
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

	if (results && results.numberOfProducts === 0) {
		const noResultsHTML = this.handleNoResults();
		const sanitizedNoResultsHTML = DOMPurify.sanitize(noResultsHTML);
		if (sanitizedNoResultsHTML !== noResultsHTML) {
			// TODO: we can add onEvent here if required.
		}
		noResultsWrappers.forEach((wrapper) => {
			wrapper.innerHTML = sanitizedNoResultsHTML;
		});
	} else {
		searchResultsWrappers.forEach((wrapper) => {
			this.renderProducts(wrapper);
		});
	}

	const facetsTemplate = this.renderFacets();
	const sanitizedFacetsHTML = DOMPurify.sanitize(facetsTemplate);
	if (sanitizedFacetsHTML !== facetsTemplate) {
		// TODO: we can add onEvent here if required.
	}
	facetWrappers.forEach((wrapper) => {
		wrapper.innerHTML = sanitizedFacetsHTML;
	});

	const selectedFacetsTemplate = this.renderSelectedFacets();
	const sanitizedSelectedFacetsHTML = DOMPurify.sanitize(selectedFacetsTemplate);
	if (sanitizedSelectedFacetsHTML !== selectedFacetsTemplate) {
		// TODO: we can add onEvent here if required.
	}
	selectedFacetWrappers.forEach((wrapper) => {
		wrapper.innerHTML = sanitizedSelectedFacetsHTML;
	});

	if (pagesize.enabled) {
		const pageSizeTemplate = this.renderPageSize();
		const sanitizedPageSizeHTML = DOMPurify.sanitize(pageSizeTemplate);
		if (sanitizedPageSizeHTML !== pageSizeTemplate) {
			// TODO: we can add onEvent here if required.
		}
		pageSizeWrappers.forEach((wrapper) => {
			wrapper.innerHTML = sanitizedPageSizeHTML;
		});
	}

	if (sort.enabled) {
		const sortTemplate = this.renderSort();
		const sanitizedSortHTML = DOMPurify.sanitize(sortTemplate);
		if (sanitizedSortHTML !== sortTemplate) {
			// TODO: we can add onEvent here if required.
		}
		sortWrappers.forEach((wrapper) => {
			wrapper.innerHTML = sanitizedSortHTML;
		});
	}

	if (productView.enabled) {
		const productViewTemplate = this.renderProductViewTypeUI();
		const sanitizedProductViewHTML = DOMPurify.sanitize(productViewTemplate);
		if (sanitizedProductViewHTML !== productViewTemplate) {
			// TODO: we can add onEvent here if required.
		}
		productViewTypeWrappers.forEach((wrapper) => {
			wrapper.innerHTML = sanitizedProductViewHTML;
		});
	}

	if (breadcrumb.enabled) {
		const breadcrumbTemplate = this.renderBreadCrumbs();
		const sanitizedBreadcrumbHTML = DOMPurify.sanitize(breadcrumbTemplate);
		if (sanitizedBreadcrumbHTML !== breadcrumbTemplate) {
			// TODO: we can add onEvent here if required.
		}
		breadcrumbWrappers.forEach((wrapper) => {
			wrapper.innerHTML = breadcrumbTemplate;
		});
	}

	if (spellCheck.enabled) {
		const spellCheckTemplate = this.renderDidYouMean();
		const sanitizedSpellCheckHTML = DOMPurify.sanitize(spellCheckTemplate);
		if (sanitizedSpellCheckHTML !== spellCheckTemplate) {
			// TODO: we can add onEvent here if required.
		}
		spellCheckWrappers.forEach((wrapper) => {
			wrapper.innerHTML = sanitizedSpellCheckHTML;
		});
	}

	if (banner.enabled) {
		const bannerTemplate = this.renderBannerUI();
		const sanitizedBannerHTML = DOMPurify.sanitize(bannerTemplate);
		if (sanitizedBannerHTML !== bannerTemplate) {
			// TODO: we can add onEvent here if required.
		}
		bannerWrappers.forEach((wrapper) => {
			wrapper.innerHTML = sanitizedBannerHTML;
		});
	}

	if (pagination.enabled) {
		if (lastAction === "pagination") {
			pagination.onPaginate.bind(this)(this.getPaginationInfo());
		}
		if (paginationType !== "INFINITE_SCROLL") {
			const paginationTemplate = this.renderPagination();
			const sanitizedPaginationHTML = DOMPurify.sanitize(paginationTemplate);
			if (sanitizedPaginationHTML !== paginationTemplate) {
				// TODO: we can add onEvent here if required.
			}
			paginationWrappers.forEach((wrapper) => {
				wrapper.innerHTML = sanitizedPaginationHTML;
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
