export { cards };
class cards extends HTMLElement {
    constructor() {
        super();

    }
    connectedCallback() {
        this.classList.add('bmo-card');
        if (this.hasAttribute('interactive')) {
            this.classList.add('hover');
            this.setAttribute('tabindex', '0');
        }
        if (this.hasAttribute('flat')) {
            this.classList.add('flat');
        }
        if (this.hasAttribute('no-pad')) {
            this.classList.add('no-pad');
        }
        if (this.hasAttribute('has-attribute-demo-specific') === 'specific-value') {

        }
    }

}

customElements.define('bmo-card', cards);