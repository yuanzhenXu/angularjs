import { Injectable } from "@angular/core";
import { Hero } from "./hero";
import { HEROES } from './mock-heroes'
@Injectable()
export class HeroService{
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }
  // getHeroes(): void{
  //   this.heroes = this.heroService.getHeroes();
  // }
  getHeroes(): Promise<Hero[]>{
    return Promise.resolve(HEROES);
  }
}
