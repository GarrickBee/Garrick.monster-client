import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { SharedModule } from '@shared/shared.module';
import { ApiService } from '@core/services';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  providers: [
    ApiService
  ]
})
export class HomeModule { }
