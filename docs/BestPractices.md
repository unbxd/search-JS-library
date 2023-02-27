---
layout: default
title: Best Practices
nav_order: 9
---

# Best Practices
{: .fs-9 .no_toc}

---

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}



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
