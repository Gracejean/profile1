import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileComponent} from '../../src/app/profile/profile.component';
import { ProjectComponent } from '../../src/app/project/project.component';
import { ResumeComponent } from '../../src/app/resume/resume.component';
import { HobbiesComponent } from '../../src/app/hobbies/hobbies.component';

const routes: Routes = [
  {path: 'profile', component: ProfileComponent},
  {path: 'project', component: ProjectComponent},
  {path: 'resume', component: ResumeComponent},
  {path: 'hobbies', component: HobbiesComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
