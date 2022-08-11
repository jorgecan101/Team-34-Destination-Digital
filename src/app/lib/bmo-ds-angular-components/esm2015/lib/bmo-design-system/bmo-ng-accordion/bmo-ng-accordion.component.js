import { Component, Input, ViewChild, HostBinding } from '@angular/core';
export class BmoNgAccordionComponent {
    constructor() {
        this.bmoAccordionClass = true;
        this.iconRightAttribute = null;
        this.compactAttribute = null;
        this.title = '';
        this._compact = false;
        this._iconRight = false;
        this._expanded = false;
    }
    get compact() {
        return this._compact;
    }
    set compact(compact) {
        this.compactAttribute = compact;
        this._compact = compact;
        if (!this.compactAttribute) {
            this.compactAttribute = null;
        }
    }
    get iconRight() {
        return this._iconRight;
    }
    set iconRight(iconRight) {
        this.iconRightAttribute = iconRight;
        this._iconRight = iconRight;
        if (!this.iconRightAttribute) {
            this.iconRightAttribute = null;
        }
    }
    get expanded() {
        return this._expanded;
    }
    set expanded(expanded) {
        this._expanded = expanded;
        this.setPanelContainerHeight();
    }
    ngOnInit() {
        if (!this.id) {
            this.id = "accordion";
        }
    }
    ngAfterViewInit() {
        this.setPanelContainerHeight();
    }
    toggleAccordion() {
        this.expanded = !this.expanded;
    }
    keydownShouldToggleAccordion(event) {
        if (event.key === ' ' || event.key === 'Spacebar' || event.key === 'Enter') {
            this.toggleAccordion();
            event.preventDefault();
        }
        if (event.key === 'Down' || event.key === 'ArrowDown') {
            this.expanded = true;
            event.preventDefault();
        }
    }
    keyupShouldToggleAccordion(event) {
        if (event.key === 'Up' || event.key === 'ArrowUp') {
            this.expanded = false;
            event.preventDefault();
        }
    }
    setPanelContainerHeight() {
        if (this.expanded) {
            this.panelContainer.nativeElement.style.height = this.panelContent.nativeElement.offsetHeight + 'px';
        }
        else {
            this.panelContainer.nativeElement.removeAttribute('style');
        }
    }
}
BmoNgAccordionComponent.decorators = [
    { type: Component, args: [{
                selector: 'bmo-ng-accordion',
                template: "<button class=\"accordion-trigger\" [class.trigger-compact]=\"compact\" [class.expanded]=\"expanded\" tabindex=\"0\" role=\"tab\" [attr.aria-expanded]=\"expanded\" (click)=\"toggleAccordion()\" (keydown)=\"keydownShouldToggleAccordion($event)\" (keyup)=\"keyupShouldToggleAccordion($event)\">\r\n    <span aria-hidden=\"true\" class=\"icon\" [class.chevron-down]=\"!compact\" [class.baby-chevy-down]=\"compact\" [class.medium]=\"!compact\" [class.small]=\"compact\" title=\"Chevron down\" [class.pull-right]=\"iconRight\" role=\"presentation\"></span>\r\n    <span>{{title}}</span>\r\n    <span class=\"short-border\" [class.hide-me]=\"expanded\"></span>\r\n</button>\r\n<div #panelContainer class=\"accordion-panel\" [class.expanded]=\"expanded\" role=\"tabpanel\">\r\n    <div #panelContent class=\"panel-content\">\r\n        <ng-content></ng-content>\r\n    </div>\r\n    <span class=\"short-border\"></span>\r\n</div>",
                styles: [""]
            },] }
];
BmoNgAccordionComponent.ctorParameters = () => [];
BmoNgAccordionComponent.propDecorators = {
    accordionTrigger: [{ type: ViewChild, args: ['accordionTrigger',] }],
    accordionPanel: [{ type: ViewChild, args: ['accordionPanel',] }],
    panelContainer: [{ type: ViewChild, args: ['panelContainer',] }],
    panelContent: [{ type: ViewChild, args: ['panelContent',] }],
    bmoAccordionClass: [{ type: HostBinding, args: ['class.bmo-accordion',] }],
    iconRightAttribute: [{ type: HostBinding, args: ['attr.icon-right',] }],
    compactAttribute: [{ type: HostBinding, args: ['attr.compact',] }],
    title: [{ type: Input }],
    compact: [{ type: Input }],
    iconRight: [{ type: Input }],
    expanded: [{ type: Input }],
    id: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm1vLW5nLWFjY29yZGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiQzovQk1Pc291cmNlZmlsZXMvYm1vLWRzLWFuZ3VsYXIvYm1vLWRzLWFuZ3VsYXIvcHJvamVjdHMvYm1vLWRzLWFuZ3VsYXItY29tcG9uZW50cy9zcmMvIiwic291cmNlcyI6WyJsaWIvYm1vLWRlc2lnbi1zeXN0ZW0vYm1vLW5nLWFjY29yZGlvbi9ibW8tbmctYWNjb3JkaW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxTQUFTLEVBQTZCLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU81RyxNQUFNLE9BQU8sdUJBQXVCO0lBNkNsQztRQXZDb0Msc0JBQWlCLEdBQUcsSUFBSSxDQUFDO1FBQzdCLHVCQUFrQixHQUFHLElBQUksQ0FBQztRQUM3QixxQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFFNUMsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQVlwQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBWWpCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFRbkIsY0FBUyxHQUFHLEtBQUssQ0FBQztJQUdILENBQUM7SUFsQ2hCLElBQWEsT0FBTztRQUNsQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUNELElBQUksT0FBTyxDQUFDLE9BQWdCO1FBQzFCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxPQUFPLENBQUM7UUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7UUFFeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUMxQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1NBQzlCO0lBQ0gsQ0FBQztJQUVELElBQWEsU0FBUztRQUNwQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQUNELElBQUksU0FBUyxDQUFDLFNBQWtCO1FBQzlCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxTQUFTLENBQUM7UUFDcEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFFNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUM1QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQztJQUVELElBQWEsUUFBUTtRQUNuQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUNELElBQUksUUFBUSxDQUFDLFFBQWlCO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQzFCLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFNRCxRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDWixJQUFJLENBQUMsRUFBRSxHQUFHLFdBQVcsQ0FBQztTQUN2QjtJQUNILENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNqQyxDQUFDO0lBRUQsNEJBQTRCLENBQUMsS0FBb0I7UUFDL0MsSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLFVBQVUsSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLE9BQU8sRUFBRTtZQUMxRSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDdkIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3hCO1FBRUQsSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLE1BQU0sSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLFdBQVcsRUFBRTtZQUNyRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDeEI7SUFDSCxDQUFDO0lBRUQsMEJBQTBCLENBQUMsS0FBb0I7UUFDN0MsSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLElBQUksSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNqRCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDeEI7SUFDSCxDQUFDO0lBRU8sdUJBQXVCO1FBQzdCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7U0FDdEc7YUFBTTtZQUNMLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM1RDtJQUNILENBQUM7OztZQTNGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsczZCQUFnRDs7YUFFakQ7Ozs7K0JBRUUsU0FBUyxTQUFDLGtCQUFrQjs2QkFDNUIsU0FBUyxTQUFDLGdCQUFnQjs2QkFDMUIsU0FBUyxTQUFDLGdCQUFnQjsyQkFDMUIsU0FBUyxTQUFDLGNBQWM7Z0NBRXhCLFdBQVcsU0FBQyxxQkFBcUI7aUNBQ2pDLFdBQVcsU0FBQyxpQkFBaUI7K0JBQzdCLFdBQVcsU0FBQyxjQUFjO29CQUUxQixLQUFLO3NCQUNMLEtBQUs7d0JBWUwsS0FBSzt1QkFZTCxLQUFLO2lCQVFMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYm1vLW5nLWFjY29yZGlvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Jtby1uZy1hY2NvcmRpb24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2Jtby1uZy1hY2NvcmRpb24uY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQm1vTmdBY2NvcmRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xyXG4gIEBWaWV3Q2hpbGQoJ2FjY29yZGlvblRyaWdnZXInKSBhY2NvcmRpb25UcmlnZ2VyOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2FjY29yZGlvblBhbmVsJykgYWNjb3JkaW9uUGFuZWw6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgncGFuZWxDb250YWluZXInKSBwYW5lbENvbnRhaW5lcjogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdwYW5lbENvbnRlbnQnKSBwYW5lbENvbnRlbnQ6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYm1vLWFjY29yZGlvbicpIGJtb0FjY29yZGlvbkNsYXNzID0gdHJ1ZTtcclxuICBASG9zdEJpbmRpbmcoJ2F0dHIuaWNvbi1yaWdodCcpIGljb25SaWdodEF0dHJpYnV0ZSA9IG51bGw7XHJcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmNvbXBhY3QnKSBjb21wYWN0QXR0cmlidXRlID0gbnVsbDtcclxuXHJcbiAgQElucHV0KCkgdGl0bGUgPSAnJztcclxuICBASW5wdXQoKSBnZXQgY29tcGFjdCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb21wYWN0O1xyXG4gIH1cclxuICBzZXQgY29tcGFjdChjb21wYWN0OiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmNvbXBhY3RBdHRyaWJ1dGUgPSBjb21wYWN0O1xyXG4gICAgdGhpcy5fY29tcGFjdCA9IGNvbXBhY3Q7XHJcblxyXG4gICAgaWYgKCF0aGlzLmNvbXBhY3RBdHRyaWJ1dGUpIHtcclxuICAgICAgdGhpcy5jb21wYWN0QXR0cmlidXRlID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcbiAgX2NvbXBhY3QgPSBmYWxzZTtcclxuICBASW5wdXQoKSBnZXQgaWNvblJpZ2h0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2ljb25SaWdodDtcclxuICB9XHJcbiAgc2V0IGljb25SaWdodChpY29uUmlnaHQ6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuaWNvblJpZ2h0QXR0cmlidXRlID0gaWNvblJpZ2h0O1xyXG4gICAgdGhpcy5faWNvblJpZ2h0ID0gaWNvblJpZ2h0O1xyXG5cclxuICAgIGlmICghdGhpcy5pY29uUmlnaHRBdHRyaWJ1dGUpIHtcclxuICAgICAgdGhpcy5pY29uUmlnaHRBdHRyaWJ1dGUgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuICBfaWNvblJpZ2h0ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZ2V0IGV4cGFuZGVkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2V4cGFuZGVkO1xyXG4gIH1cclxuICBzZXQgZXhwYW5kZWQoZXhwYW5kZWQ6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2V4cGFuZGVkID0gZXhwYW5kZWQ7XHJcbiAgICB0aGlzLnNldFBhbmVsQ29udGFpbmVySGVpZ2h0KCk7XHJcbiAgfVxyXG4gIF9leHBhbmRlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGlkO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgaWYgKCF0aGlzLmlkKSB7XHJcbiAgICAgIHRoaXMuaWQgPSBcImFjY29yZGlvblwiO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5zZXRQYW5lbENvbnRhaW5lckhlaWdodCgpO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlQWNjb3JkaW9uKCk6IHZvaWQge1xyXG4gICAgdGhpcy5leHBhbmRlZCA9ICF0aGlzLmV4cGFuZGVkO1xyXG4gIH1cclxuXHJcbiAga2V5ZG93blNob3VsZFRvZ2dsZUFjY29yZGlvbihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJyAnIHx8IGV2ZW50LmtleSA9PT0gJ1NwYWNlYmFyJyB8fCBldmVudC5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgdGhpcy50b2dnbGVBY2NvcmRpb24oKTtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRG93bicgfHwgZXZlbnQua2V5ID09PSAnQXJyb3dEb3duJykge1xyXG4gICAgICB0aGlzLmV4cGFuZGVkID0gdHJ1ZTtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGtleXVwU2hvdWxkVG9nZ2xlQWNjb3JkaW9uKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnVXAnIHx8IGV2ZW50LmtleSA9PT0gJ0Fycm93VXAnKSB7XHJcbiAgICAgIHRoaXMuZXhwYW5kZWQgPSBmYWxzZTtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0UGFuZWxDb250YWluZXJIZWlnaHQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5leHBhbmRlZCkge1xyXG4gICAgICB0aGlzLnBhbmVsQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gdGhpcy5wYW5lbENvbnRlbnQubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQgKyAncHgnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5wYW5lbENvbnRhaW5lci5uYXRpdmVFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ==