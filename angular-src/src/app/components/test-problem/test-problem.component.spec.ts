import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestProblemComponent } from './test-problem.component';

describe('TestProblemComponent', () => {
  let component: TestProblemComponent;
  let fixture: ComponentFixture<TestProblemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestProblemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
