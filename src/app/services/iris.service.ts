import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as c3 from 'c3';
import * as d3 from 'd3';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IrisService {



  constructor(
    private _http: HttpClient) {
  }

  loadIrisDataset() {
    d3.csv("../../assets/datasets/iris.csv", function(data) {
      return data;
    });
  }

  generateBarChart(chartToBind) {
    var chart = c3.generate({
      bindto: `#${chartToBind}`,
      data: {
        url: '../../assets/datasets/iris.csv',
        type: 'bar',
      }
    });
  }

  generateLineChart(chartToBind) {
    var chart = c3.generate({
      bindto: `#${chartToBind}`,
      data: {
        url: '../../assets/datasets/iris.csv',
        type: 'line',
      }
    });
  }

  generateAreaChart(chartToBind) {
    var chart = c3.generate({
      bindto: `#${chartToBind}`,
      data: {
        url: '../../assets/datasets/iris.csv',
        type: 'area',
      }
    });
  }

}
