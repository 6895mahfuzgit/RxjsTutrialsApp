import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, fromEvent, Subject, takeUntil, takeWhile } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements OnInit,OnDestroy {

  clickEvent$ = fromEvent(document, 'click');
  keyupEvent$ = fromEvent(document, 'keyup');
  inActiveKeyupevent$=new BehaviorSubject<boolean>(true);
  inActiveClickevent$=new BehaviorSubject<boolean>(true);
  inActive$=new Subject<boolean>();
  eventData: Event={} as Event;

  constructor() { }
  
  ngOnInit() {
   
  }

  startKeyupOverableEvent() {
    this.inActiveKeyupevent$.next(false);
    this.keyupEvent$.pipe(takeWhile(()=>this.inActiveKeyupevent$.value==false),takeUntil(this.inActive$)).subscribe(data => {
      this.eventData = data;
    });
  }

  stopKeyupOverableEvent(){
    this.eventData={} as Event;
    this.inActiveKeyupevent$.next(true);
  }
 

  startObserableClickEvent() {
    this.inActiveClickevent$.next(false);
    this.clickEvent$.pipe(takeWhile(()=>this.inActiveClickevent$.value==false),takeUntil(this.inActive$)).subscribe(data => {
      this.eventData = data;
    });
  }
  
  stopObserableClickEvent(){
    this.eventData={} as Event;
    this.inActiveClickevent$.next(true);
  }

  ngOnDestroy(): void {
    this.inActive$.next(true);
    this.inActive$.unsubscribe();
  }

}
