import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeAssignmentComponent } from './practice-assignment.component';

describe('PracticeAssignmentComponent', () => {
  let component: PracticeAssignmentComponent;
  let fixture: ComponentFixture<PracticeAssignmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PracticeAssignmentComponent]
    });
    fixture = TestBed.createComponent(PracticeAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
