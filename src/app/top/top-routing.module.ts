import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { TopModule } from './top.module';
import { TopComponent } from './top.component';


const routes: Routes = [
  {
    path : '',
    component : TopComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
            HeaderModule,
            FooterModule,
            TopModule],
  exports: [RouterModule]
})
export class TopRoutingModule { }
