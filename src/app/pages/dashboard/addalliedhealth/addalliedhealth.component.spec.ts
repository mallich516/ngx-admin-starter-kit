import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddalliedhealthComponent } from './addalliedhealth.component';

describe('AddalliedhealthComponent', () => {
  let component: AddalliedhealthComponent;
  let fixture: ComponentFixture<AddalliedhealthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddalliedhealthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddalliedhealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
