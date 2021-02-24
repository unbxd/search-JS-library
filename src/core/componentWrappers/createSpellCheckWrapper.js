export default function(){
    const {
        tagName,
        attributes = {},
        events
    } = this.options.spellCheck;
    return this.createElement(
        tagName,
        Object.assign({},attributes),
        events,
        this
    );
}
