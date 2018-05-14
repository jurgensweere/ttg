import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscarderComponent } from './discarder.component';

describe('DiscarderComponent', () => {
  let component: DiscarderComponent;
  let fixture: ComponentFixture<DiscarderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscarderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscarderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
