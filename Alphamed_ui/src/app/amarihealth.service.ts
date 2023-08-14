import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AmarihealthService {

  private baseUrl: String;
  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:8080/alphamed/savecomments';
  }

  saveAmariHealth(varAmarihealth: object): Observable<object> {
    return this.http.post('http://localhost:8080/alphamed/savecomments', varAmarihealth);
  }
}
