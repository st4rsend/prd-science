import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'prd-science';
	appTheme = 'light-theme';

	constructor(
		private route: ActivatedRoute,
		private router: Router,
	) {}

	ngOnInit(): void {
		this.route.fragment.subscribe((fragment) => {
			if (fragment){
				this.router.navigate([fragment]);
			}
		})
	}	
}
