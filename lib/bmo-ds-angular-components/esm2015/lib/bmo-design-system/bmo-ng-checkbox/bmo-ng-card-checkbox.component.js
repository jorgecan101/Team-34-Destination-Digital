import { Component, ElementRef, HostBinding, Input } from '@angular/core';
export class BmoNgCardCheckboxComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.checkCardClass = true;
        this.label = "";
        this.disabled = false;
        this.checked = false;
    }
    ngOnInit() {
        if (this.id) {
            this.labelId = this.id;
        }
        else {
            const random = Math.round(Math.random() * 10000);
            this.labelId = this.label.replace(/\s+/g, '-').toLowerCase() + random;
        }
    }
    toggleChecked() {
        this.checked = !this.checked;
    }
    get inputElement() {
        return this.elementRef.nativeElement.firstElementChild;
    }
}
BmoNgCardCheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'bmo-ng-card-checkbox',
                template: `
        <div class="bmo-card-checkbox check-fixed-cards">
            <input
                id="{{labelId}}"
                type="checkbox"
                class="card-check-input"
                [value]="value"
                [disabled]="disabled"
                [checked]="checked"
                [attr.aria-checked]="checked"
                (click)="toggleChecked()"
            >
            <label class="card-check-label" for="{{labelId}}">
                <span class="check"></span>
                <span class="card-check-image">
                    <img *ngIf="img" src="{{img}}" role="presentation" />
                </span>
                <span class="card-check-label-text">{{label}}</span>
            </label>
        </div>
    `,
                styles: [':host { display: inline-block; }']
            },] }
];
BmoNgCardCheckboxComponent.ctorParameters = () => [
    { type: ElementRef }
];
BmoNgCardCheckboxComponent.propDecorators = {
    checkCardClass: [{ type: HostBinding, args: ['class.check-card',] }],
    id: [{ type: Input }],
    label: [{ type: Input }],
    img: [{ type: Input }],
    value: [{ type: Input }],
    disabled: [{ type: Input }],
    checked: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm1vLW5nLWNhcmQtY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IkM6L0JNT3NvdXJjZWZpbGVzL2Jtby1kcy1hbmd1bGFyL2Jtby1kcy1hbmd1bGFyL3Byb2plY3RzL2Jtby1kcy1hbmd1bGFyLWNvbXBvbmVudHMvc3JjLyIsInNvdXJjZXMiOlsibGliL2Jtby1kZXNpZ24tc3lzdGVtL2Jtby1uZy1jaGVja2JveC9ibW8tbmctY2FyZC1jaGVja2JveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUEyQmpHLE1BQU0sT0FBTywwQkFBMEI7SUFZbkMsWUFBbUIsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQVhSLG1CQUFjLEdBQUcsSUFBSSxDQUFDO1FBRzlDLFVBQUssR0FBRyxFQUFFLENBQUM7UUFJWCxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLFlBQU8sR0FBRyxLQUFLLENBQUM7SUFHbUIsQ0FBQztJQUU3QyxRQUFRO1FBQ0osSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ1QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1NBQzFCO2FBQU07WUFDSCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxLQUFLLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxNQUFNLENBQUM7U0FDekU7SUFDTCxDQUFDO0lBRUQsYUFBYTtRQUNULElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxJQUFJLFlBQVk7UUFDWixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGlCQUFxQyxDQUFDO0lBQy9FLENBQUM7OztZQXRESixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsUUFBUSxFQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQW9CVjt5QkFDUSxrQ0FBa0M7YUFDOUM7OztZQTFCa0MsVUFBVTs7OzZCQTRCeEMsV0FBVyxTQUFDLGtCQUFrQjtpQkFFOUIsS0FBSztvQkFDTCxLQUFLO2tCQUNMLEtBQUs7b0JBQ0wsS0FBSzt1QkFFTCxLQUFLO3NCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYm1vLW5nLWNhcmQtY2hlY2tib3gnLFxyXG4gICAgdGVtcGxhdGU6ICBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJtby1jYXJkLWNoZWNrYm94IGNoZWNrLWZpeGVkLWNhcmRzXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgaWQ9XCJ7e2xhYmVsSWR9fVwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJjYXJkLWNoZWNrLWlucHV0XCJcclxuICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJ2YWx1ZVwiXHJcbiAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAgICAgW2NoZWNrZWRdPVwiY2hlY2tlZFwiXHJcbiAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWNoZWNrZWRdPVwiY2hlY2tlZFwiXHJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwidG9nZ2xlQ2hlY2tlZCgpXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjYXJkLWNoZWNrLWxhYmVsXCIgZm9yPVwie3tsYWJlbElkfX1cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2hlY2tcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNhcmQtY2hlY2staW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nICpuZ0lmPVwiaW1nXCIgc3JjPVwie3tpbWd9fVwiIHJvbGU9XCJwcmVzZW50YXRpb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjYXJkLWNoZWNrLWxhYmVsLXRleHRcIj57e2xhYmVsfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOiBbJzpob3N0IHsgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9J11cclxufSlcclxuZXhwb3J0IGNsYXNzIEJtb05nQ2FyZENoZWNrYm94Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIEBIb3N0QmluZGluZygnY2xhc3MuY2hlY2stY2FyZCcpIGNoZWNrQ2FyZENsYXNzID0gdHJ1ZTtcclxuXHJcbiAgICBASW5wdXQoKSBpZDogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgbGFiZWwgPSBcIlwiO1xyXG4gICAgQElucHV0KCkgaW1nOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSB2YWx1ZTogc3RyaW5nO1xyXG5cclxuICAgIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSBjaGVja2VkID0gZmFsc2U7XHJcblxyXG4gICAgcHVibGljIGxhYmVsSWQ6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7fVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWxJZCA9IHRoaXMuaWQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgcmFuZG9tID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwMDApO1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsSWQgPSB0aGlzLmxhYmVsLnJlcGxhY2UoL1xccysvZywgJy0nKS50b0xvd2VyQ2FzZSgpICsgcmFuZG9tO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVDaGVja2VkKCkge1xyXG4gICAgICAgIHRoaXMuY2hlY2tlZCA9ICF0aGlzLmNoZWNrZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlucHV0RWxlbWVudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIH1cclxufSJdfQ==