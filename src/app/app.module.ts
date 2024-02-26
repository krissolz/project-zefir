import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DATE_PIPE_DEFAULT_OPTIONS } from "@angular/common";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { ServiceModule } from './core/services/service.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ServiceModule,
  ],
  providers: [
    {
    provide: DATE_PIPE_DEFAULT_OPTIONS,
    useValue: { dateFormat: "longDate" }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
