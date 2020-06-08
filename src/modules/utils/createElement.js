const createElement = (type, id, attr = {}) => {
    const elem = document.createElement(type);
    if(id) {
        elem.setAttribute("id",id)
    }
    const attrArr = Object.keys(attr);
    attrArr.forEach((item)=> {
        elem.setAttribute(item,attr[item]);
    })
    return elem;
}
export default createElement