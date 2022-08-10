import { OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { NgControl, ControlValueAccessor } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
export declare class BmoNgTextFieldComponent implements OnInit, AfterViewInit, ControlValueAccessor {
    private ngControl;
    inputElement: ElementRef;
    id: string;
    placeholder: string;
    helperText: string;
    errorMessage: string;
    type: 'email' | 'hidden' | 'number' | 'password' | 'text';
    maxLength: number;
    readonly: boolean;
    autofocus: boolean;
    mercury: boolean;
    disabled: boolean;
    value: string;
    get error(): boolean;
    onChange: (val: string) => void;
    onTouched: () => void;
    constructor(ngControl: NgControl);
    writeValue(obj: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState?(isDisabled: boolean): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<BmoNgTextFieldComponent, [{ optional: true; self: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<BmoNgTextFieldComponent, "bmo-ng-text-field", never, { "id": "id"; "placeholder": "placeholder"; "errorMessage": "errorMessage"; "type": "type"; "readonly": "readonly"; "autofocus": "autofocus"; "mercury": "mercury"; "disabled": "disabled"; "helperText": "helperText"; "maxLength": "maxLength"; }, {}, never, never, false>;
}

//# sourceMappingURL=bmo-ng-text-field.component.d.ts.map