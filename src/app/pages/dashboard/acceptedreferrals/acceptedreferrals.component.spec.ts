import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedreferralsComponent } from './acceptedreferrals.component';

describe('AcceptedreferralsComponent', () => {
  let component: AcceptedreferralsComponent;
  let fixture: ComponentFixture<AcceptedreferralsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptedreferralsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptedreferralsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
