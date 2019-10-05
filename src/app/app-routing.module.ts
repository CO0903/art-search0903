import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {path: '',
  loadChildren: () => import('./top/top.module').then(mod => mod.TopModule)
  },
  {path: '',
  loadChildren: () => import('./header/header.module').then(mod => mod.HeaderModule)
  },
  {path: '',
  loadChildren: () => import('./footer/footer.module').then(mod => mod.FooterModule)
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes),
          ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
