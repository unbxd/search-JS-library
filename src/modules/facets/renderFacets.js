import DOMPurify from "dompurify";
import { events } from "../../common/constants";

export default function() {
	try {
		let facetsUI = ``;
		const { facet = {} } = this.options;
		const { defaultOpen, applyMultipleFilters } = facet;
		const { expandedFacets, lastAction } = this.viewState;
		if (lastAction === "updatedRangeSlider" && applyMultipleFilters) {
			return false;
		}
		const allFacets = this.getAllFacets() || [];
		const selectedFacets = this.getSelectedFacets() || {};
		allFacets.forEach((facetItem, idx) => {
			const { facetType, facetName } = facetItem;
			if (typeof expandedFacets[facetName] === "undefined" && defaultOpen === "ALL") {
				expandedFacets[facetName] = true;
			}
			if (defaultOpen === "FIRST" && idx == 0) {
				expandedFacets[facetName] = true;
			}
			const isExpanded = this.isExpandedFacet(facetName);
			const facetSearchTxt = this.getSearchFacetsText(facetName) || "";
			const selectedFacet = selectedFacets[facetName];
			let facetTypeUI = ``;
			if (facetType === "text") {
				facetTypeUI += this.renderTextFacet(facetItem, selectedFacet, isExpanded, facetSearchTxt);
			}
			if (facetType === "range") {
				facetTypeUI += this.renderRangeFacet(facetItem, isExpanded, "");
			}
			if (facetType === "category") {
				facetTypeUI += this.renderMultiLevelFacet(facetItem, isExpanded, facetSearchTxt);
			}
			const sanitizedFacetTypeUI = DOMPurify.sanitize(facetTypeUI);
			if (sanitizedFacetTypeUI !== facetTypeUI) {
				// TODO: we can add onEvent here if required.
			}
			facetsUI += sanitizedFacetTypeUI;
			this.viewState.facetElementMap[facetName] = facetName;
		});
		this.options.facet.onFacetLoad.bind(this)(allFacets);
		return facetsUI;
	} catch (err) {
		this.onError("Facets > renderFacets.js", err, events.runtimeError);
	}
}
