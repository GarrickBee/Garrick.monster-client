import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BlogComponent } from './blog.component';
import { BlogRoutingModule } from './blog-routing.module';





@NgModule({
  declarations: [BlogComponent],
  imports: [
    CommonModule,
    RouterModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
