export { newComponent };
class newComponent /*same as export name*/ extends HTMLElement {
    constructor() {
        super();
    }
    get CustomAttr() { return this.getAttribute('custome-attr'); }
    set CustomAttr(value) {
        if (value) {
            this.setAttribute('custom-attr', value);
        }
    }

    connectedCallback() {
        const bmoContent = this.innerHTML; /*stores nested elements inside custom html tag in a variable*/
        this.innerHTML = /***HTML TEMPLATE HERE */ ;
        const newComponentSelector = this.querySelector('.new-component');
        newComponentSelector.innerHTML = this.CustomAttr; /*****adds customAttr value wher you want it */

        if (this.hasAttribute('has-attribute-demo')) {
            /**Do Something**/
        }
        if (this.hasAttribute('has-attribute-demo-specific') === 'specific-value') {
            /**Do Something**/
        }

    }
    disconnectedCallback() {

    }
    static get observedAttributes() {
        return [ /***place attribute names here ***/ ];
    }
    attributeChangedCallback(attr, oldVal, newVal) {
        console.log('Attribute changed:', attr, oldVal, newVal);

    }

}

customElements.define('new-component' /*place your custom tag here*/ , newComponent /*same as class name*/ );