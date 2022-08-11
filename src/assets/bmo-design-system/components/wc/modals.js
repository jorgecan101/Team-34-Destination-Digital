const focusableEl = document.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), label, li[role="tab"]:not([disabled]), .tab[tabindex="0"], div[role="tabpanel"]:not([disabled]), .tab:not([disabled]),.bmo-switch[tabindex="0"]');
const modalStayFocusable = document.querySelectorAll('.modal a[href]:not([disabled]), .modal button:not([disabled]), .modal textarea:not([disabled]), .modal input[type="text"]:not([disabled]), .modal input[type="radio"]:not([disabled]), .modal input[type="checkbox"]:not([disabled]), .modal select:not([disabled]), .modal label, .modal li[role="tab"]:not([disabled]), .modal div[role="tabpanel"]:not([disabled])');

export class modals extends HTMLElement {
    constructor() {
        super();
    }
    get modalTitle() { return this.getAttribute('modal-title'); }
    set modalTitle(value) {
        if (value) {
            this.setAttribute('modal-title', value);
        }
    }
    connectedCallback() {
        var nestedModalContent = this.innerHTML;
        this.innerHTML =

            '<div class="modal" aria-describedby="title">' +
            '<bmo-button label="Close this modal" icon-button icon-color="granite" icon-size="medium" icon="close"></bmo-button>' +
            '<div class="modal-header">' +
            '<div class="grid col-100 modal-title">' +
            '<h2 class="sub-heading bold modal-title-text" id="title"></h2>' +
            '</div>' +
            '</div>' +
            '<div class="body-scroll scrollbar">' +
            '<div class="modal-body grid col-100">' + nestedModalContent +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="bmo-overlay-dark"></div>'

        if (this.hasAttribute('small')) {
            modals.classList.add('small');
        }
        if (this.hasAttribute('large')) {
            modals.classList.add('large');
        }
        const modalContent = this.querySelector('.modal-body');
        const modal = this.querySelector('.modal');

        const modalCloseButton = this.querySelector('bmo-modal bmo-button  button.icon-button.medium span.icon.medium.close');
        modalCloseButton.parentElement.classList.add('modal-close');
        const modalTitleText = this.querySelector('.modal-title-text');
        const modalOverlay = this.querySelector('.bmo-overlay-dark');
        const modalOverlayCloses = this.querySelectorAll('.bmo-overlay-dark');
        modalTitleText.textContent = this.modalTitle;
        let labelToDash = this.querySelector('.modal-title-text');
        let doIt = labelToDash.innerHTML;
        const labelToDash2 = doIt.replace(/\s+/g, '-').toLowerCase();
        modal.setAttribute('id', labelToDash2);
        modal.setAttribute('aria-describedby', labelToDash2);
        //  modalContent.innerHTML = bmoContent;
        setTimeout(() => {
            const modalTriggers = document.querySelectorAll('.modal-trigger');
            const modalCloses = document.querySelectorAll('.modal .modal-close');
            [].forEach.call(modalTriggers, function(modalTrigger) {
                modalTrigger.addEventListener('click', function() {
                    this.parentNode.nextElementSibling.childNodes[0].classList.add('active');
                    this.parentNode.nextElementSibling.childNodes[0].setAttribute('tabIndex', '0');
                    focusableEl.forEach((function(x) { x.setAttribute("tabindex", "-1"); }));
                    this.parentNode.nextElementSibling.childNodes[1].setAttribute('active', '');
                    this.parentNode.nextElementSibling.childNodes[1].classList.add('active');
                    /***BRING MODAL TO FOCUS ***/
                    setTimeout(function() {
                        document.querySelector('.modal.active').focus();
                        modalStayFocusable.forEach((function(x) { x.removeAttribute("tabindex"); }));
                    }, 300);
                });
            });
            [].forEach.call(modalCloses, function(modalClose) {
                modalClose.addEventListener('click', function() {
                    this.parentNode.parentNode.classList.remove('active');
                    this.parentNode.parentNode.removeAttribute('tabIndex');
                    modalOverlay.removeAttribute('active');
                    modalOverlay.classList.remove('active');
                    focusableEl.forEach((function(x) { x.removeAttribute("tabindex"); }));
                    document.querySelectorAll('.bmo-switch').forEach((function(x) { x.setAttribute('tabindex', '0'); }));
                });
            });
            const closeTheModal = () => {
                    modal.classList.remove('active');
                    modalOverlay.removeAttribute('active');
                    modalOverlay.classList.remove('active');
                    focusableEl.forEach((function(x) { x.removeAttribute("tabindex"); }));
                    document.querySelectorAll('.bmo-switch').forEach((function(x) { x.setAttribute('tabindex', '0'); }));
                }
                [].forEach.call(modalOverlayCloses, function(modalOverlayClose) {
                    modalOverlayClose.addEventListener('click', function() {
                        closeTheModal();
                    });
                });
            /***ESCAPE KEY CLOSE MODAL***/
            document.addEventListener('keyup', function(event) {
                if (event.defaultPrevented) {
                    return;
                }
                var key = event.key || event.keyCode;
                if (key === 'Escape' || key === 'Esc' || key === 27) {
                    closeTheModal();
                }
            });
        }, 300);
    }
}
customElements.define('bmo-modal', modals);