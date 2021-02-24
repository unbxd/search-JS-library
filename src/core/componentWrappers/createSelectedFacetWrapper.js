export default function() {
    const {
        selectedFacetConfig = {}
    } = this.options.facet;
    const {
        tagName,
        htmlAttributes = {},
        events
    } = selectedFacetConfig;
    return this.createElement(
        tagName,
        Object.assign({},htmlAttributes),
        events,
        this
    );
}