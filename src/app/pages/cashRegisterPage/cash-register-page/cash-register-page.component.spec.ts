import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashRegisterPageComponent } from './cash-register-page.component';

describe('CashRegisterPageComponent', () => {
  let component: CashRegisterPageComponent;
  let fixture: ComponentFixture<CashRegisterPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CashRegisterPageComponent]
    });
    fixture = TestBed.createComponent(CashRegisterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
