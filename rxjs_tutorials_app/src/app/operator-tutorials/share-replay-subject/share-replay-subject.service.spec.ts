/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ShareReplaySubjectService } from './share-replay-subject.service';

describe('Service: ShareReplaySubject', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShareReplaySubjectService]
    });
  });

  it('should ...', inject([ShareReplaySubjectService], (service: ShareReplaySubjectService) => {
    expect(service).toBeTruthy();
  }));
});
