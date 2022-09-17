/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ShareOperatorService } from './share-operator.service';

describe('Service: ShareOperator', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShareOperatorService]
    });
  });

  it('should ...', inject([ShareOperatorService], (service: ShareOperatorService) => {
    expect(service).toBeTruthy();
  }));
});
