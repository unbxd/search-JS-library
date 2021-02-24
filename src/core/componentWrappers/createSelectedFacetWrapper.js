export default function() {
    const {
        selectedFacetConfig = {}
    } = this.options.facet;
    const {
        tagName,
        attributes = {},
        events
    } = selectedFacetConfig;
    return this.createElement(
        tagName,
        Object.assign({},attributes),
        events,
        this
    );
}