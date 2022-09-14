/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OfOperatorService } from './of-operator.service';

describe('Service: OfOperator', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OfOperatorService]
    });
  });

  it('should ...', inject([OfOperatorService], (service: OfOperatorService) => {
    expect(service).toBeTruthy();
  }));
});
