import { ElementRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class BmoNgTabComponent {
    elementRef: ElementRef;
    label: string;
    set active(val: boolean);
    id: string;
    roleAttribute: string;
    tabIndex: number;
    ariaSelectedAttribute: boolean;
    tabClass: boolean;
    activeTabLabelClass: boolean;
    private navigateTabs;
    get tabId(): number;
    set tabId(val: number);
    private _tabId;
    constructor(elementRef: ElementRef);
    selectTab(): void;
    deselectTab(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<BmoNgTabComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<BmoNgTabComponent, "bmo-ng-tab", never, { "label": "label"; "active": "active"; }, {}, never, never, false>;
}

//# sourceMappingURL=bmo-ng-tab.component.d.ts.map