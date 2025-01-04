import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UqrPage } from './uqr.page';

describe('UqrPage', () => {
  let component: UqrPage;
  let fixture: ComponentFixture<UqrPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UqrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
