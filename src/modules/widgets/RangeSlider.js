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
    "showValues":true,
    "rangeConfig":{
        "start": 0,
        "end": 100,
        "minLabel":"Min",
        "maxLabel":"Max"
    }
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
        if (event.touches)
        {
            eventTouch = event.touches[0];
        }
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
        const {
            end,
            minY,
            minX,
            gap
        } = this.options;
        this.state.absValue = this.maxX/(end+gap);
        if(minY > end) {
            this.state.absValue = this.maxX/(minY+gap);
        }
        const x = minX * this.state.absValue;
        const y = minY * this.state.absValue;
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
        if(!this.touchLeft || !this.touchRight) {
            return false
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
        const {
            absValue
        } = this.state
        return {
            x: Math.round(left/absValue),
            y:Math.round(right/absValue)
        }
    }
    renderValuesUI(){
        const {
            x,
            y
        } = this.getRangeValue();
        const {
            minLabel,
            maxLabel,
            prefix
        } = this.options.rangeConfig;
        return [`<div class="UNX-slider-val-row"  style="display:flex">`,
                    `<div class="UNX-min">`,
                        `<label>${minLabel}</label>`,
                        `<span class="UNX-range-val UNX-min-price">${prefix}${x}</span>`,
                    `</div>`,
                `<div class="UNX-max">`,
                    `<label>${maxLabel}</label>`,
                    `<span class="UNX-range-val UNX-max-price">${prefix}${y}</span>`,
                `</div>`,
            `</div>`].join('');
    }
    render(){
        const {
            facetName,
            applyMultipleFilters,
            facetClass,
            applyButtonText,
            clearButtonText,
        } = this.options;
        setTimeout(this.bindElements.bind(this),100);
        let valueUI = "";
        const hideRowCss = (applyMultipleFilters) ? " " :"UNX-hidden";
    
        return [`<div id="${this.id}" data-id="${facetName}" class="range-slider-container UNX-range-slider-wrap">`,
                        `<div class="valueContainer UNX-range-value-block" >`,
                            `${valueUI}`,
                        `</div>`,
                        `<div class="range-slider UNX-range-slider-wrapper" >`,
                            `<div data-action="handleLeft" class="${this.slideLeftId} round-handle UNX-round-handle">`,
                            `</div>`,
                            `<div data-action="handleRight" class="${this.slideRightId} round-handle UNX-round-handle">`,
                            `</div>`,
                            `<div class="${this.slideLineId} UNX-line-wrap">`,
                                `<div class="${this.innerLineId} UNX-line-inner"></div>`,
                            `</div>`,
                        `</div>`,
                        `<div class="UNX-price-action-row ${hideRowCss}">`,
                            `<button class="UNX-primary-btn ${facetClass}" data-facet-name="${facetName}" data-action="applyRange"> ${applyButtonText} </button>`,
                            `<button class="UNX-default-btn ${facetClass}" data-facet-name="${facetName}" data-action="clearPriceRange"> ${clearButtonText} </button>`,
                        `<div>`,
                    `</div>`,
                `<div>`,
            `</div>`].join('')
    }
}
export default RangeSlider;
