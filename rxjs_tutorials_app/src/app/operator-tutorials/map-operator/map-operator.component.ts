import { Component, OnInit } from '@angular/core';
import { fromEvent, map, mapTo, Observable, of, pluck } from 'rxjs';

@Component({
  selector: 'app-map-operator',
  templateUrl: './map-operator.component.html',
  styleUrls: ['./map-operator.component.css']
})
export class MapOperatorComponent implements OnInit {

  numbers$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
  event$ = fromEvent(document, 'keyup');
  currentEvent$!:Observable<any>;

  constructor() { }

  ngOnInit() {
    this.numbers$.pipe(map(n => n * 10)).subscribe(console.log);
    this.currentEvent$=this.event$.pipe(pluck('code'));
  }

}
