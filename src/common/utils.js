import DOMPurify from "dompurify";

//Returns true if it is a DOM node
export const isNode = (o)=> {
    return (
        typeof Node === "object" ? o instanceof Node :
            o && typeof o === "object" && typeof o.nodeType === "number" && typeof o.nodeName === "string"
    );
}

//Returns true if it is a DOM element    
export const isElement = (o) =>{
    return (
        typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
            o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string"
    );
}

//Check if the passed one is a Nodelist 
export const isNodeList = (nodelist)=>{
    return (
        nodelist instanceof NodeList 
    )
}

//Returns Key based on value
export const getKeyByValue = (object, value) => {
    return Object.keys(object).find(key => object[key] === value) || value;
}

export const sanitizeHTML = (template, { sanitizeHtmlElements, sanitizeHtmlAttributes }) => {
    const config = {};

    if (Array.isArray(sanitizeHtmlElements) && sanitizeHtmlElements.length > 0) {
        config.ALLOWED_TAGS = sanitizeHtmlElements;
    }

    if (Array.isArray(sanitizeHtmlAttributes) && sanitizeHtmlAttributes.length > 0) {
        config.ALLOWED_ATTR = sanitizeHtmlAttributes;
    }

    return DOMPurify.sanitize(template, config);
};

