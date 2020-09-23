import {
    onClickPageSize
} from './actions';
import pageSizeUi from './pageSizeView';
const renderPageSize = function() {
    const {
        pagesize
    } = this.options;
    let selected = pagesize.pageSize;
    const qParams  = this.getQueryParams();
    if(qParams) {
        selected = this.state.pageSize;
    }
    const results = this.getSearchResults();
    if(results && results.numberOfProducts === 0) {
        this.pageSizeWrapper.innerHTML = ``;
    } else {
        this.pageSizeWrapper.innerHTML = this.options.pagesize.template.bind(this)(selected, pagesize);
    }
    
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