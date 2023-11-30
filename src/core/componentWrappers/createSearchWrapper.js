export default function()  {
    const {
        tagName,
        htmlAttributes = {},
        events
    } = this.options.products;
    return this.createElement(
        tagName,
        Object.assign({},htmlAttributes),
        events,
        this
    );
}
