import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NetWorthPage } from './net-worth.page';

describe('NetWorthPage', () => {
  let component: NetWorthPage;
  let fixture: ComponentFixture<NetWorthPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NetWorthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
