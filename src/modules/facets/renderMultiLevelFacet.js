export default function(bucketedFacet, isExpanded) {
    let bucketedUi = ``;
    const self = this;
    const {
        openFacet,
        closeFacet
    } = this.cssList;
    const {
        facetName,
    } = bucketedFacet;
    const {
        facet
    } = this.options;
    const {
        isCollapsible
    } = facet;
    const breadCrumb = this.getBreadCrumbsList(facetName);
    const valueUI = self.options.facet.multiLevelFacetTemplate.bind(this)(bucketedFacet, breadCrumb, "", facet);
    bucketedUi += self.options.facet.facetTemplate.bind(self)(bucketedFacet, valueUI, isExpanded, null, facet);
    let styles = (isExpanded) ? openFacet : closeFacet;
    if (!isCollapsible) {
        styles = "";
    }
    return `<div class="${facetName} UNX-facet-item-d UNX-multilivel-facets-block UNX-multilevel-block ${styles}">${bucketedUi}</div>`;
};
