import { Injectable } from '@angular/core';
import { Problem } from "../problem";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

export interface ProblemsResp {
  problems: Problem[];
}

export interface ProblemResp {
  problem: Problem;
}

export interface CheckSolutionResp {
  success: boolean;
  msg: string;
}

const problemsUrl = 'http://localhost:3000/problems';

@Injectable({
  providedIn: 'root'
})
export class ProblemService {

  constructor(private http: HttpClient,
              private authService: AuthService) { }

  getAllProblems(): Observable<ProblemsResp>{
    const authToken = this.authService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({'Authorization': authToken, 'Content-Type': 'application/json' })
    };
    return this.http.get<ProblemsResp>(`${problemsUrl}/getAllProblems`, httpOptions);
  }

  getLanguageProblems(language: string): Observable<ProblemsResp>{
    const authToken = this.authService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({'Authorization': authToken, 'Content-Type': 'application/json' })
    };
    return this.http.get<ProblemsResp>(`${problemsUrl}/getLanguageProblems/${language}`, httpOptions);
  }

  getProblem(name: string): Observable<ProblemResp>{
    const authToken = this.authService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({'Authorization': authToken, 'Content-Type': 'application/json' })
    };
    return this.http.get<ProblemResp>(`${problemsUrl}/getProblem/${name}`, httpOptions);
  }

  testProblemSolution(name: string, solution: string): Observable<CheckSolutionResp>{
    const authToken = this.authService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({'Authorization': authToken, 'Content-Type': 'application/json' })
    };
    let problemRequest = {
      name: name,
      solution: solution
    };
    return this.http.post<CheckSolutionResp>(`${problemsUrl}/checkProblemSolution`, problemRequest, httpOptions);
  }

  testTestSolution(name: string, solution: string): Observable<CheckSolutionResp>{
    const authToken = this.authService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({'Authorization': authToken, 'Content-Type': 'application/json' })
    };
    let problemRequest = {
      name: name,
      solution: solution
    };
    return this.http.post<CheckSolutionResp>(`${problemsUrl}/checkTestSolution`, problemRequest, httpOptions);
  }
}
