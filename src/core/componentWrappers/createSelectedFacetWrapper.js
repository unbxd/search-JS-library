export default function() {
    const {
        tagName,
        htmlAttributes = {},
        events
    } = this.options.selectedFacets;
    return this.createElement(
        tagName,
        Object.assign({},htmlAttributes),
        events,
        this
    );
}