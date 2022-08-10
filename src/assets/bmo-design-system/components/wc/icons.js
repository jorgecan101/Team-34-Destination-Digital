export { icons };
class icons extends HTMLElement {
    constructor() {
        super();
    }
    get iconName() { return this.getAttribute('icon'); }
    set iconName(value) {
        if (value) {
            this.setAttribute('icon', value);
        }
    }

    connectedCallback() {

        var dashToSpace = this.iconName;
        dashToSpace = dashToSpace.charAt(0).toUpperCase() + dashToSpace.slice(1).replace(/-/g, ' ');
        this.classList.add('icon');
        this.setAttribute('title', dashToSpace);
        this.setAttribute('role', 'presetation');

        if (this.hasAttribute('small')) {
            this.classList.add('small');
        }
        if (this.hasAttribute('medium')) {
            this.classList.add('medium');
        }
        if (this.hasAttribute('large')) {
            this.classList.add('large');
        }
        if (this.hasAttribute('icon')) {
            this.classList.add(this.iconName);
        }
        if (this.hasAttribute('white')) {
            this.classList.add('white');
        }
        if (this.hasAttribute('granite')) {
            this.classList.add('granite');
        }
    }
    disconnectedCallback() {

    }
    static get observedAttributes() {
        return [];
    }
    attributeChangedCallback(attr, oldVal, newVal) {
        console.log('Attribute changed:', attr, oldVal, newVal);

    }

}

customElements.define('bmo-icon', icons);