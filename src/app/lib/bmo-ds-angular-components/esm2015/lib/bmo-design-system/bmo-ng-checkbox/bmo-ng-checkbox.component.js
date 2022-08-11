import { Component, ElementRef, Input } from '@angular/core';
export class BmoNgCheckboxComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.checked = false;
        this.disabled = false;
        this.isChild = false;
        this.lastState = false;
    }
    ngOnInit() {
        if (!this.id) {
            const random = Math.round(Math.random() * 10000);
            this.id = this.label.replace(/\s+/g, '-').toLowerCase() + random;
        }
    }
    ngAfterViewInit() {
        if (this.isChild) {
            const oldParentElement = this.nativeElement.parentElement;
            const listElement = document.createElement('li');
            listElement.appendChild(this.nativeElement);
            oldParentElement.appendChild(listElement);
        }
    }
    toggleChecked() {
        this.checked = !this.checked;
        this.setLastState();
    }
    setChecked(val) {
        if (typeof val === 'boolean') {
            this.checked = val;
        }
        else {
            switch (val) {
                case 'true':
                case 'false':
                    this.checked = Boolean(val);
                    break;
                case 'last':
                    this.checked = this.lastState || false;
                    break;
                default:
                    break;
            }
        }
    }
    setLastState() {
        if (this.isChild) {
            this.lastState = this.checked;
        }
    }
    get nativeElement() {
        return this.elementRef.nativeElement;
    }
    get inputElement() {
        return this.elementRef.nativeElement.firstElementChild;
    }
}
BmoNgCheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'bmo-ng-checkbox',
                template: `
    <ng-container *ngIf="isChild">
        <div class="input-wrap input-checkbox">
          <input
            type="checkbox"
            name="{{name}}"
            id="{{id}}"
            class="check"
            [value]="value"
            [checked]="checked"
            [attr.aria-checked]="checked"
            [disabled]="disabled"
            (click)="toggleChecked()"
            (keyup)="setLastState()"
          >
          <label class="check-label active-label" for="{{id}}">{{label}}</label>
        </div>
    </ng-container>
    <ng-container *ngIf="!isChild">
        <input
        type="checkbox"
        name="{{name}}"
        id="{{id}}"
        class="check"
        [value]="value"
        [checked]="checked"
        [attr.aria-checked]="checked"
        [disabled]="disabled"
        (click)="toggleChecked()"
        (keyup)="setLastState()"
      >
      <label class="check-label active-label" for="{{id}}">{{label}}</label>
    </ng-container>
  `
            },] }
];
BmoNgCheckboxComponent.ctorParameters = () => [
    { type: ElementRef }
];
BmoNgCheckboxComponent.propDecorators = {
    id: [{ type: Input }],
    label: [{ type: Input }],
    value: [{ type: Input }],
    name: [{ type: Input }],
    checked: [{ type: Input }],
    disabled: [{ type: Input }],
    isChild: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm1vLW5nLWNoZWNrYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJDOi9CTU9zb3VyY2VmaWxlcy9ibW8tZHMtYW5ndWxhci9ibW8tZHMtYW5ndWxhci9wcm9qZWN0cy9ibW8tZHMtYW5ndWxhci1jb21wb25lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9ibW8tZGVzaWduLXN5c3RlbS9ibW8tbmctY2hlY2tib3gvYm1vLW5nLWNoZWNrYm94LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBdUNwRixNQUFNLE9BQU8sc0JBQXNCO0lBYWpDLFlBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFOakMsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFFbEIsY0FBUyxHQUFHLEtBQUssQ0FBQztJQUVxQixDQUFDO0lBRS9DLFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUNaLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDO1lBQ2pELElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLE1BQU0sQ0FBQztTQUNsRTtJQUNILENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUM7WUFFMUQsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNqRCxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUU1QyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDM0M7SUFDSCxDQUFDO0lBRUQsYUFBYTtRQUNYLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBRTdCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsVUFBVSxDQUFDLEdBQXFCO1FBQzlCLElBQUksT0FBTyxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1NBQ3BCO2FBQU07WUFDTCxRQUFRLEdBQUcsRUFBRTtnQkFDWCxLQUFLLE1BQU0sQ0FBQztnQkFDWixLQUFLLE9BQU87b0JBQ1IsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzVCLE1BQU07Z0JBQ1YsS0FBSyxNQUFNO29CQUNULElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxLQUFLLENBQUM7b0JBQ3ZDLE1BQU07Z0JBQ1I7b0JBQ0ksTUFBTTthQUNYO1NBQ0Y7SUFDSCxDQUFDO0lBRU8sWUFBWTtRQUNsQixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQy9CO0lBQ0gsQ0FBQztJQUVELElBQUksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUE0QixDQUFDO0lBQ3RELENBQUM7SUFFRCxJQUFJLFlBQVk7UUFDWixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGlCQUFxQyxDQUFDO0lBQy9FLENBQUM7OztZQTFHRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQ1Q7YUFDRjs7O1lBdENrQyxVQUFVOzs7aUJBeUMxQyxLQUFLO29CQUNMLEtBQUs7b0JBQ0wsS0FBSzttQkFDTCxLQUFLO3NCQUVMLEtBQUs7dUJBQ0wsS0FBSztzQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Jtby1uZy1jaGVja2JveCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzQ2hpbGRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LXdyYXAgaW5wdXQtY2hlY2tib3hcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICBuYW1lPVwie3tuYW1lfX1cIlxuICAgICAgICAgICAgaWQ9XCJ7e2lkfX1cIlxuICAgICAgICAgICAgY2xhc3M9XCJjaGVja1wiXG4gICAgICAgICAgICBbdmFsdWVdPVwidmFsdWVcIlxuICAgICAgICAgICAgW2NoZWNrZWRdPVwiY2hlY2tlZFwiXG4gICAgICAgICAgICBbYXR0ci5hcmlhLWNoZWNrZWRdPVwiY2hlY2tlZFwiXG4gICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICAgICAgKGNsaWNrKT1cInRvZ2dsZUNoZWNrZWQoKVwiXG4gICAgICAgICAgICAoa2V5dXApPVwic2V0TGFzdFN0YXRlKClcIlxuICAgICAgICAgID5cbiAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjaGVjay1sYWJlbCBhY3RpdmUtbGFiZWxcIiBmb3I9XCJ7e2lkfX1cIj57e2xhYmVsfX08L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWlzQ2hpbGRcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgIG5hbWU9XCJ7e25hbWV9fVwiXG4gICAgICAgIGlkPVwie3tpZH19XCJcbiAgICAgICAgY2xhc3M9XCJjaGVja1wiXG4gICAgICAgIFt2YWx1ZV09XCJ2YWx1ZVwiXG4gICAgICAgIFtjaGVja2VkXT1cImNoZWNrZWRcIlxuICAgICAgICBbYXR0ci5hcmlhLWNoZWNrZWRdPVwiY2hlY2tlZFwiXG4gICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgIChjbGljayk9XCJ0b2dnbGVDaGVja2VkKClcIlxuICAgICAgICAoa2V5dXApPVwic2V0TGFzdFN0YXRlKClcIlxuICAgICAgPlxuICAgICAgPGxhYmVsIGNsYXNzPVwiY2hlY2stbGFiZWwgYWN0aXZlLWxhYmVsXCIgZm9yPVwie3tpZH19XCI+e3tsYWJlbH19PC9sYWJlbD5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBCbW9OZ0NoZWNrYm94Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcblxuICBASW5wdXQoKSBpZDogc3RyaW5nO1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSB2YWx1ZTogc3RyaW5nO1xuICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgY2hlY2tlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBpc0NoaWxkID0gZmFsc2U7XG5cbiAgcHVibGljIGxhc3RTdGF0ZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlkKSB7XG4gICAgICBjb25zdCByYW5kb20gPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwMCk7XG4gICAgICB0aGlzLmlkID0gdGhpcy5sYWJlbC5yZXBsYWNlKC9cXHMrL2csICctJykudG9Mb3dlckNhc2UoKSArIHJhbmRvbTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKHRoaXMuaXNDaGlsZCkge1xuICAgICAgY29uc3Qgb2xkUGFyZW50RWxlbWVudCA9IHRoaXMubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXG4gICAgICBjb25zdCBsaXN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICBsaXN0RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLm5hdGl2ZUVsZW1lbnQpO1xuXG4gICAgICBvbGRQYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGxpc3RFbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVDaGVja2VkKCkge1xuICAgIHRoaXMuY2hlY2tlZCA9ICF0aGlzLmNoZWNrZWQ7XG5cbiAgICB0aGlzLnNldExhc3RTdGF0ZSgpO1xuICB9XG5cbiAgc2V0Q2hlY2tlZCh2YWw6IGJvb2xlYW4gfCBzdHJpbmcpIHtcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICB0aGlzLmNoZWNrZWQgPSB2YWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXRjaCAodmFsKSB7XG4gICAgICAgIGNhc2UgJ3RydWUnOlxuICAgICAgICBjYXNlICdmYWxzZSc6XG4gICAgICAgICAgICB0aGlzLmNoZWNrZWQgPSBCb29sZWFuKHZhbCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbGFzdCc6XG4gICAgICAgICAgdGhpcy5jaGVja2VkID0gdGhpcy5sYXN0U3RhdGUgfHwgZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldExhc3RTdGF0ZSgpIHtcbiAgICBpZiAodGhpcy5pc0NoaWxkKSB7XG4gICAgICB0aGlzLmxhc3RTdGF0ZSA9IHRoaXMuY2hlY2tlZDtcbiAgICB9XG4gIH1cblxuICBnZXQgbmF0aXZlRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gIH1cblxuICBnZXQgaW5wdXRFbGVtZW50KCkge1xuICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gIH1cblxufVxuIl19