import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { RangeOperatorService } from './range-operator.service';

@Component({
  selector: 'app-range-operator',
  templateUrl: './range-operator.component.html',
  styleUrls: ['./range-operator.component.css']
})
export class RangeOperatorComponent implements OnInit, OnDestroy {

  private inActive$ = new Subject<boolean>();
  items$!: Observable<number>;
  constructor(private rangeOperatorService: RangeOperatorService) { }

  ngOnInit() {
    this.items$ = this.rangeOperatorService.items$.pipe(takeUntil(this.inActive$));
    this.print();
  }

  print() {
    this.items$.pipe(takeUntil(this.inActive$)).subscribe(console.log);
  }

  startNo(e: any) {
    this.rangeOperatorService.changeStartRangeValue(+e.target.value);
  }

  endNo(e: any) {
    this.rangeOperatorService.changeEndRangeValue(+e.target.value);
  }

  ngOnDestroy(): void {
    this.rangeOperatorService.changeStartRangeValue(1);
    this.rangeOperatorService.changeEndRangeValue(10);
    this.inActive$.next(true);
    this.inActive$.unsubscribe();
  }
}
