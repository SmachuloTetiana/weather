import { Component } from '@angular/core';

import { Weather } from './shared/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	loadedFeature = '';

	constructor() { }

	ngOnInit() {
	}

	onNavigate(feature: string) {
		this.loadedFeature = feature;
	}


}
