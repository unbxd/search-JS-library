import UnbxdSearch from '../../src/index';

const setCategory = function(e) {
	const el = e.target;
	const { dataset } = el;
	if (dataset && dataset.id) {
		window.UnbxdAnalyticsConf = {
			page: dataset.id,
		};
		window.unbxdSearch.getCategoryPage();
	}
};
const navElem = document.getElementById('categoryLinks');
navElem.addEventListener('click', setCategory);

const checkRangeTemplate = function(range, selectedRange, facet) {
	const { displayName, facetName, values, gap } = range;
	let valueUI = ``;
	const { facetClass, selectedFacetClass, applyMultipleFilters, applyButtonText, clearButtonText } = facet;
	const selected = selectedRange.length > 0 ? true : false;
	values.forEach(item => {
		const { from, end } = item;
		const isSelected = this.isSelectedRange(facetName, item);
		const btnCss = isSelected ? `UNX-selected-facet-btn ${facetClass} ${selectedFacetClass}` : `${facetClass}`;
		valueUI += [
			`<button class="${btnCss} UNX-range-facet UNX-change-facet" data-action="setRange" data-facet-name="${facetName}" data-start="${from.dataId}" data-end="${end.dataId}" >`,
			`<span class="UNX-facet-text">${from.name}  -  ${end.name}</span>`,
			`<span class="UNX-facet-count">(${from.count})</span>`,
			`</button>`,
		].join('');
	});
	let clearBtn = ``;
	let applyBtn = ``;
	if (selected) {
		if (applyMultipleFilters) {
			applyBtn = `<button class="UNX-default-btn ${facetClass} UNX-facet-primary" data-action="applyRange"> ${applyButtonText}</button>`;
		}
		clearBtn = `<button class="UNX-default-btn UNX-facet-clear  ${facetClass}" data-action="clearRangeFacets">${clearButtonText}</button>`;
	}
	return [
		`<div class="UNX-range-wrapper">`,
		valueUI,
		`<div class="UNX-price-action-row">`,
		applyBtn,
		clearBtn,
		`<div>`,
		`</div>`,
	].join('');
};

const unbxdCallbackEcma = function(instance, type, data) {
	console.log(type, data, 'type,data');
};

let showFacet = false;
window.resizeTimer = null;

const facetBlock = document.querySelector('.UNX-fxd-facet');
const checkMobile = () => {
	const w = window.innerWidth;
	if (w < 980) {
		return true;
	}
	return false;
};
const toggleMobileFacets = e => {
	showFacet = !showFacet;
	const { action } = e.target.dataset;
	if (action === 'applyFacets') {
		window.unbxdSearch.setPageStart(0);
		window.unbxdSearch.getResults();
	}
	if (action === 'clearFacets') {
		window.unbxdSearch.clearAllFacets();
		window.unbxdSearch.setPageStart(0);
		window.unbxdSearch.getResults();
	}
	if (showFacet) {
		facetBlock.classList.add('UNX-show-facets');
	} else {
		facetBlock.classList.remove('UNX-show-facets');
	}
};

