export { basicRadio, radioGroup, boxRadio };

class radioGroup extends HTMLElement {
    constructor() {
        super();
    }
    get groupLabel() { return this.getAttribute('group-label'); }
    set groupLabel(value) {
        if (value) {
            this.setAttribute('group-label', value);
        }
    }
    get errorMessage() { return this.getAttribute('error-message'); }
    set errorMessage(value) {
        if (value) {
            this.setAttribute('error-message', value);
        }
    }
    connectedCallback() {
        this.classList.add('radio-group');
        const radioGroupContent = this.innerHTML;
        this.innerHTML =
            '<fieldset class="input-wrap input-radio">' +
            '<legend class="legend"></legend>' +
            '<span class="error-message" role="alert"></span>' +
            '</fieldset>';

        const thisLegend = this.querySelector('legend');
        const errorMessage = this.querySelector('.error-message');
        errorMessage.textContent = this.errorMessage;
        thisLegend.innerHTML = this.groupLabel;
        let createRadioWrap = document.createElement("div");
        createRadioWrap.innerHTML = radioGroupContent;
        thisLegend.parentNode.insertBefore(createRadioWrap, thisLegend.nextElementSibling);
        //Grab Legend text, insert dash for any spaces and make it the name="" for all child radios
        setTimeout(() => {

            let doIt = thisLegend.innerHTML;
            const groupLabelToDash2 = doIt.replace(/\s+/g, '-').toLowerCase();
            var allRadioNames = this.querySelectorAll('.radio,.box-radio');
            [].forEach.call(allRadioNames, function(allRadioName) {
                allRadioName.setAttribute('name', groupLabelToDash2);
            });
        }, 300);
    }
    disconnectedCallback() {


    }
    static get observedAttributes() {
        return ['error', 'disabled', 'readonly'];
    }
    attributeChangedCallback(attr, oldVal, newVal) {

        if (attr === 'disabled') {
            setTimeout(() => {
                var disableFieldset = this.querySelector('fieldset');
                disableFieldset.toggleAttribute('disabled')
            }, 300);
        }

        if (attr === 'error') {
            setTimeout(() => {
                const errorMessage = this.querySelector('.error-message');
                errorMessage.classList.add('has-error');
                // errorMessage.setAttribute('aria-describedby', '');
            }, 300);

        }
    }
}
customElements.define('radio-group', radioGroup);


class basicRadio extends HTMLElement {
    constructor() {
        super();
    }

    get inputLabel() { return this.getAttribute('label'); }
    set inputLabel(value) {
        if (value) {
            this.setAttribute('label', value);
        }
    }

    connectedCallback() {
        this.innerHTML =
            '<input type="radio" class="radio">' +
            '<label class="radio-label"></label>';
        const inputLabel = this.querySelector('.radio-label');
        const thisRadio = this.querySelector('.radio');

        if (this.hasAttribute('disabled')) {
            thisRadio.setAttribute('disabled', 'true');
        }
        if (this.hasAttribute('checked')) {
            thisRadio.setAttribute('checked', 'checked');
        }

        inputLabel.innerHTML = this.inputLabel;
        thisRadio.setAttribute('value', this.inputLabel);
        setTimeout(() => {

            let labelToDash = this.querySelector('.radio-label');
            let doIt = labelToDash.innerHTML;
            const LabelToDash2 = doIt.replace(/\s+/g, '-').toLowerCase();
            var allRadioIDs = this.querySelectorAll('.radio');
            [].forEach.call(allRadioIDs, function(allRadioID) {
                let random = Math.round(Math.random() * 10000)
                allRadioID.setAttribute('id', LabelToDash2 + '-' + random);
                labelToDash.setAttribute('for', LabelToDash2 + '-' + random);
            });
        }, 300);

    }
    disconnectedCallback() {

    }
    static get observedAttributes() {
        return ['error', 'disabled'];
    }
    attributeChangedCallback(attr, oldVal, newVal) {
        console.log('Attribute changed:', attr, oldVal, newVal);
        const thisRadio = this.querySelector('.radio');
        const getGroup = this.parentNode.parentNode.parentNode.parentNode.querySelector('radio-group');
        if (this.hasAttribute('disabled')) {
            // thisRadio.setAttribute('disabled', 'true');
        } else {
            thisRadio.removeAttribute('disabled');
        }
        if (attr === 'disabled') {
            setTimeout(() => {
                var disableRadio = this.querySelector('.radio');
                disableRadio.setAttribute('disabled', 'true')
            }, 300);
        }
    }
}
customElements.define('bmo-radio', basicRadio);

//var boxRaioIndex = 0;
//boxRaioIndex++;

class boxRadio extends HTMLElement {
    constructor() {
        super();
    }

    get inputLabel() { return this.getAttribute('label'); }
    set inputLabel(value) {
        if (value) {
            this.setAttribute('label', value);
        }
    }

    connectedCallback() {
        this.innerHTML =
            '<input type="radio" class="box-radio">' +
            '<label class="box-radio-label"></label>';
        const inputLabel = this.querySelector('.box-radio-label');
        const thisRadio = this.querySelector('.box-radio');
        if (this.hasAttribute('disabled')) {
            thisRadio.setAttribute('disabled', 'true');
        }
        if (this.hasAttribute('checked')) {
            thisRadio.setAttribute('checked', 'checked');
        }
        inputLabel.innerHTML = this.inputLabel;
        thisRadio.setAttribute('value', this.inputLabel);
        setTimeout(() => {

            let labelToDash = this.querySelector('.box-radio-label');
            let doIt = labelToDash.innerHTML;
            const LabelToDash2 = doIt.replace(/\s+/g, '-').toLowerCase();
            var allRadioIDs = this.querySelectorAll('.box-radio');
            [].forEach.call(allRadioIDs, function(allRadioID) {
                let random = Math.round(Math.random() * 10000)
                allRadioID.setAttribute('id', LabelToDash2 + '-' + random);
                labelToDash.setAttribute('for', LabelToDash2 + '-' + random);
            });
        }, 300);

    }
    disconnectedCallback() {

    }
    static get observedAttributes() {
        return ['error', 'disabled'];
    }
    attributeChangedCallback(attr, oldVal, newVal) {

        if (attr === 'disabled') {
            setTimeout(() => {
                var disableRadio = this.querySelector('.box-radio');
                disableRadio.setAttribute('disabled', 'true')
            }, 300);
        }
    }
}
customElements.define('box-radio', boxRadio);