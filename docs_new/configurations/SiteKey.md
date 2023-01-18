---
layout: default
title: Authentication
parent: Configurations
nav_order: 1
---

# Authentication
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Definition
Unbxd is a provider of an e-commerce search and product discovery platform, and to integrate its SDK (Software Development Kit) on an e-commerce website, it requires the use of Site keys and API keys.

A Site key is a unique identifier that is used to identify the e-commerce website where the Unbxd SDK is being integrated. It is used to link the SDK to the specific website and ensure that the search and product discovery functionality is only being used on that particular website.

API keys, on the other hand, are used to authenticate requests made to the Unbxd platform and to ensure that the requests are coming from a trusted source. They allow the SDK to access and retrieve the necessary data, such as product information and search results, from the Unbxd platform.

Both the Site key and API keys are required to properly configure the SDK and allow it to function correctly on the e-commerce website. They provide a secure and reliable way to identify and authorize the SDK and the website, so that they can communicate with the Unbxd platform, and also to avoid unauthorized usage or abuse of the service.

It's important to keep the Site and API keys safe, as they grant access to the Unbxd service, and should be handled and stored securely, like any other sensitive information.

## Behavior

Once installed, you need to authenticate the Unbxd library using your Unbxd account keys (also known as Authentication Keys).

Whenever a customer signs up with Unbxd, they are issued one or more site keys and API keys depending on their use case. Some common scenarios:

1.  For a customer with one website and two environments (production and staging), 2 site keys (one for each environment) and  1 API key is issued
2.  For a customer with more than one website (multi website vendor), the site key would be issued for every website + environment combination. So there would be an “n” number (equal to the number of website’s) of API keys generated.

For multiple site keys, check if you have:

*   more than one environment
*   more than one website
*   different product set for staging and live, or
*   wish to track search performance and clicks separately for every microsite.

To get your Site Key and API Key in the console, please refer to the steps mentioned in the [Configure Site section](https://unbxd.com/docs/site-search/documentation/configure-site-profile/).


## Configurations
Pass the Site Key and API Key that you get from the console in the “siteKey” and “APIKey” configs.  
  
| OPTIONS | DATATYPE | DEFAULT VALUE | DESCRIPTION |
|----------|----------|----------|----------|
| siteKey | String | NA | This is the unique Site Key assigned by Unbxd to every site created in the console dashboard. Refer to [this section](https://unbxd.com/docs/site-search/documentation/configure-site-profile/) for steps on how to get the Site Key for your account. |
| apiKey | String | NA | This is the unique API Key assigned to every site created in the console dashboard.  Refer to [this section](https://unbxd.com/docs/site-search/documentation/configure-site-profile/) for steps on how to get the API Key for your account. |
