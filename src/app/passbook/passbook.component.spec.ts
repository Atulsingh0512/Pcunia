import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassbookComponent } from './passbook.component';

describe('PassbookComponent', () => {
  let component: PassbookComponent;
  let fixture: ComponentFixture<PassbookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PassbookComponent]
    });
    fixture = TestBed.createComponent(PassbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
