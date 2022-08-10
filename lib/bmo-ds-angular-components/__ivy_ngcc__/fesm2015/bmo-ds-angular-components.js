import { Component, Optional, Self, ViewChild, Input, HostBinding, ElementRef, ContentChildren, NgModule, HostListener, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/forms';
import * as ɵngcc2 from '@angular/common';

const _c0 = ["inputElement"];
function BmoNgTextFieldComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 8);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.errorMessage);
} }
function BmoNgTextFieldComponent_span_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 9);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r2.helperText);
} }
const _c1 = ["accordionTrigger"];
const _c2 = ["accordionPanel"];
const _c3 = ["panelContainer"];
const _c4 = ["panelContent"];
const _c5 = ["*"];
function BmoNgCardCheckboxComponent_img_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "img", 7);
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵpropertyInterpolate("src", ctx_r0.img, ɵngcc0.ɵɵsanitizeUrl);
} }
const _c6 = [[["bmo-ng-card-checkbox"]]];
const _c7 = ["bmo-ng-card-checkbox"];
function BmoNgCheckboxComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "div", 1)(2, "input", 2);
    ɵngcc0.ɵɵlistener("click", function BmoNgCheckboxComponent_ng_container_0_Template_input_click_2_listener() { ɵngcc0.ɵɵrestoreView(_r3); const ctx_r2 = ɵngcc0.ɵɵnextContext(); return ɵngcc0.ɵɵresetView(ctx_r2.toggleChecked()); })("keyup", function BmoNgCheckboxComponent_ng_container_0_Template_input_keyup_2_listener() { ɵngcc0.ɵɵrestoreView(_r3); const ctx_r4 = ɵngcc0.ɵɵnextContext(); return ɵngcc0.ɵɵresetView(ctx_r4.setLastState()); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "label", 3);
    ɵngcc0.ɵɵtext(4);
    ɵngcc0.ɵɵelementEnd()();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵpropertyInterpolate("name", ctx_r0.name);
    ɵngcc0.ɵɵpropertyInterpolate("id", ctx_r0.id);
    ɵngcc0.ɵɵproperty("value", ctx_r0.value)("checked", ctx_r0.checked)("disabled", ctx_r0.disabled);
    ɵngcc0.ɵɵattribute("aria-checked", ctx_r0.checked);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵpropertyInterpolate("for", ctx_r0.id);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.label);
} }
function BmoNgCheckboxComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "input", 2);
    ɵngcc0.ɵɵlistener("click", function BmoNgCheckboxComponent_ng_container_1_Template_input_click_1_listener() { ɵngcc0.ɵɵrestoreView(_r6); const ctx_r5 = ɵngcc0.ɵɵnextContext(); return ɵngcc0.ɵɵresetView(ctx_r5.toggleChecked()); })("keyup", function BmoNgCheckboxComponent_ng_container_1_Template_input_keyup_1_listener() { ɵngcc0.ɵɵrestoreView(_r6); const ctx_r7 = ɵngcc0.ɵɵnextContext(); return ɵngcc0.ɵɵresetView(ctx_r7.setLastState()); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(2, "label", 3);
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵpropertyInterpolate("name", ctx_r1.name);
    ɵngcc0.ɵɵpropertyInterpolate("id", ctx_r1.id);
    ɵngcc0.ɵɵproperty("value", ctx_r1.value)("checked", ctx_r1.checked)("disabled", ctx_r1.disabled);
    ɵngcc0.ɵɵattribute("aria-checked", ctx_r1.checked);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵpropertyInterpolate("for", ctx_r1.id);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.label);
} }
function BmoNgCheckboxWrapComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 4);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.errorMessage);
} }
const _c8 = [[["bmo-ng-checkbox"]]];
const _c9 = ["bmo-ng-checkbox"];
const _c10 = ["modal"];
function BmoNgModalComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 4);
    ɵngcc0.ɵɵlistener("click", function BmoNgModalComponent_button_2_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r3); const ctx_r2 = ɵngcc0.ɵɵnextContext(); return ɵngcc0.ɵɵresetView(ctx_r2.closeModal()); });
    ɵngcc0.ɵɵelement(1, "span", 5);
    ɵngcc0.ɵɵelementEnd();
} }
const _c11 = ["popoverButton"];
const _c12 = ["popoverContent"];
const _c13 = function (a1) { return ["icon", a1, "medium"]; };
const _c14 = function (a2) { return ["popover", "block", a2]; };
function BmoNgRadioButtonContainerComponent_legend_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "legend", 3);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.legend);
} }
function BmoNgRadioButtonContainerComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 4);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.errorMessage);
} }
const _c15 = [[["bmo-ng-radio-button"]]];
const _c16 = ["bmo-ng-radio-button"];
const _c17 = ["selectElement"];
const _c18 = [[["option"]]];
const _c19 = ["option"];
const _c20 = [[["bmo-ng-tab"]], [["bmo-ng-tab-panel"]]];
const _c21 = ["bmo-ng-tab", "bmo-ng-tab-panel"];
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
BmoNgTextFieldComponent.ɵfac = function BmoNgTextFieldComponent_Factory(t) { return new (t || BmoNgTextFieldComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NgControl, 10)); };
BmoNgTextFieldComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: BmoNgTextFieldComponent, selectors: [["bmo-ng-text-field"]], viewQuery: function BmoNgTextFieldComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.inputElement = _t.first);
    } }, inputs: { id: "id", placeholder: "placeholder", errorMessage: "errorMessage", type: "type", readonly: "readonly", autofocus: "autofocus", mercury: "mercury", disabled: "disabled", helperText: "helperText", maxLength: "maxLength" }, decls: 9, vars: 18, consts: [[1, "form-field"], [1, "form-label-group"], [1, "input", "text", 3, "id", "name", "type", "disabled", "value", "input"], ["inputElement", ""], [1, "slide-label", 3, "for"], [1, "label-text"], ["class", "error-message error", "role", "alert", 4, "ngIf"], ["class", "input-helper-text", 4, "ngIf"], ["role", "alert", 1, "error-message", "error"], [1, "input-helper-text"]], template: function BmoNgTextFieldComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "input", 2, 3);
        ɵngcc0.ɵɵlistener("input", function BmoNgTextFieldComponent_Template_input_input_2_listener($event) { return ctx.writeValue($event.srcElement.value); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "label", 4)(5, "span", 5);
        ɵngcc0.ɵɵtext(6);
        ɵngcc0.ɵɵelementEnd()();
        ɵngcc0.ɵɵtemplate(7, BmoNgTextFieldComponent_span_7_Template, 2, 1, "span", 6);
        ɵngcc0.ɵɵtemplate(8, BmoNgTextFieldComponent_span_8_Template, 2, 1, "span", 7);
        ɵngcc0.ɵɵelementEnd()();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("mercury", ctx.mercury);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵpropertyInterpolate("id", ctx.id);
        ɵngcc0.ɵɵpropertyInterpolate("name", ctx.id);
        ɵngcc0.ɵɵpropertyInterpolate("type", ctx.type);
        ɵngcc0.ɵɵproperty("disabled", ctx.disabled)("value", ctx.value);
        ɵngcc0.ɵɵattribute("maxlength", ctx.maxLength || null);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵclassProp("active-label", (ctx.value == null ? null : ctx.value.length) > 0)("error-field", ctx.error)("disabled", ctx.disabled);
        ɵngcc0.ɵɵpropertyInterpolate("for", ctx.id);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.placeholder);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.error);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.helperText);
    } }, dependencies: [ɵngcc2.NgIf] });
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(BmoNgTextFieldComponent, [{
        type: Component,
        args: [{ selector: 'bmo-ng-text-field', template: "<div class=\"form-field\" [class.mercury]=\"mercury\">\r\n    <div class=\"form-label-group\">\r\n        <input #inputElement id=\"{{id}}\" class=\"input text\" name=\"{{id}}\" type=\"{{type}}\" [attr.maxlength]=\"maxLength || null\" [disabled]=\"disabled\" [value]=\"value\" (input)=\"writeValue($event.srcElement.value)\">\r\n        <label class=\"slide-label\" [class.active-label]=\"value?.length > 0\" [class.error-field]=\"error\" [class.disabled]=\"disabled\" for=\"{{id}}\">\r\n\t\t    <span class=\"label-text\">{{placeholder}}</span>\r\n\t\t</label>\r\n        <span *ngIf=\"error\" class=\"error-message error\" role=\"alert\">{{errorMessage}}</span>\r\n        <span *ngIf=\"helperText\" class=\"input-helper-text\">{{helperText}}</span>\r\n    </div>\r\n</div>\r\n" }]
    }], function () { return [{ type: ɵngcc1.NgControl, decorators: [{
                type: Optional
            }, {
                type: Self
            }] }]; }, { id: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], errorMessage: [{
            type: Input
        }], type: [{
            type: Input
        }], readonly: [{
            type: Input
        }], autofocus: [{
            type: Input
        }], mercury: [{
            type: Input
        }], disabled: [{
            type: Input
        }], inputElement: [{
            type: ViewChild,
            args: ['inputElement']
        }], helperText: [{
            type: Input
        }], maxLength: [{
            type: Input
        }] }); })();

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
BmoNgAccordionComponent.ɵfac = function BmoNgAccordionComponent_Factory(t) { return new (t || BmoNgAccordionComponent)(); };
BmoNgAccordionComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: BmoNgAccordionComponent, selectors: [["bmo-ng-accordion"]], viewQuery: function BmoNgAccordionComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c1, 5);
        ɵngcc0.ɵɵviewQuery(_c2, 5);
        ɵngcc0.ɵɵviewQuery(_c3, 5);
        ɵngcc0.ɵɵviewQuery(_c4, 5);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.accordionTrigger = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.accordionPanel = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.panelContainer = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.panelContent = _t.first);
    } }, hostVars: 4, hostBindings: function BmoNgAccordionComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵattribute("icon-right", ctx.iconRightAttribute)("compact", ctx.compactAttribute);
        ɵngcc0.ɵɵclassProp("bmo-accordion", ctx.bmoAccordionClass);
    } }, inputs: { title: "title", compact: "compact", iconRight: "iconRight", expanded: "expanded", id: "id" }, ngContentSelectors: _c5, decls: 11, vars: 20, consts: [["tabindex", "0", "role", "tab", 1, "accordion-trigger", 3, "click", "keydown", "keyup"], ["aria-hidden", "true", "title", "Chevron down", "role", "presentation", 1, "icon"], [1, "short-border"], ["role", "tabpanel", 1, "accordion-panel"], ["panelContainer", ""], [1, "panel-content"], ["panelContent", ""]], template: function BmoNgAccordionComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "button", 0);
        ɵngcc0.ɵɵlistener("click", function BmoNgAccordionComponent_Template_button_click_0_listener() { return ctx.toggleAccordion(); })("keydown", function BmoNgAccordionComponent_Template_button_keydown_0_listener($event) { return ctx.keydownShouldToggleAccordion($event); })("keyup", function BmoNgAccordionComponent_Template_button_keyup_0_listener($event) { return ctx.keyupShouldToggleAccordion($event); });
        ɵngcc0.ɵɵelement(1, "span", 1);
        ɵngcc0.ɵɵelementStart(2, "span");
        ɵngcc0.ɵɵtext(3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(4, "span", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(5, "div", 3, 4)(7, "div", 5, 6);
        ɵngcc0.ɵɵprojection(9);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(10, "span", 2);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("trigger-compact", ctx.compact)("expanded", ctx.expanded);
        ɵngcc0.ɵɵattribute("aria-expanded", ctx.expanded);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassProp("chevron-down", !ctx.compact)("baby-chevy-down", ctx.compact)("medium", !ctx.compact)("small", ctx.compact)("pull-right", ctx.iconRight);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.title);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassProp("hide-me", ctx.expanded);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassProp("expanded", ctx.expanded);
    } } });
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(BmoNgAccordionComponent, [{
        type: Component,
        args: [{ selector: 'bmo-ng-accordion', template: "<button class=\"accordion-trigger\" [class.trigger-compact]=\"compact\" [class.expanded]=\"expanded\" tabindex=\"0\" role=\"tab\" [attr.aria-expanded]=\"expanded\" (click)=\"toggleAccordion()\" (keydown)=\"keydownShouldToggleAccordion($event)\" (keyup)=\"keyupShouldToggleAccordion($event)\">\r\n    <span aria-hidden=\"true\" class=\"icon\" [class.chevron-down]=\"!compact\" [class.baby-chevy-down]=\"compact\" [class.medium]=\"!compact\" [class.small]=\"compact\" title=\"Chevron down\" [class.pull-right]=\"iconRight\" role=\"presentation\"></span>\r\n    <span>{{title}}</span>\r\n    <span class=\"short-border\" [class.hide-me]=\"expanded\"></span>\r\n</button>\r\n<div #panelContainer class=\"accordion-panel\" [class.expanded]=\"expanded\" role=\"tabpanel\">\r\n    <div #panelContent class=\"panel-content\">\r\n        <ng-content></ng-content>\r\n    </div>\r\n    <span class=\"short-border\"></span>\r\n</div>" }]
    }], function () { return []; }, { bmoAccordionClass: [{
            type: HostBinding,
            args: ['class.bmo-accordion']
        }], iconRightAttribute: [{
            type: HostBinding,
            args: ['attr.icon-right']
        }], compactAttribute: [{
            type: HostBinding,
            args: ['attr.compact']
        }], title: [{
            type: Input
        }], compact: [{
            type: Input
        }], iconRight: [{
            type: Input
        }], expanded: [{
            type: Input
        }], id: [{
            type: Input
        }], accordionTrigger: [{
            type: ViewChild,
            args: ['accordionTrigger']
        }], accordionPanel: [{
            type: ViewChild,
            args: ['accordionPanel']
        }], panelContainer: [{
            type: ViewChild,
            args: ['panelContainer']
        }], panelContent: [{
            type: ViewChild,
            args: ['panelContent']
        }] }); })();

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
BmoNgCardCheckboxComponent.ɵfac = function BmoNgCardCheckboxComponent_Factory(t) { return new (t || BmoNgCardCheckboxComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
BmoNgCardCheckboxComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: BmoNgCardCheckboxComponent, selectors: [["bmo-ng-card-checkbox"]], hostVars: 2, hostBindings: function BmoNgCardCheckboxComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("check-card", ctx.checkCardClass);
    } }, inputs: { label: "label", disabled: "disabled", checked: "checked", id: "id", img: "img", value: "value" }, decls: 8, vars: 8, consts: [[1, "bmo-card-checkbox", "check-fixed-cards"], ["type", "checkbox", 1, "card-check-input", 3, "id", "value", "disabled", "checked", "click"], [1, "card-check-label", 3, "for"], [1, "check"], [1, "card-check-image"], ["role", "presentation", 3, "src", 4, "ngIf"], [1, "card-check-label-text"], ["role", "presentation", 3, "src"]], template: function BmoNgCardCheckboxComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0)(1, "input", 1);
        ɵngcc0.ɵɵlistener("click", function BmoNgCardCheckboxComponent_Template_input_click_1_listener() { return ctx.toggleChecked(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(2, "label", 2);
        ɵngcc0.ɵɵelement(3, "span", 3);
        ɵngcc0.ɵɵelementStart(4, "span", 4);
        ɵngcc0.ɵɵtemplate(5, BmoNgCardCheckboxComponent_img_5_Template, 1, 1, "img", 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(6, "span", 6);
        ɵngcc0.ɵɵtext(7);
        ɵngcc0.ɵɵelementEnd()()();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵpropertyInterpolate("id", ctx.labelId);
        ɵngcc0.ɵɵproperty("value", ctx.value)("disabled", ctx.disabled)("checked", ctx.checked);
        ɵngcc0.ɵɵattribute("aria-checked", ctx.checked);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵpropertyInterpolate("for", ctx.labelId);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngIf", ctx.img);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.label);
    } }, dependencies: [ɵngcc2.NgIf], styles: ["[_nghost-%COMP%] { display: inline-block; }"] });
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(BmoNgCardCheckboxComponent, [{
        type: Component,
        args: [{ selector: 'bmo-ng-card-checkbox', template: `
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
    `, styles: [":host { display: inline-block; }"] }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { checkCardClass: [{
            type: HostBinding,
            args: ['class.check-card']
        }], label: [{
            type: Input
        }], disabled: [{
            type: Input
        }], checked: [{
            type: Input
        }], id: [{
            type: Input
        }], img: [{
            type: Input
        }], value: [{
            type: Input
        }] }); })();

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
BmoNgCardCheckboxWrapComponent.ɵfac = function BmoNgCardCheckboxWrapComponent_Factory(t) { return new (t || BmoNgCardCheckboxWrapComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NgControl, 10)); };
BmoNgCardCheckboxWrapComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: BmoNgCardCheckboxWrapComponent, selectors: [["bmo-ng-card-checkbox-wrap"]], contentQueries: function BmoNgCardCheckboxWrapComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, BmoNgCardCheckboxComponent, 4);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.checkboxes = _t);
    } }, inputs: { errorMessage: "errorMessage", legend: "legend", disabled: "disabled" }, ngContentSelectors: _c7, decls: 8, vars: 4, consts: [[1, "check-group"], [1, "input-wrap", "input-checkbox"], [1, "legend", "check-legend"], [1, "card-check-wrap"], ["role", "alert", 1, "error-message"]], template: function BmoNgCardCheckboxWrapComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c6);
        ɵngcc0.ɵɵelementStart(0, "div", 0)(1, "fieldset", 1)(2, "legend", 2);
        ɵngcc0.ɵɵtext(3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "div", 3);
        ɵngcc0.ɵɵprojection(5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(6, "span", 4);
        ɵngcc0.ɵɵtext(7);
        ɵngcc0.ɵɵelementEnd()()();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵtextInterpolate(ctx.legend);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵclassProp("has-error", ctx.error);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate(ctx.errorMessage);
    } }, encapsulation: 2 });
BmoNgCardCheckboxWrapComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] }
];
BmoNgCardCheckboxWrapComponent.propDecorators = {
    checkboxes: [{ type: ContentChildren, args: [BmoNgCardCheckboxComponent,] }],
    errorMessage: [{ type: Input }],
    legend: [{ type: Input }],
    disabled: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(BmoNgCardCheckboxWrapComponent, [{
        type: Component,
        args: [{
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
            }]
    }], function () { return [{ type: ɵngcc1.NgControl, decorators: [{
                type: Optional
            }, {
                type: Self
            }] }]; }, { errorMessage: [{
            type: Input
        }], legend: [{
            type: Input
        }], disabled: [{
            type: Input
        }], checkboxes: [{
            type: ContentChildren,
            args: [BmoNgCardCheckboxComponent]
        }] }); })();

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
BmoNgCheckboxComponent.ɵfac = function BmoNgCheckboxComponent_Factory(t) { return new (t || BmoNgCheckboxComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
BmoNgCheckboxComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: BmoNgCheckboxComponent, selectors: [["bmo-ng-checkbox"]], inputs: { checked: "checked", disabled: "disabled", isChild: "isChild", id: "id", label: "label", value: "value", name: "name" }, decls: 2, vars: 2, consts: [[4, "ngIf"], [1, "input-wrap", "input-checkbox"], ["type", "checkbox", 1, "check", 3, "name", "id", "value", "checked", "disabled", "click", "keyup"], [1, "check-label", "active-label", 3, "for"]], template: function BmoNgCheckboxComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, BmoNgCheckboxComponent_ng_container_0_Template, 5, 8, "ng-container", 0);
        ɵngcc0.ɵɵtemplate(1, BmoNgCheckboxComponent_ng_container_1_Template, 4, 8, "ng-container", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.isChild);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.isChild);
    } }, dependencies: [ɵngcc2.NgIf], encapsulation: 2 });
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(BmoNgCheckboxComponent, [{
        type: Component,
        args: [{
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
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { checked: [{
            type: Input
        }], disabled: [{
            type: Input
        }], isChild: [{
            type: Input
        }], id: [{
            type: Input
        }], label: [{
            type: Input
        }], value: [{
            type: Input
        }], name: [{
            type: Input
        }] }); })();

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
BmoNgCheckboxWrapComponent.ɵfac = function BmoNgCheckboxWrapComponent_Factory(t) { return new (t || BmoNgCheckboxWrapComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NgControl, 10)); };
BmoNgCheckboxWrapComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: BmoNgCheckboxWrapComponent, selectors: [["bmo-ng-checkbox-wrap"]], contentQueries: function BmoNgCheckboxWrapComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, BmoNgCheckboxComponent, 4);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.checkboxes = _t);
    } }, inputs: { name: "name", disabled: "disabled", label: "label", errorMessage: "errorMessage" }, ngContentSelectors: _c9, decls: 6, vars: 3, consts: [[1, "check-group"], [1, "input-wrap", "input-checkbox", 3, "disabled"], [1, "legend", "check-legend"], ["class", "error-message has-error", "role", "alert", 4, "ngIf"], ["role", "alert", 1, "error-message", "has-error"]], template: function BmoNgCheckboxWrapComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c8);
        ɵngcc0.ɵɵelementStart(0, "div", 0)(1, "fieldset", 1)(2, "legend", 2);
        ɵngcc0.ɵɵtext(3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵprojection(4);
        ɵngcc0.ɵɵtemplate(5, BmoNgCheckboxWrapComponent_span_5_Template, 2, 1, "span", 3);
        ɵngcc0.ɵɵelementEnd()();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("disabled", ctx.disabled);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.label);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.error);
    } }, dependencies: [ɵngcc2.NgIf], encapsulation: 2 });
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(BmoNgCheckboxWrapComponent, [{
        type: Component,
        args: [{
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
            }]
    }], function () { return [{ type: ɵngcc1.NgControl, decorators: [{
                type: Optional
            }, {
                type: Self
            }] }]; }, { name: [{
            type: Input
        }], disabled: [{
            type: Input
        }], checkboxes: [{
            type: ContentChildren,
            args: [BmoNgCheckboxComponent]
        }], label: [{
            type: Input
        }], errorMessage: [{
            type: Input
        }] }); })();

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
BmoNgParentCheckboxComponent.ɵfac = function BmoNgParentCheckboxComponent_Factory(t) { return new (t || BmoNgParentCheckboxComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NgControl, 10)); };
BmoNgParentCheckboxComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: BmoNgParentCheckboxComponent, selectors: [["bmo-ng-parent-checkbox"]], contentQueries: function BmoNgParentCheckboxComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, BmoNgCheckboxComponent, 4);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.checkboxes = _t);
    } }, viewQuery: function BmoNgParentCheckboxComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.inputElement = _t.first);
    } }, inputs: { name: "name", checked: "checked", disabled: "disabled", id: "id", label: "label", errorMessage: "errorMessage" }, ngContentSelectors: _c9, decls: 7, vars: 8, consts: [[1, "input-wrap", "input-checkbox", "parent-checkbox"], ["type", "checkbox", 3, "name", "id", "checked", "disabled", "click", "keydown"], ["inputElement", ""], [3, "for"], [1, "checkboxes"]], template: function BmoNgParentCheckboxComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c8);
        ɵngcc0.ɵɵelementStart(0, "div", 0)(1, "input", 1, 2);
        ɵngcc0.ɵɵlistener("click", function BmoNgParentCheckboxComponent_Template_input_click_1_listener($event) { return ctx.onClick($event); })("keydown", function BmoNgParentCheckboxComponent_Template_input_keydown_1_listener($event) { return ctx.onKeyDown($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "label", 3);
        ɵngcc0.ɵɵtext(4);
        ɵngcc0.ɵɵelementEnd()();
        ɵngcc0.ɵɵelementStart(5, "ul", 4);
        ɵngcc0.ɵɵprojection(6);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵpropertyInterpolate("name", ctx.name);
        ɵngcc0.ɵɵpropertyInterpolate("id", ctx.id);
        ɵngcc0.ɵɵproperty("checked", ctx.checked)("disabled", ctx.disabled);
        ɵngcc0.ɵɵattribute("aria-checked", ctx.ariaState)("aria-controls", ctx.childIds);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵpropertyInterpolate("for", ctx.id);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate(ctx.label);
    } }, encapsulation: 2 });
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(BmoNgParentCheckboxComponent, [{
        type: Component,
        args: [{
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
            }]
    }], function () { return [{ type: ɵngcc1.NgControl, decorators: [{
                type: Optional
            }, {
                type: Self
            }] }]; }, { name: [{
            type: Input
        }], checked: [{
            type: Input
        }], disabled: [{
            type: Input
        }], id: [{
            type: Input
        }], checkboxes: [{
            type: ContentChildren,
            args: [BmoNgCheckboxComponent]
        }], inputElement: [{
            type: ViewChild,
            args: ['inputElement']
        }], label: [{
            type: Input
        }], errorMessage: [{
            type: Input
        }] }); })();

