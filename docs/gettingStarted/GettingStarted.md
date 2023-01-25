---
layout: default
title: Getting Started
nav_order: 3
has_children: true
permalink: docs/gettingStarted
---

# Getting Started
{: .fs-9 .no_toc }

---

# Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

# Introduction

Unbxd Javascript Search SDK is a software development kit that allows e-commerce websites to easily integrate with Unbxd’s search and product discovery platform. It provides an easy-to-use JavaScript API that can be used to configure, initiate, and customize search requests, including:

1. Setting the API and Site Key
2. Initating the search
3. Retrieving the autocomplete suggestions
4. Tracking various search and product events

To use Unbxd Javascript Search SDK it would typically be integrated on the e-commerce website, specifically on the search bar, the product listing and product detail pages, and other related areas, where search and product discovery functionality is required.

It's important to note that the nomenclature and the elements present on the e-commerce page may vary across different website, but the Unbxd Javascript Search SDK can be integrated in any e-commerce website.

Please checkout how you can [setup](/docs_new/gettingStarted/quickIntegration.md)
This documentation has multiple ways of exploring/integrating with the Unbxd Search library.
1. [Explore demo code](/docs/gettingStarted/exploredemocode.md)
2. [Integrate with a sample unbxd feed](/docs/gettingStarted/integratewithsampleunbxdfeed.md)
3. [Integrate with actual feed](/docs/gettingStarted/integratewithyoursitedetails.md)

For any issue that you face during integration or need updates on the changes, follow these tips, raise issues, or track log changes. 

# Understanding The Page

An e-commerce page typically includes a variety of different elements and components, each with its own specific nomenclature. These elements include, but are not limited to:

1. The header, which typically includes the logo, main navigation, and search bar.
2. The product listing, which is the area of the page where products are displayed.
3. The product details page, which is the page that is shown when a user clicks on a product from the product listing.
4. The cart, which is where users can view and manage the items they've added to their cart.
5. The checkout, which is where users can review their cart, enter shipping and payment information, and complete their purchase.

Before we delve into the next set of configs, let’s first understand the most common sections present in a search results page or category landing page.  
A search results page or a category landing page is made up of the following set of sections:

1.  Products list section
    1.  View type could be grid or list view
    2.  Sort by widget
    3.  Pagination widget with no. of products per page control
    4.  Pagination could be an infinite scroll or page number based
    5.  Number of results loaded on a page
2.  Facets section
3.  Spell check / search results message section
4.  Merchandising banners section  
      
Here is a graphical representation of the various sections on a search results page:

[![](https://unbxd.com/docs/wp-content/uploads/2020/05/graphical-rep-in-sdk.png)](https://unbxd.com/docs/wp-content/uploads/2020/05/graphical-rep-in-sdk.png)

In the following sections, we will discuss how to configure and render each of these features with the Unbxd Search JS Library.
