
## Page Size Config
Page Size widget allows you to configure the number of products shown on each page:

[![](https://unbxd.com/docs/wp-content/uploads/2020/05/page-size-new.png)](https://unbxd.com/docs/wp-content/uploads/2020/05/page-size-new.png)  

To render the Page Size widget, you need to configure the “pageSize” config object.

  
The following are the various options available under the object: 

| OPTIONS | DATATYPE | DEFAULT VALUE | DESCRIPTION |
|----------|----------|----------|----------|
| enabled | Boolean | true | Turn this off if you do not want the page size component | 
| el                        	| Element  	| null | Element in which to render the page size element |
| pageSize                  	| Number   	| 12 | Number of results to be shown per page |
| options                   	| Array    	| `[8, 12, 16, 20, 24]` | Array of desired page sizes to be rendered. _It is suggested that the value be a multiple of number of columns (ex. if 3 columns then 15 or 18 or 21)._ |
| pageSizeClass             	| String   	| "UNX-pagesize" | Additional CSS class name to be added to the page size element |
| selectedPageSizeClass     	| String   	| "UNX-selected-pagesize" | Additional CSS class name to be added to the selected page size option |
| action                    	| String   	| "change" | Action on which page size change should trigger: "click" or "change" |
| template                  	| Function 	| [default](src/modules/pageSize/pageSizeView.js) | Customize the look and feel of the page size component by defining this function that is expected to return a HTML string for the template. This function gets 2 parameters: the selected page size and the page size config (i.e. this complete object)  |
| tagName | String | "DIV" | html element for the page size wrapper. by default it is div.  |
| htmlAttributes | Object | {class:"UNX-selected-pagesize"} | by default it contains classes for the wrapper. you can add more classes or any attributes |
| events | object | {} | by default it will be empty. you can add further javascript events by keys and function as values. context will be the current object. |

