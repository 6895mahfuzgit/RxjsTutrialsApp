/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StartWithEndWithOperatorsComponent } from './start-with-end-with-operators.component';

describe('StartWithEndWithOperatorsComponent', () => {
  let component: StartWithEndWithOperatorsComponent;
  let fixture: ComponentFixture<StartWithEndWithOperatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartWithEndWithOperatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartWithEndWithOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
