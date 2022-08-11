//inputs detect if empty

(function() {
    var elems = document.querySelectorAll('input, select, textarea');
    elems = Array.prototype.slice.call(elems);

    elems.forEach(function(el) {
        if (el.type !== 'radio') {
            setActiveLabel.call(el);
            el.addEventListener('change', setActiveLabel);
        }
    });
})();

function setActiveLabel() {
    this.nextElementSibling.classList[(this.value.length ? 'add' : 'remove')]('active-label');
}

document.addEventListener('input', e => {
    if (e.target.tagName.toLowerCase() !== 'textarea') return;
    e.target.autoExpand();
}, false);

HTMLTextAreaElement.prototype.autoExpand = function() {
    // Reset field height (breaks CSS transition)
    this.style.height = 'inherit';
    var height = this.scrollHeight;

    this.style.height = height + 'px';
};

HTMLTextAreaElement.prototype.dynamicValue = function(value) {
    this.value = value;
    this.autoExpand();
};