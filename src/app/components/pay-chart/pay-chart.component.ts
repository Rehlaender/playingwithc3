import { Component, OnInit, Input } from '@angular/core';
import * as c3 from 'c3';

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

  constructor() {
  }

  ngOnInit() {}

  ngAfterViewInit() {
    let chart = c3.generate({
      bindto: '#chart',
      data: {
        columns: [
          this.chartData.strength,
          this.chartData.dexterity,
          this.chartData.constitution,
          this.chartData.intelligence,
          this.chartData.wisdom
        ],
        type : 'pie',
      }
    });
  }

}
