---
layout: default
title: Page Size
parent: Configurations
nav_order: 7
---

# Page Size
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Definition
In e-commerce, "page size" refers to the number of products that are displayed on a single page of search results or product listings. It allows users to control how many items they see at a time, by giving them the option to choose from different page sizes such as 10, 20, 50 or 100 items per page.

The purpose of this feature is to help users quickly find and view the products they are interested in, without having to scroll through an excessive number of items. It can also improve the overall user experience by making it easier to scan and compare products. Additionally, for some e-commerce website, the page size concept can help to improve site performance and loading time.

Some e-commerce websites also provide pagination options so that users can navigate through the pages of search results or product listings by clicking on page numbers or next/previous buttons.

## Behavior
Page Size widget allows you to configure the number of products shown on each page. The value should be greater than ZERO. It is suggested that the value to be multiple of number of columns (ex. if gridCount is 3 then 15 or 18 or 21).

[![](https://unbxd.com/docs/wp-content/uploads/2020/05/page-size-new.png)](https://unbxd.com/docs/wp-content/uploads/2020/05/page-size-new.png)  



## Configurations
To render the Page Size widget, you need to configure the “pageSize” config object.

The following are the various options available under the object: 

### enabled
{: .d-inline-block }

Boolean
{: .label }

Turn this off if you do not want the page size component.

#### Default Value
{: .no_toc }
true

#### Usecases
{: .no_toc }
true, false
### el
{: .d-inline-block }

Element	
{: .label }

Element in which to render the page size element

#### Default Value
{: .no_toc }
null

#### Usecases
{: .no_toc }


### pageSize
{: .d-inline-block }

Number
{: .label }

Number of results to be shown per page.

#### Default Value
{: .no_toc }
12

#### Usecases
{: .no_toc }

### options
{: .d-inline-block }

Array
{: .label }

Array of desired page sizes to be rendered. It is suggested that the value be a multiple of number of columns (ex. if 3 columns then 15 or 18 or 21).

#### Default Value
{: .no_toc }
[8, 12, 16, 20, 24]

#### Usecases
{: .no_toc }

### pageSizeClass
{: .d-inline-block }

String
{: .label }

Additional CSS class name to be added to the page size element.

#### Default Value
{: .no_toc }
“UNX-pagesize”

#### Usecases
{: .no_toc }

### selectedPageSizeClass
{: .d-inline-block }

String
{: .label }

Additional CSS class name to be added to the selected page size option.

#### Default Value
{: .no_toc }
“UNX-selected-pagesize”

#### Usecases
{: .no_toc }

### action
{: .d-inline-block }

String
{: .label }

Action on which page size change should trigger: “click” or “change”.

#### Default Value
{: .no_toc }
“change”

#### Usecases
{: .no_toc }

### template
{: .d-inline-block }

Function
{: .label }

Customize the look and feel of the page size component by defining this function that is expected to return a HTML string for the template. This function gets 2 parameters: the selected page size and the page size config (i.e. this complete object).

#### Default Value
{: .no_toc }
```js
function(selected, pagesize) {
    const {
        UNX_pagesize
    } = this.testIds;
    let ui = `<label class="UNX-hidden" for="unxPageSize">Sort By</label><select id="unxPageSize" name="unxPageSize" class="UNX-select-pagesize ${pagesize.pageSizeClass}">`;
    pagesize.options.forEach((opt,i)=>{
        const tId = `data-test-id="${UNX_pagesize}${i+1}"`;
        if(selected == opt) {
            ui+=`<option selected ${tId} class="${pagesize.selectedPageSizeClass}" id="${opt}">${opt}</option>`;
        } else{
            ui+=`<option ${tId} id="${opt}">${opt}</option>`;
        }
        
    });
    ui+= `</select>`
    return `<div class="UNX-pagesize-block">${ui}</div>`;
}
```

#### Usecases
{: .no_toc }
### tagName
{: .d-inline-block }

String
{: .label }

html element for the page size wrapper. by default it is div.

#### Default Value
{: .no_toc }
“DIV”	

#### Usecases
{: .no_toc }

### htmlAttributes
{: .d-inline-block }

Object
{: .label }

by default it contains classes for the wrapper. you can add more classes or any attributes.

#### Default Value
{: .no_toc }
```js
{class:”UNX-selected-pagesize”}
```

#### Usecases
{: .no_toc }

### events
{: .d-inline-block }

object
{: .label }

by default it will be empty. you can add further javascript events by keys and function as values. context will be the current object.

#### Default Value
{: .no_toc }
{}	

#### Usecases
{: .no_toc }
## Examples

### Default Example
Sample “pageSize” config
```js
pageSize: {
  enabled:true,
       pageSize:12,
       options:[8,12,16,20,24],
       pageSizeClass:"UNX-pagesize",
       selectedPageSizeClass:"UNX-selected-pagesize",
       action:'change',
       el:null,
       template:function(selected, pagesize) {
        const {
            UNX_pagesize
        } = this.testIds;
        let ui = `<select  class="UNX-select-pagesize ${pagesize.pageSizeClass}">`;
        pagesize.options.forEach((opt,i)=>{
            const tId = `data-test-id="${UNX_pagesize}${i+1}"`;
            if(selected == opt) {
                ui+=`<option selected ${tId} class="${pagesize.selectedPageSizeClass}" id="${opt}">${opt}</option>`;
            } else{
                ui+=`<option ${tId} id="${opt}">${opt}</option>`;
            }

        });
        ui+= `</select>`
        return `<div class="UNX-pagesize-block">${ui}</div>`;
    },
   }
```