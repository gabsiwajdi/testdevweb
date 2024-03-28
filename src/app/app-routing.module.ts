import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { SolutionComponent } from './solution/solution.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { ChoseusComponent } from './choseus/choseus.component';
import { Whoarewe1Component } from './whoarewe1/whoarewe1.component';
import { Whoarewe2Component } from './whoarewe2/whoarewe2.component';

const routes: Routes = [
  { path: '', component: AcceuilComponent },
  { path: 'solution', component: SolutionComponent },
  { path: 'whatwedo', component: WhatWeDoComponent },
  { path: 'choseus', component: ChoseusComponent },
  { path: 'caseutudes', component: SolutionComponent },
  { path: 'whoarewe', component: Whoarewe1Component },
  { path: 'whoarewee', component: Whoarewe2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
