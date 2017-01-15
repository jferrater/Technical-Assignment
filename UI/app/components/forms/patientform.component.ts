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
    patientModel = new Patient("", "", null, "","");
    constructor(private _radiographService: RadiographService) {

    }
 
   onSubmit() {
       this.submitted = true;
       console.log(this.patientModel.FirstName);
       console.log(this.patientModel.LastName);
       console.log(this.patientModel.Age);
       console.log(this.patientModel.Doctor);
       this._radiographService.addPatient(this.patientModel).subscribe(patient=>{
           this.patient = patient;
           console.log(this.patient);
       });

   }

   get diagnostic() {
       return JSON.stringify(this.patientModel);
   }
}