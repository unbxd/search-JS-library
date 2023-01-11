---
layout: default
title: Search Box
parent: Configurations
nav_order: 3
---

# Search Box
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Configuring the Search Input Box

The following two configurations are used by the library to bind keyboard and mouse events to the search input field and search button on your website.

| OPTIONS | DATATYPE | DEFAULT VALUE | DESCRIPTION |
|----------|----------|----------|----------|
| searchBoxEl | Element | null | Configure the search input element on which to listen to search query changes |
| searchButtonEl | Element | NA | Configure your search button here. Clicking on  this will load the results based the input value provided in "searchBoxEl

```js
<div class="UNX-input-wrapper">
<input id="unbxdInput" class="UNX-input" type="text"/>
<button id="searchBtn" class="fa fa-search"></button>
</div>
```

At the end of this step, you should have configured the “input” & “search button” as shown below:

```js
window.unbxdSearch = new UnbxdSearch({
  siteKey: "<your site key>",
  apiKey: "<your API key>",
  searchBoxEl: document.getElementById("unbxdInput"),
  searchButtonEl: document.getElementById("searchBtn"),
});
```
