import FixedPaginationView from "./paginationUI";
import ClickToScrollView from "./clickNScrollView";

export default function(pageData) {
    const {
        pagination = {}
    } = this.options;
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

