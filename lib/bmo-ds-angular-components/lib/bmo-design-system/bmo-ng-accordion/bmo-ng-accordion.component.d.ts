import { OnInit, ElementRef, AfterViewInit } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class BmoNgAccordionComponent implements OnInit, AfterViewInit {
    accordionTrigger: ElementRef;
    accordionPanel: ElementRef;
    panelContainer: ElementRef;
    panelContent: ElementRef;
    bmoAccordionClass: boolean;
    iconRightAttribute: any;
    compactAttribute: any;
    title: string;
    get compact(): boolean;
    set compact(compact: boolean);
    _compact: boolean;
    get iconRight(): boolean;
    set iconRight(iconRight: boolean);
    _iconRight: boolean;
    get expanded(): boolean;
    set expanded(expanded: boolean);
    _expanded: boolean;
    id: any;
    constructor();
    ngOnInit(): void;
    ngAfterViewInit(): void;
    toggleAccordion(): void;
    keydownShouldToggleAccordion(event: KeyboardEvent): void;
    keyupShouldToggleAccordion(event: KeyboardEvent): void;
    private setPanelContainerHeight;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<BmoNgAccordionComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<BmoNgAccordionComponent, "bmo-ng-accordion", never, { "title": "title"; "compact": "compact"; "iconRight": "iconRight"; "expanded": "expanded"; "id": "id"; }, {}, never, ["*"], false>;
}

//# sourceMappingURL=bmo-ng-accordion.component.d.ts.map