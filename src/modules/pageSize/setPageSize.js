import {
    onClickPageSize
} from './actions';
import pageSizeUi from './pageSizeView';
const renderPageSize = function() {
    this.pageSizeWrapper.innerHTML = this.options.pageSizeContainerTemp.bind(this)();
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