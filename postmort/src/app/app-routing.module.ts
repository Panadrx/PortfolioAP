import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'lucas', 
  loadChildren: () => import('./skelet/skelet.module').then( m => m.SkeletModule ) 
},
{
  path: '**',
  redirectTo: 'lucas'
}
];

@NgModule({
  imports: [RouterModule.forRoot( routes )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
