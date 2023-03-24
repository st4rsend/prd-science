import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction.component';
import { VariablesComponent } from './variables/variables.component';
import { StatistiquesComponent } from './statistiques/statistiques.component';

const routes: Routes = [
	{ path: '', component: IntroductionComponent },
	{ path: 'introduction', component: IntroductionComponent },
	{ path: 'variables', component:VariablesComponent },
	{ path: 'statistiques', component: StatistiquesComponent },
	{ path: '**', component: IntroductionComponent }

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
