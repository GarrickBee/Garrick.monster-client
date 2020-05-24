import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Loading bar 
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { HttpClientModule } from '@angular/common/http';
import { SeoService } from '@core/services';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarRouterModule,
    LoadingBarHttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    SeoService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
