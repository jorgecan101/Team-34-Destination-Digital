var openPopovers = document.querySelectorAll('.popover-trigger');
var closePopovers = document.querySelectorAll('.close-popover');
var allPopovers = document.querySelectorAll('.popover');
[].forEach.call(openPopovers, function(openPopover) {
    openPopover.addEventListener('click', function() {
        [].forEach.call(allPopovers, function(allpopover) {
            allpopover.classList.remove('active');
        });
        document.querySelector('.bmo-overlay-light').classList.add('active');
        this.nextElementSibling.classList.add('active');
        this.nextElementSibling.setAttribute('tabindex', '0');
        setTimeout(function() {
            document.querySelector('.popover.active').focus()
        }, 200);
    });
});
[].forEach.call(closePopovers, function(closePopover) {
    closePopover.addEventListener('click', function() {
        this.parentElement.classList.remove('active');
        this.parentElement.setAttribute('tabindex', '-1');
        document.querySelector('.bmo-overlay-light.active').classList.remove('active');
    });
});
document.querySelector('.bmo-overlay-light').addEventListener('click', function() {
    this.classList.remove('active');
    document.querySelector('.popover.active').classList.remove('active');
});