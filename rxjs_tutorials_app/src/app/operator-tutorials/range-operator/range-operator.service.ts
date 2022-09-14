import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, concat, forkJoin, map, range, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RangeOperatorService {

  private startSubject = new BehaviorSubject<number>(1);
  start$ = this.startSubject.asObservable();

  private endSubject = new BehaviorSubject<number>(10);
  end$ = this.endSubject.asObservable();

  items$ = combineLatest([this.start$, this.end$]).pipe(switchMap(([startNo, endNo]) => {
    return range(startNo, endNo)
  }));

  constructor() { }

  changeStartRangeValue(no: number) {
    this.startSubject.next(no);
  }

  changeEndRangeValue(no: number) {
      this.endSubject.next(no);
  }

}
