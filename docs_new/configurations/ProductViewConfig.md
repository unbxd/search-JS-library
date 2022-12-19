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

## Behavior

You can configure the way in which the products have to be displayed (List or Grid) with the Product Views widget.

[![](https://unbxd.com/docs/wp-content/uploads/2020/05/page-view-new.png)](https://unbxd.com/docs/wp-content/uploads/2020/05/page-view-new.png)

## Config

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

## Use Cases

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