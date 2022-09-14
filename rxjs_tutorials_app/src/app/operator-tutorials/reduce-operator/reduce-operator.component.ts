import { Component, OnInit } from '@angular/core';
import { of, reduce } from 'rxjs';

@Component({
  selector: 'app-reduce-operator',
  templateUrl: './reduce-operator.component.html',
  styleUrls: ['./reduce-operator.component.css']
})
export class ReduceOperatorComponent implements OnInit {


  numbars$=of(1,2,3,4,5,6,7,8,9,10);
  totalSum$=this.numbars$.pipe(reduce((a,c)=>a+c));

  constructor() { }

  ngOnInit() {
    this.totalSum$.subscribe(console.log);
  }

}
