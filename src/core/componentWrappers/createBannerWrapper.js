export default function() {
    const {
        tagName,
        htmlAttributes = {},
        events
    } = this.options.banner;
    return this.createElement(
        tagName,
        Object.assign({},htmlAttributes),
        events,
        this
    );
}
