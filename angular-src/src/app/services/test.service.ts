import { Injectable } from '@angular/core';
import { Problem } from "../problem";

@Injectable({
  providedIn: 'root'
})
export class TestService {
  takingTest: boolean;
  num_problems: number;
  filters: Array<string>;

  constructor() { }

  beginTest(num_problems: number, filters: Array<string>){
    this.takingTest = true;
    this.num_problems = num_problems;
    this.filters = filters;
  }

  getNumProblems(): number{
    return this.num_problems;
  }

  getFilters(): Array<string>{
    return this.filters;
  }

  isTakingTest(){
    return (this.takingTest === true);
  }
}
