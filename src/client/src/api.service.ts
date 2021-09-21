import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  root="http://localhost:3501"
  constructor(private http: HttpClient) {
    console.log(this.get('users'))
   }
   get<T>(path: string) {
     return this.http.get<T>(this.root + path)
   }
}
