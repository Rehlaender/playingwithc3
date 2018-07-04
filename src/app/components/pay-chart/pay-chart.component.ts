import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as c3 from 'c3';
import * as d3 from 'd3';

@Component({
  selector: 'pay-chart',
  templateUrl: './pay-chart.component.html',
  styleUrls: ['./pay-chart.component.css']
})
export class PayChart implements OnInit {

  @Input() chartData: any = {
    strength: ['strength', 1],
    dexterity: ['dexterity', 1],
    constitution: ['constitution', 1],
    intelligence: ['intelligence', 1],
    wisdom: ['wisdom', 1],
  };

  chart: any;
  columns: any;
  constructor() {}

  ngOnInit() {
    this.columns = Object.values(this.chartData).map(data => data);
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.chartData.firstChange !== true) {
      this.generateChart()
    }
  }

  generateChart() {
    this.chart = c3.generate({
      bindto: '#pieChart',
      size: {
        width: 300,
        height: 300,
      },
      data: {
        columns: this.columns,
        type : 'pie',
        // labels: false,
      },
      pie: {
        label: {
          format: function(value, ratio, id) {
            return d3.format('%')(ratio)
          }
        }
      },
      legend: {
        show: false
      },
      tooltip: {
        show: true
      },
    });
  }

  ngAfterViewInit() {
    this.generateChart();
  }

}
