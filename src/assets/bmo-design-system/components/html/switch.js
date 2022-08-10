export { bmoSwitches };


const bmoSwitches = document.querySelectorAll('.activate-switch');
[].forEach.call(bmoSwitches, function(bmoSwitch) {
    bmoSwitch.addEventListener('click', function() {
        this.querySelector('.bmo-switch-rail').classList.toggle('active');
        this.querySelector('.bmo-switch').classList.toggle('active');
        this.previousElementSibling.toggleAttribute('checked');

    });
    bmoSwitch.addEventListener('keyup', function(event) {
        let key = event.keyCode;
        switch (key) {
            case 32:
                event.preventDefault();
                this.querySelector('.bmo-switch').blur();
                this.querySelector('.bmo-switch-rail').classList.toggle('active');
                this.querySelector('.bmo-switch').classList.toggle('active');
                // this.querySelector('.input').toggleAttribute('checked');
                this.previousElementSibling.toggleAttribute('checked');
                this.querySelector('.bmo-switch').focus();
                break;
            case 13:
                this.querySelector('.bmo-switch-rail').classList.toggle('active');
                this.querySelector('.bmo-switch').classList.toggle('active');
                this.previousElementSibling.toggleAttribute('checked');
                this.querySelector('.bmo-switch').blur();
                this.querySelector('.bmo-switch').focus();
                break;
            default:
                break;
        }
    });
});