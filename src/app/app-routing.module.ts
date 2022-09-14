import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DistributionsComponent } from './distributions/distributions.component';
import { StatistiquesComponent } from './statistiques/statistiques.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'home', component: HomeComponent },
	{ path: 'distributions', component:DistributionsComponent },
	{ path: 'statistiques', component: StatistiquesComponent },
	{ path: '**', component: HomeComponent }

];
@NgModule({
  declarations: [],
  imports: [
		RouterModule.forRoot(routes),
    CommonModule
  ],
	exports: [RouterModule]
})
export class AppRoutingModule { }
