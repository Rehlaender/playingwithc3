import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MonsterContainer }      from './containers/monster-container/monster-container';

const routes: Routes = [
  { path: 'monsters', component: MonsterContainer }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
