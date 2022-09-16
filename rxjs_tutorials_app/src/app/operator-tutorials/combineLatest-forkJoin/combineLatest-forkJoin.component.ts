import { Component, OnInit } from '@angular/core';
import { combineLatest, forkJoin, of, timer } from 'rxjs';

@Component({
  selector: 'app-combineLatest-forkJoin',
  templateUrl: './combineLatest-forkJoin.component.html',
  styleUrls: ['./combineLatest-forkJoin.component.css']
})
export class CombineLatestForkJoinComponent implements OnInit {

   fork$ = forkJoin([
    of(1, 2, 3, 4),
    of(1, 2, 3, 4,6,7,8),
    of(1, 2, 3, 4,6,7,8,9)
  ]);

  combine$ = combineLatest([
    of(1, 2, 3, 4),
    of(1, 2, 3, 4,6,7,8),
    of(1, 2, 3, 4,6,7,8,9,10)
  ]);

  constructor() { }

  ngOnInit() {
   this.fork$.subscribe(data=>console.log('fork',data));
   this.combine$.subscribe(data=>console.log('combine',data));
  }

}
