//import { Inject, Component, OnInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
//import { DOCUMENT } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'prd-science';
	appTheme = '';

	constructor(
		//@Inject(DOCUMENT) private document: Document,
		private route: ActivatedRoute,
		private router: Router,
	) {}

	ngOnInit(): void {
		this.route.queryParams.subscribe((params) => {
			if (params['theme']=='light-theme' || params['theme']=='dark-theme'){
			//	console.log("param theme: ", params['theme']);
				this.appTheme = params['theme'];
			}  else if (this.appTheme=='') {
			//	console.log('appTheme: ', this.appTheme); 
				if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
				//	console.log('DEFAULT DARK');
					this.appTheme = 'dark-theme';	
				}	else {
					this.appTheme = 'light-theme';	
				} 
			}
			if (params['target']){
		//		console.log("param:  ", params);
				this.router.navigate([params['target']], {queryParams: {theme: params['theme']}});
			}
		})
	}	
}
