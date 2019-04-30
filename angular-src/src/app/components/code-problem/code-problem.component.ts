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

  constructor(private route: ActivatedRoute,
              private problemService: ProblemService) { }

  getProblem(){
    const name = this.route.snapshot.paramMap.get('name');
    this.problemService.getProblem(name).subscribe(problem => this.problem = problem.problem);
  }

  ngOnInit() {
    this.getProblem();
  }

}
