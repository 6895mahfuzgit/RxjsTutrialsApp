import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, map, of, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css']
})
export class SwitchMapComponent implements OnInit {

  click$ = fromEvent(document, 'click');
  interval$ = interval(1000);
  
  actions$ = this.click$.pipe(tap((e) => console.log(e)), switchMap(() => this.interval$))

  letters$ = of('a', 'b', 'c');
  result$ = this.letters$.pipe(
    switchMap(x => interval(1000).pipe(map(i => x + i)))
  );

  constructor() { }

  ngOnInit() {
    this.actions$.subscribe(console.log);
   // this.result$.subscribe(console.log)
  }

}
