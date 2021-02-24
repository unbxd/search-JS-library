export default function() {
    const {
        tagName,
        attributes = {},
        events
    } = this.options.pagination;
    return this.createElement(
        tagName,
        Object.assign({},attributes),
        events,
        this
    );
}
