import { Component, ContentChildren, HostBinding, Input, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { BmoNgRadioButtonComponent } from './bmo-ng-radio-button.component';
export class BmoNgRadioButtonContainerComponent {
    constructor(ngControl) {
        this.ngControl = ngControl;
        this.radioGroupClass = true;
        this.radioGroupNum = this.randomInterval(0, 1000);
        this.type = 'traditional';
        this.name = 'radio-group-' + this.radioGroupNum;
        // States
        this.disabled = false;
        this.onChange = (val) => { };
        this.onTouched = () => { };
        this._clickListener = (event) => {
            this.writeValue('');
            event.stopPropagation();
        };
        if (this.ngControl) {
            this.ngControl.valueAccessor = this;
        }
    }
    get error() {
        return this.ngControl ? (this.ngControl.invalid && this.ngControl.dirty) : false;
    }
    ngOnInit() {
    }
    ngAfterContentInit() {
        const radioButtons = this.radioButtons.toArray();
        for (let i = 0; i < radioButtons.length; i++) {
            const radioButton = radioButtons[i];
            radioButton.name = this.name;
            radioButton.type = this.type;
            radioButton.disabled = this.disabled;
            if (!radioButton.id) {
                radioButton.id = 'radio-' + this.radioGroupNum + '-' + (i + 1);
            }
            if (!radioButton.value) {
                radioButton.value = String(i);
            }
            radioButton.inputElement.addEventListener('click', this._clickListener);
        }
    }
    ngOnDestroy() {
        for (const radioButton of this.radioButtons) {
            radioButton.inputElement.removeEventListener('click', this._clickListener);
        }
    }
    writeValue(obj) {
        if (!this.radioButtons) {
            this.onChange(obj);
            return;
        }
        for (const radioButton of this.radioButtons.toArray()) {
            if (radioButton.inputElement.checked) {
                this.onChange(radioButton.value);
                return;
            }
        }
        this.onChange(obj);
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    randomInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}
BmoNgRadioButtonContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'bmo-ng-radio-button-wrap',
                template: "<fieldset class=\"input-wrap input-radio\" [disabled]=\"disabled\">\n    <legend *ngIf=\"legend\" class=\"legend\">{{legend}}</legend>\n    <ng-content select=\"bmo-ng-radio-button\"></ng-content>\n    <span *ngIf=\"error\" class=\"error-message has-error\" role=\"alert\">{{errorMessage}}</span>\n</fieldset>",
                styles: [""]
            },] }
];
BmoNgRadioButtonContainerComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] }
];
BmoNgRadioButtonContainerComponent.propDecorators = {
    radioGroupClass: [{ type: HostBinding, args: ['class.radio-group',] }],
    radioButtons: [{ type: ContentChildren, args: [BmoNgRadioButtonComponent,] }],
    legend: [{ type: Input }],
    type: [{ type: Input }],
    name: [{ type: Input }],
    errorMessage: [{ type: Input }],
    disabled: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm1vLW5nLXJhZGlvLWJ1dHRvbi1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IkM6L0JNT3NvdXJjZWZpbGVzL2Jtby1kcy1hbmd1bGFyL2Jtby1kcy1hbmd1bGFyL3Byb2plY3RzL2Jtby1kcy1hbmd1bGFyLWNvbXBvbmVudHMvc3JjLyIsInNvdXJjZXMiOlsibGliL2Jtby1kZXNpZ24tc3lzdGVtL2Jtby1uZy1yYWRpby1idXR0b24vYm1vLW5nLXJhZGlvLWJ1dHRvbi1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBb0IsU0FBUyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFxQixRQUFRLEVBQWEsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9JLE9BQU8sRUFBd0IsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFPNUUsTUFBTSxPQUFPLGtDQUFrQztJQXFCN0MsWUFBd0MsU0FBb0I7UUFBcEIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQXBCMUIsb0JBQWUsR0FBRyxJQUFJLENBQUM7UUFHakQsa0JBQWEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUc1QyxTQUFJLEdBQTBCLGFBQWEsQ0FBQztRQUM1QyxTQUFJLEdBQUcsY0FBYyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFHcEQsU0FBUztRQUNBLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFNMUIsYUFBUSxHQUFHLENBQUMsR0FBVyxFQUFFLEVBQUUsR0FBRSxDQUFDLENBQUM7UUFDL0IsY0FBUyxHQUFHLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztRQStEYixtQkFBYyxHQUFHLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDakMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENB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QUFDLENBQUM7SUFDM0QsQ0FBQzs7O1lBN0ZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxpVUFBNkQ7O2FBRTlEOzs7WUFQOEIsU0FBUyx1QkE2QnpCLFFBQVEsWUFBSSxJQUFJOzs7OEJBcEI1QixXQUFXLFNBQUMsbUJBQW1COzJCQUMvQixlQUFlLFNBQUMseUJBQXlCO3FCQUl6QyxLQUFLO21CQUNMLEtBQUs7bUJBQ0wsS0FBSzsyQkFDTCxLQUFLO3VCQUdMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBDb21wb25lbnQsIENvbnRlbnRDaGlsZHJlbiwgSG9zdEJpbmRpbmcsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3B0aW9uYWwsIFF1ZXJ5TGlzdCwgU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEJtb05nUmFkaW9CdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2Jtby1uZy1yYWRpby1idXR0b24uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYm1vLW5nLXJhZGlvLWJ1dHRvbi13cmFwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Jtby1uZy1yYWRpby1idXR0b24tY29udGFpbmVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYm1vLW5nLXJhZGlvLWJ1dHRvbi1jb250YWluZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBCbW9OZ1JhZGlvQnV0dG9uQ29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyQ29udGVudEluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5yYWRpby1ncm91cCcpIHJhZGlvR3JvdXBDbGFzcyA9IHRydWU7XG4gIEBDb250ZW50Q2hpbGRyZW4oQm1vTmdSYWRpb0J1dHRvbkNvbXBvbmVudCkgcmFkaW9CdXR0b25zOiBRdWVyeUxpc3Q8Qm1vTmdSYWRpb0J1dHRvbkNvbXBvbmVudD47XG5cbiAgcHJpdmF0ZSByYWRpb0dyb3VwTnVtID0gdGhpcy5yYW5kb21JbnRlcnZhbCgwLCAxMDAwKTtcblxuICBASW5wdXQoKSBsZWdlbmQ6IHN0cmluZztcbiAgQElucHV0KCkgdHlwZTogJ3RyYWRpdGlvbmFsJyB8ICdib3gnID0gJ3RyYWRpdGlvbmFsJztcbiAgQElucHV0KCkgbmFtZSA9ICdyYWRpby1ncm91cC0nICsgdGhpcy5yYWRpb0dyb3VwTnVtO1xuICBASW5wdXQoKSBlcnJvck1lc3NhZ2U6IHN0cmluZztcblxuICAvLyBTdGF0ZXNcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcblxuICBnZXQgZXJyb3IoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubmdDb250cm9sID8gKHRoaXMubmdDb250cm9sLmludmFsaWQgJiYgdGhpcy5uZ0NvbnRyb2wuZGlydHkpIDogZmFsc2U7XG4gIH1cblxuICBvbkNoYW5nZSA9ICh2YWw6IHN0cmluZykgPT4ge307XG4gIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTZWxmKCkgcHJpdmF0ZSBuZ0NvbnRyb2w6IE5nQ29udHJvbCkge1xuICAgIGlmICh0aGlzLm5nQ29udHJvbCkge1xuICAgICAgdGhpcy5uZ0NvbnRyb2wudmFsdWVBY2Nlc3NvciA9IHRoaXM7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgcmFkaW9CdXR0b25zID0gdGhpcy5yYWRpb0J1dHRvbnMudG9BcnJheSgpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByYWRpb0J1dHRvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHJhZGlvQnV0dG9uID0gcmFkaW9CdXR0b25zW2ldO1xuICAgICAgcmFkaW9CdXR0b24ubmFtZSA9IHRoaXMubmFtZTtcbiAgICAgIHJhZGlvQnV0dG9uLnR5cGUgPSB0aGlzLnR5cGU7XG4gICAgICByYWRpb0J1dHRvbi5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWQ7XG5cbiAgICAgIGlmICghcmFkaW9CdXR0b24uaWQpIHtcbiAgICAgICAgcmFkaW9CdXR0b24uaWQgPSAncmFkaW8tJyArIHRoaXMucmFkaW9Hcm91cE51bSArICctJyArIChpICsgMSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghcmFkaW9CdXR0b24udmFsdWUpIHtcbiAgICAgICAgcmFkaW9CdXR0b24udmFsdWUgPSBTdHJpbmcoaSk7XG4gICAgICB9XG5cbiAgICAgIHJhZGlvQnV0dG9uLmlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2NsaWNrTGlzdGVuZXIpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGZvciAoY29uc3QgcmFkaW9CdXR0b24gb2YgdGhpcy5yYWRpb0J1dHRvbnMpIHtcbiAgICAgIHJhZGlvQnV0dG9uLmlucHV0RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2NsaWNrTGlzdGVuZXIpO1xuICAgIH1cbiAgfVxuXG4gIHdyaXRlVmFsdWUob2JqOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucmFkaW9CdXR0b25zKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKG9iaik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCByYWRpb0J1dHRvbiBvZiB0aGlzLnJhZGlvQnV0dG9ucy50b0FycmF5KCkpIHtcbiAgICAgIGlmIChyYWRpb0J1dHRvbi5pbnB1dEVsZW1lbnQuY2hlY2tlZCkge1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKHJhZGlvQnV0dG9uLnZhbHVlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMub25DaGFuZ2Uob2JqKTtcbiAgfVxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cbiAgc2V0RGlzYWJsZWRTdGF0ZT8oaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2xpY2tMaXN0ZW5lciA9IChldmVudCkgPT4ge1xuICAgIHRoaXMud3JpdGVWYWx1ZSgnJyk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbiAgcHJpdmF0ZSByYW5kb21JbnRlcnZhbChtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xuICB9XG59XG4iXX0=