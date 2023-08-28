import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private _selectedHero?:Hero;
  private selectedHeroSubject = new Subject<Hero | undefined>()

  onHeroSelect(newHero: Hero) {
    this._selectedHero = newHero;
    this.selectedHeroSubject.next(this._selectedHero);
    console.log(this._selectedHero);
    
  }
  
  get selectedHero():Observable<Hero | undefined> {
    return this.selectedHeroSubject.asObservable();
  }

  get heroes():Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }
}
