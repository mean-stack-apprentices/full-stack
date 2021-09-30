import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  root = 'http://localhost:3502/'
  constructor(private http: HttpClient) {
    console.log(this.get('users'))
   }

  get<T>(path: string) {
    return this.http.get<T>(this.root + path)
  }
}
