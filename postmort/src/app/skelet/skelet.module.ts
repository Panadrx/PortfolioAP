import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletRoutingModule } from './skelet-routing.module';

import { SkeletComponent } from './skelet.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ExpComponent } from './exp/exp.component';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [
    SkeletComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ExpComponent,
    ProjectComponent
  ],
  imports: [
    CommonModule,
    SkeletRoutingModule
  ],
  exports: [SkeletComponent],
})

export class SkeletModule {}