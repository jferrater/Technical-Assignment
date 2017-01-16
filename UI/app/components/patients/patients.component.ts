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
    patient: any;
    radiographs: Array<Object>;

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
        this.radiographs = null;
        return this._radiographService.searchPatient(this.ssnumber).subscribe(patient=>{
            this.patients = patient._embedded.patients;
            console.log(this.patients);

      });
    }

    onClickViewRadiographs() {
         this.patient = this.patients[0];
         return this._radiographService.showRadiographsByPatientId(this.patient.Id).subscribe(radiograph=>{
              console.log(radiograph._embedded.radiographs);
              this.radiographs = radiograph._embedded.radiographs;
            
         });
    }
}