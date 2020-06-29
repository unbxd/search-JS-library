
const sortOptions = [
    {
        value:"price desc",
        text:"Price High to Low"
    },
    {
        value:"price asc",
        text:" Price Low to High"
    },
    {
        value:"rating asc",
        text:" Rating Low to High"
    },
    {
        value:"rating desc",
        text:" Rating High to low"
    }
];
const sortTemplate = function(selectedSort) {
    let optionsUI = "";
    const {
        options,
        sortClass,
        selectedSortClass
    } = this.options.sort;
    options.forEach((item) => {
        const {
            value,
            text
        } = item;
        if(value == selectedSort) {
            optionsUI += `<option value="${value}" class="${selectedSortClass}" selected>
                ${text}
            </option>` 
        } else {
            optionsUI += `<option value="${value}">${text}</option>` 
        }
    })
    return `<div>
        <select data-action="changeSort" id="unbxdSorter" class="${sortClass}">
            <option value="">
                Sort By Relevancy
            </option>
            ${optionsUI}
        </select>
    </div>`
}
export {
    sortOptions,
    sortTemplate
};
