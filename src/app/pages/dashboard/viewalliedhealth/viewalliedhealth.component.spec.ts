import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewalliedhealthComponent } from './viewalliedhealth.component';

describe('ViewalliedhealthComponent', () => {
  let component: ViewalliedhealthComponent;
  let fixture: ComponentFixture<ViewalliedhealthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewalliedhealthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewalliedhealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
