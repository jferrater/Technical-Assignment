import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';

import { RadiographsComponent } from './components/radiographs/radiographs.component';
import { PatientsComponent } from './components/patients/patients.component';
import { PatientFormComponent } from './components/forms/patientform.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations: [ AppComponent,
                  PatientsComponent,
                  RadiographsComponent,
                  PatientFormComponent
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
