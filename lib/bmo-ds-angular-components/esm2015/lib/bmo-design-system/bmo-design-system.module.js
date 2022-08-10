import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BmoNgRadioButtonModule } from './bmo-ng-radio-button/bmo-ng-radio-button.module';
import { BmoNgAccordionComponent } from './bmo-ng-accordion/bmo-ng-accordion.component';
import { BmoNgCheckboxModule } from './bmo-ng-checkbox/bmo-ng-checkbox.module';
import { BmoNgModalComponent } from './bmo-ng-modal/bmo-ng-modal.component';
import { BmoNgPopoverModule } from './bmo-ng-popover/bmo-ng-popover.module';
import { BmoNgSelectComponent } from './bmo-ng-select/bmo-ng-select.component';
import { BmoNgTabsModule } from './bmo-ng-tabs/bmo-ng-tabs.module';
import { BmoNgTextFieldComponent } from './bmo-ng-text-field/bmo-ng-text-field.component';
export class BmoDesignSystemModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm1vLWRlc2lnbi1zeXN0ZW0ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IkM6L0JNT3NvdXJjZWZpbGVzL2Jtby1kcy1hbmd1bGFyL2Jtby1kcy1hbmd1bGFyL3Byb2plY3RzL2Jtby1kcy1hbmd1bGFyLWNvbXBvbmVudHMvc3JjLyIsInNvdXJjZXMiOlsibGliL2Jtby1kZXNpZ24tc3lzdGVtL2Jtby1kZXNpZ24tc3lzdGVtLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDMUYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFFeEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDL0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDNUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDNUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBMkIxRixNQUFNLE9BQU8scUJBQXFCOzs7WUF6QmpDLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSx1QkFBdUIsRUFBRSx1QkFBdUIsRUFBRSxvQkFBb0IsQ0FBQztnQkFDM0csT0FBTyxFQUFFO29CQUNQLG1CQUFtQjtvQkFDbkIsdUJBQXVCO29CQUN2QixrQkFBa0I7b0JBQ2xCLHVCQUF1QjtvQkFDdkIsb0JBQW9CO29CQUNwQixtQkFBbUI7b0JBQ25CLHNCQUFzQjtvQkFDdEIsZUFBZTtpQkFDaEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxtQkFBbUI7b0JBQ25CLGtCQUFrQjtvQkFDbEIsbUJBQW1CO29CQUNuQixlQUFlO29CQUNmLHNCQUFzQjtpQkFDdkI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLHNCQUFzQjtpQkFDdkI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENVU1RPTV9FTEVNRU5UU19TQ0hFTUEsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBCbW9OZ1JhZGlvQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi9ibW8tbmctcmFkaW8tYnV0dG9uL2Jtby1uZy1yYWRpby1idXR0b24ubW9kdWxlJztcclxuaW1wb3J0IHsgQm1vTmdBY2NvcmRpb25Db21wb25lbnQgfSBmcm9tICcuL2Jtby1uZy1hY2NvcmRpb24vYm1vLW5nLWFjY29yZGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCbW9OZ0NoZWNrYm94Q29tcG9uZW50IH0gZnJvbSAnLi9ibW8tbmctY2hlY2tib3gvYm1vLW5nLWNoZWNrYm94LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJtb05nQ2hlY2tib3hNb2R1bGUgfSBmcm9tICcuL2Jtby1uZy1jaGVja2JveC9ibW8tbmctY2hlY2tib3gubW9kdWxlJztcclxuaW1wb3J0IHsgQm1vTmdNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vYm1vLW5nLW1vZGFsL2Jtby1uZy1tb2RhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCbW9OZ1BvcG92ZXJNb2R1bGUgfSBmcm9tICcuL2Jtby1uZy1wb3BvdmVyL2Jtby1uZy1wb3BvdmVyLm1vZHVsZSc7XHJcbmltcG9ydCB7IEJtb05nU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9ibW8tbmctc2VsZWN0L2Jtby1uZy1zZWxlY3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQm1vTmdUYWJzTW9kdWxlIH0gZnJvbSAnLi9ibW8tbmctdGFicy9ibW8tbmctdGFicy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBCbW9OZ1RleHRGaWVsZENvbXBvbmVudCB9IGZyb20gJy4vYm1vLW5nLXRleHQtZmllbGQvYm1vLW5nLXRleHQtZmllbGQuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbQm1vTmdNb2RhbENvbXBvbmVudCwgQm1vTmdBY2NvcmRpb25Db21wb25lbnQsIEJtb05nVGV4dEZpZWxkQ29tcG9uZW50LCBCbW9OZ1NlbGVjdENvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgQm1vTmdNb2RhbENvbXBvbmVudCxcclxuICAgIEJtb05nVGV4dEZpZWxkQ29tcG9uZW50LFxyXG4gICAgQm1vTmdQb3BvdmVyTW9kdWxlLFxyXG4gICAgQm1vTmdBY2NvcmRpb25Db21wb25lbnQsXHJcbiAgICBCbW9OZ1NlbGVjdENvbXBvbmVudCxcclxuICAgIEJtb05nQ2hlY2tib3hNb2R1bGUsXHJcbiAgICBCbW9OZ1JhZGlvQnV0dG9uTW9kdWxlLFxyXG4gICAgQm1vTmdUYWJzTW9kdWxlXHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICBCbW9OZ1BvcG92ZXJNb2R1bGUsXHJcbiAgICBCbW9OZ0NoZWNrYm94TW9kdWxlLFxyXG4gICAgQm1vTmdUYWJzTW9kdWxlLFxyXG4gICAgQm1vTmdSYWRpb0J1dHRvbk1vZHVsZVxyXG4gIF0sXHJcbiAgc2NoZW1hczogW1xyXG4gICAgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEJtb0Rlc2lnblN5c3RlbU1vZHVsZSB7IH1cclxuIl19