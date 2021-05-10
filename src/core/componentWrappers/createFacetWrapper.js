export default function(){
    const {
        tagName,
        htmlAttributes = {},
        events
    } = this.options.facet;
    return this.createElement(
        tagName,
        Object.assign({},htmlAttributes),
        events,
        this
    );
};
