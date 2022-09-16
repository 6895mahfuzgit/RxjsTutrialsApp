/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ExhastMapComponent } from './exhast-map.component';

describe('ExhastMapComponent', () => {
  let component: ExhastMapComponent;
  let fixture: ComponentFixture<ExhastMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExhastMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhastMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
