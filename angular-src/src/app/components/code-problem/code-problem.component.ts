import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Problem } from "../../problem";
import { ProblemService } from "../../services/problem.service";
import {NgxUiLoaderService} from "ngx-ui-loader";

@Component({
  selector: 'app-code-problem',
  templateUrl: './code-problem.component.html',
  styleUrls: ['./code-problem.component.css']
})
export class CodeProblemComponent implements OnInit {
  problem: Problem;
  solution_code: string;
  isSuccess: any;
  feedback_msg: any;

  constructor(private route: ActivatedRoute,
              private problemService: ProblemService,
              private spinnerService: NgxUiLoaderService) { }

  getProblem() {
    const name = this.route.snapshot.paramMap.get('name');
    this.problemService.getProblem(name).subscribe(problemWrapper => {
      this.problem = problemWrapper.problem;
      if (this.problem.code !== undefined) {
        this.solution_code = this.problem.code;
      }
    });
  }

  onSubmitSolution(submitted_code: string) {
    this.spinnerService.startLoader('resultLoader');
    window.scroll({
      top: 1000,
      behavior: 'smooth'
    });
    this.problemService.testProblemSolution(this.problem.name, submitted_code).subscribe((res) => {
      this.isSuccess = res.success;
      this.feedback_msg = res.msg;
      this.spinnerService.stopLoader('resultLoader');
    });
  }


  onSolveClosed(solution: string) {
    this.spinnerService.startLoader('resultLoader');
    window.scroll({
      top: 1000,
      behavior: 'smooth'
    });
    this.problemService.checkCloseProblemSolution(this.problem.name, solution).subscribe((res) => {
      this.isSuccess = res.success;
      this.feedback_msg = res.msg;
      this.spinnerService.stopLoader('resultLoader');
    });
  }

  ngOnInit() {
    this.getProblem();
  }

}
