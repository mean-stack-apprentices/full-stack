import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:3501/';

  constructor(private http: HttpClient) { }

  get<T>(resource:string){
    return this.http.get<T>(this.baseUrl + resource);
  }
}
