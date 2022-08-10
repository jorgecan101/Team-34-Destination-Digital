import { OnInit, ElementRef, AfterViewInit, AfterViewChecked } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class BmoNgPopoverComponent implements OnInit, AfterViewInit, AfterViewChecked {
    icon: string;
    direction: 'top' | 'left' | 'right' | 'bottom';
    title: string;
    containerStyle: any;
    buttonStyle: any;
    popoverButton: ElementRef;
    popoverContent: ElementRef;
    isActive: boolean;
    constructor();
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    displayPopover(): void;
    closePopover(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<BmoNgPopoverComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<BmoNgPopoverComponent, "bmo-ng-popover", never, { "icon": "icon"; "direction": "direction"; "title": "title"; "containerStyle": "containerStyle"; "buttonStyle": "buttonStyle"; }, {}, never, ["*"], false>;
}

//# sourceMappingURL=bmo-ng-popover.component.d.ts.map