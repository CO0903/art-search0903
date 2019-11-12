import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FooterRoutingModule } from './footer-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './footer.component';


@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    FooterRoutingModule,
    SharedModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class FooterModule { }