const declarations = [
    BmoNgCheckboxComponent,
    BmoNgCardCheckboxComponent,
    BmoNgCheckboxWrapComponent,
    BmoNgParentCheckboxComponent,
    BmoNgCardCheckboxWrapComponent
];
class BmoNgCheckboxModule {
}
BmoNgCheckboxModule.ɵfac = function BmoNgCheckboxModule_Factory(t) { return new (t || BmoNgCheckboxModule)(); };
BmoNgCheckboxModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: BmoNgCheckboxModule });
BmoNgCheckboxModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [CommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(BmoNgCheckboxModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [...declarations],
                exports: [...declarations]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(BmoNgCheckboxModule, { declarations: function () { return [BmoNgCheckboxComponent, BmoNgCardCheckboxComponent, BmoNgCheckboxWrapComponent, BmoNgParentCheckboxComponent, BmoNgCardCheckboxWrapComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [BmoNgCheckboxComponent, BmoNgCardCheckboxComponent, BmoNgCheckboxWrapComponent, BmoNgParentCheckboxComponent, BmoNgCardCheckboxWrapComponent]; } }); })();

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
BmoNgModalComponent.ɵfac = function BmoNgModalComponent_Factory(t) { return new (t || BmoNgModalComponent)(); };
BmoNgModalComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: BmoNgModalComponent, selectors: [["bmo-ng-modal"]], viewQuery: function BmoNgModalComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c10, 5);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.modal = _t.first);
    } }, hostBindings: function BmoNgModalComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("keyup", function BmoNgModalComponent_keyup_HostBindingHandler($event) { return ctx.escapeCloseModal($event); });
    } }, inputs: { id: "id", title: "title", isDismissable: "isDismissable" }, ngContentSelectors: _c5, decls: 5, vars: 8, consts: [[1, "modal", "scrollbar", 3, "id"], ["modal", ""], ["class", "icon-button medium modal-close", "aria-label", "Close this modal", 3, "click", 4, "ngIf"], [1, "bmo-overlay-dark", 3, "click"], ["aria-label", "Close this modal", 1, "icon-button", "medium", "modal-close", 3, "click"], [1, "icon", "close", "medium", "granite"]], template: function BmoNgModalComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0, 1);
        ɵngcc0.ɵɵtemplate(2, BmoNgModalComponent_button_2_Template, 2, 0, "button", 2);
        ɵngcc0.ɵɵprojection(3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "div", 3);
        ɵngcc0.ɵɵlistener("click", function BmoNgModalComponent_Template_div_click_4_listener() { return ctx.onBackgroundClick(); });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("active", ctx.isActive);
        ɵngcc0.ɵɵproperty("id", ctx.id);
        ɵngcc0.ɵɵattribute("aria-describedby", ctx.title)("tabIndex", ctx.isActive ? 0 : -1);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.isDismissable);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵclassProp("active", ctx.isActive);
    } }, dependencies: [ɵngcc2.NgIf] });
