import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { SharedModule } from '@shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PagesComponent],
  imports: [
    RouterModule,
    CommonModule,
    SharedModule,
    PagesRoutingModule
  ],
  exports: []
})
export class PagesModule { }
