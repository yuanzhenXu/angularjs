import {Component} from '@angular/core';
export class Hero {
  id: number;
  name: string;
}
const HEROES: Hero[] = [
  {id:11, name: 'Mr.Nice'},
  {id:12, name: 'Natco'},
  {id:13, name: 'Bombasto'},
  {id:14, name: 'Celeritas'},
  {id:15, name: 'Magneta'},
  {id:16, name: 'RubberMan'},
  {id:17, name: 'Dynama'},
  {id:18, name: 'Dr Iq'},
  {id:19, name: 'Magma'},
  {id:20, name: 'Tornado'},
];

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2> My favorite hero is : {{myHero}} </h2>
    <div *ngIf="selectedHero">
    <h2> {{selectedHero.name}} details!</h2>
    <div><label for="">id:</label>{{selectedHero.id}}
    <label for="">name:</label>
    <input type="text" [(ngModel)]="selectedHero.name"placeholder="name">
    </div>
    </div>
    <p>Heroes:</p>
    <ul>
       <li *ngFor="let hero of heroes" [class.selected] = "hero === selectedHero"
(click)="onSelect(hero)">
       <span class="badge">{{hero.id}}</span>
       {{ hero.name }}
       </li>
    </ul>
    <p *ngIf="heroes.length > 3">There are many heroes!</p>
    
    `,
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]
})

export class AppComponent {
  title = 'Tour of heroes';
  heroes = HEROES;
  selectedHero: Hero;
  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }
}
