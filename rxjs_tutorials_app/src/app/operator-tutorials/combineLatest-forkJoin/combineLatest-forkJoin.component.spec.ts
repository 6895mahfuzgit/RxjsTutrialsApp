/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CombineLatestForkJoinComponent } from './combineLatest-forkJoin.component';

describe('CombineLatestForkJoinComponent', () => {
  let component: CombineLatestForkJoinComponent;
  let fixture: ComponentFixture<CombineLatestForkJoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombineLatestForkJoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombineLatestForkJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
