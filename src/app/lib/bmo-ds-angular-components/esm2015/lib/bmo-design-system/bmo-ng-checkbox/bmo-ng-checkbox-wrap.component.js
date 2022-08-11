import { Component, ContentChildren, Input, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { BmoNgCheckboxComponent } from './bmo-ng-checkbox.component';
export class BmoNgCheckboxWrapComponent {
    constructor(ngControl) {
        this.ngControl = ngControl;
        this.name = 'checkbox-group-' + this.randomInterval(0, 1000);
        this._disabled = false;
        this.onChange = (val) => { };
        this.onTouched = () => { };
        this._clickListener = (event) => {
            this.writeValue('');
            event.stopPropagation();
        };
        if (ngControl) {
            ngControl.valueAccessor = this;
        }
    }
    // States
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
        for (const checkbox of this.checkboxes) {
            checkbox.name = this.name;
        }
    }
    ngAfterViewInit() {
        for (const checkbox of this.checkboxes) {
            checkbox.inputElement.addEventListener('click', this._clickListener);
        }
    }
    ngOnDestroy() {
        for (const checkbox of this.checkboxes) {
            checkbox.inputElement.removeEventListener('click', this._clickListener);
        }
    }
    writeValue(obj) {
        if (!this.checkboxes) {
            return this.onChange(null);
        }
        const checkboxValues = [];
        for (const checkbox of this.checkboxes) {
            if (checkbox.checked) {
                checkboxValues.push(checkbox.value);
            }
        }
        if (checkboxValues.length === 0) {
            return this.onChange(null);
        }
        return this.onChange(checkboxValues);
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
BmoNgCheckboxWrapComponent.decorators = [
    { type: Component, args: [{
                selector: 'bmo-ng-checkbox-wrap',
                template: `
        <div class="check-group">
            <fieldset class="input-wrap input-checkbox" [disabled]="disabled">
                <legend class="legend check-legend">{{label}}</legend>
                <ng-content select="bmo-ng-checkbox"></ng-content>
                <span *ngIf="error" class="error-message has-error" role="alert">{{errorMessage}}</span>
            </fieldset>
        </div>
    `
            },] }
];
BmoNgCheckboxWrapComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] }
];
BmoNgCheckboxWrapComponent.propDecorators = {
    checkboxes: [{ type: ContentChildren, args: [BmoNgCheckboxComponent,] }],
    label: [{ type: Input }],
    errorMessage: [{ type: Input }],
    name: [{ type: Input }],
    disabled: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm1vLW5nLWNoZWNrYm94LXdyYXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IkM6L0JNT3NvdXJjZWZpbGVzL2Jtby1kcy1hbmd1bGFyL2Jtby1kcy1hbmd1bGFyL3Byb2plY3RzL2Jtby1kcy1hbmd1bGFyLWNvbXBvbmVudHMvc3JjLyIsInNvdXJjZXMiOlsibGliL2Jtby1kZXNpZ24tc3lzdGVtL2Jtby1uZy1jaGVja2JveC9ibW8tbmctY2hlY2tib3gtd3JhcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFtQyxTQUFTLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBYSxRQUFRLEVBQWEsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pJLE9BQU8sRUFBd0IsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFjckUsTUFBTSxPQUFPLDBCQUEwQjtJQThCbkMsWUFBd0MsU0FBb0I7UUFBcEIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQXpCbkQsU0FBSSxHQUFHLGlCQUFpQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBZ0J6RCxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBRTFCLGFBQVEsR0FBRyxDQUFDLEdBQWtCLEVBQUUsRUFBRSxHQUFFLENBQUMsQ0FBQztRQUN0QyxjQUFTLEdBQUcsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO1FBMkRiLG1CQUFjLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUMvQixJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3BCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUM1QixDQUFDLENBQUE7UUF2REcsSUFBSSxTQUFTLEVBQUU7WUFDWCxTQUFTLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztTQUNsQztJQUNMLENBQUM7SUEz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SyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBJbnB1dCwgT25EZXN0cm95LCBPcHRpb25hbCwgUXVlcnlMaXN0LCBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEJtb05nQ2hlY2tib3hDb21wb25lbnQgfSBmcm9tICcuL2Jtby1uZy1jaGVja2JveC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2Jtby1uZy1jaGVja2JveC13cmFwJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNoZWNrLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxmaWVsZHNldCBjbGFzcz1cImlucHV0LXdyYXAgaW5wdXQtY2hlY2tib3hcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj5cclxuICAgICAgICAgICAgICAgIDxsZWdlbmQgY2xhc3M9XCJsZWdlbmQgY2hlY2stbGVnZW5kXCI+e3tsYWJlbH19PC9sZWdlbmQ+XHJcbiAgICAgICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJibW8tbmctY2hlY2tib3hcIj48L25nLWNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cImVycm9yXCIgY2xhc3M9XCJlcnJvci1tZXNzYWdlIGhhcy1lcnJvclwiIHJvbGU9XCJhbGVydFwiPnt7ZXJyb3JNZXNzYWdlfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCbW9OZ0NoZWNrYm94V3JhcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgQWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJWaWV3SW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xyXG4gICAgQENvbnRlbnRDaGlsZHJlbihCbW9OZ0NoZWNrYm94Q29tcG9uZW50KSBjaGVja2JveGVzOiBRdWVyeUxpc3Q8Qm1vTmdDaGVja2JveENvbXBvbmVudD47XHJcblxyXG4gICAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIGVycm9yTWVzc2FnZTogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgbmFtZSA9ICdjaGVja2JveC1ncm91cC0nICsgdGhpcy5yYW5kb21JbnRlcnZhbCgwLCAxMDAwKTtcclxuXHJcbiAgICAvLyBTdGF0ZXNcclxuICAgIEBJbnB1dCgpIFxyXG4gICAgZ2V0IGRpc2FibGVkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcclxuICAgIH1cclxuICAgIHNldCBkaXNhYmxlZChkaXNhYmxlZDogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX2Rpc2FibGVkID0gZGlzYWJsZWQ7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNoZWNrYm94ZXMpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBjaGVja2JveCBvZiB0aGlzLmNoZWNrYm94ZXMpIHtcclxuICAgICAgICAgICAgICAgIGNoZWNrYm94LmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XHJcblxyXG4gICAgb25DaGFuZ2UgPSAodmFsOiBBcnJheTxzdHJpbmc+KSA9PiB7fTtcclxuICAgIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xyXG5cclxuICAgIGdldCBlcnJvcigpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZ0NvbnRyb2wgPyAodGhpcy5uZ0NvbnRyb2wuaW52YWxpZCAmJiB0aGlzLm5nQ29udHJvbC5kaXJ0eSkgOiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2VsZigpIHByaXZhdGUgbmdDb250cm9sOiBOZ0NvbnRyb2wpIHtcclxuICAgICAgICBpZiAobmdDb250cm9sKSB7XHJcbiAgICAgICAgICAgIG5nQ29udHJvbC52YWx1ZUFjY2Vzc29yID0gdGhpcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgICAgIGZvciAoY29uc3QgY2hlY2tib3ggb2YgdGhpcy5jaGVja2JveGVzKSB7XHJcbiAgICAgICAgICAgIGNoZWNrYm94Lm5hbWUgPSB0aGlzLm5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGNoZWNrYm94IG9mIHRoaXMuY2hlY2tib3hlcykge1xyXG4gICAgICAgICAgICBjaGVja2JveC5pbnB1dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9jbGlja0xpc3RlbmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBjaGVja2JveCBvZiB0aGlzLmNoZWNrYm94ZXMpIHtcclxuICAgICAgICAgICAgY2hlY2tib3guaW5wdXRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5fY2xpY2tMaXN0ZW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHdyaXRlVmFsdWUob2JqOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2hlY2tib3hlcykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vbkNoYW5nZShudWxsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGNoZWNrYm94VmFsdWVzID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCBjaGVja2JveCBvZiB0aGlzLmNoZWNrYm94ZXMpIHtcclxuICAgICAgICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgIGNoZWNrYm94VmFsdWVzLnB1c2goY2hlY2tib3gudmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2hlY2tib3hWYWx1ZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9uQ2hhbmdlKG51bGwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMub25DaGFuZ2UoY2hlY2tib3hWYWx1ZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICAgIH1cclxuICAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gICAgfVxyXG4gICAgc2V0RGlzYWJsZWRTdGF0ZT8oaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NsaWNrTGlzdGVuZXIgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICB0aGlzLndyaXRlVmFsdWUoJycpO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmFuZG9tSW50ZXJ2YWwobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcclxuICAgIH1cclxufSJdfQ==