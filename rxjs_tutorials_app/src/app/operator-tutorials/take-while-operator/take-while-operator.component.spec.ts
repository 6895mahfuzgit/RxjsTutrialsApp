/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TakeWhileOperatorComponent } from './take-while-operator.component';

describe('TakeWhileOperatorComponent', () => {
  let component: TakeWhileOperatorComponent;
  let fixture: ComponentFixture<TakeWhileOperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeWhileOperatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeWhileOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
