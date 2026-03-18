import { ComponentFixture, TestBed } from '@angular/core/testing';

import {HidratacaoComponent } from './hidratacao';

describe('Hidratacao', () => {
  let component:  HidratacaoComponent;
  let fixture: ComponentFixture< HidratacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HidratacaoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent( HidratacaoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
