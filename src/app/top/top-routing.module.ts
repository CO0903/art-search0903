import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopComponent } from './top.component';
import { SharedModule } from '../shared/shared.module';


const routes: Routes = [
  {path : '', component : TopComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes),
            SharedModule
          ],
  exports: [RouterModule]
})
export class TopRoutingModule { }
