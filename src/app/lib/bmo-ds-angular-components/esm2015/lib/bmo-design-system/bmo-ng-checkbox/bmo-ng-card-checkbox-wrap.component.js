import { Component, ContentChildren, Input, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { BmoNgCardCheckboxComponent } from './bmo-ng-card-checkbox.component';
export class BmoNgCardCheckboxWrapComponent {
    constructor(ngControl) {
        this.ngControl = ngControl;
        this.errorMessage = '';
        this.legend = '';
        this._disabled = false;
        this.onChange = (val) => { };
        this.onTouched = () => { };
        if (ngControl) {
            ngControl.valueAccessor = this;
        }
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(disabled) {
        this._disabled = disabled;
        if (this.checkboxes) {
            for (const checkbox of this.checkboxes) {
                checkbox.disabled = this.disabled;
            }
        }
    }
    get error() {
        return this.ngControl ? (this.ngControl.invalid && this.ngControl.dirty) : false;
    }
    ngAfterContentInit() {
        for (const checkbox of this.checkboxes.toArray()) {
            checkbox.disabled = this.disabled;
            checkbox.inputElement.addEventListener('click', () => this.writeValue(''));
        }
    }
    writeValue(obj) {
        if (!this.checkboxes) {
            return this.onChange(null);
        }
        const checkboxValues = [];
        for (const checkbox of this.checkboxes.toArray()) {
            if (checkbox.checked) {
                checkboxValues.push(checkbox.value);
            }
        }
        if (checkboxValues.length === 0) {
            this.onChange(null);
        }
        this.onChange(checkboxValues);
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
BmoNgCardCheckboxWrapComponent.decorators = [
    { type: Component, args: [{
                selector: 'bmo-ng-card-checkbox-wrap',
                template: `
        <div class="check-group">
            <fieldset class="input-wrap input-checkbox">
                <legend class="legend check-legend">{{legend}}</legend>
                <div class="card-check-wrap">
                    <ng-content select="bmo-ng-card-checkbox"></ng-content>
                </div>
                <span class="error-message" [class.has-error]="error" role="alert">{{errorMessage}}</span>
            </fieldset>
        </div>
    `
            },] }
];
BmoNgCardCheckboxWrapComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] }
];
BmoNgCardCheckboxWrapComponent.propDecorators = {
    checkboxes: [{ type: ContentChildren, args: [BmoNgCardCheckboxComponent,] }],
    errorMessage: [{ type: Input }],
    legend: [{ type: Input }],
    disabled: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm1vLW5nLWNhcmQtY2hlY2tib3gtd3JhcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiQzovQk1Pc291cmNlZmlsZXMvYm1vLWRzLWFuZ3VsYXIvYm1vLWRzLWFuZ3VsYXIvcHJvamVjdHMvYm1vLWRzLWFuZ3VsYXItY29tcG9uZW50cy9zcmMvIiwic291cmNlcyI6WyJsaWIvYm1vLWRlc2lnbi1zeXN0ZW0vYm1vLW5nLWNoZWNrYm94L2Jtby1uZy1jYXJkLWNoZWNrYm94LXdyYXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBb0IsU0FBUyxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFhLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRyxPQUFPLEVBQXdCLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBZ0I5RSxNQUFNLE9BQU8sOEJBQThCO0lBMkJ2QyxZQUF3QyxTQUFvQjtRQUFwQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBeEJuRCxpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNsQixXQUFNLEdBQUcsRUFBRSxDQUFDO1FBY2IsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUUxQixhQUFRLEdBQUcsQ0FBQyxHQUFrQixFQUFFLEVBQUUsR0FBRSxDQUFDLENBQUM7UUFDdEMsY0FBUyxHQUFHLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztRQU9qQixJQUFJLFNBQVMsRUFBRTtZQUNYLFNBQVMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1NBQ2xDO0lBQ0wsQ0FBQztJQTFCRCxJQUNJLFFBQVE7UUFDUixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUNELElBQUksUUFBUSxDQUFDLFFBQWlCO1FBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBRTFCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNqQixLQUFLLE1BQU0sUUFBUSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ3BDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUNyQztTQUNKO0lBQ0wsQ0FBQztJQU1ELElBQUksS0FBSztRQUNMLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDckYsQ0FBQztJQVFELGtCQUFrQjtRQUNkLEtBQUssTUFBTSxRQUFRLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUM5QyxRQUFRLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDbEMsUUFBUSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzlFO0lBQ0wsQ0FBQztJQUVELFVBQVUsQ0FBQyxHQUFRO1FBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbEIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzlCO1FBRUQsTUFBTSxjQUFjLEdBQUcsRUFBRSxDQUFDO1FBQzFCLEtBQUssTUFBTSxRQUFRLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUM5QyxJQUFJLFFBQVEsQ0FBQyxPQUFPLEVBQUU7Z0JBQ2xCLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3ZDO1NBQ0o7UUFFRCxJQUFJLGNBQWMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdkI7UUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFDRCxnQkFBZ0IsQ0FBQyxFQUFPO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFDRCxpQkFBaUIsQ0FBQyxFQUFPO1FBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFDRCxnQkFBZ0IsQ0FBRSxVQUFtQjtRQUNqQyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztJQUUvQixDQUFDOzs7WUFqRkosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFFBQVEsRUFBRTs7Ozs7Ozs7OztLQVVUO2FBQ0o7OztZQWhCOEIsU0FBUyx1QkE0Q3ZCLFFBQVEsWUFBSSxJQUFJOzs7eUJBMUI1QixlQUFlLFNBQUMsMEJBQTBCOzJCQUUxQyxLQUFLO3FCQUNMLEtBQUs7dUJBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIENvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBJbnB1dCwgT3B0aW9uYWwsIFF1ZXJ5TGlzdCwgU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBCbW9OZ0NhcmRDaGVja2JveENvbXBvbmVudCB9IGZyb20gJy4vYm1vLW5nLWNhcmQtY2hlY2tib3guY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdibW8tbmctY2FyZC1jaGVja2JveC13cmFwJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNoZWNrLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxmaWVsZHNldCBjbGFzcz1cImlucHV0LXdyYXAgaW5wdXQtY2hlY2tib3hcIj5cclxuICAgICAgICAgICAgICAgIDxsZWdlbmQgY2xhc3M9XCJsZWdlbmQgY2hlY2stbGVnZW5kXCI+e3tsZWdlbmR9fTwvbGVnZW5kPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY2hlY2std3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImJtby1uZy1jYXJkLWNoZWNrYm94XCI+PC9uZy1jb250ZW50PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImVycm9yLW1lc3NhZ2VcIiBbY2xhc3MuaGFzLWVycm9yXT1cImVycm9yXCIgcm9sZT1cImFsZXJ0XCI+e3tlcnJvck1lc3NhZ2V9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIEJtb05nQ2FyZENoZWNrYm94V3JhcENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcclxuICAgIEBDb250ZW50Q2hpbGRyZW4oQm1vTmdDYXJkQ2hlY2tib3hDb21wb25lbnQpIGNoZWNrYm94ZXM6IFF1ZXJ5TGlzdDxCbW9OZ0NhcmRDaGVja2JveENvbXBvbmVudD47XHJcblxyXG4gICAgQElucHV0KCkgZXJyb3JNZXNzYWdlID0gJyc7XHJcbiAgICBASW5wdXQoKSBsZWdlbmQgPSAnJztcclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZGlzYWJsZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xyXG4gICAgfVxyXG4gICAgc2V0IGRpc2FibGVkKGRpc2FibGVkOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fZGlzYWJsZWQgPSBkaXNhYmxlZDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tib3hlcykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNoZWNrYm94IG9mIHRoaXMuY2hlY2tib3hlcykge1xyXG4gICAgICAgICAgICAgICAgY2hlY2tib3guZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgICBvbkNoYW5nZSA9ICh2YWw6IEFycmF5PHN0cmluZz4pID0+IHt9O1xyXG4gICAgb25Ub3VjaGVkID0gKCkgPT4ge307XHJcblxyXG4gICAgZ2V0IGVycm9yKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5nQ29udHJvbCA/ICh0aGlzLm5nQ29udHJvbC5pbnZhbGlkICYmIHRoaXMubmdDb250cm9sLmRpcnR5KSA6IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTZWxmKCkgcHJpdmF0ZSBuZ0NvbnRyb2w6IE5nQ29udHJvbCkge1xyXG4gICAgICAgIGlmIChuZ0NvbnRyb2wpIHtcclxuICAgICAgICAgICAgbmdDb250cm9sLnZhbHVlQWNjZXNzb3IgPSB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBjaGVja2JveCBvZiB0aGlzLmNoZWNrYm94ZXMudG9BcnJheSgpKSB7XHJcbiAgICAgICAgICAgIGNoZWNrYm94LmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZDtcclxuICAgICAgICAgICAgY2hlY2tib3guaW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy53cml0ZVZhbHVlKCcnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHdyaXRlVmFsdWUob2JqOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2hlY2tib3hlcykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vbkNoYW5nZShudWxsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGNoZWNrYm94VmFsdWVzID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCBjaGVja2JveCBvZiB0aGlzLmNoZWNrYm94ZXMudG9BcnJheSgpKSB7XHJcbiAgICAgICAgICAgIGlmIChjaGVja2JveC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICBjaGVja2JveFZhbHVlcy5wdXNoKGNoZWNrYm94LnZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNoZWNrYm94VmFsdWVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLm9uQ2hhbmdlKG51bGwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZShjaGVja2JveFZhbHVlcyk7XHJcbiAgICB9XHJcbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgICB9XHJcbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuICAgIH1cclxuICAgIHNldERpc2FibGVkU3RhdGU/KGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuXHJcbiAgICB9XHJcbn0iXX0=