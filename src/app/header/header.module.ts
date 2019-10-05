import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './header.component';





@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    SharedModule,
    HeaderModule,
    HeaderRoutingModule
  ],
  exports: [
  ]
})
export class HeaderModule { }
