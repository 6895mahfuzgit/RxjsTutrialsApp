import { Component, OnDestroy, OnInit } from '@angular/core';
import { combineLatest, forkJoin, of, Subject, takeUntil, timer } from 'rxjs';

@Component({
  selector: 'app-combineLatest-forkJoin',
  templateUrl: './combineLatest-forkJoin.component.html',
  styleUrls: ['./combineLatest-forkJoin.component.css']
})
export class CombineLatestForkJoinComponent implements OnInit,OnDestroy {

  inActive$=new Subject<boolean>();

   fork$ = forkJoin([
    of(1, 2, 3, 4),
    of(1, 2, 3, 4,6,7,8),
    of(1, 2, 3, 4,6,7,8,9)
  ]).pipe(takeUntil(this.inActive$));

  combine$ = combineLatest([
    of(1, 2, 3, 4),
    of(1, 2, 3, 4,6,7,8),
    of(1, 2, 3, 4,6,7,8,9,10)
  ]).pipe(takeUntil(this.inActive$));

  constructor() { }
  
  ngOnInit() {
   this.fork$.subscribe(data=>console.log('fork',data));
   this.combine$.subscribe(data=>console.log('combine',data));
  }
  ngOnDestroy(): void {
    this.inActive$.next(true);
    this.inActive$.unsubscribe();
  }

}
