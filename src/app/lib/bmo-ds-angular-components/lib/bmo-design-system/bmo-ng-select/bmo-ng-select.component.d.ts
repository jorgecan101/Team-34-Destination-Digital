import { AfterViewInit, ElementRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
export declare class BmoNgSelectComponent implements OnInit, AfterViewInit, ControlValueAccessor {
    private ngControl;
    selectElement: ElementRef;
    label: string;
    helperText: string;
    errorMessage: string;
    autofocus: boolean;
    disabled: boolean;
    readonly: boolean;
    mercury: boolean;
    labelId: string;
    value: string;
    onChange: (val: string) => void;
    onTouched: () => void;
    onValidatorChange: () => void;
    get error(): boolean;
    constructor(ngControl: NgControl);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    writeValue(val: string): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState?(isDisabled: boolean): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<BmoNgSelectComponent, [{ optional: true; self: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<BmoNgSelectComponent, "bmo-ng-select", never, { "label": "label"; "helperText": "helperText"; "errorMessage": "errorMessage"; "autofocus": "autofocus"; "disabled": "disabled"; "readonly": "readonly"; "mercury": "mercury"; }, {}, never, ["option"], false>;
}

//# sourceMappingURL=bmo-ng-select.component.d.ts.map