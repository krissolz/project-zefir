import { NgModule } from '@angular/core';
import { DatePipe, CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

import { IndexService } from './index';

@NgModule({
  declarations: [
    ...IndexService,
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    DatePipe
  ],
  providers: [],
  exports:[
    ...IndexService
  ]
})
export class CoreModule { }
