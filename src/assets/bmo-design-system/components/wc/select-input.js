export { selectBox, Password };
import { Password } from "./set-password.js";

class selectBox extends HTMLElement {
    constructor() {
        super();

    }

    get inputLabel() { return this.getAttribute('label'); }
    set inputLabel(value) {
        if (value) {
            this.setAttribute('label', value);
        }
    }
    get helperText() { return this.getAttribute('helper-text'); }
    set helperText(value) {
        if (value) {
            this.setAttribute('helper-text', value);
        }
    }
    get errorMessage() { return this.getAttribute('error-message'); }
    set errorMessage(value) {
        if (value) {
            this.setAttribute('error-message', value);
        }
    }


    connectedCallback() {
        const BMOContent = this.innerHTML;
        this.innerHTML =
            '<div class="form-field">' +
            '<div class="form-label-group">' +
            '<select class="select"><select>' +

            '<label class="slide-label select-label">' +
            '<span class="label-text"></span>' +
            '</label>' +
            '<bmo-icon small icon="baby-chevy-down"></bmo-icon>' +
            '<span class="error-message select-error" role="alert"></span>' +
            '<span class="input-helper-text select-helper"></span>' +
            '</div>';
        const slideLabel = this.querySelector('.slide-label');
        const inputLabel = this.querySelector('.label-text');
        const helperText = this.querySelector('.input-helper-text');
        const selectName = this.querySelector('.select');
        const selectClass = this.querySelector('.select');
        const errorMessage = this.querySelector('.error-message');
        inputLabel.innerHTML = this.inputLabel;
        helperText.innerHTML = this.helperText;
        let labelToDash = this.querySelector('.label-text');
        let doIt = labelToDash.innerHTML;
        const labelToDash2 = doIt.replace(/\s+/g, '-').toLowerCase();
        slideLabel.setAttribute('for', labelToDash2);
        selectName.setAttribute('name', labelToDash2);
        selectClass.setAttribute('id', labelToDash2);
        selectClass.innerHTML = BMOContent;
        selectClass.value = this.initialValue;
        errorMessage.innerHTML = this.errorMessage;
        errorMessage.setAttribute('id', 'error-' + labelToDash2);
        helperText.setAttribute('id', 'helper-' + labelToDash2);
        selectClass.setAttribute('aria-describedby', 'error-' + labelToDash2);
        const options = this.querySelectorAll('option');
        [].forEach.call(options, function(option) {
            let optionText = option.innerHTML;
            option.setAttribute('value', optionText)
        });

        if (this.hasAttribute('autofocus')) {
            selectClass.focus();
        }

    }
    static get observedAttributes() {
        return ['error', 'disabled', 'readonly', 'mercury']
    }
    attributeChangedCallback(attr, oldVal, newVal) {


        setTimeout(() => {
            const slideLabel = this.querySelector('.slide-label');
            const selectClass = this.querySelector('.select');
            const errorMessage = this.querySelector('.error-message');
            const errorIcon = this.querySelector('.form-field .icon.inline-error');
            const formField = this.querySelector('.form-field');
            if (attr === 'error') {
                errorMessage.classList.toggle('error');
                //errorIcon.classList.toggle('error');
                slideLabel.classList.toggle('error-field');
                selectClass.classList.toggle('error');
            }
            if (attr === 'disabled') {
                selectClass.toggleAttribute('disabled')
                slideLabel.classList.toggle('disabled');
            }
            if (attr === 'readonly') {
                selectClass.toggleAttribute('readonly');
            }
            if (attr === 'mercury') {
                formField.classList.toggle('mercury');
            }


        }, 300);

    }
}
customElements.define('bmo-select', selectBox);
//Check if input it empty
setTimeout(function() {
    (function() {
        var elems = document.querySelectorAll('.select');
        elems = Array.prototype.slice.call(elems);

        elems.forEach(function(el) {
            if (el.type !== 'radio') {
                setActiveLabel.call(el);
                el.addEventListener('change', setActiveLabel);
            }
        });
    })();

    function setActiveLabel() {
        this.nextElementSibling.classList[(this.value.length ? 'add' : 'remove')]('active-label');
    }
    (function() {
        var pwrdFields = document.querySelectorAll('.input.set-password');
        pwrdFields = Array.prototype.slice.call(pwrdFields);

        pwrdFields.forEach(function(pf, i) {
            new Password(pf, (i > 0 ? pwrdFields[0] : null));
        });
    })();
}, 200);