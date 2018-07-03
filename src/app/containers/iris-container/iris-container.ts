import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

import { IrisService } from '../../services/iris.service';

@Component({
  selector: 'iris-container',
  templateUrl: './iris-container.html',
  styleUrls: ['./iris-container.css']
})
export class IrisContainer implements OnInit {

  data: any
  constructor(
    private _api: ApiService,
    private _iriService: IrisService
  ) {}

  ngOnInit() {
    console.log('hi iris');
  }

  ngAfterViewInit() {
    this._iriService.generateBarChart('barChart');
    this._iriService.generateLineChart('lineChart');
    this._iriService.generateAreaChart('areaChart');
  }
}
