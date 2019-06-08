import { Component, OnInit } from '@angular/core';
import { Problem } from "../../problem";
import { ProblemService } from "../../services/problem.service";
import { TestService } from "../../services/test.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-test-problem',
  templateUrl: './test-problem.component.html',
  styleUrls: ['./test-problem.component.css']
})
export class TestProblemComponent implements OnInit {
  cur_prob: number;
  progress: number;
  problems: Problem[];
  problem: Problem;
  solution_code: string;
  isSuccess: any;
  feedback_msg: any;
  num_problems: number;
  filters: Array<string>;
  failed: boolean;

  constructor(private problemService: ProblemService,
              private testService: TestService,
              private router: Router) { }

  ngOnInit() {
    this.failed = false;
    this.cur_prob = 0;
    this.progress = 0;
    this.num_problems = this.testService.getNumProblems();
    this.filters = this.testService.getFilters();
    this.problemService.getAllProblems().subscribe((problemsArr) => {
      let allProblems = problemsArr.problems;
      let filteredProblems = [];
      for (let problem of allProblems){
        let hasCategory = false;
        if (this.filters.length === 0){
          hasCategory = true;
        } else {
          for (let category of this.filters) {
            if (problem.category.includes(category)) {
              hasCategory = true;
              break;
            }
          }
        }
        if (hasCategory){
          filteredProblems.push(problem);
        }
      }
      this.shuffle(filteredProblems);
      this.problems = filteredProblems;
      if(this.problems.length == 0){
        this.router.navigate(['/test']);
        return;
      }
      this.problem = this.problems[0];
      this.num_problems = Math.min(this.num_problems, this.problems.length);
      this.solution_code = this.problem.code;
    });
  }

  /**
   * Shuffles array in place. ES6 version
   * @param {Array} arr items An array containing the items.
   */
  private shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  onSubmitSolution(submitted_code: string){
    this.problemService.testTestSolution(this.problem.name, submitted_code).subscribe((res) => {
      this.isSuccess = res.success;
      this.feedback_msg = res.msg;
      if(this.isSuccess)
        this.progress++;
      else if(this.feedback_msg === 'Incorrect Solution!')
        this.failed = true;
    });
  }

  nextProblem(){
    this.isSuccess = undefined;
    this.feedback_msg = undefined;
    this.cur_prob += 1;
    this.problem = this.problems[this.cur_prob];
    this.solution_code = this.problem.code;
  }
}
