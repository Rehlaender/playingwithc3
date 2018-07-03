import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'bars-graph',
  templateUrl: './bars-graph.component.html',
  styleUrls: ['./bars-graph.component.css']
})
export class BarsGraphComponent implements OnInit {

  constructor(
    private _api: ApiService
  ) {}

  ngOnInit() {
    console.log('hi iris');
  }

  ngAfterViewInit() {
    console.log('generate chart, pliso');

  }
}
