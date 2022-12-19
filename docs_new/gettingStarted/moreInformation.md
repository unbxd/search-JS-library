

More Information
----------------

For any issue that you face during integration or need updates on the changes, follow these tips, raise issues, or track log changes. 

### Tips& tricks

*   If you are including our Search JS Library, [Autosuggest Library](https://unbxd.com/docs/site-search/integration-documentation/autosuggest-sdk/) & [Analytics Library](https://unbxd.com/docs/site-search/integration-documentation/browser-integration/) in your HTML page, the order of the files are important.  
    Include the Search JS Library, followed by Autosuggest Library and then the Analytics JS Library. This should be followed by the code to invoke the library.
*   Always ensure you are invoking the library (i.e. calling the **UnbxdSearch** constructor) after you have included it either via URL or via npm
*   Include the CSS inside the <head> tag of your HTML page & the scripts at the end of the body tag. This will ensure that the page rendering is not blocked by the javascript files.

### Raise Issues  

  
Facing some issues? look for solutions or create an issue [here](https://github.com/unbxd/search-JS-library/issues).

### Stay up to date

  
Look at the [changelog](https://github.com/unbxd/search-JS-library/blob/master/CHANGELOG.md) to see the latest version & history.