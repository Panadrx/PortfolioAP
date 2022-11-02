import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router'

import { SkeletComponent } from "./skelet.component";

const routes: Routes = [
  { path: '',
  children: [
    { path: '**', redirectTo: 'home',  },
    { path: 'home', component: SkeletComponent}
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild( routes )]
})

export class SkeletRoutingModule {}