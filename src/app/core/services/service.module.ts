import { NgModule } from '@angular/core';
import { allServices } from './services';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  providers: [
    ...allServices
  ],
  imports: [AppRoutingModule],
  exports: []
})
export class ServiceModule { };