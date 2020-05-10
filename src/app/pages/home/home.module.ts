import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    HomeRoutingModule,
    CoreModule
  ]
})
export class HomeModule { }
