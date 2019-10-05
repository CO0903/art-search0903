import { NgModule } from '@angular/core';
import { TopRoutingModule } from './top-routing.module';
import { TopComponent } from './top.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';


@NgModule({
  declarations: [TopComponent,
  HeaderComponent,
  FooterComponent],
  imports: [
    TopRoutingModule,
    SharedModule
  ]
})
export class TopModule { }
