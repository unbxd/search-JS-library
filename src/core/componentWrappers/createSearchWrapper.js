export default function()  {
    const {
        tagName,
        attributes = {},
        events
    } = this.options.products;
    return this.createElement(
        tagName,
        Object.assign({},attributes),
        events,
        this
    );
};
