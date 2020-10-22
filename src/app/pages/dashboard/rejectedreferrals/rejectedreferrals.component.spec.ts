import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedreferralsComponent } from './rejectedreferrals.component';

describe('RejectedreferralsComponent', () => {
  let component: RejectedreferralsComponent;
  let fixture: ComponentFixture<RejectedreferralsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejectedreferralsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectedreferralsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
