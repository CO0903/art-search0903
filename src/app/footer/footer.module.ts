import { NgModule } from '@angular/core';
import { FooterRoutingModule } from './footer-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './footer.component';


@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    FooterRoutingModule,
    SharedModule,

  ]
})
export class FooterModule { }
