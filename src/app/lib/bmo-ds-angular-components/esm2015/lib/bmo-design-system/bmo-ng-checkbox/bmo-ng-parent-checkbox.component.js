import { Component, ContentChildren, Input, Optional, Self, ViewChild } from '@angular/core';
import { NgControl } from '@angular/forms';
import { BmoNgCheckboxComponent } from './bmo-ng-checkbox.component';
export class BmoNgParentCheckboxComponent {
    constructor(ngControl) {
        this.ngControl = ngControl;
        this.name = 'parent-checkbox-group-' + this.randomInterval(0, 1000);
        this._disabled = false;
        this.checked = false;
        this.ariaState = 'false';
        this.onChange = (val) => { };
        this.onTouched = () => { };
        this._onClick = (event) => {
            this.updateParentCheckbox();
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
                checkbox.disabled = disabled;
            }
        }
    }
    get error() {
        return this.ngControl ? (this.ngControl.invalid && this.ngControl.dirty) : false;
    }
    ngOnInit() {
        if (!this.id) {
            this.id = this.name;
        }
    }
    ngAfterContentInit() {
        const childIds = [];
        for (const checkbox of this.checkboxes) {
            checkbox.isChild = true;
            checkbox.disabled = this.disabled;
            checkbox.name = this.name;
            childIds.push(checkbox.id);
        }
        this.childIds = childIds.join(' ');
    }
    ngAfterViewInit() {
        for (const checkbox of this.checkboxes) {
            checkbox.disabled = this.disabled;
            checkbox.inputElement.removeEventListener('click', this._onClick);
            checkbox.inputElement.addEventListener('click', this._onClick);
        }
        this.updateParentCheckbox();
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
    updateParentCheckbox() {
        const count = this.checkboxes.reduce((acc, curr) => curr.checked ? acc + 1 : acc, 0);
        switch (count) {
            case 0:
                this.setChecked('false');
                break;
            case this.checkboxes.length:
                this.setChecked('true');
                break;
            default:
                this.setChecked('mixed');
                this.updateControlledStates();
                break;
        }
    }
    toggleParentCheckbox() {
        switch (this.ariaState) {
            case 'false':
            case 'mixed':
                this.setCheckboxes(true);
                break;
            case 'true':
                this.setCheckboxes(false);
                break;
            default:
                break;
        }
    }
    setChecked(state) {
        this.ariaState = state;
        this.inputElement.nativeElement.checked = this.checked = state === 'false' ? false : true;
    }
    setCheckboxes(val) {
        for (const checkbox of this.checkboxes) {
            checkbox.setChecked(val);
        }
        this.updateParentCheckbox();
    }
    updateControlledStates() {
        for (const checkbox of this.checkboxes) {
            checkbox.lastState = checkbox.checked;
        }
    }
    anyLastChecked() {
        const count = this.checkboxes.reduce((acc, curr) => curr.lastState ? acc + 1 : acc, 0);
        return count > 0;
    }
    onClick(event) {
        this.toggleParentCheckbox();
        this.writeValue('');
        event.stopPropagation();
    }
    onKeyDown(event) {
        if (event.key === 'Space') {
            this.toggleParentCheckbox();
            event.stopPropagation();
            event.preventDefault();
        }
    }
    randomInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}
BmoNgParentCheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'bmo-ng-parent-checkbox',
                template: `
        <div class="input-wrap input-checkbox parent-checkbox">
            <input #inputElement
                type="checkbox"
                name="{{name}}"
                id="{{id}}"
                [checked]="checked"
                [disabled]="disabled"
                [attr.aria-checked]="ariaState"
                [attr.aria-controls]="childIds"
                (click)="onClick($event)"
                (keydown)="onKeyDown($event)"
            >
            <label for="{{id}}">{{label}}</label>
        </div>
        <ul class="checkboxes">
            <ng-content select="bmo-ng-checkbox"></ng-content>
        </ul>
    `
            },] }
];
BmoNgParentCheckboxComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] }
];
BmoNgParentCheckboxComponent.propDecorators = {
    checkboxes: [{ type: ContentChildren, args: [BmoNgCheckboxComponent,] }],
    inputElement: [{ type: ViewChild, args: ['inputElement',] }],
    id: [{ type: Input }],
    label: [{ type: Input }],
    errorMessage: [{ type: Input }],
    name: [{ type: Input }],
    disabled: [{ type: Input }],
    checked: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm1vLW5nLXBhcmVudC1jaGVja2JveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiQzovQk1Pc291cmNlZmlsZXMvYm1vLWRzLWFuZ3VsYXIvYm1vLWRzLWFuZ3VsYXIvcHJvamVjdHMvYm1vLWRzLWFuZ3VsYXItY29tcG9uZW50cy9zcmMvIiwic291cmNlcyI6WyJsaWIvYm1vLWRlc2lnbi1zeXN0ZW0vYm1vLW5nLWNoZWNrYm94L2Jtby1uZy1wYXJlbnQtY2hlY2tib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBbUMsU0FBUyxFQUFFLGVBQWUsRUFBNEIsS0FBSyxFQUFVLFFBQVEsRUFBYSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNLLE9BQU8sRUFBd0IsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUF3QnJFLE1BQU0sT0FBTyw0QkFBNEI7SUFtQ3JDLFlBQXdDLFNBQW9CO1FBQXBCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUE1Qm5ELFNBQUksR0FBRyx3QkFBd0IsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQWVoRSxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFHbEIsY0FBUyxHQUErQixPQUFPLENBQUM7UUFNdkQsYUFBUSxHQUFHLENBQUMsR0FBa0IsRUFBRSxFQUFFLEdBQUUsQ0FBQyxDQUFDO1FBQ3RDLGNBQVMsR0FBRyxHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUM7UUF3SHJCLGFBQVEsR0FBRyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDcEIsS0FBSyxDQUFDLGVBQWUs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Q0FBQyxHQUFXLEVBQUUsR0FBVztRQUMzQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUM3RCxDQUFDOzs7WUFyTUosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBa0JUO2FBQ0o7OztZQXhCOEIsU0FBUyx1QkE0RHZCLFFBQVEsWUFBSSxJQUFJOzs7eUJBbEM1QixlQUFlLFNBQUMsc0JBQXNCOzJCQUN0QyxTQUFTLFNBQUMsY0FBYztpQkFFeEIsS0FBSztvQkFDTCxLQUFLOzJCQUNMLEtBQUs7bUJBQ0wsS0FBSzt1QkFHTCxLQUFLO3NCQWFMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIENvbnRlbnRDaGlsZHJlbiwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT25Jbml0LCBPcHRpb25hbCwgUXVlcnlMaXN0LCBTZWxmLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQm1vTmdDaGVja2JveENvbXBvbmVudCB9IGZyb20gJy4vYm1vLW5nLWNoZWNrYm94LmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYm1vLW5nLXBhcmVudC1jaGVja2JveCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC13cmFwIGlucHV0LWNoZWNrYm94IHBhcmVudC1jaGVja2JveFwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgI2lucHV0RWxlbWVudFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJ7e25hbWV9fVwiXHJcbiAgICAgICAgICAgICAgICBpZD1cInt7aWR9fVwiXHJcbiAgICAgICAgICAgICAgICBbY2hlY2tlZF09XCJjaGVja2VkXCJcclxuICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWNoZWNrZWRdPVwiYXJpYVN0YXRlXCJcclxuICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtY29udHJvbHNdPVwiY2hpbGRJZHNcIlxyXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uQ2xpY2soJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAoa2V5ZG93bik9XCJvbktleURvd24oJGV2ZW50KVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInt7aWR9fVwiPnt7bGFiZWx9fTwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHVsIGNsYXNzPVwiY2hlY2tib3hlc1wiPlxyXG4gICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJibW8tbmctY2hlY2tib3hcIj48L25nLWNvbnRlbnQ+XHJcbiAgICAgICAgPC91bD5cclxuICAgIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIEJtb05nUGFyZW50Q2hlY2tib3hDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBBZnRlclZpZXdJbml0LCBPbkluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcclxuICAgIEBDb250ZW50Q2hpbGRyZW4oQm1vTmdDaGVja2JveENvbXBvbmVudCkgY2hlY2tib3hlczogUXVlcnlMaXN0PEJtb05nQ2hlY2tib3hDb21wb25lbnQ+O1xyXG4gICAgQFZpZXdDaGlsZCgnaW5wdXRFbGVtZW50JykgaW5wdXRFbGVtZW50OiBFbGVtZW50UmVmO1xyXG5cclxuICAgIEBJbnB1dCgpIGlkOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBuYW1lID0gJ3BhcmVudC1jaGVja2JveC1ncm91cC0nICsgdGhpcy5yYW5kb21JbnRlcnZhbCgwLCAxMDAwKTtcclxuXHJcbiAgICAvLyBTdGF0ZXNcclxuICAgIEBJbnB1dCgpIGdldCBkaXNhYmxlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XHJcbiAgICB9XHJcbiAgICBzZXQgZGlzYWJsZWQoZGlzYWJsZWQ6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9kaXNhYmxlZCA9IGRpc2FibGVkO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jaGVja2JveGVzKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgY2hlY2tib3ggb2YgdGhpcy5jaGVja2JveGVzKSB7XHJcbiAgICAgICAgICAgICAgICBjaGVja2JveC5kaXNhYmxlZCA9IGRpc2FibGVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIGNoZWNrZWQgPSBmYWxzZTtcclxuXHJcbiAgICBwdWJsaWMgY2hpbGRJZHM6IHN0cmluZztcclxuICAgIHB1YmxpYyBhcmlhU3RhdGU6ICdmYWxzZScgfCAndHJ1ZScgfCAnbWl4ZWQnID0gJ2ZhbHNlJztcclxuXHJcbiAgICBnZXQgZXJyb3IoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmdDb250cm9sID8gKHRoaXMubmdDb250cm9sLmludmFsaWQgJiYgdGhpcy5uZ0NvbnRyb2wuZGlydHkpIDogZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2UgPSAodmFsOiBBcnJheTxzdHJpbmc+KSA9PiB7fTtcclxuICAgIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTZWxmKCkgcHJpdmF0ZSBuZ0NvbnRyb2w6IE5nQ29udHJvbCkge1xyXG4gICAgICAgIGlmIChuZ0NvbnRyb2wpIHtcclxuICAgICAgICAgICAgbmdDb250cm9sLnZhbHVlQWNjZXNzb3IgPSB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaWQpIHtcclxuICAgICAgICAgICAgdGhpcy5pZCA9IHRoaXMubmFtZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgICAgIGNvbnN0IGNoaWxkSWRzID0gW107XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgY2hlY2tib3ggb2YgdGhpcy5jaGVja2JveGVzKSB7XHJcbiAgICAgICAgICAgIGNoZWNrYm94LmlzQ2hpbGQgPSB0cnVlO1xyXG4gICAgICAgICAgICBjaGVja2JveC5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWQ7XHJcbiAgICAgICAgICAgIGNoZWNrYm94Lm5hbWUgPSB0aGlzLm5hbWU7XHJcbiAgICAgICAgICAgIGNoaWxkSWRzLnB1c2goY2hlY2tib3guaWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jaGlsZElkcyA9IGNoaWxkSWRzLmpvaW4oJyAnKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBjaGVja2JveCBvZiB0aGlzLmNoZWNrYm94ZXMpIHtcclxuICAgICAgICAgICAgY2hlY2tib3guZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkO1xyXG5cclxuICAgICAgICAgICAgY2hlY2tib3guaW5wdXRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5fb25DbGljayk7XHJcbiAgICAgICAgICAgIGNoZWNrYm94LmlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX29uQ2xpY2spO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVQYXJlbnRDaGVja2JveCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHdyaXRlVmFsdWUob2JqOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2hlY2tib3hlcykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vbkNoYW5nZShudWxsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGNoZWNrYm94VmFsdWVzID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCBjaGVja2JveCBvZiB0aGlzLmNoZWNrYm94ZXMpIHtcclxuICAgICAgICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgIGNoZWNrYm94VmFsdWVzLnB1c2goY2hlY2tib3gudmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2hlY2tib3hWYWx1ZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2UobnVsbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm9uQ2hhbmdlKGNoZWNrYm94VmFsdWVzKTtcclxuICAgIH1cclxuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICAgIH1cclxuICAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gICAgfVxyXG4gICAgc2V0RGlzYWJsZWRTdGF0ZT8oaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGVQYXJlbnRDaGVja2JveCgpIHtcclxuICAgICAgICBjb25zdCBjb3VudCA9IHRoaXMuY2hlY2tib3hlcy5yZWR1Y2UoKGFjYywgY3VycikgPT4gY3Vyci5jaGVja2VkID8gYWNjICsgMSA6IGFjYywgMCk7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoY291bnQpIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRDaGVja2VkKCdmYWxzZScpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5jaGVja2JveGVzLmxlbmd0aDpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0Q2hlY2tlZCgndHJ1ZScpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldENoZWNrZWQoJ21peGVkJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNvbnRyb2xsZWRTdGF0ZXMoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9nZ2xlUGFyZW50Q2hlY2tib3goKSB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmFyaWFTdGF0ZSkge1xyXG4gICAgICAgICAgICBjYXNlICdmYWxzZSc6XHJcbiAgICAgICAgICAgIGNhc2UgJ21peGVkJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0Q2hlY2tib3hlcyh0cnVlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICd0cnVlJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0Q2hlY2tib3hlcyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldENoZWNrZWQoc3RhdGU6ICdmYWxzZScgfCAndHJ1ZScgfCAnbWl4ZWQnKSB7XHJcbiAgICAgICAgdGhpcy5hcmlhU3RhdGUgPSBzdGF0ZTtcclxuICAgICAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmNoZWNrZWQgPSB0aGlzLmNoZWNrZWQgPSBzdGF0ZSA9PT0gJ2ZhbHNlJyA/IGZhbHNlIDogdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldENoZWNrYm94ZXModmFsOiBib29sZWFuKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBjaGVja2JveCBvZiB0aGlzLmNoZWNrYm94ZXMpIHtcclxuICAgICAgICAgICAgY2hlY2tib3guc2V0Q2hlY2tlZCh2YWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVwZGF0ZVBhcmVudENoZWNrYm94KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVDb250cm9sbGVkU3RhdGVzKCkge1xyXG4gICAgICAgIGZvciAoY29uc3QgY2hlY2tib3ggb2YgdGhpcy5jaGVja2JveGVzKSB7XHJcbiAgICAgICAgICAgIGNoZWNrYm94Lmxhc3RTdGF0ZSA9IGNoZWNrYm94LmNoZWNrZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYW55TGFzdENoZWNrZWQoKSB7XHJcbiAgICAgICAgY29uc3QgY291bnQgPSB0aGlzLmNoZWNrYm94ZXMucmVkdWNlKChhY2MsIGN1cnIpID0+IGN1cnIubGFzdFN0YXRlID8gYWNjICsgMSA6IGFjYywgMCk7XHJcbiAgICAgICAgcmV0dXJuIGNvdW50ID4gMDtcclxuICAgIH1cclxuXHJcbiAgICBfb25DbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMudXBkYXRlUGFyZW50Q2hlY2tib3goKTtcclxuICAgICAgICB0aGlzLndyaXRlVmFsdWUoJycpO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgICAgICB0aGlzLnRvZ2dsZVBhcmVudENoZWNrYm94KCk7XHJcbiAgICAgICAgdGhpcy53cml0ZVZhbHVlKCcnKTtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnU3BhY2UnKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlUGFyZW50Q2hlY2tib3goKTtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmFuZG9tSW50ZXJ2YWwobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcclxuICAgIH1cclxufSJdfQ==