---
layout: default
title: Setup On Local
nav_order: 1
parent: Getting Started
---

# Quick Setup
{: .fs-9 }

---

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## Setup in local

1. Hit [demo playground url](https://codesandbox.io/s/vanilla-sandbox-demo-ezmi0v) in browser.
2. Click on Export to ZIP option.

    [![alt text for screen readers](../assets/zip.png)](ZIP from codesandbox)
3. Unzip the folder
4. Customize the config inside **src/js** as per the feed:</br>
    1. Change **siteKey** and **apiKey**.
    2. Modify **attributesMap** inside **products** object.
        ```js
        attributesMap: {
        "unxTitle": "<<title attribute>>",
        "unxImageUrl": "<<image url attribute>>",
        "unxPrice": "<<price attribute>>",
        "unxDescription":"<<description attribute>>"
        };
        ```
    2. Provide product attributes to be returned from the search api:
        ```js
        productAttributes: ["<<title attribute>>","<<image url attribute>>","<<price attribute>>","<<description attribute>>"]
        ```
5. Run the following commands in terminal:<br/>
Install required version of node using nvm:<br/>
```nvm install v14.15.0```<br/>
Use that version of node:<br/>
```nvm use v14.15.0```<br/>
Install dependencies:<br/>
```npm install```<br/>
Run the webpack server:<br/>
```npm run start```<br/>

Additional links for above tools:<br/>
[Download Node](3https://nodejs.org/en/download/)<br/>
[Setup nvm](https://nodesource.com/blog/installing-node-js-tutorial-using-nvm-on-mac-os-x-and-ubuntu/)<br/>


