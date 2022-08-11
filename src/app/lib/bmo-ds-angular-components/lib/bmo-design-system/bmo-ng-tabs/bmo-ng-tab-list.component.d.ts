import { AfterContentInit, ElementRef, QueryList } from '@angular/core';
import { BmoNgTabPanelComponent } from './bmo-ng-tab-panel.component';
import { BmoNgTabComponent } from './bmo-ng-tab.component';
import * as ɵngcc0 from '@angular/core';
export declare class BmoNgTabListComponent implements AfterContentInit {
    private elementRef;
    tabsWrapClass: boolean;
    dslTabs: QueryList<BmoNgTabComponent>;
    dslPanels: QueryList<BmoNgTabPanelComponent>;
    private selectedTabIndex;
    constructor(elementRef: ElementRef);
    ngAfterContentInit(): void;
    selectTab(tabId: number): void;
    private scrollTabsIfNeeded;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<BmoNgTabListComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<BmoNgTabListComponent, "bmo-ng-tab-list", never, {}, {}, ["dslTabs", "dslPanels"], ["bmo-ng-tab", "bmo-ng-tab-panel"], false>;
}

//# sourceMappingURL=bmo-ng-tab-list.component.d.ts.map