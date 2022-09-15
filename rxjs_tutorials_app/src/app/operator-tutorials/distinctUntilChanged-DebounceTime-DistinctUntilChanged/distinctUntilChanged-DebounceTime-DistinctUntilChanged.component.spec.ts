/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DistinctUntilChangedDebounceTimeDistinctUntilChangedComponent } from './distinctUntilChanged-DebounceTime-DistinctUntilChanged.component';

describe('DistinctUntilChangedDebounceTimeDistinctUntilChangedComponent', () => {
  let component: DistinctUntilChangedDebounceTimeDistinctUntilChangedComponent;
  let fixture: ComponentFixture<DistinctUntilChangedDebounceTimeDistinctUntilChangedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistinctUntilChangedDebounceTimeDistinctUntilChangedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistinctUntilChangedDebounceTimeDistinctUntilChangedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