BmoNgModalComponent.ctorParameters = () => [];
BmoNgModalComponent.propDecorators = {
    id: [{ type: Input }],
    title: [{ type: Input }],
    isDismissable: [{ type: Input }],
    modal: [{ type: ViewChild, args: ['modal',] }],
    escapeCloseModal: [{ type: HostListener, args: ['keyup', ['$event'],] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(BmoNgModalComponent, [{
        type: Component,
        args: [{ selector: 'bmo-ng-modal', template: "<div #modal class=\"modal scrollbar\" [class.active]=\"isActive\" [id]=\"id\" [attr.aria-describedby]=\"title\" [attr.tabIndex]=\"isActive ? 0 : -1\">\r\n    <button *ngIf=\"isDismissable\" class=\"icon-button medium modal-close\" aria-label=\"Close this modal\" (click)=\"closeModal()\"><span class=\"icon close medium granite\"></span></button>\r\n    <ng-content></ng-content>\r\n</div>\r\n\r\n<div class=\"bmo-overlay-dark\" [class.active]=\"isActive\" (click)=\"onBackgroundClick()\"></div>" }]
    }], function () { return []; }, { id: [{
            type: Input
        }], title: [{
            type: Input
        }], isDismissable: [{
            type: Input
        }], 
    /**
     * Close modal if the Escape key was pressed
     *
     * @param event Keyboard event that called this function
     */
    escapeCloseModal: [{
            type: HostListener,
            args: ['keyup', ['$event']]
        }], modal: [{
            type: ViewChild,
            args: ['modal']
        }] }); })();

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
BmoNgPopoverComponent.ɵfac = function BmoNgPopoverComponent_Factory(t) { return new (t || BmoNgPopoverComponent)(); };
BmoNgPopoverComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: BmoNgPopoverComponent, selectors: [["bmo-ng-popover"]], viewQuery: function BmoNgPopoverComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c11, 5);
        ɵngcc0.ɵɵviewQuery(_c12, 5);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.popoverButton = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.popoverContent = _t.first);
    } }, hostVars: 2, hostBindings: function BmoNgPopoverComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("popover-wrapper", true);
    } }, inputs: { icon: "icon", direction: "direction", title: "title", containerStyle: "containerStyle", buttonStyle: "buttonStyle" }, ngContentSelectors: _c5, decls: 14, vars: 14, consts: [[1, "popover-wrapper"], ["aria-label", "Click here for help text", "aria-haspopup", "true", 1, "icon-button", "medium", "popover-trigger", 3, "click"], ["popoverButton", ""], [3, "ngClass"], [3, "ngClass", "tabindex", "ngStyle"], ["popoverContent", ""], ["aria-haspopup", "true", 1, "icon-button", "medium", "pull-right", "close-popover", 3, "ngStyle", "click"], [1, "icon", "close", "medium", "granite"], [1, "popover-header"], [1, "bmo-overlay-light", 3, "click"]], template: function BmoNgPopoverComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0)(1, "button", 1, 2);
        ɵngcc0.ɵɵlistener("click", function BmoNgPopoverComponent_Template_button_click_1_listener() { return ctx.displayPopover(); });
        ɵngcc0.ɵɵtext(3, "Click here for help text");
        ɵngcc0.ɵɵelement(4, "span", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(5, "div", 4, 5)(7, "button", 6);
        ɵngcc0.ɵɵlistener("click", function BmoNgPopoverComponent_Template_button_click_7_listener() { return ctx.closePopover(); });
        ɵngcc0.ɵɵtext(8, " Close this popover ");
        ɵngcc0.ɵɵelement(9, "span", 7);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(10, "p", 8);
        ɵngcc0.ɵɵtext(11);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵprojection(12);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(13, "div", 9);
        ɵngcc0.ɵɵlistener("click", function BmoNgPopoverComponent_Template_div_click_13_listener() { return ctx.closePopover(); });
        ɵngcc0.ɵɵelementEnd()();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(10, _c13, ctx.icon));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassProp("active", ctx.isActive);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(12, _c14, ctx.direction))("tabindex", ctx.isActive ? 0 : -1)("ngStyle", ctx.containerStyle);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.buttonStyle);
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵtextInterpolate(ctx.title);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵclassProp("active", ctx.isActive);
    } }, dependencies: [ɵngcc2.NgClass, ɵngcc2.NgStyle], styles: [".popover[_ngcontent-%COMP%]{-webkit-transition:none;transition:none}"] });
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(BmoNgPopoverComponent, [{
        type: Component,
        args: [{ selector: 'bmo-ng-popover', template: "<div class=\"popover-wrapper\">\r\n    <button #popoverButton class=\"icon-button medium popover-trigger\" aria-label=\"Click here for help text\" aria-haspopup=\"true\" (click)=\"displayPopover()\">Click here for help text<span [ngClass]=\"['icon', icon, 'medium']\"></span></button>\r\n    <div #popoverContent [ngClass]=\"['popover', 'block', direction]\" [class.active]=\"isActive\" [tabindex]=\"isActive ? 0 : -1\" [ngStyle]=\"containerStyle\">\r\n        <button class=\"icon-button medium pull-right close-popover\" aria-haspopup=\"true\" (click)=\"closePopover()\" [ngStyle]=\"buttonStyle\">\r\n            Close this popover\r\n            <span class=\"icon close medium granite\"></span>\r\n        </button>\r\n        <p class=\"popover-header\">{{title}}</p>\r\n        <ng-content></ng-content>\r\n    </div>\r\n    <div class=\"bmo-overlay-light\" [class.active]=\"isActive\" (click)=\"closePopover()\"></div>\r\n</div>", host: { '[class.popover-wrapper]': 'true' }, styles: [".popover{-webkit-transition:none;transition:none}"] }]
    }], function () { return []; }, { icon: [{
            type: Input
        }], direction: [{
            type: Input
        }], title: [{
            type: Input
        }], containerStyle: [{
            type: Input
        }], buttonStyle: [{
            type: Input
        }], popoverButton: [{
            type: ViewChild,
            args: ['popoverButton']
        }], popoverContent: [{
            type: ViewChild,
            args: ['popoverContent']
        }] }); })();

