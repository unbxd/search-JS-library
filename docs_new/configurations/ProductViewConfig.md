---
layout: default
title: Product View
parent: Configurations
nav_order: 9
---

# Product View
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Definition

In an e-commerce page, the list view and grid view are two different ways of displaying products to users.

List view typically displays products in a vertical, scrolling list format, with each product represented by an individual item. Each item in the list typically includes a product image, name, price, and a brief description. The items are usually aligned vertically and take up the entire width of the screen, which allows for a lot of information to be visible at once, and can be helpful for users that want to compare multiple products quickly.

Grid view, on the other hand, displays products in a grid format with multiple products displayed in rows and columns. Each product is represented by a thumbnail image and can include the name, price, and a brief description. Grid view allows for a more compact display of products and is useful for situations where there are many products to be displayed on a single page. It's usually preferred when the user wants to get an overview of the products quickly.

Both the grid and list view have their own advantages and disadvantages, and it depends on the e-commerce website which view is used as default or an option for the users to switch between them. Some websites use grid view as the default, while others use list view. Some websites provide an option for the users to switch between views so they can choose which format they prefer.

## Behavior

You can configure the way in which the products have to be displayed (List or Grid) with the Product Views widget.

[![](https://unbxd.com/docs/wp-content/uploads/2020/05/page-view-new.png)](https://unbxd.com/docs/wp-content/uploads/2020/05/page-view-new.png)

## Configurations

Update the options under the “productView” config object to configure the product view feature.  

| OPTIONS | DATATYPE | DEFAULT VALUE | DESCRIPTION |
|----------|----------|----------|----------|
| enabled | Boolean | true | Turn this off if you do not want the product view component |
| el                        	| Element  	| null | Element in which to render the product views component |
| template                      | Function  | [default](src/modules/productViewType/index.js) | Customize the look and feel of the product views component by using this function. This function gets 2 parameters: the selected view type and the product views config (i.e. this complete object) |
| defaultViewType                 	| String   	| "GRID" | Product view types to be displayed by default: "LIST" or 'GRID" |
| action                    	| String   	| "click" | Action on which product view change should be triggerd: "click" or "change" |
| viewTypeClass             	| String   	| "UNX-product-view" | Additonal CSS class name to be added to the product view type elements |
| selectedViewTypeClass     	| String   	| "UNX-selected-product-view" | Additional CSS class name to be added to the selected view type element |
| tagName | String | "DIV" | html element for the product view type wrapper. by default it is div.  |
| htmlAttributes | Object | {class:"product-view-container"} | by default it contains classes for the wrapper. you can add more classes or any attributes |
| events | object | {} | by default it will be empty. you can add further javascript events by keys and function as values. context will be the current object. |

## Examples

### Default Example
Sample “productView” config

```js
productView : {
  enabled:true,
       el:null,
       action: “click”, // CLICK or CHANGE
       viewTypeClass: “UNX-product-view”,
       selectedViewTypeClass: “UNX-selected-product-view”,
       viewTypes: “GRID”,
       template:function(selectedViewType, productViewType) {
        const isDisabled = (this.getSearchResults())?false:true;
        const {
            selectedViewTypeClass,
            viewTypeClass
        } = productViewType;
        const {
            UNX_gridBtn,
            UNX_listBtn
        } = this.testIds;
        let listBtnCss =`UNX-list-btn ${viewTypeClass}`;
        let gridBtnCss = `UNX-grid-btn ${viewTypeClass}`;
        const gTAttr = `data-test-id=${UNX_gridBtn}`;
        const lTAttr = `data-test-id=${UNX_listBtn}`;
        if(selectedViewType === 'LIST' ) {
            listBtnCss += ` ${selectedViewTypeClass}`
        }
        if(selectedViewType === 'GRID' ) {
            gridBtnCss += ` ${selectedViewTypeClass}`
        }
        let listBtn = `<button id="listBtn" class="${listBtnCss}" ${lTAttr} data-view-action="LIST" >List</button>`;
        let gridBtn = `<button ${gTAttr} id="gridBtn" class="${gridBtnCss}" data-view-action="GRID" >Grid</button>`;
        if(isDisabled) {
            listBtn = `<button ${lTAttr} id="listBtn" disabled class="${listBtnCss} disabled-btn" data-view-action="LIST" >List</button>`;
            gridBtn = `<button ${gTAttr} id="gridBtn" disabled class="${gridBtnCss}  disabled-btn"data-view-action="GRID" >Grid</button>`;
        }
        return `<div class='product-view-container'>${listBtn} ${gridBtn} </div>`

    },
   }
```