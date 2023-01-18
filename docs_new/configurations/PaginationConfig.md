---
layout: default
title: Pagination
parent: Configurations
nav_order: 6
---

# Pagination
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Definition

In e-commerce, pagination refers to the process of dividing search results or product listings into multiple pages, which allows users to navigate through the pages of products. It is used to split large sets of products into smaller, more manageable chunks, which can improve the performance of the website and also user experience.

There are several different types of pagination that can be used in e-commerce, including:

**Fixed Pagination**: This type of pagination is the most common and allows users to navigate through the pages of products by clicking on page numbers or by clicking on the next and previous buttons. The page numbers and buttons are usually displayed at the bottom of the search results or product listings.

**Infinite Scroll**: This type of pagination loads the next set of products automatically as the user scrolls to the bottom of the page, eliminating the need for the user to click on next or page numbers. This type of pagination can be helpful for users that want to quickly browse through a large number of products without having to manually click through pages, but it could also lead to lower engagement and higher bounce rates if not implemented well.

**Click & Scroll**: This type is similar to the infinite scroll pagination, but it includes a "load more" button, so users can load the next set of products at their own discretion. This can be beneficial for users that may want to control the amount of information they see at once and also, it can be helpful for the website to limit the amount of data loaded at once to improve the performance.

It's important to note that the pagination should be consistent, clear, and easy to understand in order to improve the user experience. Also the right pagination method depends on the specific needs of the website and its target audience.



## Behavior

This feature will helps the users to navigate the products for any search/browse request. In many applications the UI for these sorted results are displayed to the user in "pages" containing a fixed number of matching results, and users don’t typically look at results past the first few pages worth of results.

Pagination helps to control the number of products displayed on the page and the type of pagination (infinite scroll, click to scroll, or fixed pagination) to display.


## Types of Pagination


### Fixed Pagination

This traditional type of pagination displays the set number of products on one page along with the previous and next buttons to navigate between the pages.

[![](https://unbxd.com/docs/wp-content/uploads/2020/05/traditional-pagination.png)](https://unbxd.com/docs/wp-content/uploads/2020/05/traditional-pagination.png)


### Click & Scroll
If you wish to have a button to load next results, you can choose this option

[![](https://unbxd.com/docs/wp-content/uploads/2020/05/click-and-scroll.png)](https://unbxd.com/docs/wp-content/uploads/2020/05/click-and-scroll.png)


### Infinite Scroll
If you wish to load new results by scrolling down, you can configure this option


## Configurations

You can configure the pagination feature by updating the required configs under the “pagination” config object. The following are the various options available under the “pagination” config object:

| OPTIONS | DATATYPE | DEFAULT VALUE | DESCRIPTION |
|----------|----------|----------|----------|
| enabled | Boolean | true | Turn this off if you do not want the pagination widget |
| type                      	| String   	| "CLICK_N_SCROLL" | Type of pagination: "FIXED_PAGINATION" or "INFINITE_SCROLL" or "CLICK_N_SCROLL" |
| el                        	| Element  	| null | Element in which to render the pagination component  |
| template                  	| Function 	| [default](src/modules/pagination/fixedPaginationView.js) | Customize the look and feel of the pagination by returning your custom HTML string from this function. This function gets 1 parameter: an object that has the pagination information |  
| pageClass | String | "UNX-page-items" | CSS classname for the pagination component |
| selectedPageClass | String | "UNX-selected-page-item" | CSS classname for selected page item |
| onPaginate                	| `function(paginationInfo){}` 	| NA | Callback function that gets called after a pagination action |
| pageLimit | Number | 6 | Number of pages to show upfront (when `type` is `FIXED_PAGINATION`) |
| infinteScrollTriggerEl | Element | window | Element on which to detect infinite scroll page boundary (when `type` is set to `INFINITE_SCROLL`) |
| heightDiffToTriggerNextPage | Number | 100 | Height of the page to consider to fetch the next page data (when `type` is set to `INFINITE_SCROLL`) |
| action                    	| String   	| "click" | Action on which pagination should trigger: "click" or "change" |
| tagName | String | "DIV" | html element for the pagination wrapper. by default it is div.  |
| htmlAttributes | Object | {class:"UNX-pagination-size-block"} | by default it contains classes for the wrapper. you can add more classes or any attributes |
| events | object | {} | by default it will be empty. you can add further javascript events by keys and function as values. context will be the current object. |

## Use Cases

### Sample Example

Sample “pagination” config

```js
pagination : {
       enabled:true,
       el: document.querySelector("#clickScrollContainer"),
       template: function (paginationData, pagination) { return ``},
       pageClass:"UNX-page-items",
       selectedPageClass:"UNX-selected-page-item",
       type:'CLICK_N_SCROLL', // INFINITE_SCROLL or CLICK_N_SCROLL or FIXED_PAGINATION
       infinteScrollTriggerEl:window, //if paginationType = INFINITE_SCROLL
       heightDiffToTriggerNextPage:100, //if paginationType = INFINITE_SCROLL,   
       onPaginate:function(paginationInfo){},
       action:'click',
       pageLimit:6
   }
```


### Fixed Pagination
```js
pagination : {
  enabled:true,
  el:null,
  template:function (paginationData, pagination) {
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
    } = pagination;
    const {
        UNX_pageNumber
    } = this.testIds;
    if(numberOfProducts <= productsLn) {
        return ``;
    }
    let nextBtn = `<button class="UNX-next-btn UNX-page-next ${pageClass}" data-page-action="next">></button>`;
    let prevBtn = `<button class="UNX-prev-btn UNX-page-prev ${pageClass}" data-page-action="prev"><</button>`;
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
        const tId = `${UNX_pageNumber}${i}`
        const pageClassSelected = (i === currentPage) ?selectedPageClass :'';
        pageNumbers += `<button data-test-id="${tId}" data-page-action="paginate" data-page-no="${(i-1)*rows}" class="UNX-page-button ${pageClass} ${pageClassSelected}">${i}</button>`
    }
    if(!isNext) {
        nextBtn = `<button disabled class="UNX-next-btn UNX-page-next">></button>`;
    }
    if(!isPrev) {
        prevBtn = `<button disabled class="UNX-prev-btn UNX-page-prev"><</button>`;
    }
    return [`<div class="UNX-pagination-block">`,
        prevBtn,
        `<div class="UNX-page-no-block">${pageNumbers}</div>`,
        nextBtn,
    `</div>`].join('');
  },
  pageClass:"UNX-page-items",
  selectedPageClass:"UNX-selected-page-item",
  type:'FIXED_PAGINATION', // INFINITE_SCROLL or CLICK_N_SCROLL or FIXED_PAGINATION
  onPaginate:function(paginationInfo){},
  action:'click',
  pageLimit:6
}
```

### Click and Scroll

```js
pagination: {
  el: document.getElementById("clickScrollContainer"),
  type:'CLICK_N_SCROLL',
  action:'click',
  template:function(pageData, pagination) {
    const {
        pageClass
    } = pagination;
    return `<div class="UNX-click-scroll"><button data-test-id="${this.testIds.UNX_loadMore}" class="UNX-click-n-scroll ${pageClass}">Load More</button></div>`
  }
}
```

### Infinite Scroll

```js
pagination: {
  type:'INFINITE_SCROLL',
  infiniteScrollTriggerEl: window, 
  heightDiffToTriggerNextPage: 100, 
}
```

