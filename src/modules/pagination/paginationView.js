import FixedPaginationView from "./paginationUI";
import ClickToScrollView from "./clickNScrollView";

export default function(pageData, pagination = this.options.pagination) {
    const paginationType = this.getPaginationType();
    if (paginationType === "CLICK_N_SCROLL") {
        return ClickToScrollView.bind(this)(pageData, pagination)
    }
    if (paginationType ==="FIXED_PAGINATION") {
        return FixedPaginationView.bind(this)(pageData, pagination)
    }
    return ``;
}

