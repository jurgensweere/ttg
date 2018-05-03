import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardShipComponent } from './card-ship.component';

describe('CardShipComponent', () => {
  let component: CardShipComponent;
  let fixture: ComponentFixture<CardShipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardShipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardShipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
