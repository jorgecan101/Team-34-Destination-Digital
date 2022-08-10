import { Component, Input, ViewChild, HostListener } from '@angular/core';
export class BmoNgModalComponent {
    constructor() {
        this.id = '';
        this.title = '';
        this.isDismissable = true;
    }
    ngOnInit() {
        this.focusableElements = 'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), label, li[role="tab"]:not([disabled]), div[role="tabpanel"]:not([disabled])';
        this.modalFocusableElements = '.modal a[href]:not([disabled]), .modal button:not([disabled]), .modal textarea:not([disabled]), .modal input[type="text"]:not([disabled]), .modal input[type="radio"]:not([disabled]), .modal input[type="checkbox"]:not([disabled]), .modal select:not([disabled]), .modal label, .modal li[role="tab"]:not([disabled]), .modal div[role="tabpanel"]:not([disabled])';
    }
    /**
     * Close modal if the Escape key was pressed
     *
     * @param event Keyboard event that called this function
     */
    escapeCloseModal(event) {
        if (this.isDismissable && (event.key === 'Esc' || event.key === 'Escape')) {
            this.closeModal();
        }
        event.preventDefault();
    }
    /**
     * Displays the modal
     */
    displayModal() {
        this.isActive = true;
        this.removeTabIndexes(document.body, this.focusableElements);
        setTimeout(() => {
            this.modal.nativeElement.focus();
            this.addTabIndexes(this.modal.nativeElement, this.modalFocusableElements);
        }, 100);
    }
    /**
     * Closes the modal
     */
    closeModal() {
        this.isActive = false;
        this.addTabIndexes(document.body, this.focusableElements);
        document.querySelectorAll('.bmo-switch').forEach((element) => element.setAttribute('tabindex', '0'));
        if (this.closeCallback) {
            this.closeCallback();
        }
    }
    onBackgroundClick() {
        if (!this.isDismissable)
            return;
        this.closeModal();
    }
    /**
     * Sets all the tab indexes for the found elements to -1
     *
     * @param element Element that we will query from
     */
    removeTabIndexes(element, elementQuery) {
        const elements = element.querySelectorAll(elementQuery);
        if (!elements) {
            return;
        }
        elements.forEach((e) => {
            e.setAttribute('tabindex', '-1');
        });
    }
    addTabIndexes(element, elementQuery) {
        const elements = element.querySelectorAll(elementQuery);
        if (!elements) {
            return;
        }
        elements.forEach((e) => {
            e.removeAttribute('tabindex');
        });
    }
}
BmoNgModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'bmo-ng-modal',
                template: "<div #modal class=\"modal scrollbar\" [class.active]=\"isActive\" [id]=\"id\" [attr.aria-describedby]=\"title\" [attr.tabIndex]=\"isActive ? 0 : -1\">\r\n    <button *ngIf=\"isDismissable\" class=\"icon-button medium modal-close\" aria-label=\"Close this modal\" (click)=\"closeModal()\"><span class=\"icon close medium granite\"></span></button>\r\n    <ng-content></ng-content>\r\n</div>\r\n\r\n<div class=\"bmo-overlay-dark\" [class.active]=\"isActive\" (click)=\"onBackgroundClick()\"></div>",
                styles: [""]
            },] }
];
BmoNgModalComponent.ctorParameters = () => [];
BmoNgModalComponent.propDecorators = {
    id: [{ type: Input }],
    title: [{ type: Input }],
    isDismissable: [{ type: Input }],
    modal: [{ type: ViewChild, args: ['modal',] }],
    escapeCloseModal: [{ type: HostListener, args: ['keyup', ['$event'],] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm1vLW5nLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJDOi9CTU9zb3VyY2VmaWxlcy9ibW8tZHMtYW5ndWxhci9ibW8tZHMtYW5ndWxhci9wcm9qZWN0cy9ibW8tZHMtYW5ndWxhci1jb21wb25lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9ibW8tZGVzaWduLXN5c3RlbS9ibW8tbmctbW9kYWwvYm1vLW5nLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTzlGLE1BQU0sT0FBTyxtQkFBbUI7SUFZOUI7UUFYUyxPQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ1IsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLGtCQUFhLEdBQUcsSUFBSSxDQUFDO0lBU2QsQ0FBQztJQUVqQixRQUFRO1FBQ04sSUFBSSxDQUFDLGlCQUFpQixHQUFHLGlTQUFpUyxDQUFDO1FBQzNULElBQUksQ0FBQyxzQkFBc0IsR0FBRyx1V0FBdVcsQ0FBQztJQUN4WSxDQUFDO0lBRUQ7Ozs7T0FJRztJQUVLLGdCQUFnQixDQUFDLEtBQW9CO1FBRTNDLElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssS0FBSyxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssUUFBUSxDQUFDLEVBQUU7WUFDekUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ25CO1FBRUQsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7T0FFRztJQUNILFlBQVk7UUFDVixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUU3RCxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUM1RSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDVixDQUFDO0lBRUQ7O09BRUc7SUFDSCxVQUFVO1FBQ1IsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzFELFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFckcsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN0QjtJQUNILENBQUM7SUFFRCxpQkFBaUI7UUFDZixJQUFHLENBQUMsSUFBSSxDQUFDLGFBQWE7WUFDcEIsT0FBTztRQUVULElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNLLGdCQUFnQixDQUFDLE9BQW9CLEVBQUUsWUFBb0I7UUFDakUsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRXhELElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDYixPQUFPO1NBQ1I7UUFFRCxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBYyxFQUFFLEVBQUU7WUFDbEMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sYUFBYSxDQUFDLE9BQW9CLEVBQUUsWUFBb0I7UUFDOUQsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRXhELElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDYixPQUFPO1NBQ1I7UUFFRCxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBYyxFQUFFLEVBQUU7WUFDbEMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7OztZQW5HRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLDJmQUE0Qzs7YUFFN0M7Ozs7aUJBRUUsS0FBSztvQkFDTCxLQUFLOzRCQUNMLEtBQUs7b0JBQ0wsU0FBUyxTQUFDLE9BQU87K0JBb0JqQixZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdibW8tbmctbW9kYWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9ibW8tbmctbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2Jtby1uZy1tb2RhbC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCbW9OZ01vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBpZCA9ICcnO1xyXG4gIEBJbnB1dCgpIHRpdGxlID0gJyc7XHJcbiAgQElucHV0KCkgaXNEaXNtaXNzYWJsZSA9IHRydWU7XHJcbiAgQFZpZXdDaGlsZCgnbW9kYWwnKSBtb2RhbDogRWxlbWVudFJlZjtcclxuXHJcbiAgcHJpdmF0ZSBmb2N1c2FibGVFbGVtZW50czogc3RyaW5nO1xyXG4gIHByaXZhdGUgbW9kYWxGb2N1c2FibGVFbGVtZW50czogc3RyaW5nO1xyXG5cclxuICBwdWJsaWMgaXNBY3RpdmU6IGJvb2xlYW47XHJcbiAgcHVibGljIGNsb3NlQ2FsbGJhY2s6IEZ1bmN0aW9uO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuZm9jdXNhYmxlRWxlbWVudHMgPSAnYVtocmVmXTpub3QoW2Rpc2FibGVkXSksIGJ1dHRvbjpub3QoW2Rpc2FibGVkXSksIHRleHRhcmVhOm5vdChbZGlzYWJsZWRdKSwgaW5wdXRbdHlwZT1cInRleHRcIl06bm90KFtkaXNhYmxlZF0pLCBpbnB1dFt0eXBlPVwicmFkaW9cIl06bm90KFtkaXNhYmxlZF0pLCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06bm90KFtkaXNhYmxlZF0pLCBzZWxlY3Q6bm90KFtkaXNhYmxlZF0pLCBsYWJlbCwgbGlbcm9sZT1cInRhYlwiXTpub3QoW2Rpc2FibGVkXSksIGRpdltyb2xlPVwidGFicGFuZWxcIl06bm90KFtkaXNhYmxlZF0pJztcclxuICAgIHRoaXMubW9kYWxGb2N1c2FibGVFbGVtZW50cyA9ICcubW9kYWwgYVtocmVmXTpub3QoW2Rpc2FibGVkXSksIC5tb2RhbCBidXR0b246bm90KFtkaXNhYmxlZF0pLCAubW9kYWwgdGV4dGFyZWE6bm90KFtkaXNhYmxlZF0pLCAubW9kYWwgaW5wdXRbdHlwZT1cInRleHRcIl06bm90KFtkaXNhYmxlZF0pLCAubW9kYWwgaW5wdXRbdHlwZT1cInJhZGlvXCJdOm5vdChbZGlzYWJsZWRdKSwgLm1vZGFsIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpub3QoW2Rpc2FibGVkXSksIC5tb2RhbCBzZWxlY3Q6bm90KFtkaXNhYmxlZF0pLCAubW9kYWwgbGFiZWwsIC5tb2RhbCBsaVtyb2xlPVwidGFiXCJdOm5vdChbZGlzYWJsZWRdKSwgLm1vZGFsIGRpdltyb2xlPVwidGFicGFuZWxcIl06bm90KFtkaXNhYmxlZF0pJztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENsb3NlIG1vZGFsIGlmIHRoZSBFc2NhcGUga2V5IHdhcyBwcmVzc2VkXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZXZlbnQgS2V5Ym9hcmQgZXZlbnQgdGhhdCBjYWxsZWQgdGhpcyBmdW5jdGlvblxyXG4gICAqL1xyXG4gIEBIb3N0TGlzdGVuZXIoJ2tleXVwJywgWyckZXZlbnQnXSlcclxuICBwcml2YXRlIGVzY2FwZUNsb3NlTW9kYWwoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcclxuXHJcbiAgICBpZiAodGhpcy5pc0Rpc21pc3NhYmxlICYmIChldmVudC5rZXkgPT09ICdFc2MnIHx8IGV2ZW50LmtleSA9PT0gJ0VzY2FwZScpKSB7XHJcbiAgICAgIHRoaXMuY2xvc2VNb2RhbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEaXNwbGF5cyB0aGUgbW9kYWxcclxuICAgKi9cclxuICBkaXNwbGF5TW9kYWwoKSB7XHJcbiAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMucmVtb3ZlVGFiSW5kZXhlcyhkb2N1bWVudC5ib2R5LCB0aGlzLmZvY3VzYWJsZUVsZW1lbnRzKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5tb2RhbC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgIHRoaXMuYWRkVGFiSW5kZXhlcyh0aGlzLm1vZGFsLm5hdGl2ZUVsZW1lbnQsIHRoaXMubW9kYWxGb2N1c2FibGVFbGVtZW50cyk7XHJcbiAgICB9LCAxMDApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2xvc2VzIHRoZSBtb2RhbFxyXG4gICAqL1xyXG4gIGNsb3NlTW9kYWwoKSB7XHJcbiAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XHJcbiAgICB0aGlzLmFkZFRhYkluZGV4ZXMoZG9jdW1lbnQuYm9keSwgdGhpcy5mb2N1c2FibGVFbGVtZW50cyk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm1vLXN3aXRjaCcpLmZvckVhY2goKGVsZW1lbnQpID0+IGVsZW1lbnQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJykpO1xyXG5cclxuICAgIGlmICh0aGlzLmNsb3NlQ2FsbGJhY2spIHtcclxuICAgICAgdGhpcy5jbG9zZUNhbGxiYWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkJhY2tncm91bmRDbGljaygpIHtcclxuICAgIGlmKCF0aGlzLmlzRGlzbWlzc2FibGUpXHJcbiAgICAgIHJldHVybjtcclxuXHJcbiAgICB0aGlzLmNsb3NlTW9kYWwoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHMgYWxsIHRoZSB0YWIgaW5kZXhlcyBmb3IgdGhlIGZvdW5kIGVsZW1lbnRzIHRvIC0xXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZWxlbWVudCBFbGVtZW50IHRoYXQgd2Ugd2lsbCBxdWVyeSBmcm9tXHJcbiAgICovXHJcbiAgcHJpdmF0ZSByZW1vdmVUYWJJbmRleGVzKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBlbGVtZW50UXVlcnk6IHN0cmluZykge1xyXG4gICAgY29uc3QgZWxlbWVudHMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxlbWVudFF1ZXJ5KTtcclxuXHJcbiAgICBpZiAoIWVsZW1lbnRzKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBlbGVtZW50cy5mb3JFYWNoKChlOiBIVE1MRWxlbWVudCkgPT4ge1xyXG4gICAgICBlLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhZGRUYWJJbmRleGVzKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBlbGVtZW50UXVlcnk6IHN0cmluZykge1xyXG4gICAgY29uc3QgZWxlbWVudHMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxlbWVudFF1ZXJ5KTtcclxuXHJcbiAgICBpZiAoIWVsZW1lbnRzKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBlbGVtZW50cy5mb3JFYWNoKChlOiBIVE1MRWxlbWVudCkgPT4ge1xyXG4gICAgICBlLnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=