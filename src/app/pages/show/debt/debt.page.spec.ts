import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebtPage } from './debt.page';

describe('DebtPage', () => {
  let component: DebtPage;
  let fixture: ComponentFixture<DebtPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DebtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
