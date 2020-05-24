import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { SharedModule } from '@shared/shared.module';
import { ErrorComponent } from './error/error.component';


@NgModule({
  declarations: [PagesComponent, ErrorComponent],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule,
  ],
  exports: [PagesRoutingModule]
})
export class PagesModule { }
