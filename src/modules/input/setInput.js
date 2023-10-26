/* eslint-disable no-unused-vars */

import setInputValue from './setInputValue';

const setInput = (prototype) => {
    prototype = Object.assign(prototype,{
        setInputValue
    })
}

export {
    setInput as default,
    setInputValue
};
