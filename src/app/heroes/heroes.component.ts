import { Component, OnInit ,Input} from '@angular/core';
import { Hero } from '../Hero';
import { HeroService } from '../hero.service';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

	

  	heroes : Hero[];

  	selectedHero : Hero;

  	onSelect(hero: Hero):void {
  		this.selectedHero = hero;
  	}

  getHeroes(): void {
     this.heroes = this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
   }

  constructor(private heroService: HeroService) { 
  }

  ngOnInit() {
    this.getHeroes();
  }

}
