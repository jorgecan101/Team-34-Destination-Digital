export class overlayLight extends HTMLElement {
    constructor() {
        super();
        this.classList.add('bmo-overlay-light')
            /*this.addEventListener('click', function() {
                closeOverlay();
            });*/
    }

    static get observedAttributes() {
        return ['active'];
    }
    attributeChangedCallback(attr, oldVal, newVal) {
        if (attr === 'active') {
            this.classList.toggle('active');
        }
    }

}
customElements.define('overlay-light', overlayLight);