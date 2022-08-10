import { Component, Optional, Self, ViewChild, Input, HostBinding, ElementRef, ContentChildren, NgModule, HostListener, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

class BmoNgTextFieldComponent {
    constructor(ngControl) {
        this.ngControl = ngControl;
        this.id = 'text-field-1';
        this.placeholder = "Placeholder";
        this.errorMessage = '';
        this.type = 'text';
        this.readonly = false;
        this.autofocus = false;
        this.mercury = false;
        this.disabled = false;
        this.value = '';
        this.onChange = (val) => { };
        this.onTouched = () => { };
        if (this.ngControl) {
            this.ngControl.valueAccessor = this;
        }
    }
    get error() {
        return this.ngControl ? (this.ngControl.invalid && this.ngControl.dirty) : false;
    }
    writeValue(obj) {
        this.value = obj;
        this.onChange(obj);
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        if (this.autofocus) {
            this.inputElement.nativeElement.focus();
        }
    }
}
BmoNgTextFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'bmo-ng-text-field',
                template: "<div class=\"form-field\" [class.mercury]=\"mercury\">\r\n    <div class=\"form-label-group\">\r\n        <input #inputElement id=\"{{id}}\" class=\"input text\" name=\"{{id}}\" type=\"{{type}}\" [attr.maxlength]=\"maxLength || null\" [disabled]=\"disabled\" [value]=\"value\" (input)=\"writeValue($event.srcElement.value)\">\r\n        <label class=\"slide-label\" [class.active-label]=\"value?.length > 0\" [class.error-field]=\"error\" [class.disabled]=\"disabled\" for=\"{{id}}\">\r\n\t\t    <span class=\"label-text\">{{placeholder}}</span>\r\n\t\t</label>\r\n        <span *ngIf=\"error\" class=\"error-message error\" role=\"alert\">{{errorMessage}}</span>\r\n        <span *ngIf=\"helperText\" class=\"input-helper-text\">{{helperText}}</span>\r\n    </div>\r\n</div>\r\n",
                styles: [""]
            },] }
];
BmoNgTextFieldComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] }
];
BmoNgTextFieldComponent.propDecorators = {
    inputElement: [{ type: ViewChild, args: ['inputElement',] }],
    id: [{ type: Input }],
    placeholder: [{ type: Input }],
    helperText: [{ type: Input }],
    errorMessage: [{ type: Input }],
    type: [{ type: Input }],
    maxLength: [{ type: Input }],
    readonly: [{ type: Input }],
    autofocus: [{ type: Input }],
    mercury: [{ type: Input }],
    disabled: [{ type: Input }]
};

class BmoNgAccordionComponent {
    constructor() {
        this.bmoAccordionClass = true;
        this.iconRightAttribute = null;
        this.compactAttribute = null;
        this.title = '';
        this._compact = false;
        this._iconRight = false;
        this._expanded = false;
    }
    get compact() {
        return this._compact;
    }
    set compact(compact) {
        this.compactAttribute = compact;
        this._compact = compact;
        if (!this.compactAttribute) {
            this.compactAttribute = null;
        }
    }
    get iconRight() {
        return this._iconRight;
    }
    set iconRight(iconRight) {
        this.iconRightAttribute = iconRight;
        this._iconRight = iconRight;
        if (!this.iconRightAttribute) {
            this.iconRightAttribute = null;
        }
    }
    get expanded() {
        return this._expanded;
    }
    set expanded(expanded) {
        this._expanded = expanded;
        this.setPanelContainerHeight();
    }
    ngOnInit() {
        if (!this.id) {
            this.id = "accordion";
        }
    }
    ngAfterViewInit() {
        this.setPanelContainerHeight();
    }
    toggleAccordion() {
        this.expanded = !this.expanded;
    }
    keydownShouldToggleAccordion(event) {
        if (event.key === ' ' || event.key === 'Spacebar' || event.key === 'Enter') {
            this.toggleAccordion();
            event.preventDefault();
        }
        if (event.key === 'Down' || event.key === 'ArrowDown') {
            this.expanded = true;
            event.preventDefault();
        }
    }
    keyupShouldToggleAccordion(event) {
        if (event.key === 'Up' || event.key === 'ArrowUp') {
            this.expanded = false;
            event.preventDefault();
        }
    }
    setPanelContainerHeight() {
        if (this.expanded) {
            this.panelContainer.nativeElement.style.height = this.panelContent.nativeElement.offsetHeight + 'px';
        }
        else {
            this.panelContainer.nativeElement.removeAttribute('style');
        }
    }
}
BmoNgAccordionComponent.decorators = [
    { type: Component, args: [{
                selector: 'bmo-ng-accordion',
                template: "<button class=\"accordion-trigger\" [class.trigger-compact]=\"compact\" [class.expanded]=\"expanded\" tabindex=\"0\" role=\"tab\" [attr.aria-expanded]=\"expanded\" (click)=\"toggleAccordion()\" (keydown)=\"keydownShouldToggleAccordion($event)\" (keyup)=\"keyupShouldToggleAccordion($event)\">\r\n    <span aria-hidden=\"true\" class=\"icon\" [class.chevron-down]=\"!compact\" [class.baby-chevy-down]=\"compact\" [class.medium]=\"!compact\" [class.small]=\"compact\" title=\"Chevron down\" [class.pull-right]=\"iconRight\" role=\"presentation\"></span>\r\n    <span>{{title}}</span>\r\n    <span class=\"short-border\" [class.hide-me]=\"expanded\"></span>\r\n</button>\r\n<div #panelContainer class=\"accordion-panel\" [class.expanded]=\"expanded\" role=\"tabpanel\">\r\n    <div #panelContent class=\"panel-content\">\r\n        <ng-content></ng-content>\r\n    </div>\r\n    <span class=\"short-border\"></span>\r\n</div>",
                styles: [""]
            },] }
];
BmoNgAccordionComponent.ctorParameters = () => [];
BmoNgAccordionComponent.propDecorators = {
    accordionTrigger: [{ type: ViewChild, args: ['accordionTrigger',] }],
    accordionPanel: [{ type: ViewChild, args: ['accordionPanel',] }],
    panelContainer: [{ type: ViewChild, args: ['panelContainer',] }],
    panelContent: [{ type: ViewChild, args: ['panelContent',] }],
    bmoAccordionClass: [{ type: HostBinding, args: ['class.bmo-accordion',] }],
    iconRightAttribute: [{ type: HostBinding, args: ['attr.icon-right',] }],
    compactAttribute: [{ type: HostBinding, args: ['attr.compact',] }],
    title: [{ type: Input }],
    compact: [{ type: Input }],
    iconRight: [{ type: Input }],
    expanded: [{ type: Input }],
    id: [{ type: Input }]
};

class BmoNgCardCheckboxComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.checkCardClass = true;
        this.label = "";
        this.disabled = false;
        this.checked = false;
    }
    ngOnInit() {
        if (this.id) {
            this.labelId = this.id;
        }
        else {
            const random = Math.round(Math.random() * 10000);
            this.labelId = this.label.replace(/\s+/g, '-').toLowerCase() + random;
        }
    }
    toggleChecked() {
        this.checked = !this.checked;
    }
    get inputElement() {
        return this.elementRef.nativeElement.firstElementChild;
    }
}
BmoNgCardCheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'bmo-ng-card-checkbox',
                template: `
        <div class="bmo-card-checkbox check-fixed-cards">
            <input
                id="{{labelId}}"
                type="checkbox"
                class="card-check-input"
                [value]="value"
                [disabled]="disabled"
                [checked]="checked"
                [attr.aria-checked]="checked"
                (click)="toggleChecked()"
            >
            <label class="card-check-label" for="{{labelId}}">
                <span class="check"></span>
                <span class="card-check-image">
                    <img *ngIf="img" src="{{img}}" role="presentation" />
                </span>
                <span class="card-check-label-text">{{label}}</span>
            </label>
        </div>
    `,
                styles: [':host { display: inline-block; }']
            },] }
];
BmoNgCardCheckboxComponent.ctorParameters = () => [
    { type: ElementRef }
];
BmoNgCardCheckboxComponent.propDecorators = {
    checkCardClass: [{ type: HostBinding, args: ['class.check-card',] }],
    id: [{ type: Input }],
    label: [{ type: Input }],
    img: [{ type: Input }],
    value: [{ type: Input }],
    disabled: [{ type: Input }],
    checked: [{ type: Input }]
};

class BmoNgCardCheckboxWrapComponent {
    constructor(ngControl) {
        this.ngControl = ngControl;
        this.errorMessage = '';
        this.legend = '';
        this._disabled = false;
        this.onChange = (val) => { };
        this.onTouched = () => { };
        if (ngControl) {
            ngControl.valueAccessor = this;
        }
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(disabled) {
        this._disabled = disabled;
        if (this.checkboxes) {
            for (const checkbox of this.checkboxes) {
                checkbox.disabled = this.disabled;
            }
        }
    }
    get error() {
        return this.ngControl ? (this.ngControl.invalid && this.ngControl.dirty) : false;
    }
    ngAfterContentInit() {
        for (const checkbox of this.checkboxes.toArray()) {
            checkbox.disabled = this.disabled;
            checkbox.inputElement.addEventListener('click', () => this.writeValue(''));
        }
    }
    writeValue(obj) {
        if (!this.checkboxes) {
            return this.onChange(null);
        }
        const checkboxValues = [];
        for (const checkbox of this.checkboxes.toArray()) {
            if (checkbox.checked) {
                checkboxValues.push(checkbox.value);
            }
        }
        if (checkboxValues.length === 0) {
            this.onChange(null);
        }
        this.onChange(checkboxValues);
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
}
BmoNgCardCheckboxWrapComponent.decorators = [
    { type: Component, args: [{
                selector: 'bmo-ng-card-checkbox-wrap',
                template: `
        <div class="check-group">
            <fieldset class="input-wrap input-checkbox">
                <legend class="legend check-legend">{{legend}}</legend>
                <div class="card-check-wrap">
                    <ng-content select="bmo-ng-card-checkbox"></ng-content>
                </div>
                <span class="error-message" [class.has-error]="error" role="alert">{{errorMessage}}</span>
            </fieldset>
        </div>
    `
            },] }
];
BmoNgCardCheckboxWrapComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] }
];
BmoNgCardCheckboxWrapComponent.propDecorators = {
    checkboxes: [{ type: ContentChildren, args: [BmoNgCardCheckboxComponent,] }],
    errorMessage: [{ type: Input }],
    legend: [{ type: Input }],
    disabled: [{ type: Input }]
};

class BmoNgCheckboxComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.checked = false;
        this.disabled = false;
        this.isChild = false;
        this.lastState = false;
    }
    ngOnInit() {
        if (!this.id) {
            const random = Math.round(Math.random() * 10000);
            this.id = this.label.replace(/\s+/g, '-').toLowerCase() + random;
        }
    }
    ngAfterViewInit() {
        if (this.isChild) {
            const oldParentElement = this.nativeElement.parentElement;
            const listElement = document.createElement('li');
            listElement.appendChild(this.nativeElement);
            oldParentElement.appendChild(listElement);
        }
    }
    toggleChecked() {
        this.checked = !this.checked;
        this.setLastState();
    }
    setChecked(val) {
        if (typeof val === 'boolean') {
            this.checked = val;
        }
        else {
            switch (val) {
                case 'true':
                case 'false':
                    this.checked = Boolean(val);
                    break;
                case 'last':
                    this.checked = this.lastState || false;
                    break;
                default:
                    break;
            }
        }
    }
    setLastState() {
        if (this.isChild) {
            this.lastState = this.checked;
        }
    }
    get nativeElement() {
        return this.elementRef.nativeElement;
    }
    get inputElement() {
        return this.elementRef.nativeElement.firstElementChild;
    }
}
BmoNgCheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'bmo-ng-checkbox',
                template: `
    <ng-container *ngIf="isChild">
        <div class="input-wrap input-checkbox">
          <input
            type="checkbox"
            name="{{name}}"
            id="{{id}}"
            class="check"
            [value]="value"
            [checked]="checked"
            [attr.aria-checked]="checked"
            [disabled]="disabled"
            (click)="toggleChecked()"
            (keyup)="setLastState()"
          >
          <label class="check-label active-label" for="{{id}}">{{label}}</label>
        </div>
    </ng-container>
    <ng-container *ngIf="!isChild">
        <input
        type="checkbox"
        name="{{name}}"
        id="{{id}}"
        class="check"
        [value]="value"
        [checked]="checked"
        [attr.aria-checked]="checked"
        [disabled]="disabled"
        (click)="toggleChecked()"
        (keyup)="setLastState()"
      >
      <label class="check-label active-label" for="{{id}}">{{label}}</label>
    </ng-container>
  `
            },] }
];
BmoNgCheckboxComponent.ctorParameters = () => [
    { type: ElementRef }
];
BmoNgCheckboxComponent.propDecorators = {
    id: [{ type: Input }],
    label: [{ type: Input }],
    value: [{ type: Input }],
    name: [{ type: Input }],
    checked: [{ type: Input }],
    disabled: [{ type: Input }],
    isChild: [{ type: Input }]
};

class BmoNgCheckboxWrapComponent {
    constructor(ngControl) {
        this.ngControl = ngControl;
        this.name = 'checkbox-group-' + this.randomInterval(0, 1000);
        this._disabled = false;
        this.onChange = (val) => { };
        this.onTouched = () => { };
        this._clickListener = (event) => {
            this.writeValue('');
            event.stopPropagation();
        };
        if (ngControl) {
            ngControl.valueAccessor = this;
        }
    }
    // States
    get disabled() {
        return this._disabled;
    }
    set disabled(disabled) {
        this._disabled = disabled;
        if (this.checkboxes) {
            for (const checkbox of this.checkboxes) {
                checkbox.disabled = this.disabled;
            }
        }
    }
    get error() {
        return this.ngControl ? (this.ngControl.invalid && this.ngControl.dirty) : false;
    }
    ngAfterContentInit() {
        for (const checkbox of this.checkboxes) {
            checkbox.name = this.name;
        }
    }
    ngAfterViewInit() {
        for (const checkbox of this.checkboxes) {
            checkbox.inputElement.addEventListener('click', this._clickListener);
        }
    }
    ngOnDestroy() {
        for (const checkbox of this.checkboxes) {
            checkbox.inputElement.removeEventListener('click', this._clickListener);
        }
    }
    writeValue(obj) {
        if (!this.checkboxes) {
            return this.onChange(null);
        }
        const checkboxValues = [];
        for (const checkbox of this.checkboxes) {
            if (checkbox.checked) {
                checkboxValues.push(checkbox.value);
            }
        }
        if (checkboxValues.length === 0) {
            return this.onChange(null);
        }
        return this.onChange(checkboxValues);
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    randomInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}
BmoNgCheckboxWrapComponent.decorators = [
    { type: Component, args: [{
                selector: 'bmo-ng-checkbox-wrap',
                template: `
        <div class="check-group">
            <fieldset class="input-wrap input-checkbox" [disabled]="disabled">
                <legend class="legend check-legend">{{label}}</legend>
                <ng-content select="bmo-ng-checkbox"></ng-content>
                <span *ngIf="error" class="error-message has-error" role="alert">{{errorMessage}}</span>
            </fieldset>
        </div>
    `
            },] }
];
BmoNgCheckboxWrapComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] }
];
BmoNgCheckboxWrapComponent.propDecorators = {
    checkboxes: [{ type: ContentChildren, args: [BmoNgCheckboxComponent,] }],
    label: [{ type: Input }],
    errorMessage: [{ type: Input }],
    name: [{ type: Input }],
    disabled: [{ type: Input }]
};

