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
        for (let i = 0; i < this.problems.length; i++){
          if(info.hasOwnProperty(this.problems[i].name)){
            this.problemInfo.set(this.problems[i].name, {solved: true, dateSol: info[this.problems[i].name].dateSol});
          } else {
            this.problemInfo.set(this.problems[i].name, {solved: false, dateSol: 'TBD'});
          }
        }
      });
    });
  }

  onClickProblem(problem_name: string){
    this.router.navigate(['/problems/'+problem_name]);
  }

  ngOnInit() {
    this.getAllProblems();
  }
}
