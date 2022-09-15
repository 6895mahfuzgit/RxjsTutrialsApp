import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable, startWith, Subject, takeUntil, takeWhile, tap } from 'rxjs';

@Component({
  selector: 'app-take-while-operator',
  templateUrl: './take-while-operator.component.html',
  styleUrls: ['./take-while-operator.component.css']
})
export class TakeWhileOperatorComponent implements OnInit {

  inActive$ = new Subject<boolean>();
  click$ = fromEvent(document, 'click') as Observable<PointerEvent>;

  constructor() { }

  ngOnInit() {
    this.click$.pipe(
      takeWhile(v=>v.clientY<200),
      tap(event => console.log('X:', event.clientX, ' Y:', event.clientY)),
      takeUntil(this.inActive$)
    ).subscribe({
      complete:()=>console.log('Completed!')
    })
  }

  ngOnDestroy(): void {
    this.inActive$.next(true);
    this.inActive$.unsubscribe();
  }

}
