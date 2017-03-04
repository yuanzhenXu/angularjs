import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {Logger} from "protractor/built/logger";

@NgModule({
  imports:      [ BrowserModule ],
  providers:    [ Logger,
                  HeroService,
                  BackendSerivce],
  declarations: [ AppComponent ],
  exports  :    [AppComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
