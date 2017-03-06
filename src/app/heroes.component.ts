import {Component, OnInit} from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import construct = Reflect.construct;
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./app.component.css'],
  // constructor(private heroService:HeroService)

})
export class HeroesComponent implements OnInit {
  // title = 'Tour of heroes';
  heroes :Hero[];
  selectedHero: Hero;
  constructor(
    private router: Router,
    private heroService: HeroService){
  }
  getHeroes(): void {
    // this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }
  ngOnInit(): void{
    this.getHeroes();
  }
  gotoDetail(): void{
    this.router.navigate(['/detail',this.selectedHero.id]);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }
  delete(hero: Hero): void {
    this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
  }
}

