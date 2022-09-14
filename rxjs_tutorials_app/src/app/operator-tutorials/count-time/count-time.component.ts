import { Component, OnInit } from '@angular/core';
import { filter, interval, mapTo, of, scan, takeUntil, takeWhile } from 'rxjs';

@Component({
  selector: 'app-count-time',
  templateUrl: './count-time.component.html',
  styleUrls: ['./count-time.component.css']
})
export class CountTimeComponent implements OnInit {

  counter$ = interval(1000);
  count$ = this.counter$.pipe(
    mapTo(-1),
    scan((a, c) => {
      console.log(a, c);
      return a + c;
    }, 10),
    takeWhile(c => c >-1),
    filter(value => value >= 0),
  );

  constructor() { }

  ngOnInit() {
  }

}
