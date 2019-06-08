import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Problem } from "../../problem";
import { ProblemService } from "../../services/problem.service";

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
              private problemService: ProblemService) { }

  getProblem(){
    const name = this.route.snapshot.paramMap.get('name');
    this.problemService.getProblem(name).subscribe(problem => {
      this.problem = problem.problem;
      if(problem.problem.type === 'open') {
        this.solution_code = problem.problem.code;
      }
    });
  }

  onSubmitSolution(submitted_code: string){
    this.problemService.testProblemSolution(this.problem.name, submitted_code).subscribe((res) => {
      this.isSuccess = res.success;
      this.feedback_msg = res.msg;
    });
  }


  onSolveClosed(solution: string) {
    this.problemService.checkCloseProblemSolution(this.problem.name, solution).subscribe((res) => {
      this.isSuccess = res.success;
      this.feedback_msg = res.msg;
    });
  }

  ngOnInit() {
    this.getProblem();
  }

}
