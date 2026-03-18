import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Desidratacao } from './desidratacao';

describe('Desidratacao', () => {
  let component: Desidratacao;
  let fixture: ComponentFixture<Desidratacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Desidratacao],
    }).compileComponents();

    fixture = TestBed.createComponent(Desidratacao);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
