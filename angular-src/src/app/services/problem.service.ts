import { Injectable } from '@angular/core';
import { Problem } from "../problem";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

export interface ProblemsResp {
  problems: Problem[];
}

export interface ProblemResp {
  problem: Problem;
}

export interface StandardResp {
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

  checkOpenSolutionAndUpdateCounters(name: string, solution: string): Observable<StandardResp>{
    const authToken = this.authService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({'Authorization': authToken, 'Content-Type': 'application/json' })
    };
    const problemRequest = {
      name: name,
      solution: solution
    };
    return this.http.post<StandardResp>(`${problemsUrl}/checkProblemSolution`, problemRequest, httpOptions);
  }

  checkOpenSolutionInTest(name: string, solution: string): Observable<StandardResp>{
    const authToken = this.authService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({'Authorization': authToken, 'Content-Type': 'application/json' })
    };
    const problemRequest = {
      name: name,
      solution: solution
    };
    return this.http.post<StandardResp>(`${problemsUrl}/checkTestSolution`, problemRequest, httpOptions);
  }

  checkCloseSolutionInTest(name: string, solution: string): Observable<StandardResp>{
    const authToken = this.authService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({'Authorization': authToken, 'Content-Type': 'application/json' })
    };
    const problemRequest = {
      name: name,
      solution: solution
    };
    return this.http.post<StandardResp>(`${problemsUrl}/checkClosedTestSolution`, problemRequest, httpOptions);
  }

  checkCloseProblemSolution(name: string, solution: string): Observable<StandardResp>{
    const authToken = this.authService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({'Authorization': authToken, 'Content-Type': 'application/json' })
    };
    const problemRequest = {
      name: name,
      solution: solution
    };
    return this.http.post<StandardResp>(`${problemsUrl}/checkClosedProblemSolution`, problemRequest, httpOptions);
  }

  addClosedProblem(problemInfo): Observable<StandardResp> {
    const authToken = this.authService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({'Authorization': authToken, 'Content-Type': 'application/json' })
    };

    return this.http.post<StandardResp>(`${problemsUrl}/addClosedProblem`, problemInfo, httpOptions);
  }

  removeProblem(name): Observable<StandardResp> {
    const authToken = this.authService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({'Authorization': authToken, 'Content-Type': 'application/json' })
    };
    const problemRequest = {
      name: name
    };
    return this.http.post<StandardResp>(`${problemsUrl}/removeProblem`, problemRequest, httpOptions);
  }

}
