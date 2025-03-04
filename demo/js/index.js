import UnbxdSearch from "../../src/index";
// import UnbxdSearch from "@unbxd-ui/vanilla-search-library";
import def from "./defaultLogo.png";
import "./unbxdStyles.css";

let routeTemplate = `
<div class="UNX-header">
			<div class="UNX-header-inner">
				<img src=${def} class="UNX-header-logo"></img>
				<nav id="categoryLinks" class="UNX-nav UNX-naviagtion-wrap">
					<button data-id="categoryPath:cat700001" class="nav-links" data-path="/men">Men</a>
                    <button data-id="categoryPath:cat120002" class="nav-links" data-path="/women">Women</button>
                    <button data-id='categoryPath:"LAUNDRY>WASHING MACHINES"' class="nav-links" data-path="/washingMachine">Washing machines</button>
                    <button data-id='categoryPath:"KITCHEN & COOKING>MICROWAVES>CONVECTION MICROWAVE OVENS"' class="nav-links" data-path="/kitchen-and-cooking/microwaves/convection-microwave-ovens-0">Convention micro ovens</button>
                    <button data-id='categoryPath:"FURNITURE ZONE>BEDROOM FURNITURE>BASES & BEDHEADS"' class="nav-links" data-path="/furniture-and-bedding/bedroom-furniture/bases-bedheads">Bases and bedheads</button>
				</nav>
				<div class="UNX-right-header">
					<div id="autoSuggestInput" class="UNX-input-wrapper">
						<input
							id="unbxdInput"
							placeholder="Search here..."
							class="UNX-input"
							autocomplete="off"
						/>
						<button id="searchBtn" class="UNX-search-btn"></button>
					</div>
				</div>
			</div>
		</div>
		<div class="search-preview">
			<div class="UNX-results-container">
				<div class="UNX-head-wrapper">
					<div class="UNX-selected-actions">
						<div class="UNX-bread-wrapper" id="breadcrumpContainer"></div>
						
					</div>
				</div>
				<div class="UNX-product-results">
					<div class="UNX-facet-wrapper">
						<h2 class="UNX-filter-header">Filter By</h2>
						<div class="UNX-fxd-facet">
							<div
								class="UNX-selected-facet-wrapper UNX-selected-f-m"
								id="selectedMFacetWrapper"
							></div>
							<div class="UNX-text-facet-block" id="facetsWrapper"></div>
							<div class="UNX-m-facet-row">
								<button
									data-action="applyFacets"
									class="UNX-primary-btn UNX-facet-trigger"
								>
									Apply
								</button>
								<button
									data-action="clearFacets"
									class="UNX-default-btn UNX-facet-trigger"
								>
									Clear
								</button>
							</div>
						</div>
						<div class="UNX-m-facet-row">
							<button
								class="UNX-m-facet-btn UNX-facet-trigger fa fa-filter"
							></button>
						</div>
					</div>
					<div class="UNX-product-list">
						<div id="didYouMeanWrapper"></div>
						<div class="UNX-result-header">
                            <div class="row-1">
                            <div class="UNX-sort-wrapper" id="sortWrapper"></div>
                            <div class="UNX-change-products" id="changeNoOfProducts"></div>
                            </div>
                            
							
							<div class="UNX-result-right">
								
								
								<div
									class="UNX-product-type-block"
									id="productViewTypeContainer"
								></div>
							</div>
						</div>
						<div id="bannerContainer"></div>
                        <div
							class="UNX-selected-facet-wrapper"
							id="selectedFacetWrapper"
						></div>
						<div class="UNX-product-wrapper" id="searchResultsWrapper"></div>
                        <div id="" class="UNX-change-pagination-wrap unxPagination" ></div>
						<div id="" class="UNX-change-pagination-wrap UNX-m-page unxLoadMorePagination" ></div>
					</div>
				</div>
				<div class="UNX-loader-container" id="loaderEl"></div>
				<div id="noResultWrapper"></div>
				<div id="clickScrollContainer"></div>
			</div>
            <div style="height: 400px; width: 400px; position: relative;">
                <div class="UNX-loader-container" id="loaderEl"></div>
            </div>
			<div class="UNX-footer-main">
				<div class="UNX-footer-container">
					<div class="UNX-footer-features">
						<div class="UNX-feature-item">
							<span class="UNX-footer-icon UNX-icons UNX-icon-truck"></span>
							<label class="UNX-footer-label">We ship worldwide</label>
						</div>
						<div class="UNX-feature-item UNX-money">
							<span class="UNX-icons UNX-icon-call"></span>
							<label class="UNX-footer-label">Call 18000 765 00000</label>
						</div>
						<div class="UNX-feature-item UNX-money">
							<span class="UNX-icons UNX-icon-money-back"></span>
							<label class="UNX-footer-label">Money Back Guarantee</label>
						</div>
						<div class="UNX-feature-item UNX-money">
							<span class="UNX-icons UNX-icon-return"></span>
							<label class="UNX-footer-label">30 Days Return</label>
						</div>
					</div>
				</div>
			</div>
			<div class="UNX-company-footer">
				<div class="UNX-footer-container UNX-company-footer-wrap">
					<div class="UNX-footer-info-column">
						<h6 class="UNX-footer-info-head">Online Shopping</h6>
						<div class="UNX-link-wrapper">
							<a href="#">Men</a>
							<a href="#">Women</a>
							<a href="#">Kids</a>
							<a href="#">Home & Living</a>
							<a href="#">Discover</a>
							<a href="#">Gift Cards</a>
						</div>
					</div>
					<div class="UNX-footer-info-column">
						<h6 class="UNX-footer-info-head">Policy</h6>
						<div class="UNX-link-wrapper">
							<a href="#">Contact Us</a>
							<a href="#">FAQ</a>
							<a href="#">T&C</a>
							<a href="#">Track Orders</a>
							<a href="#">Shipping</a>
							<a href="#">Cancellation</a>
						</div>
					</div>
					<div class="UNX-footer-info-column">
						<h6 class="UNX-footer-info-head">About</h6>
						<div class="UNX-link-wrapper">
							<a href="#">Contact Us</a>
							<a href="#">About Us</a>
							<a href="#">Press</a>
						</div>
					</div>
					<div class="UNX-footer-info-column">
						<h6 class="UNX-footer-info-head">Registered Office Address</h6>
						<div class="UNX-link-wrapper">
							<a href="#">Company</a>
							<a href="#">Careers</a>
							<a href="#">Contact Us</a>
						</div>
					</div>
					<div class="UNX-footer-info-column">
						<h6 class="UNX-footer-info-head">Keep in Touch</h6>
						<div class="UNX-link-wrapper UNX-keep-touch">
							<a class="UNX-link-icon UNX-icons UNX-icon-linkedin" href="#"></a>
							<a class="UNX-link-icon UNX-icons UNX-icon-twitter" href="#"></a>
							<a class="UNX-link-icon UNX-icons UNX-icon-youtube" href="#"></a>
						</div>
					</div>
				</div>
			</div>
			<div class="UNX-privacy-footer-wrap">
				<div class="UNX-footer-container">
					<p>
						In case of any concern,
						<a class="UNX-contact-link" href="#">Contact Us</a>
					</p>
				</div>
			</div>
		</div>
`;

