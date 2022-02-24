import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, interval, Subject } from 'rxjs';

@Component({
  selector: 'app-subject-behaviour',
  templateUrl: './subject-behaviour.component.html',
  styleUrls: ['./subject-behaviour.component.css']
})
export class SubjectBehaviourComponent implements OnInit {

  // subject=new Subject();
  subject=new BehaviorSubject(0); 
  constructor() { }

  ngOnInit(): void {
    const obs=interval(2000);
    // const sub1=obs.subscribe(val=>{
    //   console.log("1st Subscriber:",+val);      
    // });
    // setTimeout(() => {
    //   const sub2=obs.subscribe(val=>{
    //     console.log("2nd Subscriber:",+val);        
    //   });
    //   sub1.unsubscribe();
    //   setTimeout(() => {
    //     sub2.unsubscribe();
    //   }, 4000);
    // }, 7000);
    obs.subscribe(val=>{
      this.subject.next(val);
    });

    this.subject.subscribe(data=>{
      console.log("1st:"+data);      
    })

    setTimeout(() => {
      this.subject.subscribe(data=>{
        console.log("2nd:"+data);        
      });
    }, 5000);

  }

}
