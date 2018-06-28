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
    this._api.getMonsterById(id).subscribe(data => {
      this.monster = data;
      this.monster.skillChart = this.genereateMonsterArrays(data);
    });
  }

  genereateMonsterArrays(data) {
    const skill = {};
    Object.keys(data).map(key => {
      switch(key) {
        case 'strength':
        case 'dexterity':
        case 'constitution':
        case 'intelligence':
        case 'wisdom':
          skill[key] = [key, data[key]];
        break;
        default:
          break;
      }
    });
    return skill;
  }

  ngOnInit() {
    console.log('hi');
  }
}
