---
layout: default
title: Loader
parent: Configurations
nav_order: 16
---

# Loader
{: .no_toc }

# Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

# Definition
In e-commerce, a 'loader' is a visual element that is used to indicate to users that the website or application is currently loading or processing information. Loaders are commonly used in situations where a page is taking longer than expected to load or a process is taking longer than usual, such as when a user submits a form or initiates a search.

The loader is usually a simple animation, like a spinning wheel or a progress bar, that is displayed on the screen to let the user know that something is happening in the background. The loader will typically be displayed on the page until the process is complete, at which point it will be replaced with the relevant information or next page.

Loaders are useful in e-commerce websites as they can improve the user experience by providing users with visual feedback on the status of a task and help to reduce frustration if the load time is longer.

Additionally, loaders can be used to indicate to users that a server is currently processing their request, This can help to improve the trust on the website by making the users more aware of what is happening behind the scenes.

It is important to note that using loaders should be balanced with the performance of the website, as excessive use of loaders, or showing loaders for too long can negatively affect the user experience, making the website feel slow or unresponsive.

# Behavior

Configure page loader to be shown when fetching search API results by setting the “loader” config object. 

# Configurations

The following options are available under the object:  

## el
{: .d-inline-block }

Element
{: .label }

Element in which to render the loader component.

### Default Value
{: .no_toc }
null	

### Scenarios
{: .no_toc }

---
## template
{: .d-inline-block }

Function
{: .label }


Customize the look and feel of the loader component by using this function.

### Default Value
{: .no_toc }
```js
function(){
    return '<div class="UNX-loader">Loading search results....</div>'
}
```	

### Scenarios
{: .no_toc }

