import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from "rxjs";
import { JwtHelperService } from '@auth0/angular-jwt';

const helper = new JwtHelperService();

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export interface Response {
  success: boolean;
  token: string;
  user: {
    id: string,
    name: string,
    username: string,
    email: string
  };
  msg: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http: HttpClient) { }

  registerUser(user): Observable<Response>{
    return this.http.post<Response>('http://localhost:3000/users/register', user, httpOptions);
  }

  authenticateUser(user): Observable<Response>{
    return this.http.post<Response>('http://localhost:3000/users/authenticate', user, httpOptions);
  }

  getProfile(): Observable<Response>{
    this.loadToken();
    const httpOptions = {
      headers: new HttpHeaders({'Authorization':this.authToken, 'Content-Type': 'application/json' })
    };
    return this.http.get<Response>('http://localhost:3000/users/profile', httpOptions);
  }

  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loggedIn() {
    const token = localStorage.getItem('id_token');
    return token !== null && !helper.isTokenExpired(token);
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}