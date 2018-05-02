import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent2 } from './app2.component';
import { ApiService2 } from './api2.service';

@NgModule({
  declarations: [AppComponent2],
  imports: [BrowserModule, HttpClientModule],
  providers: [ApiService2],
  bootstrap: [AppComponent2]
})
export class AppModule2 {}