class BmoNgParentCheckboxComponent {
    constructor(ngControl) {
        this.ngControl = ngControl;
        this.name = 'parent-checkbox-group-' + this.randomInterval(0, 1000);
        this._disabled = false;
        this.checked = false;
        this.ariaState = 'false';
        this.onChange = (val) => { };
        this.onTouched = () => { };
        this._onClick = (event) => {
            this.updateParentCheckbox();
            this.writeValue('');
            event.stopPropagation();
        };
        if (ngControl) {
            ngControl.valueAccessor = this;
        }
    }
    // States
    get disabled() {
        return this._disabled;
    }
    set disabled(disabled) {
        this._disabled = disabled;
        if (this.checkboxes) {
            for (const checkbox of this.checkboxes) {
                checkbox.disabled = disabled;
            }
        }
    }
    get error() {
        return this.ngControl ? (this.ngControl.invalid && this.ngControl.dirty) : false;
    }
    ngOnInit() {
        if (!this.id) {
            this.id = this.name;
        }
    }
    ngAfterContentInit() {
        const childIds = [];
        for (const checkbox of this.checkboxes) {
            checkbox.isChild = true;
            checkbox.disabled = this.disabled;
            checkbox.name = this.name;
            childIds.push(checkbox.id);
        }
        this.childIds = childIds.join(' ');
    }
    ngAfterViewInit() {
        for (const checkbox of this.checkboxes) {
            checkbox.disabled = this.disabled;
            checkbox.inputElement.removeEventListener('click', this._onClick);
            checkbox.inputElement.addEventListener('click', this._onClick);
        }
        this.updateParentCheckbox();
    }
    writeValue(obj) {
        if (!this.checkboxes) {
            return this.onChange(null);
        }
        const checkboxValues = [];
        for (const checkbox of this.checkboxes) {
            if (checkbox.checked) {
                checkboxValues.push(checkbox.value);
            }
        }
        if (checkboxValues.length === 0) {
            this.onChange(null);
        }
        this.onChange(checkboxValues);
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    updateParentCheckbox() {
        const count = this.checkboxes.reduce((acc, curr) => curr.checked ? acc + 1 : acc, 0);
        switch (count) {
            case 0:
                this.setChecked('false');
                break;
            case this.checkboxes.length:
                this.setChecked('true');
                break;
            default:
                this.setChecked('mixed');
                this.updateControlledStates();
                break;
        }
    }
    toggleParentCheckbox() {
        switch (this.ariaState) {
            case 'false':
            case 'mixed':
                this.setCheckboxes(true);
                break;
            case 'true':
                this.setCheckboxes(false);
                break;
            default:
                break;
        }
    }
    setChecked(state) {
        this.ariaState = state;
        this.inputElement.nativeElement.checked = this.checked = state === 'false' ? false : true;
    }
    setCheckboxes(val) {
        for (const checkbox of this.checkboxes) {
            checkbox.setChecked(val);
        }
        this.updateParentCheckbox();
    }
    updateControlledStates() {
        for (const checkbox of this.checkboxes) {
            checkbox.lastState = checkbox.checked;
        }
    }
    anyLastChecked() {
        const count = this.checkboxes.reduce((acc, curr) => curr.lastState ? acc + 1 : acc, 0);
        return count > 0;
    }
    onClick(event) {
        this.toggleParentCheckbox();
        this.writeValue('');
        event.stopPropagation();
    }
    onKeyDown(event) {
        if (event.key === 'Space') {
            this.toggleParentCheckbox();
            event.stopPropagation();
            event.preventDefault();
        }
    }
    randomInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}
BmoNgParentCheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'bmo-ng-parent-checkbox',
                template: `
        <div class="input-wrap input-checkbox parent-checkbox">
            <input #inputElement
                type="checkbox"
                name="{{name}}"
                id="{{id}}"
                [checked]="checked"
                [disabled]="disabled"
                [attr.aria-checked]="ariaState"
                [attr.aria-controls]="childIds"
                (click)="onClick($event)"
                (keydown)="onKeyDown($event)"
            >
            <label for="{{id}}">{{label}}</label>
        </div>
        <ul class="checkboxes">
            <ng-content select="bmo-ng-checkbox"></ng-content>
        </ul>
    `
            },] }
];
BmoNgParentCheckboxComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] }
];
BmoNgParentCheckboxComponent.propDecorators = {
    checkboxes: [{ type: ContentChildren, args: [BmoNgCheckboxComponent,] }],
    inputElement: [{ type: ViewChild, args: ['inputElement',] }],
    id: [{ type: Input }],
    label: [{ type: Input }],
    errorMessage: [{ type: Input }],
    name: [{ type: Input }],
    disabled: [{ type: Input }],
    checked: [{ type: Input }]
};

const declarations = [
    BmoNgCheckboxComponent,
    BmoNgCardCheckboxComponent,
    BmoNgCheckboxWrapComponent,
    BmoNgParentCheckboxComponent,
    BmoNgCardCheckboxWrapComponent
];
class BmoNgCheckboxModule {
}
BmoNgCheckboxModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [...declarations],
                exports: [...declarations]
            },] }
];

