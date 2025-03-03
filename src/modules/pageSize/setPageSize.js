import { events } from "../../common/constants";
import { onClickPageSize } from "./onClickPageSize";
import pageSizeUi from "./pageSizeUi";

const renderPageSize = function (pageSizeWrapper) {
    try {
        const { pagesize = {} } = this.options;
        let selected = pagesize.pageSize;
        const qParams = this.getQueryParams() || {};
        if (qParams) {
            selected = this.state.pageSize;
        }
        const results = this.getSearchResults();
        if (results && results.numberOfProducts === 0) {
            pageSizeWrapper.innerHTML = ``;
        } else {
            pageSizeWrapper.innerHTML = this.options.pagesize.template.bind(this)(selected, pagesize);
        }
    } catch (err) {
        this.onError("Pagesize > renderPageSize", err, events.runtimeError);
    }
};

/* eslint-disable no-unused-vars */
const setPageSize = (prototype) => {
    prototype = Object.assign(prototype, {
        pageSizeUi,
        onClickPageSize,
        renderPageSize,
    });
};

/* eslint-disable no-unused-vars */
export { setPageSize as default, renderPageSize, pageSizeUi, onClickPageSize };
