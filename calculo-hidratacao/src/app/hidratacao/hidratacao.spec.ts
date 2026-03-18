import { ComponentFixture, TestBed } from '@angular/core/testing';

import {Hidratacao } from './hidratacao';

describe('Hidratacao', () => {
  let component:  Hidratacao;
  let fixture: ComponentFixture< Hidratacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ Hidratacao],
    }).compileComponents();

    fixture = TestBed.createComponent( Hidratacao);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
