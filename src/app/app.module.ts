import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ViewStudentDetailsComponent } from './view-student-details/view-student-details.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    HomePageComponent,
    ViewStudentDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
