import { AfterContentInit, QueryList } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { BmoNgCardCheckboxComponent } from './bmo-ng-card-checkbox.component';
import * as ɵngcc0 from '@angular/core';
export declare class BmoNgCardCheckboxWrapComponent implements AfterContentInit, ControlValueAccessor {
    private ngControl;
    checkboxes: QueryList<BmoNgCardCheckboxComponent>;
    errorMessage: string;
    legend: string;
    get disabled(): boolean;
    set disabled(disabled: boolean);
    private _disabled;
    onChange: (val: Array<string>) => void;
    onTouched: () => void;
    get error(): boolean;
    constructor(ngControl: NgControl);
    ngAfterContentInit(): void;
    writeValue(obj: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState?(isDisabled: boolean): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<BmoNgCardCheckboxWrapComponent, [{ optional: true; self: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<BmoNgCardCheckboxWrapComponent, "bmo-ng-card-checkbox-wrap", never, { "errorMessage": "errorMessage"; "legend": "legend"; "disabled": "disabled"; }, {}, ["checkboxes"], ["bmo-ng-card-checkbox"], false>;
}

//# sourceMappingURL=bmo-ng-card-checkbox-wrap.component.d.ts.map