import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { OfOperatorService } from './of-operator.service';

@Component({
  selector: 'app-of-operator',
  templateUrl: './of-operator.component.html',
  styleUrls: ['./of-operator.component.css']
})
export class OfOperatorComponent implements OnInit {

  items:any[]=[];
  constructor(private ofOperatorService:OfOperatorService) { }

  ngOnInit() {
    this.ofOperatorService.getItems().subscribe(data=>{
      this.items.push(data);
    });
  }

}
