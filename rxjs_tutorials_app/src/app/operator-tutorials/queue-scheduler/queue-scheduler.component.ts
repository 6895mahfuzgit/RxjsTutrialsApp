import { Component, OnInit } from '@angular/core';
import { queueScheduler } from 'rxjs';

@Component({
  selector: 'app-queue-scheduler',
  templateUrl: './queue-scheduler.component.html',
  styleUrls: ['./queue-scheduler.component.css']
})
export class QueueSchedulerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    queueScheduler.schedule(() => {
      queueScheduler.schedule(() =>{
        queueScheduler.schedule(() =>{
          queueScheduler.schedule(() =>{
            console.log('child 3');
          });
          console.log('child 2');
        });
        console.log('child 1');
      });
      console.log('Parent');
    });
  }

}