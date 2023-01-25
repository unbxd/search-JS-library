---
layout: default
title: Pagination
parent: Configurations
nav_order: 6
---

# Pagination
{: .no_toc }

# Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

# Definition

In e-commerce, pagination refers to the process of dividing search results or product listings into multiple pages, which allows users to navigate through the pages of products. It is used to split large sets of products into smaller, more manageable chunks, which can improve the performance of the website and also user experience.

There are several different types of pagination that can be used in e-commerce, including:

**Fixed Pagination**: This type of pagination is the most common and allows users to navigate through the pages of products by clicking on page numbers or by clicking on the next and previous buttons. The page numbers and buttons are usually displayed at the bottom of the search results or product listings.

**Infinite Scroll**: This type of pagination loads the next set of products automatically as the user scrolls to the bottom of the page, eliminating the need for the user to click on next or page numbers. This type of pagination can be helpful for users that want to quickly browse through a large number of products without having to manually click through pages, but it could also lead to lower engagement and higher bounce rates if not implemented well.

**Click & Scroll**: This type is similar to the infinite scroll pagination, but it includes a "load more" button, so users can load the next set of products at their own discretion. This can be beneficial for users that may want to control the amount of information they see at once and also, it can be helpful for the website to limit the amount of data loaded at once to improve the performance.

It's important to note that the pagination should be consistent, clear, and easy to understand in order to improve the user experience. Also the right pagination method depends on the specific needs of the website and its target audience.



# Behavior

This feature will helps the users to navigate the products for any search/browse request. In many applications the UI for these sorted results are displayed to the user in "pages" containing a fixed number of matching results, and users don’t typically look at results past the first few pages worth of results.

Pagination helps to control the number of products displayed on the page and the type of pagination (infinite scroll, click to scroll, or fixed pagination) to display.


# Pros and Cons 
The choice of pagination method depends on the specific needs of the website and its target audience. However, here are the advantages and disadvantages of different pagination methods.

## Fixed Pagination

****Advantages:****
1. Simple and easy to use
2. Allows users to easily navigate through the pages of products
3. Provides a clear indication of the current page and total number of pages
4. Allows users to go directly to a specific page
   
**Disadvantages:**
1. Users have to manually click through the pages, which can be time-consuming for large product sets
2. May not be suitable for websites with a large number of products
3. Can cause a high bounce rate if users have to navigate too many pages to find what they're looking for

## Infinite Scroll Pagination
**Advantages:**
1. Allows users to quickly browse through a large number of products without having to manually click through pages
2. Can improve the user experience by reducing the number of clicks needed to view all products
3. Can be useful for websites with a large number of products

**Disadvantages:**
1. May not be suitable for users with slow internet connections
2. Some users may find it difficult to track their position within the product set, may lead to lower engagement and higher bounce rate if not implemented well
3. May be difficult for users to find a specific product


## Click & Scroll pagination 
   
**Advantages:**
1. Allows users to control the amount of information they see at once
2. Can be helpful for the website to limit the amount of data loaded at once to improve the performance
3. Can be useful for websites with a large number of products

**Disadvantages:**
1. Users have to manually click through pages
2. May not be suitable for users with slow internet connections
3. May be difficult for users to find a specific product


# Configurations

You can configure the pagination feature by updating the required configs under the “pagination” config object. The following are the various options available under the “pagination” config object:


## enabled
{: .d-inline-block }

Boolean
{: .label }

Required
{: .label .label-red}

"Enabled" is a flag or switch that allows developers to turn on or off a specific feature in an e-commerce website. In this case, the pagination feature will be active and the preferred pagination type will be displayed on the website when the "enabled" flag is turned ON. And, the pagination feature will be disabled when the "enabled" flag is turned OFF.

### Default Value
{: .no_toc }

```js
enabled: false
```

### Scenarios
{: .no_toc }
1. true - selected pagination will be displayed on the website 
2. false - the pagination feature will be disabled


---

## type
{: .d-inline-block }

String
{: .label }

There are 3 types of pagination that can be used in e-commerce:

Page Numbers: In this type of pagination, a set of numbered pages are provided at the bottom of the page, allowing the user to navigate to specific pages. This method is best for desktop devices as it allows for easy navigation through a large number of products. Pass `type: “FIXED_PAGINATION”` to use this tpe of pagination.

Infinite Scrolling: In this type of pagination, new items are automatically loaded as the user scrolls to the bottom of the page, allowing the user to seamlessly scroll through all the products. This method is best for mobile devices as it allows for a continuous browsing experience. Pass `type: “INFINITE_SCROLL”` to use this tpe of pagination.

Load More Button: In this type of pagination, a “Load More” button is provided at the bottom of the page, which when clicked, loads additional products. This method is easy to implement and can be used for both desktop and mobile devices. Pass `type: “CLICK_N_SCROLL”` to use this tpe of pagination.


### Default Value
{: .no_toc }
```js
type: “CLICK_N_SCROLL”
```

### Scenarios
{: .no_toc }

The choice of pagination method depends on the specific needs of the website and its target audience. A fixed pagination with next and previous buttons and numbers is a suitable option for most e-commerce websites. Infinite scroll pagination can work well for mobile devices and for websites with a large number of products and a high volume of traffic. A click and scroll with load more button can be a good option for websites that want to limit the amount of data loaded at once. It’s also important to keep the user experience in mind, as pagination should be intuitive and easy to use for the user.

---

## el
{: .d-inline-block }

Element
{: .label }

Element in which to render the pagination component.

"el" in pagination is an HTML element that is designated to display pagination component. This allows developers to control the placement of the pagination on the webpage and to ensure that they are displayed in a prominent and visible location. The "el" can be set by providing the id or class of the element in the code.

### Default Value
{: .no_toc }

