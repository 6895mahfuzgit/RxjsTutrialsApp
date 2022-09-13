import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, Observable, of, Subject, takeUntil } from 'rxjs';
import { FromEventService } from './from-event.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements OnInit, OnDestroy {
  clickEvent$!: Observable<Event>;
  keyupEvent$!: Observable<Event>;
  eventData$!: Observable<Event>;

  clickEventStatus$: Observable<boolean> = of(false);
  keyupEventStatus$: Observable<boolean> = of(false);
  inActive$ = new Subject<boolean>();
  constructor(private fromEventService: FromEventService) { }

  ngOnInit() {
    this.eventData$ = this.fromEventService.eventData$;
    this.clickEventStatus$ = this.fromEventService.isActiveClickeventStatus$;
    this.keyupEventStatus$ = this.fromEventService.isActiveKeyupEventStatus$;
    this.fromEventService.clickEvent$.pipe(takeUntil(this.inActive$)).subscribe(data => { this.fromEventService.changeEventData(data) });
    this.fromEventService.keyupEvent$.pipe(takeUntil(this.inActive$)).subscribe(data => { this.fromEventService.changeEventData(data) });
  }

  startClickEvent() {
    this.fromEventService.changeIsActiveClickeventStatus(true);
  }

  stopClickEvent() {
    this.fromEventService.changeIsActiveClickeventStatus(false);
  }

  startKeyupEvent() {
    this.fromEventService.changeIsActiveKeyupeventStatus(true);
  }

  stopKeyupEvent() {
    this.fromEventService.stopKeyupEvent();
  }

  ngOnDestroy(): void {
    this.fromEventService.changeEventData({} as Event);
    this.fromEventService.clearAllEventActionStatus();
    this.inActive$.next(true);
    this.inActive$.unsubscribe();
  }

}
