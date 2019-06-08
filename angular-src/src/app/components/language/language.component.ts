import { Component, OnInit } from '@angular/core';
import { Problem } from "../../problem";
import { ProblemService } from "../../services/problem.service";
import { AuthService } from "../../services/auth.service";
import { ActivatedRoute, Router } from "@angular/router";

interface Filters {
  difficulties: Array<string>;
  categories: Array<string>;
}

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {
  language: string;
  routeLanguage: string;
  problems: Problem[];
  problemInfo: Map<string, {solved: boolean, dateSol: string}>;

  filterEasy: boolean;
  filterMedium: boolean;
  filterHard: boolean;
  filterDCL: boolean;
  filterEXP: boolean;
  filterINT: boolean;
  filterCTR: boolean;
  filterSTR: boolean;
  filterMEM: boolean;
  filterFIO: boolean;
  filterERR: boolean;
  filterOOP: boolean;
  filterCON: boolean;
  filterMSC: boolean;

  constructor(private problemService: ProblemService,
              private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute) { }

  getLanguageProblems(language: string, filters: Filters){
    this.problemService.getLanguageProblems(language).subscribe(problemsWrapper => {
      const temp = problemsWrapper.problems;
      this.problems = [];
      for (let problem of temp){
        let hasDifficulty = false;
        if (filters.difficulties.length === 0)
          hasDifficulty = true;
        else {
          for (let difficulty of filters.difficulties) {
            if (problem.category.includes(difficulty)) {
              hasDifficulty = true;
              break;
            }
          }
        }
        let hasCategory = false;
        if (filters.categories.length === 0)
          hasCategory = true;
        else {
          for (let category of filters.categories) {
            if (problem.category.includes(category)) {
              hasCategory = true;
              break;
            }
          }
        }
        if(hasCategory && hasDifficulty){
          this.problems.push(problem);
        }
      }
      this.problems.sort((obj1, obj2) => {
        return (obj1.name > obj2.name)?1:-1;
      });
      this.authService.getProfile().subscribe(profile => {
        const info = profile.user.attempted_problems;
        let temp_info: Map<string, {solved: boolean, dateSol: string}> = new Map();
        for (let problem of this.problems){
          if(info.hasOwnProperty(problem.name)){
            temp_info.set(problem.name, {solved: info[problem.name].solved , dateSol: info[problem.name].dateSol});
          } else {
            temp_info.set(problem.name, {solved: false, dateSol: 'TBD'});
          }
        }
        this.problemInfo = temp_info;
      });
    });
  }

  onClickProblem(problem_name: string){
    this.router.navigate([`/problems/${problem_name}`]);
  }

  updateFilter(){
    let filters = ":";
    if (this.filterEasy){
      filters += 'easy:';
    }
    if (this.filterMedium){
      filters += 'medium:';
    }
    if (this.filterHard){
      filters += 'hard:';
    }
    filters += ':';
    if (this.filterDCL){
      filters += 'DCL:';
    }
    if (this.filterEXP){
      filters += 'EXP:';
    }
    if (this.filterINT){
      filters += 'INT:';
    }
    if (this.filterCTR){
      filters += 'CTR:';
    }
    if (this.filterSTR){
      filters += 'STR:';
    }
    if (this.filterMEM){
      filters += 'MEM:';
    }
    if (this.filterFIO){
      filters += 'FIO:';
    }
    if (this.filterERR){
      filters += 'ERR:';
    }
    if (this.filterOOP){
      filters += 'OOP:';
    }
    if (this.filterCON){
      filters += 'CON:';
    }
    if (this.filterMSC){
      filters += 'MSC:';
    }
    this.router.navigate([`/language/${this.routeLanguage}/${filters}`]);
  }

  getFilters(filters: string): Filters{
    let difficulties = [];
    let i;
    while(filters[1] != ':'){
       i = filters.indexOf(':', 1);
       difficulties.push(filters.slice(1, i));
       filters = filters.slice(i, filters.length);
    }
    filters = filters.slice(1, filters.length);
    let categories = [];
    while(filters != ':'){
      i = filters.indexOf(':', 1);
      categories.push(filters.slice(1, i));
      filters = filters.slice(i, filters.length);
    }
    return {difficulties: difficulties, categories: categories};
  }

  ngOnInit() {
    this.problemInfo = null;
    this.route.params.subscribe(routeParams => {
      this.routeLanguage = routeParams.language;
      switch (routeParams.language){
        case 'cpp':
          this.language = 'C++';
          break;
        case 'java':
          this.language = 'Java';
          break;
        default:
          this.language = '';
          break;
      }
      const filters = this.getFilters(routeParams.filters);
      if(filters.difficulties.includes('easy'))
        this.filterEasy = true;
      else
        this.filterEasy = false;
      if(filters.difficulties.includes('medium'))
        this.filterMedium = true;
      else
        this.filterMedium = false;
      if(filters.difficulties.includes('hard'))
        this.filterHard = true;
      else
        this.filterHard = false;
      if(filters.categories.includes('DCL'))
        this.filterDCL = true;
      else
        this.filterDCL = false;
      if(filters.categories.includes('EXP'))
        this.filterEXP = true;
      else
        this.filterEXP = false;
      if(filters.categories.includes('INT'))
        this.filterINT = true;
      else
        this.filterINT = false;
      if(filters.categories.includes('CTR'))
        this.filterCTR = true;
      else
        this.filterCTR = false;
      if(filters.categories.includes('STR'))
        this.filterSTR = true;
      else
        this.filterSTR = false;
      if(filters.categories.includes('MEM'))
        this.filterMEM = true;
      else
        this.filterMEM = false;
      if(filters.categories.includes('FIO'))
        this.filterFIO = true;
      else
        this.filterFIO = false;
      if(filters.categories.includes('ERR'))
        this.filterERR = true;
      else
        this.filterERR = false;
      if(filters.categories.includes('OOP'))
        this.filterOOP = true;
      else
        this.filterOOP = false;
      if(filters.categories.includes('CON'))
        this.filterCON = true;
      else
        this.filterCON = false;
      if(filters.categories.includes('MSC'))
        this.filterMSC = true;
      else
        this.filterMSC = false;
      this.getLanguageProblems(routeParams.language, filters);
    });
  }

}
