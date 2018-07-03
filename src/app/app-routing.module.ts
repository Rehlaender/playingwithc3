import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MonsterContainer } from './containers/monster-container/monster-container';
import { IrisContainer } from './containers/iris-container/iris-container';

const routes: Routes = [
  { path: 'monsters', component: MonsterContainer },
  { path: 'iris', component: IrisContainer }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
