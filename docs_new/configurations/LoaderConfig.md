## Loader Config

Configure page loader to be shown when fetching search API results by setting the “loader” config object.  
The following options are available under the object:  

| OPTIONS | DATATYPE | DEFAULT VALUE | DESCRIPTION |
|----------|----------|----------|----------|
| el | Element | null | Element in which to render the loader component |
| template | Function | `function(){return '<div class="UNX-loader">Loading search results....</div>'}` | Customize the look and feel of the loader component by using this function |