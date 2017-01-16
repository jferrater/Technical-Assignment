import { Component } from '@angular/core';
import { RadiographService } from '../../services/radiograph.services';
import { Radiograph } from '../../models/radiograph';
import { Patient } from '../../models/patient';
import { PatientFormComponent } from './patientform.component';

@Component({
  moduleId: module.id,
  selector: 'radiographform',
  templateUrl: 'radiographform.component.html'
})
export class RadiographFormComponent  {

    radiographModel = new Radiograph("", "", "");
    patient: any;
    added=false;
    result = Object;

    constructor(private _radiographService: RadiographService, private patientFrom:PatientFormComponent) {

    }

    addRadiographData(){
        this.patient = this.patientFrom.patient;
        var _id= this.patient["Id"];
        this.added = true;
        return this._radiographService.addRadiograph(_id, this.radiographModel).subscribe(radiograph=>{
            this.result = radiograph;
        });
    }
}