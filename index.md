---
layout: default
title: Introduction
nav_order: 1
description: "Unbxd JS Library documentation"
permalink: /
---

# Unbxd JS SDK Documentation
{: .fs-9 }

A JavaScript library for building performant and quick search experiences with Unbxd.
{: .fs-6 .fw-300 }

[Get started now](/search-JS-library/docs_new/gettingStarted){: .btn .btn-primary .fs-5 .mb-4 .mb-md-0 .mr-2 }
[View it on GitHub](https://github.com/unbxd/search-JS-library/){: .btn .fs-5 .mb-4 .mb-md-0 }

---

{: .note-title }
> This document is ONLY for the customers using the new console.Please refer to [this documentation here](https://unbxd.com/docs/site-search/integration-documentation/jssdk-documentation/) for the older version. Since we are gradually migrating all our customers toward our new upgraded console, we would slowly **deprecate** the older version.

# Introduction

The 'Search-JS-library' is a software development kit (SDK) provided by Unbxd, that allows e-commerce websites to easily integrate Unbxd's search and product discovery functionality. The SDK is built on Vanilla JavaScript and provides an easy-to-use JavaScript API that can be used to configure, initiate and customize search requests.

The SDK can be used to configure the search engine, set the API and Site key, initiate the search, retrieve the autocomplete suggestions, track various search and product events, and more.

This SDK does not have any dependencies on any other JavaScript frameworks or libraries, which makes it lightweight and easy to integrate into an e-commerce website. It can be easily added to the website by including a script tag on the page where it is needed, and it can be customized and extended using JavaScript methods and callbacks.

Additionally, SDK provides several functionalities like, but not limited to:
1. Autocomplete suggestions
2. Instant search results
3. Tracking search queries and clicks
4. Search analytics
5. Search-as-you-type
6. Spelling suggestions
7. Faceted search
8. Customizable search result templates.

These functionalities are designed to improve the user experience on the e-commerce website by providing a powerful search experience, increasing the relevance of search results and providing a more personalized shopping experience for users.

It is important to note that in order to use the Unbxd Vanilla JS SDK, the e-commerce website needs to have an account with Unbxd, and must have the necessary Site and API keys to properly configure the SDK and connect it to the Unbxd platform.

It's important to note that the nomenclature and the elements present on the e-commerce page may vary across different website, but the Unbxd Javascript Search SDK can be integrated in any e-commerce website.


# Prerequisite
Please complete the Self Serve FTU flow for sign up, site creation, feed upload, relevancy, etc.
[Self Serve Dashboard Documentation](https://unbxd.com/docs/site-search/integration-documentation/onboarding-flow/)


# Dos and Don'ts
These are some of the things to keep in mind while integrating with the Unbxd SDK:

1. Do make sure that you have the necessary Site and API keys to properly configure the SDK and connect it to the Unbxd platform
2. Do test the SDK on a development environment before deploying it to production.
3. Do ensure that the SDK is properly configured, and that the necessary data is being passed correctly
4. Don't share the Site and API keys publicly, as it could allow others to access your Unbxd account without your permission.
5. Don't include the SDK in your website without first understanding the implications on the data privacy, and take necessary steps to protect it
6. Don't use the SDK on a website that is not authorized by Unbxd
7. Do check the website analytics after integrating the SDK and make sure that the search and product events are tracked correctly, if not check the documentation again or reach out to Unbxd support.
8. If you are including our Search JS Library, [Autosuggest Library](https://unbxd.com/docs/site-search/integration-documentation/autosuggest-sdk/) & [Analytics Library](https://unbxd.com/docs/site-search/integration-documentation/browser-integration/) in your HTML page, the order of the files are important.  Include the Search JS Library, followed by Autosuggest Library and then the Analytics JS Library. This should be followed by the code to invoke the library.
9. Always ensure you are invoking the library (i.e. calling the **UnbxdSearch** constructor) after you have included it either via URL or via npm.
10. Include the CSS inside the <head> tag of your HTML *page* & the scripts at the end of the body tag. This will ensure that the page rendering is not blocked by the javascript files.
11. Please do not overwrite the `setUrl` method from the SDK. This method is used by the sdk to set the url based on user actions, and it evolves over time.

# Error Handling
Here are a few tips for handling errors while integrating the Unbxd JavaScript search SDK with your e-commerce website:

1. Make sure to include the correct version of the SDK on your website. You can find the latest version on the Unbxd website.
2. Check for any typos or errors in the API key or search configuration that you are using to initialize the SDK
3. Verify that the SDK is properly loaded and initialized on your website. You can use browser developer tools to check for any JavaScript errors.
4. Ensure that the search SDK is being initialized after the page has fully loaded.
5. If you are still experiencing errors, you can contact Unbxd's support team for additional assistance. They will be able to provide more specific guidance based on your specific implementation.
6. Always check the search SDK documentation for any recent updates and changes.
7. You can also use browser developer tools to debug the javascript and check the network and console tabs for any failed requests.
8. If you are still facing issues, you can also check for any browser compatibility issues.


# Raise Issues  
Facing some issues? look for solutions or create an issue [here](https://github.com/unbxd/search-JS-library/issues).


# Stay up to date
Look at the [changelog](https://github.com/unbxd/search-JS-library/blob/master/CHANGELOG.md) to see the latest version & history.


