import { Component, Input, Optional, Self, ViewChild } from '@angular/core';
import { NgControl } from '@angular/forms';
export class BmoNgTextFieldComponent {
    constructor(ngControl) {
        this.ngControl = ngControl;
        this.id = 'text-field-1';
        this.placeholder = "Placeholder";
        this.errorMessage = '';
        this.type = 'text';
        this.readonly = false;
        this.autofocus = false;
        this.mercury = false;
        this.disabled = false;
        this.value = '';
        this.onChange = (val) => { };
        this.onTouched = () => { };
        if (this.ngControl) {
            this.ngControl.valueAccessor = this;
        }
    }
    get error() {
        return this.ngControl ? (this.ngControl.invalid && this.ngControl.dirty) : false;
    }
    writeValue(obj) {
        this.value = obj;
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
    ngOnInit() {
    }
    ngAfterViewInit() {
        if (this.autofocus) {
            this.inputElement.nativeElement.focus();
        }
    }
}
BmoNgTextFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'bmo-ng-text-field',
                template: "<div class=\"form-field\" [class.mercury]=\"mercury\">\r\n    <div class=\"form-label-group\">\r\n        <input #inputElement id=\"{{id}}\" class=\"input text\" name=\"{{id}}\" type=\"{{type}}\" [attr.maxlength]=\"maxLength || null\" [disabled]=\"disabled\" [value]=\"value\" (input)=\"writeValue($event.srcElement.value)\">\r\n        <label class=\"slide-label\" [class.active-label]=\"value?.length > 0\" [class.error-field]=\"error\" [class.disabled]=\"disabled\" for=\"{{id}}\">\r\n\t\t    <span class=\"label-text\">{{placeholder}}</span>\r\n\t\t</label>\r\n        <span *ngIf=\"error\" class=\"error-message error\" role=\"alert\">{{errorMessage}}</span>\r\n        <span *ngIf=\"helperText\" class=\"input-helper-text\">{{helperText}}</span>\r\n    </div>\r\n</div>\r\n",
                styles: [""]
            },] }
];
BmoNgTextFieldComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] }
];
BmoNgTextFieldComponent.propDecorators = {
    inputElement: [{ type: ViewChild, args: ['inputElement',] }],
    id: [{ type: Input }],
    placeholder: [{ type: Input }],
    helperText: [{ type: Input }],
    errorMessage: [{ type: Input }],
    type: [{ type: Input }],
    maxLength: [{ type: Input }],
    readonly: [{ type: Input }],
    autofocus: [{ type: Input }],
    mercury: [{ type: Input }],
    disabled: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm1vLW5nLXRleHQtZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IkM6L0JNT3NvdXJjZWZpbGVzL2Jtby1kcy1hbmd1bGFyL2Jtby1kcy1hbmd1bGFyL3Byb2plY3RzL2Jtby1kcy1hbmd1bGFyLWNvbXBvbmVudHMvc3JjLyIsInNvdXJjZXMiOlsibGliL2Jtby1kZXNpZ24tc3lzdGVtL2Jtby1uZy10ZXh0LWZpZWxkL2Jtby1uZy10ZXh0LWZpZWxkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBNkIsTUFBTSxlQUFlLENBQUM7QUFDL0csT0FBTyxFQUFFLFNBQVMsRUFBd0IsTUFBTSxnQkFBZ0IsQ0FBQztBQU9qRSxNQUFNLE9BQU8sdUJBQXVCO0lBd0JsQyxZQUF3QyxTQUFvQjtRQUFwQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBckJuRCxPQUFFLEdBQUcsY0FBYyxDQUFDO1FBQ3BCLGdCQUFXLEdBQUcsYUFBYSxDQUFDO1FBRTVCLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLFNBQUksR0FBd0QsTUFBTSxDQUFDO1FBR25FLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFbkIsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQU1sQixhQUFRLEdBQUcsQ0FBQyxHQUFXLEVBQUUsRUFBRSxHQUFFLENBQUMsQ0FBQztRQUMvQixjQUFTLEdBQUcsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO1FBR25CLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7U0FDckM7SUFDSCxDQUFDO0lBWEQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNuRixDQUFDO0lBV0QsVUFBVSxDQUFDLEdBQVE7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBQ0QsZ0JBQWdCLENBQUMsRUFBTztRQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBQ0QsaUJBQWlCLENBQUMsRUFBTztRQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBQ0QsZ0JBQWdCLENBQUUsVUFBbUI7UUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7SUFDN0IsQ0FBQztJQUVELFFBQVE7SUFDUixDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN6QztJQUNILENBQUM7OztZQXhERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsdXhCQUFpRDs7YUFFbEQ7OztZQU5RLFNBQVMsdUJBK0JILFFBQVEsWUFBSSxJQUFJOzs7MkJBdkI1QixTQUFTLFNBQUMsY0FBYztpQkFFeEIsS0FBSzswQkFDTCxLQUFLO3lCQUNMLEtBQUs7MkJBQ0wsS0FBSzttQkFDTCxLQUFLO3dCQUNMLEtBQUs7dUJBRUwsS0FBSzt3QkFDTCxLQUFLO3NCQUNMLEtBQUs7dUJBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3B0aW9uYWwsIFNlbGYsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ0NvbnRyb2wsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdibW8tbmctdGV4dC1maWVsZCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Jtby1uZy10ZXh0LWZpZWxkLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9ibW8tbmctdGV4dC1maWVsZC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCbW9OZ1RleHRGaWVsZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xyXG4gIEBWaWV3Q2hpbGQoJ2lucHV0RWxlbWVudCcpIGlucHV0RWxlbWVudDogRWxlbWVudFJlZjtcclxuXHJcbiAgQElucHV0KCkgaWQgPSAndGV4dC1maWVsZC0xJztcclxuICBASW5wdXQoKSBwbGFjZWhvbGRlciA9IFwiUGxhY2Vob2xkZXJcIjtcclxuICBASW5wdXQoKSBoZWxwZXJUZXh0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZXJyb3JNZXNzYWdlID0gJyc7XHJcbiAgQElucHV0KCkgdHlwZTogJ2VtYWlsJyB8ICdoaWRkZW4nIHwgJ251bWJlcicgfCAncGFzc3dvcmQnIHwgJ3RleHQnID0gJ3RleHQnO1xyXG4gIEBJbnB1dCgpIG1heExlbmd0aDogbnVtYmVyO1xyXG5cclxuICBASW5wdXQoKSByZWFkb25seSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGF1dG9mb2N1cyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG1lcmN1cnkgPSBmYWxzZTtcclxuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgdmFsdWUgPSAnJztcclxuXHJcbiAgZ2V0IGVycm9yKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMubmdDb250cm9sID8gKHRoaXMubmdDb250cm9sLmludmFsaWQgJiYgdGhpcy5uZ0NvbnRyb2wuZGlydHkpIDogZmFsc2U7XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZSA9ICh2YWw6IHN0cmluZykgPT4ge307XHJcbiAgb25Ub3VjaGVkID0gKCkgPT4ge307XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTZWxmKCkgcHJpdmF0ZSBuZ0NvbnRyb2w6IE5nQ29udHJvbCkge1xyXG4gICAgaWYgKHRoaXMubmdDb250cm9sKSB7XHJcbiAgICAgIHRoaXMubmdDb250cm9sLnZhbHVlQWNjZXNzb3IgPSB0aGlzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZShvYmo6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZSA9IG9iajtcclxuICAgIHRoaXMub25DaGFuZ2Uob2JqKTtcclxuICB9XHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG4gIHNldERpc2FibGVkU3RhdGU/KGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5hdXRvZm9jdXMpIHtcclxuICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19