---
layout: default
title: Banners
parent: Configurations
nav_order: 12
---

# Banners
{: .no_toc }

# Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

# Definition

In e-commerce, a banner is a graphical advertisement that is typically displayed on a web page or email. Banners are often used to promote a product or service, or to direct visitors to a specific landing page. They can come in a variety of sizes and formats, such as static images, animated gifs, or video. Banners are often used as part of online advertising campaigns to generate more traffic to a website and to increase conversions and sales.

# Behavior
Configure the banner display by setting the “banner” config object.

[![](https://unbxd.com/docs/wp-content/uploads/2020/05/Banner-sdk.png)](https://unbxd.com/docs/wp-content/uploads/2020/05/Banner-sdk.png)

# Configurations
The following options are available under the object:

## enabled
{: .d-inline-block }

Boolean
{: .label }

"Enabled" is a flag or switch that allows developers to turn on or off a specific feature in an e-commerce website. In this context, the "banner feature" refers to the ability to display banners or advertisements on the website.

When the "enabled" flag is turned on, the banner feature will be active and banners or advertisements will be displayed on the website. This can be used to promote new products, sales, or other special offers. When the "enabled" flag is turned off, the banner feature will be disabled and no banners or advertisements will be displayed on the website.

### Default Value
{: .no_toc }
false

### Scenarios
{: .no_toc }
1. true - banners or advertisements will be displayed on the website 
2. false - the banner feature will be disabled

---

## el
{: .d-inline-block }

Element
{: .label  }

Required
{: .label  }

"el" is an HTML element in an e-commerce page that is designated to display banners or advertisements. This allows developers to control the placement of the banners on the webpage and to ensure that they are displayed in a prominent and visible location. The "el element" can be set by providing the id or class of the element in the code.

### Default Value
{: .no_toc }
null

### Scenarios
{: .no_toc }
There are several HTML selectors that can be used to locate the banner element in an e-commerce page:

* getElementById: This method retrieves an element by its unique id attribute.
* getElementsByClassName: This method retrieves all elements with a given class name
* getElementsByTagName: This method retrieves all elements with a given tag name (e.g. div, span, etc.)
* querySelector: This method retrieves the first element that matches a given CSS selector
* querySelectorAll: This method retrieves all elements that match a given CSS selector
* getElementsByName: This method retrieves all elements with a given name attribute.
These selectors are part of the Document Object Model (DOM) API, which allows developers to access and manipulate the elements of an HTML or XML document. These selectors are commonly used in JavaScript to locate and manipulate specific elements on a webpage.

---

## template
{: .d-inline-block }

Function
{: .label }

The "template" function refers to the ability to change the appearance of the banner feature on the e-commerce website. It allows developers to control the appearance of the banners by providing custom HTML and CSS. The function receives the list of banners to be displayed, and the banner configurations as parameters and it needs to return a string of HTML that will be used to render the banners on the webpage.

This function passes two params:
1. `banners` - the list of banners to be displayed
2. `bannerOpts` - the banner configurations

**Expected return value**: a string of HTML that will be used to render the banners on the webpage


### Default Value
{: .no_toc }
```js
function (banners, bannerOpts) => {
    const {
        openNewTab
    } = bannerOpts
    const bannerUI = banners.map((item) => {
        const {
            imageUrl,
            landingUrl,
            bannerHtml
        } = item;
        if(bannerHtml) {
            return bannerHtml;
        }
        let hrefStr = ``;
        if(landingUrl) {
            hrefStr +=`href=${landingUrl}`
        }
        if(openNewTab) {
            hrefStr +=`  target="_blank"`;
        }

        return `<a class="UNX-banner-wrap" ${hrefStr} ><img style="max-width:100%" src="${imageUrl}"/></a>`
    }).join('');
    return `${bannerUI}`
}
```
### Scenarios
{: .no_toc }
This function can be overwritten to customize the banner.

---

## count
{: .d-inline-block }

Number
{: .label }

Indicates the number of banners to be shown

### Default Value
{: .no_toc }
1

### Scenarios
{: .no_toc }
true, false

---

## openNewTab
{: .d-inline-block }

Boolean
{: .label }

By default landing page url load in same tab, if you want to load in another tab configured it to true

### Default Value
{: .no_toc }
false

### Scenarios
{: .no_toc }
true, false

--- 

## tagName
{: .d-inline-block }

String
{: .label }

This is the html element for the banner wrapper. by default it is div.

### Default Value
{: .no_toc }
'div'

### Scenarios
{: .no_toc }
Any valid html tag in which you like the banner code to be wrapped in.

--- 

## htmlAttributes
{: .d-inline-block }

Object
{: .label }

By default it contains classes for the wrapper. you can add more classes or any attributes.

### Default Value
{: .no_toc }
```js
{class:"UNX-banner-block"}
```

### Scenarios
{: .no_toc }
Any valid html attribute can be passed as `key: value` pairs inside an object.

--- 

## events
{: .d-inline-block }

Object
{: .label }

By default it will be empty. You can add further javascript events by keys and function as values. context will be the current object.

### Default Value
{: .no_toc }
```js
{}
```

### Scenarios
{: .no_toc }
You can add further javascript events by keys and function as values. context will be the current object.

--- 


# Default Example

Sample banner configuration

```js
banner: {
    enabled:true,
    el:null,
    template:function(banners, bannerOpts){
      const bannerUI = banners.map((item) => {
          const {
              imageUrl
          } = item;
          return `<div><img style="max-width:100%" src="${imageUrl}"/></div>`
      }).join('');
      return `${bannerUI}`
    },
    count:1
}
```

# UseCases
## Usecase 1:
## Usecase 2:
## Usecase 3: