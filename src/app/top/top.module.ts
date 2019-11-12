import { NgModule } from '@angular/core';
import { TopRoutingModule } from './top-routing.module';
import { TopComponent } from './top.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    TopComponent,
  ],
  imports: [
    TopRoutingModule,
    SharedModule,
    TopModule
  ]
})
export class TopModule { }
