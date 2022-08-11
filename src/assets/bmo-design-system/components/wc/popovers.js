 export class popWrapper /*same as export name*/ extends HTMLElement {
     constructor() {
         super();
     }
     connectedCallback() {
         this.classList.add('popover-wrapper');
     }
 }

 customElements.define('pop-wrap', popWrapper);

 export class popovers /*same as export name*/ extends HTMLElement {
     constructor() {
         super();
     }
     get direction() { return this.getAttribute('direction'); }
     set direction(value) {
         if (value) {
             this.classList.add('direction', value);
         }
     }
     get popoverTitle() { return this.getAttribute('popover-title'); }
     set popoverTitle(value) {
         if (value) {
             this.setAttribute('popover-title', value);
         }
     }

     connectedCallback() {
         const bmoContent = this.innerHTML;
         this.classList.add('popover')
         this.classList.add(this.direction);
         this.classList.add('block');
         this.innerHTML = '<bmo-button label="Close this popover" icon-button  icon-size="medium" icon="close" icon-color="granite" class="pull-right close-popover"></bmo-button>' +
             '<div class="popover-header">' +
             '</div>' +
             '<div class="popover-content">' +
             '</div>';
         const popoverContent = this.querySelector('.popover-content');
         const popoverHeaderText = this.querySelector('.popover-header');
         var openPopovers = document.querySelectorAll('.popover-trigger');
         var closePopovers = document.querySelectorAll('.close-popover');
         var allPopovers = document.querySelectorAll('.popover');
         popoverContent.innerHTML = bmoContent;
         popoverHeaderText.textContent = this.popoverTitle;
         setTimeout(() => {
             this.insertAdjacentHTML('afterend', '<div class="bmo-overlay-light"></div>');

         }, 100);
         setTimeout(() => {

             [].forEach.call(openPopovers, function(openPopover) {

                 openPopover.addEventListener('click', function() {
                     [].forEach.call(allPopovers, function(allpopover) {
                         allpopover.classList.remove('active');
                     });
                     const lightOverlay = this.querySelector('.bmo-overlay-light');
                     openPopover.parentElement.nextElementSibling.nextElementSibling.classList.add('active');
                     this.parentElement.nextElementSibling.setAttribute('active', '');
                     this.parentElement.nextElementSibling.setAttribute('tabindex', '0');
                     setTimeout(function() {
                         document.querySelector('.popover.active').focus()
                     }, 200);
                 });
             });
             [].forEach.call(closePopovers, function(closePopover) {
                 closePopover.addEventListener('click', function() {
                     this.parentElement.removeAttribute('active');
                     this.parentElement.removeAttribute('tabindex');
                     document.querySelector('.bmo-overlay-light.active').classList.remove('active');
                 });
             });
             const modalPopOpened = document.querySelectorAll('.bmo-overlay-light');
             [].forEach.call(modalPopOpened, function(modalPopOpen) {
                 modalPopOpen.addEventListener('click', function() {
                     console.log('clicked');
                     modalPopOpen.classList.remove('active');
                     document.querySelector('.popover.active').classList.remove('active');
                 });
             });
         }, 400);
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
 customElements.define('bmo-popover', popovers);