import setInputValue from './actions';

const setInput = (prototype) => {
    prototype = Object.assign(prototype,{
        setInputValue
    })
}

export {
    setInput as default,
    setInputValue
};