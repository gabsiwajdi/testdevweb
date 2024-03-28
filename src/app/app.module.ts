import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { HomeComponent } from './home/home.component';
import { ChoseusComponent } from './choseus/choseus.component';
import { SolutionComponent } from './solution/solution.component';
import { CaseutudesComponent } from './caseutudes/caseutudes.component';
import { Whoarewe1Component } from './whoarewe1/whoarewe1.component';
import { Whoarewe2Component } from './whoarewe2/whoarewe2.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    NavbarComponent,
    WhatWeDoComponent,
    HomeComponent,
    ChoseusComponent,
    SolutionComponent,
    CaseutudesComponent,
    Whoarewe1Component,
    Whoarewe2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
