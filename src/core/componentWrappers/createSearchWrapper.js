export default function()  {
    const {
        wrapperTag
    } = this.options.products;
    return this.createElement(
        wrapperTag,
        "",{
            class:"UNX-search-results-block UNX-result-wrapper"
        }
    );
};
