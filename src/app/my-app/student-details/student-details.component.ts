import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-details',
  template: `
   <h2> Student-Course List Components </h2>  &nbsp; &nbsp; &nbsp;
   <!--  <h2> {{errMsg}} </h2>
    <ul *ngFor="let x of students">
    <li>{{x.id}} - {{x.name}} - {{x.course}} </li>
    </ul> -->
    <ul class="items"> 
    <li (click)="onSelect(x)" [class.selected]="isSelected(x)" *ngFor="let x of course"> 
      <span class="badge">{{x.id}}</span> <span> {{x.name}} </span>
    </li>
    </ul>

  `,
  styles: [`
    h2{ color:blue; text-align:center; font-family:play; font-weight:bold; font-size:30px }
     li { padding: 15px 20px; text-decoration: none; margin-top: 10px; font-weight:bold;
      background-color: #eee; border-radius: 4px; margin-right: 1180px; cursor: pointer; }
    .badge  {color:white; background-color:blue; border:1px solid red;}
  `]
})
export class StudentDetailsComponent implements OnInit {

  students:any=[
    //{"id":1,"name":"Rama","course":"Angular"},{"id":2,"name":"Sita","course":"React"},
    //{"id":3,"name":"Lakshman","course":"Vue"},{"id":4,"name":"Ravana","course":"Bootstrap"}
  ];
  course:any=[
    {"id":1,"name":"Angular"},{"id":2,"name":"React"},{"id":3,"name":"Vue"},
    {"id":4,"name":"Bootstrap"},{"id":5,"name":"HTML"},{"id":6,"name":"JavaScript"}
  ];
  errMsg:any;
  selectedId: any;
  constructor(private _stdService:StudentService, private _router:Router, private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((ParamMap:any)=>{
      let id=parseInt(ParamMap.get('id'));
      this.selectedId=id;
    })
    // this.students=
    // this._stdService.getStudents().subscribe(data=>
    // this.students=data, error=>this.errMsg=error ); 
  }
  onSelect(x:any){
    // this._router.navigate(['/course',x.id]);
    this._router.navigate([x.id],{relativeTo:this._activatedRoute});
  }
  isSelected(x: any){
    
  }
}
