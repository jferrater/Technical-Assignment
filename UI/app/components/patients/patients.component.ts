import { Component } from '@angular/core';
import { RadiographService } from '../../services/radiograph.services';

@Component({
  moduleId: module.id,
  selector: 'patients',
  templateUrl: 'patients.component.html'
})
export class PatientsComponent  {

    constructor(private _radiographService: RadiographService) {
        this._radiographService.getPatients().subscribe(patients => {
            console.log(patients);
        });
    }
 
}