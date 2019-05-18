import { Component, OnInit } from '@angular/core';
import { Problem } from "../../problem";
import { ProblemService } from "../../services/problem.service";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  problems: Problem[];
  problemInfo: Map<string, {solved: boolean, dateSol: string}>;

  constructor(private problemService: ProblemService,
              private authService: AuthService,
              private router: Router) { }

  getAllProblems(){
    this.problemService.getAllProblems().subscribe(problemsWrapper => {
      this.problems = problemsWrapper.problems;
      this.authService.getProfile().subscribe(profile => {
        this.problemInfo = new Map();
        const info = profile.user.solved_problems;
        for (let problem of this.problems){
          if(info.hasOwnProperty(problem.name)){
            this.problemInfo.set(problem.name, {solved: true, dateSol: info[problem.name].dateSol});
          } else {
            this.problemInfo.set(problem.name, {solved: false, dateSol: 'TBD'});
          }
        }
      });
    });
  }

  onClickProblem(problem_name: string){
    this.router.navigate([`/problems/${problem_name}`]);
  }

  ngOnInit() {
    this.getAllProblems();
  }
}
