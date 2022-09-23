import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DistributionsComponent } from './distributions/distributions.component';
import { StatistiquesComponent } from './statistiques/statistiques.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule }from '@swimlane/ngx-charts';
import { CustomBarComponent } from './ngx/custom-bar/custom-bar.component';
import { ComboSeriesVerticalComponent } from './ngx/custom-bar/combo-series-vertical.component';

import { MathjaxModule } from 'mathjax-angular';

let mathjaxConfig = {
  config: {
    loader: {
      //load: ["output/svg", "[tex]/require", "[tex]/ams"]
      load: ["output/chtml", "[tex]/require", "[tex]/ams"]
    },
    tex: {
      inlineMath: [["$", "$"]],
      packages: ["base", "require", "ams"]
    },
    svg: { "fontCache": "global" }
  },
  src: "https://cdn.jsdelivr.net/npm/mathjax@3.0.0/es5/startup.js",
	options: {
		enableMenu: true
	}
}

@NgModule({
  declarations: [
    AppComponent,
    DistributionsComponent,
    StatistiquesComponent,
    HomeComponent,
    CustomBarComponent,
		ComboSeriesVerticalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		BrowserAnimationsModule,
		NoopAnimationsModule,
		NgxChartsModule,
		//MathjaxModule.forRoot(/*Optional Config*/),
		MathjaxModule.forRoot(mathjaxConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
