const createElement = (type, attr = {},events = {}, context=window) => {
    const elem = document.createElement(type);
    const attrArr = Object.keys(attr);
    attrArr.forEach((item)=> {
        elem.setAttribute(item,attr[item]);
    })
    const eventsArr = Object.keys(events);
    if(eventsArr.length >0){
        eventsArr.forEach((event)=> {
            elem.addEventListener(event,events[event].bind(context));
        });
    }
    return elem;
}
export default createElement