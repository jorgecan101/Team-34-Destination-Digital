export { buttons };
class buttons extends HTMLElement {
    constructor() {
        super();
    }

    get labelText() {
        return this.getAttribute('label');
    }
    set labelText(value) {
        if (value) {
            this.setAttribute('label', value);
        }
    }
    get icon() { return this.getAttribute('icon'); }
    set icon(value) {
        if (value) {
            buttons.classList.add('icon', value);
        }
    }
    get iconSize() { return this.getAttribute('icon-size'); }
    set iconSize(value) {
        if (value) {
            buttons.classList.add('icon-size', value);
        }
    }
    get iconColor() { return this.getAttribute('icon-color'); }
    set iconColor(value) {
        if (value) {
            buttons.classList.add('icon-color', value);
        }
    }
    connectedCallback() {
        this.innerHTML = '<button></button>'
        const buttons = this.querySelector('button');
        buttons.textContent = this.labelText;
        setTimeout(function() {
            let labelToDash = buttons.innerText;
            let doIt = labelToDash;
            const labelToDash2 = doIt.replace(/\s+/g, '-').toLowerCase();
            let random = Math.round(Math.random() * 10000)
            buttons.setAttribute('id', labelToDash2 + '-' + random);
        }, 100)

        if (this.hasAttribute('primary')) {
            buttons.classList.add('primary');
        }
        if (this.hasAttribute('secondary')) {
            buttons.classList.add('secondary');
        }
        if (this.hasAttribute('tertiary')) {
            buttons.classList.add('tertiary');
            let tertiarySpan = document.createElement("span");
            buttons.innerHTML = '';
            tertiarySpan.innerHTML = this.labelText;
            buttons.appendChild(tertiarySpan);
        }
        if (this.hasAttribute('has-icon')) {
            buttons.insertAdjacentHTML('afterbegin', '<span class="icon"></span>');
            const buttonsIcon = this.querySelector('.icon');

            buttonsIcon.classList.add(this.icon);
            buttonsIcon.classList.add('medium');
            buttonsIcon.classList.add(this.iconColor);
        }
        if (this.hasAttribute('icon-button')) {
            buttons.classList.add('icon-button');
            buttons.classList.add(this.iconSize);
            let createIconSpan = document.createElement("span");
            buttons.appendChild(createIconSpan);
            let iconSpan = this.querySelector('span')
            iconSpan.classList.add('icon');
            iconSpan.classList.add(this.icon);
            iconSpan.classList.add(this.iconSize);
            iconSpan.classList.add(this.iconColor);

        }
        if (this.hasAttribute('disabled')) {
            buttons.setAttribute('disabled', '');
        }
        if (this.hasAttribute('small')) {
            buttons.classList.add('small');
        }
        if (this.hasAttribute('micro')) {
            buttons.classList.add('micro');
        }
        if (this.hasAttribute('modal-trigger')) {
            buttons.setAttribute('aria-haspopup', 'true');
            buttons.classList.add('modal-trigger');
        }
        if (this.hasAttribute('popover-trigger')) {
            buttons.setAttribute('aria-haspopup', 'true');
            buttons.classList.add('popover-trigger');
        }
        if (this.hasAttribute('expandable')) {
            buttons.setAttribute('aria-expanded', 'false');
        }
        if (this.hasAttribute('submit')) {
            buttons.setAttribute('type', 'submit');

        }
    }
    disconnectedCallback() {

    }
    static get observedAttributes() {
        return ['disabled'];
    }
    attributeChangedCallback(attr, oldVal, newVal) {
        const buttons = this.querySelector('button');
        if (this.hasAttribute('disabled')) {

        } else {
            this.removeAttribute('disabled');
        }
    }
}

customElements.define("bmo-button", buttons);