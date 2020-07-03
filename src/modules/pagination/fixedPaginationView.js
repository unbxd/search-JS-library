const paginationUI = function (paginationData) {
    const {
        currentPage,
        isNext,
        isPrev,
        noOfPages,
        productsLn
    } = paginationData;
    let nextBtn = `<button class="next-btn UNX-page-next" data-page-action="next">></button>`;
    let prevBtn = `<button class="prev-btn UNX-page-prev" data-page-action="prev"><</button>`;
    let pageNumbers = ``;
    for(let i=1;i<noOfPages;i++) {
        const pageClass = (i === currentPage) ?"UNX-selected-page" :'';
        pageNumbers += `<button data-page-action="paginate" data-page-no="${(i-1)*productsLn}" class="UNX-page-button ${pageClass}">${i}</button>`
    }
    if(!isNext) {
        nextBtn = `<button disabled class="next-btn UNX-page-next">></button>`;
    }
    if(!isPrev) {
        prevBtn = `<button disabled class="prev-btn UNX-page-prev"><</button>`;
    }
    return `<div class="pagination-block">
        ${prevBtn} 
        <div class="UNX-page-no-block">${pageNumbers}</div>
        ${nextBtn} 
    </div>`
};
export default paginationUI;