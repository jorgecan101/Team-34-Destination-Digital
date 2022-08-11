import { ElementRef, OnInit } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class BmoNgCardCheckboxComponent implements OnInit {
    elementRef: ElementRef;
    checkCardClass: boolean;
    id: string;
    label: string;
    img: string;
    value: string;
    disabled: boolean;
    checked: boolean;
    labelId: string;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    toggleChecked(): void;
    get inputElement(): HTMLInputElement;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<BmoNgCardCheckboxComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<BmoNgCardCheckboxComponent, "bmo-ng-card-checkbox", never, { "label": "label"; "disabled": "disabled"; "checked": "checked"; "id": "id"; "img": "img"; "value": "value"; }, {}, never, never, false>;
}

//# sourceMappingURL=bmo-ng-card-checkbox.component.d.ts.map