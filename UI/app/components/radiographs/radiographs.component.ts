import { Component } from '@angular/core';
import { RadiographService } from '../../services/radiograph.services';

@Component({
  moduleId: module.id,
  selector: 'radiographs',
  templateUrl: 'radiographs.component.html'
})
export class RadiographsComponent  {

    ssn:any;
    radiographs: Array<Object>

    constructor(private _radiographService: RadiographService) {
        this.ssn="";
    }

    searchRadiographs() {
      console.log("searching radiographs");
      this._radiographService.showRadiographsBySSN(this.ssn).subscribe(radiographs => {
        this.radiographs = radiographs._embedded.radiographs;
        console.log(this.radiographs);
      });
    }
 }