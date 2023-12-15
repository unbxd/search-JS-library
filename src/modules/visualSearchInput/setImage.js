import setImageValue from './setImageValue';
import { onBoundingBoxClick } from './onBoundingBoxClick';
import uploadImageFile from "./uploadImageFile";
import { boundingBoxUI } from './boundingBoxUi';
import  { renderImageBoundingBox }   from './renderImageBoundingBox';
import renderScreens from "./renderScreens"
import renderCroppedImages from "./renderCroppedImages"
import downbuttonclick from "./downbuttonclick"
const setImage = (prototype) => {
    prototype = Object.assign(prototype,{
        setImageValue,
        renderImageBoundingBox,
        renderCroppedImages,
        renderScreens,
        onBoundingBoxClick,
        uploadImageFile,
        boundingBoxUI,
        downbuttonclick
    })
}

export {
    setImage as default,
    renderImageBoundingBox,
    renderCroppedImages,
    renderScreens,
    setImageValue,
    onBoundingBoxClick,
    uploadImageFile,
    boundingBoxUI,
    downbuttonclick
};
