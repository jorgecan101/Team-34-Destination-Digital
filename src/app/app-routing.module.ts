import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FloorPlanComponent } from './floor-plan/floor-plan.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: "", redirectTo:"home", pathMatch:"full"},
  { path: "home", component: HomeComponent },
  { path: "floor-plan", component: FloorPlanComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
