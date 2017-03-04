import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {Logger} from "protractor/built/logger";
import {FormsModule} from "@angular/forms";
import {HeroFormComponent} from "./hero-form.component";

@NgModule({
  imports:      [ BrowserModule ,FormsModule],
  providers:    [ Logger
                  // HeroService,
                  // BackendSerivce
    ],
  declarations: [ AppComponent , HeroFormComponent],
  exports  :    [AppComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
