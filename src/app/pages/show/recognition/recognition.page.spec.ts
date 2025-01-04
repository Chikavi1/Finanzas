import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecognitionPage } from './recognition.page';

describe('RecognitionPage', () => {
  let component: RecognitionPage;
  let fixture: ComponentFixture<RecognitionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecognitionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
