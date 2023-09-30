import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitSlipComponent } from './debit-slip.component';

describe('DebitSlipComponent', () => {
  let component: DebitSlipComponent;
  let fixture: ComponentFixture<DebitSlipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DebitSlipComponent]
    });
    fixture = TestBed.createComponent(DebitSlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
