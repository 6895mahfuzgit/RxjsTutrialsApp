import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShareReplaySubjectService } from './share-replay-subject.service';

@Component({
  selector: 'app-share-replay-subject',
  templateUrl: './share-replay-subject.component.html',
  styleUrls: ['./share-replay-subject.component.css']
})
export class ShareReplaySubjectComponent implements OnInit {

  numbers1$!:Observable<any>;
  numbers2$!:Observable<any>;
  numbers3$!:Observable<any>;

  constructor(private service:ShareReplaySubjectService) { }

  ngOnInit() {
    this.numbers1$=this.service.$numbers;
    this.numbers2$=this.service.$numbers;
    this.numbers3$=this.service.$numbers;
    this.service.changeNumbers(1); 
    this.numbers1$.subscribe(data=>console.log('1st-: '+data));
    this.service.changeNumbers(2);
    this.numbers2$.subscribe(data=>console.log('2nd-: '+data));
    this.service.changeNumbers(3);
    this.numbers3$.subscribe(data=>console.log('3rd-: '+data));
   

  }

}