class BmoNgPopoverHeaderComponent {
}
BmoNgPopoverHeaderComponent.ɵfac = function BmoNgPopoverHeaderComponent_Factory(t) { return new (t || BmoNgPopoverHeaderComponent)(); };
BmoNgPopoverHeaderComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: BmoNgPopoverHeaderComponent, selectors: [["bmo-ng-popover-header"]], hostVars: 2, hostBindings: function BmoNgPopoverHeaderComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("popover-header", true);
    } }, ngContentSelectors: _c5, decls: 1, vars: 0, template: function BmoNgPopoverHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(BmoNgPopoverHeaderComponent, [{
        type: Component,
        args: [{
                selector: 'bmo-ng-popover-header',
                template: '<ng-content></ng-content>',
                host: { '[class.popover-header]': 'true' }
            }]
    }], null, null); })();

class BmoNgPopoverContentComponent {
}
BmoNgPopoverContentComponent.ɵfac = function BmoNgPopoverContentComponent_Factory(t) { return new (t || BmoNgPopoverContentComponent)(); };
BmoNgPopoverContentComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: BmoNgPopoverContentComponent, selectors: [["bmo-ng-popover-content"]], hostVars: 2, hostBindings: function BmoNgPopoverContentComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("popover-content", true);
    } }, ngContentSelectors: _c5, decls: 1, vars: 0, template: function BmoNgPopoverContentComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(BmoNgPopoverContentComponent, [{
        type: Component,
        args: [{
                selector: 'bmo-ng-popover-content',
                template: '<ng-content></ng-content>',
                host: { '[class.popover-content]': 'true' }
            }]
    }], null, null); })();

