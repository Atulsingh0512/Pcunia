import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanmanagementComponent } from './loanmanagement.component';

describe('LoanmanagementComponent', () => {
  let component: LoanmanagementComponent;
  let fixture: ComponentFixture<LoanmanagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoanmanagementComponent]
    });
    fixture = TestBed.createComponent(LoanmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
