import { Component } from '@angular/core';

import { Weather } from './shared/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	loadedPage = 'weather-list';
	title = 'app';

	newSelect(page: string) {
		this.loadedPage = page;
	}

	weathers: Weather[] = [
		new Weather('Austria', 20),
		new Weather('Poland', 10)
	];

	constructor() { }

	ngOnInit() {
	}


}
