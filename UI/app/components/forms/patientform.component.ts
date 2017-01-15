import { Component } from '@angular/core';
import { RadiographService } from '../../services/radiograph.services';

@Component({
  moduleId: module.id,
  selector: 'patientform',
  templateUrl: 'patientform.component.html'
})
export class PatientFormComponent  {
    patients: Array<Object>;

    constructor(private _radiographService: RadiographService) {
        this._radiographService.getPatients().subscribe(patients => {
            this.patients = patients._embedded.patients;
            console.log(this.patients);

        });
    }
 
}