import { AfterViewInit, ElementRef, OnInit } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class BmoNgCheckboxComponent implements OnInit, AfterViewInit {
    private elementRef;
    id: string;
    label: string;
    value: string;
    name: string;
    checked: boolean;
    disabled: boolean;
    isChild: boolean;
    lastState: boolean;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    toggleChecked(): void;
    setChecked(val: boolean | string): void;
    private setLastState;
    get nativeElement(): HTMLElement;
    get inputElement(): HTMLInputElement;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<BmoNgCheckboxComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<BmoNgCheckboxComponent, "bmo-ng-checkbox", never, { "checked": "checked"; "disabled": "disabled"; "isChild": "isChild"; "id": "id"; "label": "label"; "value": "value"; "name": "name"; }, {}, never, never, false>;
}

//# sourceMappingURL=bmo-ng-checkbox.component.d.ts.map