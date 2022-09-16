/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ConcatMapComponent } from './concat-map.component';

describe('ConcatMapComponent', () => {
  let component: ConcatMapComponent;
  let fixture: ComponentFixture<ConcatMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcatMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcatMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
