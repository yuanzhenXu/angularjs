import {Component, Input} from "@angular/core";
import { Hero } from './hero';
@Component({
  selector: 'my-hero-detail',
  template: '<div *ngIf="hero">' +
  '<h2>{{hero.name}} details !</h2>' +
  '<div><label for="">id:</label>{{hero.id}}</div>' +
  '<div>' +
  '<llabel>name:</llabel>' +
  '<input type="text" [(ngModel)]="hero.name" placeholder="name"/></div></div>'
})
export class HeroDetailComponent{
  @Input()
  hero: Hero;
}
