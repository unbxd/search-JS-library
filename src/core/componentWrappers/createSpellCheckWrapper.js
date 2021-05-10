export default function(){
    const {
        tagName,
        htmlAttributes = {},
        events
    } = this.options.spellCheck;
    return this.createElement(
        tagName,
        Object.assign({},htmlAttributes),
        events,
        this
    );
}
