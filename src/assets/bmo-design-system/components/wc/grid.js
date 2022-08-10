export { grid, row, container };
class container extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const bmoContent = this.innerHTML;
        this.classList.add('bmo-container');
        this.innerHTML.bmoContent;
        if (this.hasAttribute('flex')) {
            this.classList.remove('bmo-container');
            this.classList.add('bmo-container-flex');
            //this.classList.add('flow-column');
        }

    }
    disconnectedCallback() {

    }
    static get observedAttributes() {
        return [ /*array of attributes to watch*/ ];
    }
    attributeChangedCallback(attr, oldVal, newVal) {
        console.log('Attribute changed:', attr, oldVal, newVal);

    }

}
customElements.define('bmo-container', container);

class row extends HTMLElement {
    constructor() {
        super();
    }


    connectedCallback() {
        const bmoContent = this.innerHTML;
        this.classList.add('row');
        this.innerHTML.bmoContent;
        if (this.hasAttribute('flex')) {
            this.classList.remove('row');
            this.classList.add('flex-row');
        }
    }
    disconnectedCallback() {

    }
    static get observedAttributes() {
        return [ /*array of attributes to watch*/ ];
    }
    attributeChangedCallback(attr, oldVal, newVal) {
        console.log('Attribute changed:', attr, oldVal, newVal);

    }

}
customElements.define('bmo-row', row);


class grid extends HTMLElement {
    constructor() {
        super();
    }
    get width() { return this.getAttribute('width'); }
    set width(value) {
        if (value) {
            this.setAttribute('width', value);
        }
    }
    get max() { return this.getAttribute('max'); }
    set max(value) {
        if (value) {
            this.setAttribute('max', value);
        }
    }
    get xl() { return this.getAttribute('xl'); }
    set xl(value) {
        if (value) {
            this.setAttribute('xl', value);
        }
    }
    get lg() { return this.getAttribute('lg'); }
    set lg(value) {
        if (value) {
            this.setAttribute('lg', value);
        }
    }
    get md() { return this.getAttribute('md'); }
    set md(value) {
        if (value) {
            this.setAttribute('md', value);
        }
    }
    get sm() { return this.getAttribute('sm'); }
    set sm(value) {
        if (value) {
            this.setAttribute('sm', value);
        }
    }
    get xms() { return this.getAttribute('xsm'); }
    set xsm(value) {
        if (value) {
            this.setAttribute('xsm', value);
        }
    }

    connectedCallback() {
        const bmoContent = this.innerHTML;
        this.classList.add('grid');
        this.innerHTML.bmoContent;
        if (this.hasAttribute('flex')) {
            this.classList.remove('grid');
            this.classList.add('flex');
        }
        if (this.hasAttribute('mf')) {
            this.classList.remove('grid');
            this.classList.add('mf');
            this.classList.add('grid');
        }
        if (this.hasAttribute('width')) {
            this.classList.add('col-' + this.width)
        }
        if (this.hasAttribute('xl')) {
            this.classList.add('xl-col-' + this.xl)
        }
        if (this.hasAttribute('lg')) {
            this.classList.add('lg-col-' + this.lg)
        }
        if (this.hasAttribute('md')) {
            this.classList.add('md-col-' + this.md)
        }
        if (this.hasAttribute('sm')) {
            this.classList.add('sm-col-' + this.sm)
        }
        if (this.hasAttribute('xsm')) {
            this.classList.add('xms-col-' + this.xsm)
        }
        if (this.hasAttribute('max')) {
            this.classList.add('max-col-' + this.max)
        }


    }
    disconnectedCallback() {

    }
    static get observedAttributes() {
        return [ /*array of attributes to watch*/ ];
    }
    attributeChangedCallback(attr, oldVal, newVal) {
        console.log('Attribute changed:', attr, oldVal, newVal);

    }

}

customElements.define('bmo-grid', grid);