import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class BaseService {
  constructor(private http: HttpClient) {}
  getAllUsers(body: any) {
    return this.http.get('https://reqres.in/api/users', body);
  }
  getSingleUser(id: string) {
    return this.http.get(`https://reqres.in/api/users/${id}`);
  }
}