const routes = {
	"/": routeTemplate,
	"/search": routeTemplate,
	"/men": routeTemplate,
	"/women": routeTemplate,
	"/washingMachine": routeTemplate,
	"/kitchen-and-cooking/microwaves/convection-microwave-ovens-0": routeTemplate,
	"/furniture-and-bedding/bedroom-furniture/bases-bedheads": routeTemplate,
};

const rootDiv = document.getElementById("root");
rootDiv.innerHTML = routes[window.location.pathname];

const setCategory = function(e) {
	const el = e.target;
	const { dataset } = el;
	if (dataset && dataset.id) {
		window.history.pushState(null, null, dataset.path);
		// rootDiv.innerHTML = routes[el.pathname];
		window.UnbxdAnalyticsConf = {
			page: dataset.id,
		};
		window.unbxdSearch.getCategoryPage();
	}
};

const navElem = document.getElementById("categoryLinks");
navElem.addEventListener("click", setCategory);

const checkRangeTemplate = function(range, selectedRange, facet) {
	const { displayName, facetName, values, gap } = range;
	let valueUI = ``;
	const { facetClass, selectedFacetClass, applyMultipleFilters, applyButtonText, clearButtonText } = facet;
	const selected = selectedRange.length > 0 ? true : false;
	values.forEach((item) => {
		const { from, end } = item;
		const isSelected = this.isSelectedRange(facetName, item);
		const btnCss = isSelected ? `UNX-selected-facet-btn ${facetClass} ${selectedFacetClass}` : `${facetClass}`;
		valueUI += [
			`<button class="${btnCss} UNX-range-facet UNX-change-facet" data-action="setRange" data-facet-name="${facetName}" data-start="${from.dataId}" data-end="${end.dataId}" >`,
			`<span class="UNX-facet-text">${from.name}  -  ${end.name}</span>`,
			`<span class="UNX-facet-count">(${from.count})</span>`,
			`</button>`,
		].join("");
	});
	let clearBtn = ``;
	let applyBtn = ``;
	if (selected) {
		if (applyMultipleFilters) {
			applyBtn = `<button class="UNX-default-btn ${facetClass} UNX-facet-primary" data-action="applyRange"> ${applyButtonText}</button>`;
		}
		clearBtn = `<button class="UNX-default-btn UNX-facet-clear  ${facetClass}" data-action="clearRangeFacets">${clearButtonText}</button>`;
	}
	return [`<div class="UNX-range-wrapper">`, valueUI, `<div class="UNX-price-action-row">`, applyBtn, clearBtn, `<div>`, `</div>`].join("");
};

