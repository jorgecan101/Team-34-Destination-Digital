import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BmoNgTabListComponent } from './bmo-ng-tab-list.component';
import { BmoNgTabPanelComponent } from './bmo-ng-tab-panel.component';
import { BmoNgTabComponent } from './bmo-ng-tab.component';
const declarations = [
    BmoNgTabListComponent,
    BmoNgTabPanelComponent,
    BmoNgTabComponent
];
export class BmoNgTabsModule {
}
BmoNgTabsModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [...declarations],
                exports: [...declarations]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm1vLW5nLXRhYnMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IkM6L0JNT3NvdXJjZWZpbGVzL2Jtby1kcy1hbmd1bGFyL2Jtby1kcy1hbmd1bGFyL3Byb2plY3RzL2Jtby1kcy1hbmd1bGFyLWNvbXBvbmVudHMvc3JjLyIsInNvdXJjZXMiOlsibGliL2Jtby1kZXNpZ24tc3lzdGVtL2Jtby1uZy10YWJzL2Jtby1uZy10YWJzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUUzRCxNQUFNLFlBQVksR0FBRztJQUNqQixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtDQUNwQixDQUFDO0FBT0YsTUFBTSxPQUFPLGVBQWU7OztZQUwzQixRQUFRLFNBQUM7Z0JBQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUN2QixZQUFZLEVBQUUsQ0FBQyxHQUFHLFlBQVksQ0FBQztnQkFDL0IsT0FBTyxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUM7YUFDN0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCbW9OZ1RhYkxpc3RDb21wb25lbnQgfSBmcm9tICcuL2Jtby1uZy10YWItbGlzdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCbW9OZ1RhYlBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9ibW8tbmctdGFiLXBhbmVsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJtb05nVGFiQ29tcG9uZW50IH0gZnJvbSAnLi9ibW8tbmctdGFiLmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCBkZWNsYXJhdGlvbnMgPSBbXHJcbiAgICBCbW9OZ1RhYkxpc3RDb21wb25lbnQsXHJcbiAgICBCbW9OZ1RhYlBhbmVsQ29tcG9uZW50LFxyXG4gICAgQm1vTmdUYWJDb21wb25lbnRcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICAgIGRlY2xhcmF0aW9uczogWy4uLmRlY2xhcmF0aW9uc10sXHJcbiAgICBleHBvcnRzOiBbLi4uZGVjbGFyYXRpb25zXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQm1vTmdUYWJzTW9kdWxlIHt9XHJcbiJdfQ==