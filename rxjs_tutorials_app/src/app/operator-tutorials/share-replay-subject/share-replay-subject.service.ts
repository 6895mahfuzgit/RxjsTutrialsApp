import { Injectable } from '@angular/core';
import { ReplaySubject, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareReplaySubjectService {

  // all subscriber take last 1 value
  private numbersSubject = new ReplaySubject(1);
  $numbers = this.numbersSubject.asObservable();

  constructor() { }

  changeNumbers(no: number) {
    this.numbersSubject.next(no);
  }
}
