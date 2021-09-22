import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl:string = 'http://localhost:3501/';
  constructor(private http: HttpClient)
  { }

  get<T>(resourceName: string) {
    return this.http.get<T>(this.baseUrl + resourceName);
  }
  post<T, D>(resourceName: string, data: D) {
    this.post<T, D>(this.baseUrl + resourceName, data)
  }
}
