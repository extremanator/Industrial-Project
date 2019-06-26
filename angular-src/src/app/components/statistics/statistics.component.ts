import { Component, OnInit } from '@angular/core';
import { ProblemService } from '../../services/problem.service';
import { AuthService } from '../../services/auth.service';
import { Problem } from '../../problem';
import { User } from '../../user';
import {debounceTime, distinctUntilChanged, max, switchMap} from 'rxjs/operators';
import { of, Subject } from 'rxjs';
import {Arr} from "tern";
import {NgxUiLoaderService} from "ngx-ui-loader";

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
  selected: any;
  clickedGeneral: boolean;
  clickedCategories: boolean;
  displayedProblems: Array<Problem>;
  displayOrder: string;
  maxSolutions: number;
  minSolutions: number;
  maxProblemsText: string;
  minProblemsText: string;

  removeResult: any;

  searchUsername: string;
  searchUsers$: any;
  selectedUser: any;
  private userSearchTerms = new Subject<string>();
  isUserSearchInFocus: boolean;
  isHoveringUserSearch: boolean;

  searchProblem: string;
  searchProblems$: any;
  selectedProblem: any;
  private problemSearchTerms = new Subject<string>();
  isProblemSearchInFocus: boolean;
  isHoveringProblemSearch: boolean;

  addProbName: string;
  addProbPoints: string;
  addProbDiff: string;
  categoryDCL: boolean;
  categoryEXP: boolean;
  categoryINT: boolean;
  categoryCTR: boolean;
  categorySTR: boolean;
  categoryMEM: boolean;
  categoryFIO: boolean;
  categoryERR: boolean;
  categoryOOP: boolean;
  categoryCON: boolean;
  categoryMSC: boolean;
  addProbParagraph: string;
  addProbCode: string;
  addProbSolCount: Array<number>;
  addProbSol: string;
  addProbSols: Array<string>;
  addProbResult: any;

  constructor(private problemService: ProblemService,
              private authService: AuthService,
              private spinnerService: NgxUiLoaderService) { }

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

  onChangeAddProbDiff(difficulty: string) {
    this.addProbDiff = difficulty;
  }

  onAddProbChoice() {
    this.addProbSols.push(`Choice ${this.addProbSolCount.length + 1}`);
    this.addProbSolCount.push(this.addProbSolCount.length);
  }

  onRemoveProbChoice() {
    if (this.addProbSol !== undefined && this.addProbSol[0] === this.addProbSols[this.addProbSols.length - 1]) {
      this.addProbSol = undefined;
    }
    this.addProbSols.pop();
    this.addProbSolCount.pop();
  }

  onSubmitProblem() {
    window.scroll({
      top: 2000,
      behavior: 'smooth'
    });
    this.spinnerService.startLoader('addProbSubmitLoader');
    const re = /[1-9][0-9]*/;
    if (!this.addProbName.trim() || !this.addProbPoints.trim() || !this.addProbParagraph.trim()) {
      this.addProbResult = {success: false, msg: 'Failed to add problem. Please fill in all required fields.'};
      this.spinnerService.stopLoader('addProbSubmitLoader');
      return;
    }
    if (!matchExactRegEx(re, this.addProbPoints.trim())) {
      this.addProbResult = {success: false, msg: 'Failed to add problem. \'Points\' must be a positive integer.'};
      this.spinnerService.stopLoader('addProbSubmitLoader');
      return;
    }
    if (this.addProbSols.includes('')) {
      this.addProbResult = {success: false, msg: 'Failed to add problem. Can\'t have empty choice.'};
      this.spinnerService.stopLoader('addProbSubmitLoader');
      return;
    }
    if (this.addProbSol === undefined) {
      this.addProbResult = {success: false, msg: 'Failed to add problem. Please select the correct solution.'};
      this.spinnerService.stopLoader('addProbSubmitLoader');
      return;
    }
    const category = ['cpp', this.addProbDiff];
    if (this.categoryDCL) {
      category.push('DCL');
    }
    if (this.categoryEXP) {
      category.push('EXP');
    }
    if (this.categoryINT) {
      category.push('INT');
    }
    if (this.categoryCTR) {
      category.push('CTR');
    }
    if (this.categorySTR) {
      category.push('STR');
    }
    if (this.categoryMEM) {
      category.push('MEM');
    }
    if (this.categoryFIO) {
      category.push('FIO');
    }
    if (this.categoryERR) {
      category.push('ERR');
    }
    if (this.categoryOOP) {
      category.push('OOP');
    }
    if (this.categoryCON) {
      category.push('CON');
    }
    if (this.categoryMSC) {
      category.push('MSC');
    }
    const problemInfo: any = {
      name: this.addProbName,
      difficulty: this.addProbDiff,
      points: Number(this.addProbPoints.trim()),
      category: category,
      paragraph: this.addProbParagraph,
      type: 'close',
      solutions: this.addProbSols,
      solution: this.addProbSol[0]
    };
    if (this.addProbCode.trim()) {
      problemInfo.code = this.addProbCode;
    }
    this.problemService.addClosedProblem(problemInfo).subscribe((resp) => {
      this.addProbResult = resp;
      if (resp.success) {
        this.getAllInfo();
      }
      this.spinnerService.stopLoader('addProbSubmitLoader');
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
    this.removeResult = undefined;
  }

  onClickAddProblem(name) {
    this.removeResult = undefined;
    this.selected.name = name;
  }

  onClickProblems(name) {
    this.selected.name = name;
    this.selectedProblem = undefined;
    this.removeResult = undefined;
  }

  onClickCategory(name) {
    this.removeResult = undefined;
    this.doGetCategory(name);
  }

  doGetCategory(name) {
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

  changeUserSearchFocus() {
    this.isUserSearchInFocus = !this.isUserSearchInFocus;
  }

  changeUserSearchHover() {
    this.isHoveringUserSearch = !this.isHoveringUserSearch;
  }

  changeProblemSearchFocus() {
    this.isProblemSearchInFocus = !this.isProblemSearchInFocus;
  }

  changeProblemSearchHover() {
    this.isHoveringProblemSearch = !this.isHoveringProblemSearch;
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
    window.scroll({
      top: 2000,
      behavior: 'smooth'
    });
    this.spinnerService.startLoader('removeProbLoader');
    this.problemService.removeProblem(problem.name).subscribe((result) => {
      this.removeResult = result;
      this.getAllInfo();
      if (this.selected.name === 'Problem Statistics') {
      } else {
        this.doGetCategory(this.selected.name);
      }
      this.spinnerService.stopLoader('removeProbLoader');
    });
  }

  onClickRemoveUser(user: User) {
    window.scroll({
      top: 2000,
      behavior: 'smooth'
    });
    this.spinnerService.startLoader('removeUserLoader');
    this.authService.removeUser(user.username).subscribe((result) => {
      this.removeResult = result;
      this.getAllInfo();
      this.spinnerService.stopLoader('removeUserLoader');
    });
  }

  ngOnInit() {
    this.getAllInfo();
    this.clickedGeneral = false;
    this.clickedCategories = false;
    this.selected = {};
    this.displayedProblems = [];
    this.displayOrder = 'Number of attempts';

    this.isHoveringUserSearch = false;
    this.isUserSearchInFocus = false;
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

    this.isHoveringProblemSearch = false;
    this.isProblemSearchInFocus = false;
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

    // Adding problem part initialization
    this.addProbName = '';
    this.addProbPoints = '';
    this.addProbDiff = 'Easy';
    this.categoryDCL = false;
    this.categoryEXP = false;
    this.categoryINT = false;
    this.categoryCTR = false;
    this.categorySTR = false;
    this.categoryMEM = false;
    this.categoryFIO = false;
    this.categoryERR = false;
    this.categoryOOP = false;
    this.categoryCON = false;
    this.categoryMSC = false;
    this.addProbParagraph = '';
    this.addProbCode = '';
    this.addProbSolCount = [0, 1, 2, 3];
    this.addProbSols = ['Choice 1', 'Choice 2', 'Choice 3', 'Choice 4'];
  }
}


function matchExactRegEx(r, str) {
  const match = str.match(r);
  return match && str === match[0];
}
