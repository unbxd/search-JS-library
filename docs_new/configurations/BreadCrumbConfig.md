---
layout: default
title: Breadcrumbs
parent: Configurations
nav_order: 10
---

# Breadcrumbs
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---
## Definition
In e-commerce, 'breadcrumbs' refer to a navigation element that allows users to see the hierarchical structure of the website and understand their location within the site. They are typically displayed as a series of links that indicate the path that a user has taken to reach the current page.

For example, if a user is on a product page for a specific item, the breadcrumb might show: Home > Clothing > T-shirts > Men's T-shirts > [Product Name]

This way, the user can easily understand where they are within the website and navigate to other sections of the site.

Breadcrumbs are usually displayed at the top of a page, above the main content area. They can be helpful for users that have landed on a page from a search engine, external link or other website, as it allows them to understand the context of the page and navigate to other related sections.

Additionally, it can help users that are not familiar with the website structure to easily navigate, and also to return to a specific location on the website, by clicking on the breadcrumb links.

Breadcrumbs can also be used to highlight the relevance of the product or category that user is currently browsing in the website.

## Behavior
To render the breadcrumb component, set the “breadcrumb” config object.

[![](https://unbxd.com/docs/wp-content/uploads/2020/05/breadcrumbs.png)](https://unbxd.com/docs/wp-content/uploads/2020/05/breadcrumbs.png)

## Configurations
The following options are available under the breadcrumb:


| OPTIONS | DATATYPE | DEFAULT VALUE | DESCRIPTION |
|----------|----------|----------|----------|
| enabled                   	| Boolean  	| true | Turn this flag on if you want to show breadcrumbs (if it is available) on your page |
| el                        	| Element  	| null | Element in which to render the breadcrumbs |
| template                  	| Function 	| [default](src/modules/breadcrumbs/breadcrumbsView.js) | Customize the look and feel of the breadcrumb component by defining this function that is expected to return a HTML string for the template. You will get the breadcrumbs list as parameter to this function |
| selectorClass             	| String   	| "bread-crumb" | Additional CSS class name for each breadcrumb item |
| tagName | String | "DIV" | html element for the breadcrumb wrapper. by default it is div.  |
| htmlAttributes | Object | {class:"UNX-breadcrumbs-block"} | by default it contains classes for the wrapper. you can add more classes or any attributes |
| events | object | {} | by default it will be empty. you can add further javascript events by keys and function as values. context will be the current object. |

## Use Cases

### Sample Example

Sample code for the breadcrumbs widget
```js
breadcrumb:{
  enabled:true,
  el:null,
  selectorClass:"UNX-bread-crumb",
  template:function(breadcrumbs, breadcrumb){
    let ui = ``;
    const {
        selectorClass
    } = breadcrumb;
    breadcrumbs.forEach((item ,id )=> {
        const {
            level,
            filterField,
            value
        } = item;
        const css = `${selectorClass} UNX-bread-crumb-item`;
        if(id > 0) {
            ui += `<span class="UNX-slash"> / </span>`;
        }
        ui += [`<button data-parent="${filterField}" data-level="${level}" class="${css}" data-name="${value}" data-action = "clearCategoryFilter">`,
        `${decodeURIComponent(value)}</button>`].join('')
    })
    return `<div class="bread-crumb-main">${ui}</div>`
  }
}
```