import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AsideComponent } from './components/aside/aside.component';
import { RouterModule } from '@angular/router';
import { BlogHorizontalComponent } from './components/blog-horizontal/blog-horizontal.component';
import { SocialbuttonsComponent } from './components/socialbuttons/socialbuttons.component';
import { ErrorBlockComponent } from './components/error-block/errorBlock.component';
import { MobileSidebarComponent } from './components/mobile-sidebar/mobile-sidebar.component';
import { NavButtonComponent } from './components/nav-button/nav-button.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AsideComponent,
    BlogHorizontalComponent,
    SocialbuttonsComponent,
    ErrorBlockComponent,
    MobileSidebarComponent,
    NavButtonComponent,

  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AsideComponent,
    ErrorBlockComponent,
    BlogHorizontalComponent,
    SocialbuttonsComponent,
    NavButtonComponent,

  ]
})
export class SharedModule { }
