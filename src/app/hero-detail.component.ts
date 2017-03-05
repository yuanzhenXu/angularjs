import {Component, Input, OnInit} from "@angular/core";
import { Hero } from './hero';
import {ActivatedRoute, Params} from "@angular/router";
@Component({
  moduleId: module.id,
  selector: 'my-hero-detail',
  templateUrl: './hero-detail.component.html',

})
export class HeroDetailComponent implements OnInit{
  @Input()
  hero: Hero;
  ngOnInit(): void{
    this.route.params.swithMap((params: Params) => this.heroService.getHeroes(+params['id']))
      .subscribe(hero => this.hero=hero);
  }
  goBack():void{
    this.location.back();
  }
  save(): void {
    this.heroService.update(this.hero).then(()=>this.goBack());
  }
  constructor(
    private heroService: HeroService,
  private route: ActivatedRoute,
  private location: Location
){}

}


