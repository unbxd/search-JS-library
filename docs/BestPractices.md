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


# Best Practices for CSS:

### 1\. Critical CSS:
{: .no_toc }
    -   Inline Critical CSS: Inline critical CSS directly into the HTML to ensure fast rendering of above-the-fold content.

        `<style> /* Critical CSS styles here */ </style>`

    -   Load Non-Critical CSS Asynchronously: Load non-critical CSS asynchronously for improved performance.
  
### 2\. CSS Minification:
{: .no_toc }
    -   Minify CSS: Minify CSS files to reduce file sizes using tools like CleanCSS or CSSNano.

        `<link rel="stylesheet" href="styles.min.css">`

### 3\. Reducing Render Blocking CSS:
{: .no_toc }
    -   Optimize CSS Delivery: Optimize CSS delivery by eliminating or deferring render-blocking styles.

        `<link rel="stylesheet" media="print" href="print.css" onload="this.media='all'">`

# Best Practices for images

### 1\. Choose the Right Image Format:
{: .no_toc }
-   JPEG (or JPG):
    -   Best for photographs and images with gradients.
    -   Supports compression with minimal loss of quality.
-   PNG:
    -   Ideal for images with transparency (e.g., logos).
    -   Lossless compression but may result in larger file sizes.
-   WebP:
    -   A modern format that provides both lossy and lossless compression.
    -   Generally offers better compression than JPEG and PNG.

### 2\. Resize Images:
{: .no_toc }
-   Use the Appropriate Dimensions:
    -   Resize images to the actual display size on your website.
    -   Avoid using larger images if smaller ones are sufficient.
-   Responsive Images:
    -   Implement responsive images with the `srcset` attribute to serve different sizes based on device characteristics.

### 3\. Compress Images:
{: .no_toc }
-   Lossy Compression:
    -   Use tools like ImageOptim, TinyPNG, or online services to compress images.
    -   Adjust the compression level based on acceptable quality.
-   Lossless Compression:
    -   For images that require no loss of quality, use lossless compression tools like OptiPNG or PNGGauntlet.

### 4\. Image Sprites:
{: .no_toc }
-   Combine Small Images:
    -   Combine small images into a single sprite sheet.
    -   Reduces the number of server requests, improving loading times.
-   CSS Sprites:
    -   Use CSS to display specific parts of the sprite sheet for different elements on your website.

### 5\. Lazy Loading:
{: .no_toc }
-   Implement Lazy Loading:
    -   Use the `loading="lazy"` attribute on images to defer loading until they are about to be displayed.
    -   Reduces initial page load times, especially for images below the fold.

### 6\. Optimize Image Delivery:
{: .no_toc }
-   Use a Content Delivery Network (CDN):
    -   Deliver images through a CDN for faster loading across different geographic locations.
-   Enable Browser Caching:
    -   Set appropriate cache headers to allow browsers to cache images for a specified duration.

### 7\. Optimize Image Formats for Web:
{: .no_toc }
-   Convert Images to WebP:
    -   Convert images to the WebP format for browsers that support it.
    -   Use fallbacks for browsers that don't support WebP.

### 8\. Responsive Images with `srcset`:
{: .no_toc }
-   Use the `srcset` Attribute:
    -   Provide multiple image sources with different resolutions and sizes.
    -   Browsers can choose the most appropriate image based on the user's device.
-   Specify Image Sizes:
    -   Use the `sizes` attribute to specify image sizes based on viewport width.

### 9\. Optimize Image Loading with Prefetching:
{: .no_toc }
-   Prefetch Images:
    -   Use `<link rel="prefetch">` to prefetch images that will be used on subsequent pages.
    -   Improves the perceived loading time for users navigating between pages.

### 10\. Consider Image Formats for Icons:
{: .no_toc }
-   Use SVGs for Icons:
    -   For icons and simple graphics, use scalable vector graphics (SVG).
    -   Scalable without loss of quality and can be styled using CSS.

### 11\. Test Image Performance:
{: .no_toc }
-   Performance Monitoring:
    -   Use tools like Google PageSpeed Insights, Lighthouse, or GTmetrix to analyze image performance.
    -   Identify opportunities for improvement based on recommendations.

### 12\. Automate Image Optimization in Build Process:
{: .no_toc }
-   Integrate Build Tools:
    -   Automate image optimization as part of your build process using tools like Grunt, Gulp, or webpack.
    -   Ensure that all images are consistently optimized before deployment.

By following these detailed steps, you can significantly improve the performance of your website by optimizing images for faster loading times and a better user experience.