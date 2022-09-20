import { Component, ElementRef, OnInit, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { asapScheduler, range } from 'rxjs';

@Component({
  selector: 'app-asap-scheduler',
  templateUrl: './asap-scheduler.component.html',
  styleUrls: ['./asap-scheduler.component.css']
})
export class AsapSchedulerComponent implements OnInit {
  innerText='';
  @ViewChild('number', {static: true})  nu!:ElementRef; //=document.getElementById('number') as HTMLElement;
  numbers$=range(1,100000,asapScheduler);
  constructor(private renderer:Renderer2) { }

  ngOnInit() {
    this.numbers$.subscribe(val=>{
        console.log(val);
        this.innerText+=val+' ';
        this.renderer.setProperty(this.nu.nativeElement,'innerHTML','<b>'+val.toString()+'</b>')
        //this.nu.nativeElement.html='<b>'+val.toString()+'</b>';
    });
  }

}
