import { Component, OnInit, Input, Output,
  EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'dynamic-search',
  templateUrl: './dynamic-search.component.html',
  styleUrls: ['./dynamic-search.component.css']
})
export class DynamicSearchComponent implements OnInit {

  searchValue: any;
  searchResults: any;
  userIsSearching: any = false;
  searchBy: any = 'id';

  @Output() sendMonsterData: EventEmitter<any> = new EventEmitter();

  constructor(
    private _apiService: ApiService
  ) {
    this.searchResults = {
      results: []
    }
  }

  ngOnInit() {}

  willSearchBy(data) {
    this.searchBy = data;
    this.userIsSearching = true;
  }

  toTitleCase(phrase) {
    return phrase
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  resetModel() {
    this.searchValue = '';
    this.searchResults.results = [];
    this.userIsSearching = false;
  }

  searchThis(url) {
    // this.resetModel();
    this._apiService.searchMonsterByUrl(url).subscribe(
      data => {this.sendMonsterData.emit(data)}
    );
  }

  idModelChanged(e) {
    // this.resetModel();
    if(e !== '' && e !== null && e !== 'e') {
      this._apiService.searchMonsterById(e)
        .subscribe(data => this.sendMonsterData.emit(data));
    }
  }

  nameModelChanged(e) {
    const upperCase = this.toTitleCase(e)
    let monsterSearch = upperCase.replace(/\s/gi, "+");
    this._apiService.searchMonsterByName(monsterSearch)
      .subscribe(data => {
        // this.searchResults = data
        if(data.results.length > 0) {
          this.searchThis(data.results[0].url)
        }
      });
  }

}
