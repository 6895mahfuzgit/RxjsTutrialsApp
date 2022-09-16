import { Component, OnInit } from '@angular/core';
import { concat, endWith, interval, startWith, take, tap } from 'rxjs';

@Component({
  selector: 'app-concat-operator',
  templateUrl: './concat-operator.component.html',
  styleUrls: ['./concat-operator.component.css']
})
export class ConcatOperatorComponent implements OnInit {


  interval1$=interval(1000).pipe(take(2))
  interval2$=interval(1000).pipe(take(4))

  result$=concat(this.interval1$.pipe(startWith('First interval started'),endWith('First interval ended')),this.interval2$.pipe(startWith('2nd interval started'),endWith('2nd interval ended')));

  constructor() { }

  ngOnInit() {
    this.result$.subscribe(console.log);
  }

}
