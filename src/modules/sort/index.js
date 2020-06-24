
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
    this.options.sortOptions.forEach((item) => {
        const {
            value,
            text
        } = item;
        if(value == selectedSort) {
            optionsUI += `<option value="${value}" selected>
                ${text}
            </option>` 
        } else {
            optionsUI += `<option value="${value}">${text}</option>` 
        }
    })
    return `<div>
        <select id="unbxdSorter" class="select-class">
            <option value="">
                Sort By Relevancy
            </option>
            ${optionsUI}
        </select>
        <button data-action="clearSort">clear sort</button>
    </div>`
}
export {
    sortOptions,
    sortTemplate
};
