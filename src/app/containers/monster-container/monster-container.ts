import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'monster-container',
  templateUrl: './monster-container.html',
  styleUrls: ['./monster-container.css']
})
export class MonsterContainer implements OnInit {

  @ViewChild("monsterInfo") monsterInfo: ElementRef;
  @ViewChild("monsterStatus") monsterStatus: ElementRef;
  @ViewChild("monsterImage") monsterImage: ElementRef;

  monster: any;
  monsterId: number;
  activeView: string = 'info';
  constructor(
    private _api: ApiService
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {

  }

  setActive(element) {
    this.activeView = element;
  }

  getMonsterData(data) {
    this.monster = data;
    this.monster.skillChart = this.genereateMonsterArrays(data);
    setTimeout(() => {
      console.log(this.monsterInfo.nativeElement.className);
      console.log(this.monsterStatus.nativeElement.className);
      console.log(this.monsterImage.nativeElement.className);
    }, 0);

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
}
