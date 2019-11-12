import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [],
  imports: [
    SharedModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class HeaderRoutingModule { }
