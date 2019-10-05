import { NgModule } from '@angular/core';
import { TopRoutingModule } from './top-routing.module';
import { TopComponent } from './top.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';


@NgModule({
  declarations: [
    TopComponent,
  ],
  imports: [
    TopRoutingModule,
    SharedModule,
    TopModule,
    HeaderModule,
    FooterModule
  ]
})
export class TopModule { }
