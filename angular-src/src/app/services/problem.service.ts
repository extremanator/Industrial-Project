import { Injectable } from '@angular/core';
import { Problem } from "../problem";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export interface ProblemResponse{
  problems: Problem[];
  problem: Problem;
}

const problemsUrl = 'http://localhost:3000/problems';

@Injectable({
  providedIn: 'root'
})
export class ProblemService {

  constructor(private http: HttpClient) { }

  getAllProblems(): Observable<ProblemResponse>{
    return this.http.get<ProblemResponse>(problemsUrl + '/getAllProblems', httpOptions);
  }

  getProblem(name: string): Observable<ProblemResponse>{
    const url = problemsUrl + '/getProblem/' + name;
    return this.http.get<ProblemResponse>(url, httpOptions);
  }

}
