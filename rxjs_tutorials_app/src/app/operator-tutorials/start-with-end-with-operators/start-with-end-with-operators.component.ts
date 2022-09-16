import { Component, OnInit } from '@angular/core';
import { endWith, of, startWith } from 'rxjs';

@Component({
  selector: 'app-start-with-end-with-operators',
  templateUrl: './start-with-end-with-operators.component.html',
  styleUrls: ['./start-with-end-with-operators.component.css']
})
export class StartWithEndWithOperatorsComponent implements OnInit {


  numbers$=of(1,2,3,4);

  constructor() { }

  ngOnInit() {
    this.numbers$.pipe(startWith('a','b'),endWith('x','y')).subscribe(console.log);
  }

}
