export class badge extends HTMLElement {
    constructor() {
        super();
    }
    get badgeStyle() { return this.getAttribute('styled'); }
    set badgeStyle(value) {
        if (value) {
            this.setAttribute('styled', value);
        }
    }

    connectedCallback() {

        const badgeSelector = this.querySelector('.new-component');
        this.classList.add('badge');
        this.classList.add(this.badgeStyle);

        if (this.hasAttribute('small')) {
            this.classList.add('small');
        }
        if (this.hasAttribute('has-attribute-demo-specific') === 'specific-value') {
            /**Do Something**/
        }

    }
}
customElements.define('bmo-badge', badge);