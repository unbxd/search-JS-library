let options = {
    "facetName": "v_price",
    "displayName": "Price",
    "position": 20,
    "gap": 50,
    "start": 0,
    "end": 100,
    "normalizeFact":0,
    "expo":-2,
    "minX":0,
    "minY":100,
    "showValues":true
};

class RangeSlider {
    constructor(props) {
        this.options = Object.assign({}, options, props);
        this.state = {
            step:0,
            startX: 0,
            startY:100,
            x: this.options.minX,
            y: this.options.minY,
            selectedTouch:null,
            initialLeft:0,
            
        }
        this.id = this.options.facetName+"_rangeSlider";
        this.slideLeftId = "slider-touch-left";
        this.slideRightId = "slider-touch-right";
        this.slideLineId = "slider-line";
        this.innerLineId = "slider-inner-line";
        this.valueId = "valueContainer";
        this.delegate(
            this.options.wrapper,
            "mousedown",
            "."+this.slideLeftId,
            this.onStart.bind(this));
        this.delegate(
            this.options.wrapper,
            "mousedown",
            "."+this.slideRightId,
            this.onStart.bind(this));
        this.delegate(
            this.options.wrapper,
            "touchstart",
            "."+this.slideLeftId,
            this.onStart.bind(this));
        this.delegate(
            this.options.wrapper,
            "touchstart",
            "."+this.slideRightId,
            this.onStart.bind(this));
        if( typeof this.options.onChange === "function") {
            this.options.onChange.bind(this);
        } else {
            this.options.onChange = () =>{}
        }
        if( typeof this.options.onStop === "function") {
            this.options.onStop.bind(this);
        } else {
            this.options.onStop = () =>{}
        }
        this.onChange = this.onChange.bind(this);
        this.onMove = this.onMove.bind(this);
        this.onStop=this.onStop.bind(this);
        this.onStart=this.onStart.bind(this);
        this.handleDocElemEvts.bind(this);
    }
    getValue(){
        const {
            x,
            y
        } = this.getRangeValue();

        return {
            left:x,
            right:y,
            props:this.options,
            max:this.maxX
        }
    }
    onChange(action) {
        const val = this.getValue.bind(this)();
        if(action === 'stop') {
            this.options.onStop(val);
        }else{
            this.options.onChange(val)
        }
        if(this.options.showValues) {
            this.valueUI.innerHTML = this.renderValuesUI();
        }
    }
    onMove(event) {
        const actionType = this.getActionType(event);
        let eventTouch = event;
  
        if (event.touches)
        {
            eventTouch = event.touches[0];
        }
        const {
            normalizeFact
        } = this.options;
       
        this.state.x = eventTouch.pageX - this.state.startX;
        this.state.y = eventTouch.pageX - this.state.startY;
        //console.log(this.state.y,this.maxX ,eventTouch.pageX, this.touchRight.offsetLeft,"this.touchRight.offsetLeft");
        if(this.state.selectedTouch === this.touchLeft) {
                if(this.state.x > (this.touchRight.offsetLeft - this.state.selectedTouch.offsetWidth + normalizeFact))
                {
                    this.state.x = (this.touchRight.offsetLeft - this.state.selectedTouch.offsetWidth + normalizeFact)
                }
                else if(this.state.x < 0)
                {
                    this.state.x = 0;
                }
                
                this.setPositionLeft.bind(this)();
        }
        if(this.state.selectedTouch === this.touchRight) {
            if(this.state.y < (this.touchLeft.offsetLeft + this.touchLeft.offsetWidth - normalizeFact))
            {
                this.state.y = (this.touchLeft.offsetLeft + this.touchLeft.offsetWidth - normalizeFact)
            }
            else if(this.state.y > this.maxX)
            {
                this.state.y = this.maxX;
            }
            
            this.setPositionRight.bind(this)();
        }
        this.setInnerLine();
        if(this.valueUI) {
            this.valueUI.innerHTML = this.renderValuesUI();
        }
        this.onChange()
    }
    setPositionLeft() {
        this.touchLeft.style.left = this.state.x + 'px';
    }
    setPositionRight() {
        this.touchRight.style.left = this.state.y + 'px';
    }
    setInnerLine() {
        this.innerLine.style.marginLeft = this.touchLeft.offsetLeft + 'px';
        this.innerLine.style.width = (this.touchRight.offsetLeft - this.touchLeft.offsetLeft) + 'px';
    }
    onStop(e) {
        this.handleDocElemEvts(false);
        this.setInnerLine();
        //this.state.initialLeft = this.innerLine.style.marginLeft;
        this.state.selectedTouch = null;
        this.onChange('stop');
    }
    getActionType(e) {
        if(e && e.target && e.target.dataset) {
            return e.target.dataset.action
        }
        return undefined;
    }
    // setup touch/click events
    onStart(event) {
      
        // Prevent default dragging of selected content
        event.preventDefault();
        let eventTouch = event;
        const actionType = this.getActionType(event);
        if(actionType) {
            if(actionType === "handleLeft") {
                this.state.x = this.touchLeft.offsetLeft;
                this.state.selectedTouch = this.touchLeft;
            }
            if(actionType === "handleRight") {
                this.state.y = this.touchRight.offsetLeft;
                this.state.selectedTouch = this.touchRight;
            }
        }
        this.state.startX = eventTouch.pageX - this.state.x;
        this.state.startY = eventTouch.pageX - this.state.y;
        this.handleDocElemEvts(true)
    }
    handleDocElemEvts(isAdd) {
        if(isAdd) {
            this.wrapper.addEventListener("mousemove", this.onMove);
            this.wrapper.addEventListener("mouseup", this.onStop);
            this.wrapper.addEventListener("touchmove", this.onMove);
            this.wrapper.addEventListener("touchend", this.onStop);
        } else {
            this.wrapper.removeEventListener("mousemove", this.onMove);
            this.wrapper.removeEventListener("mouseup", this.onStop);
            this.wrapper.removeEventListener("touchmove", this.onMove);
            this.wrapper.removeEventListener("touchend", this.onStop);
        }

    }
    delegate(el, evt, sel, handler) {
        el.addEventListener(evt, function(event) {
            var t = event.target;
            while (t && t !== this) {
                if (t.matches(sel)) {
                    handler.call(t, event);
                }
                t = t.parentNode;
            }
        });
    }
    setIntialPosition() {
        const e = this.options.end/100;
        const w = this.maxX/100;
        const x = (this.state.x/e ) * w;
        const y = (this.state.y/e ) * w;
        this.state.x = Math.round(x);
        this.state.y = Math.round(y);
        this.innerLine.style.width  = this.state.y-this.state.x+"px";
        this.state.initialLeft = this.state.x + this.options.normalizeFact;
        this.innerLine.style.marginLeft = this.state.initialLeft+"px";
        this.setPositionLeft();
        this.setPositionRight();
        if(this.options.showValues) {
            this.valueUI.innerHTML = this.renderValuesUI();
        }


    }
    bindElements(){
        if(!this.touchLeft) {
            this.touchLeft = document.querySelector("#"+this.id+" ."+this.slideLeftId);
        }
        if(!this.touchRight) {
            this.touchRight = document.querySelector("#"+this.id+" ."+this.slideRightId);
        }
        this.maxX= this.options.wrapper.offsetWidth - (this.touchRight.offsetWidth+10);
        if(!this.slideLine) {
            this.slideLine = document.querySelector("#"+this.id+" ."+this.slideLineId);
            this.slideLine.style.width = this.maxX- (this.options.normalizeFact)+"px";
        }
        if(!this.innerLine) {
            this.innerLine = document.querySelector("#"+this.id+" ."+this.innerLineId);
        }
        if(!this.wrapper) {
            this.wrapper = document.getElementById(this.id);
        }
        if(this.options.showValues && !this.valueUI) {

            this.valueUI = document.querySelector("#"+this.id+" ."+this.valueId);
        }
        this.setIntialPosition();
    }
    getRangeValue() {
        let left = Number(this.touchLeft.style.left.replace("px",""));
        let right = Number(this.touchRight.style.left.replace("px",""));
        const exp =  this.options.end/this.maxX;
        return {
            x: Math.round(left*exp),
            y:Math.round(right*exp)
        }
    }
    renderValuesUI(){
        const {
            x,
            y
        } = this.getRangeValue();
        return `<div  style="display:flex">
                <div>min : ${x}</div>
                <div>msx : ${y}</div>
            </div>`
    }
    render(){
        const self = this;
        const {
            facetName,
            displayName
        } = this.options;
        setTimeout(this.bindElements.bind(this),10);
        let valueUI = "";
        return `<div id="${this.id}" class="range-slider-container">
                ${displayName}
                <div class="range-slider" >
                    <div data-action="handleLeft" class="${this.slideLeftId} round-handle">
                    </div>
                    <div data-action="handleRight" class="${this.slideRightId} round-handle">
                    </div>
                    <div class="${this.slideLineId}">
                        <div class="${this.innerLineId}"></div>
                    </div>
                </div>
            <div>
            <div class="valueContainer" >
                ${valueUI}
            </div>
            <div>
                <button data-facet-name="${facetName}" data-action="filterPriceRange"> filter by price </button>
                <button data-facet-name="${facetName}"data-action="clearPriceRange"> clear </button>
            <div>
        </div>`
    }
}
export default RangeSlider;
