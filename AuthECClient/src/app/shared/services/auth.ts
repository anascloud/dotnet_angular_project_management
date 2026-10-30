import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  private http = inject(HttpClient);

  baseURL = 'http://localhost:5055/api';

  createUser(formData: any) {
    return this.http.post(this.baseURL + '/signup', formData);
  }
}
