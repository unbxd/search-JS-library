---
layout: default
title: FAQs
nav_order: 7
---

# FAQs
{: .fs-9 .no_toc}

---

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

# General queries

## What types of search queries can the Unbxd SDK handle?
The Unbxd SDK can handle various types of search queries including keyword-based search, category-based search, and filter-based search. It also supports advanced search features such as spell correction, synonyms, and autocomplete.

## How does the SDK handle product discovery?
The Unbxd SDK uses machine learning algorithms to personalize the search results and product recommendations for each user. It also allows for the implementation of product facets and filters to aid in the discovery process.

## Can the SDK be integrated with other e-commerce platforms?
Yes, the Unbxd SDK can be easily integrated with various e-commerce platforms such as Magento, Shopify, and BigCommerce, as well as custom-built platforms. The SDK supports both server-side and client-side integration.

## How is the search index maintained and updated?
The Unbxd SDK automatically updates the search index with new and updated products, categories, and attributes. It also allows for manual updates to be made through the use of APIs. Additionally, it can also be configured to pull data on a schedule or via webhooks

## Does the SDK provide analytics and reporting?
Yes, the Unbxd SDK provides detailed analytics and reporting on search and product discovery performance. It allows you to track metrics such as search query volume, click-through rate, and conversion rate.


# Integration queries

## How do I get an API key and Site key to use with the SDK?
To use the Unbxd SDK, you will need an API key and a Site key. To obtain these keys, you will need to create an account with Unbxd and set up a new project. Once you have an account and a project set up, you can then generate the keys from the Unbxd dashboard. The process may vary depending on the Unbxd's current pricing plans and offerings, but here is the general idea of how it works:

Sign up for an account with Unbxd on their website, if you don't have an account yet.
Once logged in, navigate to the project dashboard, where you will be able to see a list of your current projects.
Select the project you want to add the SDK to or create a new one
Locate the API key and Site key on the project dashboard, where they will be displayed as a long string of characters.
Copy the keys and use them in your code to configure the SDK.
It's important to keep the keys safe, as they grant access to the Unbxd service and should be handled and stored securely like any other sensitive information. You should also make sure to keep your account login credentials safe and not share it with others.

It's also worth mentioning that some plans or usage of the service may change the way you get access to the keys, as well as the number of allowed keys and keys rotation strategies, check the documentation or reach out to Unbxd's support for more information about the specific way to access and use the keys.

## How do I configure the SDK on my website?
To install the Unbxd JavaScript search SDK on your website, you can follow these steps:

1. Sign up for an Unbxd account and create an application to get your API key.
2. Include the Unbxd JavaScript library on your website by adding the following code to the head of your HTML file:
```js
<script src="https://libraries.unbxdapi.com/search-sdk/v<latest_version_number>/vanillaSearch.min.js"></script>
```

3. Initialize the Unbxd object by adding the following code to your JavaScript file:
```js
var unbxd = new Unbxd.setSiteKey("YOUR_API_KEY").setSearchKey("YOUR_SEARCH_KEY");
```
Make sure to replace "YOUR_API_KEY" and "YOUR_SEARCH_KEY" with the actual keys from your Unbxd account.

4. Configure the search parameters and display the results on your website. You can refer to the detailed documentation for more information on how to do this.

5. Test your implementation by performing a search on your website and checking the results.

6. Once you've confirmed that everything is working correctly, you can integrate the SDK into your production environment.

Please note that this is a general guide, and the actual implementation may vary depending on the specific requirements of your website. It's always a good idea to refer to the detailed documentation presented in this website and contact the Unbxd support team for any assistance.

## How can I test the SDK before deploying to production?
You can create a sandbox or a test environment for developers to test the integration and functionality of the SDK before deploying it to a production environment. Sandbox environments usually have a separate api-key, site-key, index and configuration, and it's isolated from the production environment, so developers can test and experiment without affecting the live site.

---

