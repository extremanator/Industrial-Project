import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { of, Observable } from "rxjs";
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from "../user";

const helper = new JwtHelperService();

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export interface CountResp {
  num_users: number
}

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
    email: string
  };
}

export interface ProfileResp {
  user: {
    name: string,
    username: string,
    email: string,
    attempted_problems: Object,
    num_solved: number,
    num_attempted: number,
    total_points: number,
    join_date: string
  };
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;

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

  getUserInfo(username: string): Observable<ProfileResp>{
    this.loadToken();
    const httpOptions = {
      headers: new HttpHeaders({'Authorization':this.authToken, 'Content-Type': 'application/json' })
    };
    return this.http.get<ProfileResp>(`http://localhost:3000/users/getUser/${username}`, httpOptions);
  }

  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    this.authToken = token;
  }

  isLoggedIn() {
    const token = localStorage.getItem('id_token');
    return token !== null && !helper.isTokenExpired(token);
  }

  getToken(){
    return localStorage.getItem('id_token');
  }

  getTokenUser(){
    this.loadToken();
    if (this.authToken != null) {
      const user = helper.decodeToken(this.authToken);
      return user.username;
    } else {
      return "";
    }
  }

  isAdmin(){
    this.loadToken();
    if (this.authToken != null) {
      const user = helper.decodeToken(this.authToken);
      return user.isAdmin;
    } else {
      return false;
    }
  }

  loadToken(){
    this.authToken = localStorage.getItem('id_token');
  }

  logout(){
    this.authToken = null;
    localStorage.clear();
  }

  getNumUsers(){
    this.loadToken();
    const httpOptions = {
      headers: new HttpHeaders({'Authorization':this.authToken, 'Content-Type': 'application/json' })
    };
    return this.http.get<CountResp>('http://localhost:3000/users/getNumUsers', httpOptions);
  }

  getAllUsers(){
    this.loadToken();
    const httpOptions = {
      headers: new HttpHeaders({'Authorization':this.authToken, 'Content-Type': 'application/json' })
    };
    return this.http.get<User[]>('http://localhost:3000/users/getAllUsers', httpOptions);
  }

  searchUsers(term: string): Observable<User[]> {
    if (!term.trim()) {
      // if not search term, return empty user array.
      return of([]);
    }
    this.loadToken();
    const httpOptions = {
      headers: new HttpHeaders({'Authorization':this.authToken, 'Content-Type': 'application/json' })
    };
    return this.http.get<User[]>(`http://localhost:3000/users/search/${term}`, httpOptions);
  }

}
