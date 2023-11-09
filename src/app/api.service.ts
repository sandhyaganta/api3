import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private getUrl = 'https://reqres.in/api/users?page=2';

  constructor(private http: HttpClient) { }
}
