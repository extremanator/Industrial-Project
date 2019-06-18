import { Component, OnInit } from '@angular/core';
import { TestService } from '../../services/test.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  filterDCL: boolean;
  filterINT: boolean;
  filterEXP: boolean;
  filterCTR: boolean;
  filterSTR: boolean;
  filterMEM: boolean;
  filterFIO: boolean;
  filterERR: boolean;
  filterOOP: boolean;
  filterCON: boolean;
  filterMSC: boolean;
  numProblems: number;

  constructor(private testService: TestService,
              private router: Router) { }

  startTest() {
    const filters = [];
    if (this.filterDCL) {
      filters.push('DCL');
    }
    if (this.filterINT) {
      filters.push('INT');
    }
    if (this.filterEXP) {
      filters.push('EXP');
    }
    if (this.filterCTR) {
      filters.push('CTR');
    }
    if (this.filterSTR) {
      filters.push('STR');
    }
    if (this.filterMEM) {
      filters.push('MEM');
    }
    if (this.filterFIO) {
      filters.push('FIO');
    }
    if (this.filterERR) {
      filters.push('ERR');
    }
    if (this.filterOOP) {
      filters.push('OOP');
    }
    if (this.filterCON) {
      filters.push('CON');
    }
    if (this.filterMSC) {
      filters.push('MSC');
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
