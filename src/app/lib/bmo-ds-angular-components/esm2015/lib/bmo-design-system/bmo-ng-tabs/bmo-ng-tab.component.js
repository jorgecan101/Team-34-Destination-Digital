import { Component, ElementRef, HostBinding, HostListener, Input } from '@angular/core';
export class BmoNgTabComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.label = "";
        this.id = 'tab-' + this.tabId;
        this.roleAttribute = 'tab';
        this.tabIndex = -1;
        this.ariaSelectedAttribute = false;
        this.tabClass = true;
        this.activeTabLabelClass = false;
        this.tabId = 0;
    }
    set active(val) {
        this.tabIndex = val ? 0 : -1;
        this.activeTabLabelClass = this.ariaSelectedAttribute = val;
    }
    navigateTabs(event) {
        var _a, _b;
        switch (event.key) {
            case 'Left':
            case 'ArrowLeft':
                (_a = this.elementRef.nativeElement.previousElementSibling) === null || _a === void 0 ? void 0 : _a.focus();
                break;
            case 'Right':
            case 'ArrowRight':
                (_b = this.elementRef.nativeElement.nextElementSibling) === null || _b === void 0 ? void 0 : _b.focus();
                break;
            default:
                break;
        }
    }
    get tabId() {
        return this._tabId;
    }
    set tabId(val) {
        this.id = 'tab-' + val;
        this._tabId = val;
    }
    selectTab() {
        this.active = true;
    }
    deselectTab() {
        this.active = false;
    }
}
BmoNgTabComponent.decorators = [
    { type: Component, args: [{
                selector: 'bmo-ng-tab',
                template: `
        {{label}}
        <span class="tab-indicator"></span>
    `
            },] }
];
BmoNgTabComponent.ctorParameters = () => [
    { type: ElementRef }
];
BmoNgTabComponent.propDecorators = {
    label: [{ type: Input }],
    active: [{ type: Input }],
    id: [{ type: HostBinding, args: ['attr.id',] }],
    roleAttribute: [{ type: HostBinding, args: ['attr.role',] }],
    tabIndex: [{ type: HostBinding, args: ['attr.tabindex',] }],
    ariaSelectedAttribute: [{ type: HostBinding, args: ['attr.aria-selected',] }],
    tabClass: [{ type: HostBinding, args: ['class.tab',] }],
    activeTabLabelClass: [{ type: HostBinding, args: ['class.active-tab-label',] }],
    navigateTabs: [{ type: HostListener, args: ['keydown', ['$event'],] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm1vLW5nLXRhYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiQzovQk1Pc291cmNlZmlsZXMvYm1vLWRzLWFuZ3VsYXIvYm1vLWRzLWFuZ3VsYXIvcHJvamVjdHMvYm1vLWRzLWFuZ3VsYXItY29tcG9uZW50cy9zcmMvIiwic291cmNlcyI6WyJsaWIvYm1vLWRlc2lnbi1zeXN0ZW0vYm1vLW5nLXRhYnMvYm1vLW5nLXRhYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFTeEYsTUFBTSxPQUFPLGlCQUFpQjtJQXVDMUIsWUFBbUIsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQXRDaEMsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQU1JLE9BQUUsR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN2QixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUNsQixhQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDVCwwQkFBcUIsR0FBRyxLQUFLLENBQUM7UUFDdkMsYUFBUSxHQUFHLElBQUksQ0FBQztRQUNILHdCQUFtQixHQUFHLEtBQUssQ0FBQztRQTRCL0QsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQXZDRCxJQUFhLE1BQU0sQ0FBQyxHQUFZO1FBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMscUJBQXFCLEdBQUcsR0FBRyxDQUFDO0lBQ2hFLENBQUM7SUFVTyxZQUFZLENBQUMsS0FBb0I7O1FBQ3JDLFFBQVEsS0FBSyxDQUFDLEdBQUcsRUFBRTtZQUNmLEtBQUssTUFBTSxDQUFDO1lBQ1osS0FBSyxXQUFXO2dCQUNaLE1BQUEsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsc0JBQXNCLDBDQUFFLEtBQUssR0FBRztnQkFDOUQsTUFBTTtZQUNWLEtBQUssT0FBTyxDQUFDO1lBQ2IsS0FBSyxZQUFZO2dCQUNiLE1BQUEsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLDBDQUFFLEtBQUssR0FBRztnQkFDMUQsTUFBTTtZQUNWO2dCQUNJLE1BQU07U0FDYjtJQUNMLENBQUM7SUFFRCxJQUFJLEtBQUs7UUFDTCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUNELElBQUksS0FBSyxDQUFDLEdBQVc7UUFDakIsSUFBSSxDQUFDLEVBQUUsR0FBRyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO0lBQ3RCLENBQUM7SUFPRCxTQUFTO1FBQ0wsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDdkIsQ0FBQztJQUVELFdBQVc7UUFDUCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDOzs7WUF4REosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUU7OztLQUdUO2FBQ0o7OztZQVJtQixVQUFVOzs7b0JBVXpCLEtBQUs7cUJBQ0wsS0FBSztpQkFLTCxXQUFXLFNBQUMsU0FBUzs0QkFDckIsV0FBVyxTQUFDLFdBQVc7dUJBQ3ZCLFdBQVcsU0FBQyxlQUFlO29DQUMzQixXQUFXLFNBQUMsb0JBQW9CO3VCQUNoQyxXQUFXLFNBQUMsV0FBVztrQ0FDdkIsV0FBVyxTQUFDLHdCQUF3QjsyQkFFcEMsWUFBWSxTQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdibW8tbmctdGFiJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAge3tsYWJlbH19XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ0YWItaW5kaWNhdG9yXCI+PC9zcGFuPlxyXG4gICAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQm1vTmdUYWJDb21wb25lbnQge1xyXG4gICAgQElucHV0KCkgbGFiZWwgPSBcIlwiO1xyXG4gICAgQElucHV0KCkgc2V0IGFjdGl2ZSh2YWw6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLnRhYkluZGV4ID0gdmFsID8gMCA6IC0xO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlVGFiTGFiZWxDbGFzcyA9IHRoaXMuYXJpYVNlbGVjdGVkQXR0cmlidXRlID0gdmFsO1xyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0QmluZGluZygnYXR0ci5pZCcpIGlkID0gJ3RhYi0nICsgdGhpcy50YWJJZDtcclxuICAgIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJykgcm9sZUF0dHJpYnV0ZSA9ICd0YWInO1xyXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLnRhYmluZGV4JykgdGFiSW5kZXggPSAtMTtcclxuICAgIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLXNlbGVjdGVkJykgYXJpYVNlbGVjdGVkQXR0cmlidXRlID0gZmFsc2U7XHJcbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLnRhYicpIHRhYkNsYXNzID0gdHJ1ZTtcclxuICAgIEBIb3N0QmluZGluZygnY2xhc3MuYWN0aXZlLXRhYi1sYWJlbCcpIGFjdGl2ZVRhYkxhYmVsQ2xhc3MgPSBmYWxzZTtcclxuXHJcbiAgICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSlcclxuICAgIHByaXZhdGUgbmF2aWdhdGVUYWJzKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoIChldmVudC5rZXkpIHtcclxuICAgICAgICAgICAgY2FzZSAnTGVmdCc6XHJcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nPy5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ1JpZ2h0JzpcclxuICAgICAgICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmc/LmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXQgdGFiSWQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdGFiSWQ7XHJcbiAgICB9XHJcbiAgICBzZXQgdGFiSWQodmFsOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmlkID0gJ3RhYi0nICsgdmFsO1xyXG4gICAgICAgIHRoaXMuX3RhYklkID0gdmFsO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBfdGFiSWQ6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xyXG4gICAgICAgIHRoaXMudGFiSWQgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdFRhYigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzZWxlY3RUYWIoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxufSJdfQ==