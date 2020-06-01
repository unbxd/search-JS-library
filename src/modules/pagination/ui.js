const paginationUI = function (paginationData) {
    const {
        noOfPages,
        currentPage,
        isNext,
        isPrev
    } = paginationData;
    let nextBtn = `<button class="next-btn" data-page-action="next">next</button>`;
    let prevBtn = `<button class="prev-btn" data-page-action="prev">prev</button>`;
    if(!isNext) {
        nextBtn = `<button disabled class="next-btn">next</button>`;
    }
    if(!isPrev) {
        prevBtn = `<button disabled class="prev-btn">prev</button>`;
    }
    return `<div class="pagination-block">
       ${currentPage} of ${noOfPages} ----  ${prevBtn} ${nextBtn} 
    </div>`
};
export {
    paginationUI
};