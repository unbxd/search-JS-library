export default function() {
    const {
        pageClass
    } = this.options.pagination;
    return `<div class="UNX-click-scroll"><button class="UNX-click-n-scroll ${pageClass}">Load More</button></div>`
};
