export default function() {
    const {
        tagName,
        htmlAttributes = {},
        events
    } = this.options.breadcrumb;
    return this.createElement(
        tagName,
        Object.assign({},htmlAttributes),
        events,
        this
    );
}
