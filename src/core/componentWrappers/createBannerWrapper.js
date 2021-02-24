export default function() {
    const {
        tagName,
        attributes = {},
        events
    } = this.options.banner;
    return this.createElement(
        tagName,
        Object.assign({},attributes),
        events,
        this
    );
};
