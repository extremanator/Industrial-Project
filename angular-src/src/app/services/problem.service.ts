import { Injectable } from '@angular/core';
import { Problem } from "../problem";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import {AuthService} from "./auth.service";

export interface ProblemResponse{
  problems: Problem[];
  problem: Problem;
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

  getAllProblems(): Observable<ProblemResponse>{
    const authToken = this.authService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({'Authorization': authToken, 'Content-Type': 'application/json' })
    };
    return this.http.get<ProblemResponse>(problemsUrl + '/getAllProblems', httpOptions);
  }

  getProblem(name: string): Observable<ProblemResponse>{
    const authToken = this.authService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({'Authorization': authToken, 'Content-Type': 'application/json' })
    };
    const url = problemsUrl + '/getProblem/' + name;
    return this.http.get<ProblemResponse>(url, httpOptions);
  }

  testProblemSolution(name: string, solution: string){
    const authToken = this.authService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({'Authorization': authToken, 'Content-Type': 'application/json' })
    };
    let problemRequest = {
      name: name,
      solution: solution
    };
    return this.http.post<ProblemResponse>(problemsUrl + '/checkProblemSolution', problemRequest, httpOptions);
  }
}
