---
layout: default
title: Getting Started
nav_order: 2
has_children: true
permalink: docs_new/gettingStarted
---

# Getting Started
{: .fs-9 }

---

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## Introduction
This documentation has multiple ways of exploring/integrating with the Unbxd Search library.
1. [Quick Setup with Unbxd Template](/docs_new/gettingStarted/quickIntegration.md)
2. [Quick Setup on CodeSandbox](/docs_new/gettingStarted/quickSetupOnCodeSandbox.md)
3. [Integration with your site](/docs_new/gettingStarted/DetailedIntegration.md)



## More Information

For any issue that you face during integration or need updates on the changes, follow these tips, raise issues, or track log changes. 

## Important Note

*   If you are including our Search JS Library, [Autosuggest Library](https://unbxd.com/docs/site-search/integration-documentation/autosuggest-sdk/) & [Analytics Library](https://unbxd.com/docs/site-search/integration-documentation/browser-integration/) in your HTML page, the order of the files are important.  
    Include the Search JS Library, followed by Autosuggest Library and then the Analytics JS Library. This should be followed by the code to invoke the library.
*   Always ensure you are invoking the library (i.e. calling the **UnbxdSearch** constructor) after you have included it either via URL or via npm
*   Include the CSS inside the <head> tag of your HTML *page* & the scripts at the end of the body tag. This will ensure that the page rendering is not blocked by the javascript files.
*   Please do not overwrite the `setUrl` method from the SDK. This method is used by the sdk to set the url based on user actions, and it evolves over time.

## Raise Issues  

Facing some issues? look for solutions or create an issue [here](https://github.com/unbxd/search-JS-library/issues).


## Stay up to date
Look at the [changelog](https://github.com/unbxd/search-JS-library/blob/master/CHANGELOG.md) to see the latest version & history.

