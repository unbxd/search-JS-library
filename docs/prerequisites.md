---
layout: default
title: Installation
nav_order: 2
---

# Installation
{: .fs-9 .no_toc }

---

# Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

# Prerequisite
Please complete the Self Serve FTU flow for sign up, site creation, feed upload, relevancy, etc.
[Self Serve Dashboard Documentation](https://unbxd.com/docs/site-search/integration-documentation/onboarding-flow/)


# Installation

1. Include the vanilla js search library via the link:
    ```js
    <script  src="https://libraries.unbxdapi.com/search-sdk/v<<latest version>>/vanillaSearch.min.js"  type="text/javascript"></script>
    ```
    {: .important }
    > The **latest version** can be found via the npm repository:
    [search js library](https://www.npmjs.com/package/@unbxd-ui/vanilla-search-library) or here in [ChangeLog](/search-JS-library/docs/CHANGELOG.md)

2.  To get the default theme, include the library css in the link tag:
    ```js
    <link rel="stylesheet" type="text/css" href="https://libraries.unbxdapi.com/search-sdk/v<<latest version>>/vanillaSearch.min.css">
    ```


# Browser support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>iOS Safari |
| --------- | --------- | --------- | --------- | --------- |
| IE11<sup>*</sup>, Edge| last 2 versions| last 2 versions| last 2 versions| last 2 versions
