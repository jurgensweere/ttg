import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAnomalyComponent } from './card-anomaly.component';

describe('CardAnomalyComponent', () => {
  let component: CardAnomalyComponent;
  let fixture: ComponentFixture<CardAnomalyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardAnomalyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAnomalyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
