import { Component, OnInit } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.css']
})
export class AsyncSubjectComponent implements OnInit {

  private textSubject = new AsyncSubject();
  text$ = this.textSubject.asObservable();

  constructor() { }

  ngOnInit() {
  }

  onTxtChange(e: any) {
    let txt = e.target.value;
    this.textSubject.next(txt);
    console.log(txt);
  }

  onComplete() {
    this.textSubject.complete();
  }

}
