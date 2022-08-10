export { header };
class header /*same as export name*/ extends HTMLElement {
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
        this.innerHTML =
            '<a href="#main-content" class="header-skip">Skip to Main Content</a>' +
            '<header class="bmo-header">' +
            '<div class="bmo-container">' +
            '<div class="bmo-logo">' +
            '<a href="index.html"><img src="./assets/img/bmo-roundel-logo-dark-bg.svg" alt="BMO of Montreal Logo - Home Link" /></a>' +
            '</div>' +
            '<div class="header-content">' +
            bmoContent +
            '</div>' +
            '</div>' +
            '</header>';
        const bmoHeader = this.querySelector('.bmo-header');
        // newComponentSelector.innerHTML = this.CustomAttr; /*****adds customAttr value wher you want it */

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

customElements.define('bmo-header', header);