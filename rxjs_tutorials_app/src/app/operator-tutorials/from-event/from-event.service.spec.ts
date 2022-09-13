/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FromEventService } from './from-event.service';

describe('Service: FromEvent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FromEventService]
    });
  });

  it('should ...', inject([FromEventService], (service: FromEventService) => {
    expect(service).toBeTruthy();
  }));
});
