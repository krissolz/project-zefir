import { NgModule } from '@angular/core';
import { DATE_PIPE_DEFAULT_OPTIONS } from "@angular/common";
import { AppRoutingModule } from '../app-routing.module';

import { IndexService } from './index';

@NgModule({
  declarations: [
    ...IndexService
  ],
  imports: [
    AppRoutingModule,
  ],
  providers: [
    {
      provide: DATE_PIPE_DEFAULT_OPTIONS,
      useValue: { dateFormat: "longDate" }
    }
  ],
  exports:[
    ...IndexService
  ]
})
export class CoreModule { }
