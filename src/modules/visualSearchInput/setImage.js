/* eslint-disable no-unused-vars */

import setImageValue from './setImageValue';
import uploadImageFile from "./uploadImageBase64";

const setImage = (prototype) => {
    prototype = Object.assign(prototype, {
        setImageValue,
        uploadImageFile,
    })
}

export {
    setImage as default,
    setImageValue,
    uploadImageFile


};
