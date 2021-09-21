import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) 
  { }

  get<T>(resourceName: string) {
    return this.http.get<T>('https://jsonplaceholder.typicode.com/'+ resourceName);
  }
}
