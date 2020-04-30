import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { SharedModule } from '@shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeModule } from './home/home.module';
import { BlogModule } from './blog/blog.module';

@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomeModule,
    BlogModule,
    PagesRoutingModule
  ],
  exports: [PagesRoutingModule]
})
export class PagesModule { }
