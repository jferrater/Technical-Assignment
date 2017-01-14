import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';

import { RadiographsComponent } from './components/radiographs/radiographs.component';
import { PatientsComponent } from './components/patients/patients.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent,
                  PatientsComponent,
                  RadiographsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
