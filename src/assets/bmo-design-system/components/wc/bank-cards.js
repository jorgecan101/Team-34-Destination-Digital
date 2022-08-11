export { bankCards };
class bankCards extends HTMLElement {
    constructor() {
        super();

    }
    get styled() { return this.getAttribute('styled'); }
    set styled(value) {
        if (value) {
            this.setAttribute('styled', value);
        }
    }
    connectedCallback() {
        this.classList.add('bank-card');

        if (this.hasAttribute('styled')) {
            this.classList.add(this.styled);
        }


    }

}

customElements.define('bank-card', bankCards);