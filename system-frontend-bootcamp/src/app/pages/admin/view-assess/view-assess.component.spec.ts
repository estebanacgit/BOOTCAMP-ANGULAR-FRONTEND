import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAssessComponent } from './view-assess.component';

describe('ViewAssessComponent', () => {
  let component: ViewAssessComponent;
  let fixture: ComponentFixture<ViewAssessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAssessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAssessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
