import { Component, HostBinding, Input } from '@angular/core';
export class BmoNgTabPanelComponent {
    constructor() {
        this.tabPanelClass = true;
        this.id = 'tab-' + this.tabId;
        this.roleAttribute = 'tabpanel';
        this.ariaDescribedByAttribute = 'tab-' + this.tabId;
        this.activeTabContentClass = false;
        this.ariaHiddenAttribute = true;
    }
    set active(val) {
        this.ariaHiddenAttribute = !val;
        this.activeTabContentClass = val;
    }
    get tabId() {
        return this._tabId;
    }
    set tabId(val) {
        this.id = 'tab-' + val + '-panel';
        this.ariaDescribedByAttribute = 'tab-' + val;
        this._tabId = val;
    }
    displayTabPanel() {
        this.active = true;
    }
    hideTabPanel() {
        this.active = false;
    }
}
BmoNgTabPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'bmo-ng-tab-panel',
                template: `
        <div class="panel-content">
            <ng-content></ng-content>
        </div>
    `
            },] }
];
BmoNgTabPanelComponent.propDecorators = {
    active: [{ type: Input }],
    tabPanelClass: [{ type: HostBinding, args: ['class.tab-panel',] }],
    id: [{ type: HostBinding, args: ['attr.id',] }],
    roleAttribute: [{ type: HostBinding, args: ['attr.role',] }],
    ariaDescribedByAttribute: [{ type: HostBinding, args: ['attr.aria-describedby',] }],
    activeTabContentClass: [{ type: HostBinding, args: ['class.active-tab-content',] }],
    ariaHiddenAttribute: [{ type: HostBinding, args: ['attr.aria-hidden',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm1vLW5nLXRhYi1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiQzovQk1Pc291cmNlZmlsZXMvYm1vLWRzLWFuZ3VsYXIvYm1vLWRzLWFuZ3VsYXIvcHJvamVjdHMvYm1vLWRzLWFuZ3VsYXItY29tcG9uZW50cy9zcmMvIiwic291cmNlcyI6WyJsaWIvYm1vLWRlc2lnbi1zeXN0ZW0vYm1vLW5nLXRhYnMvYm1vLW5nLXRhYi1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBVTlELE1BQU0sT0FBTyxzQkFBc0I7SUFSbkM7UUFjb0Msa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFDN0IsT0FBRSxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3ZCLGtCQUFhLEdBQUcsVUFBVSxDQUFDO1FBQ2YsNkJBQXdCLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDNUMsMEJBQXFCLEdBQUcsS0FBSyxDQUFDO1FBQ3RDLHdCQUFtQixHQUFHLElBQUksQ0FBQztJQW1CaEUsQ0FBQztJQTdCRyxJQUFhLE1BQU0sQ0FBQyxHQUFZO1FBQzVCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUNoQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsR0FBRyxDQUFDO0lBQ3JDLENBQUM7SUFTRCxJQUFJLEtBQUs7UUFDTCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUNELElBQUksS0FBSyxDQUFDLEdBQVc7UUFDakIsSUFBSSxDQUFDLEVBQUUsR0FBRyxNQUFNLEdBQUcsR0FBRyxHQUFHLFFBQVEsQ0FBQztRQUNsQyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUM3QyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztJQUN0QixDQUFDO0lBR0QsZUFBZTtRQUNYLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxZQUFZO1FBQ1IsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQzs7O1lBckNKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUU7Ozs7S0FJVDthQUNKOzs7cUJBRUksS0FBSzs0QkFLTCxXQUFXLFNBQUMsaUJBQWlCO2lCQUM3QixXQUFXLFNBQUMsU0FBUzs0QkFDckIsV0FBVyxTQUFDLFdBQVc7dUNBQ3ZCLFdBQVcsU0FBQyx1QkFBdUI7b0NBQ25DLFdBQVcsU0FBQywwQkFBMEI7a0NBQ3RDLFdBQVcsU0FBQyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2Jtby1uZy10YWItcGFuZWwnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCbW9OZ1RhYlBhbmVsQ29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIHNldCBhY3RpdmUodmFsOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5hcmlhSGlkZGVuQXR0cmlidXRlID0gIXZhbDtcclxuICAgICAgICB0aGlzLmFjdGl2ZVRhYkNvbnRlbnRDbGFzcyA9IHZhbDtcclxuICAgIH1cclxuXHJcbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLnRhYi1wYW5lbCcpIHRhYlBhbmVsQ2xhc3MgPSB0cnVlO1xyXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLmlkJykgaWQgPSAndGFiLScgKyB0aGlzLnRhYklkO1xyXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKSByb2xlQXR0cmlidXRlID0gJ3RhYnBhbmVsJztcclxuICAgIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWRlc2NyaWJlZGJ5JykgYXJpYURlc2NyaWJlZEJ5QXR0cmlidXRlID0gJ3RhYi0nICsgdGhpcy50YWJJZDtcclxuICAgIEBIb3N0QmluZGluZygnY2xhc3MuYWN0aXZlLXRhYi1jb250ZW50JykgYWN0aXZlVGFiQ29udGVudENsYXNzID0gZmFsc2U7XHJcbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1oaWRkZW4nKSBhcmlhSGlkZGVuQXR0cmlidXRlID0gdHJ1ZTtcclxuXHJcbiAgICBnZXQgdGFiSWQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdGFiSWQ7XHJcbiAgICB9XHJcbiAgICBzZXQgdGFiSWQodmFsOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmlkID0gJ3RhYi0nICsgdmFsICsgJy1wYW5lbCc7XHJcbiAgICAgICAgdGhpcy5hcmlhRGVzY3JpYmVkQnlBdHRyaWJ1dGUgPSAndGFiLScgKyB2YWw7XHJcbiAgICAgICAgdGhpcy5fdGFiSWQgPSB2YWw7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIF90YWJJZDogbnVtYmVyO1xyXG5cclxuICAgIGRpc3BsYXlUYWJQYW5lbCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZVRhYlBhbmVsKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcbn0iXX0=