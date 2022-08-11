export { Password };
class Password {
    constructor(field, matchWith) {
        this.field = field;
        this.container = field.parentElement;
        this.matchWith = matchWith;

        const xMinEight = this.container.querySelector('.min-eight');
        const xOneNum = this.container.querySelector('.one-num');
        const xSpecChar = this.container.querySelector('.special-char');
        const xLowerCase = this.container.querySelector('.lower-case');
        const xUpperCase = this.container.querySelector('.upper-case');
        const xMatching = this.container.querySelector('.matching');

        if (matchWith) xMatching.style.display = 'block';

        this.field.addEventListener('keyup', () => {
            if (this.field.value.length) {
                this.chkEightChars(xMinEight);
                this.chkNum(xOneNum);
                this.chkSpecialChar(xSpecChar);
                this.chkLowerCase(xLowerCase);
                this.chkUpperCase(xUpperCase);
                if (matchWith) this.chkMatching(xMatching);
            } else {
                [xMinEight, xOneNum, xSpecChar, xLowerCase, xUpperCase, xMatching].forEach(x => {
                    x.classList.remove('fail');
                    x.classList.remove('pass');
                });
            }
        });
    }

    static pass(tick) {
        tick.classList.remove('fail');
        tick.classList.add('pass');
    }

    static fail(tick) {
        tick.classList.remove('pass');
        tick.classList.add('fail');
    }

    chkEightChars(x) {
        Password[(this.field.value.length > 7) ? 'pass' : 'fail'](x);
    }

    chkNum(x) {
        Password[(/[0-9]/gi.test(this.field.value)) ? 'pass' : 'fail'](x);
    }

    chkSpecialChar(x) {
        Password[(/(.*\W)/g.test(this.field.value)) ? 'pass' : 'fail'](x);
    }

    chkLowerCase(x) {
        Password[(/[a-z]/g.test(this.field.value)) ? 'pass' : 'fail'](x);
    }

    chkUpperCase(x) {
        Password[(/[A-Z]/g.test(this.field.value)) ? 'pass' : 'fail'](x);
    }

    chkMatching(x) {
        Password[(this.matchWith.value === this.field.value) ? 'pass' : 'fail'](x);
    }
}