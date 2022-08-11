export { bmoTextarea };

class bmoTextarea extends HTMLElement {
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

    get initialValue() { return this.getAttribute('iv'); }
    set initialValue(value) {
        if (value) {
            this.setAttribute('iv', value);
        }
    }


    connectedCallback() {
        this.innerHTML =
            '<div class="form-field textarea-field">' +
            '<div class="form-label-group">' +
            '<textarea class="input textarea scrollbar" rows="1">' +
            '</textarea>' +
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
        const inputName = this.querySelector('.input.textarea');
        const inputClass = this.querySelector('.input.textarea');
        const errorMessage = this.querySelector('.error-message');
        //const errorIcon = this.querySelector('.form-field bmo-icon.inline-error');
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

        if (this.hasAttribute('autofocus')) {
            inputClass.focus();
        }

        if (this.hasAttribute('iv')) {
            inputClass.setAttribute('value', this.initialValue);
        }

        if (this.getAttribute('type') === 'hidden') {
            inputClass.setAttribute('type', 'hidden');
        }

        //Check if input it empty
        setTimeout(function() {
            (function() {
                var elems = document.querySelectorAll('.input.textarea');
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

        }, 200);
        const bmoTextarea = this.querySelector('.input.textarea')
        document.addEventListener('input', e => {
            if (this.querySelector('textarea').classList.contains(bmoTextarea)) return;
            e.target.autoExpand();
        }, false);

        HTMLTextAreaElement.prototype.autoExpand = function() {
            // Reset field height (breaks CSS transition)
            this.style.height = 'inherit';
            var height = this.scrollHeight;

            this.style.height = height + 'px';
        };

        HTMLTextAreaElement.prototype.dynamicValue = function(value) {
            if (this.querySelector('textarea').classList.contains(bmoTextarea)) {

                this.value = value;
                this.autoExpand();
            }
        };
    }
    static get observedAttributes() {
        return ['error', 'disabled', 'readonly', 'mercury']
    }
    attributeChangedCallback(attr, oldVal, newVal) {
        setTimeout(() => {
            const formField = this.querySelector('.form-field');
            const slideLabel = this.querySelector('.slide-label');
            const inputClass = this.querySelector('.input.textarea');
            const errorMessage = this.querySelector('.error-message');
            const errorIcon = this.querySelector('.form-field bmo-icon.inline-error');
            if (attr === 'error') {
                errorMessage.classList.toggle('error');
                slideLabel.classList.toggle('error-field');
                inputClass.classList.toggle('error');
            }
            if (attr === 'disabled') {
                inputClass.toggleAttribute('disabled');
                slideLabel.classList.toggle('disabled');
            }
            if (attr === 'readonly') {
                inputClass.toggleAttribute('readonly');
            }
            if (attr === 'mercury') {
                formField.classList.toggle('mercury');
            } else {
                // formField.classList.remove('mercury');
            }
        }, 80);

    }



}
customElements.define('bmo-textarea', bmoTextarea);