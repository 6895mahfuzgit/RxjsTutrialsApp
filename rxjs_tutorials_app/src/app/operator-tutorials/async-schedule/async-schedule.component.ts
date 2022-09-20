import { Component, OnInit } from '@angular/core';
import { asyncScheduler, observeOn, of, subscribeOn, tap } from 'rxjs';

@Component({
  selector: 'app-async-schedule',
  templateUrl: './async-schedule.component.html',
  styleUrls: ['./async-schedule.component.css']
})
export class AsyncScheduleComponent implements OnInit {

  numbers1$=of(1,2,3,4,5).pipe(tap(x=>console.log('observeOn tap :-',x)),
                                observeOn(asyncScheduler));
  numbers2$=of(1,2,3,4,5).pipe(tap(x=>console.log('subscribeOn tap :-',x)),
                                 subscribeOn(asyncScheduler));

  constructor() { }

  ngOnInit() {
    console.log('observeOn start');
    this.numbers1$.subscribe(console.log);
    console.log('observeOn end');
    console.log('subscribeOn start');
    this.numbers2$.subscribe(console.log);
    console.log('subscribeOn end');
  }

}
