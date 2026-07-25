import { events } from "../../common/constants";
import multilevelMultiselectFacetUI from "./multilevelMultiselectFacetUI";
import multiLevelFacetUI from "./multiLevelFacetUI";

export default function(bucketedFacet = {}, isExpanded) {
    try{
        let bucketedUi = ``;
        const self = this;
        const {
            openFacet = "",
            closeFacet = ""
        } = this.cssList;
        const {
            facetName,
        } = bucketedFacet;
        const {
            facet = {}
        } = this.options;
        const {
            isCollapsible
        } = facet;
        let valueUI = "";
        const facetMultilevelMultiSelect = self.options?.facet?.facetMultilevelMultiSelect || false;

        // Derive the currently-selected path crumbs from selectedFacets for the facet widget.
        // (getBreadCrumbsList is reserved for the breadcrumb bar and uses the browse categoryFilter.)
        const selectedFacetEntries = (this.getSelectedFacets() || {})[facetName] || [];
        const selectedPath = selectedFacetEntries.length
            ? (selectedFacetEntries[0].dataId || selectedFacetEntries[0].name || '')
            : '';
        const breadCrumb = selectedPath
            ? selectedPath.split('>').map((value, i) => ({
                level: i + 1,
                filterField: facetName,
                value
            }))
            : [];

        // User provided config should always take precedence.
        // If no custom template is provided, fall back to SDK defaults.
        const configuredMultiLevelTemplate = facet.multiLevelFacetTemplate;
        const defaultTemplate = facetMultilevelMultiSelect ? multilevelMultiselectFacetUI : multiLevelFacetUI;
        const templateToUse = configuredMultiLevelTemplate || defaultTemplate;
        valueUI = templateToUse.bind(this)(bucketedFacet, breadCrumb, "", facet);

        bucketedUi += self.options.facet.facetTemplate.bind(self)(bucketedFacet, valueUI, isExpanded, null, facet);
        let styles = (isExpanded) ? openFacet : closeFacet;
        if (!isCollapsible) {
            styles = "";
        }
        return `<div class="${facetName} UNX-facet-item-d UNX-multilivel-facets-block UNX-multilevel-block ${styles}">${bucketedUi}</div>`;
    }
    catch(err){
        this.onError("facets > renderMultiLevelFacet.js", err, events.runtimeError)
    }
    
}
