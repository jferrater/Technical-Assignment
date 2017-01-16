import { Component } from '@angular/core';
import { RadiographService } from '../../services/radiograph.services';
import { Patient } from '../../models/patient';

@Component({
  moduleId: module.id,
  selector: 'patientform',
  templateUrl: 'patientform.component.html'
})
export class PatientFormComponent  {

    patient: Object;
    submitted = false;
    addedRadiograph=false;
    patientModel = new Patient("", "", null, "","");

    constructor(private _radiographService: RadiographService) {

    }
 
   addPatient() {
       this.submitted = true;
       this._radiographService.addPatient(this.patientModel).subscribe(patient=>{
           this.patient = patient;
       });

   }

   backToHome() {
       console.log("Returning home page");
   }

}