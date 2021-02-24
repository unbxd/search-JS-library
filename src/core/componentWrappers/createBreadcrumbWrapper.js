export default function() {
    const {
        tagName,
        attributes = {},
        events
    } = this.options.breadcrumb;
    return this.createElement(
        tagName,
        Object.assign({},attributes),
        events,
        this
    );
};
