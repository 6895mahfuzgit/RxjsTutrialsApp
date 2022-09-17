/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SubjectRxjsService } from './subject-rxjs.service';

describe('Service: SubjectRxjs', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubjectRxjsService]
    });
  });

  it('should ...', inject([SubjectRxjsService], (service: SubjectRxjsService) => {
    expect(service).toBeTruthy();
  }));
});
