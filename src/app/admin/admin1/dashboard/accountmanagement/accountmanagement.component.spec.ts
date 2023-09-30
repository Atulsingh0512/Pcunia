import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountManagementComponent } from './accountmanagement.component';

describe('AccountmanagementComponent', () => {
  let component: AccountManagementComponent;
  let fixture: ComponentFixture<AccountManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountManagementComponent]
    });
    fixture = TestBed.createComponent(AccountManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
