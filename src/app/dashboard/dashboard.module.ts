import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {CardDetailsComponent} from "./card-details/card-details.component";
import {CreateCarComponent} from './create-car/create-car.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    CardDetailsComponent,
    CreateCarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule
  ],
  exports: [
    CardDetailsComponent
  ]
})
export class DashboardModule {
}
