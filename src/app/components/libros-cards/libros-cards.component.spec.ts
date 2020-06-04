import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosCardsComponent } from './libros-cards.component';

describe('LibrosCardsComponent', () => {
  let component: LibrosCardsComponent;
  let fixture: ComponentFixture<LibrosCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrosCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrosCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