const btnEls = document.querySelectorAll('.UNX-facet-trigger');
btnEls.forEach(item => {
	item.addEventListener('click', toggleMobileFacets);
});
/*UnbxdSearch.prototype.setUrl = function(reload) {
    const {
        productType,
        hashMode,
        searchPath,
        onQueryRedirect
    } = this.options;
    const {
        userInput,
        urlLoad,
        isHistory,
        responseObj = {},
        startPageNo
    } = this.state;
    const {
        productViewType
    } = this.viewState;
    const {
        redirect
    } = responseObj;
    if(typeof onQueryRedirect === "function") {
        onQueryRedirect(this, redirect);
    }
    let facetStr = ``;
    facetStr += this.urlFlattenFacets();
    facetStr += this.getRangeFilterStr();
    facetStr += this.categoryFilterUrlStr();
    if(startPageNo > 0) {
        facetStr += this.getPageStartStr()
    }
    facetStr += `&viewType=${productViewType}`;
    const q = `q=${userInput}${facetStr}${this.getSortUrlString()}`;
    this.state.urlState = q;
    const isPath = location.pathname.includes(searchPath);
    if(hashMode) {
        const newQ = `#${q}`;
        if(isPath && (newQ !== location.hash)) {
            location.hash = q;
        }
    } else {
        if(isHistory && !urlLoad && isPath){
            const newQ  = `?${q}`;
            if(decodeURI(newQ) !== decodeURI(location.search)) {
                window.history.pushState(q, null, newQ);
                this.state.urlLoad = false;
            }
        }
        if(reload && isPath){
            location.search = q;
        }
    }
}
extraParams: {
        "facet.multilevel": "categoryPath",
        "f.categoryPath.displayName": "Category",
        "f.categoryPath.facetName": "Category"
    }
*/
window.unbxdSearch = new UnbxdSearch({
	siteKey: 'Stage-m2-ddecor12231625734093',
	apiKey: '4b5b1d98dc62968d6ebf3bdc94b0eccc',
	searchBoxEl: document.getElementById('unbxdInput'),
	searchTrigger: 'click',
	searchButtonEl: document.getElementById('searchBtn'),
	products: {
		el: document.getElementById('searchResultsWrapper'),
		productType: 'SEARCH',
		productClick: function(product, e) {
			console.log(product, 'product,index', e);
		},
	},
	spellCheck: {
		enabled: true,
		el: document.getElementById('didYouMeanWrapper'),
	},
	noResults: {
		el: document.getElementById('noResultWrapper'),
	},
	facet: {
		facetsEl: document.getElementById('facetsWrapper'),
		facetTemplate: function(facetObj, children, isExpanded, facetSearchTxt, facet) {
			const { displayName, facetName, multiLevelField, facetType, values } = facetObj;
			const {
				facetClass,
				applyMultipleFilters,
				isCollapsible,
				isSearchable,
				searchPlaceHolder,
				textFacetWrapper,
				enableViewMore,
				viewMoreText,
				viewMoreLimit,

				applyButtonText,
				clearButtonText,
			} = facet;
			const { actionBtnClass, actionChangeClass } = this.options;
			const { openBtn, closeBtn } = this.cssList;
			let viewMoreUi = ``;
			let viewMoreCss = ``;
			const selected = this.getSelectedFacets()[facetName];
			const isFtr = selected && selected.length > 0 ? true : false;
			if (enableViewMore && facetType === 'text' && values.length > viewMoreLimit) {
				viewMoreCss = 'UNX-view-more';
				viewMoreUi = `<div class="UNX-view-more-row "><button class="${actionBtnClass}" data-facet-name="${facetName}" data-action="viewMore" data-id="${viewMoreText[0]}">${viewMoreText[0]}</button></div>`;
			}
			let clearUI = ``;
			let applyBtn = ``;
			if (isFtr) {
				clearUI = `<button class="UNX-facet-clear ${facetClass} "data-facet-action="deleteFacet" data-facet-name="${facetName}">${clearButtonText}</button>`;
			}
			if (applyMultipleFilters && isFtr) {
				applyBtn = `<button class="UNX-facet-primary ${facetClass} "data-facet-action="applyFacets" >${applyButtonText}</button>`;
			}
			let collapsibleUI = ``;
			let searchInput = ``;
			if (isCollapsible) {
				if (isExpanded) {
					collapsibleUI = `<div class="UNX-facet-header ${actionBtnClass} UNX-facet-open"  data-facet-name="${facetName}" data-facet-action="facetClose"> <h3>${displayName}</h3> </div>`;
				} else {
					collapsibleUI = `<div class="UNX-facet-header ${actionBtnClass} UNX-facet-close"  data-facet-name="${facetName}" data-facet-action="facetOpen"> <h3>${displayName}</h3></div>`;
				}
			}
			if (isSearchable && facetSearchTxt !== null) {
				searchInput = `<div class="UNX-searchable-facets"><label class="UNX-hidden" for="${facetName}_searchBox">${searchPlaceHolder}</label><input  id="${facetName}_searchBox" name="${facetName}_searchBox" data-test-id="${this.testIds.UNX_searchFacets}" class="UNX-facet-search ${actionChangeClass}" value="${facetSearchTxt}"  data-facet-name="${facetName}" data-facet-action="searchFacets" type="text" placeholder="${searchPlaceHolder}"/></div>`;
			}
			const colorFilterWrap = facetName === 'colorcode_uFilter' ? ' color-grid' : '';
			return [
				`<div class="UNX-text-facet-wrap">`,
				collapsibleUI,
				`<div class="UNX-facets-all">`,
				searchInput,
				`<div class="UNX-facets ${textFacetWrapper} ${viewMoreCss} ${colorFilterWrap}">${children}</div>`,
				viewMoreUi,
				`<div class="UNX-facet-footer">${applyBtn} ${clearUI}</div>`,
				`</div>`,
				`</div>`,
			].join('');
		},
		facetItemTemplate: function(facet, value, facetSearchTxt) {
			const { facetName, isSelected } = facet;
			const { name, count, dataId } = value;
			let { facetClass, selectedFacetClass } = this.options.facet;
			const { UNX_uFilter } = this.testIds;
			if (facetSearchTxt && facetSearchTxt.length > 0) {
				if (name.toUpperCase().indexOf(facetSearchTxt.toUpperCase()) < 0) {
					facetClass += ' UNX-search-hidden';
				}
			}
			let action = 'changeFacet';
			if (isSelected) {
				facetClass += ` ${selectedFacetClass}`;
				action = 'deleteFacetValue';
			}
			let facetText = `<span class="UNX-facet-text">${name}</span><span class="UNX-facet-count">(${count})</span>`;
			if (facetName === 'colorcode_uFilter') {
				facetClass = ' color-facet';
				facetText = `<span style="background-color:${name}" class="UNX-facet-text color-swatch-filter"></span><span class="UNX-facet-count">${count}</span>`;
			}
			return [
				`<button data-test-id="${UNX_uFilter}" data-facet-name="${facetName}" data-facet-action="${action}" class="UNX-change-facet ${facetClass}" data-id="${dataId}">`,
				`${facetText} `,
				`</button>`,
			].join('');
		},
	},
	pagination: {
		type: 'INFINITE_SCROLL',
	},
	breadcrumb: {
		el: document.getElementById('breadcrumpContainer'),
	},
	pagesize: {
		el: document.getElementById('changeNoOfProducts'),
	},

	sort: {
		el: document.getElementById('sortWrapper'),
		options: [
			{
				value: 'price desc',
				text: 'Price High to Low',
			},
			{
				value: 'price asc',
				text: ' Price Low to High',
			},
		],
	},
	loader: {
		el: document.getElementById('loaderEl'),
	},
	productView: {
		el: document.getElementById('productViewTypeContainer'),
	},
	banner: {
		el: document.getElementById('bannerContainer'),
		count: 1,
	},
});

//window.unbxdSearch.initialize();
