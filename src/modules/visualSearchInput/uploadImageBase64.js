const uploadImageFile = async function () {
    try {
        let val = this.options.visualSearch.uploadConfig.el
        const file = val.files[0];
        let encoded;
        if (file) {
            encoded = await getBase64(file)
        }
            this.options.productType = "SEARCH";

            if (encoded) {
                this.resetAll();
                this.options.visualSearchRequest = true
                this.options.encodedImage = encoded
                this.options.fileType = file.type
                this.options.imageUpload = true
                this.viewState.loadedFromSuggestion = false;
                this.state.selectedSort = "";
                this.setPageStart(0);
                this.resetViewState();
                this.getResults();
                let vssearchmodal = document.getElementById("myModal");
                vssearchmodal.style.display = "none";
            } else {
                this.searchResultsWrapper.innerHTML = null;
            }
        }catch (err) {
            this.onError("input > uploadImageFile.js", err)
        }

    }
  
    const getBase64 = (file) => new Promise(function (resolve, reject) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {return resolve(reader.result.split(',')[1])};
        reader.onerror = (error) => {return reject('Error: ', error)};
    })
    
export {
        uploadImageFile as default
    }
