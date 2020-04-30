import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AsideComponent } from './components/aside/aside.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent, AsideComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [HeaderComponent, FooterComponent, SidebarComponent, AsideComponent]
})
export class SharedModule { }
