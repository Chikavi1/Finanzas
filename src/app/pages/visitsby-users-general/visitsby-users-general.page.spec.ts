import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VisitsbyUsersGeneralPage } from './visitsby-users-general.page';

describe('VisitsbyUsersGeneralPage', () => {
  let component: VisitsbyUsersGeneralPage;
  let fixture: ComponentFixture<VisitsbyUsersGeneralPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitsbyUsersGeneralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
