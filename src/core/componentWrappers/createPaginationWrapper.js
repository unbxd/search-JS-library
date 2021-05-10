export default function() {
    const {
        tagName,
        htmlAttributes = {},
        events
    } = this.options.pagination;
    return this.createElement(
        tagName,
        Object.assign({},htmlAttributes),
        events,
        this
    );
}
