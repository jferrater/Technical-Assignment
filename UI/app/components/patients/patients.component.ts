import { Component } from '@angular/core';
import { RadiographService } from '../../services/radiograph.services';

@Component({
  moduleId: module.id,
  selector: 'patients',
  templateUrl: 'patients.component.html'
})
export class PatientsComponent  {
    patients: Array<Object>;
    ssnumber: any;
    result: Object;
    constructor(private _radiographService: RadiographService) {
        this.ssnumber="";
    }

    patientList() {
        this._radiographService.getPatients().subscribe(patients => {
            this.patients = patients._embedded.patients;
            console.log(this.patients);

        });
    }
 
     searchPatient() {
        console.log("Searching patient by social security number");
        this._radiographService.searchPatient(this.ssnumber).subscribe(patient=>{
        console.log(patient);
        this.patients = patient._embedded.patients;

      });
    }
}