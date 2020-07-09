export default function() {
    const {
        pageClass,
    } = this.options.pagination;
    return `<button class="${pageClass}">Load More</button>`
};
