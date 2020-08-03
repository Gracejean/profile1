import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import {Profilecomponent} from '..app/profile/profile.component';

const routes: Routes = [
  // {path: 'profile', component: Profilecomponent. pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