# Pagination Queries
## What are the different types of pagination supported by Unbxd Search SDK?
There are several types of pagination that can be used in e-commerce:

**Infinite Scrolling**: In this type of pagination, new items are automatically loaded as the user scrolls to the bottom of the page, allowing the user to seamlessly scroll through all the products. This method is best for mobile devices as it allows for a continuous browsing experience.

**Load More Button**: In this type of pagination, a "Load More" button is provided at the bottom of the page, which when clicked, loads additional products. This method is easy to implement and can be used for both desktop and mobile devices.

**Page Numbers**: In this type of pagination, a set of numbered pages are provided at the bottom of the page, allowing the user to navigate to specific pages. This method is best for desktop devices as it allows for easy navigation through a large number of products.

## What is the best pagination method for my website?

The choice of pagination method depends on the specific needs of the website and its target audience. A fixed pagination with next and previous buttons and numbers is a suitable option for most e-commerce websites. Infinite scroll pagination can work well for mobile devices and for websites with a large number of products and a high volume of traffic. A click and scroll with load more button can be a good option for websites that want to limit the amount of data loaded at once. It's also important to keep the user experience in mind, as pagination should be intuitive and easy to use for the user.

## What are the advantages and disadvantages of Fixed Pagination 

Advantages:
1. Simple and easy to use
2. Allows users to easily navigate through the pages of products
3. Provides a clear indication of the current page and total number of pages
4. Allows users to go directly to a specific page
   
Disadvantages:
1. Users have to manually click through the pages, which can be time-consuming for large product sets
2. May not be suitable for websites with a large number of products
3. Can cause a high bounce rate if users have to navigate too many pages to find what they're looking for

## What are the advantages and disadvantages of Infinite Scroll Pagination
Advantages:
1. Allows users to quickly browse through a large number of products without having to manually click through pages
2. Can improve the user experience by reducing the number of clicks needed to view all products
3. Can be useful for websites with a large number of products

Disadvantages:
1. May not be suitable for users with slow internet connections
2. Some users may find it difficult to track their position within the product set, may lead to lower engagement and higher bounce rate if not implemented well
3. May be difficult for users to find a specific product


## What are the advantages and disadvantages of Click & Scroll pagination (with load more button)
   
Advantages:
1. Allows users to control the amount of information they see at once
2. Can be helpful for the website to limit the amount of data loaded at once to improve the performance
3. Can be useful for websites with a large number of products

Disadvantages:
1. Users have to manually click through pages
2. May not be suitable for users with slow internet connections
3. May be difficult for users to find a specific product

## Can I customize the appearance of the pagination controls?
Yes, the Unbxd Search SDK allows you to customize the appearance of the pagination controls to match the look and feel of your e-commerce website. You can customize the layout, design, and call-to-action of the pagination controls.

---

# Facet related queries
## How to enable and make use of the faceted search functionality provided by the SDK?

## What are facets in e-commerce and how do they work with the Unbxd Search SDK?
Facets are filters that allow users to narrow down their search results by specific attributes such as price, brand, color, etc. The Unbxd Search SDK allows for the implementation of facets on your e-commerce website, allowing users to easily filter the search results based on the attributes provided in the facets.

## How can I customize the facets that are displayed on my website?
The Unbxd Search SDK allows for full customization of the facets that are displayed on your website. You can configure the facets by selecting the attributes that you want to include, and also set the order in which they are displayed. Additionally, you can also configure the UI of the facets to match the look and feel of your website.

## Can I limit the number of facets that are displayed to the user?
Yes, the Unbxd Search SDK allows you to limit the number of facets that are displayed to the user. This can be done by setting the maximum number of facets to be displayed at a time and also by setting the minimum number of items required for a facet to be displayed.

## How does the Unbxd Search SDK handle multi-select facets?
The Unbxd Search SDK supports multi-select facets, which allow users to select multiple values for a given facet. This allows the user to further refine their search results.

