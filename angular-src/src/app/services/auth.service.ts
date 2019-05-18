import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { JwtHelperService } from '@auth0/angular-jwt';

const helper = new JwtHelperService();

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export interface RegisterResp {
  success: boolean;
  msg: string;
}

export interface AuthResp {
  success: boolean;
  msg: string;
  token: string;
  user: {
    id: string,
    name: string,
    username: string,
    email: string,
  };
}

export interface ProfileResp {
  user: {
    id: string,
    name: string,
    username: string,
    email: string,
    solved_problems: Object,
    num_solved: number,
    num_attempted: number,
    join_date: string
  };
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http: HttpClient) { }

  registerUser(user): Observable<RegisterResp>{
    return this.http.post<RegisterResp>('http://localhost:3000/users/register', user, httpOptions);
  }

  authenticateUser(user): Observable<AuthResp>{
    return this.http.post<AuthResp>('http://localhost:3000/users/authenticate', user, httpOptions);
  }

  getProfile(): Observable<ProfileResp>{
    this.loadToken();
    const httpOptions = {
      headers: new HttpHeaders({'Authorization':this.authToken, 'Content-Type': 'application/json' })
    };
    return this.http.get<ProfileResp>('http://localhost:3000/users/profile', httpOptions);
  }

  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  isLoggedIn() {
    const token = localStorage.getItem('id_token');
    return token !== null && !helper.isTokenExpired(token);
  }

  getToken(){
    return localStorage.getItem('id_token');
  }

  loadToken(){
    this.authToken = localStorage.getItem('id_token');
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }


}
