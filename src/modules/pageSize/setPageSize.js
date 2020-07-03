import {
    onClickPageSize
} from './actions';
import * as Sqrl from 'squirrelly'
import pageSizeUi from './pageSizeView';
const renderPageSize = function() {
    const {
        pagesize
    } = this.options;
    const qParams  = this.getQueryParams();
    if(qParams) {
        pagesize.pageSize = Number(qParams.rows);
    }
    this.pageSizeWrapper.innerHTML = this.options.pagesize.template.bind(this)(pagesize);
}
const setPageSize = (prototype) => {
    prototype = Object.assign(prototype,{
        pageSizeUi,
        onClickPageSize,
        renderPageSize
    })
}
export {
    setPageSize as default,
    renderPageSize,
    pageSizeUi,
    onClickPageSize
};