export { display1, display2, headline1, title1, subHeading, body1, body2, body3 };
class display1 extends HTMLElement {
    constructor() {
        super();
    }
    get sV() { return this.getAttribute('sv'); }
    set sV(value) {
        if (value) {
            this.setAttribute('sv', value);
        }
    }
    get textColor() { return this.getAttribute('text-color'); }
    set textColor(value) {
        if (value) {
            this.setAttribute('text-color', value);
        }
    }
    connectedCallback() {
        const urqContent = this.innerHTML;
        setTimeout(() => {
            this.innerHTML = '<' + this.sV + ' class="display-1">' + urqContent + '</' + this.sVS + '>';
            const typography = this.firstChild;
            const inlineTextTags = 'span' || 'abbr' || 'code' || 'cite' || 'sup';
            if (this.getAttribute('sv') === inlineTextTags) {
                this.style.display = "inline";
            }
            if (this.hasAttribute('bold')) {
                typography.classList.add('bold');
            }
            if (this.hasAttribute('medium')) {
                typography.classList.add('medium');
            }
            if (this.hasAttribute('light')) {
                typography.classList.add('light');
            }
            if (this.hasAttribute('text-color')) {
                typography.classList.add(this.textColor);
            }
        }, 300);


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
customElements.define('display-1', display1);

class display2 extends HTMLElement {
    constructor() {
        super();
    }
    get sV() { return this.getAttribute('sv'); }
    set sV(value) {
        if (value) {
            this.setAttribute('sv', value);
        }
    }
    get textColor() { return this.getAttribute('text-color'); }
    set textColor(value) {
        if (value) {
            this.setAttribute('text-color', value);
        }
    }
    connectedCallback() {
        const urqContent = this.innerHTML;
        setTimeout(() => {
            this.innerHTML = '<' + this.sV + ' class="display-2">' + urqContent + '</' + this.sVS + '>';
            const typography = this.firstChild;
            const inlineTextTags = 'span' || 'abbr' || 'code' || 'cite' || 'sup';
            if (this.getAttribute('sv') === inlineTextTags) {
                this.style.display = "inline";
            }
            if (this.hasAttribute('bold')) {
                typography.classList.add('bold');
            }

            if (this.hasAttribute('medium')) {
                typography.classList.add('medium');
            }
            if (this.hasAttribute('light')) {
                typography.classList.add('light');
            }
            if (this.hasAttribute('text-color')) {
                typography.classList.add(this.textColor);
            }
        }, 300);


    }
    disconnectedCallback() {}
    static get observedAttributes() {
        return [ /*array of attributes to watch*/ ];
    }
    attributeChangedCallback(attr, oldVal, newVal) {
        console.log('Attribute changed:', attr, oldVal, newVal);
    }

}
customElements.define('display-2', display2);

class headline1 extends HTMLElement {
    constructor() {
        super();
    }
    get sV() { return this.getAttribute('sv'); }
    set sV(value) {
        if (value) {
            this.setAttribute('sv', value);
        }
    }
    get textColor() { return this.getAttribute('text-color'); }
    set textColor(value) {
        if (value) {
            this.setAttribute('text-color', value);
        }
    }
    connectedCallback() {
        const urqContent = this.innerHTML;
        setTimeout(() => {
            this.innerHTML = '<' + this.sV + ' class="headline-1">' + urqContent + '</' + this.sVS + '>';
            const typography = this.firstChild;
            const inlineTextTags = 'span' || 'abbr' || 'code' || 'cite' || 'sup';
            if (this.getAttribute('sv') === inlineTextTags) {
                this.style.display = "inline";
            }
            if (this.hasAttribute('bold')) {
                typography.classList.add('bold');
            }

            if (this.hasAttribute('medium')) {
                typography.classList.add('medium');
            }
            if (this.hasAttribute('light')) {
                typography.classList.add('light');
            }
            if (this.hasAttribute('text-color')) {
                typography.classList.add(this.textColor);
            }
        }, 300);


    }
    disconnectedCallback() {}
    static get observedAttributes() {
        return [ /*array of attributes to watch*/ ];
    }
    attributeChangedCallback(attr, oldVal, newVal) {
        console.log('Attribute changed:', attr, oldVal, newVal);
    }

}
customElements.define('headline-1', headline1);


class title1 extends HTMLElement {
    constructor() {
        super();
    }
    get sV() { return this.getAttribute('sv'); }
    set sV(value) {
        if (value) {
            this.setAttribute('sv', value);
        }
    }
    get textColor() { return this.getAttribute('text-color'); }
    set textColor(value) {
        if (value) {
            this.setAttribute('text-color', value);
        }
    }
    connectedCallback() {
        const urqContent = this.innerHTML;
        setTimeout(() => {
            this.innerHTML = '<' + this.sV + ' class="title-1">' + urqContent + '</' + this.sVS + '>';
            const typography = this.firstChild;
            const inlineTextTags = 'span' || 'abbr' || 'code' || 'cite' || 'sup';
            if (this.getAttribute('sv') === inlineTextTags) {
                this.style.display = "inline";
            }
            if (this.hasAttribute('bold')) {
                typography.classList.add('bold');
            }

            if (this.hasAttribute('medium')) {
                typography.classList.add('medium');
            }
            if (this.hasAttribute('light')) {
                typography.classList.add('light');
            }
            if (this.hasAttribute('text-color')) {
                typography.classList.add(this.textColor);
            }
        }, 300);


    }
    disconnectedCallback() {}
    static get observedAttributes() {
        return [ /*array of attributes to watch*/ ];
    }
    attributeChangedCallback(attr, oldVal, newVal) {
        console.log('Attribute changed:', attr, oldVal, newVal);
    }

}
customElements.define('title-1', title1);

class subHeading extends HTMLElement {
    constructor() {
        super();
    }
    get sV() { return this.getAttribute('sv'); }
    set sV(value) {
        if (value) {
            this.setAttribute('sv', value);
        }
    }
    get textColor() { return this.getAttribute('text-color'); }
    set textColor(value) {
        if (value) {
            this.setAttribute('text-color', value);
        }
    }
    connectedCallback() {
        const urqContent = this.innerHTML;
        setTimeout(() => {
            this.innerHTML = '<' + this.sV + ' class="sub-heading">' + urqContent + '</' + this.sVS + '>';
            const typography = this.firstChild;
            const inlineTextTags = 'span' || 'abbr' || 'code' || 'cite' || 'sup';
            if (this.getAttribute('sv') === inlineTextTags) {
                this.style.display = "inline";
            }
            if (this.hasAttribute('bold')) {
                typography.classList.add('bold');
            }

            if (this.hasAttribute('medium')) {
                typography.classList.add('medium');
            }
            if (this.hasAttribute('light')) {
                typography.classList.add('light');
            }
            if (this.hasAttribute('text-color')) {
                typography.classList.add(this.textColor);
            }
        }, 300);
    }
    disconnectedCallback() {}
    static get observedAttributes() {
        return [ /*array of attributes to watch*/ ];
    }
    attributeChangedCallback(attr, oldVal, newVal) {
        console.log('Attribute changed:', attr, oldVal, newVal);
    }

}
customElements.define('sub-heading', subHeading);

class body1 extends HTMLElement {
    constructor() {
        super();
    }
    get sV() { return this.getAttribute('sv'); }
    set sV(value) {
        if (value) {
            this.setAttribute('sv', value);
        }
    }
    get textColor() { return this.getAttribute('text-color'); }
    set textColor(value) {
        if (value) {
            this.setAttribute('text-color', value);
        }
    }
    connectedCallback() {
        const urqContent = this.innerHTML;
        setTimeout(() => {
            this.innerHTML = '<' + this.sV + ' class="body-1">' + urqContent + '</' + this.sVS + '>';
            const typography = this.firstChild;
            const inlineTextTags = 'span' || 'abbr' || 'code' || 'cite' || 'sup';
            if (this.getAttribute('sv') === inlineTextTags) {
                this.style.display = "inline";
            }
            if (this.hasAttribute('bold')) {
                typography.classList.add('bold');
            }

            if (this.hasAttribute('medium')) {
                typography.classList.add('medium');
            }
            if (this.hasAttribute('light')) {
                typography.classList.add('light');
            }
            if (this.hasAttribute('text-color')) {
                typography.classList.add(this.textColor);
            }
        }, 300);


    }
    disconnectedCallback() {}
    static get observedAttributes() {
        return [ /*array of attributes to watch*/ ];
    }
    attributeChangedCallback(attr, oldVal, newVal) {
        console.log('Attribute changed:', attr, oldVal, newVal);
    }

}
customElements.define('body-1', body1);

class body2 extends HTMLElement {
    constructor() {
        super();
    }
    get sV() { return this.getAttribute('sv'); }
    set sV(value) {
        if (value) {
            this.setAttribute('sv', value);
        }
    }
    get textColor() { return this.getAttribute('text-color'); }
    set textColor(value) {
        if (value) {
            this.setAttribute('text-color', value);
        }
    }
    connectedCallback() {
        const urqContent = this.innerHTML;
        setTimeout(() => {
            this.innerHTML = '<' + this.sV + ' class="body-2">' + urqContent + '</' + this.sVS + '>';
            const typography = this.firstChild;
            const inlineTextTags = 'span' || 'abbr' || 'code' || 'cite' || 'sup';
            if (this.getAttribute('sv') === inlineTextTags) {
                this.style.display = "inline";
            }
            if (this.hasAttribute('bold')) {
                typography.classList.add('bold');
            }

            if (this.hasAttribute('medium')) {
                typography.classList.add('medium');
            }
            if (this.hasAttribute('light')) {
                typography.classList.add('light');
            }
            if (this.hasAttribute('text-color')) {
                typography.classList.add(this.textColor);
            }
        }, 300);


    }
    disconnectedCallback() {}
    static get observedAttributes() {
        return [ /*array of attributes to watch*/ ];
    }
    attributeChangedCallback(attr, oldVal, newVal) {
        console.log('Attribute changed:', attr, oldVal, newVal);
    }

}
customElements.define('body-2', body2);

class body3 extends HTMLElement {
    constructor() {
        super();
    }
    get sV() { return this.getAttribute('sv'); }
    set sV(value) {
        if (value) {
            this.setAttribute('sv', value);
        }
    }
    get textColor() { return this.getAttribute('text-color'); }
    set textColor(value) {
        if (value) {
            this.setAttribute('text-color', value);
        }
    }
    connectedCallback() {
        const urqContent = this.innerHTML;
        setTimeout(() => {
            this.innerHTML = '<' + this.sV + ' class="body-3">' + urqContent + '</' + this.sVS + '>';
            const typography = this.firstChild;
            const inlineTextTags = 'span' || 'abbr' || 'code' || 'cite' || 'sup';
            if (this.getAttribute('sv') === inlineTextTags) {
                this.style.display = "inline";
            }
            if (this.hasAttribute('bold')) {
                typography.classList.add('bold');
            }

            if (this.hasAttribute('medium')) {
                typography.classList.add('medium');
            }
            if (this.hasAttribute('light')) {
                typography.classList.add('light');
            }
            if (this.hasAttribute('text-color')) {
                typography.classList.add(this.textColor);
            }
        }, 300);


    }
    disconnectedCallback() {}
    static get observedAttributes() {
        return [ /*array of attributes to watch*/ ];
    }
    attributeChangedCallback(attr, oldVal, newVal) {
        console.log('Attribute changed:', attr, oldVal, newVal);
    }

}
customElements.define('body-3', body3);

class disclaimer1 extends HTMLElement {
    constructor() {
        super();
    }
    get sV() { return this.getAttribute('sv'); }
    set sV(value) {
        if (value) {
            this.setAttribute('sv', value);
        }
    }
    get textColor() { return this.getAttribute('text-color'); }
    set textColor(value) {
        if (value) {
            this.setAttribute('text-color', value);
        }
    }
    connectedCallback() {
        const urqContent = this.innerHTML;
        setTimeout(() => {
            this.innerHTML = '<' + this.sV + ' class="disclaimer-1">' + urqContent + '</' + this.sVS + '>';
            const typography = this.firstChild;
            const inlineTextTags = 'span' || 'abbr' || 'code' || 'cite' || 'sup';
            if (this.getAttribute('sv') === inlineTextTags) {
                this.style.display = "inline";
            }
            if (this.hasAttribute('bold')) {
                typography.classList.add('bold');
            }

            if (this.hasAttribute('medium')) {
                typography.classList.add('medium');
            }
            if (this.hasAttribute('light')) {
                typography.classList.add('light');
            }
            if (this.hasAttribute('text-color')) {
                typography.classList.add(this.textColor);
            }
        }, 300);

    }
    disconnectedCallback() {}
    static get observedAttributes() {
        return [ /*array of attributes to watch*/ ];
    }
    attributeChangedCallback(attr, oldVal, newVal) {
        console.log('Attribute changed:', attr, oldVal, newVal);
    }

}
customElements.define('disclaimer-1', disclaimer1);

class disclaimer2 extends HTMLElement {
    constructor() {
        super();
    }
    get sV() { return this.getAttribute('sv'); }
    set sV(value) {
        if (value) {
            this.setAttribute('sv', value);
        }
    }
    get textColor() { return this.getAttribute('text-color'); }
    set textColor(value) {
        if (value) {
            this.setAttribute('text-color', value);
        }
    }
    connectedCallback() {
        const urqContent = this.innerHTML;
        setTimeout(() => {
            this.innerHTML = '<' + this.sV + ' class="disclaimer-2">' + urqContent + '</' + this.sVS + '>';
            const typography = this.firstChild;
            const inlineTextTags = 'span' || 'abbr' || 'code' || 'cite' || 'sup';
            if (this.getAttribute('sv') === inlineTextTags) {
                this.style.display = "inline";
            }
            if (this.hasAttribute('bold')) {
                typography.classList.add('bold');
            }

            if (this.hasAttribute('medium')) {
                typography.classList.add('medium');
            }
            if (this.hasAttribute('light')) {
                typography.classList.add('light');
            }
            if (this.hasAttribute('text-color')) {
                typography.classList.add(this.textColor);
            }

        }, 300);

    }
    disconnectedCallback() {}
    static get observedAttributes() {
        return [ /*array of attributes to watch*/ ];
    }
    attributeChangedCallback(attr, oldVal, newVal) {
        console.log('Attribute changed:', attr, oldVal, newVal);
    }

}
customElements.define('disclaimer-2', disclaimer2);