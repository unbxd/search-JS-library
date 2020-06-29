import {
    onClickPageSize
} from './actions';
import pageSizeUi from './pageSizeView';
const renderPageSize = function() {
    this.pageSizeWrapper.innerHTML = this.options.pagesize.template.bind(this)(this.options.pageSize);
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