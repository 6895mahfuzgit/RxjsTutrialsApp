import { Component, OnInit } from '@angular/core';
import { partition, range } from 'rxjs';

@Component({
  selector: 'app-partition-example',
  templateUrl: './partition-example.component.html',
  styleUrls: ['./partition-example.component.css']
})
export class PartitionExampleComponent implements OnInit {

  numbers$=range(1,100);

  constructor() { }

  ngOnInit() {

     const [eventNumbers$,oddNumbers$]=partition(this.numbers$,value=>value%2==0);

     console.log('Even Number(s)');
     eventNumbers$.subscribe(console.log);

     console.log('Odd Number(s)');
     oddNumbers$.subscribe(console.log);
  }

}
