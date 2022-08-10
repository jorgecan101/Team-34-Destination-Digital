export { switchesDual };

class switchesDual extends HTMLElement {
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
    get labelDual() {
        return this.getAttribute('label-2');
    }
    set labelDual(value) {
        if (value) {
            this.setAttribute('label-2', value);
        }
    }
    get isDisabled() {
        return this.getAttribute('disabled');
    }
    set isDisabled(value) {
        if (value) {
            this.setAttribute('disabled', value);
        }
    }

    connectedCallback() {
        this.innerHTML =
            '<div class="bmo-switch-wrap dual">' +
            '<input type="checkbox">' +
            '<label class="activate-switch">' +
            '<span class="switch-label left">Show Personal Account</span>' +
            '<div class="bmo-switch-rail"></div>' +
            '<span role="button" tabindex="0" class="bmo-switch"></span>' +
            '<span class="switch-label right" id="right-label-daul"></span>' +
            '</label>' +
            '</div>';
        const switchWrap = this.querySelector('.bmo-switch-wrap');
        const switchLabel = this.querySelector('.switch-label.left');
        const switchLabel2 = this.querySelector('.switch-label.right');
        const switchRail = this.querySelector('.bmo-switch-rail');
        const switchButton = this.querySelector('.bmo-switch');
        const switchCheckbox = this.querySelector('input');
        const switchLabelWhole = this.querySelector('.activate-switch');
        switchLabel.textContent = this.labelText;
        switchLabel2.textContent = this.labelDual;
        switchButton.setAttribute('aria-label', 'Toggle ' + this.labelText);
        const storeSwitchLabel = switchLabel.innerHTML;
        const labelToDash = storeSwitchLabel.replace(/\s+/g, '-').toLowerCase();
        switchLabelWhole.setAttribute('for', labelToDash);
        switchCheckbox.setAttribute('name', labelToDash);
        switchCheckbox.setAttribute('id', labelToDash);
        const storeSwitchLabel2 = switchLabel2.innerHTML;
        const labelToDash2 = storeSwitchLabel2.replace(/\s+/g, '-').toLowerCase();
        switchLabelWhole.setAttribute('for', labelToDash + '-' + labelToDash2);
        switchCheckbox.setAttribute('name', labelToDash + '-' + labelToDash2);
        switchCheckbox.setAttribute('id', labelToDash + '-' + labelToDash2);
        const ariaLabelDual1 = this.labelText;
        const ariaLabelDual2 = this.labelDual;
        switchButton.setAttribute('aria-label', 'switch between ' + this.labelText + ' and ' + this.labelDual + ' ' + this.labelText + ' is currently active');
        if (this.hasAttribute('ios')) {
            switchRail.classList.add('ios');
            switchButton.classList.add('ios');
        }
        const toggleDualSwitch = () => {
            switchRail.classList.toggle('active');
            switchButton.classList.toggle('active');
            switchCheckbox.toggleAttribute('checked');
            if (switchCheckbox.hasAttribute('checked')) {
                switchButton.setAttribute('aria-label', ariaLabelDual2 + ' is on. press to switch to ' + ariaLabelDual1);
            } else {
                switchButton.setAttribute('aria-label', ariaLabelDual1 + ' is on. press to switch to ' + ariaLabelDual2);
            }
            switchButton.blur();
            switchButton.focus();
        }

        if (this.hasAttribute('checked')) {
            toggleDualSwitch();
        }

        setTimeout(function() {
            switchLabelWhole.addEventListener('click', function() {
                event.preventDefault();
                toggleDualSwitch();
            });
            switchLabelWhole.addEventListener('keydown', function(event) {
                let key = event.keyCode;
                switch (key) {
                    case 32:
                        event.preventDefault();
                        toggleDualSwitch();
                        break;
                    case 13:
                        toggleDualSwitch();
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
        const switchRail = this.querySelector('.bmo-switch-rail');
        const switchButton = this.querySelector('.bmo-switch');
        const switchCheckbox = this.querySelector('input');
        const ariaLabelDual1 = this.labelText;
        const ariaLabelDual2 = this.labelDual;
        const toggleDualSwitch = () => {
            switchRail.classList.toggle('active');
            switchButton.classList.toggle('active');
            switchCheckbox.toggleAttribute('checked');
            if (switchCheckbox.hasAttribute('checked')) {
                switchButton.setAttribute('aria-label', ariaLabelDual2 + ' is on. press to switch to ' + ariaLabelDual1);
            } else {
                switchButton.setAttribute('aria-label', ariaLabelDual1 + ' is on. press to switch to ' + ariaLabelDual2);
            }
            switchButton.blur();
            switchButton.focus();
        }
        if (this.hasAttribute('checked')) {
            toggleDualSwitch();

        } else {
            toggleDualSwitch();
        }
    }
}
customElements.define('dual-switch', switchesDual);

var ua = navigator.userAgent.toLowerCase();
var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
if (isAndroid) {
    var allSwtichButtons = document.querySelectorAll('.bmo-switch-wrap .bmo-switch');
    [].forEach.call(allSwtichButtons, function(switchButton) {
        switchButton.classList.add('ios');
    });
    var allSwtichRails = document.querySelectorAll('.bmo-switch-wrap .bmo-switch-rail');
    [].forEach.call(allSwtichRails, function(switchRail) {
        switchRail.classList.add('ios');
    });
}