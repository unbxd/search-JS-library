export default function() {

    const {
        tagName,
        htmlAttributes = {},
        events
    } = this.options.sort;
    return this.createElement(
        tagName,
        Object.assign({},htmlAttributes),
        events,
        this
    );
}