const unbxdCallbackEcma = function(instance, type, data) {
	console.log(type, data, "type,data");
	if (type === "AFTER_RENDER") {
		if (localStorage.getItem("unx_product_clicked") && document.getElementById(localStorage.getItem("unx_product_clicked"))) {
			document.getElementById(localStorage.getItem("unx_product_clicked")).scrollIntoView();
			localStorage.removeItem("unx_product_clicked");
		}
	}
};

let showFacet = false;
window.resizeTimer = null;

const facetBlock = document.querySelector(".UNX-fxd-facet");

const checkMobile = () => {
	const w = window.innerWidth;
	if (w < 980) {
		return true;
	}
	return false;
};

const toggleMobileFacets = (e) => {
	showFacet = !showFacet;
	const { action } = e.target.dataset;
	if (action === "applyFacets") {
		window.unbxdSearch.setPageStart(0);
		window.unbxdSearch.getResults();
	}
	if (action === "clearFacets") {
		window.unbxdSearch.clearAllFacets();
		window.unbxdSearch.setPageStart(0);
		window.unbxdSearch.getResults();
	}
	if (showFacet) {
		facetBlock.classList.add("UNX-show-facets");
	} else {
		facetBlock.classList.remove("UNX-show-facets");
	}
};

const btnEls = document.querySelectorAll(".UNX-facet-trigger");
btnEls.forEach((item) => {
	item.addEventListener("click", toggleMobileFacets);
});

let performRouteActions = () => {
	if (location.pathname === "/men") {
		window.UnbxdAnalyticsConf = {
			page: "categoryPath:cat700001",
		};
		unbxdSearch.options.productType = "CATEGORY";
	} else if (location.pathname === "/women") {
		window.UnbxdAnalyticsConf = {
			page: "categoryPath:cat120002",
		};
		unbxdSearch.options.productType = "CATEGORY";
	} else if (location.pathname === "/washingMachine") {
		window.UnbxdAnalyticsConf = {
			page: 'categoryPath:"LAUNDRY>WASHING MACHINES"',
		};
		unbxdSearch.options.productType = "CATEGORY";
	} else if (location.pathname === "/kitchen-and-cooking/microwaves/convection-microwave-ovens-0") {
		window.UnbxdAnalyticsConf = {
			page: 'categoryPath:"KITCHEN & COOKING>MICROWAVES>CONVECTION MICROWAVE OVENS"',
		};
		unbxdSearch.options.productType = "CATEGORY";
	} else if (location.pathname === "/furniture-and-bedding/bedroom-furniture/bases-bedheads") {
		window.UnbxdAnalyticsConf = {
			page: 'categoryPath:"FURNITURE ZONE>BEDROOM FURNITURE>BASES & BEDHEADS"',
		};
		unbxdSearch.options.productType = "CATEGORY";
	} else {
		window.UnbxdAnalyticsConf = {};
		unbxdSearch.options.productType = "SEARCH";
	}
};

