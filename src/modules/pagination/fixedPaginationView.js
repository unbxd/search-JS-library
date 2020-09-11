const paginationUI = function (paginationData) {
    if(!paginationData) {
        return ``;
    }
    const {
        currentPage,
        isNext,
        isPrev,
        noOfPages,
        productsLn,
        numberOfProducts,
        rows
    } = paginationData;
    const {
        pageClass,
        selectedPageClass,
        pageLimit
    } = this.options.pagination;
    if(numberOfProducts <= productsLn) {
        return ``;
    }
    let nextBtn = `<button class="next-btn UNX-page-next ${pageClass}" data-page-action="next">></button>`;
    let prevBtn = `<button class="prev-btn UNX-page-prev ${pageClass}" data-page-action="prev"><</button>`;
    let pageNumbers = ``;
    let pages = noOfPages < pageLimit ? noOfPages:pageLimit;
    let startPoint=1;
    let r = Math.ceil(pageLimit/2);
    let point = currentPage - r ;
    if(point > 0 ) {
        startPoint = point;
        pages = currentPage+r;
    }
    const ls = currentPage+r;
    if(ls >= noOfPages){
        const diff = ls-noOfPages;
        startPoint = startPoint-diff;
        if(startPoint<=0) {
            startPoint = 1
        }
        pages = noOfPages;
    }

    for(let i=startPoint;i<=pages;i++) {
        const pageClassSelected = (i === currentPage) ?selectedPageClass :'';
        pageNumbers += `<button data-page-action="paginate" data-page-no="${(i-1)*rows}" class="UNX-page-button ${pageClass} ${pageClassSelected}">${i}</button>`
    }
    if(!isNext) {
        nextBtn = `<button disabled class="next-btn UNX-page-next">></button>`;
    }
    if(!isPrev) {
        prevBtn = `<button disabled class="prev-btn UNX-page-prev"><</button>`;
    }
    return [`<div class="pagination-block">`,
        prevBtn, 
        `<div class="UNX-page-no-block">${pageNumbers}</div>`,
        nextBtn,
    `</div>`].join('');
};
export default paginationUI;