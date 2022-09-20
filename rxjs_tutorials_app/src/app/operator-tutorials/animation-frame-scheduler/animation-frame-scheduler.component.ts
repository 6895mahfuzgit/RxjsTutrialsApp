import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { animationFrameScheduler, interval, takeWhile } from 'rxjs';

@Component({
  selector: 'app-animation-frame-scheduler',
  templateUrl: './animation-frame-scheduler.component.html',
  styleUrls: ['./animation-frame-scheduler.component.css']
})
export class AnimationFrameSchedulerComponent implements OnInit {

  @ViewChild('frame', {static: true})  frame!:ElementRef; //=document.getElementById('number') as HTMLElement;
  
  interval$=interval(0,animationFrameScheduler).pipe(takeWhile(v=>v<=300));

  constructor(private renderer:Renderer2) { }

  ngOnInit() {
   this.interval$.subscribe(data=>{
    this.renderer.setStyle(this.frame.nativeElement, 'transform', `translate3d(0,${data}px,0)`);
   });

  }

}
