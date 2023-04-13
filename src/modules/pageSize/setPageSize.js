import {
    onClickPageSize
} from './onClickPageSize';
import pageSizeUi from './pageSizeUi';
const renderPageSize = function() {
    try{
        const {
            pagesize = {}
        } = this.options;
        let selected = pagesize.pageSize;
        const qParams = this.getQueryParams() || {};
        if (qParams) {
            selected = this.state.pageSize;
        }
        const results = this.getSearchResults();
        if (results && results.numberOfProducts === 0) {
            this.pageSizeWrapper.innerHTML = ``;
        } else {
            this.pageSizeWrapper.innerHTML = this.options.pagesize.template.bind(this)(selected, pagesize);
        }
    }
    catch(err){
        this.options.onError("Pagesize",err)
        throw err;
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