class BmoNgModalComponent {
    constructor() {
        this.id = '';
        this.title = '';
        this.isDismissable = true;
    }
    ngOnInit() {
        this.focusableElements = 'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), label, li[role="tab"]:not([disabled]), div[role="tabpanel"]:not([disabled])';
        this.modalFocusableElements = '.modal a[href]:not([disabled]), .modal button:not([disabled]), .modal textarea:not([disabled]), .modal input[type="text"]:not([disabled]), .modal input[type="radio"]:not([disabled]), .modal input[type="checkbox"]:not([disabled]), .modal select:not([disabled]), .modal label, .modal li[role="tab"]:not([disabled]), .modal div[role="tabpanel"]:not([disabled])';
    }
    /**
     * Close modal if the Escape key was pressed
     *
     * @param event Keyboard event that called this function
     */
    escapeCloseModal(event) {
        if (this.isDismissable && (event.key === 'Esc' || event.key === 'Escape')) {
            this.closeModal();
        }
        event.preventDefault();
    }
    /**
     * Displays the modal
     */
    displayModal() {
        this.isActive = true;
        this.removeTabIndexes(document.body, this.focusableElements);
        setTimeout(() => {
            this.modal.nativeElement.focus();
            this.addTabIndexes(this.modal.nativeElement, this.modalFocusableElements);
        }, 100);
    }
    /**
     * Closes the modal
     */
    closeModal() {
        this.isActive = false;
        this.addTabIndexes(document.body, this.focusableElements);
        document.querySelectorAll('.bmo-switch').forEach((element) => element.setAttribute('tabindex', '0'));
        if (this.closeCallback) {
            this.closeCallback();
        }
    }
    onBackgroundClick() {
        if (!this.isDismissable)
            return;
        this.closeModal();
    }
    /**
     * Sets all the tab indexes for the found elements to -1
     *
     * @param element Element that we will query from
     */
    removeTabIndexes(element, elementQuery) {
        const elements = element.querySelectorAll(elementQuery);
        if (!elements) {
            return;
        }
        elements.forEach((e) => {
            e.setAttribute('tabindex', '-1');
        });
    }
    addTabIndexes(element, elementQuery) {
        const elements = element.querySelectorAll(elementQuery);
        if (!elements) {
            return;
        }
        elements.forEach((e) => {
            e.removeAttribute('tabindex');
        });
    }
}
BmoNgModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'bmo-ng-modal',
                template: "<div #modal class=\"modal scrollbar\" [class.active]=\"isActive\" [id]=\"id\" [attr.aria-describedby]=\"title\" [attr.tabIndex]=\"isActive ? 0 : -1\">\r\n    <button *ngIf=\"isDismissable\" class=\"icon-button medium modal-close\" aria-label=\"Close this modal\" (click)=\"closeModal()\"><span class=\"icon close medium granite\"></span></button>\r\n    <ng-content></ng-content>\r\n</div>\r\n\r\n<div class=\"bmo-overlay-dark\" [class.active]=\"isActive\" (click)=\"onBackgroundClick()\"></div>",
                styles: [""]
            },] }
];
BmoNgModalComponent.ctorParameters = () => [];
BmoNgModalComponent.propDecorators = {
    id: [{ type: Input }],
    title: [{ type: Input }],
    isDismissable: [{ type: Input }],
    modal: [{ type: ViewChild, args: ['modal',] }],
    escapeCloseModal: [{ type: HostListener, args: ['keyup', ['$event'],] }]
};

class BmoNgPopoverComponent {
    constructor() {
        this.icon = 'enclosed-help';
        this.direction = 'top';
        this.title = '';
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
    ngAfterViewChecked() {
        // Fixes BMO Design System bug where margin for top popover isn't dynamic with the popover height
        if (this.direction === 'top' && this.popoverContent) {
            this.popoverContent.nativeElement.style.marginTop = -(this.popoverContent.nativeElement.clientHeight + 30) + 'px';
        }
    }
    displayPopover() {
        this.isActive = true;
        setTimeout(() => {
            this.popoverContent.nativeElement.focus();
        }, 200);
    }
    closePopover() {
        this.isActive = false;
    }
}
BmoNgPopoverComponent.decorators = [
    { type: Component, args: [{
                selector: 'bmo-ng-popover',
                template: "<div class=\"popover-wrapper\">\r\n    <button #popoverButton class=\"icon-button medium popover-trigger\" aria-label=\"Click here for help text\" aria-haspopup=\"true\" (click)=\"displayPopover()\">Click here for help text<span [ngClass]=\"['icon', icon, 'medium']\"></span></button>\r\n    <div #popoverContent [ngClass]=\"['popover', 'block', direction]\" [class.active]=\"isActive\" [tabindex]=\"isActive ? 0 : -1\" [ngStyle]=\"containerStyle\">\r\n        <button class=\"icon-button medium pull-right close-popover\" aria-haspopup=\"true\" (click)=\"closePopover()\" [ngStyle]=\"buttonStyle\">\r\n            Close this popover\r\n            <span class=\"icon close medium granite\"></span>\r\n        </button>\r\n        <p class=\"popover-header\">{{title}}</p>\r\n        <ng-content></ng-content>\r\n    </div>\r\n    <div class=\"bmo-overlay-light\" [class.active]=\"isActive\" (click)=\"closePopover()\"></div>\r\n</div>",
                host: { '[class.popover-wrapper]': 'true' },
                styles: [".popover{-webkit-transition:none;transition:none}"]
            },] }
];
BmoNgPopoverComponent.ctorParameters = () => [];
BmoNgPopoverComponent.propDecorators = {
    icon: [{ type: Input }],
    direction: [{ type: Input }],
    title: [{ type: Input }],
    containerStyle: [{ type: Input }],
    buttonStyle: [{ type: Input }],
    popoverButton: [{ type: ViewChild, args: ['popoverButton',] }],
    popoverContent: [{ type: ViewChild, args: ['popoverContent',] }]
};

class BmoNgPopoverHeaderComponent {
}
BmoNgPopoverHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'bmo-ng-popover-header',
                template: '<ng-content></ng-content>',
                host: { '[class.popover-header]': 'true' }
            },] }
];

