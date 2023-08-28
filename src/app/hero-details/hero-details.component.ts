import { Component, OnDestroy, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss']
})

export class HeroDetailsComponent implements OnDestroy  {
  hero?: Hero | undefined;
  private subscription: Subscription;

  constructor(private heroService: HeroService) {
    this.subscription = this.heroService.selectedHero.subscribe((selectedHero) => {
      this.hero = selectedHero;
    });
  }
  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

}
