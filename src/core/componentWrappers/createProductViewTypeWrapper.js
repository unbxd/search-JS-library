export default function(){
    const {
        tagName,
        attributes = {},
        events
    } = this.options.productView;
    return this.createElement(
        tagName,
        Object.assign({},attributes),
        events,
        this
    );
}
