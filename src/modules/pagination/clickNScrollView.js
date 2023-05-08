export default function(pageData, pagination) {
    const {
        pageClass
    } = pagination;
    return `<div class="UNX-click-scroll"><button data-test-id="${this.testIds.UNX_loadMore}" data-page-action="next" class="UNX-click-n-scroll ${pageClass}">Load More</button></div>`
};
