import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent,title:'home' },
  {
    path: 'operator',
    loadChildren: () => import('./../operator-tutorials/operator-tutorials.module').then(m => m.OperatorTutorialsModule)
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
