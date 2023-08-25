import FixedPaginationView from "./paginationUI";
import ClickToScrollView from "./clickNScrollView";

export default function(pageData, pagination = this.options.pagination) {
    const {
        type
    } = pagination;
    if(type === "CLICK_N_SCROLL") {
        return ClickToScrollView.bind(this)(pageData, pagination)
    }
    if(type ==="FIXED_PAGINATION") {
        return FixedPaginationView.bind(this)(pageData, pagination)
    }
    return ``;
};

