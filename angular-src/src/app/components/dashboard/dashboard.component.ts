import { Component, OnInit } from '@angular/core';
import { Problem } from "../../problem";
import { ProblemService } from "../../services/problem.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  problems: Problem[];

  constructor(private problemService: ProblemService) { }

  getAllProblems(){
    this.problemService.getAllProblems().subscribe(problemsWrapper => this.problems = problemsWrapper.problems);
  }

  ngOnInit() {
    this.getAllProblems();
  }

}
