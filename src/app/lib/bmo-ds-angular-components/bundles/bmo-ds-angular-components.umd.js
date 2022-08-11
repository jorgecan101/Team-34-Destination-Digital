(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('bmo-ds-angular-components', ['exports', '@angular/core', '@angular/forms', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['bmo-ds-angular-components'] = {}, global.ng.core, global.ng.forms, global.ng.common));
}(this, (function (exports, core, forms, common) { 'use strict';

    var BmoNgTextFieldComponent = /** @class */ (function () {
        function BmoNgTextFieldComponent(ngControl) {
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
            this.onChange = function (val) { };
            this.onTouched = function () { };
            if (this.ngControl) {
                this.ngControl.valueAccessor = this;
            }
        }
        Object.defineProperty(BmoNgTextFieldComponent.prototype, "error", {
            get: function () {
                return this.ngControl ? (this.ngControl.invalid && this.ngControl.dirty) : false;
            },
            enumerable: false,
            configurable: true
        });
        BmoNgTextFieldComponent.prototype.writeValue = function (obj) {
            this.value = obj;
            this.onChange(obj);
        };
        BmoNgTextFieldComponent.prototype.registerOnChange = function (fn) {
            this.onChange = fn;
        };
        BmoNgTextFieldComponent.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        BmoNgTextFieldComponent.prototype.setDisabledState = function (isDisabled) {
            this.disabled = isDisabled;
        };
        BmoNgTextFieldComponent.prototype.ngOnInit = function () {
        };
        BmoNgTextFieldComponent.prototype.ngAfterViewInit = function () {
            if (this.autofocus) {
                this.inputElement.nativeElement.focus();
            }
        };
        return BmoNgTextFieldComponent;
    }());
    BmoNgTextFieldComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'bmo-ng-text-field',
                    template: "<div class=\"form-field\" [class.mercury]=\"mercury\">\r\n    <div class=\"form-label-group\">\r\n        <input #inputElement id=\"{{id}}\" class=\"input text\" name=\"{{id}}\" type=\"{{type}}\" [attr.maxlength]=\"maxLength || null\" [disabled]=\"disabled\" [value]=\"value\" (input)=\"writeValue($event.srcElement.value)\">\r\n        <label class=\"slide-label\" [class.active-label]=\"value?.length > 0\" [class.error-field]=\"error\" [class.disabled]=\"disabled\" for=\"{{id}}\">\r\n\t\t    <span class=\"label-text\">{{placeholder}}</span>\r\n\t\t</label>\r\n        <span *ngIf=\"error\" class=\"error-message error\" role=\"alert\">{{errorMessage}}</span>\r\n        <span *ngIf=\"helperText\" class=\"input-helper-text\">{{helperText}}</span>\r\n    </div>\r\n</div>\r\n",
                    styles: [""]
                },] }
    ];
    BmoNgTextFieldComponent.ctorParameters = function () { return [
        { type: forms.NgControl, decorators: [{ type: core.Optional }, { type: core.Self }] }
    ]; };
    BmoNgTextFieldComponent.propDecorators = {
        inputElement: [{ type: core.ViewChild, args: ['inputElement',] }],
        id: [{ type: core.Input }],
        placeholder: [{ type: core.Input }],
        helperText: [{ type: core.Input }],
        errorMessage: [{ type: core.Input }],
        type: [{ type: core.Input }],
        maxLength: [{ type: core.Input }],
        readonly: [{ type: core.Input }],
        autofocus: [{ type: core.Input }],
        mercury: [{ type: core.Input }],
        disabled: [{ type: core.Input }]
    };

    var BmoNgAccordionComponent = /** @class */ (function () {
        function BmoNgAccordionComponent() {
            this.bmoAccordionClass = true;
            this.iconRightAttribute = null;
            this.compactAttribute = null;
            this.title = '';
            this._compact = false;
            this._iconRight = false;
            this._expanded = false;
        }
        Object.defineProperty(BmoNgAccordionComponent.prototype, "compact", {
            get: function () {
                return this._compact;
            },
            set: function (compact) {
                this.compactAttribute = compact;
                this._compact = compact;
                if (!this.compactAttribute) {
                    this.compactAttribute = null;
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BmoNgAccordionComponent.prototype, "iconRight", {
            get: function () {
                return this._iconRight;
            },
            set: function (iconRight) {
                this.iconRightAttribute = iconRight;
                this._iconRight = iconRight;
                if (!this.iconRightAttribute) {
                    this.iconRightAttribute = null;
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BmoNgAccordionComponent.prototype, "expanded", {
            get: function () {
                return this._expanded;
            },
            set: function (expanded) {
                this._expanded = expanded;
                this.setPanelContainerHeight();
            },
            enumerable: false,
            configurable: true
        });
        BmoNgAccordionComponent.prototype.ngOnInit = function () {
            if (!this.id) {
                this.id = "accordion";
            }
        };
        BmoNgAccordionComponent.prototype.ngAfterViewInit = function () {
            this.setPanelContainerHeight();
        };
        BmoNgAccordionComponent.prototype.toggleAccordion = function () {
            this.expanded = !this.expanded;
        };
        BmoNgAccordionComponent.prototype.keydownShouldToggleAccordion = function (event) {
            if (event.key === ' ' || event.key === 'Spacebar' || event.key === 'Enter') {
                this.toggleAccordion();
                event.preventDefault();
            }
            if (event.key === 'Down' || event.key === 'ArrowDown') {
                this.expanded = true;
                event.preventDefault();
            }
        };
        BmoNgAccordionComponent.prototype.keyupShouldToggleAccordion = function (event) {
            if (event.key === 'Up' || event.key === 'ArrowUp') {
                this.expanded = false;
                event.preventDefault();
            }
        };
        BmoNgAccordionComponent.prototype.setPanelContainerHeight = function () {
            if (this.expanded) {
                this.panelContainer.nativeElement.style.height = this.panelContent.nativeElement.offsetHeight + 'px';
            }
            else {
                this.panelContainer.nativeElement.removeAttribute('style');
            }
        };
        return BmoNgAccordionComponent;
    }());
    BmoNgAccordionComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'bmo-ng-accordion',
                    template: "<button class=\"accordion-trigger\" [class.trigger-compact]=\"compact\" [class.expanded]=\"expanded\" tabindex=\"0\" role=\"tab\" [attr.aria-expanded]=\"expanded\" (click)=\"toggleAccordion()\" (keydown)=\"keydownShouldToggleAccordion($event)\" (keyup)=\"keyupShouldToggleAccordion($event)\">\r\n    <span aria-hidden=\"true\" class=\"icon\" [class.chevron-down]=\"!compact\" [class.baby-chevy-down]=\"compact\" [class.medium]=\"!compact\" [class.small]=\"compact\" title=\"Chevron down\" [class.pull-right]=\"iconRight\" role=\"presentation\"></span>\r\n    <span>{{title}}</span>\r\n    <span class=\"short-border\" [class.hide-me]=\"expanded\"></span>\r\n</button>\r\n<div #panelContainer class=\"accordion-panel\" [class.expanded]=\"expanded\" role=\"tabpanel\">\r\n    <div #panelContent class=\"panel-content\">\r\n        <ng-content></ng-content>\r\n    </div>\r\n    <span class=\"short-border\"></span>\r\n</div>",
                    styles: [""]
                },] }
    ];
    BmoNgAccordionComponent.ctorParameters = function () { return []; };
    BmoNgAccordionComponent.propDecorators = {
        accordionTrigger: [{ type: core.ViewChild, args: ['accordionTrigger',] }],
        accordionPanel: [{ type: core.ViewChild, args: ['accordionPanel',] }],
        panelContainer: [{ type: core.ViewChild, args: ['panelContainer',] }],
        panelContent: [{ type: core.ViewChild, args: ['panelContent',] }],
        bmoAccordionClass: [{ type: core.HostBinding, args: ['class.bmo-accordion',] }],
        iconRightAttribute: [{ type: core.HostBinding, args: ['attr.icon-right',] }],
        compactAttribute: [{ type: core.HostBinding, args: ['attr.compact',] }],
        title: [{ type: core.Input }],
        compact: [{ type: core.Input }],
        iconRight: [{ type: core.Input }],
        expanded: [{ type: core.Input }],
        id: [{ type: core.Input }]
    };

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var BmoNgCardCheckboxComponent = /** @class */ (function () {
        function BmoNgCardCheckboxComponent(elementRef) {
            this.elementRef = elementRef;
            this.checkCardClass = true;
            this.label = "";
            this.disabled = false;
            this.checked = false;
        }
        BmoNgCardCheckboxComponent.prototype.ngOnInit = function () {
            if (this.id) {
                this.labelId = this.id;
            }
            else {
                var random = Math.round(Math.random() * 10000);
                this.labelId = this.label.replace(/\s+/g, '-').toLowerCase() + random;
            }
        };
        BmoNgCardCheckboxComponent.prototype.toggleChecked = function () {
            this.checked = !this.checked;
        };
        Object.defineProperty(BmoNgCardCheckboxComponent.prototype, "inputElement", {
            get: function () {
                return this.elementRef.nativeElement.firstElementChild;
            },
            enumerable: false,
            configurable: true
        });
        return BmoNgCardCheckboxComponent;
    }());
    BmoNgCardCheckboxComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'bmo-ng-card-checkbox',
                    template: "\n        <div class=\"bmo-card-checkbox check-fixed-cards\">\n            <input\n                id=\"{{labelId}}\"\n                type=\"checkbox\"\n                class=\"card-check-input\"\n                [value]=\"value\"\n                [disabled]=\"disabled\"\n                [checked]=\"checked\"\n                [attr.aria-checked]=\"checked\"\n                (click)=\"toggleChecked()\"\n            >\n            <label class=\"card-check-label\" for=\"{{labelId}}\">\n                <span class=\"check\"></span>\n                <span class=\"card-check-image\">\n                    <img *ngIf=\"img\" src=\"{{img}}\" role=\"presentation\" />\n                </span>\n                <span class=\"card-check-label-text\">{{label}}</span>\n            </label>\n        </div>\n    ",
                    styles: [':host { display: inline-block; }']
                },] }
    ];
    BmoNgCardCheckboxComponent.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    BmoNgCardCheckboxComponent.propDecorators = {
        checkCardClass: [{ type: core.HostBinding, args: ['class.check-card',] }],
        id: [{ type: core.Input }],
        label: [{ type: core.Input }],
        img: [{ type: core.Input }],
        value: [{ type: core.Input }],
        disabled: [{ type: core.Input }],
        checked: [{ type: core.Input }]
    };

    var BmoNgCardCheckboxWrapComponent = /** @class */ (function () {
        function BmoNgCardCheckboxWrapComponent(ngControl) {
            this.ngControl = ngControl;
            this.errorMessage = '';
            this.legend = '';
            this._disabled = false;
            this.onChange = function (val) { };
            this.onTouched = function () { };
            if (ngControl) {
                ngControl.valueAccessor = this;
            }
        }
        Object.defineProperty(BmoNgCardCheckboxWrapComponent.prototype, "disabled", {
            get: function () {
                return this._disabled;
            },
            set: function (disabled) {
                var e_1, _a;
                this._disabled = disabled;
                if (this.checkboxes) {
                    try {
                        for (var _b = __values(this.checkboxes), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var checkbox = _c.value;
                            checkbox.disabled = this.disabled;
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BmoNgCardCheckboxWrapComponent.prototype, "error", {
            get: function () {
                return this.ngControl ? (this.ngControl.invalid && this.ngControl.dirty) : false;
            },
            enumerable: false,
            configurable: true
        });
        BmoNgCardCheckboxWrapComponent.prototype.ngAfterContentInit = function () {
            var e_2, _a;
            var _this = this;
            try {
                for (var _b = __values(this.checkboxes.toArray()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var checkbox = _c.value;
                    checkbox.disabled = this.disabled;
                    checkbox.inputElement.addEventListener('click', function () { return _this.writeValue(''); });
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
        };
        BmoNgCardCheckboxWrapComponent.prototype.writeValue = function (obj) {
            var e_3, _a;
            if (!this.checkboxes) {
                return this.onChange(null);
            }
            var checkboxValues = [];
            try {
                for (var _b = __values(this.checkboxes.toArray()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var checkbox = _c.value;
                    if (checkbox.checked) {
                        checkboxValues.push(checkbox.value);
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_3) throw e_3.error; }
            }
            if (checkboxValues.length === 0) {
                this.onChange(null);
            }
            this.onChange(checkboxValues);
        };
        BmoNgCardCheckboxWrapComponent.prototype.registerOnChange = function (fn) {
            this.onChange = fn;
        };
        BmoNgCardCheckboxWrapComponent.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        BmoNgCardCheckboxWrapComponent.prototype.setDisabledState = function (isDisabled) {
            this.disabled = isDisabled;
        };
        return BmoNgCardCheckboxWrapComponent;
    }());
    BmoNgCardCheckboxWrapComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'bmo-ng-card-checkbox-wrap',
                    template: "\n        <div class=\"check-group\">\n            <fieldset class=\"input-wrap input-checkbox\">\n                <legend class=\"legend check-legend\">{{legend}}</legend>\n                <div class=\"card-check-wrap\">\n                    <ng-content select=\"bmo-ng-card-checkbox\"></ng-content>\n                </div>\n                <span class=\"error-message\" [class.has-error]=\"error\" role=\"alert\">{{errorMessage}}</span>\n            </fieldset>\n        </div>\n    "
                },] }
    ];
    BmoNgCardCheckboxWrapComponent.ctorParameters = function () { return [
        { type: forms.NgControl, decorators: [{ type: core.Optional }, { type: core.Self }] }
    ]; };
    BmoNgCardCheckboxWrapComponent.propDecorators = {
        checkboxes: [{ type: core.ContentChildren, args: [BmoNgCardCheckboxComponent,] }],
        errorMessage: [{ type: core.Input }],
        legend: [{ type: core.Input }],
        disabled: [{ type: core.Input }]
    };

    var BmoNgCheckboxComponent = /** @class */ (function () {
        function BmoNgCheckboxComponent(elementRef) {
            this.elementRef = elementRef;
            this.checked = false;
            this.disabled = false;
            this.isChild = false;
            this.lastState = false;
        }
        BmoNgCheckboxComponent.prototype.ngOnInit = function () {
            if (!this.id) {
                var random = Math.round(Math.random() * 10000);
                this.id = this.label.replace(/\s+/g, '-').toLowerCase() + random;
            }
        };
        BmoNgCheckboxComponent.prototype.ngAfterViewInit = function () {
            if (this.isChild) {
                var oldParentElement = this.nativeElement.parentElement;
                var listElement = document.createElement('li');
                listElement.appendChild(this.nativeElement);
                oldParentElement.appendChild(listElement);
            }
        };
        BmoNgCheckboxComponent.prototype.toggleChecked = function () {
            this.checked = !this.checked;
            this.setLastState();
        };
        BmoNgCheckboxComponent.prototype.setChecked = function (val) {
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
        };
        BmoNgCheckboxComponent.prototype.setLastState = function () {
            if (this.isChild) {
                this.lastState = this.checked;
            }
        };
        Object.defineProperty(BmoNgCheckboxComponent.prototype, "nativeElement", {
            get: function () {
                return this.elementRef.nativeElement;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BmoNgCheckboxComponent.prototype, "inputElement", {
            get: function () {
                return this.elementRef.nativeElement.firstElementChild;
            },
            enumerable: false,
            configurable: true
        });
        return BmoNgCheckboxComponent;
    }());
    BmoNgCheckboxComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'bmo-ng-checkbox',
                    template: "\n    <ng-container *ngIf=\"isChild\">\n        <div class=\"input-wrap input-checkbox\">\n          <input\n            type=\"checkbox\"\n            name=\"{{name}}\"\n            id=\"{{id}}\"\n            class=\"check\"\n            [value]=\"value\"\n            [checked]=\"checked\"\n            [attr.aria-checked]=\"checked\"\n            [disabled]=\"disabled\"\n            (click)=\"toggleChecked()\"\n            (keyup)=\"setLastState()\"\n          >\n          <label class=\"check-label active-label\" for=\"{{id}}\">{{label}}</label>\n        </div>\n    </ng-container>\n    <ng-container *ngIf=\"!isChild\">\n        <input\n        type=\"checkbox\"\n        name=\"{{name}}\"\n        id=\"{{id}}\"\n        class=\"check\"\n        [value]=\"value\"\n        [checked]=\"checked\"\n        [attr.aria-checked]=\"checked\"\n        [disabled]=\"disabled\"\n        (click)=\"toggleChecked()\"\n        (keyup)=\"setLastState()\"\n      >\n      <label class=\"check-label active-label\" for=\"{{id}}\">{{label}}</label>\n    </ng-container>\n  "
                },] }
    ];
    BmoNgCheckboxComponent.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    BmoNgCheckboxComponent.propDecorators = {
        id: [{ type: core.Input }],
        label: [{ type: core.Input }],
        value: [{ type: core.Input }],
        name: [{ type: core.Input }],
        checked: [{ type: core.Input }],
        disabled: [{ type: core.Input }],
        isChild: [{ type: core.Input }]
    };

    var BmoNgCheckboxWrapComponent = /** @class */ (function () {
        function BmoNgCheckboxWrapComponent(ngControl) {
            var _this = this;
            this.ngControl = ngControl;
            this.name = 'checkbox-group-' + this.randomInterval(0, 1000);
            this._disabled = false;
            this.onChange = function (val) { };
            this.onTouched = function () { };
            this._clickListener = function (event) {
                _this.writeValue('');
                event.stopPropagation();
            };
            if (ngControl) {
                ngControl.valueAccessor = this;
            }
        }
        Object.defineProperty(BmoNgCheckboxWrapComponent.prototype, "disabled", {
            // States
            get: function () {
                return this._disabled;
            },
            set: function (disabled) {
                var e_1, _a;
                this._disabled = disabled;
                if (this.checkboxes) {
                    try {
                        for (var _b = __values(this.checkboxes), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var checkbox = _c.value;
                            checkbox.disabled = this.disabled;
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BmoNgCheckboxWrapComponent.prototype, "error", {
            get: function () {
                return this.ngControl ? (this.ngControl.invalid && this.ngControl.dirty) : false;
            },
            enumerable: false,
            configurable: true
        });
        BmoNgCheckboxWrapComponent.prototype.ngAfterContentInit = function () {
            var e_2, _a;
            try {
                for (var _b = __values(this.checkboxes), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var checkbox = _c.value;
                    checkbox.name = this.name;
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
        };
        BmoNgCheckboxWrapComponent.prototype.ngAfterViewInit = function () {
            var e_3, _a;
            try {
                for (var _b = __values(this.checkboxes), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var checkbox = _c.value;
                    checkbox.inputElement.addEventListener('click', this._clickListener);
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_3) throw e_3.error; }
            }
        };
        BmoNgCheckboxWrapComponent.prototype.ngOnDestroy = function () {
            var e_4, _a;
            try {
                for (var _b = __values(this.checkboxes), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var checkbox = _c.value;
                    checkbox.inputElement.removeEventListener('click', this._clickListener);
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_4) throw e_4.error; }
            }
        };
        BmoNgCheckboxWrapComponent.prototype.writeValue = function (obj) {
            var e_5, _a;
            if (!this.checkboxes) {
                return this.onChange(null);
            }
            var checkboxValues = [];
            try {
                for (var _b = __values(this.checkboxes), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var checkbox = _c.value;
                    if (checkbox.checked) {
                        checkboxValues.push(checkbox.value);
                    }
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_5) throw e_5.error; }
            }
            if (checkboxValues.length === 0) {
                return this.onChange(null);
            }
            return this.onChange(checkboxValues);
        };
        BmoNgCheckboxWrapComponent.prototype.registerOnChange = function (fn) {
            this.onChange = fn;
        };
        BmoNgCheckboxWrapComponent.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        BmoNgCheckboxWrapComponent.prototype.setDisabledState = function (isDisabled) {
            this.disabled = isDisabled;
        };
        BmoNgCheckboxWrapComponent.prototype.randomInterval = function (min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        };
        return BmoNgCheckboxWrapComponent;
    }());
    BmoNgCheckboxWrapComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'bmo-ng-checkbox-wrap',
                    template: "\n        <div class=\"check-group\">\n            <fieldset class=\"input-wrap input-checkbox\" [disabled]=\"disabled\">\n                <legend class=\"legend check-legend\">{{label}}</legend>\n                <ng-content select=\"bmo-ng-checkbox\"></ng-content>\n                <span *ngIf=\"error\" class=\"error-message has-error\" role=\"alert\">{{errorMessage}}</span>\n            </fieldset>\n        </div>\n    "
                },] }
    ];
    BmoNgCheckboxWrapComponent.ctorParameters = function () { return [
        { type: forms.NgControl, decorators: [{ type: core.Optional }, { type: core.Self }] }
    ]; };
    BmoNgCheckboxWrapComponent.propDecorators = {
        checkboxes: [{ type: core.ContentChildren, args: [BmoNgCheckboxComponent,] }],
        label: [{ type: core.Input }],
        errorMessage: [{ type: core.Input }],
        name: [{ type: core.Input }],
        disabled: [{ type: core.Input }]
    };

    var BmoNgParentCheckboxComponent = /** @class */ (function () {
        function BmoNgParentCheckboxComponent(ngControl) {
            var _this = this;
            this.ngControl = ngControl;
            this.name = 'parent-checkbox-group-' + this.randomInterval(0, 1000);
            this._disabled = false;
            this.checked = false;
            this.ariaState = 'false';
            this.onChange = function (val) { };
            this.onTouched = function () { };
            this._onClick = function (event) {
                _this.updateParentCheckbox();
                _this.writeValue('');
                event.stopPropagation();
            };
            if (ngControl) {
                ngControl.valueAccessor = this;
            }
        }
        Object.defineProperty(BmoNgParentCheckboxComponent.prototype, "disabled", {
            // States
            get: function () {
                return this._disabled;
            },
            set: function (disabled) {
                var e_1, _a;
                this._disabled = disabled;
                if (this.checkboxes) {
                    try {
                        for (var _b = __values(this.checkboxes), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var checkbox = _c.value;
                            checkbox.disabled = disabled;
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BmoNgParentCheckboxComponent.prototype, "error", {
            get: function () {
                return this.ngControl ? (this.ngControl.invalid && this.ngControl.dirty) : false;
            },
            enumerable: false,
            configurable: true
        });
        BmoNgParentCheckboxComponent.prototype.ngOnInit = function () {
            if (!this.id) {
                this.id = this.name;
            }
        };
        BmoNgParentCheckboxComponent.prototype.ngAfterContentInit = function () {
            var e_2, _a;
            var childIds = [];
            try {
                for (var _b = __values(this.checkboxes), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var checkbox = _c.value;
                    checkbox.isChild = true;
                    checkbox.disabled = this.disabled;
                    checkbox.name = this.name;
                    childIds.push(checkbox.id);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
            this.childIds = childIds.join(' ');
        };
        BmoNgParentCheckboxComponent.prototype.ngAfterViewInit = function () {
            var e_3, _a;
            try {
                for (var _b = __values(this.checkboxes), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var checkbox = _c.value;
                    checkbox.disabled = this.disabled;
                    checkbox.inputElement.removeEventListener('click', this._onClick);
                    checkbox.inputElement.addEventListener('click', this._onClick);
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_3) throw e_3.error; }
            }
            this.updateParentCheckbox();
        };
        BmoNgParentCheckboxComponent.prototype.writeValue = function (obj) {
            var e_4, _a;
            if (!this.checkboxes) {
                return this.onChange(null);
            }
            var checkboxValues = [];
            try {
                for (var _b = __values(this.checkboxes), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var checkbox = _c.value;
                    if (checkbox.checked) {
                        checkboxValues.push(checkbox.value);
                    }
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_4) throw e_4.error; }
            }
            if (checkboxValues.length === 0) {
                this.onChange(null);
            }
            this.onChange(checkboxValues);
        };
        BmoNgParentCheckboxComponent.prototype.registerOnChange = function (fn) {
            this.onChange = fn;
        };
        BmoNgParentCheckboxComponent.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        BmoNgParentCheckboxComponent.prototype.setDisabledState = function (isDisabled) {
            this.disabled = isDisabled;
        };
        BmoNgParentCheckboxComponent.prototype.updateParentCheckbox = function () {
            var count = this.checkboxes.reduce(function (acc, curr) { return curr.checked ? acc + 1 : acc; }, 0);
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
        };
        BmoNgParentCheckboxComponent.prototype.toggleParentCheckbox = function () {
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
        };
        BmoNgParentCheckboxComponent.prototype.setChecked = function (state) {
            this.ariaState = state;
            this.inputElement.nativeElement.checked = this.checked = state === 'false' ? false : true;
        };
        BmoNgParentCheckboxComponent.prototype.setCheckboxes = function (val) {
            var e_5, _a;
            try {
                for (var _b = __values(this.checkboxes), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var checkbox = _c.value;
                    checkbox.setChecked(val);
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_5) throw e_5.error; }
            }
            this.updateParentCheckbox();
        };
        BmoNgParentCheckboxComponent.prototype.updateControlledStates = function () {
            var e_6, _a;
            try {
                for (var _b = __values(this.checkboxes), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var checkbox = _c.value;
                    checkbox.lastState = checkbox.checked;
                }
            }
            catch (e_6_1) { e_6 = { error: e_6_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_6) throw e_6.error; }
            }
        };
        BmoNgParentCheckboxComponent.prototype.anyLastChecked = function () {
            var count = this.checkboxes.reduce(function (acc, curr) { return curr.lastState ? acc + 1 : acc; }, 0);
            return count > 0;
        };
        BmoNgParentCheckboxComponent.prototype.onClick = function (event) {
            this.toggleParentCheckbox();
            this.writeValue('');
            event.stopPropagation();
        };
        BmoNgParentCheckboxComponent.prototype.onKeyDown = function (event) {
            if (event.key === 'Space') {
                this.toggleParentCheckbox();
                event.stopPropagation();
                event.preventDefault();
            }
        };
        BmoNgParentCheckboxComponent.prototype.randomInterval = function (min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        };
        return BmoNgParentCheckboxComponent;
    }());
    BmoNgParentCheckboxComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'bmo-ng-parent-checkbox',
                    template: "\n        <div class=\"input-wrap input-checkbox parent-checkbox\">\n            <input #inputElement\n                type=\"checkbox\"\n                name=\"{{name}}\"\n                id=\"{{id}}\"\n                [checked]=\"checked\"\n                [disabled]=\"disabled\"\n                [attr.aria-checked]=\"ariaState\"\n                [attr.aria-controls]=\"childIds\"\n                (click)=\"onClick($event)\"\n                (keydown)=\"onKeyDown($event)\"\n            >\n            <label for=\"{{id}}\">{{label}}</label>\n        </div>\n        <ul class=\"checkboxes\">\n            <ng-content select=\"bmo-ng-checkbox\"></ng-content>\n        </ul>\n    "
                },] }
    ];
    BmoNgParentCheckboxComponent.ctorParameters = function () { return [
        { type: forms.NgControl, decorators: [{ type: core.Optional }, { type: core.Self }] }
    ]; };
    BmoNgParentCheckboxComponent.propDecorators = {
        checkboxes: [{ type: core.ContentChildren, args: [BmoNgCheckboxComponent,] }],
        inputElement: [{ type: core.ViewChild, args: ['inputElement',] }],
        id: [{ type: core.Input }],
        label: [{ type: core.Input }],
        errorMessage: [{ type: core.Input }],
        name: [{ type: core.Input }],
        disabled: [{ type: core.Input }],
        checked: [{ type: core.Input }]
    };

    var declarations = [
        BmoNgCheckboxComponent,
        BmoNgCardCheckboxComponent,
        BmoNgCheckboxWrapComponent,
        BmoNgParentCheckboxComponent,
        BmoNgCardCheckboxWrapComponent
    ];
    var BmoNgCheckboxModule = /** @class */ (function () {
        function BmoNgCheckboxModule() {
        }
        return BmoNgCheckboxModule;
    }());
    BmoNgCheckboxModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule],
                    declarations: __spread(declarations),
                    exports: __spread(declarations)
                },] }
    ];

    var BmoNgModalComponent = /** @class */ (function () {
        function BmoNgModalComponent() {
            this.id = '';
            this.title = '';
            this.isDismissable = true;
        }
        BmoNgModalComponent.prototype.ngOnInit = function () {
            this.focusableElements = 'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), label, li[role="tab"]:not([disabled]), div[role="tabpanel"]:not([disabled])';
            this.modalFocusableElements = '.modal a[href]:not([disabled]), .modal button:not([disabled]), .modal textarea:not([disabled]), .modal input[type="text"]:not([disabled]), .modal input[type="radio"]:not([disabled]), .modal input[type="checkbox"]:not([disabled]), .modal select:not([disabled]), .modal label, .modal li[role="tab"]:not([disabled]), .modal div[role="tabpanel"]:not([disabled])';
        };
        /**
         * Close modal if the Escape key was pressed
         *
         * @param event Keyboard event that called this function
         */
        BmoNgModalComponent.prototype.escapeCloseModal = function (event) {
            if (this.isDismissable && (event.key === 'Esc' || event.key === 'Escape')) {
                this.closeModal();
            }
            event.preventDefault();
        };
        /**
         * Displays the modal
         */
        BmoNgModalComponent.prototype.displayModal = function () {
            var _this = this;
            this.isActive = true;
            this.removeTabIndexes(document.body, this.focusableElements);
            setTimeout(function () {
                _this.modal.nativeElement.focus();
                _this.addTabIndexes(_this.modal.nativeElement, _this.modalFocusableElements);
            }, 100);
        };
        /**
         * Closes the modal
         */
        BmoNgModalComponent.prototype.closeModal = function () {
            this.isActive = false;
            this.addTabIndexes(document.body, this.focusableElements);
            document.querySelectorAll('.bmo-switch').forEach(function (element) { return element.setAttribute('tabindex', '0'); });
            if (this.closeCallback) {
                this.closeCallback();
            }
        };
        BmoNgModalComponent.prototype.onBackgroundClick = function () {
            if (!this.isDismissable)
                return;
            this.closeModal();
        };
        /**
         * Sets all the tab indexes for the found elements to -1
         *
         * @param element Element that we will query from
         */
        BmoNgModalComponent.prototype.removeTabIndexes = function (element, elementQuery) {
            var elements = element.querySelectorAll(elementQuery);
            if (!elements) {
                return;
            }
            elements.forEach(function (e) {
                e.setAttribute('tabindex', '-1');
            });
        };
        BmoNgModalComponent.prototype.addTabIndexes = function (element, elementQuery) {
            var elements = element.querySelectorAll(elementQuery);
            if (!elements) {
                return;
            }
            elements.forEach(function (e) {
                e.removeAttribute('tabindex');
            });
        };
        return BmoNgModalComponent;
    }());
    BmoNgModalComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'bmo-ng-modal',
                    template: "<div #modal class=\"modal scrollbar\" [class.active]=\"isActive\" [id]=\"id\" [attr.aria-describedby]=\"title\" [attr.tabIndex]=\"isActive ? 0 : -1\">\r\n    <button *ngIf=\"isDismissable\" class=\"icon-button medium modal-close\" aria-label=\"Close this modal\" (click)=\"closeModal()\"><span class=\"icon close medium granite\"></span></button>\r\n    <ng-content></ng-content>\r\n</div>\r\n\r\n<div class=\"bmo-overlay-dark\" [class.active]=\"isActive\" (click)=\"onBackgroundClick()\"></div>",
                    styles: [""]
                },] }
    ];
    BmoNgModalComponent.ctorParameters = function () { return []; };
    BmoNgModalComponent.propDecorators = {
        id: [{ type: core.Input }],
        title: [{ type: core.Input }],
        isDismissable: [{ type: core.Input }],
        modal: [{ type: core.ViewChild, args: ['modal',] }],
        escapeCloseModal: [{ type: core.HostListener, args: ['keyup', ['$event'],] }]
    };

    var BmoNgPopoverComponent = /** @class */ (function () {
        function BmoNgPopoverComponent() {
            this.icon = 'enclosed-help';
            this.direction = 'top';
            this.title = '';
        }
        BmoNgPopoverComponent.prototype.ngOnInit = function () {
        };
        BmoNgPopoverComponent.prototype.ngAfterViewInit = function () {
        };
        BmoNgPopoverComponent.prototype.ngAfterViewChecked = function () {
            // Fixes BMO Design System bug where margin for top popover isn't dynamic with the popover height
            if (this.direction === 'top' && this.popoverContent) {
                this.popoverContent.nativeElement.style.marginTop = -(this.popoverContent.nativeElement.clientHeight + 30) + 'px';
            }
        };
        BmoNgPopoverComponent.prototype.displayPopover = function () {
            var _this = this;
            this.isActive = true;
            setTimeout(function () {
                _this.popoverContent.nativeElement.focus();
            }, 200);
        };
        BmoNgPopoverComponent.prototype.closePopover = function () {
            this.isActive = false;
        };
        return BmoNgPopoverComponent;
    }());
    BmoNgPopoverComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'bmo-ng-popover',
                    template: "<div class=\"popover-wrapper\">\r\n    <button #popoverButton class=\"icon-button medium popover-trigger\" aria-label=\"Click here for help text\" aria-haspopup=\"true\" (click)=\"displayPopover()\">Click here for help text<span [ngClass]=\"['icon', icon, 'medium']\"></span></button>\r\n    <div #popoverContent [ngClass]=\"['popover', 'block', direction]\" [class.active]=\"isActive\" [tabindex]=\"isActive ? 0 : -1\" [ngStyle]=\"containerStyle\">\r\n        <button class=\"icon-button medium pull-right close-popover\" aria-haspopup=\"true\" (click)=\"closePopover()\" [ngStyle]=\"buttonStyle\">\r\n            Close this popover\r\n            <span class=\"icon close medium granite\"></span>\r\n        </button>\r\n        <p class=\"popover-header\">{{title}}</p>\r\n        <ng-content></ng-content>\r\n    </div>\r\n    <div class=\"bmo-overlay-light\" [class.active]=\"isActive\" (click)=\"closePopover()\"></div>\r\n</div>",
                    host: { '[class.popover-wrapper]': 'true' },
                    styles: [".popover{-webkit-transition:none;transition:none}"]
                },] }
    ];
    BmoNgPopoverComponent.ctorParameters = function () { return []; };
    BmoNgPopoverComponent.propDecorators = {
        icon: [{ type: core.Input }],
        direction: [{ type: core.Input }],
        title: [{ type: core.Input }],
        containerStyle: [{ type: core.Input }],
        buttonStyle: [{ type: core.Input }],
        popoverButton: [{ type: core.ViewChild, args: ['popoverButton',] }],
        popoverContent: [{ type: core.ViewChild, args: ['popoverContent',] }]
    };

    var BmoNgPopoverHeaderComponent = /** @class */ (function () {
        function BmoNgPopoverHeaderComponent() {
        }
        return BmoNgPopoverHeaderComponent;
    }());
    BmoNgPopoverHeaderComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'bmo-ng-popover-header',
                    template: '<ng-content></ng-content>',
                    host: { '[class.popover-header]': 'true' }
                },] }
    ];

    var BmoNgPopoverContentComponent = /** @class */ (function () {
        function BmoNgPopoverContentComponent() {
        }
        return BmoNgPopoverContentComponent;
    }());
    BmoNgPopoverContentComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'bmo-ng-popover-content',
                    template: '<ng-content></ng-content>',
                    host: { '[class.popover-content]': 'true' }
                },] }
    ];

    var declarations$1 = [
        BmoNgPopoverComponent,
        BmoNgPopoverHeaderComponent,
        BmoNgPopoverContentComponent
    ];
    var BmoNgPopoverModule = /** @class */ (function () {
        function BmoNgPopoverModule() {
        }
        return BmoNgPopoverModule;
    }());
    BmoNgPopoverModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule],
                    declarations: __spread(declarations$1),
                    exports: __spread(declarations$1)
                },] }
    ];

    var BmoNgRadioButtonComponent = /** @class */ (function () {
        function BmoNgRadioButtonComponent(elementRef) {
            this.elementRef = elementRef;
            this.type = 'traditional';
            this.label = '';
            // States
            this.disabled = false;
        }
        Object.defineProperty(BmoNgRadioButtonComponent.prototype, "inputElement", {
            get: function () {
                return this.elementRef.nativeElement.firstElementChild;
            },
            enumerable: false,
            configurable: true
        });
        return BmoNgRadioButtonComponent;
    }());
    BmoNgRadioButtonComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'bmo-ng-radio-button',
                    template: "\n        <input type=\"radio\" [class.radio]=\"type === 'traditional'\" [class.box-radio]=\"type === 'box'\" name=\"{{name}}\" id=\"{{id}}\" value=\"{{value}}\" >\n        <label [class.radio-label]=\"type !== 'box'\" [class.box-radio-label]=\"type === 'box'\" for=\"{{id}}\">{{label}}</label>\n    "
                },] }
    ];
    BmoNgRadioButtonComponent.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    BmoNgRadioButtonComponent.propDecorators = {
        id: [{ type: core.Input }],
        value: [{ type: core.Input }],
        name: [{ type: core.Input }],
        type: [{ type: core.Input }],
        label: [{ type: core.Input }],
        disabled: [{ type: core.Input }]
    };

    var BmoNgRadioButtonContainerComponent = /** @class */ (function () {
        function BmoNgRadioButtonContainerComponent(ngControl) {
            var _this = this;
            this.ngControl = ngControl;
            this.radioGroupClass = true;
            this.radioGroupNum = this.randomInterval(0, 1000);
            this.type = 'traditional';
            this.name = 'radio-group-' + this.radioGroupNum;
            // States
            this.disabled = false;
            this.onChange = function (val) { };
            this.onTouched = function () { };
            this._clickListener = function (event) {
                _this.writeValue('');
                event.stopPropagation();
            };
            if (this.ngControl) {
                this.ngControl.valueAccessor = this;
            }
        }
        Object.defineProperty(BmoNgRadioButtonContainerComponent.prototype, "error", {
            get: function () {
                return this.ngControl ? (this.ngControl.invalid && this.ngControl.dirty) : false;
            },
            enumerable: false,
            configurable: true
        });
        BmoNgRadioButtonContainerComponent.prototype.ngOnInit = function () {
        };
        BmoNgRadioButtonContainerComponent.prototype.ngAfterContentInit = function () {
            var radioButtons = this.radioButtons.toArray();
            for (var i = 0; i < radioButtons.length; i++) {
                var radioButton = radioButtons[i];
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
        };
        BmoNgRadioButtonContainerComponent.prototype.ngOnDestroy = function () {
            var e_1, _a;
            try {
                for (var _b = __values(this.radioButtons), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var radioButton = _c.value;
                    radioButton.inputElement.removeEventListener('click', this._clickListener);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        BmoNgRadioButtonContainerComponent.prototype.writeValue = function (obj) {
            var e_2, _a;
            if (!this.radioButtons) {
                this.onChange(obj);
                return;
            }
            try {
                for (var _b = __values(this.radioButtons.toArray()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var radioButton = _c.value;
                    if (radioButton.inputElement.checked) {
                        this.onChange(radioButton.value);
                        return;
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
            this.onChange(obj);
        };
        BmoNgRadioButtonContainerComponent.prototype.registerOnChange = function (fn) {
            this.onChange = fn;
        };
        BmoNgRadioButtonContainerComponent.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        BmoNgRadioButtonContainerComponent.prototype.setDisabledState = function (isDisabled) {
            this.disabled = isDisabled;
        };
        BmoNgRadioButtonContainerComponent.prototype.randomInterval = function (min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        };
        return BmoNgRadioButtonContainerComponent;
    }());
    BmoNgRadioButtonContainerComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'bmo-ng-radio-button-wrap',
                    template: "<fieldset class=\"input-wrap input-radio\" [disabled]=\"disabled\">\n    <legend *ngIf=\"legend\" class=\"legend\">{{legend}}</legend>\n    <ng-content select=\"bmo-ng-radio-button\"></ng-content>\n    <span *ngIf=\"error\" class=\"error-message has-error\" role=\"alert\">{{errorMessage}}</span>\n</fieldset>",
                    styles: [""]
                },] }
    ];
    BmoNgRadioButtonContainerComponent.ctorParameters = function () { return [
        { type: forms.NgControl, decorators: [{ type: core.Optional }, { type: core.Self }] }
    ]; };
    BmoNgRadioButtonContainerComponent.propDecorators = {
        radioGroupClass: [{ type: core.HostBinding, args: ['class.radio-group',] }],
        radioButtons: [{ type: core.ContentChildren, args: [BmoNgRadioButtonComponent,] }],
        legend: [{ type: core.Input }],
        type: [{ type: core.Input }],
        name: [{ type: core.Input }],
        errorMessage: [{ type: core.Input }],
        disabled: [{ type: core.Input }]
    };

    var declarations$2 = [
        BmoNgRadioButtonComponent,
        BmoNgRadioButtonContainerComponent
    ];
    var BmoNgRadioButtonModule = /** @class */ (function () {
        function BmoNgRadioButtonModule() {
        }
        return BmoNgRadioButtonModule;
    }());
    BmoNgRadioButtonModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule],
                    declarations: __spread(declarations$2),
                    exports: __spread(declarations$2)
                },] }
    ];

    var BmoNgSelectComponent = /** @class */ (function () {
        function BmoNgSelectComponent(ngControl) {
            this.ngControl = ngControl;
            this.label = '';
            this.helperText = '';
            this.errorMessage = '';
            this.autofocus = false;
            // States
            this.disabled = false;
            this.readonly = false;
            this.mercury = false;
            this.onChange = function (val) { };
            this.onTouched = function () { };
            this.onValidatorChange = function () { };
            if (this.ngControl) {
                this.ngControl.valueAccessor = this;
            }
        }
        Object.defineProperty(BmoNgSelectComponent.prototype, "error", {
            get: function () {
                return this.ngControl ? (this.ngControl.invalid && this.ngControl.dirty) : false;
            },
            enumerable: false,
            configurable: true
        });
        BmoNgSelectComponent.prototype.ngOnInit = function () {
            this.labelId = this.label.replace(/\s+/g, '-').toLowerCase();
        };
        BmoNgSelectComponent.prototype.ngAfterViewInit = function () {
            if (this.autofocus) {
                this.selectElement.nativeElement.focus();
            }
        };
        BmoNgSelectComponent.prototype.writeValue = function (val) {
            this.value = val;
            this.onChange(val);
        };
        BmoNgSelectComponent.prototype.registerOnChange = function (fn) {
            this.onChange = fn;
        };
        BmoNgSelectComponent.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        BmoNgSelectComponent.prototype.setDisabledState = function (isDisabled) {
            this.disabled = isDisabled;
        };
        return BmoNgSelectComponent;
    }());
    BmoNgSelectComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'bmo-ng-select',
                    template: "<div class=\"form-field\" [class.mercury]=\"mercury\">\n    <div class=\"form-label-group\">\n        <select #selectElement class=\"select\" [class.error]=\"error\" [disabled]=\"disabled\" [attr.readonly]=\"readonly || null\" name=\"{{labelId}}\" id=\"{{labelId}}\" [value]=\"value\" [attr.aria-describedby]=\"'error-' + labelId\" (change)=\"writeValue($event.srcElement.value)\">\n            <ng-content select=\"option\"></ng-content>\n        </select>\n        <label for=\"{{labelId}}\" class=\"slide-label select-label\" [class.active-label]=\"\" [class.error-field]=\"error\" [class.disabled]=\"disabled\">\n            <span class=\"label-text\">{{label}}</span>\n        </label>\n        <bmo-icon small icon=\"baby-chevy-down\"></bmo-icon>\n        <span id=\"error-{{labelId}}\" class=\"error-message select-error\" [class.error]=\"error\" role=\"alert\">{{errorMessage}}</span>\n        <span id=\"helper-{{labelId}}\" class=\"input-helper-text select-helper\">{{helperText}}</span>\n    </div>\n</div>",
                    styles: [""]
                },] }
    ];
    BmoNgSelectComponent.ctorParameters = function () { return [
        { type: forms.NgControl, decorators: [{ type: core.Optional }, { type: core.Self }] }
    ]; };
    BmoNgSelectComponent.propDecorators = {
        selectElement: [{ type: core.ViewChild, args: ['selectElement',] }],
        label: [{ type: core.Input }],
        helperText: [{ type: core.Input }],
        errorMessage: [{ type: core.Input }],
        autofocus: [{ type: core.Input }],
        disabled: [{ type: core.Input }],
        readonly: [{ type: core.Input }],
        mercury: [{ type: core.Input }]
    };

    var BmoNgTabPanelComponent = /** @class */ (function () {
        function BmoNgTabPanelComponent() {
            this.tabPanelClass = true;
            this.id = 'tab-' + this.tabId;
            this.roleAttribute = 'tabpanel';
            this.ariaDescribedByAttribute = 'tab-' + this.tabId;
            this.activeTabContentClass = false;
            this.ariaHiddenAttribute = true;
        }
        Object.defineProperty(BmoNgTabPanelComponent.prototype, "active", {
            set: function (val) {
                this.ariaHiddenAttribute = !val;
                this.activeTabContentClass = val;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BmoNgTabPanelComponent.prototype, "tabId", {
            get: function () {
                return this._tabId;
            },
            set: function (val) {
                this.id = 'tab-' + val + '-panel';
                this.ariaDescribedByAttribute = 'tab-' + val;
                this._tabId = val;
            },
            enumerable: false,
            configurable: true
        });
        BmoNgTabPanelComponent.prototype.displayTabPanel = function () {
            this.active = true;
        };
        BmoNgTabPanelComponent.prototype.hideTabPanel = function () {
            this.active = false;
        };
        return BmoNgTabPanelComponent;
    }());
    BmoNgTabPanelComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'bmo-ng-tab-panel',
                    template: "\n        <div class=\"panel-content\">\n            <ng-content></ng-content>\n        </div>\n    "
                },] }
    ];
    BmoNgTabPanelComponent.propDecorators = {
        active: [{ type: core.Input }],
        tabPanelClass: [{ type: core.HostBinding, args: ['class.tab-panel',] }],
        id: [{ type: core.HostBinding, args: ['attr.id',] }],
        roleAttribute: [{ type: core.HostBinding, args: ['attr.role',] }],
        ariaDescribedByAttribute: [{ type: core.HostBinding, args: ['attr.aria-describedby',] }],
        activeTabContentClass: [{ type: core.HostBinding, args: ['class.active-tab-content',] }],
        ariaHiddenAttribute: [{ type: core.HostBinding, args: ['attr.aria-hidden',] }]
    };

    var BmoNgTabComponent = /** @class */ (function () {
        function BmoNgTabComponent(elementRef) {
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
        Object.defineProperty(BmoNgTabComponent.prototype, "active", {
            set: function (val) {
                this.tabIndex = val ? 0 : -1;
                this.activeTabLabelClass = this.ariaSelectedAttribute = val;
            },
            enumerable: false,
            configurable: true
        });
        BmoNgTabComponent.prototype.navigateTabs = function (event) {
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
        };
        Object.defineProperty(BmoNgTabComponent.prototype, "tabId", {
            get: function () {
                return this._tabId;
            },
            set: function (val) {
                this.id = 'tab-' + val;
                this._tabId = val;
            },
            enumerable: false,
            configurable: true
        });
        BmoNgTabComponent.prototype.selectTab = function () {
            this.active = true;
        };
        BmoNgTabComponent.prototype.deselectTab = function () {
            this.active = false;
        };
        return BmoNgTabComponent;
    }());
    BmoNgTabComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'bmo-ng-tab',
                    template: "\n        {{label}}\n        <span class=\"tab-indicator\"></span>\n    "
                },] }
    ];
    BmoNgTabComponent.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    BmoNgTabComponent.propDecorators = {
        label: [{ type: core.Input }],
        active: [{ type: core.Input }],
        id: [{ type: core.HostBinding, args: ['attr.id',] }],
        roleAttribute: [{ type: core.HostBinding, args: ['attr.role',] }],
        tabIndex: [{ type: core.HostBinding, args: ['attr.tabindex',] }],
        ariaSelectedAttribute: [{ type: core.HostBinding, args: ['attr.aria-selected',] }],
        tabClass: [{ type: core.HostBinding, args: ['class.tab',] }],
        activeTabLabelClass: [{ type: core.HostBinding, args: ['class.active-tab-label',] }],
        navigateTabs: [{ type: core.HostListener, args: ['keydown', ['$event'],] }]
    };

    var BmoNgTabListComponent = /** @class */ (function () {
        function BmoNgTabListComponent(elementRef) {
            this.elementRef = elementRef;
            this.tabsWrapClass = true;
        }
        BmoNgTabListComponent.prototype.ngAfterContentInit = function () {
            var _this = this;
            if (this.dslTabs.length !== this.dslPanels.length) {
                console.error('ERROR: Tab element count does not equal tab panel count. Aborting.');
                return;
            }
            var dslTabsArray = this.dslTabs.toArray();
            var dslPanelsArray = this.dslPanels.toArray();
            var _loop_1 = function (i) {
                var tab = dslTabsArray[i];
                var tabPanel = dslPanelsArray[i];
                tab.tabId = tabPanel.tabId = i;
                tab.elementRef.nativeElement.addEventListener('click', function (_) { return _this.selectTab(i); });
                tab.elementRef.nativeElement.addEventListener('keyup', function (event) {
                    if (event.key === 'Down' || event.key === 'ArrowDown' || event.key === 'Enter') {
                        _this.selectTab(i);
                    }
                });
            };
            for (var i = 0; i < this.dslTabs.length; i++) {
                _loop_1(i);
            }
        };
        BmoNgTabListComponent.prototype.selectTab = function (tabId) {
            if (this.selectedTabIndex === tabId) {
                return;
            }
            var dslTabsArray = this.dslTabs.toArray();
            var dslPanelsArray = this.dslPanels.toArray();
            for (var i = 0; i < this.dslTabs.length; i++) {
                var tab = dslTabsArray[i];
                var tabPanel = dslPanelsArray[i];
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
        };
        BmoNgTabListComponent.prototype.scrollTabsIfNeeded = function (tabId) {
            var tab = this.dslTabs.toArray()[tabId];
            var tabOffsetLeft = tab.elementRef.nativeElement.offsetLeft;
            var tabOffsetWidth = tab.elementRef.nativeElement.offsetWidth;
            var tabWrapOffsetWidth = this.elementRef.nativeElement.offsetWidth;
            var amountForTabsToMove = tabOffsetLeft - Math.abs(tabWrapOffsetWidth - tabOffsetWidth) / 2;
            this.elementRef.nativeElement.scrollLeft = amountForTabsToMove;
        };
        return BmoNgTabListComponent;
    }());
    BmoNgTabListComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'bmo-ng-tab-list',
                    template: "\n        <ul class=\"tab-list\" role=\"tablist\" aria-label=\"Use right and left arrows to navigate between tabs\">\n            <ng-content select=\"bmo-ng-tab\"></ng-content>\n            <span class=\"tablist-guideline\" aria-hidden=\"true\"></span>\n        </ul>\n        <ng-content select=\"bmo-ng-tab-panel\"></ng-content>\n    "
                },] }
    ];
    BmoNgTabListComponent.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    BmoNgTabListComponent.propDecorators = {
        tabsWrapClass: [{ type: core.HostBinding, args: ['class.bmo-tabs-wrap',] }],
        dslTabs: [{ type: core.ContentChildren, args: [BmoNgTabComponent,] }],
        dslPanels: [{ type: core.ContentChildren, args: [BmoNgTabPanelComponent,] }]
    };

    var declarations$3 = [
        BmoNgTabListComponent,
        BmoNgTabPanelComponent,
        BmoNgTabComponent
    ];
    var BmoNgTabsModule = /** @class */ (function () {
        function BmoNgTabsModule() {
        }
        return BmoNgTabsModule;
    }());
    BmoNgTabsModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule],
                    declarations: __spread(declarations$3),
                    exports: __spread(declarations$3)
                },] }
    ];

    var BmoDesignSystemModule = /** @class */ (function () {
        function BmoDesignSystemModule() {
        }
        return BmoDesignSystemModule;
    }());
    BmoDesignSystemModule.decorators = [
        { type: core.NgModule, args: [{
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
                        common.CommonModule,
                        forms.FormsModule,
                        forms.ReactiveFormsModule,
                        BmoNgPopoverModule,
                        BmoNgCheckboxModule,
                        BmoNgTabsModule,
                        BmoNgRadioButtonModule
                    ],
                    schemas: [
                        core.CUSTOM_ELEMENTS_SCHEMA
                    ]
                },] }
    ];

    /*
     * Public API Surface of bmo-ds-angular-components
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.BmoDesignSystemModule = BmoDesignSystemModule;
    exports.BmoNgAccordionComponent = BmoNgAccordionComponent;
    exports.BmoNgCardCheckboxComponent = BmoNgCardCheckboxComponent;
    exports.BmoNgCardCheckboxWrapComponent = BmoNgCardCheckboxWrapComponent;
    exports.BmoNgCheckboxComponent = BmoNgCheckboxComponent;
    exports.BmoNgCheckboxModule = BmoNgCheckboxModule;
    exports.BmoNgCheckboxWrapComponent = BmoNgCheckboxWrapComponent;
    exports.BmoNgModalComponent = BmoNgModalComponent;
    exports.BmoNgParentCheckboxComponent = BmoNgParentCheckboxComponent;
    exports.BmoNgPopoverComponent = BmoNgPopoverComponent;
    exports.BmoNgPopoverContentComponent = BmoNgPopoverContentComponent;
    exports.BmoNgPopoverHeaderComponent = BmoNgPopoverHeaderComponent;
    exports.BmoNgPopoverModule = BmoNgPopoverModule;
    exports.BmoNgRadioButtonComponent = BmoNgRadioButtonComponent;
    exports.BmoNgRadioButtonContainerComponent = BmoNgRadioButtonContainerComponent;
    exports.BmoNgRadioButtonModule = BmoNgRadioButtonModule;
    exports.BmoNgSelectComponent = BmoNgSelectComponent;
    exports.BmoNgTabComponent = BmoNgTabComponent;
    exports.BmoNgTabListComponent = BmoNgTabListComponent;
    exports.BmoNgTabPanelComponent = BmoNgTabPanelComponent;
    exports.BmoNgTabsModule = BmoNgTabsModule;
    exports.BmoNgTextFieldComponent = BmoNgTextFieldComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=bmo-ds-angular-components.umd.js.map
