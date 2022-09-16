import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, map, mergeMap, of, range, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-merge-map-operator',
  templateUrl: './merge-map-operator.component.html',
  styleUrls: ['./merge-map-operator.component.css']
})
export class MergeMapOperatorComponent implements OnInit {

  click$ = fromEvent(document, 'click');
  interval$ = interval(1000);
  keyup$ = fromEvent(document, 'keyup');
  actions$ = this.click$.pipe(tap((e) => console.log(e)), mergeMap(() => this.interval$.pipe(takeUntil(this.keyup$))))

  letters$ = of('a', 'b', 'c');
  result$ = this.letters$.pipe(
    mergeMap(x => interval(1000).pipe(map(i => x + i), takeUntil(this.keyup$)))
  );

  constructor() { }

  ngOnInit() {
    this.actions$.subscribe(console.log);
    this.result$.subscribe(console.log)
  }

}