window.addEventListener("popstate", () => {
	performRouteActions();
});

let searchButtonEl = document.querySelectorAll("#searchBtn");
let searchBoxEl = document.querySelectorAll("#unbxdInput");

Array.from(searchButtonEl).map((searchButton) => {
	searchButton.addEventListener("click", () => {
		if (unbxdSearch.options.productType !== "SEARCH") {
			window.UnbxdAnalyticsConf = {};
			unbxdSearch.options.productType = "SEARCH";
			window.history.pushState(
				{
					replace: true,
				},
				"",
				"/search?"
			);
		}
	});
});

Array.from(searchBoxEl).map((searchBox) => {
	searchBox.addEventListener("keydown", (e) => {
		const val = e.target.value;
		if (e.key === "Enter") {
			if (val !== "") {
				if (unbxdSearch.options.productType !== "SEARCH") {
					window.UnbxdAnalyticsConf = {};
					unbxdSearch.options.productType = "SEARCH";
					window.history.pushState(
						{
							replace: true,
						},
						"",
						"/search?"
					);
				}
			}
		}
	});
});

let productType = "";

if (location.pathname === "/men") {
	window.UnbxdAnalyticsConf = {
		page: "categoryPath:cat700001",
	};
	productType = "CATEGORY";
} else if (location.pathname === "/women") {
	window.UnbxdAnalyticsConf = {
		page: "categoryPath:cat120002",
	};
	productType = "CATEGORY";
} else if (location.pathname === "/washingMachine") {
	window.UnbxdAnalyticsConf = {
		page: 'categoryPath:"LAUNDRY>WASHING MACHINES"',
	};
	productType = "CATEGORY";
} else if (location.pathname === "/kitchen-and-cooking/microwaves/convection-microwave-ovens-0") {
	window.UnbxdAnalyticsConf = {
		page: 'categoryPath:"KITCHEN & COOKING>MICROWAVES>CONVECTION MICROWAVE OVENS"',
	};
	productType = "CATEGORY";
} else if (location.pathname === "/furniture-and-bedding/bedroom-furniture/bases-bedheads") {
	window.UnbxdAnalyticsConf = {
		page: 'categoryPath:"FURNITURE ZONE>BEDROOM FURNITURE>BASES & BEDHEADS"',
	};
	productType = "CATEGORY";
} else {
	window.UnbxdAnalyticsConf = {};
	productType = "SEARCH";
}

