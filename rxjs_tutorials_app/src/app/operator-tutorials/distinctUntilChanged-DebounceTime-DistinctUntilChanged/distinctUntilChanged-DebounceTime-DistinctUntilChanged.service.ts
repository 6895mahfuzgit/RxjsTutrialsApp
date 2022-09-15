import { Injectable } from '@angular/core';
import { BehaviorSubject, debounceTime, distinctUntilChanged, map, of, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DistinctUntilChangedDebounceTimeDistinctUntilChangedService {

  private searchTxtSubject = new BehaviorSubject<string>('');
  searchTxt$ = this.searchTxtSubject.asObservable();

  result$ = this.searchTxt$.pipe(
    distinctUntilChanged(),
    debounceTime(3000),
    tap(value => console.log(value)),
    switchMap(txt => `Searched for "${txt}"`));

  constructor() { }

  changeSaerchTxt(text: string) {
    this.searchTxtSubject.next(text);
  }
}


