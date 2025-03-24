import { events } from "../common/constants";
import { sanitizeHTML } from "../common/utils";

/*
	TODO:  multiple renders
	- the render functions for different modules have been called in multiple places
	- need to modify the code in all the places
*/
// TODO: Need to do URL related sanitizations

const reRender = function() {
	const { onEvent, spellCheck, pagination, productType, searchBoxEl, loader, breadcrumb, productView, pagesize, sort, banner, sanitizeHtml, sanitizeHtmlElements, sanitizeHtmlAttributes } = this.options;

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
		let noResultsHTML = this.handleNoResults();
		if(sanitizeHtml) {
			const sanitizedNoResultsHTML = sanitizeHTML(noResultsHTML, {sanitizeHtmlElements, sanitizeHtmlAttributes});
			noResultsHTML = sanitizedNoResultsHTML
			if (sanitizedNoResultsHTML !== noResultsHTML) {
				// TODO: we can add onEvent here if required.
			}
		}
		noResultsWrappers.forEach((wrapper) => {
			wrapper.innerHTML = noResultsHTML;
		});
	} else {
		searchResultsWrappers.forEach((wrapper) => {
			this.renderProducts(wrapper);
		});
	}

	let facetsTemplate = this.renderFacets();
	if(sanitizeHtml) {
		const sanitizedFacetsHTML = sanitizeHTML(facetsTemplate, {sanitizeHtmlElements, sanitizeHtmlAttributes});
		facetsTemplate = sanitizedFacetsHTML
		if (sanitizedFacetsHTML !== facetsTemplate) {
			// TODO: we can add onEvent here if required.
		}
	}
	facetWrappers.forEach((wrapper) => {
		wrapper.innerHTML = facetsTemplate;
	});

	let selectedFacetsTemplate = this.renderSelectedFacets();
	if(sanitizeHtml) {
		const sanitizedSelectedFacetsHTML = sanitizeHTML(selectedFacetsTemplate, {sanitizeHtmlElements, sanitizeHtmlAttributes});
		selectedFacetsTemplate = sanitizedSelectedFacetsHTML
		if (sanitizedSelectedFacetsHTML !== selectedFacetsTemplate) {
			// TODO: we can add onEvent here if required.
		}
	}
	selectedFacetWrappers.forEach((wrapper) => {
		wrapper.innerHTML = selectedFacetsTemplate;
	});

	if (pagesize.enabled) {
		let pageSizeTemplate = this.renderPageSize();
		if(sanitizeHtml) {
			const sanitizedPageSizeHTML = sanitizeHTML(pageSizeTemplate, {sanitizeHtmlElements, sanitizeHtmlAttributes});
			pageSizeTemplate = sanitizedPageSizeHTML
			if (sanitizedPageSizeHTML !== pageSizeTemplate) {
				// TODO: we can add onEvent here if required.
			}
		}
		pageSizeWrappers.forEach((wrapper) => {
			wrapper.innerHTML = pageSizeTemplate;
		});
	}

	if (sort.enabled) {
		let sortTemplate = this.renderSort();
		if(sanitizeHtml) {
			const sanitizedSortHTML = sanitizeHTML(sortTemplate, {sanitizeHtmlElements, sanitizeHtmlAttributes});
			sortTemplate = sanitizedSortHTML
			if (sanitizedSortHTML !== sortTemplate) {
				// TODO: we can add onEvent here if required.
			}
		}
		sortWrappers.forEach((wrapper) => {
			wrapper.innerHTML = sortTemplate;
		});
	}

	if (productView.enabled) {
		let productViewTemplate = this.renderProductViewTypeUI();
		if(sanitizeHtml){
			const sanitizedProductViewHTML = sanitizeHTML(productViewTemplate, {sanitizeHtmlElements, sanitizeHtmlAttributes});
			productViewTemplate = sanitizedProductViewHTML
			if (sanitizedProductViewHTML !== productViewTemplate) {
				// TODO: we can add onEvent here if required.
			}
		}
		productViewTypeWrappers.forEach((wrapper) => {
			wrapper.innerHTML = productViewTemplate;
		});
	}

	if (breadcrumb.enabled) {
		let breadcrumbTemplate = this.renderBreadCrumbs();
		if(sanitizeHtml) {
			const sanitizedBreadcrumbHTML = sanitizeHTML(breadcrumbTemplate, {sanitizeHtmlElements, sanitizeHtmlAttributes});
			breadcrumbTemplate = sanitizedBreadcrumbHTML
			if (sanitizedBreadcrumbHTML !== breadcrumbTemplate) {
				// TODO: we can add onEvent here if required.
			}
		}
		breadcrumbWrappers.forEach((wrapper) => {
			wrapper.innerHTML = breadcrumbTemplate;
		});
	}

	if (spellCheck.enabled) {
		let spellCheckTemplate = this.renderDidYouMean();
		if(sanitizeHtml){
			const sanitizedSpellCheckHTML = sanitizeHTML(spellCheckTemplate, {sanitizeHtmlElements, sanitizeHtmlAttributes});
			spellCheckTemplate = sanitizedSpellCheckHTML
			if (sanitizedSpellCheckHTML !== spellCheckTemplate) {
				// TODO: we can add onEvent here if required.
			}
		}
		spellCheckWrappers.forEach((wrapper) => {
			wrapper.innerHTML = spellCheckTemplate;
		});
	}

	if (banner.enabled) {
		let bannerTemplate = this.renderBannerUI();
		if(sanitizeHtml) {
			const sanitizedBannerHTML = sanitizeHTML(bannerTemplate, {sanitizeHtmlElements, sanitizeHtmlAttributes});
			bannerTemplate = sanitizedBannerHTML
			if (sanitizedBannerHTML !== bannerTemplate) {
				// TODO: we can add onEvent here if required.
			}
		}
		bannerWrappers.forEach((wrapper) => {
			wrapper.innerHTML = bannerTemplate;
		});
	}

	if (pagination.enabled) {
		if (lastAction === "pagination") {
			pagination.onPaginate.bind(this)(this.getPaginationInfo());
		}
		if (paginationType !== "INFINITE_SCROLL") {
			let paginationTemplate = this.renderPagination();
			if(sanitizeHtml) {
				const sanitizedPaginationHTML = sanitizeHTML(paginationTemplate, {sanitizeHtmlElements, sanitizeHtmlAttributes});
				paginationTemplate = sanitizedPaginationHTML
				if (sanitizedPaginationHTML !== paginationTemplate) {
					// TODO: we can add onEvent here if required.
				}
			}
			paginationWrappers.forEach((wrapper) => {
				wrapper.innerHTML = paginationTemplate;
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
