import { Component, OnInit } from '@angular/core';
import { concatMap, fromEvent, interval, take } from 'rxjs';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.css']
})
export class ConcatMapComponent implements OnInit {

   clicks$ = fromEvent(document, 'click');
   result$ = this.clicks$.pipe(
    concatMap(ev => interval(1000).pipe(take(2)))
  );
  

  constructor() { }

  ngOnInit() {
    this.result$.subscribe(x => console.log(x));
  }

}
