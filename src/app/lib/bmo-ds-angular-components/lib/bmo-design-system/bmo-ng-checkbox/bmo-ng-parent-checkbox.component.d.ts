import { AfterContentInit, AfterViewInit, ElementRef, OnInit, QueryList } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { BmoNgCheckboxComponent } from './bmo-ng-checkbox.component';
import * as ɵngcc0 from '@angular/core';
export declare class BmoNgParentCheckboxComponent implements AfterContentInit, AfterViewInit, OnInit, ControlValueAccessor {
    private ngControl;
    checkboxes: QueryList<BmoNgCheckboxComponent>;
    inputElement: ElementRef;
    id: string;
    label: string;
    errorMessage: string;
    name: string;
    get disabled(): boolean;
    set disabled(disabled: boolean);
    private _disabled;
    checked: boolean;
    childIds: string;
    ariaState: 'false' | 'true' | 'mixed';
    get error(): boolean;
    onChange: (val: Array<string>) => void;
    onTouched: () => void;
    constructor(ngControl: NgControl);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    writeValue(obj: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState?(isDisabled: boolean): void;
    updateParentCheckbox(): void;
    toggleParentCheckbox(): void;
    private setChecked;
    private setCheckboxes;
    private updateControlledStates;
    private anyLastChecked;
    _onClick: (event: any) => void;
    onClick(event: MouseEvent): void;
    onKeyDown(event: KeyboardEvent): void;
    private randomInterval;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<BmoNgParentCheckboxComponent, [{ optional: true; self: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<BmoNgParentCheckboxComponent, "bmo-ng-parent-checkbox", never, { "name": "name"; "checked": "checked"; "disabled": "disabled"; "id": "id"; "label": "label"; "errorMessage": "errorMessage"; }, {}, ["checkboxes"], ["bmo-ng-checkbox"], false>;
}

//# sourceMappingURL=bmo-ng-parent-checkbox.component.d.ts.map