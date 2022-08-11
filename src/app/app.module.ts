import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BmoDesignSystemModule } from 'bmo-ds-angular-components';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FloorPlanComponent } from './floor-plan/floor-plan.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FloorPlanComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BmoDesignSystemModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
