 export class notifications extends HTMLElement {
     constructor() {
         super();

     }
     get alertTitle() { return this.getAttribute('heading'); }
     set alertTitle(value) {
         if (value) {
             this.setAttribute('heading', value);
         }
     }
     get dismissable() { return this.getAttribute('dismissable'); }
     set dismissable(value) {
         if (value) {
             this.setAttribute('dismissable', value);
         }
     }
     connectedCallback() {
         const bmoContent = this.innerHTML;
         this.classList.add('alert-notification');
         this.innerHTML =
             '<div class="bmo-container">' +
             '<span class="notification-icon icon medium"></span>' +
             '<div class="alert-message-wrap">' +
             '<p></p>' +
             '<div> ' + bmoContent + '</div>' +
             '</div>' +
             '</div>'
         const alertsIcon = this.querySelector('.alert-notification .icon');
         const alertsTitle = this.querySelector('.alert-notification  p:first-of-type');
         const alertsContent = this.querySelector('.alert-notification .alert-message-wrap div:first-of-type');
         const alertMessageWrap = this.querySelector('.alert-message-wrap');

         if (this.hasAttribute('success')) {
             this.classList.add('alert-success');
             alertsIcon.classList.add('success-green');
         }
         if (this.hasAttribute('info')) {
             this.classList.add('alert-info');
             alertsIcon.classList.add('info-blue');
         }
         if (this.hasAttribute('warning')) {
             this.classList.add('alert-warning');
             alertsIcon.classList.add('warning-yellow');
         }
         if (this.hasAttribute('danger')) {
             this.classList.add('alert-danger');
             alertsIcon.classList.add('error-red');
         }
         if (this.hasAttribute('dismissable')) {
             alertMessageWrap.insertAdjacentHTML('afterend', '<bmo-button label="close this notification" icon-button icon-size="medium" icon="close" icon-color="granite" class="pull-right"></bmo-button>');
             setTimeout(function() {
                 const alertsCloses = document.querySelectorAll('bmo-notification > div > bmo-button > button');
                 [].forEach.call(alertsCloses, function(alertsClose) {
                     alertsClose.addEventListener('click', function() {
                         this.parentElement.parentElement.parentElement.style.display = "none";
                     });
                 });
             }, 200);
         }
         if (this.hasAttribute('alert')) {
             this.setAttribute('role', 'alert');
         }

         alertsTitle.textContent = this.alertTitle;
     }

 }

 customElements.define('bmo-notification', notifications);