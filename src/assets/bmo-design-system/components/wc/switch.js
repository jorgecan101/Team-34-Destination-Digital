export { switches };

class switches extends HTMLElement {
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

    connectedCallback() {
        this.innerHTML =
            '<div class="bmo-switch-wrap">' +
            '<input type="checkbox">' +
            '<label class="activate-switch">' +
            '<span class="switch-label left">Show Personal Account</span>' +
            '<div class="bmo-switch-rail"></div>' +
            '<span role="button" tabindex="0" class="bmo-switch"></span>' +
            '</label>' +
            '</div>';
        const switchWrap = this.querySelector('.bmo-switch-wrap');
        const switchLabel = this.querySelector('.switch-label.left');
        const switchesRail = this.querySelector('.bmo-switch-rail');
        const switchButton = this.querySelector('.bmo-switch');
        const switchCheckbox = this.querySelector('input');
        const switchLabelWhole = this.querySelector('.activate-switch');
        const ariaLabelOn = this.labelText + ' is on';
        const ariaLabelOff = this.labelText + ' is off';
        switchLabel.textContent = this.labelText;
        switches.disabled = this.isDisabled;
        switchButton.setAttribute('aria-label', 'Toggle ' + this.labelText);
        const storeSwitchLabel = switchLabel.innerHTML;
        const labelToDash = storeSwitchLabel.replace(/\s+/g, '-').toLowerCase();
        switchLabelWhole.setAttribute('for', labelToDash);
        switchCheckbox.setAttribute('name', labelToDash);
        switchCheckbox.setAttribute('id', labelToDash);
        if (this.hasAttribute('checked')) {
            switchesRail.classList.add('active');
            switchesButton.classList.add('active');
            switchCheckbox.toggleAttribute('checked');
        }

        if (this.hasAttribute('fullWidth')) {
            switches.textContent = '';
            switchWrap.classList.add('full-width');
        }
        const toggleBMOSwitch = () => {
            switchesRail.classList.toggle('active');
            switchButton.classList.toggle('active');
            switchCheckbox.toggleAttribute('checked');
            if (switchCheckbox.hasAttribute('checked')) {
                switchButton.setAttribute('aria-label', ariaLabelOn);
            } else {
                switchButton.setAttribute('aria-label', ariaLabelOff);
            }
            switchButton.blur();
            switchButton.focus();
        }
        setTimeout(function() {
            switchLabelWhole.addEventListener('click', function() {
                event.preventDefault();
                toggleBMOSwitch();

            });
            switchLabelWhole.addEventListener('keydown', function(event) {
                let key = event.keyCode;
                switch (key) {
                    case 32:
                        event.preventDefault();
                        toggleBMOSwitch();
                        break;
                    case 13:
                        toggleBMOSwitch();
                        break;
                    default:
                        break;
                }
            });
        }, 300);

    }

    disconnectedCallback() {

    }
    static get observedAttributes() {
        return ['checked'];
    }
    attributeChangedCallback(attr, oldVal, newVal) {
        const switchesRail = this.querySelector('.bmo-switch-rail');
        const switchButton = this.querySelector('.bmo-switch');
        const switchCheckbox = this.querySelector('input');
        if (switchCheckbox.hasAttribute('checked')) {
            switchesRail.classList.toggle('active');
            switchButton.classList.toggle('active');
            switchCheckbox.toggleAttribute('checked');
        } else {
            switchesRail.classList.toggle('active');
            switchButton.classList.toggle('active');
            switchCheckbox.toggleAttribute('checked');
        }
    }
}
customElements.define('bmo-switch', switches);