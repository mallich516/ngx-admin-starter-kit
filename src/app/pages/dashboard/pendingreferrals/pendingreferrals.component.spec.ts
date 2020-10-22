import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingreferralsComponent } from './pendingreferrals.component';

describe('PendingreferralsComponent', () => {
  let component: PendingreferralsComponent;
  let fixture: ComponentFixture<PendingreferralsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingreferralsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingreferralsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
