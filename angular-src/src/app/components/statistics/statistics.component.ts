import { Component, OnInit } from '@angular/core';
import {ProblemService} from "../../services/problem.service";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  problems: any;
  numUsers: number;
  problemsInfo: Array<Object>;
  selected: any;
  generalInfo: any;

  constructor(private problemService: ProblemService,
              private authService: AuthService) { }

  getAllProblems(){
    this.problemService.getAllProblems().subscribe(problemsWrapper => {
      this.problems = problemsWrapper.problems;
      let temp_info = [];
      this.authService.getNumUsers().subscribe((data) => {
        this.numUsers = data.num_users;
        for (let problem of this.problems){
          let tot_attempts = 0;
          let solvingUsers = '';
          if (problem.solved_by !== undefined){
            if (problem.num_solved > 1) {
              let i = 1;
              solvingUsers += 'The users are: ';
              for (let name in problem.solved_by) {
                if (solvingUsers === "The users are: ") {
                  solvingUsers += name;
                } else if (i === problem.num_solved) {
                  if(problem.num_solved !== 2)
                    solvingUsers += ',';
                  solvingUsers += ` and ${name}`;
                } else{
                    solvingUsers += `, ${name}`;
                }
                i++;
                tot_attempts += problem.solved_by[name];
              }
              solvingUsers += '.\n';
            } else if(problem.num_solved === 1){
              solvingUsers += 'The user is: ';
              for (let name in problem.solved_by) {
                solvingUsers += name;
                tot_attempts += problem.solved_by[name];
              }
              solvingUsers += '.\n';
            } else {
              solvingUsers += '\n';
            }
          }
          let text1;
          if (problem.num_attempted !== 1){
            text1 = `So far their have been ${problem.num_attempted} attempts to solve the problem.`;
          } else {
            text1 = `So far their has been ${problem.num_attempted} attempt to solve the problem.`;
          }
          temp_info.push({
            name: problem.name,
            solved_percent: ((problem.num_solved*100)/this.numUsers),
            avg_attempts: (problem.num_solved === 0) ? 0 : tot_attempts/problem.num_solved,
            num_solved: problem.num_solved,
            num_attempted: text1,
            solvingUsers: solvingUsers
          });
          this.generalInfo = { name: 'General', numUsers: data.num_users};
          this.selected = this.generalInfo;
        }
        temp_info.sort((obj1, obj2) => {if (obj1.name > obj2.name) return 1; else return -1;});
      });
      this.problemsInfo = temp_info;
    });
  }

  onClickGeneral(){
    this.selected = this.generalInfo;
  }

  onClickProblem(name){
    this.selected = name;
  }

  ngOnInit() {
    this.generalInfo = {};
    this.selected = {};
    this.getAllProblems();
  }
  test(){
    alert("hi");
  }
}


