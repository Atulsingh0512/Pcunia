import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditSlipComponent } from './credit-slip.component';

describe('CreditSlipComponent', () => {
  let component: CreditSlipComponent;
  let fixture: ComponentFixture<CreditSlipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreditSlipComponent]
    });
    fixture = TestBed.createComponent(CreditSlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
