import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { RouterModule } from '@angular/router';

import { RadiographsComponent } from './components/radiographs/radiographs.component';
import { PatientsComponent } from './components/patients/patients.component';
import { PatientFormComponent } from './components/forms/patientform.component';
import { RadiographFormComponent } from './components/forms/radiographform.component';

@NgModule({
  imports:      [ 
                  BrowserModule, 
                  HttpModule, 
                  FormsModule,
                  RouterModule.forRoot([
                      {
                        path: "addPatient",
                        component: PatientFormComponent
                      },
                      {
                        path: 'dashboard',
                        component: PatientsComponent
                      },
                     {
                        path: '',
                        redirectTo: '/dashboard',
                        pathMatch: 'full'
                      },
                    ]) 
                ],
  declarations: [ AppComponent,
                  PatientsComponent,
                  RadiographsComponent,
                  PatientFormComponent,
                  RadiographFormComponent
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
