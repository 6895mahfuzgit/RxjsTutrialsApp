import { Injectable } from '@angular/core';
import { BehaviorSubject, fromEvent, switchMap, takeWhile } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FromEventService {

  private isActiveKeyupEventSubject = new BehaviorSubject<boolean>(false);
  isActiveKeyupEventStatus$ = this.isActiveKeyupEventSubject.asObservable();

  private isActiveClickEventSubject = new BehaviorSubject<boolean>(false);
  isActiveClickeventStatus$ = this.isActiveClickEventSubject.asObservable();

  private eventDataSubject = new BehaviorSubject<Event>({} as Event);
  eventData$ = this.eventDataSubject.asObservable();

  clickEvent$ = this.isActiveKeyupEventStatus$.pipe(switchMap(status => {
    return fromEvent(document, 'keyup').pipe(takeWhile(() => status == true))
  }));

  keyupEvent$ = this.isActiveClickeventStatus$.pipe(switchMap(status => {
    return fromEvent(document, 'click').pipe(takeWhile(() => status == true))
  }));

  constructor() {
  }

  changeEventData(event: Event) {
    this.eventDataSubject.next(event);
  }

  changeIsActiveKeyupeventStatus(isActive: boolean) {
    this.isActiveKeyupEventSubject.next(isActive);
  }

  changeIsActiveClickeventStatus(isActive: boolean) {
    this.isActiveClickEventSubject.next(isActive);
  }

  stopClickEvent() {
    this.changeEventData({} as Event);
    this.changeIsActiveClickeventStatus(false);
  }

  stopKeyupEvent() {
    this.changeEventData({} as Event);
    this.changeIsActiveKeyupeventStatus(false);
  }

  clearAllEventActionStatus() {
    this.changeIsActiveKeyupeventStatus(false);
    this.changeIsActiveClickeventStatus(false);
  }

}
