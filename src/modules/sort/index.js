const sortOptions = [
    {
        value:"price desc",
        text:"Price High to Low"
    },
    {
        value:"price asc",
        text:" Price Low to High"
    }
];
const sortTemplate = function(selectedSort, sortConfig) {
    let optionsUI = "";
    const {
        options = [],
        sortClass = "",
        selectedSortClass = ""
    } = sortConfig || {};
    const {
        UNX_unbxdSorter = ""
    } = this.testIds;
    options && options.forEach((item) => {
        const {
            value = "",
            text = ""
        } = item;
        if(value == selectedSort) {
            optionsUI += `<option value="${value}" class="${selectedSortClass}" selected>${text}</option>`;
        } else {
            optionsUI += `<option value="${value}">${text}</option>`;
        }
    })
    return [`<div class="UNX-sort-block">`,
        `<span class="UNX-sort-header">Sort By</span>`,
        `<label class="UNX-hidden" for="unxSortSelect">Sort By</label>`,
        `<select data-test-id="${UNX_unbxdSorter}" name="unxSortSelect" data-action="changeSort" id="unxSortSelect" class="${sortClass}">`,
            `<option value="">Relevancy</option>`,
            optionsUI,
        `</select>`,
    `</div>`].join('')
}
export {
    sortOptions,
    sortTemplate
};
