import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPlanetComponent } from './card-planet.component';

describe('CardPlanetComponent', () => {
  let component: CardPlanetComponent;
  let fixture: ComponentFixture<CardPlanetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPlanetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPlanetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
