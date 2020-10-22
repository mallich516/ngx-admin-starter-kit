import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewreferralComponent } from './viewreferral.component';

describe('ViewreferralComponent', () => {
  let component: ViewreferralComponent;
  let fixture: ComponentFixture<ViewreferralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewreferralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewreferralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
