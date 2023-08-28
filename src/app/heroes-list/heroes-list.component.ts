import { Component, inject } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent {
  heroesService = inject(HeroService);
  heroes?: Hero[] = [];
  selectedHero?: Hero;

  selectThisHero(newHero: Hero) {
    this.heroesService.onHeroSelect(newHero);
  }

  constructor() {
    this.heroesService.heroes.subscribe(heroes => this.heroes = heroes);
  }
}
