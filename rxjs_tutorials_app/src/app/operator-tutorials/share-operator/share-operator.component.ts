import { Component, OnInit } from '@angular/core';
import { startWith } from 'rxjs';
import { ShareOperatorService } from './share-operator.service';

@Component({
  selector: 'app-share-operator',
  templateUrl: './share-operator.component.html',
  styleUrls: ['./share-operator.component.css']
})
export class ShareOperatorComponent implements OnInit {

  constructor(private shareOperatorService:ShareOperatorService) { }

  ngOnInit() {
    this.shareOperatorService.posts$.pipe(startWith('1')).subscribe(console.log);
    this.shareOperatorService.posts$.pipe(startWith('2')).subscribe(console.log);
    this.shareOperatorService.posts$.pipe(startWith('3')).subscribe(console.log);
  }

}