```js
el: null
```

### Scenarios
{: .no_toc }
There are several HTML selectors that can be used to locate the banner element in an e-commerce page. For ex: getElementById, getElementsByClassName, getElementsByTagName, querySelector, querySelectorAll, getElementsByName, etc.

---

## template
{: .d-inline-block }

Function
{: .label }

Customize the look and feel of the pagination by returning your custom HTML string from this function. This function gets 1 parameter: an object that has the pagination information.

This function receives two params:
1. `paginationData` - the list of banners to be displayed
2. `pagination` - the banner configurations

**Expected return value**: a string of HTML that will be used to render the banners on the webpage

### Default Value
{: .no_toc }
```js
template: function (paginationData, pagination) {
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
};

```

### Scenarios
{: .no_toc }
For additional information on custom scenarios, please refer to the [use cases section](#usecases) located below.

---

## pageClass
{: .d-inline-block }

String
{: .label }

CSS class name for the pagination component.

### Default Value
{: .no_toc }
```js
pageClass: “UNX-page-items”
```
### Scenarios
{: .no_toc }

---

## selectedPageClass
{: .d-inline-block }

String
{: .label }

CSS class name for selected page item.

### Default Value
{: .no_toc }
```js
selectedPageClass: “UNX-selected-page-item”
```

### Scenarios
{: .no_toc }

---

## onPaginate
{: .d-inline-block }

Function
{: .label }

`onPaginate` is a callback function that is triggered when the user makes changes to the pagination of a webpage.

This function receives below params:

1. `numberOfProducts`: number of products
2. `start` - the starting index of products, a number
3. `productsLn` - number of products
4. `rows` - the current page size, a number
5. `noOfPages` - total number of pages
6. `currentPage` - current page number
7. `isNext` - does next page exist, a boolean
8. `isPrev` - does previous page exist, a boolean

### Default Value
{: .no_toc }
```js
onPaginate: function(numberOfProducts, start, productsLn, rows, noOfPages, currentPage, isNext, isPrev) {
    // custom code here
}
```

### Scenarios
{: .no_toc }
It is typically used to notify the developer that the pagination has been updated and to take appropriate action, such as updating the displayed data or making an API call to retrieve new data for the current page.

---

## pageLimit
{: .d-inline-block }

Number
{: .label }


`pageLimit` is a parameter that is used when the `type` is set to `FIXED_PAGINATION`. It specifies the number of pages that are to be shown upfront.

### Default Value
{: .no_toc }

```js
pageLimit: 6
```

### Scenarios
{: .no_toc }
Any positive integer can be passed here.

---

## infinteScrollTriggerEl
{: .d-inline-block }

Element
{: .label }

An infinite scroll trigger element, or `infiniteScrollTriggerEl`, is an HTML element that is used to detect when a user has reached the boundary of a page when using infinite scrolling. This allows for a seamless browsing experience where new content is loaded automatically as the user scrolls, rather than requiring them to manually navigate to a new page. The `type` must be set to `INFINITE_SCROLL` for the trigger to work.


### Default Value
{: .no_toc }

```js
infinteScrollTriggerEl: window
```

### Scenarios
{: .no_toc }
Any valid HTML selector can be used to select the trigger

---

## heightDiffToTriggerNextPage
{: .d-inline-block }

Number
{: .label }

`heightDiffToTriggerNextPage` is a parameter that is used when the type is set to INFINITE_SCROLL. It specifies the distance from the bottom of the page (measured in pixels) that needs to be reached before the next page of content is loaded.

For example, if `heightDiffToTriggerNextPage` is set to 100, this means that when the user scrolls to within 100 pixels of the bottom of the page, the next page of content will be loaded. This parameter allows for control over when the next page is loaded and can be adjusted depending on the desired user experience and the amount of content that is being loaded.



### Default Value
{: .no_toc }

```js
heightDiffToTriggerNextPage: 100
```

### Scenarios
{: .no_toc }
Any positive integer can be passed to `heightDiffToTriggerNextPage`

---

## action
{: .d-inline-block }

String
{: .label }

Action on which pagination should trigger: “click” or “change”.

### Default Value
{: .no_toc }

```js
action: 'click'	
```

### Scenarios
{: .no_toc }

---


## tagName
{: .d-inline-block }

String
{: .label }

"tagName" refers to the name of an HTML tag used to wrap or structure the content (pagination) on a webpage.

### Default Value
{: .no_toc }

```js
tagName: 'div'
```

### Scenarios
{: .no_toc }
Any valid html tag such as div, span, p, h1, h2, etc in which you like the banner code to be wrapped in.

---

## htmlAttributes
{: .d-inline-block }

Object
{: .label }

"htmlAttributes" refers to a set of key-value pairs that provide additional information or properties for an HTML element. By default it contains classes for the wrapper. You can add more classes or any valid attributes.

### Default Value
{: .no_toc }
```js
htmlAttributes: { class:"UNX-banner-block" }
```

### Scenarios
{: .no_toc }
Any valid html attribute can be passed as `key : value` pairs inside an object.

--- 


# Default Example

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

# UseCases
## Fixed Pagination
[![](https://unbxd.com/docs/wp-content/uploads/2020/05/traditional-pagination.png)](https://unbxd.com/docs/wp-content/uploads/2020/05/traditional-pagination.png)
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

## Click and Scroll

[![](https://unbxd.com/docs/wp-content/uploads/2020/05/click-and-scroll.png)](https://unbxd.com/docs/wp-content/uploads/2020/05/click-and-scroll.png)

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

## Infinite Scroll

```js
pagination: {
  type:'INFINITE_SCROLL',
  infiniteScrollTriggerEl: window, 
  heightDiffToTriggerNextPage: 100, 
}
```

