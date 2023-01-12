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


## How do I get an API key and Site key to use with the SDK?
To use the Unbxd SDK, you will need an API key and a Site key. To obtain these keys, you will need to create an account with Unbxd and set up a new project. Once you have an account and a project set up, you can then generate the keys from the Unbxd dashboard. The process may vary depending on the Unbxd's current pricing plans and offerings, but here is the general idea of how it works:

Sign up for an account with Unbxd on their website, if you don't have an account yet.
Once logged in, navigate to the project dashboard, where you will be able to see a list of your current projects.
Select the project you want to add the SDK to or create a new one
Locate the API key and Site key on the project dashboard, where they will be displayed as a long string of characters.
Copy the keys and use them in your code to configure the SDK.
It's important to keep the keys safe, as they grant access to the Unbxd service and should be handled and stored securely like any other sensitive information. You should also make sure to keep your account login credentials safe and not share it with others.

It's also worth mentioning that some plans or usage of the service may change the way you get access to the keys, as well as the number of allowed keys and keys rotation strategies, check the documentation or reach out to Unbxd's support for more information about the specific way to access and use the keys.



## What are the system requirements for using the SDK?

## How do I configure the SDK on my website?

## How can I test the SDK before deploying to production?

## How to handle errors while making calls to the Unbxd search SDK?

## How to enable and make use of the autocomplete functionality provided by the SDK?

## How to enable and make use of the tracking functionality provided by the SDK?

## How to enable and make use of the faceted search functionality provided by the SDK?

## What is the best pagination 

1. **Fixed Pagination with next and previous buttons and numbers:**
Advantages:
1. Simple and easy to use
2. Allows users to easily navigate through the pages of products
3. Provides a clear indication of the current page and total number of pages
4. Allows users to go directly to a specific page
   

Disadvantages:
1. Users have to manually click through the pages, which can be time-consuming for large product sets
2. May not be suitable for websites with a large number of products
3. Can cause a high bounce rate if users have to navigate too many pages to find what they're looking for

2. **Infinite Scroll Pagination:**
Advantages:
1. Allows users to quickly browse through a large number of products without having to manually click through pages
2. Can improve the user experience by reducing the number of clicks needed to view all products
3. Can be useful for websites with a large number of products


Disadvantages:
1. May not be suitable for users with slow internet connections
2. Some users may find it difficult to track their position within the product set, may lead to lower engagement and higher bounce rate if not implemented well
3. May be difficult for users to find a specific product


3. **Click and Scroll with load more button:**
   
Advantages:
1. Allows users to control the amount of information they see at once
2. Can be helpful for the website to limit the amount of data loaded at once to improve the performance
3. Can be useful for websites with a large number of products


Disadvantages:
1. Users have to manually click through pages
2. May not be suitable for users with slow internet connections
3. May be difficult for users to find a specific product

The choice of pagination method depends on the specific needs of the website and its target audience. A fixed pagination with next and previous buttons and numbers is a suitable option for most e-commerce websites. Infinite scroll pagination can work well for websites with a large number of products and a high volume of traffic. A click and scroll with load more button can be a good option for websites that want to limit the amount of data loaded at once.