## Can I track the performance of my facets?
Yes, the Unbxd Search SDK provides detailed analytics and reporting on the performance of your facets. You can track metrics such as the number of clicks on a facet, the number of search results returned after applying a facet, and conversion rate. This allows you to understand how your users are interacting with your facets and make any necessary adjustments to improve the user experience.

---
# Sorting related queries

## Can the Unbxd Search SDK be used to sort the search results by different criteria?
Yes, the Unbxd Search SDK allows you to sort the search results by different criteria such as relevance, price, and popularity. You can set the sorting criteria by calling the setSort method on the Unbxd object and passing in the sort field and order. For example, to sort the results by price in descending order, you can use the following code:
```js
unbxd.setSort("price", "desc");
```

### How I allow users to sort the search results on my website?
You can do this by creating a drop-down menu or a set of buttons on your website that allows the user to select the sorting criteria. 

## Can I set a default sorting criteria for the search results?
Yes, the Unbxd Search SDK allows you to set a default sorting criteria for the search results. You can do this by calling the `setSort` method on the Unbxd object before performing the search and passing in the default sorting criteria.

## How does the Unbxd Search SDK handle sorting when multiple sorting criteria are applied?
The Unbxd Search SDK allows you to set multiple sorting criteria and will apply them in the order they are set. For example, if you set the sorting criteria as “price” and “popularity”, it will first sort the results by price and then by popularity.

## Can I track the performance of the sorting functionality?
Yes, the Unbxd Search SDK provides detailed analytics and reporting on the performance of the sorting functionality. You can track metrics such as the number of clicks on a sorting option and the number of search results returned after applying a sorting criteria. This allows you to understand how your users are interacting with the sorting options and make any necessary adjustments to improve the user experience.

---

# Banners related queries

## Can the Unbxd Search SDK be used to display banners on my e-commerce website?
Yes, the Unbxd Search SDK allows you to display banners on your e-commerce website. You can use the SDK to target specific products, categories, or users and display personalized banners based on their search and browsing behavior.

## Can I use the SDK to personalize the banners?
Yes, the Unbxd Search SDK allows you to personalize the banners by passing a custom HTML in the `template` field.

---

# Spellcheck related queries

## Does the Unbxd Search SDK provide spell-checking functionality?
Yes, the Unbxd Search SDK provides spell-checking functionality which can help to correct spelling errors in the search queries made by users and return more accurate results.

## How does the spell-checking functionality work in the Unbxd?
Unbxd uses advanced algorithms to identify and correct spelling errors in the search queries made by users. It takes into account the context of the query and the specific terms used in the search and suggests alternate terms or corrected versions of the query.

## Can I customize the spell-checking functionality in the Unbxd Search SDK?
Yes, the Unbxd Search SDK allows you to customize the spell-checking functionality to match the specific requirements of your e-commerce website. You can adjust the settings for the spell-checking algorithm, such as the level of tolerance for spelling errors and the suggestions that are provided to the users.

---

# Other queries

## How to handle errors while making calls to the Unbxd search SDK?

## How to enable and make use of the autocomplete functionality provided by the SDK?

## How to enable and make use of the tracking functionality provided by the SDK?

## What is list view and grid view in product listing page?
List view typically displays products in a vertical, scrolling list format, with each product represented by an individual item. Each item in the list typically includes a product image, name, price, and a brief description. The items are usually aligned vertically and take up the entire width of the screen, which allows for a lot of information to be visible at once, and can be helpful for users that want to compare multiple products quickly.

Grid view, on the other hand, displays products in a grid format with multiple products displayed in rows and columns. Each product is represented by a thumbnail image and can include the name, price, and a brief description. Grid view allows for a more compact display of products and is useful for situations where there are many products to be displayed on a single page. It’s usually preferred when the user wants to get an overview of the products quickly.

Both the grid and list view have their own advantages and disadvantages, and it depends on the e-commerce website which view is used as default or an option for the users to switch between them. Some websites use grid view as the default, while others use list view. Some websites provide an option for the users to switch between views so they can choose which format they prefer.

