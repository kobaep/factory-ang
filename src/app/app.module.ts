import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { AppComponent } from './app.component';
import { RegisterComponent } from './views/register/register.component';
import { AppRoutingModule } from './app.routing';
import { LoginComponent } from './views/login/login.component';
import { DefaultLayoutComponent } from './containers/default-layout/default-layout.component';

import {
  AppHeaderModule,
  AppSidebarModule,
  AppAsideModule,
  AppBreadcrumbModule
} from '@coreui/angular';

import { TabsModule } from 'ngx-bootstrap/tabs';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DefaultLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppHeaderModule,
    AppSidebarModule,
    AppAsideModule,
    PerfectScrollbarModule,
    AppBreadcrumbModule.forRoot(),
    AppRoutingModule,
    TabsModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
