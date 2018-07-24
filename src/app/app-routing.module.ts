import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
	{ path: 'heroes', component: HeroesComponent }
];

@NgModule({
	exports: [RouterModule],
	imports: [
		CommonModule, RouterModule.forRoot(routes)
	],
	declarations: []
})
export class AppRoutingModule { 

	
}