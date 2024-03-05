import { NgModule } from '@angular/core';
import { DatePipe, CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

import { IndexService } from './index';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [
    ...IndexService,
    LoadingComponent,
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    DatePipe
  ],
  providers: [],
  exports:[
    ...IndexService,
    LoadingComponent
  ]
})
export class CoreModule { }