class BmoNgPopoverContentComponent {
}
BmoNgPopoverContentComponent.decorators = [
    { type: Component, args: [{
                selector: 'bmo-ng-popover-content',
                template: '<ng-content></ng-content>',
                host: { '[class.popover-content]': 'true' }
            },] }
];

const declarations$1 = [
    BmoNgPopoverComponent,
    BmoNgPopoverHeaderComponent,
    BmoNgPopoverContentComponent
];
class BmoNgPopoverModule {
}
BmoNgPopoverModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [...declarations$1],
                exports: [...declarations$1]
            },] }
];

class BmoNgRadioButtonComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.type = 'traditional';
        this.label = '';
        // States
        this.disabled = false;
    }
    get inputElement() {
        return this.elementRef.nativeElement.firstElementChild;
    }
}
BmoNgRadioButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'bmo-ng-radio-button',
                template: `
        <input type="radio" [class.radio]="type === 'traditional'" [class.box-radio]="type === 'box'" name="{{name}}" id="{{id}}" value="{{value}}" >
        <label [class.radio-label]="type !== 'box'" [class.box-radio-label]="type === 'box'" for="{{id}}">{{label}}</label>
    `
            },] }
];
BmoNgRadioButtonComponent.ctorParameters = () => [
    { type: ElementRef }
];
BmoNgRadioButtonComponent.propDecorators = {
    id: [{ type: Input }],
    value: [{ type: Input }],
    name: [{ type: Input }],
    type: [{ type: Input }],
    label: [{ type: Input }],
    disabled: [{ type: Input }]
};

class BmoNgRadioButtonContainerComponent {
    constructor(ngControl) {
        this.ngControl = ngControl;
        this.radioGroupClass = true;
        this.radioGroupNum = this.randomInterval(0, 1000);
        this.type = 'traditional';
        this.name = 'radio-group-' + this.radioGroupNum;
        // States
        this.disabled = false;
        this.onChange = (val) => { };
        this.onTouched = () => { };
        this._clickListener = (event) => {
            this.writeValue('');
            event.stopPropagation();
        };
        if (this.ngControl) {
            this.ngControl.valueAccessor = this;
        }
    }
    get error() {
        return this.ngControl ? (this.ngControl.invalid && this.ngControl.dirty) : false;
    }
    ngOnInit() {
    }
    ngAfterContentInit() {
        const radioButtons = this.radioButtons.toArray();
        for (let i = 0; i < radioButtons.length; i++) {
            const radioButton = radioButtons[i];
            radioButton.name = this.name;
            radioButton.type = this.type;
            radioButton.disabled = this.disabled;
            if (!radioButton.id) {
                radioButton.id = 'radio-' + this.radioGroupNum + '-' + (i + 1);
            }
            if (!radioButton.value) {
                radioButton.value = String(i);
            }
            radioButton.inputElement.addEventListener('click', this._clickListener);
        }
    }
    ngOnDestroy() {
        for (const radioButton of this.radioButtons) {
            radioButton.inputElement.removeEventListener('click', this._clickListener);
        }
    }
    writeValue(obj) {
        if (!this.radioButtons) {
            this.onChange(obj);
            return;
        }
        for (const radioButton of this.radioButtons.toArray()) {
            if (radioButton.inputElement.checked) {
                this.onChange(radioButton.value);
                return;
            }
        }
        this.onChange(obj);
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    randomInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}
BmoNgRadioButtonContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'bmo-ng-radio-button-wrap',
                template: "<fieldset class=\"input-wrap input-radio\" [disabled]=\"disabled\">\n    <legend *ngIf=\"legend\" class=\"legend\">{{legend}}</legend>\n    <ng-content select=\"bmo-ng-radio-button\"></ng-content>\n    <span *ngIf=\"error\" class=\"error-message has-error\" role=\"alert\">{{errorMessage}}</span>\n</fieldset>",
                styles: [""]
            },] }
];
BmoNgRadioButtonContainerComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] }
];
BmoNgRadioButtonContainerComponent.propDecorators = {
    radioGroupClass: [{ type: HostBinding, args: ['class.radio-group',] }],
    radioButtons: [{ type: ContentChildren, args: [BmoNgRadioButtonComponent,] }],
    legend: [{ type: Input }],
    type: [{ type: Input }],
    name: [{ type: Input }],
    errorMessage: [{ type: Input }],
    disabled: [{ type: Input }]
};

const declarations$2 = [
    BmoNgRadioButtonComponent,
    BmoNgRadioButtonContainerComponent
];
class BmoNgRadioButtonModule {
}
BmoNgRadioButtonModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [...declarations$2],
                exports: [...declarations$2]
            },] }
];

