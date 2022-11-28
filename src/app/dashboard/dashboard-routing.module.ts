import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CardDetailsComponent} from "./card-details/card-details.component";
import {CreateCarComponent} from "./create-car/create-car.component";

const routes: Routes = [
  {
    path:'create-car',
    component:CreateCarComponent
  },
  {
    path:'',
    component:CardDetailsComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
