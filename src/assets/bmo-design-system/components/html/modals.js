//store focusable elements in a variable
var focusableEl = document.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), label, li[role="tab"]:not([disabled]), div[role="tabpanel"]:not([disabled])');
var modalTriggers = document.querySelectorAll('.modal-trigger');
var modalsCLose = document.querySelectorAll('.modal-close');
//set escape key to close modal
document.addEventListener('keyup', function(event) {
    if (event.defaultPrevented) {
        return;
    }
    var key = event.key || event.keyCode;
    if (key === 'Escape' || key === 'Esc' || key === 27) {
        document.querySelector('.bmo-overlay-dark').classList.remove('active');
        document.querySelector('.modal.active').setAttribute('tabIndex', '-1');
        document.querySelector('.modal.active').classList.toggle('active');
    }
});
//trigger modal with .modal-trigger class
[].forEach.call(modalTriggers, function(modalTrigger) {
    modalTrigger.addEventListener('click', function(event) {
        this.nextElementSibling.classList.add('active');
        this.nextElementSibling.setAttribute('tabIndex', '0');
        document.querySelector('.bmo-overlay-dark').classList.toggle('active');
        focusableEl.forEach((function(x) { x.setAttribute("tabindex", "-1"); }));
        setTimeout(function() {
            document.querySelector('.modal.active').focus();
            //focusableEls.innerHTML.setAttribute('tabIndex', '-1');
            document.querySelectorAll('.modal a[href]:not([disabled]), .modal button:not([disabled]), .modal textarea:not([disabled]), .modal input[type="text"]:not([disabled]), .modal input[type="radio"]:not([disabled]), .modal input[type="checkbox"]:not([disabled]), .modal select:not([disabled]), .modal label, .modal li[role="tab"]:not([disabled]), .modal div[role="tabpanel"]:not([disabled])').forEach((function(x) { x.removeAttribute("tabindex", "-1"); }));

        }, 100);

    });
});
[].forEach.call(modalsCLose, function(modal) {
    modal.addEventListener('click', function() {
        document.querySelector('.bmo-overlay-dark').classList.remove('active');
        document.querySelector('.modal.active').setAttribute('tabIndex', '-1');
        document.querySelector('.modal.active').classList.remove('active');
        focusableEl.forEach((function(x) { x.removeAttribute("tabindex", "-1"); }))
    });
});
document.querySelector('.bmo-overlay-dark').addEventListener('click', function() {
    document.querySelector('.bmo-overlay-dark').classList.remove('active');
    document.querySelector('.modal.active').setAttribute('tabIndex', '-1');
    document.querySelector('.modal.active').classList.toggle('active');
    focusableEl.forEach((function(x) { x.removeAttribute("tabindex", "-1"); }));
});