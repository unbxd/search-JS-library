export default function(){
    const {
        tagName,
        attributes = {},
        events
    } = this.options.facet;
    return this.createElement(
        tagName,
        Object.assign({},attributes),
        events,
        this
    );
};
