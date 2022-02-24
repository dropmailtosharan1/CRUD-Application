import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-course-details',
  template: `
  <br>
    <h2> You are selected the course with ID = {{courseId}} </h2>
    <nav> <a (click)="toPrevious()"> Previous </a> 
    <a (click)="toNext()"> Next </a>
    <a (click)="goBack()"> Back </a> </nav> <br> <br>
    <nav> <a (click)="showDuration()"> Course Duration </a>
    <a (click)="showFee()"> Course Fee Structure </a> </nav>
    <router-outlet></router-outlet>
  `,
  styles: [
  ]
})
export class CourseDetailsComponent implements OnInit {

  courseId: any = [];
  // courseName:any=[];
  constructor(private _activatedRoute: ActivatedRoute, private _router:Router) { }

  ngOnInit(): void {
    // let cId = parseInt(this._activatedRoute.snapshot.params['id']);
    // this.courseId = cId;
    // let cNm = parseInt(this._activatedRoute.snapshot.params['name']);
    // this.courseName = cNm;
    this._activatedRoute.paramMap.subscribe((ParamMap:any)=>{
      let id=parseInt(ParamMap.get('id'));
      this.courseId=id;
    })
  }
  toPrevious(){
    let previousId=this.courseId-1
    this._router.navigate(['/course-list',previousId]);
  }
  toNext(){
    let nextId=this.courseId+1
    this._router.navigate(['/course-list',nextId]);
  }
  goBack(){
    let selectedId=this.courseId ? this.courseId : null;
    // this._router.navigate(['/course',{id:selectedId}]);
    this._router.navigate(['../',{id:selectedId}],{relativeTo:this._activatedRoute});
  }
  showDuration(){
    this._router.navigate(['duration'],{relativeTo:this._activatedRoute});
  }
  showFee(){
    this._router.navigate(['fee'],{relativeTo:this._activatedRoute});
  }


}
