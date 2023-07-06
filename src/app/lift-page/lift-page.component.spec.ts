import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiftPageComponent } from './lift-page.component';

describe('LiftPageComponent', () => {
  let component: LiftPageComponent;
  let fixture: ComponentFixture<LiftPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiftPageComponent]
    });
    fixture = TestBed.createComponent(LiftPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
