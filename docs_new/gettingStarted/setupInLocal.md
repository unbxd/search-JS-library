---
layout: default
title: Setup In Local
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

    [![Click on Export to ZIP option](../assets/zip.png)](ZIP from codesandbox)
3. Unzip the folder
4.  ## Code Config customizations
    Customize the config inside **src/js** as per the feed:</br>
    1. Change **siteKey** and **apiKey**.
    ```js
    siteKey: "<<site key>>",
    apiKey: "<<api key>>"
    ```
    2. Modify **attributesMap** inside **products** object.
        ```js
        attributesMap: {
        "unxTitle": "<<title attribute>>",
        "unxImageUrl": "<<image url attribute>>",
        "unxPrice": "<<price attribute>>",
        "unxDescription":"<<description attribute>>"
        };
        ```
    3. Provide **product attributes** to be returned from the search api:
        ```js
        productAttributes: ["<<title attribute>>","<<image url attribute>>","<<price attribute>>","<<description attribute>>"]
        ```
    4. Configure the correct category ids for the **UnbxdAnalyticsConf** window object in the   following places:<br/>
    
        [![Configure the correct category ids for the UnbxdAnalyticsConf window object](../assets/categoryid1.png)](UnbxdAnalyticsConf variable configuration)<br/>
        [![Configure the correct category ids for the UnbxdAnalyticsConf window object](../assets/categoryid2.png)](UnbxdAnalyticsConf variable configuration)<br/>

5. Run the following commands in terminal inside the unzipped folder:<br/>
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


