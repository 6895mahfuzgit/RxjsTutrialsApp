import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, Observable, Subject, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-tap-operator',
  templateUrl: './tap-operator.component.html',
  styleUrls: ['./tap-operator.component.css']
})
export class TapOperatorComponent implements OnInit, OnDestroy {

  inActive$ = new Subject<boolean>();
  click$ = fromEvent(document, 'click') as Observable<PointerEvent>;

  constructor() { }

  ngOnInit() {
    this.click$.pipe(
      tap(event => console.log('X:', event.clientX, ' Y:', event.clientY)),
      takeUntil(this.inActive$)
    ).subscribe()
  }

  ngOnDestroy(): void {
    this.inActive$.next(true);
    this.inActive$.unsubscribe();
  }
}
