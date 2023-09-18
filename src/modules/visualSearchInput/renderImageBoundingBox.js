function renderImageBoundingBox() {
    try {
        let imageData = this.state.responseObj.searchMetaData.image || [];
        const {
            visualSearch,
            visualSearchRequest
        } = this.options;
        const imageContainer = visualSearch.imageBox.el;
        this.imageContainer = imageContainer;
        imageContainer.innerHTML = '';
        imageContainer.appendChild(this.imageBoxWrapper)
        let boundingBoxes = [];
        let boundingBox;
        let selected = "";
        this.options.numberofBoundingBoxes = imageData.boxes.length;
        if (imageData && imageData.boxes && imageData.boxes.length) {
            imageData.boxes.map((data, index) => {
                if (data.vertices) {
                    selected = parseInt(this.state.selectedBoundingBox) === data.id ? true : false
                    boundingBox = convertFormat(data.vertices)
                    boundingBoxes.push(boundingBox)
                    this.options.numberofBoundingBoxes = imageData.boxes.length;
                    this.imageBoxWrapper.src = this.state.userInput;
                    boundingBoxes.map((box, index) => {
                        const boundingBoxElement = document.createElement('div');
                        boundingBoxElement.className = `bounding-box ${selected ? 'selected' : 'hidden'}`;
                        boundingBoxElement.setAttribute("boxId",data.id)
                        boundingBoxElement.style.top = `${box.y1}px`;
                        boundingBoxElement.style.left = `${box.x1}px`;
                        boundingBoxElement.style.width = `${box.x2 - box.x1}px`;
                        boundingBoxElement.style.height = `${box.y2 - box.y1}px`;
                        boundingBoxElement.onclick = () => handleBoundingBoxClick(index + 1);
                        imageContainer.appendChild(boundingBoxElement);


                        const centerX = box.x1 + (box.x2 - box.x1) / 2;
                        const centerY = box.y1 + (box.y2 - box.y1) / 2;

                        // Create the center dot element
                        const centerDot = document.createElement('div');
                        centerDot.className = 'center-dot';
                        centerDot.Id = 'center-dot';
                        centerDot.setAttribute("boxId",data.id)
                        centerDot.style.left = `${centerX}px`;
                        centerDot.style.top = `${centerY}px`;

                        // Add the center dot to the image container
                        imageContainer.appendChild(centerDot);
                    });
                    boundingBoxes=[];
                    function handleBoundingBoxClick(boxId) {
                        alert(`Clicked on bounding box ${boxId}`);
                        // You can perform any action here when a bounding box is clicked
                    }

                }
            })

        }
    }
    catch (err) {
        this.onError("Banners > renderImageBoundingBox", err)
    }

}
export default renderImageBoundingBox;

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