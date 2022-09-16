import { Component, OnInit } from '@angular/core';
import { exhaustMap, fromEvent, interval, startWith, take, tap } from 'rxjs';

@Component({
  selector: 'app-exhast-map',
  templateUrl: './exhast-map.component.html',
  styleUrls: ['./exhast-map.component.css']
})
export class ExhastMapComponent implements OnInit {

 
  clicks$ = fromEvent(document, 'click');
  result$ = this.clicks$.pipe(
   tap(()=>console.log('started')), 
   startWith(1),
   exhaustMap(ev => interval(1000).pipe(take(4)))
 );
 

 constructor() { }

 ngOnInit() {
   this.result$.subscribe(x => console.log(x));
 }

}