const declarations$1 = [
    BmoNgPopoverComponent,
    BmoNgPopoverHeaderComponent,
    BmoNgPopoverContentComponent
];
class BmoNgPopoverModule {
}
BmoNgPopoverModule.ɵfac = function BmoNgPopoverModule_Factory(t) { return new (t || BmoNgPopoverModule)(); };
BmoNgPopoverModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: BmoNgPopoverModule });
BmoNgPopoverModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [CommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(BmoNgPopoverModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [...declarations$1],
                exports: [...declarations$1]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(BmoNgPopoverModule, { declarations: function () { return [BmoNgPopoverComponent, BmoNgPopoverHeaderComponent, BmoNgPopoverContentComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [BmoNgPopoverComponent, BmoNgPopoverHeaderComponent, BmoNgPopoverContentComponent]; } }); })();

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
BmoNgRadioButtonComponent.ɵfac = function BmoNgRadioButtonComponent_Factory(t) { return new (t || BmoNgRadioButtonComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
BmoNgRadioButtonComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: BmoNgRadioButtonComponent, selectors: [["bmo-ng-radio-button"]], inputs: { type: "type", label: "label", disabled: "disabled", id: "id", value: "value", name: "name" }, decls: 3, vars: 13, consts: [["type", "radio", 3, "name", "id", "value"], [3, "for"]], template: function BmoNgRadioButtonComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelement(0, "input", 0);
        ɵngcc0.ɵɵelementStart(1, "label", 1);
        ɵngcc0.ɵɵtext(2);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("radio", ctx.type === "traditional")("box-radio", ctx.type === "box");
        ɵngcc0.ɵɵpropertyInterpolate("name", ctx.name);
        ɵngcc0.ɵɵpropertyInterpolate("id", ctx.id);
        ɵngcc0.ɵɵpropertyInterpolate("value", ctx.value);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassProp("radio-label", ctx.type !== "box")("box-radio-label", ctx.type === "box");
        ɵngcc0.ɵɵpropertyInterpolate("for", ctx.id);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate(ctx.label);
    } }, encapsulation: 2 });
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(BmoNgRadioButtonComponent, [{
        type: Component,
        args: [{
                selector: 'bmo-ng-radio-button',
                template: `
        <input type="radio" [class.radio]="type === 'traditional'" [class.box-radio]="type === 'box'" name="{{name}}" id="{{id}}" value="{{value}}" >
        <label [class.radio-label]="type !== 'box'" [class.box-radio-label]="type === 'box'" for="{{id}}">{{label}}</label>
    `
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { type: [{
            type: Input
        }], label: [{
            type: Input
        }], disabled: [{
            type: Input
        }], id: [{
            type: Input
        }], value: [{
            type: Input
        }], name: [{
            type: Input
        }] }); })();

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
BmoNgRadioButtonContainerComponent.ɵfac = function BmoNgRadioButtonContainerComponent_Factory(t) { return new (t || BmoNgRadioButtonContainerComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NgControl, 10)); };
BmoNgRadioButtonContainerComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: BmoNgRadioButtonContainerComponent, selectors: [["bmo-ng-radio-button-wrap"]], contentQueries: function BmoNgRadioButtonContainerComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, BmoNgRadioButtonComponent, 4);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.radioButtons = _t);
    } }, hostVars: 2, hostBindings: function BmoNgRadioButtonContainerComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("radio-group", ctx.radioGroupClass);
    } }, inputs: { type: "type", name: "name", disabled: "disabled", legend: "legend", errorMessage: "errorMessage" }, ngContentSelectors: _c16, decls: 4, vars: 3, consts: [[1, "input-wrap", "input-radio", 3, "disabled"], ["class", "legend", 4, "ngIf"], ["class", "error-message has-error", "role", "alert", 4, "ngIf"], [1, "legend"], ["role", "alert", 1, "error-message", "has-error"]], template: function BmoNgRadioButtonContainerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c15);
        ɵngcc0.ɵɵelementStart(0, "fieldset", 0);
        ɵngcc0.ɵɵtemplate(1, BmoNgRadioButtonContainerComponent_legend_1_Template, 2, 1, "legend", 1);
        ɵngcc0.ɵɵprojection(2);
        ɵngcc0.ɵɵtemplate(3, BmoNgRadioButtonContainerComponent_span_3_Template, 2, 1, "span", 2);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("disabled", ctx.disabled);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.legend);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.error);
    } }, dependencies: [ɵngcc2.NgIf] });
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(BmoNgRadioButtonContainerComponent, [{
        type: Component,
        args: [{ selector: 'bmo-ng-radio-button-wrap', template: "<fieldset class=\"input-wrap input-radio\" [disabled]=\"disabled\">\n    <legend *ngIf=\"legend\" class=\"legend\">{{legend}}</legend>\n    <ng-content select=\"bmo-ng-radio-button\"></ng-content>\n    <span *ngIf=\"error\" class=\"error-message has-error\" role=\"alert\">{{errorMessage}}</span>\n</fieldset>" }]
    }], function () { return [{ type: ɵngcc1.NgControl, decorators: [{
                type: Optional
            }, {
                type: Self
            }] }]; }, { radioGroupClass: [{
            type: HostBinding,
            args: ['class.radio-group']
        }], type: [{
            type: Input
        }], name: [{
            type: Input
        }], disabled: [{
            type: Input
        }], radioButtons: [{
            type: ContentChildren,
            args: [BmoNgRadioButtonComponent]
        }], legend: [{
            type: Input
        }], errorMessage: [{
            type: Input
        }] }); })();

