import { Component, OnInit } from '@angular/core';
import { SharedRaplayOperatorService } from './shared-raplay-operator.service';

@Component({
  selector: 'app-shared-replay-operator',
  templateUrl: './shared-replay-operator.component.html',
  styleUrls: ['./shared-replay-operator.component.css']
})
export class SharedReplayOperatorComponent implements OnInit {

  constructor(private service:SharedRaplayOperatorService) { }

  ngOnInit() {

    this.service.posts$.subscribe(data=>console.log('1st',data));
    this.service.posts$.subscribe(data=>console.log('2nd',data));
    this.service.posts$.subscribe(data=>console.log('3rd',data));
  }

}
