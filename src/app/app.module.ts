import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { FormsModule} from "@angular/forms";
import { HeroFormComponent} from "./hero-form.component";
import {HeroDetailComponent} from "./hero-detail.component";
import {HeroService} from "./hero.service";

@NgModule({
  imports:      [ BrowserModule ,FormsModule],
  declarations: [ AppComponent , HeroFormComponent,HeroDetailComponent],
  bootstrap:    [ AppComponent ],
  providers:    [ HeroService]
})
export class AppModule { }