const declarations$2 = [
    BmoNgRadioButtonComponent,
    BmoNgRadioButtonContainerComponent
];
class BmoNgRadioButtonModule {
}
BmoNgRadioButtonModule.ɵfac = function BmoNgRadioButtonModule_Factory(t) { return new (t || BmoNgRadioButtonModule)(); };
BmoNgRadioButtonModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: BmoNgRadioButtonModule });
BmoNgRadioButtonModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [CommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(BmoNgRadioButtonModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [...declarations$2],
                exports: [...declarations$2]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(BmoNgRadioButtonModule, { declarations: function () { return [BmoNgRadioButtonComponent, BmoNgRadioButtonContainerComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [BmoNgRadioButtonComponent, BmoNgRadioButtonContainerComponent]; } }); })();

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
BmoNgSelectComponent.ɵfac = function BmoNgSelectComponent_Factory(t) { return new (t || BmoNgSelectComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NgControl, 10)); };
BmoNgSelectComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: BmoNgSelectComponent, selectors: [["bmo-ng-select"]], viewQuery: function BmoNgSelectComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c17, 5);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.selectElement = _t.first);
    } }, inputs: { label: "label", helperText: "helperText", errorMessage: "errorMessage", autofocus: "autofocus", disabled: "disabled", readonly: "readonly", mercury: "mercury" }, ngContentSelectors: _c19, decls: 13, vars: 22, consts: [[1, "form-field"], [1, "form-label-group"], [1, "select", 3, "disabled", "name", "id", "value", "change"], ["selectElement", ""], [1, "slide-label", "select-label", 3, "for", "active-label"], [1, "label-text"], ["small", "", "icon", "baby-chevy-down"], ["role", "alert", 1, "error-message", "select-error", 3, "id"], [1, "input-helper-text", "select-helper", 3, "id"]], template: function BmoNgSelectComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c18);
        ɵngcc0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "select", 2, 3);
        ɵngcc0.ɵɵlistener("change", function BmoNgSelectComponent_Template_select_change_2_listener($event) { return ctx.writeValue($event.srcElement.value); });
        ɵngcc0.ɵɵprojection(4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(5, "label", 4)(6, "span", 5);
        ɵngcc0.ɵɵtext(7);
        ɵngcc0.ɵɵelementEnd()();
        ɵngcc0.ɵɵelement(8, "bmo-icon", 6);
        ɵngcc0.ɵɵelementStart(9, "span", 7);
        ɵngcc0.ɵɵtext(10);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(11, "span", 8);
        ɵngcc0.ɵɵtext(12);
        ɵngcc0.ɵɵelementEnd()()();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("mercury", ctx.mercury);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵclassProp("error", ctx.error);
        ɵngcc0.ɵɵpropertyInterpolate("name", ctx.labelId);
        ɵngcc0.ɵɵpropertyInterpolate("id", ctx.labelId);
        ɵngcc0.ɵɵproperty("disabled", ctx.disabled)("value", ctx.value);
        ɵngcc0.ɵɵattribute("readonly", ctx.readonly || null)("aria-describedby", "error-" + ctx.labelId);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵclassProp("error-field", ctx.error)("disabled", ctx.disabled);
        ɵngcc0.ɵɵpropertyInterpolate("for", ctx.labelId);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.label);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵclassProp("error", ctx.error);
        ɵngcc0.ɵɵpropertyInterpolate1("id", "error-", ctx.labelId, "");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate(ctx.errorMessage);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵpropertyInterpolate1("id", "helper-", ctx.labelId, "");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate(ctx.helperText);
    } } });
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(BmoNgSelectComponent, [{
        type: Component,
        args: [{ selector: 'bmo-ng-select', template: "<div class=\"form-field\" [class.mercury]=\"mercury\">\n    <div class=\"form-label-group\">\n        <select #selectElement class=\"select\" [class.error]=\"error\" [disabled]=\"disabled\" [attr.readonly]=\"readonly || null\" name=\"{{labelId}}\" id=\"{{labelId}}\" [value]=\"value\" [attr.aria-describedby]=\"'error-' + labelId\" (change)=\"writeValue($event.srcElement.value)\">\n            <ng-content select=\"option\"></ng-content>\n        </select>\n        <label for=\"{{labelId}}\" class=\"slide-label select-label\" [class.active-label]=\"\" [class.error-field]=\"error\" [class.disabled]=\"disabled\">\n            <span class=\"label-text\">{{label}}</span>\n        </label>\n        <bmo-icon small icon=\"baby-chevy-down\"></bmo-icon>\n        <span id=\"error-{{labelId}}\" class=\"error-message select-error\" [class.error]=\"error\" role=\"alert\">{{errorMessage}}</span>\n        <span id=\"helper-{{labelId}}\" class=\"input-helper-text select-helper\">{{helperText}}</span>\n    </div>\n</div>" }]
    }], function () { return [{ type: ɵngcc1.NgControl, decorators: [{
                type: Optional
            }, {
                type: Self
            }] }]; }, { label: [{
            type: Input
        }], helperText: [{
            type: Input
        }], errorMessage: [{
            type: Input
        }], autofocus: [{
            type: Input
        }], disabled: [{
            type: Input
        }], readonly: [{
            type: Input
        }], mercury: [{
            type: Input
        }], selectElement: [{
            type: ViewChild,
            args: ['selectElement']
        }] }); })();

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
BmoNgTabPanelComponent.ɵfac = function BmoNgTabPanelComponent_Factory(t) { return new (t || BmoNgTabPanelComponent)(); };
BmoNgTabPanelComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: BmoNgTabPanelComponent, selectors: [["bmo-ng-tab-panel"]], hostVars: 8, hostBindings: function BmoNgTabPanelComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵattribute("id", ctx.id)("role", ctx.roleAttribute)("aria-describedby", ctx.ariaDescribedByAttribute)("aria-hidden", ctx.ariaHiddenAttribute);
        ɵngcc0.ɵɵclassProp("tab-panel", ctx.tabPanelClass)("active-tab-content", ctx.activeTabContentClass);
    } }, inputs: { active: "active" }, ngContentSelectors: _c5, decls: 2, vars: 0, consts: [[1, "panel-content"]], template: function BmoNgTabPanelComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });
