import UnbxdSearch from "../../src/index";

class UnbxdSearch2 extends UnbxdSearch {
    constructor() {
        super();
        this.newOption = "yooooo";
    }
    changeInput (value = "",cb = ()=>{}) {
        this.state.userInput2 = value;
        return cb(this);
    }
}
export default UnbxdSearch2;