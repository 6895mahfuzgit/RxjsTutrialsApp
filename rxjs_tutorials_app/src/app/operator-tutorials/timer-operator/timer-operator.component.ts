import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-timer-operator',
  templateUrl: './timer-operator.component.html',
  styleUrls: ['./timer-operator.component.css']
})
export class TimerOperatorComponent implements OnInit {


  timer$=timer(1,1000);
  constructor() { }

  ngOnInit() {
  }

}
