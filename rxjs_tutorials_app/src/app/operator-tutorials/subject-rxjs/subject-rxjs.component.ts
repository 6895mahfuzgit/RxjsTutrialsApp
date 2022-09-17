import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil, VirtualTimeScheduler } from 'rxjs';
import { SubjectRxjsService } from './_services/subject-rxjs.service';

@Component({
  selector: 'app-subject-rxjs',
  templateUrl: './subject-rxjs.component.html',
  styleUrls: ['./subject-rxjs.component.css']
})
export class SubjectRxjsComponent implements OnInit, OnDestroy {
  load$!: Observable<boolean>;
  posts$!: Observable<any[]>;
  inActive$ = new Subject<boolean>();

  posts: any[] = [];
  constructor(private service: SubjectRxjsService) { }

  ngOnInit() {
    this.load$ = this.service.load$.pipe(takeUntil(this.inActive$));
    this.posts$ = this.service.posts$.pipe(takeUntil(this.inActive$));
  }

  loadData() {
    this.posts$.subscribe(data => {
      console.log(data);
      this.posts = data;
    });
  }

  clearData() {
    this.posts = [];
  }

  ngOnDestroy(): void {
    this.inActive$.next(true);
    this.inActive$.unsubscribe();
  }

}
