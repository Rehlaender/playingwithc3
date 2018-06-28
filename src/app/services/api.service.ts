import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  getMonsterById(id) {
    const monsterRoute = `${this.apiRoot}monsters/${id}`;
    console.log(monsterRoute, 'route');
    return this._http.get(monsterRoute);
  }
}