window.unbxdSearch = new UnbxdSearch({
	siteKey: "ss-unbxd-Wakefit-Prod32951646727583",
	apiKey: "bdd920f4d3e81b8a52f547047fcaaf66",
	// siteKey: "demo-unbxd700181503576558",
	// apiKey: "fb853e3332f2645fac9d71dc63e09ec1",
	// onError: function(err) {
	//     console.error('onError', err)
	// },
	searchBoxEl: document.querySelectorAll("#unbxdInput"),
	searchTrigger: "click",
	searchButtonEl: document.querySelectorAll("#searchBtn"),
	unbxdAnalytics: true,
	setCategoryId: function(param, self) {
		const { level, parent, name, action } = param;
		let page = ``;
		let pathArr = [];
		const l = Number(level);
		const breadCrumbs = self.getBreadCrumbsList("categoryPath");
		breadCrumbs.forEach((element, i) => {
			const { level, value } = element;
			if (l > Number(level) || Number(level) === 1) {
				pathArr.push(value);
			}
		});
		if (action !== "clearCategoryFilter") {
			pathArr.push(decodeURIComponent(name));
		}
		page = pathArr.join(">");
		if (window.UnbxdAnalyticsConf) {
			window.UnbxdAnalyticsConf.page = 'categoryPath:"' + page + '"';
		}
	},
	products: {
		el: document.querySelectorAll("#searchResultsWrapper"),
		productType: productType,
		onProductClick: function(product, e) {
			localStorage.setItem("unx_product_clicked", product.uniqueId);
			window.location.href = "https://www.google.com";
		},
	},
	spellCheck: {
		enabled: true,
		el: document.querySelectorAll("#didYouMeanWrapper"),
	},
	noResults: {
		el: document.getElementById("noResultWrapper"),
	},
	selectedFacets: {
		el: document.getElementById("selectedFacetWrapper"),
	},
	facet: {
		isCollapsible: true,
		defaultOpen: "NONE",
		viewMoreLimit: 2,
		enableViewMore: true,
		facetsEl: document.getElementById("facetsWrapper"),
		selectedFacetsEl: document.getElementById("selectedFacetWrapper"),
		selectedFacetClass: "UNX-selected-facet-btn",
		facetTemplate: function(facetInfo, facets, isExpanded, facetSearchTxt, facet) {
			const urlSearchParams = new URLSearchParams(window.location.search);
			const params = Object.fromEntries(urlSearchParams.entries());
			var name = facetInfo.displayName;
			var filterField = facetInfo.filterField;
			// var isSelected = (facetInfo.isSelected) ? 'is-expanded' : '';
			var searchStr = window.location.search || "";
			var isSelected = searchStr.includes(facetInfo.facetName) ? "is-expanded" : "";

			return [
				`<div id="${facetInfo.facetName}" class="facets__filters facets__filters--size js-filter-expand UNX_facet_open ${isSelected}">
                    <span aria-label="Filter: ${filterField}" role="text" class="facets__filters-label">${name}</span>
                     <ul data-search-facet-container="" class="facets__filters-values facets__filters-values--size list-reset js-filter-values UNX_facet_open ${isSelected}">
                      ${facets}
                    </ul>
                    </div>                 
                    `,
			].join("");
		},
		facetItemTemplate: function(facet, value, facetSearchTxt) {
			const { facetName, isSelected, multiLevelFacetSelectorClass, displayName } = facet;
			const { name, count, dataId } = value;
			let { facetClass, selectedFacetClass } = this.options.facet;
			const { UNX_uFilter } = this.testIds;

			let action = "changeFacet";
			let selectedFacet = "disable";
			let liCss = "";
			let hightlighted = "";
			if (isSelected) {
				selectedFacet = "checked";
				hightlighted = "highlight";
				facetClass += ` ${selectedFacetClass} `;
				action = "deleteFacetValue";
				liCss = isSelected ? "selected" : "";
			}
			return [
				`<li class="facets__item facets__item--comfort level js-filter-item js-filter-item-${displayName} count-${count} ${liCss} ${facetName}" data-search-facet-value="${dataId}">
                <label data-search-facet-label="${name}" data-id="${dataId}" class="facet-checkbox facet-checkbox-${displayName} UNX-change-facet ${facetClass} " data-facet-action="${action}" data-test-id="${UNX_uFilter}" data-facet-name="${facetName}" data-handler-init="true">
                  <input data-search-facet-input="" ${selectedFacet} class="js-filter-checkbox" type="checkbox" value="${name}">
                <span class="${hightlighted}">${name} (${count})</span>
                </label>
                </li>`,
			].join("");
		},
		selectedFacetTemplate: function(selections, facet, selectedFacetsConfig) {
			const { clearAllText, clearFacetsSelectorClass } = facet;
			const selectedFClass = this.selectedFacetClass ? this.selectedFacetClass : selectedFacetsConfig.selectedFacetClass;

			if (selections.length > 0) {
				return [`<div class="collection__active-filters UNX-facets-selections">`, `${selections}`, `</div>`].join("");
			} else {
				return ``;
			}
		},
		selectedFacetItemTemplate: function(selectedFacet, selectedFacetItem, facetConfig, selectedFacetsConfig) {
			const { facetName, facetType } = selectedFacet;
			const { name, count, dataId } = selectedFacetItem;
			const { facetClass, selectedFacetClass, removeFacetsSelectorClass } = this.options.facet;
			const { UNX_uFilter } = this.testIds;
			let action = "deleteSelectedFacetValue";

			const css = ` ${facetClass} ${selectedFacetClass} `;

			return [
				`<a data-test-id="${UNX_uFilter}" class="collection__active-filters-btn btn btn--tertiary search-facet-display-name search-facet-remove-only ${css}" data-facet-name-value="metaf_${facetName}" data-facet-action="${action}" 
                     data-facet-name="${facetName}" data-facet-value="${facetName}" data-id="${dataId}" data-handler-init="true">${name}
                     <i class="collection__active-filters-icon icon icon--close-blue" 
                     data-facet-action="${action}" data-facet-name="${facetName}" data-facet-value="${facetName}" data-id="${dataId}" >
                     </i> </a>`,
			].join("");
		},
	},

	pagination: {
		// type: 'CLICK_N_SCROLL',
		type: "FIXED_PAGINATION",
		// type: 'INFINITE_SCROLL',
		el: document.querySelectorAll(".unxPagination"),
		// usePageAndCount: false,
		virtualization: false,
		bufferPages: 1,
		heightDiffToTriggerNextPage: 100,
		infiniteScrollTriggerEl: document.getElementById("searchResultsWrapper"),
		onPaginate: function(data) {
			console.log(data, "data");
		},
	},
	url: {
		hashMode: false,
		allowExternalUrlParams: false,
		seoFriendlyUrl: true,
		orderOfQueryParams: ["QUERY", "FILTERS", "PAGE_NUMBER", "PAGE_SIZE", "SORT", "VIEW_TYPE"], //defaults.

		queryParamSeparator: "&",
		searchQueryParam: {
			addToUrl: true,
			algo: "KEY_VALUE_REPLACER",
			keyReplacer: "query",
		},
		browseQueryParam: {
			addToUrl: true,
			algo: "DEFAULT",
			keyReplacer: "pppp",
		},
		pageViewParam: {
			addToUrl: true,
			algo: "KEY_VALUE_REPLACER",
			keyReplacer: "view",
			valuesReplacer: {
				GRID: "GRID",
				LIST: "LI@ST(list)",
			},
		},
		sortParam: {
			addToUrl: true,
			algo: "DEFAULT",
			keyReplacer: "sortBy",
			valueReplacer: {
				"price desc": "p&d",
				"price asc": "p-a",
			},
		},
		pageNoParam: {
			addToUrl: true,
			algo: "DEFAULT",
			keyReplacer: "p",
			usePageNo: true, // uses page no. when turned on.else , index
		},
		pageSizeParam: {
			addToUrl: true,
			algo: "DEFAULT",
			keyReplacer: "count",
		},
		facetsParam: {
			addToUrl: true,
			algo: "KEY_VALUE_REPLACER",
			multiValueSeparator: ",",
			keyReplacer: {
				color_uFilter: "color",
				size_uFilter: "size",
				gender_uFilter: "gender",
				occasion_uFilter: "occasion",
				fit_uFilter: "fit",
				type_uFilter: "type",
			},
			valueReplacer: {
				color_uFilter: {
					Multi: "multi",
					White: "whitee",
				},
				occasion_uFilter: {
					"Wear to Work": "Wear-to-work",
				},
			},
			facetsOrderInUrl: ["gender_uFilter", "color_uFilter", "price", "category-filter"],
			rangeFacets: ["price"],
			rangeSeparator: "-",
		},
	},
	breadcrumb: {
		el: document.querySelectorAll("#breadcrumpContainer"),
	},
	pagesize: {
		enabled: true,
		el: document.querySelectorAll("#changeNoOfProducts"),
		pageSize: 10,
		options: [10, 20, 30, 40],
	},

	sort: {
		enabled: true,
		el: document.querySelectorAll("#sortWrapper"),
		options: [
			{
				value: "price desc",
				text: "Price High to Low",
			},
			{
				value: "price asc",
				text: " Price Low to High",
			},
		],
	},
	loader: {
		el: document.querySelectorAll("#loaderEl"),
	},
	productView: {
		el: document.querySelectorAll("#productViewTypeContainer"),
		defaultViewType: "GRID",
	},
	banner: {
		el: document.getElementById("bannerContainer"),
		count: 1,
	},
	swatches: {
		enabled: true,
		attributesMap: {
			swatchList: "color",
			swatchImgs: "unbxd_color_mapping",
			swatchColors: "color",
		},
	},
	// extraParams: {
	//     // test: function(){
	//     //     return new Date().getMilliseconds()
	//     // }
	// },
	onAction: function(e, ctx) {},
	onEvent: unbxdCallbackEcma,
	debugMode: true,
	browseQueryParam: "p-id",
});

window.unbxdSearch.getResults("*");
