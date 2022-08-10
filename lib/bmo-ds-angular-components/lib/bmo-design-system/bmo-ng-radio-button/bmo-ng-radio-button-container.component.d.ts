import { AfterContentInit, OnDestroy, OnInit, QueryList } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { BmoNgRadioButtonComponent } from './bmo-ng-radio-button.component';
import * as ɵngcc0 from '@angular/core';
export declare class BmoNgRadioButtonContainerComponent implements OnInit, OnDestroy, AfterContentInit, ControlValueAccessor {
    private ngControl;
    radioGroupClass: boolean;
    radioButtons: QueryList<BmoNgRadioButtonComponent>;
    private radioGroupNum;
    legend: string;
    type: 'traditional' | 'box';
    name: string;
    errorMessage: string;
    disabled: boolean;
    get error(): boolean;
    onChange: (val: string) => void;
    onTouched: () => void;
    constructor(ngControl: NgControl);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    writeValue(obj: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState?(isDisabled: boolean): void;
    private _clickListener;
    private randomInterval;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<BmoNgRadioButtonContainerComponent, [{ optional: true; self: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<BmoNgRadioButtonContainerComponent, "bmo-ng-radio-button-wrap", never, { "type": "type"; "name": "name"; "disabled": "disabled"; "legend": "legend"; "errorMessage": "errorMessage"; }, {}, ["radioButtons"], ["bmo-ng-radio-button"], false>;
}

//# sourceMappingURL=bmo-ng-radio-button-container.component.d.ts.map