export { textInputs, Password };
import { Password } from "./set-password.js";

class textInputs extends HTMLElement {
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
    get TextInputType() { return this.getAttribute('type'); }
    set TextInputType(value) {
        if (value) {
            this.setAttribute('type', value);
        }
    }
    get initialValue() { return this.getAttribute('iv'); }
    set initialValue(value) {
        if (value) {
            this.setAttribute('iv', value);
        }
    }
    get maxLength() { return this.getAttribute('maxlength'); }
    set maxLength(value) {
        if (value) {
            this.setAttribute('maxlength', value);
        }
    }


    connectedCallback() {
        this.innerHTML =
            '<div class="form-field">' +
            '<div class="form-label-group">' +
            '<input type="text" class="input text">' +
            '<label class="slide-label">' +
            '<span class="label-text"></span>' +
            '</label>' +
            '<span class="error-message" role="alert"></span>' +
            '<span class="input-helper-text"></span>' +
            '</div>';
        const formField = this.querySelector('.form-field');
        const slideLabel = this.querySelector('.slide-label');
        const inputLabel = this.querySelector('.label-text');
        const helperText = this.querySelector('.input-helper-text');
        const inputName = this.querySelector('.input');
        const inputClass = this.querySelector('.input');
        const errorMessage = this.querySelector('.error-message');
        const errorIcon = this.querySelector('.form-field bmo-icon.inline-error');
        inputLabel.innerHTML = this.inputLabel;
        helperText.innerHTML = this.helperText;
        let labelToDash = this.querySelector('.label-text');
        let doIt = labelToDash.innerHTML;
        const labelToDash2 = doIt.replace(/\s+/g, '-').toLowerCase();
        slideLabel.setAttribute('for', labelToDash2);
        inputName.setAttribute('name', labelToDash2);
        inputClass.setAttribute('id', labelToDash2);
        inputClass.value = this.initialValue;
        errorMessage.innerHTML = this.errorMessage;
        errorMessage.setAttribute('id', 'error-' + labelToDash2);
        helperText.setAttribute('id', 'helper-' + labelToDash2);
        inputClass.setAttribute('aria-describedby', 'error-' + labelToDash2);

        if (this.hasAttribute('maxlength')) {
            inputClass.setAttribute('maxlength', this.maxLength);
        }
        if (this.hasAttribute('readonly')) {
            inputClass.setAttribute('readonly', '');
        }
        if (this.hasAttribute('maxlength')) {
            inputClass.setAttribute('maxlength', this.maxLength);
        }
        if (this.hasAttribute('autofocus')) {
            inputClass.focus();
        }
        if (this.hasAttribute('iv')) {
            inputClass.setAttribute('value', this.initialValue);
        }
        if (this.getAttribute('type') === 'email') {
            inputClass.setAttribute('type', 'email');
        }
        if (this.getAttribute('type') === 'hidden') {
            inputClass.setAttribute('type', 'hidden');
        }
        if (this.getAttribute('type') === 'number') {
            inputClass.setAttribute('type', 'number');
        }
        if (this.getAttribute('type') === 'email') {
            inputClass.setAttribute('type', 'email');
        }
        if (this.getAttribute('type') === 'password') {
            inputClass.setAttribute('type', 'password');
        }
        if (this.getAttribute('type') === 'tel') {
            inputClass.setAttribute('type', 'tel');
            inputClass.addEventListener('input', function(e) {
                var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
                e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
            });
        }
        if (this.getAttribute('type') === 'set-password') {
            inputClass.setAttribute('type', 'password');
            inputClass.classList.add('set-password');

            function insertAfter(el, referenceNode) {
                referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
            }
            var setPassCriteria = document.createElement('div');
            setPassCriteria.innerHTML =
                '<div class="half-input-width">' +
                '<span class="input-helper-text-pass-fail min-eight">Minimum 8 characters</span>' +
                '<span class="input-helper-text-pass-fail one-num">Minimum 1 number</span>' +
                '<span class="input-helper-text-pass-fail special-char ">Minimum 1 special character</span>' +
                '</div>' +
                '<div class="half-input-width">' +
                '<span class="input-helper-text-pass-fail lower-case">Minimum 1 lower case letter</span>' +
                '<span class="input-helper-text-pass-fail upper-case">Minimum 1 upper case letter</span>' +
                '</div>';
            var insertAfterThis = this.querySelector('label');
            insertAfter(setPassCriteria, insertAfterThis);
        }
        if (this.getAttribute('type') === 'match-password') {
            inputClass.setAttribute('type', 'password');
            inputClass.classList.add('set-password');

            function insertAfter(el, referenceNode) {
                referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
            }
            var setPassCriteria = document.createElement('div');
            setPassCriteria.innerHTML =
                '<div class="half-input-width">' +
                '<span class="input-helper-text-pass-fail min-eight" style="display: none;">Minimum 8 characters</span>' +
                '<span class="input-helper-text-pass-fail one-num" style="display: none;">Minimum 1 number</span>' +
                '<span class="input-helper-text-pass-fail special-char" style="display: none;">Minimum 1 special character</span>' +
                '<span class="input-helper-text-pass-fail lower-case" style="display: none;">Minimum 1 lower case letter</span>' +
                '<span class="input-helper-text-pass-fail upper-case" style="display: none;">Minimum 1 upper case letter</span>' +
                '<span class="input-helper-text-pass-fail matching" style="display: block;">Matches</span>' +
                '</div>';
            var insertAfterThis = this.querySelector('label');
            insertAfter(setPassCriteria, insertAfterThis);
        }


        //Check if input it empty
        setTimeout(function() {
            (function() {
                var elems = document.querySelectorAll('input, select, textarea');
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
    }
    static get observedAttributes() {
        return ['error', 'disabled', 'readonly', 'mercury']
    }
    attributeChangedCallback(attr, oldVal, newVal) {


        setTimeout(() => {
            const slideLabel = this.querySelector('.slide-label');
            const inputClass = this.querySelector('.input');
            const errorMessage = this.querySelector('.error-message');
            const errorIcon = this.querySelector('.form-field bmo-icon.inline-error');
            const formField = this.querySelector('.form-field');
            if (attr === 'error') {
                errorMessage.classList.toggle('error');
                slideLabel.classList.toggle('error-field');
                inputClass.classList.toggle('error');
            }
            if (attr === 'disabled') {
                inputClass.toggleAttribute('disabled');
                slideLabel.classList.toggle('disabled');
            }
            /* if (attr === 'readonly') {
                 inputClass.toggleAttribute('readonly');
             }*/
            if (attr === 'mercury') {
                formField.classList.toggle('mercury');
            } else {
                // formField.classList.remove('mercury');
            }


        }, 80);

    }



}
customElements.define('text-input', textInputs);