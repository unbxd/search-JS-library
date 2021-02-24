export default function(){
    const {
        tagName,
        htmlAttributes = {},
        events
    } = this.options.productView;
    return this.createElement(
        tagName,
        Object.assign({},htmlAttributes),
        events,
        this
    );
}
