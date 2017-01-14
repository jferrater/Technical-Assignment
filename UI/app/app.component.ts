import { Component } from '@angular/core';
import { RadiographService } from './services/radiograph.services';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [RadiographService]
})
export class AppComponent  { name = 'Angular'; }
