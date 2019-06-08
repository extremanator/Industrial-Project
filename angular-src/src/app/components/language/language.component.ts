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
      if(filters.difficulties.includes('medium'))
        this.filterMedium = true;
      if(filters.difficulties.includes('hard'))
        this.filterHard = true;
      if(filters.categories.includes('DCL'))
        this.filterDCL = true;
      if(filters.categories.includes('EXP'))
        this.filterEXP = true;
      if(filters.categories.includes('INT'))
        this.filterINT = true;
      this.getLanguageProblems(routeParams.language, filters);
    });
  }

}
