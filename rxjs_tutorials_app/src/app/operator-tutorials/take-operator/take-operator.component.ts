import { Component, OnInit } from '@angular/core';
import { fromEvent, Subject, tap,Observable, takeUntil, take } from 'rxjs';

@Component({
  selector: 'app-take-operator',
  templateUrl: './take-operator.component.html',
  styleUrls: ['./take-operator.component.css']
})
export class TakeOperatorComponent implements OnInit {

  inActive$ = new Subject<boolean>();
  click$ = fromEvent(document, 'click') as Observable<PointerEvent>;

  constructor() { }

  ngOnInit() {
    //take first click the comlpete
    this.click$.pipe(
      take(5),
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
