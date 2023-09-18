import setImageValue from './setImageValue';
import { onBoundingBoxClick } from './onBoundingBoxClick';
const setImage = (prototype) => {
    prototype = Object.assign(prototype,{
        setImageValue,
        onBoundingBoxClick
    })
}

export {
    setImage as default,
    setImageValue,
    onBoundingBoxClick
};
