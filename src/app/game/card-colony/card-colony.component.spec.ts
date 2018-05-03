import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardColonyComponent } from './card-colony.component';

describe('CardColonyComponent', () => {
  let component: CardColonyComponent;
  let fixture: ComponentFixture<CardColonyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardColonyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardColonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
