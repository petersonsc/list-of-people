import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  configUrl = 'http://localhost:8090/rest/people';

  getPeople() {
    return this.http.get(this.configUrl);
  }

}
