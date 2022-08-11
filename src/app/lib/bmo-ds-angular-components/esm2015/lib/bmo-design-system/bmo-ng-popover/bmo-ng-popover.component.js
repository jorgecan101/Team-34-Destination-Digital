import { Component, ViewChild, Input } from '@angular/core';
export class BmoNgPopoverComponent {
    constructor() {
        this.icon = 'enclosed-help';
        this.direction = 'top';
        this.title = '';
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
    ngAfterViewChecked() {
        // Fixes BMO Design System bug where margin for top popover isn't dynamic with the popover height
        if (this.direction === 'top' && this.popoverContent) {
            this.popoverContent.nativeElement.style.marginTop = -(this.popoverContent.nativeElement.clientHeight + 30) + 'px';
        }
    }
    displayPopover() {
        this.isActive = true;
        setTimeout(() => {
            this.popoverContent.nativeElement.focus();
        }, 200);
    }
    closePopover() {
        this.isActive = false;
    }
}
BmoNgPopoverComponent.decorators = [
    { type: Component, args: [{
                selector: 'bmo-ng-popover',
                template: "<div class=\"popover-wrapper\">\r\n    <button #popoverButton class=\"icon-button medium popover-trigger\" aria-label=\"Click here for help text\" aria-haspopup=\"true\" (click)=\"displayPopover()\">Click here for help text<span [ngClass]=\"['icon', icon, 'medium']\"></span></button>\r\n    <div #popoverContent [ngClass]=\"['popover', 'block', direction]\" [class.active]=\"isActive\" [tabindex]=\"isActive ? 0 : -1\" [ngStyle]=\"containerStyle\">\r\n        <button class=\"icon-button medium pull-right close-popover\" aria-haspopup=\"true\" (click)=\"closePopover()\" [ngStyle]=\"buttonStyle\">\r\n            Close this popover\r\n            <span class=\"icon close medium granite\"></span>\r\n        </button>\r\n        <p class=\"popover-header\">{{title}}</p>\r\n        <ng-content></ng-content>\r\n    </div>\r\n    <div class=\"bmo-overlay-light\" [class.active]=\"isActive\" (click)=\"closePopover()\"></div>\r\n</div>",
                host: { '[class.popover-wrapper]': 'true' },
                styles: [".popover{-webkit-transition:none;transition:none}"]
            },] }
];
BmoNgPopoverComponent.ctorParameters = () => [];
BmoNgPopoverComponent.propDecorators = {
    icon: [{ type: Input }],
    direction: [{ type: Input }],
    title: [{ type: Input }],
    containerStyle: [{ type: Input }],
    buttonStyle: [{ type: Input }],
    popoverButton: [{ type: ViewChild, args: ['popoverButton',] }],
    popoverContent: [{ type: ViewChild, args: ['popoverContent',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm1vLW5nLXBvcG92ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IkM6L0JNT3NvdXJjZWZpbGVzL2Jtby1kcy1hbmd1bGFyL2Jtby1kcy1hbmd1bGFyL3Byb2plY3RzL2Jtby1kcy1hbmd1bGFyLWNvbXBvbmVudHMvc3JjLyIsInNvdXJjZXMiOlsibGliL2Jtby1kZXNpZ24tc3lzdGVtL2Jtby1uZy1wb3BvdmVyL2Jtby1uZy1wb3BvdmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFNBQVMsRUFBYyxLQUFLLEVBQW1DLE1BQU0sZUFBZSxDQUFDO0FBUWpILE1BQU0sT0FBTyxxQkFBcUI7SUFZaEM7UUFYUyxTQUFJLEdBQUcsZUFBZSxDQUFDO1FBQ3ZCLGNBQVMsR0FBa0MsS0FBSyxDQUFDO1FBQ2pELFVBQUssR0FBRyxFQUFFLENBQUM7SUFTSixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDO0lBRUQsZUFBZTtJQUNmLENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsaUdBQWlHO1FBQ2pHLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxLQUFLLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUNuRCxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQ25IO0lBQ0gsQ0FBQztJQUVELGNBQWM7UUFDWixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUVyQixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDNUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDOzs7WUEzQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLG03QkFBOEM7Z0JBQzlDLElBQUksRUFBRSxFQUFFLHlCQUF5QixFQUFFLE1BQU0sRUFBQzs7YUFFM0M7Ozs7bUJBRUUsS0FBSzt3QkFDTCxLQUFLO29CQUNMLEtBQUs7NkJBQ0wsS0FBSzswQkFDTCxLQUFLOzRCQUVMLFNBQVMsU0FBQyxlQUFlOzZCQUN6QixTQUFTLFNBQUMsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgSW5wdXQsIEFmdGVyVmlld0luaXQsIEFmdGVyVmlld0NoZWNrZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYm1vLW5nLXBvcG92ZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9ibW8tbmctcG9wb3Zlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgaG9zdDogeyAnW2NsYXNzLnBvcG92ZXItd3JhcHBlcl0nOiAndHJ1ZSd9LFxyXG4gIHN0eWxlVXJsczogWycuL2Jtby1uZy1wb3BvdmVyLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEJtb05nUG9wb3ZlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJWaWV3Q2hlY2tlZCB7XHJcbiAgQElucHV0KCkgaWNvbiA9ICdlbmNsb3NlZC1oZWxwJztcclxuICBASW5wdXQoKSBkaXJlY3Rpb246ICd0b3AnfCdsZWZ0J3wncmlnaHQnfCdib3R0b20nID0gJ3RvcCc7XHJcbiAgQElucHV0KCkgdGl0bGUgPSAnJztcclxuICBASW5wdXQoKSBjb250YWluZXJTdHlsZTtcclxuICBASW5wdXQoKSBidXR0b25TdHlsZTtcclxuXHJcbiAgQFZpZXdDaGlsZCgncG9wb3ZlckJ1dHRvbicpIHBvcG92ZXJCdXR0b246IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgncG9wb3ZlckNvbnRlbnQnKSBwb3BvdmVyQ29udGVudDogRWxlbWVudFJlZjtcclxuXHJcbiAgcHVibGljIGlzQWN0aXZlOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpIHtcclxuICAgIC8vIEZpeGVzIEJNTyBEZXNpZ24gU3lzdGVtIGJ1ZyB3aGVyZSBtYXJnaW4gZm9yIHRvcCBwb3BvdmVyIGlzbid0IGR5bmFtaWMgd2l0aCB0aGUgcG9wb3ZlciBoZWlnaHRcclxuICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gJ3RvcCcgJiYgdGhpcy5wb3BvdmVyQ29udGVudCkge1xyXG4gICAgICB0aGlzLnBvcG92ZXJDb250ZW50Lm5hdGl2ZUVsZW1lbnQuc3R5bGUubWFyZ2luVG9wID0gLSh0aGlzLnBvcG92ZXJDb250ZW50Lm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0ICsgMzApICsgJ3B4JztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRpc3BsYXlQb3BvdmVyKCkge1xyXG4gICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMucG9wb3ZlckNvbnRlbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgfSwgMjAwKTtcclxuICB9XHJcblxyXG4gIGNsb3NlUG9wb3ZlcigpIHtcclxuICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcclxuICB9XHJcbn1cclxuIl19