export { profileAvatar };
class profileAvatar /*same as export name*/ extends HTMLElement {
    constructor() {
        super();
    }
    get profileInitial() {
        return this.getAttribute('letter');
    }
    set profileInitial(value) {
        if (value) {
            this.setAttribute('letter', value);
        }
    }
    get imagePath() {
        return this.getAttribute('img-src');
    }
    set imagePath(value) {
        if (value) {
            this.setAttribute('img-src', value);
        }
    }

    connectedCallback() {
        this.classList.add('profile-image');
        this.classList.add('avatar');
        this.setAttribute('role', 'presetation');
        if (this.hasAttribute('letter')) {
            this.classList.add(this.profileInitial);
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

customElements.define('profile-avatar', profileAvatar);