import { Component, OnInit } from '@angular/core';
import { from, Subject } from 'rxjs';

@Component({
  selector: 'app-from-operator',
  templateUrl: './from-operator.component.html',
  styleUrls: ['./from-operator.component.css']
})
export class FromOperatorComponent implements OnInit {

  
  items$=from([1,'mahfuz',{'name':'shazol'},4,5,6,7,8,9,10]);

  constructor() { }

  ngOnInit() {
    this.items$.subscribe(console.log);
  }

}
