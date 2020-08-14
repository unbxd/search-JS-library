import FixedPaginationView from "./fixedPaginationView";
import ClickToScrollView from "./clickNScrollView";

export default function(pageData) {
    const {
        type
    } = this.options.pagination;
    if(type === "CLICK_N_SCROLL") {
        return ClickToScrollView.bind(this)(pageData)
    }
    if(type ==="FIXED_PAGINATION") {
        return FixedPaginationView.bind(this)(pageData)
    }
    return ``;
};

