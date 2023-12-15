export const boundingBoxUI = (imageData , selectedBoundingBox,  imagebox , numberofBoundingBoxes , imageContainer)  => {
    let boundingBoxes = [];
    imageData.boxes.map((data, ) => {
        if (data.vertices) {
           let selected = parseInt(selectedBoundingBox) == data.id ? true : false
            let boundingBox = convertFormat(data.vertices)
            boundingBoxes.push(boundingBox)
            numberofBoundingBoxes = imageData.boxes.length;
            //const s = this.imageBoxWrapper
            boundingBoxes.map((box, index) => {
                const percentageX1 = (box.x1 / imagebox.naturalWidth) * 100;
                const percentageY1 = (box.y1 / imagebox.naturalHeight) * 100;
                const percentageX2 = (box.x2 / imagebox.naturalWidth) * 100;
                const percentageY2 = (box.y2 / imagebox.naturalHeight) * 100;
                const boundingBoxElement = document.createElement('div');
                boundingBoxElement.className = `bounding-box ${selected ? 'selected' : 'hidden'}`;
                boundingBoxElement.id = 'bounding-box'
                boundingBoxElement.setAttribute("boxId", data.id)
                boundingBoxElement.style.top = `${percentageY1}%`;
                boundingBoxElement.style.left = `${percentageX1}%`;
                boundingBoxElement.style.width = `${percentageX2 - percentageX1}%`;
                boundingBoxElement.style.height = `${percentageY2 - percentageY1}%`;
                boundingBoxElement.onclick = () => handleBoundingBoxClick(index + 1);
                imageContainer.appendChild(boundingBoxElement);
const centerX = (percentageX1 + percentageX2) / 2;
const centerY = (percentageY1 + percentageY2) / 2;
                
                // Create the center dot element
                const centerDot = document.createElement('div');
                centerDot.className = 'center-dot';
                centerDot.Id = 'center-dot';
                centerDot.setAttribute("boxId", data.id)
                centerDot.style.left = `${centerX}%`;
                centerDot.style.top = `${centerY}%`;
               
                // Add the center dot to the image container
                imageContainer.appendChild(centerDot);
               
            });
            boundingBoxes = [];
            

        }
    })
    boundingBoxes = [];
    function handleBoundingBoxClick(boxId) {
        alert(`Clicked on bounding box ${boxId}`);
        // You can perform any action here when a bounding box is clicked
    }
}

function convertFormat(inputData) {
    if (inputData.length !== 2) {
        throw new Error("Input data should contain exactly 2 objects.");
    }

    const result = {
        x1: inputData[0].x || "",
        y1: inputData[0].y || "",
        x2: inputData[1].x || "",
        y2: inputData[1].y || ""
    };

    return result;
}
