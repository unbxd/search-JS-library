const uploadImageFile = async function (e) {
    try {
        let val = this.options.visualSearch.uploadConfig.el
        const file = val.files[0];
       // console.log(file, "valvalvalvalvalval", this.options.visualSearch.uploadConfig, e.target, e, this.target)
        // if (!val.replace(/\s/g, '').length) {
        //     return false;
        // }
        let base64String = '';
        let encoded;
        if (file) {
            // getBase64(file, function(base64String){
            //     console.log("Base64 of file is", base64String); // Here you can have your code which uses Base64 for its operation, // file to Base64 by oneshubh
            // })
            encoded = await getBase64(file)
            //   .then((result) => {
            //     console.log(result)
            //     encoded = result;
            //    })
            //   .catch(e => console.log(e))
            // const reader = new FileReader();
            // reader.onload = function (e) {
            //     base64String = e.target.result.split(',')[1];
            //     console.log(base64String, "valvalvalvalvalval" ,e.target.result.split(','))
            // }
            // reader.readAsDataURL(file);                // Extract the Base64 portion of the data URL
        }
            this.options.productType = "SEARCH";
            //val = (val.indexOf("#") === 0) ? val.replace("#", "") : val;
            if(encoded){
         //   console.log(encoded , file.type, "valvalvalvalvalval")
            }
            //const wrapper = document.getElementById('imageWrapper')
            if (encoded) {
                this.resetAll();
                //wrapper.style.display = 'flex';
                //this.changeInput(val, this.events.changeInput);
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
    // function getBase64 (file, callback) {

    //     const reader = new FileReader();
    
    //     reader.addEventListener('load', () => callback(reader.result));
    
    //     reader.readAsDataURL(file);
    // }
    const getBase64 = (file) => new Promise(function (resolve, reject) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {return resolve(reader.result.split(',')[1])};
        reader.onerror = (error) => {return reject('Error: ', error)};
    })
    
export {
        uploadImageFile as default
    }
