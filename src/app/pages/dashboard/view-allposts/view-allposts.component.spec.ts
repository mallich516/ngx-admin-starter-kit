import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllpostsComponent } from './view-allposts.component';

describe('ViewAllpostsComponent', () => {
  let component: ViewAllpostsComponent;
  let fixture: ComponentFixture<ViewAllpostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllpostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllpostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
