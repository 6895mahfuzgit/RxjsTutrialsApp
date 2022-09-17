import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, finalize, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectRxjsService {

  private loadSubject = new BehaviorSubject<boolean>(false);
  load$ = this.loadSubject.asObservable();

  posts$=this.httpClient.get<any[]>(`https://jsonplaceholder.typicode.com/posts`);

  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
  }

  changeLoadingValue(status: boolean) {
    this.loadSubject.next(status);
  }

}
