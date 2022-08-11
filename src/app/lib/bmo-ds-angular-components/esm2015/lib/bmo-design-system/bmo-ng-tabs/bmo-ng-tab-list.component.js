import { Component, ContentChildren, ElementRef, HostBinding } from '@angular/core';
import { BmoNgTabPanelComponent } from './bmo-ng-tab-panel.component';
import { BmoNgTabComponent } from './bmo-ng-tab.component';
export class BmoNgTabListComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.tabsWrapClass = true;
    }
    ngAfterContentInit() {
        if (this.dslTabs.length !== this.dslPanels.length) {
            console.error('ERROR: Tab element count does not equal tab panel count. Aborting.');
            return;
        }
        const dslTabsArray = this.dslTabs.toArray();
        const dslPanelsArray = this.dslPanels.toArray();
        for (let i = 0; i < this.dslTabs.length; i++) {
            const tab = dslTabsArray[i];
            const tabPanel = dslPanelsArray[i];
            tab.tabId = tabPanel.tabId = i;
            tab.elementRef.nativeElement.addEventListener('click', _ => this.selectTab(i));
            tab.elementRef.nativeElement.addEventListener('keyup', (event) => {
                if (event.key === 'Down' || event.key === 'ArrowDown' || event.key === 'Enter') {
                    this.selectTab(i);
                }
            });
        }
    }
    selectTab(tabId) {
        if (this.selectedTabIndex === tabId) {
            return;
        }
        const dslTabsArray = this.dslTabs.toArray();
        const dslPanelsArray = this.dslPanels.toArray();
        for (let i = 0; i < this.dslTabs.length; i++) {
            const tab = dslTabsArray[i];
            const tabPanel = dslPanelsArray[i];
            if (tab.tabId === tabId) {
                tab.selectTab();
                tabPanel.displayTabPanel();
            }
            else {
                tab.deselectTab();
                tabPanel.hideTabPanel();
            }
        }
        this.selectedTabIndex = tabId;
        this.scrollTabsIfNeeded(tabId);
    }
    scrollTabsIfNeeded(tabId) {
        const tab = this.dslTabs.toArray()[tabId];
        const tabOffsetLeft = tab.elementRef.nativeElement.offsetLeft;
        const tabOffsetWidth = tab.elementRef.nativeElement.offsetWidth;
        const tabWrapOffsetWidth = this.elementRef.nativeElement.offsetWidth;
        const amountForTabsToMove = tabOffsetLeft - Math.abs(tabWrapOffsetWidth - tabOffsetWidth) / 2;
        this.elementRef.nativeElement.scrollLeft = amountForTabsToMove;
    }
}
BmoNgTabListComponent.decorators = [
    { type: Component, args: [{
                selector: 'bmo-ng-tab-list',
                template: `
        <ul class="tab-list" role="tablist" aria-label="Use right and left arrows to navigate between tabs">
            <ng-content select="bmo-ng-tab"></ng-content>
            <span class="tablist-guideline" aria-hidden="true"></span>
        </ul>
        <ng-content select="bmo-ng-tab-panel"></ng-content>
    `
            },] }
];
BmoNgTabListComponent.ctorParameters = () => [
    { type: ElementRef }
];
BmoNgTabListComponent.propDecorators = {
    tabsWrapClass: [{ type: HostBinding, args: ['class.bmo-tabs-wrap',] }],
    dslTabs: [{ type: ContentChildren, args: [BmoNgTabComponent,] }],
    dslPanels: [{ type: ContentChildren, args: [BmoNgTabPanelComponent,] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm1vLW5nLXRhYi1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJDOi9CTU9zb3VyY2VmaWxlcy9ibW8tZHMtYW5ndWxhci9ibW8tZHMtYW5ndWxhci9wcm9qZWN0cy9ibW8tZHMtYW5ndWxhci1jb21wb25lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9ibW8tZGVzaWduLXN5c3RlbS9ibW8tbmctdGFicy9ibW8tbmctdGFiLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBb0IsU0FBUyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ2pILE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBWTNELE1BQU0sT0FBTyxxQkFBcUI7SUFROUIsWUFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQVBOLGtCQUFhLEdBQUcsSUFBSSxDQUFDO0lBT1osQ0FBQztJQUU5QyxrQkFBa0I7UUFDZCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO1lBQy9DLE9BQU8sQ0FBQyxLQUFLLENBQUMsb0VBQW9FLENBQUMsQ0FBQztZQUNwRixPQUFPO1NBQ1Y7UUFFRCxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzVDLE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFaEQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzFDLE1BQU0sR0FBRyxHQUFHLFlBQVksQ0FBQyxDQUFDLENB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LCBDb250ZW50Q2hpbGRyZW4sIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nLCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQm1vTmdUYWJQYW5lbENvbXBvbmVudCB9IGZyb20gJy4vYm1vLW5nLXRhYi1wYW5lbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCbW9OZ1RhYkNvbXBvbmVudCB9IGZyb20gJy4vYm1vLW5nLXRhYi5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2Jtby1uZy10YWItbGlzdCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDx1bCBjbGFzcz1cInRhYi1saXN0XCIgcm9sZT1cInRhYmxpc3RcIiBhcmlhLWxhYmVsPVwiVXNlIHJpZ2h0IGFuZCBsZWZ0IGFycm93cyB0byBuYXZpZ2F0ZSBiZXR3ZWVuIHRhYnNcIj5cclxuICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiYm1vLW5nLXRhYlwiPjwvbmctY29udGVudD5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0YWJsaXN0LWd1aWRlbGluZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImJtby1uZy10YWItcGFuZWxcIj48L25nLWNvbnRlbnQ+XHJcbiAgICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCbW9OZ1RhYkxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcclxuICAgIEBIb3N0QmluZGluZygnY2xhc3MuYm1vLXRhYnMtd3JhcCcpIHRhYnNXcmFwQ2xhc3MgPSB0cnVlO1xyXG5cclxuICAgIEBDb250ZW50Q2hpbGRyZW4oQm1vTmdUYWJDb21wb25lbnQpIGRzbFRhYnM6IFF1ZXJ5TGlzdDxCbW9OZ1RhYkNvbXBvbmVudD47XHJcbiAgICBAQ29udGVudENoaWxkcmVuKEJtb05nVGFiUGFuZWxDb21wb25lbnQpIGRzbFBhbmVsczogUXVlcnlMaXN0PEJtb05nVGFiUGFuZWxDb21wb25lbnQ+O1xyXG5cclxuICAgIHByaXZhdGUgc2VsZWN0ZWRUYWJJbmRleDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge31cclxuXHJcbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZHNsVGFicy5sZW5ndGggIT09IHRoaXMuZHNsUGFuZWxzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFUlJPUjogVGFiIGVsZW1lbnQgY291bnQgZG9lcyBub3QgZXF1YWwgdGFiIHBhbmVsIGNvdW50LiBBYm9ydGluZy4nKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZHNsVGFic0FycmF5ID0gdGhpcy5kc2xUYWJzLnRvQXJyYXkoKTtcclxuICAgICAgICBjb25zdCBkc2xQYW5lbHNBcnJheSA9IHRoaXMuZHNsUGFuZWxzLnRvQXJyYXkoKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRzbFRhYnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgdGFiID0gZHNsVGFic0FycmF5W2ldO1xyXG4gICAgICAgICAgICBjb25zdCB0YWJQYW5lbCA9IGRzbFBhbmVsc0FycmF5W2ldO1xyXG4gICAgICAgICAgICB0YWIudGFiSWQgPSB0YWJQYW5lbC50YWJJZCA9IGk7XHJcblxyXG4gICAgICAgICAgICB0YWIuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgXyA9PiB0aGlzLnNlbGVjdFRhYihpKSk7XHJcbiAgICAgICAgICAgIHRhYi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09ICdEb3duJyB8fCBldmVudC5rZXkgPT09ICdBcnJvd0Rvd24nIHx8IGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0VGFiKGkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0VGFiKHRhYklkOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZFRhYkluZGV4ID09PSB0YWJJZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBkc2xUYWJzQXJyYXkgPSB0aGlzLmRzbFRhYnMudG9BcnJheSgpO1xyXG4gICAgICAgIGNvbnN0IGRzbFBhbmVsc0FycmF5ID0gdGhpcy5kc2xQYW5lbHMudG9BcnJheSgpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZHNsVGFicy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCB0YWIgPSBkc2xUYWJzQXJyYXlbaV07XHJcbiAgICAgICAgICAgIGNvbnN0IHRhYlBhbmVsID0gZHNsUGFuZWxzQXJyYXlbaV07XHJcblxyXG4gICAgICAgICAgICBpZiAodGFiLnRhYklkID09PSB0YWJJZCkge1xyXG4gICAgICAgICAgICAgICAgdGFiLnNlbGVjdFRhYigpO1xyXG4gICAgICAgICAgICAgICAgdGFiUGFuZWwuZGlzcGxheVRhYlBhbmVsKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0YWIuZGVzZWxlY3RUYWIoKTtcclxuICAgICAgICAgICAgICAgIHRhYlBhbmVsLmhpZGVUYWJQYW5lbCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNlbGVjdGVkVGFiSW5kZXggPSB0YWJJZDtcclxuXHJcbiAgICAgICAgdGhpcy5zY3JvbGxUYWJzSWZOZWVkZWQodGFiSWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2Nyb2xsVGFic0lmTmVlZGVkKHRhYklkOiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCB0YWIgPSB0aGlzLmRzbFRhYnMudG9BcnJheSgpW3RhYklkXTtcclxuXHJcbiAgICAgICAgY29uc3QgdGFiT2Zmc2V0TGVmdCA9IHRhYi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0TGVmdDtcclxuICAgICAgICBjb25zdCB0YWJPZmZzZXRXaWR0aCA9IHRhYi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgY29uc3QgdGFiV3JhcE9mZnNldFdpZHRoID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgY29uc3QgYW1vdW50Rm9yVGFic1RvTW92ZSA9IHRhYk9mZnNldExlZnQgLSBNYXRoLmFicyh0YWJXcmFwT2Zmc2V0V2lkdGggLSB0YWJPZmZzZXRXaWR0aCkgLyAyO1xyXG5cclxuICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zY3JvbGxMZWZ0ID0gYW1vdW50Rm9yVGFic1RvTW92ZTtcclxuICAgIH1cclxufSJdfQ==