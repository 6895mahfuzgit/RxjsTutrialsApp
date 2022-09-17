/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SharedRaplayOperatorService } from './shared-raplay-operator.service';

describe('Service: SharedRaplayOperator', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SharedRaplayOperatorService]
    });
  });

  it('should ...', inject([SharedRaplayOperatorService], (service: SharedRaplayOperatorService) => {
    expect(service).toBeTruthy();
  }));
});
