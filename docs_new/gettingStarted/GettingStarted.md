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
Unbxd Vanilla JS SDK is a software development kit (SDK) provided by Unbxd, that allows e-commerce websites to easily integrate Unbxd's search and product discovery functionality. The SDK is built on Vanilla JavaScript and provides an easy-to-use JavaScript API that can be used to configure, initiate and customize search requests.

The SDK can be used to configure the search engine, set the API and Site key, initiate the search, retrieve the autocomplete suggestions, track various search and product events, and more.

This SDK does not have any dependencies on any other JavaScript frameworks or libraries, which makes it lightweight and easy to integrate into an e-commerce website. It can be easily added to the website by including a script tag on the page where it is needed, and it can be customized and extended using JavaScript methods and callbacks.

Additionally, SDK provides several functionalities like, but not limited to:
-Autocomplete suggestions
-Instant search results
-Tracking search queries and clicks
-Search analytics
-Search-as-you-type
-Spelling suggestions
-Faceted search
-Customizable search result templates.

These functionalities are designed to improve the user experience on the e-commerce website by providing a powerful search experience, increasing the relevance of search results and providing a more personalized shopping experience for users.

It is important to note that in order to use the Unbxd Vanilla JS SDK, the e-commerce website needs to have an account with Unbxd, and must have the necessary Site and API keys to properly configure the SDK and connect it to the Unbxd platform.

This documentation has multiple ways of exploring/integrating with the Unbxd Search library.
1. [Quick Setup with Unbxd Template](/docs_new/gettingStarted/quickIntegration.md)
2. [Quick Setup on CodeSandbox](/docs_new/gettingStarted/quickSetupOnCodeSandbox.md)
3. [Integration with your site](/docs_new/gettingStarted/DetailedIntegration.md)


For any issue that you face during integration or need updates on the changes, follow these tips, raise issues, or track log changes. 


## Important Note

*   If you are including our Search JS Library, [Autosuggest Library](https://unbxd.com/docs/site-search/integration-documentation/autosuggest-sdk/) & [Analytics Library](https://unbxd.com/docs/site-search/integration-documentation/browser-integration/) in your HTML page, the order of the files are important.  
    Include the Search JS Library, followed by Autosuggest Library and then the Analytics JS Library. This should be followed by the code to invoke the library.
*   Always ensure you are invoking the library (i.e. calling the **UnbxdSearch** constructor) after you have included it either via URL or via npm
*   Include the CSS inside the <head> tag of your HTML *page* & the scripts at the end of the body tag. This will ensure that the page rendering is not blocked by the javascript files.
*   Please do not overwrite the `setUrl` method from the SDK. This method is used by the sdk to set the url based on user actions, and it evolves over time.

## Dos and Don'ts
When it comes to the dos and don'ts, some of the things to keep in mind could be:

1. Do make sure that you have the necessary Site and API keys to properly configure the SDK and connect it to the Unbxd platform
2. Do test the SDK on a development environment before deploying it to production.
3. Do ensure that the SDK is properly configured, and that the necessary data is being passed correctly
4. Don't share the Site and API keys publicly, as it could allow others to access your Unbxd account without your permission.
5. Don't include the SDK in your website without first understanding the implications on the data privacy, and take necessary steps to protect it
6. Don't use the SDK on a website that is not authorized by Unbxd
7. Do check the website analytics after integrating the SDK and make sure that the search and product events are tracked correctly, if not check the documentation again or reach out to Unbxd support.

## Raise Issues  

Facing some issues? look for solutions or create an issue [here](https://github.com/unbxd/search-JS-library/issues).


## Stay up to date
Look at the [changelog](https://github.com/unbxd/search-JS-library/blob/master/CHANGELOG.md) to see the latest version & history.

