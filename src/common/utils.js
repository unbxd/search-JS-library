//Returns true if it is a DOM node
export function isNode(o) {
    return (
        typeof Node === "object" ? o instanceof Node :
            o && typeof o === "object" && typeof o.nodeType === "number" && typeof o.nodeName === "string"
    );
}

//Returns true if it is a DOM element    
export function isElement(o) {
    return (
        typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
            o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string"
    );
}

//Checks if the passed value is a boolean or not
export function isBoolean(bool){
    return typeof (bool) === "boolean";
}

//Checks if the passed value is string or not
export function isStr(str){
    console.log("tagName", str, typeof (str))
    return typeof str === "string"
}

//Check if the passed value is object or not
export function isObj(obj){
    return typeof obj === "object" ;
}

//check if the object passed is array
export function isArrObj(arr){
    return Array.isArray(arr)
}

//Check if the passed value is a function or not
export function isFunc(func){
    console.log("func", typeof func);
    return typeof func === "function"
}
