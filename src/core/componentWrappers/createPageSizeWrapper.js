export default function() {
    const {
        tagName,
        htmlAttributes = {},
        events
    } = this.options.pagesize;
    return this.createElement(
        tagName,
        Object.assign({},htmlAttributes),
        events,
        this
    );
}
