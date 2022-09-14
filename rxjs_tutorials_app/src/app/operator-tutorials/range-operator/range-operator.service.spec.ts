/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RangeOperatorService } from './range-operator.service';

describe('Service: RangeOperator', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RangeOperatorService]
    });
  });

  it('should ...', inject([RangeOperatorService], (service: RangeOperatorService) => {
    expect(service).toBeTruthy();
  }));
});
