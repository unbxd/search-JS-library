export default function() {

    const {
        tagName,
        attributes = {},
        events
    } = this.options.sort;
    return this.createElement(
        tagName,
        Object.assign({},attributes),
        events,
        this
    );
}