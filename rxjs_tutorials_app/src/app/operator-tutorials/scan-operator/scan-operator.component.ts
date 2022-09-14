import { Component, OnInit } from '@angular/core';
import {  of, scan } from 'rxjs';

@Component({
  selector: 'app-scan-operator',
  templateUrl: './scan-operator.component.html',
  styleUrls: ['./scan-operator.component.css']
})
export class ScanOperatorComponent implements OnInit {

  numbars$=of(1,2,3,4,5,6,7,8,9,10);
  totalSum$=this.numbars$.pipe(scan((a,c)=>{return a+c},0));

  constructor() { }
 
  ngOnInit() {
    this.totalSum$.subscribe(console.log);
  }

}
