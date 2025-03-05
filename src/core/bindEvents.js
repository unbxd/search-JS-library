function bindEvents() {
	const {
		searchButtonEl,
		searchTrigger,
		products,
		facet,
		productView,
		pagination,
		sort,
		pagesize,
		spellCheck,
		searchBoxEl,
		breadcrumb,
		selectedFacets,
	} = this.options;

	const { actionBtnClass, actionChangeClass } = facet || {};

	// TODO: removed support for multiple search boxes, discuss this
	if (searchBoxEl) {
		// searchBoxEl.forEach((el) => {
		// 	el.addEventListener("keydown", (e) => {
		// 		if (e.keyCode === 13) {
		// 			this.setInputValue.bind(this)(el);
		// 		}
		// 	});
		// });
		searchBoxEl.addEventListener("keydown", (e) => {
			if (e.keyCode === 13) {
				this.setInputValue.bind(this)();
			}
		});
	}

	if (searchButtonEl) {
		// TODO: removed support for multiple search buttons, discuss this
		// if (searchButtonEl instanceof NodeList) {
		//     searchButtonEl.forEach((el) => {
		//         el.addEventListener(searchTrigger, this.setInputValue.bind(this));
		//     });
		// } else {
		//     searchButtonEl.addEventListener(searchTrigger, this.setInputValue.bind(this));
		// }
		searchButtonEl.addEventListener(searchTrigger, this.setInputValue.bind(this));
	}

	if (products.el) {
		this.searchResultsWrappers.forEach((wrapper) => {
			this.delegate(wrapper, "click", `.${products.productItemClass}`, this.onProductItemClick.bind(this));
		});
	}

	if (facet.facetsEl) {
		this.facetWrappers.forEach((wrapper) => {
			this.delegate(wrapper, facet.facetAction, `.${facet.facetClass}`, this.findChangedFacet.bind(this));
			this.delegate(wrapper, "change", "." + actionChangeClass, this.extraActionsChange.bind(this));
			this.delegate(wrapper, "keyup", "." + actionChangeClass, this.extraActionsChange.bind(this));
			this.delegate(wrapper, "click", "." + actionBtnClass, this.extraActions.bind(this));
		});
	}

	if (pagination.enabled) {
		this.paginationWrappers.forEach((wrapper) => {
			this.delegate(wrapper, pagination.action, `.${pagination.pageClass}`, this.paginationAction.bind(this));
		});
	}

	if (pagesize.enabled && pagesize.el) {
		this.pageSizeWrappers.forEach((wrapper) => {
			this.delegate(wrapper, pagesize.action, `.${pagesize.pageSizeClass}`, this.onClickPageSize.bind(this));
		});
	}

	if (sort.el) {
		this.sortWrappers.forEach((wrapper) => {
			this.delegate(wrapper, sort.action, `.${sort.sortClass}`, this.sortAction.bind(this));
		});
	}

	if (this.productViewTypeWrapper) {
		this.delegate(this.productViewTypeWrapper, productView.action, "." + productView.viewTypeClass, this.onPageViewTypeClick.bind(this));
	}

	if (facet.selectedFacetsEl) {
		this.selectedFacetWrappers.forEach((wrapper) => {
			this.delegate(wrapper, facet.facetAction, `.${facet.selectedFacetClass}`, this.findChangedFacet.bind(this));
		});
	} else {
		this.selectedFacetWrappers.forEach((wrapper) => {
			this.delegate(wrapper, selectedFacets.facetAction, `.${selectedFacets.selectedFacetClass}`, this.findChangedFacet.bind(this));
		});
	}

	if (this.breadcrumbWrappers) {
		this.breadcrumbWrappers.forEach((wrapper) => this.delegate(wrapper, "click", "." + breadcrumb.selectorClass, this.findChangedFacet.bind(this)));
	}

	const paginationType = this.getPaginationType();

	if (paginationType === "INFINITE_SCROLL" || paginationType === "CLICK_N_SCROLL") {
		this.setUpInfiniteScroll();
	}

	if (spellCheck.el) {
		this.spellCheckWrappers.forEach((wrapper) => {
			this.delegate(wrapper, "click", `.${spellCheck.selectorClass}`, this.setSuggestion.bind(this));
		});
	}

	if (!this.viewState.initialised) {
		window.addEventListener("popstate", this.onLocationChange.bind(this), false);
		const urlParams = this.getQueryParams();
		const ln = Object.keys(urlParams).length;
		if (ln > 0) {
			this.renderFromUrl();
		}
		this.viewState.initialised = true;
	}
}

export default bindEvents;
