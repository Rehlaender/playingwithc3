import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';

// containers
import { MonsterContainer } from './containers/monster-container/monster-container';
import { IrisContainer } from './containers/iris-container/iris-container';

// components
import { PayChart } from './components/pay-chart/pay-chart.component';
import { BarsGraphComponent } from './components/bars-graph/bars-graph.component';
import { DynamicSearchComponent } from './components/dynamic-search/dynamic-search.component';


// services
import { ApiService } from './services/api.service';
import { IrisService } from './services/iris.service';

import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MonsterContainer,
    IrisContainer,
    PayChart,
    BarsGraphComponent,
    DynamicSearchComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ApiService,
    IrisService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
