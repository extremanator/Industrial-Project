import { Component, OnInit } from '@angular/core';
import { TestService } from "../../services/test.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  filterDCL: boolean;
  filterINT: boolean;
  filterEXP: boolean;
  numProblems: number;

  constructor(private testService: TestService,
              private router: Router) { }

  startTest(){
    let filters = [];
    if (this.filterDCL){
      filters.push('DCL');
    }
    if (this.filterINT){
      filters.push('INT');
    }
    if (this.filterEXP){
      filters.push('EXP');
    }
    this.testService.beginTest(this.numProblems, filters);
    this.router.navigate(['/test/problem']);
  }

  ngOnInit() {
    this.filterDCL = false;
    this.filterINT = false;
    this.filterEXP = false;
    this.numProblems = 10;
  }

}
