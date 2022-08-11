const accordionToggles = document.querySelectorAll('.accordion-trigger');

[].forEach.call(accordionToggles, function(accordionToggle) {
    accordionToggle.addEventListener('click', function() {
        const accIcon = this.querySelector('.icon');
        const accContent = this.nextElementSibling.querySelector('.panel-content');
        this.classList.toggle('expanded');
        accIcon.classList.toggle('expanded');
        this.nextElementSibling.classList.toggle('expanded');
        // const nextPanel = this.nextElementSibling;
        const panelHeight = accContent.offsetHeight;
        if (this.nextElementSibling.classList.contains('expanded')) {
            this.nextElementSibling.style.height = panelHeight + 32 + 'px';
        } else {

            this.nextElementSibling.style.height = '0';
        }

    });
    accordionToggle.addEventListener('keydown', function() {
        let key = event.keyCode;
        switch (key) {
            case 40:
                const accIcon = this.querySelector('.icon');
                const accContent = this.nextElementSibling.querySelector('.panel-content');
                this.classList.add('expanded');
                accIcon.classList.add('expanded');
                this.nextElementSibling.classList.add('expanded');
                const panelHeight = accContent.offsetHeight;
                this.nextElementSibling.style.height = panelHeight + 32 + 'px';
                this.setAttribute('aria-expanded', 'true');

                break;
            default:
                break;
        }
    });
    accordionToggle.addEventListener('keydown', function() {
        let key = event.keyCode;
        switch (key) {
            case 38:
                const accIcon = this.querySelector('.icon');
                const accContent = this.nextElementSibling.querySelector('.panel-content');
                this.classList.remove('expanded');
                accIcon.classList.remove('expanded');
                this.nextElementSibling.classList.remove('expanded');
                const panelHeight = accContent.offsetHeight;
                this.nextElementSibling.style.height = '0';
                this.setAttribute('aria-expanded', 'false');

                break;
            default:
                break;
        }
    });
});