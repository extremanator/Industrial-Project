import { Component, OnInit } from '@angular/core';
import { ProblemService } from '../../services/problem.service';
import { AuthService } from '../../services/auth.service';
import { Problem } from '../../problem';
import { User } from '../../user';
import {debounceTime, distinctUntilChanged, max, switchMap} from 'rxjs/operators';
import { of, Subject } from 'rxjs';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  problems: Array<Problem>;
  users: Array<User>;
  numUsers: number;
  numProblems: number;
  problemsInfo: Array<object>;
  selected: any;
  clickedGeneral: boolean;
  clickedCategories: boolean;
  displayedProblems: Array<Problem>;
  displayOrder: string;
  maxSolutions: number;
  minSolutions: number;
  maxProblemsText: string;
  minProblemsText: string;

  searchUsername: string;
  searchUsers$: any;
  selectedUser: any;
  private userSearchTerms = new Subject<string>();

  searchProblem: string;
  searchProblems$: any;
  selectedProblem: any;
  private problemSearchTerms = new Subject<string>();

  constructor(private problemService: ProblemService,
              private authService: AuthService) { }

  getAllInfo() {
    this.problemService.getAllProblems().subscribe(problemsWrapper => {
      this.problems = problemsWrapper.problems;
      this.numProblems = this.problems.length;
      this.authService.getAllUsers().subscribe((users) => {
        this.users = users;
        this.numUsers = this.users.length;
        let maxProblems = [];
        let minProblems = [];
        this.maxSolutions = null;
        this.minSolutions = null;
        for (const problem of this.problems) {
          if (this.maxSolutions === null || this.maxSolutions < problem.num_solved) {
            maxProblems = [problem.name];
            this.maxSolutions = problem.num_solved;
          } else if (this.maxSolutions === problem.num_solved) {
            maxProblems.push(problem.name);
          }
          if (this.minSolutions === null || this.minSolutions > problem.num_solved) {
            minProblems = [problem.name];
            this.minSolutions = problem.num_solved;
          } else if (this.minSolutions === problem.num_solved) {
            minProblems.push(problem.name);
          }
        }
        minProblems.sort((name1, name2) => {
          return (name1 > name2) ? 1 : -1;
        });
        maxProblems.sort((name1, name2) => {
          return (name1 > name2) ? 1 : -1;
        });
        this.maxProblemsText = '';
        for (const name of maxProblems) {
          if (this.maxProblemsText === '') {
            this.maxProblemsText += name;
          } else {
            this.maxProblemsText += `, ${name}`;
          }
        }
        this.minProblemsText = '';
        for (const name of minProblems) {
          if (this.minProblemsText === '') {
            this.minProblemsText += name;
          } else {
            this.minProblemsText += `, ${name}`;
          }
        }
      });
    });
  }

  onSearchUser(username: string) {
    this.userSearchTerms.next(username);
  }

  onSearchProblem(name: string) {
    this.problemSearchTerms.next(name);
  }

  onSelectUser(user: User) {
    this.selectedUser = user;
    this.selectedUser.attempts = '';
    this.selectedUser.solved = '';
    for (const name in user.attempted_problems) {
      if (this.selectedUser.attempts === '') {
        this.selectedUser.attempts += name;
      } else {
        this.selectedUser.attempts += `, ${name}`;
      }
      if (user.attempted_problems[name].solved) {
        if (this.selectedUser.solved === '') {
          this.selectedUser.solved += name;
        } else {
          this.selectedUser.solved += `, ${name}`;
        }
      }
    }
    if (this.selectedUser.attempts === '') {
      this.selectedUser.attempts = 'None';
    }
    if (this.selectedUser.solved === '') {
      this.selectedUser.solved = 'None';
    }
  }

  onSelectProblem(problem: Problem) {
    this.selectedProblem = problem;
    this.selectedProblem.solved_percent = ((problem.num_solved * 100) / this.numUsers);
    this.selectedProblem.type_text = (problem.type === 'open') ? 'Open Problem' : 'Multiple Choice Problem';
    let totAttempts = 0;
    this.selectedProblem.solvingUsers = '';
    if (problem.solved_by !== undefined) {
      for (let name in problem.solved_by) {
        if (this.selectedProblem.solvingUsers === '') {
          this.selectedProblem.solvingUsers += name;
        } else {
          this.selectedProblem.solvingUsers += `, ${name}`;
        }
        totAttempts += problem.solved_by[name];
      }
    }
    if (this.selectedProblem.solvingUsers === '') {
      this.selectedProblem.solvingUsers = 'None';
    }
    this.selectedProblem.avg_attempts = (problem.num_solved === 0) ? 0 : totAttempts/problem.num_solved;
  }

  onClickGeneral() {
    this.clickedGeneral = !this.clickedGeneral;
  }

  onClickCategories() {
    this.clickedCategories = !this.clickedCategories;
  }

  onClickUsers(name) {
    this.selected.name = name;
    this.selectedUser = undefined;
  }

  onClickProblems(name) {
    this.selected.name = name;
    this.selectedProblem = undefined;
  }

  onClickCategory(name) {
    this.displayedProblems = [];
    this.selected.name = name;
    const category = this.getCategory(name);
    this.selected.num_attempted = 0;
    this.selected.num_solved = 0;
    for (const problem of this.problems) {
      if (problem.category.includes(category)) {
        this.selected.num_attempted += problem.num_attempted;
        this.selected.num_solved += problem.num_solved;
        this.displayedProblems.push(problem);
      }
    }
    if (this.displayOrder === 'Number of attempts') {
      this.displayedProblems.sort((prob1, prob2) => {
        const dif = (prob2.num_attempted - prob1.num_attempted);
        if (dif === 0) {
          return (prob1.name > prob2.name) ? 1 : -1;
        }
        return dif;
      });
    } else {
      this.displayedProblems.sort((prob1, prob2) => {
        const dif = (prob2.num_solved - prob1.num_solved);
        if (dif === 0) {
          return (prob1.name > prob2.name) ? 1 : -1;
        }
        return dif;
      });
    }
  }

  onChangeOrder(order: string) {
    if (order === 'attempts') {
      this.displayOrder = 'Number of attempts';
      this.displayedProblems.sort((prob1, prob2) => {
        const dif = (prob2.num_attempted - prob1.num_attempted);
        if (dif === 0) {
          return (prob1.name > prob2.name) ? 1 : -1;
        }
        return dif;
      });
    } else {
      this.displayOrder = 'Number of solutions';
      this.displayedProblems.sort((prob1, prob2) => {
        const dif = (prob2.num_solved - prob1.num_solved);
        if (dif === 0) {
          return (prob1.name > prob2.name) ? 1 : -1;
        }
        return dif;
      });
    }
  }

  getCategory(name): string {
    switch (name) {
      case 'Declarations and Initialization':
        return 'DCL';
      case 'Expressions':
        return 'EXP';
      case 'Integers':
        return 'INT';
      case 'Containers':
        return 'CTR';
      case 'Characters and Strings':
        return 'STR';
      case 'Memory Management':
        return 'MEM';
      case 'Input Output':
        return 'FIO';
      case 'Exceptions and Error Handling':
        return 'ERR';
      case 'Object Oriented Programming':
        return 'OOP';
      case 'Concurrency':
        return 'CON';
      case 'Miscellaneous':
        return 'MSC';
    }
  }

  onClickRemoveProblem(problem: Problem) {
    console.log('Removing ' + problem.name);
  }

  onClickRemoveUser(user: User) {
    console.log('Removing ' + user.username);
  }

  ngOnInit() {
    this.getAllInfo();
    this.clickedGeneral = false;
    this.clickedCategories = false;
    this.selected = {};
    this.displayedProblems = [];
    this.displayOrder = 'Number of attempts';

    this.searchUsers$ = [];
    this.searchUsers$ = this.userSearchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => {
        if (!term.trim()) {
          // if not search term, return empty user array.
          return of([]);
        }
        const result = [];
        for (const user of this.users) {
          if (user.username.includes(term)) {
            result.push(user);
          }
        }
        return of(result);
      })
    );

    this.searchProblems$ = [];
    this.searchProblems$ = this.problemSearchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => {
        if (!term.trim()) {
          // if not search term, return empty user array.
          return of([]);
        }
        const result = [];
        for (const problem of this.problems) {
          if (problem.name.includes(term)) {
            result.push(problem);
          }
        }
        return of(result);
      })
    );
  }
}


