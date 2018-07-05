import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiRoot: string;

  constructor(
    private _http: HttpClient) {
    this.apiRoot = environment.apiRoot;
  }

  searchMonsterByUrl(monster) {
    console.log(monster, 'search by url');
    return this._http.get(monster);
  }

  searchMonsterById(id) {
    const monsterRoute = `${this.apiRoot}monsters/${id}`;
    return this._http.get(monsterRoute);
  }

  searchMonsterByName(name): Observable<any> {
    const monsterRouteByName = `${this.apiRoot}monsters/?name=${name}`;
    return this._http.get(monsterRouteByName)
    .pipe(
      catchError(null)
    );
  }
}
