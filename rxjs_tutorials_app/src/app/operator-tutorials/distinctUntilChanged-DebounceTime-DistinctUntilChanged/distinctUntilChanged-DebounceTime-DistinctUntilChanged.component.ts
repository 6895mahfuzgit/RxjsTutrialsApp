import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DistinctUntilChangedDebounceTimeDistinctUntilChangedService } from './distinctUntilChanged-DebounceTime-DistinctUntilChanged.service';

@Component({
  selector: 'app-distinctUntilChanged-DebounceTime-DistinctUntilChanged',
  templateUrl: './distinctUntilChanged-DebounceTime-DistinctUntilChanged.component.html',
  styleUrls: ['./distinctUntilChanged-DebounceTime-DistinctUntilChanged.component.css']
})
export class DistinctUntilChangedDebounceTimeDistinctUntilChangedComponent implements OnInit {
  result$!: Observable<string>;

  constructor(private service:DistinctUntilChangedDebounceTimeDistinctUntilChangedService) { }

  ngOnInit() {
    this.result$=this.service.result$;
  }


  onKeyup(event:any){
   this.service.changeSaerchTxt(event.target.value);
  }
}
