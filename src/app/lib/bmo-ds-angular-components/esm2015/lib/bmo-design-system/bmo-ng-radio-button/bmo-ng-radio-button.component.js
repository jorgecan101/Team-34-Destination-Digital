import { Component, ElementRef, Input } from '@angular/core';
export class BmoNgRadioButtonComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.type = 'traditional';
        this.label = '';
        // States
        this.disabled = false;
    }
    get inputElement() {
        return this.elementRef.nativeElement.firstElementChild;
    }
}
BmoNgRadioButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'bmo-ng-radio-button',
                template: `
        <input type="radio" [class.radio]="type === 'traditional'" [class.box-radio]="type === 'box'" name="{{name}}" id="{{id}}" value="{{value}}" >
        <label [class.radio-label]="type !== 'box'" [class.box-radio-label]="type === 'box'" for="{{id}}">{{label}}</label>
    `
            },] }
];
BmoNgRadioButtonComponent.ctorParameters = () => [
    { type: ElementRef }
];
BmoNgRadioButtonComponent.propDecorators = {
    id: [{ type: Input }],
    value: [{ type: Input }],
    name: [{ type: Input }],
    type: [{ type: Input }],
    label: [{ type: Input }],
    disabled: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm1vLW5nLXJhZGlvLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiQzovQk1Pc291cmNlZmlsZXMvYm1vLWRzLWFuZ3VsYXIvYm1vLWRzLWFuZ3VsYXIvcHJvamVjdHMvYm1vLWRzLWFuZ3VsYXItY29tcG9uZW50cy9zcmMvIiwic291cmNlcyI6WyJsaWIvYm1vLWRlc2lnbi1zeXN0ZW0vYm1vLW5nLXJhZGlvLWJ1dHRvbi9ibW8tbmctcmFkaW8tYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFTeEUsTUFBTSxPQUFPLHlCQUF5QjtJQVVsQyxZQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBTmpDLFNBQUksR0FBMEIsYUFBYSxDQUFDO1FBQzVDLFVBQUssR0FBRyxFQUFFLENBQUM7UUFFcEIsU0FBUztRQUNBLGFBQVEsR0FBRyxLQUFLLENBQUM7SUFFbUIsQ0FBQztJQUU5QyxJQUFJLFlBQVk7UUFDWixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGlCQUFxQyxDQUFDO0lBQy9FLENBQUM7OztZQXJCSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsUUFBUSxFQUFFOzs7S0FHVDthQUNKOzs7WUFSbUIsVUFBVTs7O2lCQVV6QixLQUFLO29CQUNMLEtBQUs7bUJBQ0wsS0FBSzttQkFDTCxLQUFLO29CQUNMLEtBQUs7dUJBR0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2Jtby1uZy1yYWRpby1idXR0b24nLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgW2NsYXNzLnJhZGlvXT1cInR5cGUgPT09ICd0cmFkaXRpb25hbCdcIiBbY2xhc3MuYm94LXJhZGlvXT1cInR5cGUgPT09ICdib3gnXCIgbmFtZT1cInt7bmFtZX19XCIgaWQ9XCJ7e2lkfX1cIiB2YWx1ZT1cInt7dmFsdWV9fVwiID5cclxuICAgICAgICA8bGFiZWwgW2NsYXNzLnJhZGlvLWxhYmVsXT1cInR5cGUgIT09ICdib3gnXCIgW2NsYXNzLmJveC1yYWRpby1sYWJlbF09XCJ0eXBlID09PSAnYm94J1wiIGZvcj1cInt7aWR9fVwiPnt7bGFiZWx9fTwvbGFiZWw+XHJcbiAgICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCbW9OZ1JhZGlvQnV0dG9uQ29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIGlkOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSB2YWx1ZTogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgdHlwZTogJ3RyYWRpdGlvbmFsJyB8ICdib3gnID0gJ3RyYWRpdGlvbmFsJztcclxuICAgIEBJbnB1dCgpIGxhYmVsID0gJyc7XHJcblxyXG4gICAgLy8gU3RhdGVzXHJcbiAgICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge31cclxuXHJcbiAgICBnZXQgaW5wdXRFbGVtZW50KCk6IEhUTUxJbnB1dEVsZW1lbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZCBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgfVxyXG59Il19