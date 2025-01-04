import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilteredMovementsPage } from './filtered-movements.page';

describe('FilteredMovementsPage', () => {
  let component: FilteredMovementsPage;
  let fixture: ComponentFixture<FilteredMovementsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteredMovementsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
