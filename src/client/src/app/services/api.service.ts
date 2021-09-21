import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:3005/'

  constructor(private http: HttpClient) { }

  get<T>(resource: string) {
    return this.http.get<T>(this.baseUrl + resource)
  }
}
