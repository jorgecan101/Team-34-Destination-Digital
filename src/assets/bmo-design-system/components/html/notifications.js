export { alertsCloses };

const alertsCloses = document.querySelectorAll('button.alert-close');
[].forEach.call(alertsCloses, function(alertsClose) {
    alertsClose.addEventListener('click', function() {
        this.parentElement.parentElement.style.display = "none";
    });
});