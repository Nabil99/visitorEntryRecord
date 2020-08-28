import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorLogListComponent } from './visitor-log-list.component';

describe('VisitorLogListComponent', () => {
  let component: VisitorLogListComponent;
  let fixture: ComponentFixture<VisitorLogListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorLogListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorLogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
