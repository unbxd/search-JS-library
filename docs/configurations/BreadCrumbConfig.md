---
layout: default
title: Breadcrumbs
parent: Configurations
nav_order: 10
---

# Breadcrumbs
{: .no_toc }

# Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---
# Definition
In e-commerce, 'breadcrumbs' refer to a navigation element that allows users to see the hierarchical structure of the website and understand their location within the site. They are typically displayed as a series of links that indicate the path that a user has taken to reach the current page.

For example, if a user is on a product page for a specific item, the breadcrumb might show: Home > Clothing > T-shirts > Men's T-shirts > [Product Name]

This way, the user can easily understand where they are within the website and navigate to other sections of the site.

Breadcrumbs are usually displayed at the top of a page, above the main content area. They can be helpful for users that have landed on a page from a search engine, external link or other website, as it allows them to understand the context of the page and navigate to other related sections.

Additionally, it can help users that are not familiar with the website structure to easily navigate, and also to return to a specific location on the website, by clicking on the breadcrumb links.

Breadcrumbs can also be used to highlight the relevance of the product or category that user is currently browsing in the website.

# Behavior
To render the breadcrumb component, set the “breadcrumb” config object.

[![](https://unbxd.com/docs/wp-content/uploads/2020/05/breadcrumbs.png)](https://unbxd.com/docs/wp-content/uploads/2020/05/breadcrumbs.png)

# Configurations
The following options are available under the breadcrumb:

## enabled
{: .d-inline-block }

Boolean
{: .label }

Required
{: .label .label-red }

Turn this flag on to show the breadcrumbs (only if available).If flag is turned off no breadcrumnbs wou

### Default Value
{: .no_toc }
true


### Scenarios

{: .no_toc }
1.true  
2.false

---

## el
{: .d-inline-block }

Element
{: .label }
Required
{: .label .label-red }

Element in which to render the breadcrumbs.

### Default Value
{: .no_toc }
null


### Scenarios

#### Option 1

{: .no_toc }

```js 
    el: document.getElementById('breadcrumpContainer')
```
#### Option 2
{: .no_toc }

```js
	el: document.querySelector(".breadcrumbHeder"),
```

---

## template
{: .d-inline-block }

Function
{: .label }

Customize the look and feel of the breadcrumb component by defining this function that is expected to return a HTML string for the template. You will get the breadcrumbs list as parameter to this function

### Default Value
{: .no_toc }
```js 
function(breadcrumbs, breadcrumb){
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
```

### Scenarios
{: .no_toc }
```js
template: function (breadcrumbs, breadcrumb) {
        let ui = ``;
        const { selectorClass } = breadcrumb;
        breadcrumbs.forEach((item, id) => {
          const { level, filterField, value } = item;
          const css = `${selectorClass} UNX-bread-crumb-item`;
          if (id > 0) {
            ui += `<span class="UNX-slash"> > </span>`;
          }
          ui += [
            `<button data-parent="${filterField}" data-level="${level}" class="${css}" data-name="${value}" data-action = "clearCategoryFilter">`,
            `${decodeURIComponent(value)}</button>`
          ].join("");
        });
        return `<div class="bread-crumb-main">${ui}</div>`;
}
```

---

## selectorClass
{: .d-inline-block }

String
{: .label }

This class name will be added in addition to the 'UNX-bread-crumb-item' class to each breadcrumb item. You can choose to override the default class "UNX-bread-crumb", or add your own class name. 

### Default Value
{: .no_toc }
"UNX-bread-crumb"	


### Scenarios

{: .no_toc }
```js
selectorClass: "custom-bread-crumbClass"
``` -->
---

## tagName
{: .d-inline-block }

String
{: .label }

Html element for the N wrapper.

### Default Value
{: .no_toc }
```js
tagName: "div"
```


### Scenarios

{: .no_toc }
Any valid HTML tag can be used here to wrap the entire breadcrumb code

---

## htmlAttributes	
{: .d-inline-block }

Object
{: .label }

You can add different html attributes here which will get added

### Default Value
{: .no_toc }
```js
{class:”UNX-breadcrumbs-block”}
```


### Scenarios

Any valid HTML attributes like class, id, title, style etc... can be mentioned here


---



# Default Example

Sample code for the breadcrumbs widget

[![](../assets/breadcrumbs.png)](../assets/breadcrumbs.png)

```js
breadcrumb:{
  enabled:true,
  el: document.getElementById("breadcrumpContainer"),
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
            ui += `<span class="UNX-slash"> to </span>`;
        }
        ui += [`<button data-parent="${filterField}" data-level="${level}" class="${css}" data-name="${value}" data-action = "clearCategoryFilter">`,
        `${decodeURIComponent(value)}</button>`].join('')
    })
    return `<div class="bread-crumb-main">${ui}</div>`
  }
}
```

# Usecases
## Usecase 1
## Usecase 2
## Usecase 3