class BmoNgSelectComponent {
    constructor(ngControl) {
        this.ngControl = ngControl;
        this.label = '';
        this.helperText = '';
        this.errorMessage = '';
        this.autofocus = false;
        // States
        this.disabled = false;
        this.readonly = false;
        this.mercury = false;
        this.onChange = (val) => { };
        this.onTouched = () => { };
        this.onValidatorChange = () => { };
        if (this.ngControl) {
            this.ngControl.valueAccessor = this;
        }
    }
    get error() {
        return this.ngControl ? (this.ngControl.invalid && this.ngControl.dirty) : false;
    }
    ngOnInit() {
        this.labelId = this.label.replace(/\s+/g, '-').toLowerCase();
    }
    ngAfterViewInit() {
        if (this.autofocus) {
            this.selectElement.nativeElement.focus();
        }
    }
    writeValue(val) {
        this.value = val;
        this.onChange(val);
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
}
BmoNgSelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'bmo-ng-select',
                template: "<div class=\"form-field\" [class.mercury]=\"mercury\">\n    <div class=\"form-label-group\">\n        <select #selectElement class=\"select\" [class.error]=\"error\" [disabled]=\"disabled\" [attr.readonly]=\"readonly || null\" name=\"{{labelId}}\" id=\"{{labelId}}\" [value]=\"value\" [attr.aria-describedby]=\"'error-' + labelId\" (change)=\"writeValue($event.srcElement.value)\">\n            <ng-content select=\"option\"></ng-content>\n        </select>\n        <label for=\"{{labelId}}\" class=\"slide-label select-label\" [class.active-label]=\"\" [class.error-field]=\"error\" [class.disabled]=\"disabled\">\n            <span class=\"label-text\">{{label}}</span>\n        </label>\n        <bmo-icon small icon=\"baby-chevy-down\"></bmo-icon>\n        <span id=\"error-{{labelId}}\" class=\"error-message select-error\" [class.error]=\"error\" role=\"alert\">{{errorMessage}}</span>\n        <span id=\"helper-{{labelId}}\" class=\"input-helper-text select-helper\">{{helperText}}</span>\n    </div>\n</div>",
                styles: [""]
            },] }
];
BmoNgSelectComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] }
];
BmoNgSelectComponent.propDecorators = {
    selectElement: [{ type: ViewChild, args: ['selectElement',] }],
    label: [{ type: Input }],
    helperText: [{ type: Input }],
    errorMessage: [{ type: Input }],
    autofocus: [{ type: Input }],
    disabled: [{ type: Input }],
    readonly: [{ type: Input }],
    mercury: [{ type: Input }]
};

class BmoNgTabPanelComponent {
    constructor() {
        this.tabPanelClass = true;
        this.id = 'tab-' + this.tabId;
        this.roleAttribute = 'tabpanel';
        this.ariaDescribedByAttribute = 'tab-' + this.tabId;
        this.activeTabContentClass = false;
        this.ariaHiddenAttribute = true;
    }
    set active(val) {
        this.ariaHiddenAttribute = !val;
        this.activeTabContentClass = val;
    }
    get tabId() {
        return this._tabId;
    }
    set tabId(val) {
        this.id = 'tab-' + val + '-panel';
        this.ariaDescribedByAttribute = 'tab-' + val;
        this._tabId = val;
    }
    displayTabPanel() {
        this.active = true;
    }
    hideTabPanel() {
        this.active = false;
    }
}
BmoNgTabPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'bmo-ng-tab-panel',
                template: `
        <div class="panel-content">
            <ng-content></ng-content>
        </div>
    `
            },] }
];
BmoNgTabPanelComponent.propDecorators = {
    active: [{ type: Input }],
    tabPanelClass: [{ type: HostBinding, args: ['class.tab-panel',] }],
    id: [{ type: HostBinding, args: ['attr.id',] }],
    roleAttribute: [{ type: HostBinding, args: ['attr.role',] }],
    ariaDescribedByAttribute: [{ type: HostBinding, args: ['attr.aria-describedby',] }],
    activeTabContentClass: [{ type: HostBinding, args: ['class.active-tab-content',] }],
    ariaHiddenAttribute: [{ type: HostBinding, args: ['attr.aria-hidden',] }]
};

class BmoNgTabComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.label = "";
        this.id = 'tab-' + this.tabId;
        this.roleAttribute = 'tab';
        this.tabIndex = -1;
        this.ariaSelectedAttribute = false;
        this.tabClass = true;
        this.activeTabLabelClass = false;
        this.tabId = 0;
    }
    set active(val) {
        this.tabIndex = val ? 0 : -1;
        this.activeTabLabelClass = this.ariaSelectedAttribute = val;
    }
    navigateTabs(event) {
        var _a, _b;
        switch (event.key) {
            case 'Left':
            case 'ArrowLeft':
                (_a = this.elementRef.nativeElement.previousElementSibling) === null || _a === void 0 ? void 0 : _a.focus();
                break;
            case 'Right':
            case 'ArrowRight':
                (_b = this.elementRef.nativeElement.nextElementSibling) === null || _b === void 0 ? void 0 : _b.focus();
                break;
            default:
                break;
        }
    }
    get tabId() {
        return this._tabId;
    }
    set tabId(val) {
        this.id = 'tab-' + val;
        this._tabId = val;
    }
    selectTab() {
        this.active = true;
    }
    deselectTab() {
        this.active = false;
    }
}
BmoNgTabComponent.decorators = [
    { type: Component, args: [{
                selector: 'bmo-ng-tab',
                template: `
        {{label}}
        <span class="tab-indicator"></span>
    `
            },] }
];
BmoNgTabComponent.ctorParameters = () => [
    { type: ElementRef }
];
BmoNgTabComponent.propDecorators = {
    label: [{ type: Input }],
    active: [{ type: Input }],
    id: [{ type: HostBinding, args: ['attr.id',] }],
    roleAttribute: [{ type: HostBinding, args: ['attr.role',] }],
    tabIndex: [{ type: HostBinding, args: ['attr.tabindex',] }],
    ariaSelectedAttribute: [{ type: HostBinding, args: ['attr.aria-selected',] }],
    tabClass: [{ type: HostBinding, args: ['class.tab',] }],
    activeTabLabelClass: [{ type: HostBinding, args: ['class.active-tab-label',] }],
    navigateTabs: [{ type: HostListener, args: ['keydown', ['$event'],] }]
};

class BmoNgTabListComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.tabsWrapClass = true;
    }
    ngAfterContentInit() {
        if (this.dslTabs.length !== this.dslPanels.length) {
            console.error('ERROR: Tab element count does not equal tab panel count. Aborting.');
            return;
        }
        const dslTabsArray = this.dslTabs.toArray();
        const dslPanelsArray = this.dslPanels.toArray();
        for (let i = 0; i < this.dslTabs.length; i++) {
            const tab = dslTabsArray[i];
            const tabPanel = dslPanelsArray[i];
            tab.tabId = tabPanel.tabId = i;
            tab.elementRef.nativeElement.addEventListener('click', _ => this.selectTab(i));
            tab.elementRef.nativeElement.addEventListener('keyup', (event) => {
                if (event.key === 'Down' || event.key === 'ArrowDown' || event.key === 'Enter') {
                    this.selectTab(i);
                }
            });
        }
    }
    selectTab(tabId) {
        if (this.selectedTabIndex === tabId) {
            return;
        }
        const dslTabsArray = this.dslTabs.toArray();
        const dslPanelsArray = this.dslPanels.toArray();
        for (let i = 0; i < this.dslTabs.length; i++) {
            const tab = dslTabsArray[i];
            const tabPanel = dslPanelsArray[i];
            if (tab.tabId === tabId) {
                tab.selectTab();
                tabPanel.displayTabPanel();
            }
            else {
                tab.deselectTab();
                tabPanel.hideTabPanel();
            }
        }
        this.selectedTabIndex = tabId;
        this.scrollTabsIfNeeded(tabId);
    }
    scrollTabsIfNeeded(tabId) {
        const tab = this.dslTabs.toArray()[tabId];
        const tabOffsetLeft = tab.elementRef.nativeElement.offsetLeft;
        const tabOffsetWidth = tab.elementRef.nativeElement.offsetWidth;
        const tabWrapOffsetWidth = this.elementRef.nativeElement.offsetWidth;
        const amountForTabsToMove = tabOffsetLeft - Math.abs(tabWrapOffsetWidth - tabOffsetWidth) / 2;
        this.elementRef.nativeElement.scrollLeft = amountForTabsToMove;
    }
}
BmoNgTabListComponent.decorators = [
    { type: Component, args: [{
                selector: 'bmo-ng-tab-list',
                template: `
        <ul class="tab-list" role="tablist" aria-label="Use right and left arrows to navigate between tabs">
            <ng-content select="bmo-ng-tab"></ng-content>
            <span class="tablist-guideline" aria-hidden="true"></span>
        </ul>
        <ng-content select="bmo-ng-tab-panel"></ng-content>
    `
            },] }
];
BmoNgTabListComponent.ctorParameters = () => [
    { type: ElementRef }
];
BmoNgTabListComponent.propDecorators = {
    tabsWrapClass: [{ type: HostBinding, args: ['class.bmo-tabs-wrap',] }],
    dslTabs: [{ type: ContentChildren, args: [BmoNgTabComponent,] }],
    dslPanels: [{ type: ContentChildren, args: [BmoNgTabPanelComponent,] }]
};

const declarations$3 = [
    BmoNgTabListComponent,
    BmoNgTabPanelComponent,
    BmoNgTabComponent
];
class BmoNgTabsModule {
}
BmoNgTabsModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [...declarations$3],
                exports: [...declarations$3]
            },] }
];

class BmoDesignSystemModule {
}
BmoDesignSystemModule.decorators = [
    { type: NgModule, args: [{
                declarations: [BmoNgModalComponent, BmoNgAccordionComponent, BmoNgTextFieldComponent, BmoNgSelectComponent],
                exports: [
                    BmoNgModalComponent,
                    BmoNgTextFieldComponent,
                    BmoNgPopoverModule,
                    BmoNgAccordionComponent,
                    BmoNgSelectComponent,
                    BmoNgCheckboxModule,
                    BmoNgRadioButtonModule,
                    BmoNgTabsModule
                ],
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    BmoNgPopoverModule,
                    BmoNgCheckboxModule,
                    BmoNgTabsModule,
                    BmoNgRadioButtonModule
                ],
                schemas: [
                    CUSTOM_ELEMENTS_SCHEMA
                ]
            },] }
];

/*
 * Public API Surface of bmo-ds-angular-components
 */

/**
 * Generated bundle index. Do not edit.
 */

export { BmoDesignSystemModule, BmoNgAccordionComponent, BmoNgCardCheckboxComponent, BmoNgCardCheckboxWrapComponent, BmoNgCheckboxComponent, BmoNgCheckboxModule, BmoNgCheckboxWrapComponent, BmoNgModalComponent, BmoNgParentCheckboxComponent, BmoNgPopoverComponent, BmoNgPopoverContentComponent, BmoNgPopoverHeaderComponent, BmoNgPopoverModule, BmoNgRadioButtonComponent, BmoNgRadioButtonContainerComponent, BmoNgRadioButtonModule, BmoNgSelectComponent, BmoNgTabComponent, BmoNgTabListComponent, BmoNgTabPanelComponent, BmoNgTabsModule, BmoNgTextFieldComponent };
//# sourceMappingURL=bmo-ds-angular-components.js.map
