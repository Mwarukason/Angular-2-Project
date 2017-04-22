import { Injectable } from '@angular/core';
/* import http from angular */
import {Http} from '@angular/http'
//import {Observable} from 'rxjs/Rx';
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map';﻿

@Injectable()
export class GithubService {

  /*the goal of the service to load data from server*/
  constructor(private http: Http) { }

  getUserDetail(userId): Observable<any>{
    const url = 'https://api.github.com/users/' + userId;
    return this.http.get(url).map(
      res => {
        const user = res.json();
        return user;
      }
    )
  }

  getUser(searchText): Observable<any> {
    //const searchText = 'js';
    const url = 'http://api.github.com/search/users?q=' + searchText;
    //this.http.get(url).subscribe(
    return this.http.get(url).map(
      res => {
        //callback to get the data and set to json format
        const data = res.json();
        console.log(data);
        return data;
      }
    )
  }
}
