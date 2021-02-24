export default function() {
    const {
        tagName,
        attributes = {},
        events
    } = this.options.pagesize;
    return this.createElement(
        tagName,
        Object.assign({},attributes),
        events,
        this
    );
}
