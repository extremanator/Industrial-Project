import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeProblemComponent } from './code-problem.component';

describe('CodeProblemComponent', () => {
  let component: CodeProblemComponent;
  let fixture: ComponentFixture<CodeProblemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeProblemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
