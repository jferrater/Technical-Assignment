import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RadiographService {

    constructor(private _jsonp:Http) {
        console.log("RadiographService is initialized!");
    }

    getPatients() {
        return this._jsonp.get("http://localhost:8888/patients")
            .map(res => res.json());
    }
}