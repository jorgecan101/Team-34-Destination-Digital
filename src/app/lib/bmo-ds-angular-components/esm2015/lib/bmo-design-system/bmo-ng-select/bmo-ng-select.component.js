import { Component, Input, Optional, Self, ViewChild } from '@angular/core';
import { NgControl } from '@angular/forms';
export class BmoNgSelectComponent {
    constructor(ngControl) {
        this.ngControl = ngControl;
        this.label = '';
        this.helperText = '';
        this.errorMessage = '';
        this.autofocus = false;
        // States
        this.disabled = false;
        this.readonly = false;
        this.mercury = false;
        this.onChange = (val) => { };
        this.onTouched = () => { };
        this.onValidatorChange = () => { };
        if (this.ngControl) {
            this.ngControl.valueAccessor = this;
        }
    }
    get error() {
        return this.ngControl ? (this.ngControl.invalid && this.ngControl.dirty) : false;
    }
    ngOnInit() {
        this.labelId = this.label.replace(/\s+/g, '-').toLowerCase();
    }
    ngAfterViewInit() {
        if (this.autofocus) {
            this.selectElement.nativeElement.focus();
        }
    }
    writeValue(val) {
        this.value = val;
        this.onChange(val);
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
}
BmoNgSelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'bmo-ng-select',
                template: "<div class=\"form-field\" [class.mercury]=\"mercury\">\n    <div class=\"form-label-group\">\n        <select #selectElement class=\"select\" [class.error]=\"error\" [disabled]=\"disabled\" [attr.readonly]=\"readonly || null\" name=\"{{labelId}}\" id=\"{{labelId}}\" [value]=\"value\" [attr.aria-describedby]=\"'error-' + labelId\" (change)=\"writeValue($event.srcElement.value)\">\n            <ng-content select=\"option\"></ng-content>\n        </select>\n        <label for=\"{{labelId}}\" class=\"slide-label select-label\" [class.active-label]=\"\" [class.error-field]=\"error\" [class.disabled]=\"disabled\">\n            <span class=\"label-text\">{{label}}</span>\n        </label>\n        <bmo-icon small icon=\"baby-chevy-down\"></bmo-icon>\n        <span id=\"error-{{labelId}}\" class=\"error-message select-error\" [class.error]=\"error\" role=\"alert\">{{errorMessage}}</span>\n        <span id=\"helper-{{labelId}}\" class=\"input-helper-text select-helper\">{{helperText}}</span>\n    </div>\n</div>",
                styles: [""]
            },] }
];
BmoNgSelectComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] }
];
BmoNgSelectComponent.propDecorators = {
    selectElement: [{ type: ViewChild, args: ['selectElement',] }],
    label: [{ type: Input }],
    helperText: [{ type: Input }],
    errorMessage: [{ type: Input }],
    autofocus: [{ type: Input }],
    disabled: [{ type: Input }],
    readonly: [{ type: Input }],
    mercury: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm1vLW5nLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiQzovQk1Pc291cmNlZmlsZXMvYm1vLWRzLWFuZ3VsYXIvYm1vLWRzLWFuZ3VsYXIvcHJvamVjdHMvYm1vLWRzLWFuZ3VsYXItY29tcG9uZW50cy9zcmMvIiwic291cmNlcyI6WyJsaWIvYm1vLWRlc2lnbi1zeXN0ZW0vYm1vLW5nLXNlbGVjdC9ibW8tbmctc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBMEIsS0FBSyxFQUFVLFFBQVEsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNILE9BQU8sRUFBeUMsU0FBUyxFQUFpRSxNQUFNLGdCQUFnQixDQUFDO0FBT2pKLE1BQU0sT0FBTyxvQkFBb0I7SUF3Qi9CLFlBQXdDLFNBQW9CO1FBQXBCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFyQm5ELFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFFM0IsU0FBUztRQUNBLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBS3pCLGFBQVEsR0FBRyxDQUFDLEdBQVcsRUFBRSxFQUFFLEdBQUUsQ0FBQyxDQUFDO1FBQy9CLGNBQVMsR0FBRyxHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUM7UUFDckIsc0JBQWlCLEdBQUcsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO1FBTzNCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7U0FDckM7SUFDSCxDQUFDO0lBUkQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNuRixDQUFDO0lBUUQsUUFBUTtRQUNOLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQy9ELENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQzFDO0lBQ0gsQ0FBQztJQUVELFVBQVUsQ0FBQyxHQUFXO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUNELGdCQUFnQixDQUFDLEVBQU87UUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUNELGlCQUFpQixDQUFDLEVBQU87UUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUNELGdCQUFnQixDQUFFLFVBQW1CO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO0lBQzdCLENBQUM7OztZQXpERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLHFnQ0FBNkM7O2FBRTlDOzs7WUFOK0MsU0FBUyx1QkErQjFDLFFBQVEsWUFBSSxJQUFJOzs7NEJBdkI1QixTQUFTLFNBQUMsZUFBZTtvQkFFekIsS0FBSzt5QkFDTCxLQUFLOzJCQUNMLEtBQUs7d0JBQ0wsS0FBSzt1QkFHTCxLQUFLO3VCQUNMLEtBQUs7c0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgZm9yd2FyZFJlZiwgSW5wdXQsIE9uSW5pdCwgT3B0aW9uYWwsIFNlbGYsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBDb250cm9sVmFsdWVBY2Nlc3NvciwgTmdDb250cm9sLCBOR19WQUxJREFUT1JTLCBOR19WQUxVRV9BQ0NFU1NPUiwgVmFsaWRhdGlvbkVycm9ycywgVmFsaWRhdG9yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdibW8tbmctc2VsZWN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Jtby1uZy1zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9ibW8tbmctc2VsZWN0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQm1vTmdTZWxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgQFZpZXdDaGlsZCgnc2VsZWN0RWxlbWVudCcpIHNlbGVjdEVsZW1lbnQ6IEVsZW1lbnRSZWY7XG5cbiAgQElucHV0KCkgbGFiZWwgPSAnJztcbiAgQElucHV0KCkgaGVscGVyVGV4dCA9ICcnO1xuICBASW5wdXQoKSBlcnJvck1lc3NhZ2UgPSAnJztcbiAgQElucHV0KCkgYXV0b2ZvY3VzID0gZmFsc2U7XG5cbiAgLy8gU3RhdGVzXG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIHJlYWRvbmx5ID0gZmFsc2U7XG4gIEBJbnB1dCgpIG1lcmN1cnkgPSBmYWxzZTtcblxuICBwdWJsaWMgbGFiZWxJZDogc3RyaW5nO1xuICBwdWJsaWMgdmFsdWU6IHN0cmluZztcblxuICBvbkNoYW5nZSA9ICh2YWw6IHN0cmluZykgPT4ge307XG4gIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuICBvblZhbGlkYXRvckNoYW5nZSA9ICgpID0+IHt9O1xuXG4gIGdldCBlcnJvcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uZ0NvbnRyb2wgPyAodGhpcy5uZ0NvbnRyb2wuaW52YWxpZCAmJiB0aGlzLm5nQ29udHJvbC5kaXJ0eSkgOiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTZWxmKCkgcHJpdmF0ZSBuZ0NvbnRyb2w6IE5nQ29udHJvbCkge1xuICAgIGlmICh0aGlzLm5nQ29udHJvbCkge1xuICAgICAgdGhpcy5uZ0NvbnRyb2wudmFsdWVBY2Nlc3NvciA9IHRoaXM7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5sYWJlbElkID0gdGhpcy5sYWJlbC5yZXBsYWNlKC9cXHMrL2csICctJykudG9Mb3dlckNhc2UoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hdXRvZm9jdXMpIHtcbiAgICAgIHRoaXMuc2VsZWN0RWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWw6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB2YWw7XG4gICAgdGhpcy5vbkNoYW5nZSh2YWwpO1xuICB9XG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuICBzZXREaXNhYmxlZFN0YXRlPyhpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gIH1cbn1cbiJdfQ==