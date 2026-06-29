import { NgModule, provideBrowserGlobalErrorListeners, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyComponent } from 'component-library';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

@NgModule({
  declarations: [App],
  imports: [BrowserModule, AppRoutingModule, MyComponent],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
