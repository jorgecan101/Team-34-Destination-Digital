export { basicCheck, checkGroup, checkCard };

class checkGroup extends HTMLElement {
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
        this.classList.add('check-group');
        const checkGroupContent = this.innerHTML;
        this.innerHTML =
            '<fieldset class="input-wrap input-checkbox">' +
            '<legend class="legend check-legend"></legend>' +
            '<span class="error-message" role="alert"></span>' +
            '</fieldset>';

        const thisLegend = this.querySelector('legend');
        const errorMessage = this.querySelector('.error-message');
        errorMessage.textContent = this.errorMessage;
        thisLegend.innerHTML = this.groupLabel;
        let createCheckWrap = document.createElement("div");
        createCheckWrap.innerHTML = checkGroupContent;
        thisLegend.parentNode.insertBefore(createCheckWrap, thisLegend.nextElementSibling);
        //Grab Legend text, insert dash for any spaces and make it the name="" for all child checkboxes
        setTimeout(() => {

            let doIt = thisLegend.innerHTML;
            const groupLabelToDash2 = doIt.replace(/\s+/g, '-').toLowerCase();
            var allRadioNames = this.querySelectorAll('.check,.box-check');
            [].forEach.call(allRadioNames, function(allRadioName) {
                allRadioName.setAttribute('name', groupLabelToDash2);
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
customElements.define('check-group', checkGroup);


class basicCheck extends HTMLElement {
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
            '<input type="checkbox" class="check">' +
            '<label class="check-label"></label>';
        const inputLabel = this.querySelector('.check-label');
        const thisCheck = this.querySelector('.check');

        if (this.hasAttribute('disabled')) {
            thisCheck.setAttribute('disabled', 'true');
        }
        if (this.hasAttribute('checked')) {
            thisCheck.setAttribute('checked', 'checked');
        }

        inputLabel.innerHTML = this.inputLabel;
        thisCheck.setAttribute('value', this.inputLabel);
        setTimeout(() => {

            let labelToDash = this.querySelector('.check-label');
            let doIt = labelToDash.innerHTML;
            const LabelToDash2 = doIt.replace(/\s+/g, '-').toLowerCase();
            var allCheckIDs = this.querySelectorAll('.check');
            [].forEach.call(allCheckIDs, function(allCheckID) {
                let random = Math.round(Math.random() * 10000)
                allCheckID.setAttribute('id', LabelToDash2 + '-' + random);
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
        const thisCheck = this.querySelector('.check');
        const getGroup = this.parentNode.parentNode.parentNode.parentNode.querySelector('check-group');
        if (this.hasAttribute('disabled')) {
            // thisCheck.setAttribute('disabled', 'true');
        } else {
            thisCheck.removeAttribute('disabled');
        }
        if (attr === 'disabled') {
            setTimeout(() => {
                var disableCheck = this.querySelector('.check');
                disableCheck.setAttribute('disabled', 'true')
            }, 300);
        }
    }
}
customElements.define('bmo-check', basicCheck);

class checkCard extends HTMLElement {
    constructor() {
        super();
    }

    get inputLabel() { return this.getAttribute('label'); }
    set inputLabel(value) {
        if (value) {
            this.setAttribute('label', value);
        }
    }

    get imgSrc() { return this.getAttribute('img-src'); }
    set imgSrc(value) {
        if (value) {
            this.setAttribute('img-src', value);
        }
    }

    connectedCallback() {

        this.innerHTML =
            '<div class="bmo-card-checkbox check-fixed-cards">' +
            '<input type="checkbox" class="card-check-input">' +
            '<label class="card-check-label">' +
            '<span class="check"></span>' +
            '<span class="card-check-image"></span>' +
            '<span class="card-check-label-text"></span>' +
            '</label>' +
            '</div>';
        const checkIMG = this.querySelector('.card-check-image');
        const thisCheck = this.querySelector('.card-check-input');
        const inputLabel = this.querySelector('.card-check-label-text');
        const inputLabelFor = this.querySelector('.card-check-label');
        if (this.hasAttribute('disabled')) {
            thisCheck.setAttribute('disabled', 'true');
        }
        if (this.hasAttribute('checked')) {
            thisCheck.setAttribute('checked', 'checked');
        }


        this.classList.add("check-card");
        this.parentNode.classList.add("check-card-wrap");
        inputLabel.innerHTML = this.inputLabel;
        thisCheck.setAttribute('value', this.inputLabel);
        if (this.hasAttribute('img-src')) {
            console.log('has image')
            checkIMG.innerHTML = '<img src="' + this.imgSrc + '" role="presentation" />';

        } else {
            checkIMG.remove();
        }
        setTimeout(() => {

            let labelToDash = this.querySelector('.card-check-label-text');
            //let labelToDash = this.querySelector('.card-check-label-text');
            let doIt = labelToDash.innerHTML;
            const LabelToDash2 = doIt.replace(/\s+/g, '-').toLowerCase();
            var allCheckIDs = this.querySelectorAll('.card-check-input');
            [].forEach.call(allCheckIDs, function(allCheckID) {
                let random = Math.round(Math.random() * 10000)
                allCheckID.setAttribute('id', LabelToDash2 + '-' + random);
                inputLabelFor.setAttribute('for', LabelToDash2 + '-' + random);
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
                var disableCheck = this.querySelector('.card-check-input');
                disableCheck.setAttribute('disabled', 'true')
            }, 300);
        }
    }
}
customElements.define('card-check', checkCard);