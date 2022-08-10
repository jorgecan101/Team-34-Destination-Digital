import { AfterContentInit, AfterViewInit, OnDestroy, QueryList } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { BmoNgCheckboxComponent } from './bmo-ng-checkbox.component';
import * as ɵngcc0 from '@angular/core';
export declare class BmoNgCheckboxWrapComponent implements OnDestroy, AfterContentInit, AfterViewInit, ControlValueAccessor {
    private ngControl;
    checkboxes: QueryList<BmoNgCheckboxComponent>;
    label: string;
    errorMessage: string;
    name: string;
    get disabled(): boolean;
    set disabled(disabled: boolean);
    private _disabled;
    onChange: (val: Array<string>) => void;
    onTouched: () => void;
    get error(): boolean;
    constructor(ngControl: NgControl);
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    writeValue(obj: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState?(isDisabled: boolean): void;
    private _clickListener;
    private randomInterval;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<BmoNgCheckboxWrapComponent, [{ optional: true; self: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<BmoNgCheckboxWrapComponent, "bmo-ng-checkbox-wrap", never, { "name": "name"; "disabled": "disabled"; "label": "label"; "errorMessage": "errorMessage"; }, {}, ["checkboxes"], ["bmo-ng-checkbox"], false>;
}

//# sourceMappingURL=bmo-ng-checkbox-wrap.component.d.ts.map