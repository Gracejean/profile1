import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { MDBBootstrapModule } from 'angular-bootstrap-md';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectComponent } from './project/project.component';
import { ResumeComponent } from './resume/resume.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ProjectComponent,
    ResumeComponent,
    HobbiesComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    // MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
  // schemas: [NO_ERRORS_SCHEMA]
})  
export class AppModule { }
  