import { OnInit, ElementRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class BmoNgModalComponent implements OnInit {
    id: string;
    title: string;
    isDismissable: boolean;
    modal: ElementRef;
    private focusableElements;
    private modalFocusableElements;
    isActive: boolean;
    closeCallback: Function;
    constructor();
    ngOnInit(): void;
    /**
     * Close modal if the Escape key was pressed
     *
     * @param event Keyboard event that called this function
     */
    private escapeCloseModal;
    /**
     * Displays the modal
     */
    displayModal(): void;
    /**
     * Closes the modal
     */
    closeModal(): void;
    onBackgroundClick(): void;
    /**
     * Sets all the tab indexes for the found elements to -1
     *
     * @param element Element that we will query from
     */
    private removeTabIndexes;
    private addTabIndexes;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<BmoNgModalComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<BmoNgModalComponent, "bmo-ng-modal", never, { "id": "id"; "title": "title"; "isDismissable": "isDismissable"; }, {}, never, ["*"], false>;
}

//# sourceMappingURL=bmo-ng-modal.component.d.ts.map