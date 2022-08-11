export class accordionWrap extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.classList.add('bmo-accordion');
    }
}
customElements.define('bmo-accordion', accordionWrap);

export class accordionTrigger extends HTMLElement {
    constructor() {
        super();
    }
    get labelText() {
        return this.getAttribute('label');
    }
    set labelText(value) {
        if (value) {
            this.setAttribute('label', value);
        }
    }
    get iconName() { return this.getAttribute('icon'); }
    set iconName(value) {
        if (value) {
            this.setAttribute('icon', value);
        }
    }
    connectedCallback() {
        this.classList.add('accordion-trigger');
        this.setAttribute('tabindex', '0');
        this.setAttribute('role', 'tab');
        this.setAttribute('aria-expanded', 'false');
        this.innerHTML = '<bmo-icon medium icon="' + this.iconName + '" aria-hidden="true"></bmo-icon>' + this.labelText + '<span class="short-border"></span>';
        if (this.parentElement.hasAttribute('compact')) {
            this.classList.add('trigger-compact');
            this.innerHTML = '<bmo-icon small icon="' + this.iconName + '" aria-hidden="true"></bmo-icon>' + this.labelText;
        }
        if (this.parentElement.hasAttribute('icon-right')) {
            const accTriggerIcon = this.querySelector('.accordion-trigger .icon');
            accTriggerIcon.classList.add('pull-right');
            //this.innerHTML = '<bmo-icon small icon="baby-chevy-down" aria-hidden="true"></bmo-icon>' + this.labelText;
        }
        const toggleAccordion = () => {
            this.toggleAttribute('expanded');
            this.nextElementSibling.toggleAttribute('expanded');
        }
        setTimeout(() => {
            this.addEventListener('click', function() {
                toggleAccordion();
            });
            this.addEventListener('keydown', function() {
                let key = event.keyCode;
                switch (key) {
                    case 32:
                        toggleAccordion();
                        break;
                    case 13:
                        toggleAccordion();
                        break;
                    case 40:
                        this.setAttribute('expanded', '');
                        this.nextElementSibling.setAttribute('expanded', '');
                        break;
                    default:
                        break;
                }
            });
            this.addEventListener('keypress', function() {
                let downArrow = event.keyCode;
                switch (downArrow) {
                    case 40:
                        this.setAttribute('expanded', '');
                        this.nextElementSibling.setAttribute('expanded', '');
                        break;
                    default:
                        break;
                }
            });
            this.addEventListener('keyup', function() {
                let upArrow = event.keyCode;
                switch (upArrow) {
                    case 38:
                        this.removeAttribute('expanded');
                        this.nextElementSibling.removeAttribute('expanded');
                        break;
                    default:
                        break;
                }
            });
        }, 300);

    }

    static get observedAttributes() {
        return ['expanded'];
    }
    attributeChangedCallback(attr, oldVal, newVal) {

        if (attr === 'expanded') {
            const accTriggerIcon = this.querySelector('.accordion-trigger .icon');
            const trigSB = this.querySelector('.short-border');
            //accTriggerIcon.classList.toggle('expanded');
            setTimeout(() => {

                if (this.getAttribute('aria-expanded') === 'false') {
                    this.setAttribute('aria-expanded', 'true');
                    trigSB.style.display = 'none';
                } else {
                    this.setAttribute('aria-expanded', 'false');
                    trigSB.style.display = 'block';
                }
                if (accTriggerIcon.classList.contains('expanded')) {
                    accTriggerIcon.classList.remove('expanded');
                } else {
                    accTriggerIcon.classList.add('expanded');
                }
            }, 10);
        }
    }
}

customElements.define('acc-trigger', accordionTrigger);

export class accordionPanel extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const panelContent = this.innerHTML;
        this.setAttribute('role', 'tabpanel');
        this.classList.add('accordion-panel');
        this.innerHTML = '<div class="panel-content">' + panelContent + '</div>';
        const panelHeight = this.querySelector('.panel-content').offsetHeight;
        this.insertAdjacentHTML('beforeend', '<span class="short-border"></span>');
    }
    static get observedAttributes() {
        return ['expanded'];
    }
    attributeChangedCallback(attr, oldVal, newVal) {
        if (attr === 'expanded') {
            this.classList.toggle('expanded');
            if (this.classList.contains('expanded')) {
                const panelHeight = this.querySelector('.panel-content').offsetHeight;
                console.log(panelHeight);
                //  setTimeout(() => {
                this.style.height = panelHeight + 'px';
                //  }, 200);
            } else {
                this.removeAttribute('style');
            }
        }
    }

}

customElements.define('acc-panel', accordionPanel);