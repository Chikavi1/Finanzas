import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecurrentPage } from './recurrent.page';

describe('RecurrentPage', () => {
  let component: RecurrentPage;
  let fixture: ComponentFixture<RecurrentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecurrentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