BmoNgTabPanelComponent.propDecorators = {
    active: [{ type: Input }],
    tabPanelClass: [{ type: HostBinding, args: ['class.tab-panel',] }],
    id: [{ type: HostBinding, args: ['attr.id',] }],
    roleAttribute: [{ type: HostBinding, args: ['attr.role',] }],
    ariaDescribedByAttribute: [{ type: HostBinding, args: ['attr.aria-describedby',] }],
    activeTabContentClass: [{ type: HostBinding, args: ['class.active-tab-content',] }],
    ariaHiddenAttribute: [{ type: HostBinding, args: ['attr.aria-hidden',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(BmoNgTabPanelComponent, [{
        type: Component,
        args: [{
                selector: 'bmo-ng-tab-panel',
                template: `
        <div class="panel-content">
            <ng-content></ng-content>
        </div>
    `
            }]
    }], function () { return []; }, { tabPanelClass: [{
            type: HostBinding,
            args: ['class.tab-panel']
        }], id: [{
            type: HostBinding,
            args: ['attr.id']
        }], roleAttribute: [{
            type: HostBinding,
            args: ['attr.role']
        }], ariaDescribedByAttribute: [{
            type: HostBinding,
            args: ['attr.aria-describedby']
        }], activeTabContentClass: [{
            type: HostBinding,
            args: ['class.active-tab-content']
        }], ariaHiddenAttribute: [{
            type: HostBinding,
            args: ['attr.aria-hidden']
        }], active: [{
            type: Input
        }] }); })();

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
BmoNgTabComponent.ɵfac = function BmoNgTabComponent_Factory(t) { return new (t || BmoNgTabComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
BmoNgTabComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: BmoNgTabComponent, selectors: [["bmo-ng-tab"]], hostVars: 8, hostBindings: function BmoNgTabComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("keydown", function BmoNgTabComponent_keydown_HostBindingHandler($event) { return ctx.navigateTabs($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("id", ctx.id)("role", ctx.roleAttribute)("tabindex", ctx.tabIndex)("aria-selected", ctx.ariaSelectedAttribute);
        ɵngcc0.ɵɵclassProp("tab", ctx.tabClass)("active-tab-label", ctx.activeTabLabelClass);
    } }, inputs: { label: "label", active: "active" }, decls: 2, vars: 1, consts: [[1, "tab-indicator"]], template: function BmoNgTabComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtext(0);
        ɵngcc0.ɵɵelement(1, "span", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx.label, " ");
    } }, encapsulation: 2 });
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(BmoNgTabComponent, [{
        type: Component,
        args: [{
                selector: 'bmo-ng-tab',
                template: `
        {{label}}
        <span class="tab-indicator"></span>
    `
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { label: [{
            type: Input
        }], id: [{
            type: HostBinding,
            args: ['attr.id']
        }], roleAttribute: [{
            type: HostBinding,
            args: ['attr.role']
        }], tabIndex: [{
            type: HostBinding,
            args: ['attr.tabindex']
        }], ariaSelectedAttribute: [{
            type: HostBinding,
            args: ['attr.aria-selected']
        }], tabClass: [{
            type: HostBinding,
            args: ['class.tab']
        }], activeTabLabelClass: [{
            type: HostBinding,
            args: ['class.active-tab-label']
        }], active: [{
            type: Input
        }], navigateTabs: [{
            type: HostListener,
            args: ['keydown', ['$event']]
        }] }); })();

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
BmoNgTabListComponent.ɵfac = function BmoNgTabListComponent_Factory(t) { return new (t || BmoNgTabListComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
BmoNgTabListComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: BmoNgTabListComponent, selectors: [["bmo-ng-tab-list"]], contentQueries: function BmoNgTabListComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, BmoNgTabComponent, 4);
        ɵngcc0.ɵɵcontentQuery(dirIndex, BmoNgTabPanelComponent, 4);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.dslTabs = _t);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.dslPanels = _t);
    } }, hostVars: 2, hostBindings: function BmoNgTabListComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("bmo-tabs-wrap", ctx.tabsWrapClass);
    } }, ngContentSelectors: _c21, decls: 4, vars: 0, consts: [["role", "tablist", "aria-label", "Use right and left arrows to navigate between tabs", 1, "tab-list"], ["aria-hidden", "true", 1, "tablist-guideline"]], template: function BmoNgTabListComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c20);
        ɵngcc0.ɵɵelementStart(0, "ul", 0);
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelement(2, "span", 1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵprojection(3, 1);
    } }, encapsulation: 2 });
BmoNgTabListComponent.ctorParameters = () => [
    { type: ElementRef }
];
BmoNgTabListComponent.propDecorators = {
    tabsWrapClass: [{ type: HostBinding, args: ['class.bmo-tabs-wrap',] }],
    dslTabs: [{ type: ContentChildren, args: [BmoNgTabComponent,] }],
    dslPanels: [{ type: ContentChildren, args: [BmoNgTabPanelComponent,] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(BmoNgTabListComponent, [{
        type: Component,
        args: [{
                selector: 'bmo-ng-tab-list',
                template: `
        <ul class="tab-list" role="tablist" aria-label="Use right and left arrows to navigate between tabs">
            <ng-content select="bmo-ng-tab"></ng-content>
            <span class="tablist-guideline" aria-hidden="true"></span>
        </ul>
        <ng-content select="bmo-ng-tab-panel"></ng-content>
    `
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { tabsWrapClass: [{
            type: HostBinding,
            args: ['class.bmo-tabs-wrap']
        }], dslTabs: [{
            type: ContentChildren,
            args: [BmoNgTabComponent]
        }], dslPanels: [{
            type: ContentChildren,
            args: [BmoNgTabPanelComponent]
        }] }); })();

const declarations$3 = [
    BmoNgTabListComponent,
    BmoNgTabPanelComponent,
    BmoNgTabComponent
];
class BmoNgTabsModule {
}
BmoNgTabsModule.ɵfac = function BmoNgTabsModule_Factory(t) { return new (t || BmoNgTabsModule)(); };
BmoNgTabsModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: BmoNgTabsModule });
BmoNgTabsModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [CommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(BmoNgTabsModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [...declarations$3],
                exports: [...declarations$3]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(BmoNgTabsModule, { declarations: function () { return [BmoNgTabListComponent, BmoNgTabPanelComponent, BmoNgTabComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [BmoNgTabListComponent, BmoNgTabPanelComponent, BmoNgTabComponent]; } }); })();

class BmoDesignSystemModule {
}
BmoDesignSystemModule.ɵfac = function BmoDesignSystemModule_Factory(t) { return new (t || BmoDesignSystemModule)(); };
BmoDesignSystemModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: BmoDesignSystemModule });
BmoDesignSystemModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        BmoNgPopoverModule,
        BmoNgCheckboxModule,
        BmoNgTabsModule,
        BmoNgRadioButtonModule, BmoNgPopoverModule, BmoNgCheckboxModule, BmoNgRadioButtonModule, BmoNgTabsModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(BmoDesignSystemModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(BmoDesignSystemModule, { declarations: function () { return [BmoNgModalComponent, BmoNgAccordionComponent, BmoNgTextFieldComponent, BmoNgSelectComponent]; }, imports: function () { return [CommonModule,
        FormsModule,
        ReactiveFormsModule, BmoNgPopoverModule, BmoNgCheckboxModule, BmoNgTabsModule, BmoNgRadioButtonModule]; }, exports: function () { return [BmoNgModalComponent, BmoNgTextFieldComponent, BmoNgPopoverModule, BmoNgAccordionComponent, BmoNgSelectComponent, BmoNgCheckboxModule, BmoNgRadioButtonModule, BmoNgTabsModule]; } }); })();

/*
 * Public API Surface of bmo-ds-angular-components
 */

/**
 * Generated bundle index. Do not edit.
 */

export { BmoDesignSystemModule, BmoNgAccordionComponent, BmoNgCardCheckboxComponent, BmoNgCardCheckboxWrapComponent, BmoNgCheckboxComponent, BmoNgCheckboxModule, BmoNgCheckboxWrapComponent, BmoNgModalComponent, BmoNgParentCheckboxComponent, BmoNgPopoverComponent, BmoNgPopoverContentComponent, BmoNgPopoverHeaderComponent, BmoNgPopoverModule, BmoNgRadioButtonComponent, BmoNgRadioButtonContainerComponent, BmoNgRadioButtonModule, BmoNgSelectComponent, BmoNgTabComponent, BmoNgTabListComponent, BmoNgTabPanelComponent, BmoNgTabsModule, BmoNgTextFieldComponent };

//# sourceMappingURL=bmo-ds-angular-components.js.map