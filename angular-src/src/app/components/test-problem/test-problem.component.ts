import { Component, OnInit } from '@angular/core';
import { Problem } from '../../problem';
import { ProblemService } from '../../services/problem.service';
import { TestService } from '../../services/test.service';
import { Router } from '@angular/router';
import {NgxUiLoaderService} from 'ngx-ui-loader';

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
  unsolvedProblems: string[];
  solvedProblems: string[];
  showNext: boolean;
  completed: boolean;
  nextText: string;
  solvedText: string;
  unsolvedText: string;

  constructor(private problemService: ProblemService,
              private testService: TestService,
              private router: Router,
              private spinnerService: NgxUiLoaderService) { }

  ngOnInit() {
    this.completed = false;
    this.showNext = false;
    this.cur_prob = 0;
    this.progress = 0;
    this.unsolvedProblems = [];
    this.solvedProblems = [];
    this.num_problems = this.testService.getNumProblems();
    this.filters = this.testService.getFilters();
    this.nextText = 'Next Problem';
    this.problemService.getAllProblems().subscribe((problemsArr) => {
      const allProblems = problemsArr.problems;
      const filteredProblems = [];
      for (const problem of allProblems) {
        let hasCategory = false;
        if (this.filters.length === 0) {
          hasCategory = true;
        } else {
          for (const category of this.filters) {
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
      if (this.problems.length === 0){
        this.router.navigate(['/test']);
        return;
      }
      this.num_problems = Math.min(this.num_problems, this.problems.length);
      this.problem = this.problems[0];
      if (this.problem.code !== undefined) {
        this.solution_code = this.problem.code;
      }
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
    if (!this.showNext) {
      this.spinnerService.startLoader('testLoader1');
      window.scroll({
        top: 1000,
        behavior: 'smooth'
      });
      this.problemService.checkOpenSolutionInTest(this.problem.name, submitted_code).subscribe((res) => {
        this.spinnerService.stopLoader('testLoader1');
        this.isSuccess = res.success;
        this.feedback_msg = res.msg;
        if (this.feedback_msg !== 'Compilation Error!') {
          this.showNext = true;
          this.progress++;
          if (this.progress === this.num_problems) {
            this.nextText = 'See Results';
          }
          if (this.isSuccess) {
            this.solvedProblems.push(this.problem.name);
          }
          if (this.feedback_msg === 'Incorrect Solution!') {
            this.unsolvedProblems.push(this.problem.name);
          }
        }
      });
    }
  }

  onSolveClosed(solution: string) {
    if (!this.showNext) {
      this.spinnerService.startLoader('testLoader2');
      window.scroll({
        top: 1000,
        behavior: 'smooth'
      });
      this.problemService.checkCloseSolutionInTest(this.problem.name, solution).subscribe((res) => {
        this.spinnerService.stopLoader('testLoader2');
        this.showNext = true;
        this.isSuccess = res.success;
        this.feedback_msg = res.msg;
        this.progress++;
        if (this.progress === this.num_problems) {
          this.nextText = 'See Results';
        }
        if (this.isSuccess) {
          this.solvedProblems.push(this.problem.name);
        }
        if (this.feedback_msg === 'Incorrect!') {
          this.unsolvedProblems.push(this.problem.name);
        }
      });
    }
  }

  retakeTest() {
    this.completed = false;
    this.showNext = false;
    this.cur_prob = 0;
    this.progress = 0;
    this.nextText = 'Next Problem';
    this.unsolvedProblems = [];
    this.solvedProblems = [];
    this.problem = this.problems[0];
    if (this.problem.code !== undefined) {
      this.solution_code = this.problem.code;
    }
  }

  nextProblem() {
    this.isSuccess = undefined;
    this.feedback_msg = undefined;
    this.solution_code = undefined;
    this.showNext = false;
    if (this.progress === this.num_problems) {
      this.solvedText = (this.solvedProblems.length === 0) ? 'None' : this.solvedProblems.toString();
      this.unsolvedText = (this.unsolvedProblems.length === 0) ? 'None' : this.unsolvedProblems.toString();
      this.completed = true;
    } else {
      this.cur_prob += 1;
      this.problem = this.problems[this.cur_prob];
      if (this.problem.code !== undefined) {
        this.solution_code = this.problem.code;
      }
    }
  }
}
