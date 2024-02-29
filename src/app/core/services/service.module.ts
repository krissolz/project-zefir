import { NgModule } from '@angular/core';
import { allServices } from './services';

@NgModule({
  providers: [
    ...allServices
  ],
  imports: [],
  exports: []
})
export class ServiceModule { };