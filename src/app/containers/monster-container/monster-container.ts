import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'monster-container',
  templateUrl: './monster-container.html',
  styleUrls: ['./monster-container.css']
})
export class MonsterContainer implements OnInit {

  monster: any;
  monsterId: number;
  constructor(
    private _api: ApiService
  ) {}

  getMonster(id) {
    this._api.getMonsterById(id).subscribe(data => this.monster = data);
  }

  ngOnInit() {
    console.log('hi');
  }
}
