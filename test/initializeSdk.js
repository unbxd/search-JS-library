import UnbxdSearch from "../src/index";

const Initialize = function( config, el){
    this.asyncStart = false;
    this.searchTerm = "shirt";
    this.sortOptions = [{
            value: "min_price desc",
            text: "Price High to Low"
        },
        {
            value: "min_price asc",
            text: " Price Low to High"
        }
    ];
    const self = this;
    
    this.testUnbxd = new UnbxdSearch({
        ...config,
        onEvent:function(instance, evt) {
            if(evt === "BEFORE_API_CALL") {
                self.asyncStart = true;
            }
            if(evt === "AFTER_RENDER") {
                self.asyncStart = false;
            }
        }
        
    });
    this.testUnbxd.reRender();
    this.asyncPromise = function() {
        return new Promise(function(resolve, reject){
            let timer = setInterval(()=> {
                if(!self.asyncStart) {
                    clearInterval(timer);
                    self.asyncStart = false;
                    resolve();
                }
            }, 500);
        })
    }.bind(this);
    return this;
}
export default Initialize;
