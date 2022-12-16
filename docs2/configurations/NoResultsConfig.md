## No Results Config

Configure the display to be rendered when there are no results by setting the “noResults” config object.
The following options are available under the object:  

| OPTIONS | DATATYPE | DEFAULT VALUE | DESCRIPTION |
|----------|----------|----------|----------|
| template | Function | `function(query){return '<div class="UNX-no-results"> No Results found '+ query + '</div>'}` | Customize the look and feel of the no results component by using this function. You will get the searched query as param to this function |