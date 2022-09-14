import { Component, OnInit } from '@angular/core';
import { filter, fromEvent, map, pluck } from 'rxjs';

@Component({
  selector: 'app-filter-operator',
  templateUrl: './filter-operator.component.html',
  styleUrls: ['./filter-operator.component.css']
})
export class FilterOperatorComponent implements OnInit {


  events$=fromEvent(document,'keyup').pipe(pluck('code'));
  enterKey$=this.events$.pipe(filter(x=>x=='Enter' || x=='Space' ))
  constructor() { }

  ngOnInit() {
  }

}
