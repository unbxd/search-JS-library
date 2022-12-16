
## Spell Check Config

The spell check feature provides **spelling suggestions** or **spell-checks** for misspelled search queries.

[![](https://unbxd.com/docs/wp-content/uploads/2020/05/spellcheck-1.png)](https://unbxd.com/docs/wp-content/uploads/2020/05/spellcheck-1.png)

In such cases, the context-aware algorithm of Unbxd understands your visitor’s intent and sends a “**Did You Mean**” response along with a search result set for the query, if any.

You can configure the spellcheck feature by updating the required configs under the “spellCheck” config object.  

| OPTIONS | DATATYPE | DEFAULT VALUE | DESCRIPTION |
|----------|----------|----------|----------|    
| enabled                   	| Boolean  	| true | Turn this flag on for enabling spell check  |
| el                        	| Element  	| null | Element in which to render the spellcheck component |
| template                  	| Function 	| [default](src/modules/didYouMean/spellCheckView.js) | Customize the look and feel of the spellcheck component by returning your custom HTML string from this function. This function gets 3 parameters: the search query, the suggested query text and a config object with product count details (`{start, productsLn, numberOfProducts}`) |
| selectorClass             	| String   	| "UNX-suggestion" | Additional CSS class name for the spell check component |
| tagName | String | "DIV" | html element for the spellcheck wrapper. by default it is div.  |
| htmlAttributes | Object | {class:"UNX-spellcheck-wrapper"} | by default it contains classes for the wrapper. you can add more classes or any attributes |
| events | object | {} | by default it will be empty. you can add further javascript events by keys and function as values. context will be the current object. |
