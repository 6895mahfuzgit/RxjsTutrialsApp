import { Component, OnInit } from '@angular/core';
import { endWith, interval, merge, startWith, take } from 'rxjs';

@Component({
  selector: 'app-merge-operator',
  templateUrl: './merge-operator.component.html',
  styleUrls: ['./merge-operator.component.css']
})
export class MergeOperatorComponent implements OnInit {

  
  interval1$=interval(1000).pipe(take(2))
  interval2$=interval(1000).pipe(take(4))

  result$=merge(this.interval1$.pipe(startWith('First interval started'),endWith('First interval ended')),this.interval2$.pipe(startWith('2nd interval started'),endWith('2nd interval ended')));

  constructor() { }

  ngOnInit() {
    this.result$.subscribe(console.log);
  }

}
